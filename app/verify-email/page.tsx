"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { InfoIcon } from "lucide-react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleResend = () => {
    setResendCooldown(60);
    // Mockup: countdown timer would go here
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-md">
        {/* Progress Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="snarkViolet" className="px-4 py-2">
            Step 1 of 3 • Email Verification
          </Badge>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 mb-6">
            <SnarkLogoSimple size={48} />
            <span className="text-3xl font-black tracking-tighter">SNARK</span>
          </a>
          <h1 className="text-4xl font-black mb-2 tracking-tight">Check your email</h1>
          <p className="text-gray-400">
            We sent a 6-digit code to{" "}
            <span className="text-white font-semibold">john@example.com</span>
          </p>
        </div>

        {/* Verification Card */}
        <Card variant="snarkGlassBold">
          <CardContent className="pt-8 pb-8">
            <div className="space-y-6">
              {/* OTP Input */}
              <div className="space-y-3">
                <label className="block text-center text-sm font-semibold text-gray-400">
                  Enter verification code
                </label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={code}
                    onChange={(value) => setCode(value)}
                  >
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot
                        index={0}
                        className="w-12 h-14 text-xl bg-white/5 border-2 border-white/10 text-white rounded-lg focus:border-violet-500 focus:ring-violet-500/50"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-12 h-14 text-xl bg-white/5 border-2 border-white/10 text-white rounded-lg focus:border-violet-500 focus:ring-violet-500/50"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-12 h-14 text-xl bg-white/5 border-2 border-white/10 text-white rounded-lg focus:border-violet-500 focus:ring-violet-500/50"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-12 h-14 text-xl bg-white/5 border-2 border-white/10 text-white rounded-lg focus:border-violet-500 focus:ring-violet-500/50"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-12 h-14 text-xl bg-white/5 border-2 border-white/10 text-white rounded-lg focus:border-violet-500 focus:ring-violet-500/50"
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-12 h-14 text-xl bg-white/5 border-2 border-white/10 text-white rounded-lg focus:border-violet-500 focus:ring-violet-500/50"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              {/* Verify Button */}
              <Button
                variant="snark"
                size="2xl"
                className="w-full"
                type="button"
                onClick={() => router.push('/verify-identity')}
              >
                Verify Email →
              </Button>

              {/* Resend */}
              <div className="text-center">
                {resendCooldown > 0 ? (
                  <p className="text-sm text-gray-500">
                    Resend available in {resendCooldown}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-sm text-violet-400 hover:text-violet-300 font-semibold underline"
                  >
                    Didn't receive it? Resend code
                  </button>
                )}
              </div>

              {/* Info Alert */}
              <Alert variant="snark">
                <InfoIcon className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  Check your spam folder if you don't see the email within 2 minutes.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Help */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Wrong email?{" "}
          <a href="/signup" className="text-violet-400 hover:text-violet-300 font-semibold underline">
            Start over
          </a>
        </p>
      </div>

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
