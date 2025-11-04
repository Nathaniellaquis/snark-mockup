"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, StarIcon, BellIcon, HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon, MapPinIcon, CalendarIcon, EyeIcon, FlagIcon, ShareIcon, ImageIcon, ChevronLeftIcon, ChevronRightIcon, XIcon, MessageSquareIcon, AlertTriangleIcon } from "lucide-react";

export default function PostDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showReplies, setShowReplies] = useState(false);

  // Mock post data
  const post = {
    id: params.id,
    author: {
      firstName: "Sarah",
      lastName: "Martinez",
      fullName: "Sarah Martinez"
    },
    entity: {
      fullName: "Michael Chen",
      contextTags: ["UC Berkeley 2020", "East Bay", "Rock Climbing Club"],
      city: "Berkeley",
      state: "CA"
    },
    category: "Housing",
    overallRating: 2,
    narrative: "I lived with Michael as a roommate for 8 months from January to August 2023. At first, things seemed fine - he was friendly during the initial meeting and seemed responsible. However, issues began within the first month.\n\nThe main problems were:\n1. Cleanliness: He rarely cleaned up after himself in shared spaces. Dishes would pile up for days, and I often had to clean them myself just to be able to use the kitchen.\n2. Rent payments: While he never completely missed rent, he was late 4 out of 8 months, which put me in an awkward position with our landlord.\n3. Noise: He would have friends over late on weeknights without giving me a heads up, making it difficult for me to sleep before early classes.\n\nI tried to address these issues multiple times through calm conversations, but he would apologize and then repeat the same behaviors. Eventually, I decided not to renew the lease and found a new place.\n\nHe's not a terrible person, but as a roommate, he was inconsiderate and unreliable. I wouldn't recommend living with him unless you're okay with taking on extra responsibilities.",
    startDate: "2023-01-15",
    endDate: "2023-08-31",
    tags: ["UC Berkeley", "Student Housing", "East Bay", "Off-Campus"],
    publishedAt: "2 weeks ago",
    viewCount: 432,
    postId: "POST-12345",
    evidence: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80",
        caption: "Kitchen mess after 3 days"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80",
        caption: "Shared living room condition"
      }
    ],
    hasReply: true,
    replyCount: 1
  };

  const replies = [
    {
      id: 1,
      responder: "Michael Chen",
      isSubject: true,
      createdAt: "1 week ago",
      text: "I appreciate Sarah sharing her perspective, and I want to add some context. I was going through a difficult time during those months - I was dealing with family issues and struggling to keep up with my senior year coursework. That's not an excuse for being a less-than-ideal roommate, but it's important context.\n\nI acknowledge that I was late on rent a few times and could have been better about cleaning. I wish Sarah had communicated more directly about how much these things were bothering her earlier on, as I would have made more effort to improve.\n\nI've since learned a lot about being a better communicator and housemate. I now live with two other people and have had no issues for the past year. I'm grateful for the learning experience.",
      hasEvidence: false
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

        {/* Post Header */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Posted by <button onClick={() => router.push('/profile')} className="text-white font-bold hover:text-violet-400">{post.author.fullName}</button>
                </p>
                <p className="text-xs text-gray-600">{post.publishedAt} • Post ID: {post.postId}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="snarkViolet" className="text-xs">
                  {post.category}
                </Badge>
                <Badge variant="snarkGreen" className="text-xs">
                  ✓ VERIFIED
                </Badge>
              </div>
            </div>

            {/* Entity Info */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">About:</p>
                  <button
                    onClick={() => router.push(`/entity/${post.entity.fullName}`)}
                    className="text-3xl font-black text-white hover:text-violet-400 transition-colors mb-3"
                  >
                    {post.entity.fullName}
                  </button>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.entity.contextTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-bold text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPinIcon className="w-4 h-4" />
                    <span className="text-sm">{post.entity.city}, {post.entity.state}</span>
                  </div>
                </div>
                <div className={`px-6 py-4 rounded-2xl border-2 ${getRatingBgColor(post.overallRating)}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-6 h-6 ${
                          i < post.overallRating
                            ? `fill-current ${getRatingColor(post.overallRating)}`
                            : "text-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-3xl font-black text-center ${getRatingColor(post.overallRating)}`}>
                    {post.overallRating}.0
                  </p>
                </div>
              </div>
            </div>

            {/* Timeframe */}
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <CalendarIcon className="w-5 h-5" />
              <span className="font-bold">
                {post.startDate} to {post.endDate}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Narrative */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">The Story</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {post.narrative}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tags */}
        {post.tags.length > 0 && (
          <Card variant="snarkGlassBold" className="mb-6">
            <CardContent className="pt-8">
              <h3 className="text-xl font-black mb-4">Context Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Evidence */}
        {post.evidence.length > 0 && (
          <Card variant="snarkGlassBold" className="mb-6">
            <CardContent className="pt-8">
              <h3 className="text-xl font-black mb-4">Evidence ({post.evidence.length} files)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {post.evidence.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setGalleryIndex(idx);
                      setShowGallery(true);
                    }}
                    className="relative aspect-square rounded-xl overflow-hidden group"
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4">
                All location and metadata have been removed for privacy
              </p>
            </CardContent>
          </Card>
        )}

        {/* Engagement */}
        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-500">
                <EyeIcon className="w-5 h-5" />
                <span className="font-bold">{post.viewCount} views</span>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="snarkGhost" size="lg">
                  <ShareIcon className="w-5 h-5 mr-2" />
                  Share
                </Button>
                <Button variant="snarkGhost" size="lg" className="text-red-400 hover:text-red-300">
                  <FlagIcon className="w-5 h-5 mr-2" />
                  Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right of Reply */}
        {post.hasReply && (
          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <MessageSquareIcon className="w-6 h-6 text-violet-400" />
                  <h3 className="text-2xl font-black">Right of Reply</h3>
                </div>
                <Badge variant="snarkViolet" className="text-xs">
                  {post.replyCount} Response{post.replyCount !== 1 ? 's' : ''}
                </Badge>
              </div>

              <Alert variant="snark" className="mb-6">
                <AlertTriangleIcon className="h-4 w-4" />
                <AlertDescription>
                  The subject has exercised their Right of Reply. Both perspectives are shown for fairness.
                </AlertDescription>
              </Alert>

              <Button
                variant="snark"
                size="xl"
                className="w-full"
                onClick={() => setShowReplies(true)}
              >
                View {post.replyCount} Response{post.replyCount !== 1 ? 's' : ''} from {post.entity.fullName}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Gallery Modal */}
      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              Evidence ({galleryIndex + 1} of {post.evidence.length})
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
              <img
                src={post.evidence[galleryIndex].url}
                alt={post.evidence[galleryIndex].caption}
                className="w-full h-full object-contain"
              />

              {/* Navigation */}
              {galleryIndex > 0 && (
                <button
                  onClick={() => setGalleryIndex(galleryIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
              )}
              {galleryIndex < post.evidence.length - 1 && (
                <button
                  onClick={() => setGalleryIndex(galleryIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              )}
            </div>

            {post.evidence[galleryIndex].caption && (
              <p className="text-gray-400 text-center">
                {post.evidence[galleryIndex].caption}
              </p>
            )}

            <Alert variant="snark">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertDescription>
                All location and metadata have been removed for privacy
              </AlertDescription>
            </Alert>

            <div className="flex gap-3">
              <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowGallery(false)}>
                Close
              </Button>
              <Button variant="snark" size="xl" className="flex-1">
                Download
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Replies Modal */}
      <Dialog open={showReplies} onOpenChange={setShowReplies}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black">
              Right of Reply Responses
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            {replies.map((reply) => (
              <Card key={reply.id} variant="snarkSolid">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xl font-black text-white">{reply.responder}</p>
                        {reply.isSubject && (
                          <Badge variant="snarkViolet" className="text-xs">
                            SUBJECT'S RESPONSE
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{reply.createdAt}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {reply.text}
                  </p>

                  {reply.hasEvidence && (
                    <Button variant="snarkGhost" size="lg" className="mt-4">
                      <ImageIcon className="w-5 h-5 mr-2" />
                      View Evidence
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}

            <Button variant="snark" size="xl" className="w-full" onClick={() => setShowReplies(false)}>
              Close
            </Button>
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

          <button onClick={() => router.push('/trending')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <TrendingUpIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">TRENDING</span>
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
