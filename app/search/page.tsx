"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnarkLogoSimple } from "@/components/snark-logo";
import { SearchIcon, MapPinIcon, BriefcaseIcon, GraduationCapIcon, HomeIcon, TrendingUpIcon, UserIcon, PlusIcon, BellIcon, ChevronRightIcon, StarIcon , SettingsIcon } from "lucide-react";

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock entity data matching storyboard
  const mockEntities = [
    {
      id: 1,
      fullName: "Sarah Johnson",
      contextTags: ["Stanford 2019", "SF Bay Area", "Tech Industry"],
      city: "San Francisco",
      state: "CA",
      country: "USA",
      aggregateRating: 4.2,
      postCount: 8,
      isVerified: true,
      isClaimed: true
    },
    {
      id: 2,
      fullName: "Michael Chen",
      contextTags: ["UC Berkeley 2020", "East Bay", "Rock Climbing Club"],
      city: "Berkeley",
      state: "CA",
      country: "USA",
      aggregateRating: 3.5,
      postCount: 12,
      isVerified: true,
      isClaimed: false
    },
    {
      id: 3,
      fullName: "Emily Rodriguez",
      contextTags: ["UCLA 2021", "Los Angeles", "Airbnb Host"],
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      aggregateRating: 4.8,
      postCount: 15,
      isVerified: true,
      isClaimed: true
    },
    {
      id: 4,
      fullName: "James Taylor",
      contextTags: ["Stanford GSB", "Palo Alto", "Freelance Developer"],
      city: "Palo Alto",
      state: "CA",
      country: "USA",
      aggregateRating: 2.1,
      postCount: 6,
      isVerified: false,
      isClaimed: false
    }
  ];

  // Filter results based on search query and filters
  const filteredResults = searchQuery.trim()
    ? mockEntities.filter(entity => {
        const matchesName = entity.fullName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCity = !city || entity.city.toLowerCase().includes(city.toLowerCase());
        const matchesState = !state || entity.state.toLowerCase().includes(state.toLowerCase());
        return matchesName && matchesCity && matchesState;
      })
    : [];

  const handleSearch = () => {
    setHasSearched(true);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-green-400";
    if (rating >= 3) return "text-yellow-400";
    return "text-red-400";
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
              <BellIcon className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-fuchsia-500 rounded-full" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-sm">
              JD
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 pb-24 max-w-4xl mx-auto px-4 md:pb-8">
        {/* Page Header */}
        <div className="py-8">
          <h1 className="text-6xl font-black tracking-tighter mb-3 text-white">
            Search
          </h1>
          <p className="text-xl text-gray-500">Find people and see what others are saying</p>
        </div>

        {/* Search Bar */}
        <Card variant="snarkGlassBold" className="mb-8">
          <CardContent className="pt-8">
            <div className="space-y-6">
              {/* Main Search */}
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
                <Input
                  variant="snarkGlass"
                  placeholder="Search for people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="h-16 pl-14 text-xl"
                />
              </div>

              {/* Filter Toggle */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-sm text-violet-400 hover:text-violet-300 font-bold"
                >
                  {showFilters ? "Hide Filters ↑" : "Show Filters ↓"}
                </button>
                <Button variant="snark" size="lg" onClick={handleSearch}>
                  <SearchIcon className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <label className="text-sm font-bold text-gray-400 mb-2 block">City</label>
                    <Input
                      variant="snark"
                      placeholder="e.g. San Francisco"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-400 mb-2 block">State</label>
                    <Input
                      variant="snark"
                      placeholder="e.g. CA"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {!hasSearched && !searchQuery && (
          <div className="text-center py-16">
            <div className="text-7xl mb-6">🔍</div>
            <h2 className="text-3xl font-black mb-3 text-white">Search for people</h2>
            <p className="text-xl text-gray-500">Enter a name to view profiles and experiences</p>
          </div>
        )}

        {hasSearched && searchQuery && filteredResults.length === 0 && (
          <div className="text-center py-16">
            <div className="text-7xl mb-6">😕</div>
            <h2 className="text-3xl font-black mb-3 text-white">No results found</h2>
            <p className="text-xl text-gray-500">Try different search terms or check the spelling</p>
          </div>
        )}

        {filteredResults.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400">
                Found <span className="text-white font-bold">{filteredResults.length}</span> result{filteredResults.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Entity Cards */}
            {filteredResults.map((entity) => (
              <Card
                key={entity.id}
                variant="snarkGlass"
                className="hover:border-violet-500/50 transition-all cursor-pointer group"
                onClick={() => router.push(`/entity/${entity.id}`)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Name and Badges */}
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-black text-white group-hover:text-violet-400 transition-colors">
                          {entity.fullName}
                        </h3>
                        {entity.isVerified && (
                          <Badge variant="snarkGreen" className="text-xs">
                            ✓ VERIFIED
                          </Badge>
                        )}
                        {entity.isClaimed && (
                          <Badge variant="snarkViolet" className="text-xs">
                            CLAIMED
                          </Badge>
                        )}
                      </div>

                      {/* Context Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {entity.contextTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-sm">
                          {entity.city}, {entity.state}, {entity.country}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <StarIcon className={`w-5 h-5 fill-current ${getRatingColor(entity.aggregateRating)}`} />
                          <span className={`text-lg font-bold ${getRatingColor(entity.aggregateRating)}`}>
                            {entity.aggregateRating.toFixed(1)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span className="font-bold text-white">{entity.postCount}</span> post{entity.postCount !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-violet-400 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/5 z-50">
        <div className="max-w-md mx-auto flex items-center justify-around h-20 px-2">
          <button onClick={() => router.push('/feed')} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center transition-all">
              <HomeIcon className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">HOME</span>
          </button>
          
          <button onClick={() => router.push('/search')} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center transition-all">
              <SearchIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-black text-violet-400">SEARCH</span>
          </button>

          <button onClick={() => router.push('/feed')} className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full shadow-lg shadow-violet-600/50 flex items-center justify-center transition-transform group-hover:scale-110">
              <PlusIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-[9px] font-bold text-fuchsia-400">CREATE</span>
          </button>

          <button onClick={() => router.push('/admin')} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center transition-all">
              <SettingsIcon className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">ADMIN</span>
          </button>
          
          <button onClick={() => router.push('/profile')} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center transition-all">
              <UserIcon className="w-5 h-5 text-gray-400" />
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
