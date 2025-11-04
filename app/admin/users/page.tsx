"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { ArrowLeftIcon, SearchIcon, ShieldCheckIcon } from "lucide-react";

export default function UserManagementPage() {
  const router = useRouter();

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "active", posts: 12 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "moderator", status: "active", posts: 0 },
    { id: 3, name: "Admin User", email: "admin@snark.com", role: "admin", status: "active", posts: 0 }
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
          <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">User Management</h1>
          <p className="text-xl text-gray-500">Manage user accounts and permissions</p>
        </div>

        <Card variant="snarkGlassBold" className="mb-6">
          <CardContent className="pt-8">
            <div className="relative mb-6">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input variant="snarkGlass" placeholder="Search users..." className="h-14 pl-12" />
            </div>

            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="p-5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-black text-white text-lg mb-1">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={user.role === "admin" ? "snarkFuchsia" : user.role === "moderator" ? "snarkViolet" : "snarkGlass"}>
                      {user.role}
                    </Badge>
                    <Badge variant={user.status === "active" ? "snarkGreen" : "snarkGlass"}>
                      {user.status}
                    </Badge>
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
