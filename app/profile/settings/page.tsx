"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, BellIcon, MailIcon, PhoneIcon, AtSignIcon, InfoIcon, ToggleLeftIcon, ToggleRightIcon } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [handle, setHandle] = useState("@johndoe");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState<"public" | "community">("public");

  const handleSave = () => {
    // In real app, would save to backend
    alert("Settings saved successfully!");
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
      <div className="pt-16 pb-8 max-w-3xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => router.push('/profile')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 mt-6"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-bold">Back to Profile</span>
        </button>

        {/* Page Header */}
        <div className="py-8">
          <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">
            Settings
          </h1>
          <p className="text-xl text-gray-500">Manage your account preferences</p>
        </div>

        {/* Account Information */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">Account Information</h3>

            <Alert variant="snark" className="mb-6">
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                Changing email or phone requires re-verification
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              {/* Name (Read-only) */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label variant="snark" className="mb-2 block">First Name</Label>
                  <Input variant="snark" value="John" disabled className="h-12 opacity-50" />
                </div>
                <div>
                  <Label variant="snark" className="mb-2 block">Last Name</Label>
                  <Input variant="snark" value="Doe" disabled className="h-12 opacity-50" />
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Need to change your name? <a href="#" className="text-violet-400 underline">Contact support</a>
              </p>

              {/* Email */}
              <div>
                <Label variant="snark" className="mb-2 block">Email</Label>
                <div className="relative">
                  <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    variant="snarkGlass"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <Label variant="snark" className="mb-2 block">Phone Number</Label>
                <div className="relative">
                  <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    variant="snarkGlass"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 pl-12"
                  />
                </div>
              </div>

              {/* Handle */}
              <div>
                <Label variant="snark" className="mb-2 block">Handle (Optional)</Label>
                <div className="relative">
                  <AtSignIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    variant="snarkGlass"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@username"
                    className="h-14 pl-12"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  3-20 alphanumeric characters, starts with @
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">Notification Preferences</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                <div>
                  <p className="font-bold text-white mb-1">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`w-14 h-8 rounded-full transition-all ${
                    emailNotifications ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' : 'bg-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                    emailNotifications ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                <div>
                  <p className="font-bold text-white mb-1">SMS Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via text message</p>
                </div>
                <button
                  onClick={() => setSmsNotifications(!smsNotifications)}
                  className={`w-14 h-8 rounded-full transition-all ${
                    smsNotifications ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' : 'bg-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                    smsNotifications ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                <div>
                  <p className="font-bold text-white mb-1">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive in-app notifications</p>
                </div>
                <button
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`w-14 h-8 rounded-full transition-all ${
                    pushNotifications ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' : 'bg-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                    pushNotifications ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">Privacy Settings</h3>

            <div className="space-y-4">
              <Label variant="snark" className="mb-4 block text-lg">Profile Visibility</Label>

              <button
                onClick={() => setProfileVisibility("public")}
                className={`w-full p-5 border-2 rounded-xl transition-all text-left ${
                  profileVisibility === "public"
                    ? 'border-violet-500 bg-violet-500/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 mt-1 flex items-center justify-center ${
                    profileVisibility === "public" ? 'border-violet-500' : 'border-white/30'
                  }`}>
                    {profileVisibility === "public" && (
                      <div className="w-3 h-3 rounded-full bg-violet-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-black text-white mb-1">Public</p>
                    <p className="text-sm text-gray-400">Anyone can see posts you've written</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setProfileVisibility("community")}
                className={`w-full p-5 border-2 rounded-xl transition-all text-left ${
                  profileVisibility === "community"
                    ? 'border-violet-500 bg-violet-500/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 mt-1 flex items-center justify-center ${
                    profileVisibility === "community" ? 'border-violet-500' : 'border-white/30'
                  }`}>
                    {profileVisibility === "community" && (
                      <div className="w-3 h-3 rounded-full bg-violet-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-black text-white mb-1">Community Only</p>
                    <p className="text-sm text-gray-400">Only people in relevant communities can see your posts</p>
                  </div>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="snarkGhost" size="2xl" className="flex-1" onClick={() => router.push('/profile')}>
            Cancel
          </Button>
          <Button variant="snark" size="2xl" className="flex-1" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
