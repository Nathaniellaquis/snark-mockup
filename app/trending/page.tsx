"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon, BellIcon, FlameIcon, TrendingUpIcon as TrendingIcon, SparklesIcon } from "lucide-react";

export default function TrendingPage() {
  const router = useRouter();

  // Mock trending posts
  const trendingPosts = [
    {
      id: 1,
      rank: 1,
      author: "Emily D.",
      subject: "Taylor M.",
      situation: "Group project ghost",
      tldr: "Missed EVERY deadline. Never showed up. Had to do all their work myself.",
      vibe: "negative",
      rating: 1,
      context: "Stanford • Spring '24",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      reactions: { fire: 891, facts: 445, yikes: 678 },
      trending: true
    },
    {
      id: 2,
      rank: 2,
      author: "James K.",
      subject: "Alex R.",
      situation: "Actually a good human",
      tldr: "Dated for 4 months. Respectful, honest, mature. Ended well when paths diverged.",
      vibe: "positive",
      rating: 5,
      context: "SF • Summer '24",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop&q=80",
      reactions: { fire: 567, facts: 234, yikes: 12 },
      trending: true
    },
    {
      id: 3,
      rank: 3,
      author: "Sarah M.",
      subject: "Mike C.",
      situation: "Roommate from Hell",
      tldr: "Never cleaned. Never paid rent. Avoided me for 2 months straight.",
      vibe: "negative",
      rating: 1,
      context: "Berkeley • Fall '24",
      image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&h=600&fit=crop&q=80",
      reactions: { fire: 234, facts: 89, yikes: 156 },
      trending: true
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
      <div className="pt-16 pb-24 max-w-2xl mx-auto px-4 md:pb-8">
        {/* Page Header */}
        <div className="py-8">
          <div className="flex items-center gap-3 mb-3">
            <FlameIcon className="w-12 h-12 text-orange-500 fill-current" />
            <h1 className="text-6xl font-black tracking-tighter text-white">
              Trending
            </h1>
          </div>
          <p className="text-xl text-gray-500">The most talked about experiences right now</p>
        </div>

        {/* Trending Feed */}
        <div className="space-y-8">
          {trendingPosts.map((story) => (
            <div key={story.id} className="group relative">
              {/* Trending Badge */}
              <div className="absolute -top-3 -left-3 z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/50">
                  <span className="text-2xl font-black text-white">#{story.rank}</span>
                </div>
              </div>

              {/* Story Card */}
              <div className="relative overflow-hidden rounded-3xl bg-neutral-950 border-2 border-orange-500/30 hover:border-orange-500/50 transition-all duration-500">
                {/* Hero Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.situation}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Verdict Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className={`inline-block px-6 py-3 rounded-2xl font-black text-2xl tracking-tight mb-3 ${
                      story.vibe === "positive"
                        ? "bg-green-500 text-black"
                        : "bg-red-500 text-white"
                    }`}>
                      {story.vibe === "positive" ? "HIGHLY RECOMMEND" : "RUN AWAY"}
                    </div>
                    <h2 className="text-4xl font-black text-white mb-2 tracking-tight">
                      {story.situation}
                    </h2>
                    <p className="text-lg text-gray-200 font-medium">
                      {story.tldr}
                    </p>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`px-5 py-3 rounded-2xl backdrop-blur-xl font-black text-3xl ${
                      story.rating >= 4 ? "bg-green-500/90 text-black" :
                      story.rating === 3 ? "bg-yellow-500/90 text-black" :
                      "bg-red-500/90 text-white"
                    }`}>
                      {story.rating}★
                    </div>
                  </div>

                  {/* Trending Indicator */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full">
                      <TrendingIcon className="w-4 h-4 text-white" />
                      <span className="text-sm font-black text-white">TRENDING</span>
                    </div>
                  </div>
                </div>

                {/* Post Details */}
                <div className="p-6 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        <span className="text-white font-bold">{story.author}</span> reviewed{" "}
                        <span className="text-white font-bold">{story.subject}</span>
                      </p>
                      <p className="text-xs text-gray-600">{story.context}</p>
                    </div>
                    <Badge variant="snarkGreen" className="text-[10px]">
                      ✓ VERIFIED
                    </Badge>
                  </div>

                  {/* Reactions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-violet-500/20 rounded-2xl transition-all group/btn">
                      <span className="text-2xl">🔥</span>
                      <span className="text-sm font-black text-gray-400 group-hover/btn:text-white">
                        {story.reactions.fire}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-fuchsia-500/20 rounded-2xl transition-all group/btn">
                      <span className="text-2xl">💯</span>
                      <span className="text-sm font-black text-gray-400 group-hover/btn:text-white">
                        {story.reactions.facts}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-yellow-500/20 rounded-2xl transition-all group/btn">
                      <span className="text-2xl">😬</span>
                      <span className="text-sm font-black text-gray-400 group-hover/btn:text-white">
                        {story.reactions.yikes}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

          {/* Create Post Button */}
          <button
            onClick={() => router.push('/feed')}
            className="flex flex-col items-center gap-2 group -mt-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform">
              <PlusIcon className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-black text-fuchsia-400">POST</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] font-black text-violet-400">TRENDING</span>
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
