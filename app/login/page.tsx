"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 mb-6">
            <SnarkLogoSimple size={48} />
            <span className="text-3xl font-black tracking-tighter">SNARK</span>
          </a>
          <h1 className="text-4xl font-black mb-2 tracking-tight">Welcome back</h1>
          <p className="text-gray-400">
            Sign in to your account to continue
          </p>
        </div>

        {/* Demo Info Alert */}
        <Alert variant="snarkViolet" className="mb-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            <strong>Mockup Only:</strong> This is a UI preview. No actual authentication happens.
          </AlertDescription>
        </Alert>

        {/* Login Card */}
        <Card variant="snarkGlassBold">
          <CardContent className="pt-6">
            <form className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label variant="snark" htmlFor="email">
                  Email or Username
                </Label>
                <Input
                  variant="snark"
                  id="email"
                  placeholder="you@example.com or @username"
                  type="text"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label variant="snark" htmlFor="password">
                    Password
                  </Label>
                  <Link
                    href="/password-reset"
                    className="text-sm text-violet-400 hover:text-violet-300 font-semibold"
                  >
                    Forgot?
                  </Link>
                </div>
                <Input
                  variant="snark"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <Checkbox variant="snark" id="remember" />
                <Label variant="snarkGray" htmlFor="remember" className="cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>

              {/* Submit Button */}
              <Link href="/welcome" className="w-full">
                <Button
                  variant="snark"
                  size="2xl"
                  className="w-full"
                  type="button"
                >
                  Sign In →
                </Button>
              </Link>

              {/* Divider */}
              <div className="relative">
                <Separator variant="snark" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 px-3 text-sm text-gray-500">
                  or continue with
                </span>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="snarkGhost"
                  className="w-full"
                  type="button"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="snarkGhost"
                  className="w-full"
                  type="button"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46,6c-0.77,0.35-1.6,0.58-2.46,0.69c0.88-0.53,1.56-1.37,1.88-2.38c-0.83,0.5-1.75,0.85-2.72,1.05C18.37,4.5,17.26,4,16,4c-2.35,0-4.27,1.92-4.27,4.29c0,0.34,0.04,0.67,0.11,0.98C8.28,9.09,5.11,7.38,3,4.79c-0.37,0.63-0.58,1.37-0.58,2.15c0,1.49,0.75,2.81,1.91,3.56c-0.71,0-1.37-0.2-1.95-0.5v0.03c0,2.08,1.48,3.82,3.44,4.21c-0.36,0.1-0.74,0.15-1.13,0.15c-0.27,0-0.54-0.03-0.8-0.08c0.54,1.69,2.11,2.95,4,2.98c-1.46,1.16-3.31,1.84-5.33,1.84c-0.34,0-0.68-0.02-1.02-0.06C3.44,20.29,5.7,21,8.12,21C16,21,20.33,14.46,20.33,8.79c0-0.19,0-0.37-0.01-0.56C21.38,7.89,22,7,22.46,6z" />
                  </svg>
                  Twitter
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-violet-400 hover:text-violet-300 font-semibold underline">
            Join the waitlist
          </a>
        </p>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500">
            Secure connection • End-to-end encrypted
          </span>
        </div>
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
