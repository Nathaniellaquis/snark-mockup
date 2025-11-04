"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { SearchIcon, PenIcon, CompassIcon } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-8">
            <SnarkLogoSimple size={56} />
            <span className="text-4xl font-black tracking-tighter">SNARK</span>
          </div>

          <Badge variant="snarkGreen" className="mb-6 px-4 py-2 text-sm">
            ✓ You're All Set!
          </Badge>

          <h1 className="text-6xl font-black mb-4 tracking-tight">
            You're ready to
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              get started
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            What would you like to do first?
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Search for Someone */}
          <Card variant="snarkHover" className="group">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border-2 border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <SearchIcon className="w-12 h-12 text-violet-400" />
              </div>

              <h3 className="text-3xl font-black mb-3 tracking-tight">
                Search for someone
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Look up someone by name + context (school, company, city)
              </p>

              <Link href="/" className="w-full">
                <Button variant="snark" size="xl" className="w-full">
                  <SearchIcon className="w-5 h-5" />
                  Start Searching
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Share an Experience */}
          <Card variant="snarkHover" className="group">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border-2 border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PenIcon className="w-12 h-12 text-fuchsia-400" />
              </div>

              <h3 className="text-3xl font-black mb-3 tracking-tight">
                Share an experience
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Post a firsthand report with our guided template
              </p>

              <Link href="/" className="w-full">
                <Button variant="snark" size="xl" className="w-full">
                  <PenIcon className="w-5 h-5" />
                  Create Post
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Explore Option */}
        <Card>
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                  <CompassIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Not sure yet?</p>
                  <p className="text-sm text-gray-400">Explore the feed and get a feel for the platform</p>
                </div>
              </div>
              <Link href="/">
                <Button variant="snarkGhost" size="lg">
                  Explore Feed
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Quick tips to get started:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="snarkGhost" className="px-3 py-1.5 text-xs">
              💡 Use context when searching
            </Badge>
            <Badge variant="snarkGhost" className="px-3 py-1.5 text-xs">
              💡 Only post firsthand experiences
            </Badge>
            <Badge variant="snarkGhost" className="px-3 py-1.5 text-xs">
              💡 Be respectful and honest
            </Badge>
          </div>
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
