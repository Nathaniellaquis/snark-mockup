"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";

export default function BrandGuidelines() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <SnarkLogoSimple size={40} />
              <span className="text-2xl font-black tracking-tighter">SNARK</span>
            </div>
            <a href="/" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-20">
          <Badge className="mb-6 bg-violet-600/20 text-violet-400 border-violet-500/50 px-4 py-2">
            Brand Guidelines v1.0
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            Snark Brand
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Guidelines
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Everything you need to maintain consistent, bold, and snarky branding across all touchpoints.
          </p>
        </div>

        {/* Logo Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Logo</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Primary Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black rounded-xl p-12 flex items-center justify-center border border-white/10">
                  <SnarkLogoSimple size={120} />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Lightning bolt "S" - represents speed, energy, and snarky attitude
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Logo + Wordmark</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black rounded-xl p-12 flex items-center justify-center gap-4 border border-white/10">
                  <SnarkLogoSimple size={80} />
                  <span className="text-5xl font-black tracking-tighter text-white">SNARK</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Use for headers, navigation, and marketing materials
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base text-white">On Dark</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black rounded-xl p-8 flex items-center justify-center border border-white/10">
                  <SnarkLogoSimple size={60} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base text-white">On Light</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-xl p-8 flex items-center justify-center border border-gray-200">
                  <SnarkLogoSimple size={60} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base text-white">On Gradient</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl p-8 flex items-center justify-center">
                  <SnarkLogoSimple size={60} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Colors</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Primary Colors</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-violet-600 to-fuchsia-600" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">Brand Gradient</p>
                    <p className="text-sm text-gray-400 font-mono">#8B5CF6 → #D946EF</p>
                    <p className="text-sm text-gray-400">Violet to Fuchsia</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-32 bg-violet-600" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">Violet</p>
                    <p className="text-sm text-gray-400 font-mono">#8B5CF6</p>
                    <p className="text-sm text-gray-400">Primary accent</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-32 bg-fuchsia-600" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">Fuchsia</p>
                    <p className="text-sm text-gray-400 font-mono">#D946EF</p>
                    <p className="text-sm text-gray-400">Secondary accent</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Supporting Colors</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-24 bg-white" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">White</p>
                    <p className="text-sm text-gray-400 font-mono">#FFFFFF</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-24 bg-black border border-white/20" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">Black</p>
                    <p className="text-sm text-gray-400 font-mono">#000000</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-24 bg-gray-300" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">Light Gray</p>
                    <p className="text-sm text-gray-400 font-mono">#D1D5DB</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <div className="h-24 bg-gray-700" />
                  <CardContent className="pt-6">
                    <p className="font-bold mb-1 text-white">Dark Gray</p>
                    <p className="text-sm text-gray-400 font-mono">#374151</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Typography</h2>

          <Card className="bg-white/5 border-white/10 mb-6">
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Display / Headings</p>
                <p className="text-6xl font-black tracking-tighter text-white">Geist Sans Black</p>
                <p className="text-sm text-gray-400 font-mono mt-2">font-black tracking-tighter</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Subheadings</p>
                <p className="text-3xl font-bold text-white">Geist Sans Bold</p>
                <p className="text-sm text-gray-400 font-mono mt-2">font-bold</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Body Text</p>
                <p className="text-lg font-medium text-white">Geist Sans Medium - Used for body copy and descriptions</p>
                <p className="text-sm text-gray-400 font-mono mt-2">font-medium</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Code / Mono</p>
                <p className="text-base font-mono text-white">Geist Mono - #8B5CF6 → #D946EF</p>
                <p className="text-sm text-gray-400 font-mono mt-2">font-mono</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Typography Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-9xl font-black text-white">Aa</span>
                <span className="text-sm text-gray-400">9xl - Hero headlines</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-black text-white">Aa</span>
                <span className="text-sm text-gray-400">6xl - Section headers</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-white">Aa</span>
                <span className="text-sm text-gray-400">4xl - Subsection headers</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-semibold text-white">Aa</span>
                <span className="text-sm text-gray-400">2xl - Card titles</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-base text-white">Aa</span>
                <span className="text-sm text-gray-400">base - Body text</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Buttons</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Primary - Gradient</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold border-2 border-white/20">
                  Primary Action
                </Button>
                <p className="text-sm text-gray-400">
                  Use for main CTAs: Sign up, Join waitlist, Get started
                </p>
                <code className="text-xs text-gray-500 block">
                  bg-gradient-to-r from-violet-600 to-fuchsia-600
                </code>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Secondary - Ghost</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-white/10 hover:bg-white text-white hover:text-black font-bold rounded-2xl border-2 border-white/20">
                  Secondary Action
                </Button>
                <p className="text-sm text-gray-400">
                  Use for secondary actions: Learn more, See demo, Contact
                </p>
                <code className="text-xs text-gray-500 block">
                  bg-white/10 hover:bg-white
                </code>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="sm" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold">
                  Small
                </Button>
                <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold">
                  Default
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold text-xl px-8 h-14">
                  Large
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold">
                  Default
                </Button>
                <Button className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold">
                  Hover
                </Button>
                <Button disabled className="w-full bg-gray-700 text-gray-500 font-bold cursor-not-allowed">
                  Disabled
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Voice & Tone */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Voice & Tone</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-green-400">✓ Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Be Direct</p>
                  <p className="text-sm text-gray-400">"Stop getting burned"</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Be Real</p>
                  <p className="text-sm text-gray-400">"Know if they're psycho"</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Be Confident</p>
                  <p className="text-sm text-gray-400">"No BS. No sketchy stuff."</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Be Casual</p>
                  <p className="text-sm text-gray-400">"The tea is piping hot"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-red-400">✗ Don't</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Corporate Speak</p>
                  <p className="text-sm text-gray-400">"Leverage synergies for optimal outcomes"</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Overly Formal</p>
                  <p className="text-sm text-gray-400">"Please proceed to submit your inquiry"</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Wishy-Washy</p>
                  <p className="text-sm text-gray-400">"Perhaps consider potentially maybe..."</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-bold mb-1 text-white">Aggressive/Mean</p>
                  <p className="text-sm text-gray-400">Snarky ≠ cruel or bullying</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 border-white/10 mt-6">
            <CardHeader>
              <CardTitle>Core Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-violet-400 mb-2">Bold & Direct</h4>
                  <p className="text-sm text-gray-400">
                    We don't sugarcoat. We tell it like it is. No corporate jargon.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-fuchsia-400 mb-2">Safety-First</h4>
                  <p className="text-sm text-gray-400">
                    Every word reinforces trust, accountability, and protection.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400 mb-2">Human & Real</h4>
                  <p className="text-sm text-gray-400">
                    We sound like a friend giving real advice, not a robot.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* UI Elements */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">UI Elements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl border-2 border-white/10">
                  <h4 className="font-bold mb-2">Glass Card</h4>
                  <p className="text-sm text-gray-400">
                    Semi-transparent with backdrop blur
                  </p>
                </div>
                <code className="text-xs text-gray-500 block">
                  bg-white/5 border-2 border-white/10 backdrop-blur
                </code>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-violet-600/20 text-violet-400 border-violet-500/50">
                    Status
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    ✓ Verified
                  </Badge>
                  <Badge className="bg-white/10 text-white border-white/20">
                    Info
                  </Badge>
                </div>
                <code className="text-xs text-gray-500 block">
                  bg-{'{'}color{'}'}/20 text-{'{'}color{'}'} border-{'{'}color{'}'}/50
                </code>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Borders & Outlines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-white/10 rounded-lg">
                  border-white/10 - Subtle
                </div>
                <div className="p-4 border-2 border-white/20 rounded-lg">
                  border-2 border-white/20 - Medium
                </div>
                <div className="p-4 border-2 border-white/30 rounded-lg">
                  border-2 border-white/30 - Prominent
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Effects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  backdrop-blur-sm
                </div>
                <div className="p-4 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-lg">
                  Gradient backgrounds
                </div>
                <div className="p-4 bg-white/5 rounded-lg shadow-2xl shadow-violet-600/50">
                  shadow-violet-600/50
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Spacing & Layout</h2>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm text-gray-400">gap-3 (12px)</div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-violet-600 rounded" />
                    <div className="w-8 h-8 bg-fuchsia-600 rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm text-gray-400">gap-6 (24px)</div>
                  <div className="flex gap-6">
                    <div className="w-8 h-8 bg-violet-600 rounded" />
                    <div className="w-8 h-8 bg-fuchsia-600 rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm text-gray-400">gap-12 (48px)</div>
                  <div className="flex gap-12">
                    <div className="w-8 h-8 bg-violet-600 rounded" />
                    <div className="w-8 h-8 bg-fuchsia-600 rounded" />
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Sections:</strong> py-20 to py-32 (80px to 128px)
                  <br />
                  <strong>Cards:</strong> p-6 to p-8 (24px to 32px)
                  <br />
                  <strong>Elements:</strong> gap-3 to gap-6 (12px to 24px)
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Downloads */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Assets</h2>

          <Card className="bg-gradient-to-br from-violet-600 to-fuchsia-600 border-0">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black mb-2">Need the full brand kit?</h3>
                  <p className="text-white/80">
                    Logos, color palettes, and design files ready to use.
                  </p>
                </div>
                <Button className="bg-white hover:bg-white/90 text-black font-bold px-8 h-12">
                  Download Assets
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
