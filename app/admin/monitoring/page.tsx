"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, ActivityIcon, ServerIcon, DatabaseIcon, ZapIcon } from "lucide-react";

export default function SystemMonitoringPage() {
  const router = useRouter();

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
          <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">System Monitoring</h1>
          <p className="text-xl text-gray-500">Performance metrics and health checks</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <ServerIcon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-black mb-2">API Status</h3>
              <Badge variant="snarkGreen" className="text-lg">✓ Operational</Badge>
              <p className="text-sm text-gray-500 mt-4">99.98% uptime</p>
            </CardContent>
          </Card>

          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <DatabaseIcon className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-2xl font-black mb-2">Database</h3>
              <Badge variant="snarkGreen" className="text-lg">✓ Healthy</Badge>
              <p className="text-sm text-gray-500 mt-4">45ms avg query time</p>
            </CardContent>
          </Card>

          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <ZapIcon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-black mb-2">Response Time</h3>
              <p className="text-4xl font-black text-white mb-2">234ms</p>
              <p className="text-sm text-gray-500">P95 latency</p>
            </CardContent>
          </Card>

          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <ActivityIcon className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-2xl font-black mb-2">Active Requests</h3>
              <p className="text-4xl font-black text-white mb-2">1,247</p>
              <p className="text-sm text-gray-500">Per minute</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
