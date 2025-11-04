"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ShieldIcon, AlertTriangleIcon, CheckIcon, XIcon, ArrowUpIcon, FlagIcon, StarIcon, BellIcon, EyeIcon, ClockIcon, EditIcon, InfoIcon } from "lucide-react";

export default function ModerationPage() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showEditRequestModal, setShowEditRequestModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [editNotes, setEditNotes] = useState("");

  // Mock moderation queue
  const moderationQueue = [
    {
      id: 1,
      type: "post",
      author: "Jane Smith",
      subject: "Alex Johnson",
      category: "Dating",
      rating: 1,
      preview: "Had a terrible experience dating Alex. They were dishonest and manipulative...",
      riskScore: 85,
      riskLevel: "high",
      flaggedReasons: ["Potentially defamatory", "Emotional language"],
      submittedAt: "10 minutes ago",
      status: "pending"
    },
    {
      id: 2,
      type: "response",
      author: "Michael Chen",
      relatedPost: "Post by Sarah Martinez",
      preview: "I want to provide context about Sarah's review. During that time I was dealing with...",
      riskScore: 35,
      riskLevel: "medium",
      flaggedReasons: ["Personal information mentioned"],
      submittedAt: "45 minutes ago",
      status: "pending"
    },
    {
      id: 3,
      type: "post",
      author: "David Lee",
      subject: "Emma Wilson",
      category: "Housing",
      rating: 5,
      preview: "Emma was an excellent roommate. Clean, respectful, and always paid rent on time...",
      riskScore: 15,
      riskLevel: "low",
      flaggedReasons: [],
      submittedAt: "2 hours ago",
      status: "pending"
    }
  ];

  const getRiskColor = (level: string) => {
    if (level === "high") return "text-red-400";
    if (level === "medium") return "text-yellow-400";
    return "text-green-400";
  };

  const getRiskBgColor = (level: string) => {
    if (level === "high") return "bg-red-500/10 border-red-500/30";
    if (level === "medium") return "bg-yellow-500/10 border-yellow-500/30";
    return "bg-green-500/10 border-green-500/30";
  };

  const handleApprove = (item: any) => {
    if (confirm("Approve this content for publication?")) {
      // In real app, would update backend
      alert("Content approved!");
      setShowReviewModal(false);
    }
  };

  const handleReject = () => {
    if (!rejectReason) return;
    // In real app, would update backend
    alert(`Content rejected. Reason: ${rejectReason}`);
    setShowRejectModal(false);
    setShowReviewModal(false);
  };

  const handleRequestEdit = () => {
    if (!editNotes) return;
    // In real app, would update backend
    alert("Edit request sent to author");
    setShowEditRequestModal(false);
    setShowReviewModal(false);
  };

  const handleEscalate = (item: any) => {
    if (confirm("Escalate this item to senior moderator?")) {
      // In real app, would update backend
      alert("Item escalated");
      setShowReviewModal(false);
    }
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
            <Badge variant="snarkFuchsia" className="px-3 py-1.5">
              {moderationQueue.length} Pending
            </Badge>
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-sm">
              MOD
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 pb-8 max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="py-8">
          <div className="flex items-center gap-3 mb-3">
            <ShieldIcon className="w-10 h-10 text-violet-400" />
            <h1 className="text-6xl font-black tracking-tighter text-white">
              Moderation Queue
            </h1>
          </div>
          <p className="text-xl text-gray-500">Review flagged content for approval</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500 mb-1">Pending</p>
              <p className="text-3xl font-black text-white">{moderationQueue.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500 mb-1">High Risk</p>
              <p className="text-3xl font-black text-red-400">
                {moderationQueue.filter(i => i.riskLevel === "high").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500 mb-1">Avg Wait Time</p>
              <p className="text-3xl font-black text-yellow-400">32m</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500 mb-1">Today</p>
              <p className="text-3xl font-black text-green-400">47</p>
            </CardContent>
          </Card>
        </div>

        {/* Queue */}
        <Card variant="snarkGlassBold">
          <CardContent className="pt-8">
            <div className="space-y-4">
              {moderationQueue.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="snarkViolet" className="text-xs uppercase">
                          {item.type}
                        </Badge>
                        {item.category && (
                          <Badge variant="snarkGhost" className="text-xs">
                            {item.category}
                          </Badge>
                        )}
                        <div className={`px-3 py-1 rounded-full border ${getRiskBgColor(item.riskLevel)}`}>
                          <span className={`text-xs font-black uppercase ${getRiskColor(item.riskLevel)}`}>
                            {item.riskLevel} RISK ({item.riskScore}%)
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 mb-2">
                        By <span className="text-white font-bold">{item.author}</span>
                        {item.subject && <> about <span className="text-white font-bold">{item.subject}</span></>}
                      </p>

                      <p className="text-gray-300 mb-4">{item.preview}</p>

                      {item.flaggedReasons.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.flaggedReasons.map((reason, idx) => (
                            <span key={idx} className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs font-bold text-yellow-300">
                              <FlagIcon className="w-3 h-3 inline mr-1" />
                              {reason}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {item.submittedAt}
                        </div>
                        {item.rating && (
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                            {item.rating}/5
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <Button
                      variant="snark"
                      size="lg"
                      onClick={() => {
                        setSelectedItem(item);
                        setShowReviewModal(true);
                      }}
                    >
                      <EyeIcon className="w-5 h-5 mr-2" />
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Review Modal */}
      <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black tracking-tighter mb-2">
              Content Review
            </DialogTitle>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-6 pt-4">
              {/* Content View */}
              <Card variant="snarkSolid">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="snarkViolet">{selectedItem.type}</Badge>
                    {selectedItem.category && <Badge variant="snarkGhost">{selectedItem.category}</Badge>}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    By {selectedItem.author} • {selectedItem.submittedAt}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{selectedItem.preview}</p>
                </CardContent>
              </Card>

              {/* Risk Assessment */}
              <Card variant="snarkGlassBold">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-black mb-4">Risk Assessment</h4>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">ML Risk Score</span>
                      <span className={`text-lg font-black ${getRiskColor(selectedItem.riskLevel)}`}>
                        {selectedItem.riskScore}%
                      </span>
                    </div>
                    <Progress value={selectedItem.riskScore} className="h-3" />
                  </div>

                  {selectedItem.flaggedReasons.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-gray-400 mb-2">Flagged For:</p>
                      <div className="space-y-2">
                        {selectedItem.flaggedReasons.map((reason: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-yellow-300">
                            <FlagIcon className="w-4 h-4" />
                            {reason}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  variant="snark"
                  size="xl"
                  onClick={() => handleApprove(selectedItem)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckIcon className="w-5 h-5 mr-2" />
                  Approve
                </Button>
                <Button
                  variant="snarkGhost"
                  size="xl"
                  onClick={() => setShowRejectModal(true)}
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  <XIcon className="w-5 h-5 mr-2" />
                  Reject
                </Button>
                <Button
                  variant="snarkGhost"
                  size="xl"
                  onClick={() => setShowEditRequestModal(true)}
                >
                  <EditIcon className="w-5 h-5 mr-2" />
                  Request Edit
                </Button>
                <Button
                  variant="snarkGhost"
                  size="xl"
                  onClick={() => handleEscalate(selectedItem)}
                >
                  <ArrowUpIcon className="w-5 h-5 mr-2" />
                  Escalate
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Reject Modal */}
      <Dialog open={showRejectModal} onOpenChange={setShowRejectModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black">Reject Content</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div>
              <Label variant="snark" className="mb-2 block">Rejection Reason</Label>
              <Select value={rejectReason} onValueChange={setRejectReason}>
                <SelectTrigger variant="snark" className="h-12">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hate_speech">Hate speech</SelectItem>
                  <SelectItem value="doxxing">Doxxing / PII</SelectItem>
                  <SelectItem value="not_firsthand">Not firsthand experience</SelectItem>
                  <SelectItem value="harassment">Harassment</SelectItem>
                  <SelectItem value="false_info">False information</SelectItem>
                  <SelectItem value="other">Other violation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowRejectModal(false)}>
                Cancel
              </Button>
              <Button
                variant="snark"
                size="xl"
                className="flex-1 bg-red-600 hover:bg-red-700"
                onClick={handleReject}
                disabled={!rejectReason}
              >
                Confirm Rejection
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Request Edit Modal */}
      <Dialog open={showEditRequestModal} onOpenChange={setShowEditRequestModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black">Request Edits</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div>
              <Label variant="snark" className="mb-2 block">What needs to be changed?</Label>
              <Textarea
                variant="snarkGlass"
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                rows={6}
                placeholder="Explain what changes are needed for approval..."
              />
            </div>

            <Alert variant="snark">
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                The author will receive your feedback and can resubmit after making changes.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowEditRequestModal(false)}>
                Cancel
              </Button>
              <Button
                variant="snark"
                size="xl"
                className="flex-1"
                onClick={handleRequestEdit}
                disabled={!editNotes}
              >
                Send Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
