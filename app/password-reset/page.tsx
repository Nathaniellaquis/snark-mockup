"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircleIcon, ArrowLeftIcon } from "lucide-react";

export default function PasswordResetPage() {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-md">
        {/* Back Link */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to login
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 mb-6">
            <SnarkLogoSimple size={48} />
            <span className="text-3xl font-black tracking-tighter">SNARK</span>
          </a>
          <h1 className="text-4xl font-black mb-2 tracking-tight">Reset password</h1>
          <p className="text-gray-400">
            {emailSent
              ? "Check your inbox for reset instructions"
              : "Enter your email and we'll send you a reset link"
            }
          </p>
        </div>

        {emailSent ? (
          /* Success State */
          <Card variant="snarkGlassBold">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-black mb-3">Check your email</h2>
              <p className="text-gray-400 mb-6">
                We sent a password reset link to your email address. Click the link to create a new password.
              </p>

              <div className="space-y-3">
                <Alert variant="snarkViolet">
                  <AlertDescription>
                    <strong>Didn't receive it?</strong> Check your spam folder or wait a minute and try again.
                  </AlertDescription>
                </Alert>

                <Button
                  variant="snarkGhost"
                  className="w-full"
                  type="button"
                  onClick={() => setEmailSent(false)}
                >
                  Try different email
                </Button>

                <Button
                  variant="snarkOutline"
                  className="w-full"
                  type="button"
                >
                  Resend link
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Form State */
          <Card variant="snarkGlassBold">
            <CardContent className="pt-6">
              <form className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <Label variant="snark" htmlFor="email">
                    Email Address
                  </Label>
                  <Input
                    variant="snark"
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                  <p className="text-xs text-gray-500">
                    We'll send a password reset link to this email
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  variant="snark"
                  size="2xl"
                  className="w-full"
                  type="button"
                  onClick={() => setEmailSent(true)}
                >
                  Send Reset Link
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Help */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Need help?{" "}
          <a href="#" className="text-violet-400 hover:text-violet-300 font-semibold underline">
            Contact support
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
