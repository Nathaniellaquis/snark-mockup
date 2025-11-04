"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon, BellIcon, SettingsIcon, LogOutIcon, ShieldCheckIcon, MailIcon, PhoneIcon, CalendarIcon, EditIcon } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"account" | "activity" | "public" | "replies">("account");
  const hasClaimedProfile = true; // Mock - user has claimed an entity

  // Mock user data
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    handle: "@johndoe",
    dateOfBirth: "1995-06-15",
    age: 29,
    memberSince: "January 2024",
    status: "active",
    isVerified: true
  };

  // Mock user's posts
  const userPosts = [
    {
      id: 1,
      subject: "Sarah Johnson",
      category: "Dating",
      rating: 5,
      preview: "Had an amazing experience dating Sarah for 6 months. She was honest, communicative...",
      postedAt: "2 weeks ago",
      status: "published",
      views: 234
    },
    {
      id: 2,
      subject: "Mike Chen",
      category: "Housing",
      rating: 2,
      preview: "Roommate situation was challenging. Communication issues and cleanliness problems...",
      postedAt: "1 month ago",
      status: "published",
      views: 156
    },
    {
      id: 3,
      subject: "Emily Rodriguez",
      category: "Professional",
      rating: 4,
      preview: "Great experience working with Emily on a freelance project. Professional and timely...",
      postedAt: "3 days ago",
      status: "under_review",
      views: 12
    }
  ];

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
        {/* Page Header */}
        <div className="py-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
              <span className="text-3xl font-black text-white">
                {user.firstName[0]}{user.lastName[0]}
              </span>
            </div>
            <div>
              <h1 className="text-5xl font-black tracking-tighter text-white">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-lg text-gray-500">{user.handle}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveTab("account")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all ${
              activeTab === "account"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <UserIcon className="w-5 h-5" />
            My Account
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all ${
              activeTab === "activity"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <EditIcon className="w-5 h-5" />
            My Activity
          </button>
          {hasClaimedProfile && (
            <>
              <button
                onClick={() => router.push('/profile/my-public-profile')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all bg-white/5 text-gray-400 hover:bg-white/10"
              >
                <ShieldCheckIcon className="w-5 h-5" />
                My Public Profile
              </button>
              <button
                onClick={() => router.push('/profile/right-of-reply')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all bg-white/5 text-gray-400 hover:bg-white/10"
              >
                <EditIcon className="w-5 h-5" />
                Right of Reply
              </button>
            </>
          )}
        </div>

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="space-y-6">
            {/* Profile Information */}
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black">Profile Information</h3>
                  {user.isVerified && (
                    <Badge variant="snarkGreen" className="text-sm">
                      <ShieldCheckIcon className="w-4 h-4 mr-1" />
                      IDENTITY VERIFIED
                    </Badge>
                  )}
                </div>

                <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-lg mb-6">
                  <p className="text-sm text-violet-100">
                    💡 Your real name is visible on all posts and comments you create
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-gray-400 mb-2 block">First Name</label>
                      <Input variant="snark" value={user.firstName} disabled className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-400 mb-2 block">Last Name</label>
                      <Input variant="snark" value={user.lastName} disabled className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-400 mb-2 block">Email</label>
                    <div className="relative">
                      <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input variant="snark" value={user.email} className="h-12 pl-12" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-400 mb-2 block">Phone Number</label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input variant="snark" value={user.phone} className="h-12 pl-12" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-400 mb-2 block">Handle (Optional)</label>
                    <Input variant="snark" value={user.handle} className="h-12" />
                  </div>

                  <p className="text-xs text-gray-500">
                    Need to change your name? <a href="#" className="text-violet-400 underline">Contact support</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Account Details */}
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-black mb-6">Account Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-bold text-white">Member Since</p>
                        <p className="text-sm text-gray-500">{user.memberSince}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <UserIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-bold text-white">Age</p>
                        <p className="text-sm text-gray-500">{user.age} years old</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="font-bold text-white">Account Status</p>
                        <p className="text-sm text-green-400 capitalize">{user.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-black mb-6">Settings</h3>
                <div className="space-y-3">
                  <Button variant="snark" size="xl" className="w-full justify-start" onClick={() => router.push('/profile/settings')}>
                    <SettingsIcon className="w-5 h-5 mr-3" />
                    Account Settings
                  </Button>
                  <Button variant="snarkGhost" size="xl" className="w-full justify-start" onClick={() => router.push('/profile/change-password')}>
                    <EditIcon className="w-5 h-5 mr-3" />
                    Change Password
                  </Button>
                  <Button variant="snarkGhost" size="xl" className="w-full justify-start" onClick={() => router.push('/profile/delete-account')}>
                    <EditIcon className="w-5 h-5 mr-3" />
                    Delete Account
                  </Button>
                  <Button variant="snarkGhost" size="xl" className="w-full justify-start text-red-400 hover:text-red-300" onClick={() => router.push('/')}>
                    <LogOutIcon className="w-5 h-5 mr-3" />
                    Log Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <div className="space-y-6">
            <Card variant="snarkGlassBold">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-black mb-6">My Posts ({userPosts.length})</h3>

                {userPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-xl text-gray-500">You haven't created any posts yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
                        onClick={() => router.push(`/post/${post.id}`)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="snarkViolet" className="text-xs">
                              {post.category}
                            </Badge>
                            {post.status === "published" ? (
                              <Badge variant="snarkGreen" className="text-xs">
                                ✓ PUBLISHED
                              </Badge>
                            ) : (
                              <Badge variant="snarkFuchsia" className="text-xs">
                                ⏳ UNDER REVIEW
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-lg ${i < post.rating ? "text-yellow-400" : "text-white/10"}`}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="font-black text-xl text-white mb-2">
                          Review of {post.subject}
                        </p>
                        <p className="text-gray-400 mb-4">{post.preview}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Posted {post.postedAt}</span>
                          {post.status === "published" && (
                            <span>{post.views} views</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

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
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
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
