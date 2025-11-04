"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { SearchIcon, PlusIcon, FilterIcon, BellIcon, HomeIcon, TrendingUpIcon, UserIcon, ImageIcon, AlertTriangleIcon, InfoIcon, SparklesIcon } from "lucide-react";

export default function FeedPage() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [createStep, setCreateStep] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [narrative, setNarrative] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [confirmFirsthand, setConfirmFirsthand] = useState(false);
  const [confirmGuidelines, setConfirmGuidelines] = useState(false);
  const [confirmModeration, setConfirmModeration] = useState(false);

  const stories = [
    {
      id: 1,
      author: "Sarah M.",
      verdict: "RUN AWAY",
      subject: "Mike C.",
      situation: "Roommate from Hell",
      tldr: "Never cleaned. Never paid rent. Avoided me for 2 months straight.",
      vibe: "negative",
      rating: 1,
      context: "Berkeley • Fall '24",
      image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&h=600&fit=crop&q=80",
      reactions: { fire: 234, facts: 89, yikes: 156 }
    },
    {
      id: 2,
      author: "James K.",
      verdict: "HIGHLY RECOMMEND",
      subject: "Alex R.",
      situation: "Actually a good human",
      tldr: "Dated for 4 months. Respectful, honest, mature. Ended well when paths diverged.",
      vibe: "positive",
      rating: 5,
      context: "SF • Summer '24",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop&q=80",
      reactions: { fire: 567, facts: 234, yikes: 12 }
    },
    {
      id: 3,
      author: "Emily D.",
      verdict: "MAJOR RED FLAG",
      subject: "Taylor M.",
      situation: "Group project ghost",
      tldr: "Missed EVERY deadline. Never showed up. Had to do all their work myself.",
      vibe: "negative",
      rating: 1,
      context: "Stanford • Spring '24",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      reactions: { fire: 891, facts: 445, yikes: 678 }
    }
  ];

  const resetCreate = () => {
    setCreateStep(1);
    setSelectedPerson("");
    setSearchQuery("");
    setCategory("");
    setRating(0);
    setNarrative("");
    setStartDate("");
    setEndDate("");
    setTags([]);
    setTagInput("");
    setUploadedFiles([]);
    setConfirmFirsthand(false);
    setConfirmGuidelines(false);
    setConfirmModeration(false);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (uploadedFiles.length + files.length <= 5) {
      setUploadedFiles([...uploadedFiles, ...files.map(f => ({ name: f.name, size: f.size }))]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  // Mock entity search results
  const mockEntities = [
    { id: 1, name: "Sarah Johnson", context: "Stanford 2019, SF Bay Area" },
    { id: 2, name: "Michael Chen", context: "UC Berkeley 2020, East Bay" },
    { id: 3, name: "Emily Rodriguez", context: "UCLA 2021, Los Angeles" }
  ];

  const searchResults = searchQuery.trim()
    ? mockEntities.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen bg-black">
      {/* Minimal Top Bar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SnarkLogoSimple size={28} />
            <span className="text-xl font-black tracking-tighter text-white">SNARK</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => window.location.href = '/notifications'} className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
              <BellIcon className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-fuchsia-500 rounded-full" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-sm">
              JD
            </button>
          </div>
        </div>
      </nav>

      {/* Main Feed - Instagram/TikTok Style */}
      <div className="pt-16 pb-24 max-w-2xl mx-auto px-4 md:pb-8">
        {/* Stories Header */}
        <div className="py-8 flex items-end justify-between">
          <div>
            <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">
              The tea
            </h1>
            <p className="text-xl text-gray-500">Real experiences. Real people.</p>
          </div>
          <Button
            variant="snarkGhost"
            size="lg"
            onClick={() => setShowFilters(true)}
            className="mb-1"
          >
            <FilterIcon className="w-5 h-5" />
            Filter
          </Button>
        </div>

        {/* Feed Cards - Story Style */}
        <div className="space-y-8">
          {stories.map((story) => (
            <div key={story.id} className="group cursor-pointer" onClick={() => window.location.href = `/post/${story.id}`}>
              {/* Story Card */}
              <div className="relative overflow-hidden rounded-3xl bg-neutral-950 border-2 border-white/5 hover:border-violet-500/30 transition-all duration-500">
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
                      {story.verdict}
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

      {/* Bottom Nav - Mobile & Desktop Optimized */}
      <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 z-50 md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-around h-20 px-4">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] font-black text-violet-400">HOME</span>
          </button>
          <button onClick={() => window.location.href = '/search'} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <SearchIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">SEARCH</span>
          </button>

          {/* Create Post Button - Center of bottom nav */}
          <button
            onClick={() => {
              resetCreate();
              setShowCreatePost(true);
            }}
            className="flex flex-col items-center gap-2 group -mt-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform">
              <PlusIcon className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-black text-fuchsia-400">POST</span>
          </button>

          <button onClick={() => window.location.href = '/trending'} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <TrendingUpIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">TRENDING</span>
          </button>
          <button onClick={() => window.location.href = '/profile'} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <UserIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">PROFILE</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Action Button - Hidden on mobile */}
      <button
        onClick={() => {
          resetCreate();
          setShowCreatePost(true);
        }}
        className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 lg:w-20 lg:h-20 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40 group"
      >
        <PlusIcon className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Create Modal - Simplified & Beautiful */}
      <Dialog open={showCreatePost} onOpenChange={(open) => {
        setShowCreatePost(open);
        if (!open) resetCreate();
      }}>
        <DialogContent variant="snarkGlass" className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-5xl font-black tracking-tighter mb-2">
              {createStep === 6 ? "Post Submitted! 🎉" : "Spill the tea ☕"}
            </DialogTitle>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-lg">
                {createStep === 1 && "Who is this about?"}
                {createStep === 2 && "Category & Rating"}
                {createStep === 3 && "Tell your story"}
                {createStep === 4 && "Add evidence (optional)"}
                {createStep === 5 && "Review & confirm"}
                {createStep === 6 && "Success!"}
              </p>
              <Badge variant="snarkViolet" className="px-4 py-2">
                Step {createStep}/6
              </Badge>
            </div>
          </DialogHeader>

          <div className="space-y-8 pt-6">
            <Progress variant="snarkGlow" value={(createStep / 6) * 100} className="h-2.5" />

            {/* Step 1: Entity Selection */}
            {createStep === 1 && (
              <div className="space-y-6">
                <Alert variant="snarkInfo">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    You are posting as <strong>John Doe</strong>. Your real name will be visible as the author.
                  </AlertDescription>
                </Alert>

                <div className="text-center py-6">
                  <div className="text-7xl mb-6">🔍</div>
                  <h3 className="text-3xl font-black mb-3">Who is this post about?</h3>
                  <p className="text-gray-400">Search for a person or create new</p>
                </div>

                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    variant="snarkGlass"
                    placeholder="Search for a person..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-14 pl-12 text-lg"
                  />
                </div>

                {searchQuery && searchResults.length > 0 && (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {searchResults.map((entity) => (
                      <button
                        key={entity.id}
                        onClick={() => {
                          setSelectedPerson(entity.name);
                          setSearchQuery("");
                        }}
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-left"
                      >
                        <p className="font-bold text-white">{entity.name}</p>
                        <p className="text-sm text-gray-500">{entity.context}</p>
                      </button>
                    ))}
                  </div>
                )}

                {selectedPerson && (
                  <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1">Selected person:</p>
                    <p className="text-xl font-black text-white">{selectedPerson}</p>
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="p-6 border-2 border-dashed border-white/20 rounded-xl text-center">
                    <p className="text-gray-400 mb-3">Person not found</p>
                    <Button variant="snarkGhost" size="sm" onClick={() => setSelectedPerson(searchQuery)}>
                      Create "{searchQuery}"
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Category & Rating */}
            {createStep === 2 && (
              <div className="space-y-8">
                {selectedPerson && (
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                    <p className="text-sm text-gray-500 mb-1">Posting about:</p>
                    <p className="text-2xl font-black text-white">{selectedPerson}</p>
                  </div>
                )}

                <div className="text-center py-6">
                  <div className="text-7xl mb-6">🏷️</div>
                  <h3 className="text-3xl font-black mb-3">What's the situation?</h3>
                  <p className="text-gray-400">Select a category</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: "💝", label: "Dating", value: "dating" },
                    { emoji: "🏠", label: "Housing", value: "roommate" },
                    { emoji: "🎓", label: "Campus", value: "campus" },
                    { emoji: "💸", label: "Marketplace", value: "marketplace" },
                    { emoji: "💼", label: "Professional", value: "professional" }
                  ].map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`p-6 rounded-2xl border-2 transition-all text-center ${
                        category === cat.value
                          ? "border-violet-500 bg-violet-500/20"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="text-4xl mb-2">{cat.emoji}</div>
                      <p className="font-black text-sm">{cat.label}</p>
                    </button>
                  ))}
                </div>

                {category && (
                  <>
                    <div className="text-center py-4">
                      <div className="text-6xl mb-4">⭐</div>
                      <h3 className="text-2xl font-black mb-2">How was your experience?</h3>
                    </div>
                    <div className="flex justify-center gap-3 py-6 bg-white/5 rounded-2xl">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`text-6xl transition-all hover:scale-125 ${
                            star <= rating
                              ? "text-yellow-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                              : "text-white/10 hover:text-white/30"
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    <p className="text-center text-lg font-bold text-gray-400">
                      {rating === 0 ? "Tap to rate" :
                       rating === 1 ? "🚫 Do not recommend" :
                       rating === 2 ? "👎 Not great" :
                       rating === 3 ? "😐 It was fine" :
                       rating === 4 ? "👍 Pretty good" :
                       "✨ Absolutely recommend"}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Step 3: Narrative & Tags */}
            {createStep === 3 && (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="text-7xl mb-6">📝</div>
                  <h3 className="text-3xl font-black mb-3">Tell your story</h3>
                  <p className="text-gray-400">What happened? Be specific.</p>
                </div>

                <Textarea
                  variant="snarkGlass"
                  placeholder="Describe what happened, when, and why it matters. Be specific but protect privacy (no addresses, phone numbers, etc.)"
                  rows={10}
                  value={narrative}
                  onChange={(e) => setNarrative(e.target.value)}
                  className="text-lg leading-relaxed resize-none"
                />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Min 50 characters, Max 2000</span>
                  <span className={narrative.length >= 50 ? "text-green-400 font-bold" : "text-gray-600"}>
                    {narrative.length} / 2000
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <Label variant="snark" className="mb-2 block">Start Date</Label>
                    <Input
                      variant="snark"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label variant="snark" className="mb-2 block">End Date (Optional)</Label>
                    <Input
                      variant="snark"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label variant="snark" className="mb-2 block">Context Tags (Max 5)</Label>
                  <div className="flex gap-2">
                    <Input
                      variant="snark"
                      placeholder="e.g., Stanford 2019, SF Bay Area"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      className="h-12"
                    />
                    <Button variant="snarkGhost" size="lg" onClick={handleAddTag} disabled={tags.length >= 5}>
                      Add
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm font-bold text-violet-300 flex items-center gap-2"
                        >
                          {tag}
                          <button onClick={() => handleRemoveTag(idx)} className="text-white/50 hover:text-white">
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-600 mt-2">
                    Context tags help others find relevant posts. Include shared communities, locations, or timeframes.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Evidence Upload */}
            {createStep === 4 && (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="text-7xl mb-6">📎</div>
                  <h3 className="text-3xl font-black mb-3">Add Evidence</h3>
                  <p className="text-gray-400">Optional - Strengthen your post with proof</p>
                </div>

                <Alert variant="snarkInfo">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    All metadata (EXIF) will be automatically removed for privacy. Max 5 files, 10MB each.
                  </AlertDescription>
                </Alert>

                <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-violet-500/50 transition-colors">
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                    <p className="text-lg font-bold text-white mb-2">Click to upload files</p>
                    <p className="text-sm text-gray-500">JPG, PNG, or PDF</p>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-3">
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                        <div>
                          <p className="font-bold text-white">{file.name}</p>
                          <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button onClick={() => handleRemoveFile(idx)} className="text-red-400 hover:text-red-300">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {createStep === 5 && (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="text-7xl mb-6">✅</div>
                  <h3 className="text-3xl font-black mb-3">Review Your Post</h3>
                  <p className="text-gray-400">Make sure everything looks good</p>
                </div>

                <Card variant="snarkSolid">
                  <CardContent className="pt-6 space-y-4">
                    <div className="text-center pb-4 border-b border-white/10">
                      <div className="text-5xl mb-3">
                        {category === "dating" ? "💝" :
                         category === "roommate" ? "🏠" :
                         category === "campus" ? "🎓" :
                         category === "professional" ? "💼" : "💸"}
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Posting about:</p>
                      <h4 className="text-2xl font-black text-white">{selectedPerson}</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Category</p>
                        <p className="font-bold text-white capitalize">{category}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Rating</p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={`text-xl ${star <= rating ? "text-yellow-400" : "text-white/10"}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      {startDate && (
                        <div>
                          <p className="text-gray-500 mb-1">Timeframe</p>
                          <p className="font-bold text-white">{startDate} {endDate && `to ${endDate}`}</p>
                        </div>
                      )}
                      {tags.length > 0 && (
                        <div>
                          <p className="text-gray-500 mb-1">Tags</p>
                          <div className="flex flex-wrap gap-1">
                            {tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-violet-500/20 rounded text-xs text-violet-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-gray-500 mb-2 text-sm">Your Story</p>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {narrative || "No narrative provided"}
                      </p>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-500 mb-2 text-sm">Evidence ({uploadedFiles.length} files)</p>
                        <div className="flex flex-wrap gap-2">
                          {uploadedFiles.map((file, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">
                              {file.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Alert variant="snarkWarning">
                  <AlertTriangleIcon className="h-4 w-4" />
                  <AlertDescription>
                    This post will be published under your name: <strong>John Doe</strong>. Your real name will be visible to all users.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                    <input
                      type="checkbox"
                      id="firsthand"
                      checked={confirmFirsthand}
                      onChange={(e) => setConfirmFirsthand(e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="firsthand" className="text-sm text-gray-300 cursor-pointer">
                      I confirm this is a firsthand account of my experience
                    </label>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                    <input
                      type="checkbox"
                      id="guidelines"
                      checked={confirmGuidelines}
                      onChange={(e) => setConfirmGuidelines(e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="guidelines" className="text-sm text-gray-300 cursor-pointer">
                      I have reviewed the content guidelines and this post complies
                    </label>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                    <input
                      type="checkbox"
                      id="moderation"
                      checked={confirmModeration}
                      onChange={(e) => setConfirmModeration(e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="moderation" className="text-sm text-gray-300 cursor-pointer">
                      I understand this post will be moderated and may be reviewed before publishing
                    </label>
                  </div>
                </div>

                <p className="text-xs text-gray-600">
                  High-risk posts (based on ML analysis) will be sent to human moderators for review before publishing.
                </p>
              </div>
            )}

            {/* Step 6: Success */}
            {createStep === 6 && (
              <div className="space-y-6 text-center py-8">
                <div className="text-8xl mb-6 animate-bounce-slow">✅</div>
                <h3 className="text-4xl font-black mb-3">Post Submitted Successfully!</h3>
                <p className="text-xl text-gray-400 max-w-md mx-auto">
                  Your post has been published and is now visible on the platform.
                </p>

                <div className="p-6 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 rounded-2xl max-w-lg mx-auto">
                  <p className="text-sm font-bold text-white mb-3">Your post will appear on:</p>
                  <ul className="text-sm text-gray-300 space-y-2 text-left">
                    <li>• {selectedPerson}'s profile page</li>
                    <li>• Home feeds for users in relevant contexts</li>
                    <li>• Search results</li>
                  </ul>
                </div>

                <Alert variant="snarkInfo">
                  <InfoIcon className="h-4 w-4" />
                  <AlertDescription>
                    The subject ({selectedPerson}) has the right to respond. Their response (if any) will appear alongside your post.
                  </AlertDescription>
                </Alert>

                <div className="flex gap-3 pt-6">
                  <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => {
                    resetCreate();
                    setShowCreatePost(false);
                  }}>
                    Close
                  </Button>
                  <Button variant="snark" size="xl" className="flex-1" onClick={resetCreate}>
                    Create Another Post
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation - Not shown on success screen */}
            {createStep < 6 && (
              <div className="flex gap-4 pt-6">
                {createStep > 1 && (
                  <Button variant="snarkGhost" size="2xl" className="flex-1" onClick={() => setCreateStep(createStep - 1)}>
                    ← Back
                  </Button>
                )}
                {createStep === 4 ? (
                  <Button variant="snarkGhost" size="2xl" className="flex-1" onClick={() => setCreateStep(5)}>
                    Skip Evidence →
                  </Button>
                ) : null}
                <Button
                  variant="snark"
                  size="2xl"
                  className="flex-1"
                  onClick={() => {
                    if (createStep < 5) {
                      setCreateStep(createStep + 1);
                    } else if (createStep === 5) {
                      setCreateStep(6); // Go to success screen
                    }
                  }}
                  disabled={
                    (createStep === 1 && !selectedPerson) ||
                    (createStep === 2 && (!category || !rating)) ||
                    (createStep === 3 && narrative.length < 50) ||
                    (createStep === 5 && (!confirmFirsthand || !confirmGuidelines || !confirmModeration))
                  }
                >
                  {createStep === 5 ? "Submit Post 🚀" : "Continue →"}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Filters Modal - Clean & Simple */}
      <Dialog open={showFilters} onOpenChange={setShowFilters}>
        <DialogContent variant="snarkGlass" className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black tracking-tighter mb-2">
              Filter
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8 pt-4">
            <div className="space-y-4">
              <Label variant="snark" className="text-lg">Show me...</Label>
              <div className="grid grid-cols-2 gap-3">
                {["💝 Dating", "🏠 Roommates", "🎓 Campus", "💸 Money"].map((cat) => (
                  <button
                    key={cat}
                    className="p-5 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all font-bold text-left"
                  >
                    <input type="checkbox" className="mr-2" defaultChecked />
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label variant="snark" className="text-lg">Ratings</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Any", emoji: "⭐" },
                  { label: "Good", emoji: "👍" },
                  { label: "Bad", emoji: "👎" }
                ].map((opt) => (
                  <button
                    key={opt.label}
                    className="p-4 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-violet-500/50 transition-all text-center"
                  >
                    <div className="text-3xl mb-2">{opt.emoji}</div>
                    <p className="text-sm font-bold">{opt.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowFilters(false)}>
                Reset
              </Button>
              <Button variant="snark" size="xl" className="flex-1" onClick={() => setShowFilters(false)}>
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
