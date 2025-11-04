"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, BellIcon, AlertTriangleIcon, TrashIcon, XIcon } from "lucide-react";

export default function DeleteAccountPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [understood, setUnderstood] = useState(false);

  const isValid = password && confirmText === "DELETE" && understood;

  const handleDelete = () => {
    if (!isValid) return;

    // In real app, would delete account
    alert("Account deletion initiated. In a real app, this would permanently delete your account.");
    router.push('/');
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
          <div className="text-7xl mb-6">⚠️</div>
          <h1 className="text-5xl font-black tracking-tighter mb-3 text-red-400">
            Delete Account
          </h1>
          <p className="text-xl text-gray-500">This action is permanent and cannot be undone</p>
        </div>

        {/* Warning Banner */}
        <Alert variant="snarkWarning" className="mb-8">
          <AlertTriangleIcon className="h-5 w-5" />
          <AlertDescription className="text-lg font-bold">
            This action is permanent and cannot be undone
          </AlertDescription>
        </Alert>

        {/* Consequences */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">What happens when you delete your account?</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <XIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Your user account will be permanently deleted</p>
                  <p className="text-sm text-gray-400">All your personal data will be erased</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <XIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Posts you've written will remain</p>
                  <p className="text-sm text-gray-400">But your name will be replaced with 'Deleted User'</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <XIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Claimed entity profiles will be unclaimed</p>
                  <p className="text-sm text-gray-400">Returned to unverified status</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <XIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Email, phone, and personal data permanently removed</p>
                  <p className="text-sm text-gray-400">Cannot be recovered</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <XIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">You cannot recover your account or data</p>
                  <p className="text-sm text-gray-400">This action is irreversible</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confirmation Form */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">Confirm Account Deletion</h3>

            <div className="space-y-6">
              {/* Password */}
              <div>
                <Label variant="snark" className="mb-2 block">Enter Your Password</Label>
                <Input
                  variant="snarkGlass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Current password"
                  className="h-14"
                />
              </div>

              {/* Type DELETE */}
              <div>
                <Label variant="snark" className="mb-2 block">Type "DELETE" to confirm</Label>
                <Input
                  variant="snarkGlass"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="Type DELETE in all caps"
                  className="h-14"
                />
                {confirmText && confirmText !== "DELETE" && (
                  <p className="text-sm text-red-400 mt-2">Please type exactly: DELETE</p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <input
                  type="checkbox"
                  id="understood"
                  checked={understood}
                  onChange={(e) => setUnderstood(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="understood" className="text-sm text-gray-300 cursor-pointer">
                  I understand this action is <strong className="text-red-400">permanent and irreversible</strong>. All my data will be deleted and cannot be recovered.
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Warning */}
        <Alert variant="snarkWarning" className="mb-8">
          <AlertTriangleIcon className="h-5 w-5" />
          <AlertDescription>
            <strong>Are you absolutely sure?</strong> This cannot be undone. Consider deactivating your account instead by contacting support.
          </AlertDescription>
        </Alert>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="snark" size="2xl" className="flex-1" onClick={() => router.push('/profile')}>
            Cancel - Keep My Account
          </Button>
          <Button
            variant="snarkGhost"
            size="2xl"
            className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/30"
            onClick={handleDelete}
            disabled={!isValid}
          >
            <TrashIcon className="w-5 h-5 mr-2" />
            Delete Forever
          </Button>
        </div>
      </div>
    </div>
  );
}
