"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, BellIcon, LockIcon, CheckIcon, XIcon, AlertTriangleIcon } from "lucide-react";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength += 25;
    if (/[A-Z]/.test(pass)) strength += 25;
    if (/[0-9]/.test(pass)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 25;
    return strength;
  };

  const strength = getPasswordStrength(newPassword);
  const strengthLabel = strength === 0 ? "" : strength < 50 ? "Weak" : strength < 75 ? "Medium" : "Strong";
  const strengthColor = strength < 50 ? "bg-red-500" : strength < 75 ? "bg-yellow-500" : "bg-green-500";

  const passwordRequirements = [
    { label: "Min 8 characters", met: newPassword.length >= 8 },
    { label: "At least 1 uppercase letter", met: /[A-Z]/.test(newPassword) },
    { label: "At least 1 number", met: /[0-9]/.test(newPassword) },
    { label: "At least 1 special character", met: /[^A-Za-z0-9]/.test(newPassword) }
  ];

  const isValid =
    currentPassword &&
    passwordRequirements.every(r => r.met) &&
    newPassword === confirmPassword &&
    newPassword !== currentPassword;

  const handleSubmit = () => {
    if (!isValid) return;

    setError("");
    // In real app, would validate current password and update
    alert("Password updated successfully!");
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SnarkLogoSimple size={28} />
            <span className="text-xl font-black tracking-tighter text-white">SNARK</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/notifications')} className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
              <BellIcon className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-fuchsia-500 rounded-full" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-sm">
              JD
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 pb-8 max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => router.push('/profile')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 mt-6"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-bold">Back to Profile</span>
        </button>

        {/* Page Header */}
        <div className="py-8 text-center">
          <div className="text-7xl mb-6">🔐</div>
          <h1 className="text-5xl font-black tracking-tighter mb-3 text-white">
            Change Password
          </h1>
          <p className="text-xl text-gray-500">Update your account password</p>
        </div>

        {/* Form */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <div className="space-y-6">
              {/* Current Password */}
              <div>
                <Label variant="snark" className="mb-2 block">Current Password</Label>
                <div className="relative">
                  <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    variant="snarkGlass"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="h-14 pl-12"
                    placeholder="Enter current password"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                {/* New Password */}
                <div className="mb-6">
                  <Label variant="snark" className="mb-2 block">New Password</Label>
                  <div className="relative">
                    <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      variant="snarkGlass"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="h-14 pl-12"
                      placeholder="Enter new password"
                    />
                  </div>

                  {/* Password Strength */}
                  {newPassword && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Password strength:</span>
                        <span className={`text-sm font-bold ${
                          strengthLabel === "Strong" ? "text-green-400" :
                          strengthLabel === "Medium" ? "text-yellow-400" : "text-red-400"
                        }`}>
                          {strengthLabel}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${strengthColor} transition-all duration-300`}
                          style={{ width: `${strength}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <Label variant="snark" className="mb-2 block">Confirm New Password</Label>
                  <div className="relative">
                    <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      variant="snarkGlass"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-14 pl-12"
                      placeholder="Re-enter new password"
                    />
                  </div>
                  {confirmPassword && newPassword !== confirmPassword && (
                    <p className="text-sm text-red-400 mt-2">Passwords don't match</p>
                  )}
                </div>
              </div>

              {/* Requirements */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-sm font-black text-gray-400 mb-3">YOUR PASSWORD MUST HAVE:</p>
                <div className="space-y-2">
                  {passwordRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {req.met ? (
                        <CheckIcon className="w-4 h-4 text-green-400" />
                      ) : (
                        <XIcon className="w-4 h-4 text-gray-600" />
                      )}
                      <span className={`text-sm ${req.met ? 'text-green-400' : 'text-gray-500'}`}>
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Errors */}
              {error && (
                <Alert variant="snarkWarning">
                  <AlertTriangleIcon className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="snarkGhost" size="2xl" className="flex-1" onClick={() => router.push('/profile')}>
            Cancel
          </Button>
          <Button
            variant="snark"
            size="2xl"
            className="flex-1"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Update Password
          </Button>
        </div>
      </div>
    </div>
  );
}
