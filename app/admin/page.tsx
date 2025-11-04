"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { LayoutDashboardIcon, UsersIcon, GitMergeIcon, FileTextIcon, ActivityIcon, TrendingUpIcon, AlertCircleIcon, CheckCircleIcon } from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();

  const stats = {
    totalUsers: 10247,
    activeUsers: 8934,
    totalPosts: 45621,
    postsToday: 234,
    moderationQueue: 12,
    avgResponseTime: "32m",
    claimsPending: 8,
    duplicateEntities: 156
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SnarkLogoSimple size={28} />
            <span className="text-xl font-black tracking-tighter text-white">SNARK</span>
            <Badge variant="snarkFuchsia" className="ml-3">ADMIN</Badge>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-sm">
              ADM
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="py-8">
          <div className="flex items-center gap-3 mb-3">
            <LayoutDashboardIcon className="w-10 h-10 text-violet-400" />
            <h1 className="text-6xl font-black tracking-tighter text-white">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-xl text-gray-500">Platform overview and management</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <UsersIcon className="w-8 h-8 text-violet-400 mb-3" />
              <p className="text-sm text-gray-500 mb-1">Total Users</p>
              <p className="text-4xl font-black text-white">{stats.totalUsers.toLocaleString()}</p>
              <p className="text-xs text-green-400 mt-2">+234 this week</p>
            </CardContent>
          </Card>

          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <ActivityIcon className="w-8 h-8 text-fuchsia-400 mb-3" />
              <p className="text-sm text-gray-500 mb-1">Active Users</p>
              <p className="text-4xl font-black text-white">{stats.activeUsers.toLocaleString()}</p>
              <p className="text-xs text-gray-400 mt-2">87% of total</p>
            </CardContent>
          </Card>

          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <FileTextIcon className="w-8 h-8 text-purple-400 mb-3" />
              <p className="text-sm text-gray-500 mb-1">Total Posts</p>
              <p className="text-4xl font-black text-white">{stats.totalPosts.toLocaleString()}</p>
              <p className="text-xs text-green-400 mt-2">+{stats.postsToday} today</p>
            </CardContent>
          </Card>

          <Card variant="snarkGlassBold">
            <CardContent className="pt-8">
              <AlertCircleIcon className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-sm text-gray-500 mb-1">Moderation Queue</p>
              <p className="text-4xl font-black text-yellow-400">{stats.moderationQueue}</p>
              <p className="text-xs text-gray-400 mt-2">Avg: {stats.avgResponseTime}</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            variant="snarkGlassBold"
            className="cursor-pointer hover:border-violet-500/50 transition-all"
            onClick={() => router.push('/admin/users')}
          >
            <CardContent className="pt-8">
              <div className="flex items-start justify-between">
                <div>
                  <UsersIcon className="w-12 h-12 text-violet-400 mb-4" />
                  <h3 className="text-2xl font-black mb-2">User Management</h3>
                  <p className="text-gray-400 mb-4">Manage user accounts, roles, and permissions</p>
                  <Badge variant="snarkViolet">{stats.totalUsers.toLocaleString()} users</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            variant="snarkGlassBold"
            className="cursor-pointer hover:border-violet-500/50 transition-all"
            onClick={() => router.push('/admin/entities')}
          >
            <CardContent className="pt-8">
              <div className="flex items-start justify-between">
                <div>
                  <GitMergeIcon className="w-12 h-12 text-fuchsia-400 mb-4" />
                  <h3 className="text-2xl font-black mb-2">Entity Management</h3>
                  <p className="text-gray-400 mb-4">Merge duplicates and manage entity profiles</p>
                  <Badge variant="snarkFuchsia">{stats.duplicateEntities} duplicates</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            variant="snarkGlassBold"
            className="cursor-pointer hover:border-violet-500/50 transition-all"
            onClick={() => router.push('/admin/audit')}
          >
            <CardContent className="pt-8">
              <div className="flex items-start justify-between">
                <div>
                  <FileTextIcon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-black mb-2">Audit Logs</h3>
                  <p className="text-gray-400 mb-4">View system activity and moderator actions</p>
                  <Badge variant="snarkViolet">Real-time logs</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            variant="snarkGlassBold"
            className="cursor-pointer hover:border-violet-500/50 transition-all"
            onClick={() => router.push('/admin/monitoring')}
          >
            <CardContent className="pt-8">
              <div className="flex items-start justify-between">
                <div>
                  <ActivityIcon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-black mb-2">System Monitoring</h3>
                  <p className="text-gray-400 mb-4">Performance metrics and health checks</p>
                  <Badge variant="snarkGreen">✓ All systems operational</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
