"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { InfoIcon, CheckCircleIcon, AlertTriangleIcon, XCircleIcon } from "lucide-react";

export default function ComponentsShowcase() {
  const [progress, setProgress] = useState(60);
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <SnarkLogoSimple size={40} />
              <span className="text-2xl font-black tracking-tighter">SNARK</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="/brand" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                Brand
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <Badge variant="snarkViolet" className="mb-6 px-4 py-2">
            Component Library
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            Snark Components
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            All components, fully branded and ready to use.
          </p>
        </div>

        {/* Buttons */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Buttons</h2>

          <div className="grid gap-8">
            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Primary Variants</CardTitle>
                <CardDescription className="text-gray-400">Main action buttons with gradient effects</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="snark">Snark Default</Button>
                <Button variant="snark" size="lg">Snark Large</Button>
                <Button variant="snark" size="xl">Snark XL</Button>
                <Button variant="snark" size="2xl">Snark 2XL</Button>
                <Button variant="snark" disabled>Disabled</Button>
              </CardContent>
            </Card>

            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Ghost & Outline</CardTitle>
                <CardDescription className="text-gray-400">Secondary action buttons</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="snarkGhost">Ghost Default</Button>
                <Button variant="snarkGhost" size="lg">Ghost Large</Button>
                <Button variant="snarkOutline">Outline</Button>
                <Button variant="snarkOutline" size="lg">Outline Large</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Badges</h2>

          <Card variant="snarkGlass">
            <CardHeader>
              <CardTitle variant="snark">All Badge Variants</CardTitle>
              <CardDescription className="text-gray-400">Labels, tags, and status indicators</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge variant="snark">Gradient</Badge>
              <Badge variant="snarkViolet">Violet</Badge>
              <Badge variant="snarkFuchsia">Fuchsia</Badge>
              <Badge variant="snarkGreen">✓ Verified</Badge>
              <Badge variant="snarkGhost">Ghost</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>
        </section>

        {/* Cards */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Cards</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Glass Card</CardTitle>
                <CardDescription className="text-gray-400">Semi-transparent with backdrop blur</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Perfect for overlay content and modern interfaces.</p>
              </CardContent>
            </Card>

            <Card variant="snarkGlassBold">
              <CardHeader>
                <CardTitle variant="snarkGradient">Glass Bold Card</CardTitle>
                <CardDescription className="text-gray-400">More prominent with gradient title</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Stands out more with stronger background.</p>
              </CardContent>
            </Card>

            <Card variant="snarkGradient">
              <CardHeader>
                <CardTitle variant="snark">Gradient Card</CardTitle>
                <CardDescription className="text-gray-400">Subtle gradient background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Branded violet-to-fuchsia gradient.</p>
              </CardContent>
            </Card>

            <Card variant="snarkHover">
              <CardHeader>
                <CardTitle variant="snark">Hover Card</CardTitle>
                <CardDescription className="text-gray-400">Interactive with scale effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Hover over me to see the effect!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Inputs */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Form Inputs</h2>

          <div className="grid gap-6">
            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Text Inputs</CardTitle>
                <CardDescription className="text-gray-400">Input fields and text areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Snark Input</label>
                  <Input variant="snark" placeholder="Enter your text..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Glass Input</label>
                  <Input variant="snarkGlass" placeholder="Glass variant..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Snark Textarea</label>
                  <Textarea variant="snark" placeholder="Your message..." rows={4} />
                </div>
              </CardContent>
            </Card>

            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Checkboxes & Radio</CardTitle>
                <CardDescription className="text-gray-400">Selection controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Checkboxes</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Checkbox variant="snark" id="check1" />
                      <label htmlFor="check1">Snark</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox variant="snarkGlass" id="check2" />
                      <label htmlFor="check2">Glass</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox variant="snarkOutline" id="check3" />
                      <label htmlFor="check3">Outline</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold">Radio Buttons</p>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem variant="snark" value="option1" id="r1" />
                      <label htmlFor="r1">Snark Radio</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem variant="snarkGlass" value="option2" id="r2" />
                      <label htmlFor="r2">Glass Radio</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem variant="snarkGradient" value="option3" id="r3" />
                      <label htmlFor="r3">Gradient Radio</label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Switches & Selects</CardTitle>
                <CardDescription className="text-gray-400">Toggle and dropdown controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Switches</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch variant="snark" id="s1" />
                      <label htmlFor="s1">Snark</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch variant="snarkGlass" id="s2" />
                      <label htmlFor="s2">Glass</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch variant="snarkSolid" id="s3" />
                      <label htmlFor="s3">Solid</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold">Select Dropdown</p>
                  <Select>
                    <SelectTrigger variant="snark" className="w-[200px]">
                      <SelectValue placeholder="Choose option" />
                    </SelectTrigger>
                    <SelectContent variant="snark">
                      <SelectItem value="1">Option 1</SelectItem>
                      <SelectItem value="2">Option 2</SelectItem>
                      <SelectItem value="3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress & Sliders */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Progress & Sliders</h2>

          <div className="grid gap-6">
            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Progress Bars</CardTitle>
                <CardDescription className="text-gray-400">Visual progress indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Snark Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress variant="snark" value={progress} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Glow Progress</span>
                    <span>75%</span>
                  </div>
                  <Progress variant="snarkGlow" value={75} />
                </div>
                <Button variant="snark" size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                  Increase Progress
                </Button>
              </CardContent>
            </Card>

            <Card variant="snarkGlass">
              <CardHeader>
                <CardTitle variant="snark">Sliders</CardTitle>
                <CardDescription className="text-gray-400">Adjustable value controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Snark Slider</span>
                    <span>{sliderValue[0]}</span>
                  </div>
                  <Slider variant="snark" value={sliderValue} onValueChange={setSliderValue} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Glow Slider</span>
                    <span>75</span>
                  </div>
                  <Slider variant="snarkGlow" defaultValue={[75]} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Alerts</h2>

          <div className="grid gap-4">
            <Alert variant="snark">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Info Alert</AlertTitle>
              <AlertDescription>
                This is a general informational alert with the Snark glass style.
              </AlertDescription>
            </Alert>

            <Alert variant="snarkViolet">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Violet Alert</AlertTitle>
              <AlertDescription>
                Important information with violet branding.
              </AlertDescription>
            </Alert>

            <Alert variant="snarkSuccess">
              <CheckCircleIcon className="h-4 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your action was completed successfully.
              </AlertDescription>
            </Alert>

            <Alert variant="snarkWarning">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please review this important information before proceeding.
              </AlertDescription>
            </Alert>

            <Alert variant="snarkError">
              <XCircleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Accordion */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Accordion</h2>

          <Card variant="snarkGlass">
            <CardHeader>
              <CardTitle variant="snark">FAQ Style Accordion</CardTitle>
              <CardDescription className="text-gray-400">Collapsible content panels</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem variant="snarkCard" value="item-1">
                  <AccordionTrigger className="text-white hover:no-underline">
                    What is Snark?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Snark is a safety-first platform for sharing verified experience reports about people in peer-to-peer contexts.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem variant="snarkCard" value="item-2">
                  <AccordionTrigger className="text-white hover:no-underline">
                    How does verification work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Quick liveness check plus document verification. Your real identity stays private, but your real name appears on posts for accountability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem variant="snarkCard" value="item-3">
                  <AccordionTrigger className="text-white hover:no-underline">
                    Is my data safe?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Yes. We practice data minimization, encrypt everything at rest and in transit, and never store raw ID documents long-term.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Dialog */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Dialogs</h2>

          <Card variant="snarkGlass">
            <CardHeader>
              <CardTitle variant="snark">Modal Dialogs</CardTitle>
              <CardDescription className="text-gray-400">Overlay content windows</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="snark">Snark Dialog</Button>
                </DialogTrigger>
                <DialogContent variant="snark">
                  <DialogHeader>
                    <DialogTitle className="text-white">Snark Dialog</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      This is a dialog with the Snark variant styling.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input variant="snark" placeholder="Enter something..." />
                    <div className="flex gap-3 justify-end">
                      <Button variant="snarkGhost">Cancel</Button>
                      <Button variant="snark">Confirm</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="snarkGhost">Glass Dialog</Button>
                </DialogTrigger>
                <DialogContent variant="snarkGlass">
                  <DialogHeader>
                    <DialogTitle className="text-white">Glass Dialog</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Beautiful glass morphism effect with backdrop blur.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Textarea variant="snarkGlass" placeholder="Your feedback..." rows={4} />
                    <div className="flex gap-3 justify-end">
                      <Button variant="snarkGhost">Cancel</Button>
                      <Button variant="snark">Submit</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="snarkOutline">Gradient Dialog</Button>
                </DialogTrigger>
                <DialogContent variant="snarkGradient">
                  <DialogHeader>
                    <DialogTitle className="text-white">Gradient Dialog</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Subtle gradient with a shadow glow effect.
                    </DialogDescription>
                  </DialogHeader>
                  <Alert variant="snarkViolet">
                    <InfoIcon className="h-4 w-4" />
                    <AlertDescription>
                      Components work great together!
                    </AlertDescription>
                  </Alert>
                  <div className="flex gap-3 justify-end">
                    <Button variant="snarkGhost">Got it</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card variant="snarkGradient" className="max-w-3xl mx-auto">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-4xl font-black mb-4">Ready to build?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                All these components are ready to use in your Snark application.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="snark" size="xl">
                  Start Building
                </Button>
                <Button variant="snarkGhost" size="xl">
                  View Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
