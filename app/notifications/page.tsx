"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { BellIcon, HomeIcon, SearchIcon, TrendingUpIcon, UserIcon, PlusIcon, MessageSquareIcon, CheckCircleIcon, AlertCircleIcon, UserPlusIcon, ArrowLeftIcon } from "lucide-react";

export default function NotificationsPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "new_post",
      icon: MessageSquareIcon,
      iconColor: "text-violet-400",
      bgColor: "bg-violet-500/10",
      title: "New post about Sarah Johnson",
      message: "Michael Chen posted a review about Sarah Johnson",
      timestamp: "5 minutes ago",
      isRead: false,
      link: "/post/1"
    },
    {
      id: 2,
      type: "reply_published",
      icon: CheckCircleIcon,
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      title: "Your reply was published",
      message: "Your Right of Reply response has been approved and is now visible",
      timestamp: "2 hours ago",
      isRead: false,
      link: "/post/2"
    },
    {
      id: 3,
      type: "moderation",
      icon: AlertCircleIcon,
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      title: "Moderation decision: Approved",
      message: "Your post about Alex Rodriguez has been reviewed and approved",
      timestamp: "1 day ago",
      isRead: true,
      link: "/post/3"
    },
    {
      id: 4,
      type: "claim_approved",
      icon: UserPlusIcon,
      iconColor: "text-fuchsia-400",
      bgColor: "bg-fuchsia-500/10",
      title: "Profile claim approved",
      message: "Your claim for the profile 'John Doe' has been approved",
      timestamp: "2 days ago",
      isRead: true,
      link: "/profile"
    },
    {
      id: 5,
      type: "new_post",
      icon: MessageSquareIcon,
      iconColor: "text-violet-400",
      bgColor: "bg-violet-500/10",
      title: "New post about Emily Rodriguez",
      message: "Sarah Martinez posted a review about Emily Rodriguez",
      timestamp: "3 days ago",
      isRead: true,
      link: "/post/4"
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const handleNotificationClick = (notification: typeof notifications[0]) => {
    markAsRead(notification.id);
    router.push(notification.link);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SnarkLogoSimple size={28} />
            <span className="text-xl font-black tracking-tighter text-white">SNARK</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
              <BellIcon className="w-5 h-5 text-violet-400" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-fuchsia-500 rounded-full flex items-center justify-center text-[10px] font-black">
                  {unreadCount}
                </span>
              )}
            </button>
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-sm">
              JD
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 pb-24 max-w-3xl mx-auto px-4 md:pb-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 mt-6"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-bold">Back</span>
        </button>

        {/* Page Header */}
        <div className="py-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <BellIcon className="w-10 h-10 text-violet-400" />
              <h1 className="text-6xl font-black tracking-tighter text-white">
                Notifications
              </h1>
            </div>
            {unreadCount > 0 && (
              <Badge variant="snarkFuchsia" className="text-lg px-4 py-2">
                {unreadCount} New
              </Badge>
            )}
          </div>
          <p className="text-xl text-gray-500">Stay updated on your posts and replies</p>
        </div>

        {/* Mark All as Read */}
        {unreadCount > 0 && (
          <div className="mb-6">
            <Button variant="snarkGhost" size="lg" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          </div>
        )}

        {/* Notifications List */}
        {notifications.length === 0 ? (
          <Card variant="snarkGlassBold">
            <CardContent className="pt-16 pb-16 text-center">
              <BellIcon className="w-16 h-16 mx-auto mb-6 text-gray-600" />
              <h3 className="text-2xl font-black mb-3 text-white">No notifications</h3>
              <p className="text-lg text-gray-500">You're all caught up!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <button
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  className={`w-full text-left transition-all ${
                    notification.isRead ? 'opacity-60' : ''
                  }`}
                >
                  <Card className="hover:border-violet-500/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-2xl ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${notification.iconColor}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className={`text-lg font-black ${notification.isRead ? 'text-gray-400' : 'text-white'}`}>
                              {notification.title}
                            </h3>
                            {!notification.isRead && (
                              <div className="w-3 h-3 bg-fuchsia-500 rounded-full flex-shrink-0 mt-1" />
                            )}
                          </div>
                          <p className={`text-sm mb-3 ${notification.isRead ? 'text-gray-600' : 'text-gray-400'}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-600">
                            {notification.timestamp}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Nav - Mobile */}
      <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 z-50 md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-around h-20 px-4">
          <button onClick={() => router.push('/feed')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <HomeIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">HOME</span>
          </button>
          <button onClick={() => router.push('/search')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <SearchIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">SEARCH</span>
          </button>

          {/* Create Post Button */}
          <button
            onClick={() => router.push('/feed')}
            className="flex flex-col items-center gap-2 group -mt-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform">
              <PlusIcon className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-black text-fuchsia-400">POST</span>
          </button>

          <button onClick={() => router.push('/trending')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <TrendingUpIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">TRENDING</span>
          </button>
          <button onClick={() => router.push('/profile')} className="flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <UserIcon className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">PROFILE</span>
          </button>
        </div>
      </div>

      {/* Desktop FAB */}
      <button
        onClick={() => router.push('/feed')}
        className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl shadow-violet-600/50 items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40 group"
      >
        <PlusIcon className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
