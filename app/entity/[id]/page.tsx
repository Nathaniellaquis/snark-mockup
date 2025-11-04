"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, MapPinIcon, StarIcon, BellIcon, HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon, BarChart3Icon, CalendarIcon } from "lucide-react";

export default function EntityProfilePage() {
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState<"timeline" | "stats">("timeline");
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [confirmClaim, setConfirmClaim] = useState(false);
  const [claimStatus, setClaimStatus] = useState<"none" | "pending" | "approved">("none");

  // Mock entity data
  const entity = {
    id: params.id,
    fullName: "Sarah Johnson",
    contextTags: ["Stanford 2019", "SF Bay Area", "Tech Industry"],
    city: "San Francisco",
    state: "CA",
    country: "USA",
    aggregateRating: 4.2,
    postCount: 8,
    isVerified: true,
    isClaimed: false,
    claimedBy: null,
    aboutText: null
  };

  // Mock posts data
  const mockPosts = [
    {
      id: 1,
      author: "Michael Chen",
      category: "Dating",
      rating: 5,
      narrativePreview: "Had an amazing experience dating Sarah for 6 months. She was honest, communicative, and respectful throughout...",
      startDate: "2023-01-15",
      endDate: "2023-07-20",
      tags: ["Stanford", "Healthy Communication", "Respectful"],
      publishedAt: "2 months ago",
      viewCount: 234
    },
    {
      id: 2,
      author: "Emily Rodriguez",
      category: "Housing",
      rating: 4,
      narrativePreview: "Sarah was my roommate for a year. Generally clean, paid rent on time, but could be noisy late at night...",
      startDate: "2022-09-01",
      endDate: "2023-08-31",
      tags: ["SF Bay Area", "Roommate", "Reliable"],
      publishedAt: "1 month ago",
      viewCount: 156
    },
    {
      id: 3,
      author: "James Taylor",
      category: "Professional",
      rating: 5,
      narrativePreview: "Hired Sarah for a freelance project. Delivered ahead of schedule, excellent communication, highly recommend...",
      startDate: "2023-03-10",
      endDate: "2023-04-15",
      tags: ["Tech Industry", "Freelance", "Reliable"],
      publishedAt: "3 weeks ago",
      viewCount: 89
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-green-400";
    if (rating >= 3) return "text-yellow-400";
    return "text-red-400";
  };

  const getRatingBgColor = (rating: number) => {
    if (rating >= 4) return "bg-green-500/10 border-green-500/30";
    if (rating >= 3) return "bg-yellow-500/10 border-yellow-500/30";
    return "bg-red-500/10 border-red-500/30";
  };

  const handleClaim = () => {
    setClaimStatus("pending");
    setShowClaimModal(false);
    // In real app, would submit claim to backend
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
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
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
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 mt-6"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-bold">Back</span>
        </button>

        {/* Profile Header */}
        <Card variant="snarkGlassBold" className="mb-8">
          <CardContent className="pt-8">
            <div className="space-y-6">
              {/* Name and Badges */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-5xl font-black text-white tracking-tight">
                    {entity.fullName}
                  </h1>
                  {entity.isVerified && (
                    <Badge variant="snarkGreen" className="text-sm">
                      ✓ VERIFIED
                    </Badge>
                  )}
                  {entity.isClaimed && entity.claimedBy && (
                    <Badge variant="snarkViolet" className="text-sm">
                      CLAIMED
                    </Badge>
                  )}
                  {claimStatus === "pending" && (
                    <Badge variant="snarkFuchsia" className="text-sm">
                      CLAIM PENDING
                    </Badge>
                  )}
                  {claimStatus === "approved" && (
                    <Badge variant="snarkGreen" className="text-sm">
                      ✓ CLAIM APPROVED
                    </Badge>
                  )}
                </div>

                {/* Context Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {entity.contextTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm font-bold text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPinIcon className="w-5 h-5" />
                  <span className="text-lg">
                    {entity.city}, {entity.state}, {entity.country}
                  </span>
                </div>

                {/* About Text (if claimed) */}
                {entity.aboutText && (
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {entity.aboutText}
                  </p>
                )}

                {/* Stats */}
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <StarIcon className={`w-6 h-6 fill-current ${getRatingColor(entity.aggregateRating)}`} />
                    <span className={`text-2xl font-black ${getRatingColor(entity.aggregateRating)}`}>
                      {entity.aggregateRating.toFixed(1)}
                    </span>
                    <span className="text-gray-500">/ 5.0</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="font-black text-white text-xl">{entity.postCount}</span> post{entity.postCount !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* Claim Button */}
              {!entity.isClaimed && claimStatus === "none" && (
                <Button
                  variant="snark"
                  size="xl"
                  onClick={() => setShowClaimModal(true)}
                  className="w-full md:w-auto"
                >
                  Claim This Profile
                </Button>
              )}

              {claimStatus === "pending" && (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-100 text-sm">
                    ⏳ Your claim is under review. You'll be notified when it's processed (typically 1-3 business days).
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all ${
              activeTab === "timeline"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
            Timeline
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all ${
              activeTab === "stats"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <BarChart3Icon className="w-5 h-5" />
            Stats
          </button>
        </div>

        {/* Timeline Tab */}
        {activeTab === "timeline" && (
          <div className="space-y-6">
            {mockPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-7xl mb-6">📝</div>
                <h2 className="text-3xl font-black mb-3 text-white">No posts yet</h2>
                <p className="text-xl text-gray-500">Be the first to share an experience</p>
              </div>
            ) : (
              mockPosts.map((post) => (
                <Card
                  key={post.id}
                  variant="snarkGlass"
                  className="hover:border-violet-500/50 transition-all cursor-pointer group"
                  onClick={() => router.push(`/post/${post.id}`)}
                >
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="snarkViolet" className="text-xs">
                              {post.category}
                            </Badge>
                            <div className={`flex items-center gap-1 px-3 py-1 rounded-full border ${getRatingBgColor(post.rating)}`}>
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < post.rating
                                      ? `fill-current ${getRatingColor(post.rating)}`
                                      : "text-white/10"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">
                            By <span className="text-white font-bold">{post.author}</span> • {post.publishedAt}
                          </p>
                        </div>
                      </div>

                      {/* Preview */}
                      <p className="text-gray-300 leading-relaxed">
                        {post.narrativePreview}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-white/5">
                        <span>
                          {post.startDate} to {post.endDate}
                        </span>
                        <span>{post.viewCount} views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === "stats" && (
          <div className="space-y-8">
            {/* Overall Stats */}
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-black mb-6">Overall Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-sm text-gray-500 mb-2">Total Posts</p>
                    <p className="text-4xl font-black text-white">{entity.postCount}</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-sm text-gray-500 mb-2">Average Rating</p>
                    <p className={`text-4xl font-black ${getRatingColor(entity.aggregateRating)}`}>
                      {entity.aggregateRating.toFixed(1)}
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-sm text-gray-500 mb-2">Date Range</p>
                    <p className="text-lg font-black text-white">2022 - 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* By Category */}
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-black mb-6">By Category</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="font-bold">💝 Dating</span>
                    <span className="text-2xl font-black text-violet-400">3</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="font-bold">🏠 Housing</span>
                    <span className="text-2xl font-black text-fuchsia-400">2</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="font-bold">💼 Professional</span>
                    <span className="text-2xl font-black text-purple-400">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating Distribution */}
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-black mb-6">Rating Distribution</h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = mockPosts.filter(p => p.rating === stars).length;
                    const percentage = (count / mockPosts.length) * 100;
                    return (
                      <div key={stars} className="flex items-center gap-4">
                        <div className="flex items-center gap-1 w-20">
                          <span className="font-bold">{stars}</span>
                          <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                        </div>
                        <div className="flex-1 h-8 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="font-bold w-12 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Claim Profile Modal */}
      <Dialog open={showClaimModal} onOpenChange={setShowClaimModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black tracking-tighter mb-2">
              Claim This Profile
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div className="p-6 bg-violet-500/10 border border-violet-500/30 rounded-2xl">
              <p className="text-lg mb-2">
                You are claiming the profile for: <span className="font-black text-violet-300">{entity.fullName}</span>
              </p>
              <p className="text-gray-400">
                Your verified name: <span className="font-bold text-white">John Doe</span>
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-black">Why Claim Your Profile?</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-1">✓</span>
                  Respond to posts about you (Right of Reply)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-1">✓</span>
                  Add context and information to your profile
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-1">✓</span>
                  Manage your public information
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
              <Checkbox
                variant="snark"
                id="confirm"
                checked={confirmClaim}
                onCheckedChange={(checked) => setConfirmClaim(checked as boolean)}
              />
              <Label variant="snark" htmlFor="confirm" className="cursor-pointer">
                I confirm this is my profile
              </Label>
            </div>

            <p className="text-xs text-gray-500">
              Claims are manually reviewed and typically processed within 24 hours
            </p>

            <div className="flex gap-4">
              <Button
                variant="snarkGhost"
                size="xl"
                className="flex-1"
                onClick={() => setShowClaimModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="snark"
                size="xl"
                className="flex-1"
                onClick={handleClaim}
                disabled={!confirmClaim}
              >
                Submit Claim
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 z-50">
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

          {/* Create Post Button - Center */}
          <button
            onClick={() => router.push('/feed')}
            className="flex flex-col items-center gap-2 group -mt-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform">
              <PlusIcon className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-black text-fuchsia-400">POST</span>
          </button>

          <button onClick={() => router.push('/profile')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <UserIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">PROFILE</span>
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
