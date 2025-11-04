"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, BellIcon, EditIcon, MapPinIcon, StarIcon, CalendarIcon, BarChart3Icon, HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon } from "lucide-react";

export default function MyPublicProfilePage() {
  const router = useRouter();
  const [showEditModal, setShowEditModal] = useState(false);
  const [aboutText, setAboutText] = useState("I'm a software engineer and outdoor enthusiast based in San Francisco. Always happy to connect with people in the tech and climbing communities.");
  const [contextTags, setContextTags] = useState(["Stanford 2019", "SF Bay Area", "Tech Industry", "Rock Climbing"]);
  const [city, setCity] = useState("San Francisco");
  const [state, setState] = useState("CA");
  const [activeTab, setActiveTab] = useState<"timeline" | "stats">("timeline");

  // Mock claimed entity
  const claimedEntity = {
    fullName: "John Doe",
    aggregateRating: 4.5,
    postCount: 12,
    isVerified: true
  };

  const handleSaveProfile = () => {
    setShowEditModal(false);
    // In real app, would save to backend
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
      <div className="pt-16 pb-24 max-w-4xl mx-auto px-4 md:pb-8">
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
            My Public Profile
          </h1>
          <p className="text-xl text-gray-500">Manage how others see you</p>
        </div>

        {/* Profile Header */}
        <Card variant="snarkGlassBold" className="mb-8">
          <CardContent className="pt-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl font-black text-white">{claimedEntity.fullName}</h2>
                  <Badge variant="snarkGreen" className="text-sm">
                    ✓ VERIFIED OWNER
                  </Badge>
                </div>

                {/* Context Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {contextTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm font-bold text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <MapPinIcon className="w-5 h-5" />
                  <span className="text-lg">{city}, {state}</span>
                </div>

                {/* About */}
                <p className="text-gray-300 leading-relaxed mb-6">{aboutText}</p>

                {/* Stats */}
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-6 h-6 fill-current text-green-400" />
                    <span className="text-2xl font-black text-green-400">{claimedEntity.aggregateRating}</span>
                    <span className="text-gray-500">/ 5.0</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="font-black text-white text-xl">{claimedEntity.postCount}</span> posts
                  </div>
                </div>
              </div>

              <Button variant="snark" size="lg" onClick={() => setShowEditModal(true)}>
                <EditIcon className="w-5 h-5 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview Notice */}
        <div className="p-6 bg-violet-500/10 border border-violet-500/30 rounded-2xl mb-8">
          <p className="text-sm text-violet-100">
            💡 This is how others see your public profile. Posts about you are visible but cannot be removed. Use Right of Reply to add your perspective.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Button variant="snark" size="xl" onClick={() => router.push(`/entity/${claimedEntity.fullName}`)}>
            View Public Profile
          </Button>
          <Button variant="snarkGhost" size="xl" onClick={() => router.push('/profile/right-of-reply')}>
            Manage Responses
          </Button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black tracking-tighter mb-2">
              Edit Your Public Profile
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div>
              <Label variant="snark" className="mb-2 block">About</Label>
              <Textarea
                variant="snarkGlass"
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                rows={4}
                placeholder="Tell others about yourself..."
                className="text-lg"
              />
              <p className="text-xs text-gray-600 mt-2">Max 500 characters</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label variant="snark" className="mb-2 block">City</Label>
                <Input
                  variant="snark"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <Label variant="snark" className="mb-2 block">State</Label>
                <Input
                  variant="snark"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            <div>
              <Label variant="snark" className="mb-2 block">Context Tags</Label>
              <div className="flex flex-wrap gap-2 p-4 bg-white/5 border border-white/10 rounded-xl min-h-[100px]">
                {contextTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm font-bold text-violet-300 h-fit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Context tags help others find you in relevant communities
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowEditModal(false)}>
                Cancel
              </Button>
              <Button variant="snark" size="xl" className="flex-1" onClick={handleSaveProfile}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bottom Nav - Mobile */}
      <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 z-50 md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-around h-20 px-4">
          <button onClick={() => router.push('/feed')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <HomeIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">HOME</span>
          </button>
          <button onClick={() => router.push('/search')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <SearchIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">SEARCH</span>
          </button>

          <button onClick={() => router.push('/feed')} className="flex flex-col items-center gap-2 group -mt-8">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform">
              <PlusIcon className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-black text-fuchsia-400">POST</span>
          </button>

          <button onClick={() => router.push('/trending')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <TrendingUpIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">TRENDING</span>
          </button>
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] font-black text-violet-400">PROFILE</span>
          </button>
        </div>
      </div>

      {/* Desktop FAB */}
      <button
        onClick={() => router.push('/feed')}
        className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40 group"
      >
        <PlusIcon className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
