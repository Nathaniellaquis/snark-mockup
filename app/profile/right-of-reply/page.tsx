"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, BellIcon, MessageSquareIcon, StarIcon, ImageIcon, CheckCircleIcon, InfoIcon, HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon } from "lucide-react";

export default function RightOfReplyPage() {
  const router = useRouter();
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [responseText, setResponseText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock posts about the user
  const postsAboutMe = [
    {
      id: 1,
      author: "Sarah Martinez",
      category: "Housing",
      rating: 2,
      preview: "Michael was my roommate for 8 months. He was often late on rent and had cleanliness issues...",
      postedAt: "2 weeks ago",
      hasMyResponse: true,
      myResponseStatus: "published"
    },
    {
      id: 2,
      author: "James Taylor",
      category: "Professional",
      rating: 5,
      preview: "Worked with John on a freelance project. Excellent communication and delivered quality work...",
      postedAt: "1 month ago",
      hasMyResponse: false,
      myResponseStatus: null
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      category: "Community",
      rating: 4,
      preview: "John has been a great member of our rock climbing club. Always encouraging and helpful...",
      postedAt: "3 days ago",
      hasMyResponse: false,
      myResponseStatus: null
    }
  ];

  const handleSubmitResponse = () => {
    setShowSuccess(true);
    setShowResponseModal(false);
    // In real app, would submit to backend
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
          <div className="flex items-center gap-3 mb-3">
            <MessageSquareIcon className="w-10 h-10 text-violet-400" />
            <h1 className="text-6xl font-black tracking-tighter text-white">
              Right of Reply
            </h1>
          </div>
          <p className="text-xl text-gray-500">Respond to posts about you</p>
        </div>

        {/* Info Banner */}
        <Alert variant="snark" className="mb-8">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            You get ONE FREE response to each post about you. Your response appears alongside the original post and is moderated to the same standard.
          </AlertDescription>
        </Alert>

        {/* Success Message */}
        {showSuccess && (
          <Alert variant="snarkSuccess" className="mb-8">
            <CheckCircleIcon className="h-4 w-4" />
            <AlertDescription>
              Response submitted successfully! It will be reviewed by moderators and published within 24-48 hours.
            </AlertDescription>
          </Alert>
        )}

        {/* Posts About You */}
        <Card variant="snarkGlassBold">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">Posts About You ({postsAboutMe.length})</h3>

            {postsAboutMe.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquareIcon className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <p className="text-xl text-gray-500">No posts about you yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {postsAboutMe.map((post) => (
                  <div
                    key={post.id}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="snarkViolet" className="text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-4 h-4 ${
                                  i < post.rating
                                    ? "fill-current text-yellow-400"
                                    : "text-white/10"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          By <span className="text-white font-bold">{post.author}</span> • {post.postedAt}
                        </p>
                        <p className="text-gray-300">{post.preview}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <Button
                        variant="snarkGhost"
                        size="lg"
                        onClick={() => router.push(`/post/${post.id}`)}
                      >
                        View Full Post
                      </Button>
                      {post.hasMyResponse ? (
                        <Badge variant="snarkGreen" className="px-4 py-2">
                          ✓ You Responded
                        </Badge>
                      ) : (
                        <Button
                          variant="snark"
                          size="lg"
                          onClick={() => {
                            setSelectedPost(post);
                            setShowResponseModal(true);
                          }}
                        >
                          <MessageSquareIcon className="w-5 h-5 mr-2" />
                          Add Your Response
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Create Response Modal */}
      <Dialog open={showResponseModal} onOpenChange={setShowResponseModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black tracking-tighter mb-2">
              Your Right of Reply
            </DialogTitle>
            <p className="text-gray-400">
              Responding to post by {selectedPost?.author}
            </p>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <Alert variant="snark">
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                This is your ONE FREE response to this post. Your response will be moderated and appear alongside the original post.
              </AlertDescription>
            </Alert>

            <div>
              <Label variant="snark" className="mb-2 block">Your Response</Label>
              <Textarea
                variant="snarkGlass"
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                rows={12}
                placeholder="Share your perspective, add context, or correct inaccuracies. Be respectful and factual."
                className="text-lg"
              />
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-600">Min 50 characters</span>
                <span className={responseText.length >= 50 ? "text-green-400 font-bold" : "text-gray-600"}>
                  {responseText.length}
                </span>
              </div>
            </div>

            <div>
              <Label variant="snark" className="mb-2 block">Add Evidence (Optional)</Label>
              <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-violet-500/50 transition-colors cursor-pointer">
                <ImageIcon className="w-12 h-12 mx-auto mb-3 text-gray-600" />
                <p className="text-sm text-gray-400">Click to upload supporting evidence</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowResponseModal(false)}>
                Cancel
              </Button>
              <Button
                variant="snark"
                size="xl"
                className="flex-1"
                onClick={handleSubmitResponse}
                disabled={responseText.length < 50}
              >
                Submit Response
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
