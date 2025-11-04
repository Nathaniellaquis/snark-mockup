"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, GitMergeIcon, AlertTriangleIcon, CheckIcon } from "lucide-react";

export default function EntityManagementPage() {
  const router = useRouter();
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [selectedPair, setSelectedPair] = useState<any>(null);

  const duplicates = [
    {
      id: 1,
      entity1: { id: 1, name: "John Smith", posts: 8, tags: ["Stanford", "SF"] },
      entity2: { id: 2, name: "John Smith", posts: 3, tags: ["Stanford 2019"] },
      similarity: 95,
      status: "pending"
    },
    {
      id: 2,
      entity1: { id: 3, name: "Sarah Johnson", posts: 12, tags: ["Berkeley"] },
      entity2: { id: 4, name: "Sarah M. Johnson", posts: 5, tags: ["UC Berkeley"] },
      similarity: 88,
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SnarkLogoSimple size={28} />
            <span className="text-xl font-black tracking-tighter text-white">SNARK</span>
            <Badge variant="snarkFuchsia" className="ml-3">ADMIN</Badge>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-8 max-w-6xl mx-auto px-4">
        <button onClick={() => router.push('/admin')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 mt-6">
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-bold">Back to Dashboard</span>
        </button>

        <div className="py-8">
          <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">Entity Management</h1>
          <p className="text-xl text-gray-500">Detect and merge duplicate profiles</p>
        </div>

        <Card variant="snarkGlassBold">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-black mb-6">Potential Duplicates ({duplicates.length})</h3>
            <div className="space-y-4">
              {duplicates.map((dup) => (
                <div key={dup.id} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="snarkFuchsia">{dup.similarity}% Match</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl">
                      <p className="font-black text-white text-xl mb-2">{dup.entity1.name}</p>
                      <p className="text-sm text-gray-400 mb-2">{dup.entity1.posts} posts</p>
                      <div className="flex gap-2">
                        {dup.entity1.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl">
                      <p className="font-black text-white text-xl mb-2">{dup.entity2.name}</p>
                      <p className="text-sm text-gray-400 mb-2">{dup.entity2.posts} posts</p>
                      <div className="flex gap-2">
                        {dup.entity2.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="snark" size="lg" onClick={() => { setSelectedPair(dup); setShowMergeModal(true); }}>
                      <GitMergeIcon className="w-5 h-5 mr-2" />
                      Merge Entities
                    </Button>
                    <Button variant="snarkGhost" size="lg">
                      Not Duplicates
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Merge Confirmation Modal */}
      <Dialog open={showMergeModal} onOpenChange={setShowMergeModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black">Confirm Merge</DialogTitle>
          </DialogHeader>
          {selectedPair && (
            <div className="space-y-6 pt-4">
              <Alert variant="snarkWarning">
                <AlertTriangleIcon className="h-4 w-4" />
                <AlertDescription>
                  This will merge {selectedPair.entity2.name} into {selectedPair.entity1.name}. All posts will be consolidated. This cannot be undone.
                </AlertDescription>
              </Alert>
              <div className="flex gap-4">
                <Button variant="snarkGhost" size="xl" className="flex-1" onClick={() => setShowMergeModal(false)}>
                  Cancel
                </Button>
                <Button variant="snark" size="xl" className="flex-1">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  Confirm Merge
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
