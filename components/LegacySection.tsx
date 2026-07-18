"use client";

import { useState } from "react";
import Image from "next/image";
import NodeDot from "./NodeDot";

export default function LegacySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="paper-section py-24 relative">
      <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative">
        <NodeDot className="-ml-[52px] mt-2" />

        <div>
          <h2 className="font-headline-lg text-headline-lg text-root-ink mb-8">
            The 14.0 Legacy
          </h2>
          <p className="font-body-lg text-body-lg text-root-ink/80 mb-6 leading-relaxed">
            ITECHROOTS 14.0 set a benchmark for excellence — drawing hundreds of participants, showcasing cutting-edge technical talent, and creating an unforgettable celebration of innovation. Our aftermovie captures the energy, scale, and impact of the event.
          </p>
          <p className="font-body-lg text-body-lg text-root-ink/80 leading-relaxed font-semibold">
            Experience the legacy that makes ITECHROOTS a trusted platform for your brand.
          </p>
        </div>

        <div className="relative">
          <div
            onClick={() => setIsPlaying(true)}
            className="aspect-video w-full bg-root-ink rounded-lg border-4 border-copper overflow-hidden shadow-2xl relative cursor-pointer group"
          >
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300 z-10">
              <span className="material-symbols-outlined text-copper text-6xl group-hover:scale-110 transition-transform duration-300">
                play_circle
              </span>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-full relative">
              <Image
                src="https://img.youtube.com/vi/gIDVkGmbI6A/maxresdefault.jpg"
                alt="ITECHROOTS 14.0 Legacy Aftermovie Cover"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player Overlay */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity">
          <div className="relative w-full max-w-4xl bg-[#0B1220] border border-copper/50 rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute right-4 top-4 text-white hover:text-signal-green focus:outline-none z-10 bg-black/55 p-1 rounded-full"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* YouTube Embed Player */}
            <div className="aspect-video w-full bg-black relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gIDVkGmbI6A?autoplay=1"
                title="ITECHROOTS 14.0 Official Aftermovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
