"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, FileTextIcon } from "lucide-react";

export default function AuditLogsPage() {
  const router = useRouter();

  const logs = [
    { id: 1, action: "Post Approved", moderator: "Jane Smith", target: "Post #12345", timestamp: "2 minutes ago" },
    { id: 2, action: "User Banned", admin: "Admin User", target: "user@example.com", timestamp: "15 minutes ago" },
    { id: 3, action: "Entity Merged", admin: "Admin User", target: "John Smith", timestamp: "1 hour ago" }
  ];

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
          <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">Audit Logs</h1>
          <p className="text-xl text-gray-500">System activity and moderator actions</p>
        </div>

        <Card variant="snarkGlassBold">
          <CardContent className="pt-8">
            <div className="space-y-3">
              {logs.map((log) => (
                <div key={log.id} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-white mb-1">{log.action}</p>
                      <p className="text-sm text-gray-500">
                        {log.moderator || log.admin} • {log.target}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">{log.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
