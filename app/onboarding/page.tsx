"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SnarkLogoSimple } from "@/components/snark-logo";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [prohibitedUnderstood, setProhibitedUnderstood] = useState(false);

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const slides = [
    {
      icon: "🛡️",
      headline: "Why Real Names?",
      body: "Snark requires your real first and last name to be displayed publicly on all posts you create.",
      subBody: "This isn't to violate your privacy—it's to ensure accountability. When people attach their real identity to their experiences, it encourages honest, thoughtful reporting and discourages abuse.",
      note: "Your name creates trust. It shows you stand behind what you share.",
      color: "violet"
    },
    {
      icon: "💬",
      headline: "What is Snark?",
      body: "Snark is a person accountability platform for sharing firsthand experiences in peer-to-peer contexts.",
      useCases: [
        { emoji: "💝", label: "Dating", desc: "Share experiences to help others make safer choices" },
        { emoji: "🏠", label: "Housing", desc: "Report roommate or landlord experiences" },
        { emoji: "💸", label: "Marketplace", desc: "Review buyers/sellers in P2P transactions" },
        { emoji: "🎓", label: "Community", desc: "Document behavior in clubs, groups, or events" },
        { emoji: "💼", label: "Professional", desc: "Share freelance/vendor collaboration experiences" }
      ],
      subBody: "Snark uses structured templates, real identity verification, and human moderation to create a safer, more accountable space.",
      color: "fuchsia"
    },
    {
      icon: "📋",
      headline: "Content Guidelines",
      body: "Posts must be based on firsthand experience and follow our community standards.",
      allowed: [
        "Based on firsthand experience (you were directly involved)",
        "About adults 18+ only",
        "Focused on behavior, not identity",
        "Free of doxxing (no addresses, phone numbers, SSNs, etc.)",
        "Non-violent and non-explicit"
      ],
      notAllowed: [
        "Hate speech or slurs",
        "Non-consensual intimate content",
        "Information about minors",
        "Threats or incitement"
      ],
      note: "All posts go through automated risk assessment and may be reviewed by moderators before publishing.",
      color: "purple"
    },
    {
      icon: "⚖️",
      headline: "Right of Reply",
      body: "Anyone can be the subject of a post. If someone posts about you, you have the Right of Reply.",
      rights: [
        "You can claim your profile page",
        "You get ONE FREE baseline response to any post about you",
        "Your response appears alongside the original post",
        "Responses are moderated to the same standard as posts"
      ],
      note: "This ensures fairness. Every story has two sides, and both deserve to be heard.",
      subBody: "Subjects can add context, share their perspective, or correct inaccuracies—all clearly labeled as the subject's response.",
      color: "violet"
    },
    {
      icon: "🔍",
      headline: "Why Context Matters",
      body: "People exist in multiple contexts. Someone may be a great roommate but a difficult coworker.",
      examples: [
        "\"Stanford 2019\" (shared institution and timeframe)",
        "\"Airbnb Host in SF\" (transaction type and location)",
        "\"Rock Climbing Club\" (shared community)"
      ],
      subBody: "When you search for someone, you'll see posts filtered by context relevant to YOU.",
      note: "This prevents irrelevant information from clouding your decision. What matters is behavior in YOUR context.",
      color: "fuchsia"
    },
    {
      icon: "📜",
      headline: "Terms of Service",
      body: "Before you continue, please review and accept our terms.",
      keyPoints: [
        "You must be 18+",
        "Posts must be firsthand experiences",
        "Platform is NOT for employment or tenant screening (FCRA)",
        "You are responsible for content you post",
        "Platform may remove content violating policies",
        "Disputes handled through appeals process"
      ],
      isTerms: true,
      color: "violet"
    }
  ];

  const currentSlide = slides[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps - 1 && termsAccepted && privacyAccepted && prohibitedUnderstood) {
      router.push('/welcome');
    }
  };

  const handleSkip = () => {
    router.push('/welcome');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <SnarkLogoSimple size={48} />
            <span className="text-3xl font-black tracking-tighter">SNARK</span>
          </div>

          {/* Progress */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex justify-between items-center mb-2">
              <Badge variant="snarkViolet" className="px-3 py-1.5">
                Step {currentStep + 1} of {totalSteps}
              </Badge>
              <button
                onClick={handleSkip}
                className="text-sm text-gray-500 hover:text-gray-300 font-semibold"
              >
                Skip for now →
              </button>
            </div>
            <Progress variant="snarkGlow" value={progress} className="h-2" />
          </div>

          <h1 className="text-5xl font-black mb-4 tracking-tight">
            Welcome to Snark
          </h1>
          <p className="text-xl text-gray-400">
            Let's get you started with how things work
          </p>
        </div>

        {/* Slide Content */}
        <Card variant="snarkGlassBold" className="mb-8">
          <CardContent className="pt-12 pb-12">
            <div className="max-w-2xl mx-auto text-center">
              {/* Icon */}
              <div className="text-8xl mb-8 animate-bounce-slow">
                {currentSlide.icon}
              </div>

              {/* Headline */}
              <h2 className="text-4xl font-black mb-6 tracking-tight">
                {currentSlide.headline}
              </h2>

              {/* Body */}
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {currentSlide.body}
              </p>

              {/* Sub Body */}
              {'subBody' in currentSlide && currentSlide.subBody && (
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {currentSlide.subBody}
                </p>
              )}

              {/* Use Cases (Step 2) */}
              {'useCases' in currentSlide && currentSlide.useCases && (
                <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                  {currentSlide.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-start gap-3 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-3xl">{useCase.emoji}</span>
                      <div>
                        <p className="font-black text-white mb-1">{useCase.label}</p>
                        <p className="text-sm text-gray-400">{useCase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Rights (Step 4) */}
              {'rights' in currentSlide && currentSlide.rights && (
                <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                  {currentSlide.rights.map((right, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-violet-400 mt-1">✓</span>
                      <span className="text-gray-300">{right}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Examples (Step 5) */}
              {'examples' in currentSlide && currentSlide.examples && (
                <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                  <p className="text-sm font-black text-violet-400 mb-3">CONTEXT TAG EXAMPLES:</p>
                  {currentSlide.examples.map((example, idx) => (
                    <div key={idx} className="p-3 bg-violet-500/10 border border-violet-500/30 rounded-lg">
                      <p className="text-sm text-gray-300">{example}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Points (Step 6 - Terms) */}
              {'keyPoints' in currentSlide && currentSlide.keyPoints && !currentSlide.isTerms && (
                <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                  {currentSlide.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-fuchsia-400 mt-1">•</span>
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Allowed/Not Allowed (Step 3) */}
              {'allowed' in currentSlide && currentSlide.allowed && (
                <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                  <div className="space-y-3">
                    <p className="text-sm font-black text-green-400 mb-3">✓ POSTS MUST BE:</p>
                    {currentSlide.allowed.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-black text-red-400 mb-3">✗ POSTS CANNOT CONTAIN:</p>
                    {'notAllowed' in currentSlide && currentSlide.notAllowed?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {'note' in currentSlide && currentSlide.note && (
                <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-lg mb-6">
                  <p className="text-sm text-violet-100">
                    💡 {currentSlide.note}
                  </p>
                </div>
              )}

              {/* Terms Checkboxes (Final Slide) */}
              {currentSlide.isTerms && (
                <div className="space-y-6 text-left max-w-lg mx-auto">
                  {/* Key Points for Terms */}
                  {'keyPoints' in currentSlide && currentSlide.keyPoints && (
                    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-3 mb-6">
                      <p className="text-sm font-black text-gray-400 mb-3">KEY POINTS:</p>
                      {currentSlide.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-violet-400 mt-0.5">•</span>
                          <span className="text-sm text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                    <Checkbox
                      variant="snark"
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                    />
                    <Label variant="snark" htmlFor="terms" className="cursor-pointer">
                      I have read and agree to the{" "}
                      <a href="#" className="text-violet-400 underline">
                        Terms of Service
                      </a>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                    <Checkbox
                      variant="snark"
                      id="privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                    />
                    <Label variant="snark" htmlFor="privacy" className="cursor-pointer">
                      I have read and agree to the{" "}
                      <a href="#" className="text-violet-400 underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <Checkbox
                      variant="snark"
                      id="prohibited"
                      checked={prohibitedUnderstood}
                      onCheckedChange={(checked) => setProhibitedUnderstood(checked as boolean)}
                    />
                    <Label variant="snark" htmlFor="prohibited" className="cursor-pointer">
                      I understand Snark <strong>cannot</strong> be used for employment or tenant screening (FCRA prohibited uses)
                    </Label>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="snarkGhost"
            size="xl"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex-1"
          >
            ← Back
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentStep
                    ? "bg-violet-500 w-8"
                    : idx < currentStep
                    ? "bg-violet-600/50"
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <Button
            variant="snark"
            size="xl"
            onClick={handleNext}
            disabled={
              currentStep === totalSteps - 1 &&
              (!termsAccepted || !privacyAccepted || !prohibitedUnderstood)
            }
            className="flex-1"
          >
            {currentStep === totalSteps - 1 ? "I'm Ready - Let's Go! 🚀" : "Next →"}
          </Button>
        </div>

        {/* Step Indicators */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">→</kbd> or{" "}
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">←</kbd> to navigate
          </p>
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
