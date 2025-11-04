"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircleIcon, CameraIcon, ScanIcon, ShieldCheckIcon } from "lucide-react";

export default function VerifyIdentityPage() {
  const router = useRouter();
  const [docComplete, setDocComplete] = useState(false);
  const [selfieComplete, setSelfieComplete] = useState(false);
  const [showDocScanner, setShowDocScanner] = useState(false);
  const [showSelfieCapture, setShowSelfieCapture] = useState(false);

  const progress = (docComplete && selfieComplete) ? 100 : docComplete || selfieComplete ? 50 : 0;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-2xl">
        {/* Progress Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="snarkViolet" className="px-4 py-2">
            Step 2 of 3 • Identity Verification
          </Badge>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 mb-6">
            <SnarkLogoSimple size={48} />
            <span className="text-3xl font-black tracking-tighter">SNARK</span>
          </a>
          <h1 className="text-5xl font-black mb-4 tracking-tight">
            Verify your identity
          </h1>
          <p className="text-xl text-gray-400 max-w-lg mx-auto mb-6">
            Quick ID check + selfie. Takes 60 seconds. We verify you're real, then delete your docs immediately.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <Progress variant="snarkGlow" value={progress} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">{progress}% complete</p>
          </div>
        </div>

        {/* Why We Need This */}
        <Alert variant="snarkViolet" className="mb-8">
          <ShieldCheckIcon className="h-4 w-4" />
          <AlertDescription>
            <strong>Why this matters:</strong> Real accountability requires real identity. Your docs are deleted immediately after verification - we only keep that you're verified.
          </AlertDescription>
        </Alert>

        {/* Verification Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Document Scanner */}
          <Card
            variant={docComplete ? "snarkGradient" : "snarkHover"}
            className="relative"
          >
            <CardContent className="pt-8 pb-8 text-center">
              {docComplete && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                docComplete
                  ? "bg-green-500/20 border-2 border-green-500/50"
                  : "bg-white/5 border-2 border-white/10"
              }`}>
                <ScanIcon className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-black mb-2">
                {docComplete ? "✓ Document Verified" : "Scan your ID"}
              </h3>
              <p className="text-gray-400 mb-6">
                {docComplete
                  ? "Government ID successfully verified"
                  : "Driver's license, passport, or state ID"
                }
              </p>

              {!docComplete && (
                <Button
                  variant="snark"
                  size="lg"
                  className="w-full"
                  onClick={() => setShowDocScanner(true)}
                >
                  <ScanIcon className="w-5 h-5" />
                  Start ID Scan
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Selfie Capture */}
          <Card
            variant={selfieComplete ? "snarkGradient" : "snarkHover"}
            className="relative"
          >
            <CardContent className="pt-8 pb-8 text-center">
              {selfieComplete && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                selfieComplete
                  ? "bg-green-500/20 border-2 border-green-500/50"
                  : "bg-white/5 border-2 border-white/10"
              }`}>
                <CameraIcon className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-black mb-2">
                {selfieComplete ? "✓ Selfie Verified" : "Take a selfie"}
              </h3>
              <p className="text-gray-400 mb-6">
                {selfieComplete
                  ? "Liveness check passed successfully"
                  : "Quick liveness check to confirm it's you"
                }
              </p>

              {!selfieComplete && (
                <Button
                  variant="snark"
                  size="lg"
                  className="w-full"
                  onClick={() => setShowSelfieCapture(true)}
                  disabled={!docComplete}
                >
                  <CameraIcon className="w-5 h-5" />
                  {docComplete ? "Take Selfie" : "Complete ID first"}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        {docComplete && selfieComplete && (
          <Card variant="snarkGradient" className="mb-6">
            <CardContent className="pt-6 pb-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-2">All set!</h3>
                <p className="text-gray-300">
                  Your identity has been verified. Let's continue.
                </p>
              </div>
              <Button
                variant="snark"
                size="2xl"
                className="w-full"
                onClick={() => router.push('/onboarding')}
              >
                Continue to Onboarding →
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-4">
          <Badge variant="snarkGreen" className="text-xs px-3 py-1">
            ✓ No Data Stored
          </Badge>
          <Badge variant="snarkGreen" className="text-xs px-3 py-1">
            ✓ Encrypted
          </Badge>
          <Badge variant="snarkGreen" className="text-xs px-3 py-1">
            ✓ Deleted After
          </Badge>
        </div>
      </div>

      {/* Document Scanner Modal */}
      <Dialog open={showDocScanner} onOpenChange={setShowDocScanner}>
        <DialogContent variant="snarkGlass" className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">Scan Your ID</DialogTitle>
            <DialogDescription className="text-gray-400">
              Position your ID within the frame. We'll automatically capture it.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Camera Preview Mockup */}
            <div className="aspect-video bg-black rounded-xl border-2 border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-2/3 border-4 border-violet-500 rounded-xl border-dashed animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-sm font-semibold">Position ID in frame</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-bold mb-1">✓ Good Lighting</p>
                <p className="text-gray-500 text-xs">Avoid glare</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-bold mb-1">✓ All Visible</p>
                <p className="text-gray-500 text-xs">Full ID shown</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-bold mb-1">✓ No Blur</p>
                <p className="text-gray-500 text-xs">Hold steady</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="snarkGhost"
                className="flex-1"
                onClick={() => setShowDocScanner(false)}
              >
                Cancel
              </Button>
              <Button
                variant="snark"
                size="xl"
                className="flex-1"
                onClick={() => {
                  setDocComplete(true);
                  setShowDocScanner(false);
                }}
              >
                <ScanIcon className="w-5 h-5" />
                Capture ID
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Selfie Capture Modal */}
      <Dialog open={showSelfieCapture} onOpenChange={setShowSelfieCapture}>
        <DialogContent variant="snarkGlass" className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">Take a Selfie</DialogTitle>
            <DialogDescription className="text-gray-400">
              Look at the camera and follow the prompts for liveness check.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Camera Preview Mockup */}
            <div className="aspect-square max-w-md mx-auto bg-black rounded-xl border-2 border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 border-4 border-fuchsia-500 rounded-full border-dashed animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <p className="text-sm font-semibold">👋 Smile at the camera</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-bold mb-1">1. Center Face</p>
                <p className="text-gray-500 text-xs">In the circle</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-bold mb-1">2. Look Ahead</p>
                <p className="text-gray-500 text-xs">At camera</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-bold mb-1">3. Follow Prompts</p>
                <p className="text-gray-500 text-xs">Smile, turn, etc</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="snarkGhost"
                className="flex-1"
                onClick={() => setShowSelfieCapture(false)}
              >
                Cancel
              </Button>
              <Button
                variant="snark"
                size="xl"
                className="flex-1"
                onClick={() => {
                  setSelfieComplete(true);
                  setShowSelfieCapture(false);
                }}
              >
                <CameraIcon className="w-5 h-5" />
                Capture Selfie
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
