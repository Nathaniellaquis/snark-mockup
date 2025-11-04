"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <SnarkLogoSimple size={40} />
                <div className="absolute inset-0 blur-lg opacity-50">
                  <SnarkLogoSimple size={40} />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tighter">SNARK</span>
            </div>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-bold px-6 border-2 border-white/20">
                JOIN WAITLIST
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-75 animate-pulse" />
                <div className="relative px-6 py-3 bg-black rounded-full border border-violet-500/50">
                  <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    ⚡ Real People. Real Reviews. Real Safety.
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
              Stop getting
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent animate-gradient bg-300%">
                burned
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-tight">
              Before you date them. Room with them. Work with them.{" "}
              <span className="text-white font-bold">Know the truth.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-12 h-16 text-xl font-black rounded-2xl shadow-2xl shadow-violet-600/50 border-2 border-white/20 transform hover:scale-105 transition-all"
                >
                  GET EARLY ACCESS →
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white text-white hover:text-black px-12 h-16 text-xl font-bold rounded-2xl border-2 border-white/20 transition-all"
                onClick={() => window.scrollTo({ top: document.getElementById('how-it-works')?.offsetTop || 0, behavior: 'smooth' })}
              >
                SEE HOW IT WORKS
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">100% Verified Users</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">24/7 Moderation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">Your Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Bold Cards */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tight">
            One app. <span className="text-violet-400">Every situation.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "💔",
                title: "Dating",
                subtitle: "Before you catch feelings",
                desc: "Real experiences from real dates. No catfishes. No love bombers. Just the truth.",
                gradient: "from-rose-500 to-pink-600"
              },
              {
                emoji: "🏠",
                title: "Roommates",
                subtitle: "Before you sign the lease",
                desc: "Know if they actually clean. If they pay rent on time. If they're psycho.",
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                emoji: "🎓",
                title: "Campus",
                subtitle: "Before you join the group",
                desc: "Club presidents, group project partners, event organizers. See who's legit.",
                gradient: "from-violet-500 to-purple-600"
              },
              {
                emoji: "💸",
                title: "Marketplace",
                subtitle: "Before you send the money",
                desc: "P2P transactions, freelancers, local sellers. Don't get scammed.",
                gradient: "from-orange-500 to-red-600"
              }
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border-2 border-white/10 hover:border-white/30 p-8 transition-all duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-3xl font-black mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm font-bold text-violet-400 mb-4 uppercase tracking-wider">{item.subtitle}</p>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Visual Steps */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-center tracking-tight">
            It's stupid simple
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-2xl mx-auto">
            No BS. No sketchy stuff. Just real accountability.
          </p>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-violet-600/20 border border-violet-500/50 rounded-full mb-6">
                  <span className="text-sm font-black text-violet-400">STEP 1</span>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tight">
                  Verify yourself once
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Quick selfie + ID check. Takes 60 seconds. We verify you're real, but your docs are deleted immediately. Your real name shows on posts—that's the whole point.
                </p>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-3 py-1 text-xs font-bold">
                    ✓ NO DATA STORED
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-3 py-1 text-xs font-bold">
                    ✓ ENCRYPTED
                  </Badge>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border-2 border-white/20 backdrop-blur-xl">
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-2xl flex items-center justify-center border border-white/20">
                        <span className="text-6xl">📱</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/20 rounded w-3/4" />
                        <div className="h-3 bg-white/10 rounded w-full" />
                        <div className="h-3 bg-white/10 rounded w-2/3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-fuchsia-600/20 border border-fuchsia-500/50 rounded-full mb-6">
                  <span className="text-sm font-black text-fuchsia-400">STEP 2</span>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tight">
                  Search or post
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Looking someone up? Search by name + context. Had an experience? Post it with a guided template. Add screenshots (we scrub the metadata). Only firsthand stuff—no rumors.
                </p>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 px-3 py-1 text-xs font-bold">
                    ✓ STRUCTURED
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 px-3 py-1 text-xs font-bold">
                    ✓ VERIFIED
                  </Badge>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border-2 border-white/20 backdrop-blur-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500/40 to-purple-500/40 rounded-full border border-white/20" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-white/20 rounded w-1/2" />
                          <div className="h-2 bg-white/10 rounded w-3/4" />
                        </div>
                      </div>
                      <div className="h-24 bg-white/5 rounded-xl border border-white/10 p-4">
                        <div className="space-y-2">
                          <div className="h-2 bg-white/20 rounded w-full" />
                          <div className="h-2 bg-white/20 rounded w-5/6" />
                          <div className="h-2 bg-white/20 rounded w-4/6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full mb-6">
                  <span className="text-sm font-black text-purple-400">STEP 3</span>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tight">
                  Everyone stays safe
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  AI + human mods check everything. Subjects get free replies. No doxxing, no hate speech, no lies. If someone crosses the line, they're out. Simple.
                </p>
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/50 px-3 py-1 text-xs font-bold">
                    ✓ 24/7 MODERATION
                  </Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/50 px-3 py-1 text-xs font-bold">
                    ✓ FAIR APPEALS
                  </Badge>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border-2 border-white/20 backdrop-blur-xl">
                    <div className="space-y-4">
                      <div className="text-5xl text-center">🛡️</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-green-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
                          <span className="text-2xl">✓</span>
                        </div>
                        <div className="h-16 bg-green-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
                          <span className="text-2xl">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12 tracking-tight">
            The tea is <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">piping hot</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                10k+
              </div>
              <div className="text-gray-400 font-semibold">On the waitlist</div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 font-semibold">Verified accounts</div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400 font-semibold">Moderation team</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-3xl opacity-30" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-16 rounded-3xl border-2 border-white/20 backdrop-blur-xl">
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Ready to stop guessing?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands on the waitlist. Get early access when we launch.
              </p>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-16 h-20 text-2xl font-black rounded-2xl shadow-2xl shadow-violet-600/50 border-2 border-white/20 transform hover:scale-105 transition-all"
                >
                  JOIN THE WAITLIST →
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-6">No spam. No BS. Just early access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <SnarkLogoSimple size={40} />
              <span className="text-2xl font-black tracking-tighter">SNARK</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors font-semibold">Privacy</a>
              <a href="#" className="hover:text-white transition-colors font-semibold">Terms</a>
              <a href="#" className="hover:text-white transition-colors font-semibold">Safety</a>
              <a href="#" className="hover:text-white transition-colors font-semibold">Support</a>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-600">
            <p>© 2024 Snark • Project Sponsor: Nathaniel Laquis</p>
          </div>
        </div>
      </footer>

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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300%;
        }
      `}</style>
    </div>
  );
}
