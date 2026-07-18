"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import NodeDot from "./NodeDot";

interface EventItem {
  name: string;
  category: "TECH" | "CULTURAL" | "SPORTS" | "OTHER";
  date: string;
  time: string;
  duration: string;
  venue: string;
  fee: number;
  capacity: number | string;
  description: string;
  image: string;
}

const eventsData: EventItem[] = [
  {
    name: "Code Clash",
    category: "TECH",
    date: "2025-08-24",
    time: "09:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 3000,
    capacity: 50,
    description: "Code Clash is an exciting coding battle designed to sharpen analytical thinking and programming skills.",
    image: "/code-clash_cchban.png",
  },
  {
    name: "Reel It",
    category: "CULTURAL",
    date: "2025-08-24",
    time: "09:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 10999,
    capacity: 100,
    description: "Reel It is your stage to unleash creativity in the world of short-form videos.",
    image: "/reel-it_z3xywt.jpg",
  },
  {
    name: "FreeFire",
    category: "SPORTS",
    date: "2025-08-24",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Remote",
    fee: 3000,
    capacity: 200,
    description: "Gear up for an adrenaline-packed battle in the Free Fire Showdown...",
    image: "/free-fire.jpg",
  },
  {
    name: "Satyanveshi",
    category: "TECH",
    date: "2025-08-23",
    time: "02:00 PM",
    duration: "12 hrs",
    venue: "Online",
    fee: 60,
    capacity: "Individual",
    description: "Beginner-friendly online cyber investigation contest.",
    image: "/satyanveshi_nvcsza.jpg",
  },
  {
    name: "Tug Of War",
    category: "SPORTS",
    date: "2025-08-23",
    time: "09:00 AM",
    duration: "3 to 4 hrs",
    venue: "Volleyball Ground",
    fee: 4000,
    capacity: 400,
    description: "Epic battle of teamwork and strategy.",
    image: "/tug-of-war_nj8q9e.jpg",
  },
  {
    name: "Hackathon",
    category: "TECH",
    date: "2025-08-23",
    time: "09:00 AM",
    duration: "10 hrs",
    venue: "IT Building",
    fee: 20000,
    capacity: 100,
    description: "Transform ideas into working prototypes leveraging AI.",
    image: "/hackathon_uvpzrg.jpg",
  },
  {
    name: "Quiz Mania",
    category: "TECH",
    date: "2025-08-23",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 800,
    capacity: 60,
    description: "Thrilling battle of wits and knowledge.",
    image: "/quize-mania_ok76mp.jpg",
  },
  {
    name: "Startup Saga",
    category: "TECH",
    date: "2025-08-23",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 5000,
    capacity: 60,
    description: "Pitch your innovation at this platform for budding entrepreneurs.",
    image: "/start-up-saga_qljoby.jpg",
  },
  {
    name: "Poster Design",
    category: "CULTURAL",
    date: "2025-08-23",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 1000,
    capacity: 70,
    description: "Unleash your imagination blending colors and ideas.",
    image: "/poster-design_e1v2wd.jpg",
  },
  {
    name: "Vibe Coding",
    category: "TECH",
    date: "2025-08-22",
    time: "01:00 PM",
    duration: "4 hrs",
    venue: "Department of IT",
    fee: 3000,
    capacity: 60,
    description: "Creative coding marathon for impactful projects.",
    image: "/vibe-coding_pkb7h5.jpg",
  },
  {
    name: "Chess",
    category: "SPORTS",
    date: "2025-08-22",
    time: "09:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 1500,
    capacity: 60,
    description: "Strategize, Compete, and Conquer the Board!",
    image: "/chess_zkjobj.jpg",
  },
  {
    name: "BGMI",
    category: "SPORTS",
    date: "2025-08-22",
    time: "10:00 AM",
    duration: "10 hrs",
    venue: "Remote",
    fee: 5000,
    capacity: 200,
    description: "Dominate the battlegrounds at the Campus Brawl.",
    image: "/Bgmi_y3txrf.jpg",
  },
  {
    name: "Valorant",
    category: "SPORTS",
    date: "2025-08-22",
    time: "10:00 AM",
    duration: "10 hrs",
    venue: "Remote",
    fee: 4999,
    capacity: 250,
    description: "The ultimate gaming showdown arena.",
    image: "/valorant_brq4yb.jpg",
  },
  {
    name: "FIFA",
    category: "SPORTS",
    date: "2025-08-22",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 3998,
    capacity: 70,
    description: "Step onto the virtual pitch.",
    image: "/fifa_igmu65.jpg",
  },
  {
    name: "Cricket",
    category: "SPORTS",
    date: "2025-08-22",
    time: "10:00 AM",
    duration: "10 hrs",
    venue: "Basketball Ground",
    fee: 5000,
    capacity: 500,
    description: "Box Cricket Bash - Team Size: 7 players.",
    image: "/box-cricket_yhh6dn.jpg",
  },
  {
    name: "Beat the Mark",
    category: "OTHER",
    date: "2025-08-22",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Department of IT",
    fee: 800,
    capacity: 50,
    description: "Action-packed event with thrilling challenges.",
    image: "/beat-the-mark_yc9zs0.jpg",
  },
  {
    name: "Futsal",
    category: "SPORTS",
    date: "2025-08-21",
    time: "10:00 AM",
    duration: "8 hrs",
    venue: "DMMC TURF",
    fee: 4000,
    capacity: 600,
    description: "Elite Cup - Team Size: 6 players + subs.",
    image: "/fustal_a6gi9k.jpg",
  },
  {
    name: "Photo Arena",
    category: "CULTURAL",
    date: "2025-08-19",
    time: "10:00 AM",
    duration: "5 hrs",
    venue: "Remote",
    fee: 1000,
    capacity: 50,
    description: "Capture the world through your lens.",
    image: "/photo-arena_cw4ltd.jpg",
  },
];

export default function EventArchiveSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "fee-asc" | "fee-desc" | "date">("date");

  const categories = ["ALL", "TECH", "SPORTS", "CULTURAL", "OTHER"];

  const filteredAndSortedEvents = useMemo(() => {
    let result = [...eventsData];

    // Filter by Category
    if (activeCategory !== "ALL") {
      result = result.filter((e) => e.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(query) ||
          e.description.toLowerCase().includes(query)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "fee-asc") {
        return a.fee - b.fee;
      }
      if (sortBy === "fee-desc") {
        return b.fee - a.fee;
      }
      if (sortBy === "date") {
        return a.date.localeCompare(b.date);
      }
      return 0;
    });

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "TECH":
        return "bg-signal-green/10 text-signal-green border-signal-green/20";
      case "SPORTS":
        return "bg-copper/10 text-copper border-copper/20";
      case "CULTURAL":
        return "bg-root-ink/10 text-root-ink border-root-ink/20";
      default:
        return "bg-slate-400/10 text-slate-700 border-slate-400/20";
    }
  };

  return (
    <section id="events" className="paper-section py-24 border-t border-mist/20 relative scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-margin-desktop relative">
        <NodeDot className="-ml-[52px] mt-2" />
        
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-root-ink mb-4">
              Past Events Archive
            </h2>
            <p className="font-body-md text-root-ink/65 max-w-lg">
              Explore the legacy of competitions and showcases that defined our previous editions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-transparent border border-mist/50 focus:border-signal-green px-4 py-2 font-data-label text-data-label text-root-ink outline-none transition-all placeholder-root-ink/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-root-ink/50 hover:text-root-ink"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full sm:w-48 bg-transparent border border-mist/50 focus:border-signal-green px-4 py-2 font-data-label text-data-label text-root-ink outline-none appearance-none transition-all cursor-pointer"
              >
                <option value="date">Sort by: Date</option>
                <option value="name">Sort by: Alphabetical</option>
                <option value="fee-asc">Sort by: Fee (Low to High)</option>
                <option value="fee-desc">Sort by: Fee (High to Low)</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-root-ink/60">
                <span className="material-symbols-outlined text-sm">unfold_more</span>
              </div>
            </div>

            {/* Interactive Tab System */}
            <div className="flex flex-wrap gap-1 bg-root-ink/5 p-1 rounded-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 font-data-label text-[13px] font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-root-ink text-white shadow-xs"
                      : "text-root-ink/60 hover:text-root-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredAndSortedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter transition-all duration-300">
            {filteredAndSortedEvents.map((event) => (
              <div
                key={event.name}
                className="bg-white border border-mist/30 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
              >
                {/* Event Poster Image */}
                <div className="relative aspect-video w-full bg-[#0B1220] overflow-hidden border-b border-mist/10">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`font-data-label text-[10px] px-3 py-1 uppercase tracking-wider font-semibold border bg-white/95 shadow-sm ${getCategoryStyles(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-root-ink mb-2 group-hover:text-signal-green transition-colors duration-300">
                      {event.name}
                    </h3>
                    
                    <p className="font-body-md text-root-ink/70 text-sm mb-6 min-h-[48px] line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 pt-6 border-t border-mist/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-data-label text-[10px] text-root-ink/40 uppercase tracking-wider font-semibold">Date & Time</p>
                        <p className="font-data-value text-[13px] text-root-ink mt-0.5">{event.date} | {event.time}</p>
                      </div>
                      <div>
                        <p className="font-data-label text-[10px] text-root-ink/40 uppercase tracking-wider font-semibold">Duration</p>
                        <p className="font-data-value text-[13px] text-root-ink mt-0.5">{event.duration}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-data-label text-[10px] text-root-ink/40 uppercase tracking-wider font-semibold">Venue</p>
                        <p className="font-data-value text-[13px] text-root-ink mt-0.5 truncate">{event.venue}</p>
                      </div>
                      <div>
                        <p className="font-data-label text-[10px] text-root-ink/40 uppercase tracking-wider font-semibold">Participation</p>
                        <p className="font-data-value text-[13px] text-root-ink mt-0.5">{event.capacity}</p>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <p className="font-data-label text-[10px] text-root-ink/40 uppercase tracking-wider font-semibold">Registration Fee</p>
                      <p className="font-headline-md text-root-ink text-lg font-bold mt-0.5">
                        ₹{event.fee.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-mist/30">
            <span className="material-symbols-outlined text-4xl text-mist">search_off</span>
            <p className="font-headline-md text-root-ink mt-4">No events found</p>
            <p className="font-body-md text-root-ink/65 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
}
