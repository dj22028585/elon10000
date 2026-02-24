"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  {
    title: "Ignition",
    description: "Where the sky learns to burn",
    image: "/covers/sun/A-01-IGNITION.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0001-10-1?in=tenkforhim/sets/elon-sun-01-ignition",
  },
  {
    title: "Solar Embrace",
    description: "Radiant warmth and light",
    image: "/covers/sun/A-02-Solar.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0101-curtains-open-1?in=tenkforhim/sets/elon-sun-02-solarembrace",
  },
  {
    title: "Aureate Throne",
    description: "Majestic golden energy",
    image: "/covers/sun/A-03-Aureate.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0201-voice-in-the-sand-1?in=tenkforhim/sets/elon-sun-03-aureatethrone",
  },
  {
    title: "Red March, Black Ledger",
    description: "War and reckoning",
    image: "/covers/sun/A-04-Red.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0316-the-beginning-of-the-end-16?in=tenkforhim/sets/elon-sun-04-redmarchblackledger",
  },
  {
    title: "Dear Rocket Boy",
    description: "Letters to the sky",
    image: "/covers/sun/A-05-Dear.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0401-rocket-girl-1?in=tenkforhim/sets/elon-sun-05-dearrocketboy",
  },
  {
    title: "Chasing Horizons",
    description: "Beyond the edge of day",
    image: "/covers/sun/A-06-Chasing.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0600-beyond-speed-100?in=tenkforhim/sets/elon-sun-06-chasinghorizons",
  },
  {
    title: "Endless Sunset",
    description: "Never-ending glow",
    image: "/covers/sun/A-07-Endless.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0700-endless-sunset-100?in=tenkforhim/sets/elon-sun-07-endlesssunset",
  },
  {
    title: "Lucid Reverie",
    description: "Dreamlike clarity",
    image: "/covers/sun/A-08-Lucid.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0701-celestial-yawn-1?in=tenkforhim/sets/elon-sun-08-lucidreverie",
  },
  {
    title: "Riff & Boogie",
    description: "Rhythms of freedom",
    image: "/covers/sun/A-09-Riff.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-0801-little-m-1?in=tenkforhim/sets/elon-sun-09-riffboogie",
  },
  {
    title: "Let's Rock",
    description: "They learn rock",
    image: "/covers/sun/A-10-Let.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-sun-1000-for-elon-the-challenger-100?in=tenkforhim/sets/elon-sun-10-letsrock",
  },
] as const;

export default function SunPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main className="planet-SUN min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        SUN
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes inspired by the Sun
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {subthemes.map((sub, i) => {
          const isOpen = openPlayer === i;
          const scSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
            sub.scUrl
          )}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

          return (
            <div
              key={i}
              className="
                group rounded-xl overflow-hidden bg-card/40 border border-border/60 
                shadow-sm transition-all duration-300 
                hover:shadow-[0_0_30px_var(--planet-accent)] hover:border-[var(--planet-accent)]
              "
            >
              <div className="p-4">
                {/* Album Cover */}
                <div className="aspect-[3/4] w-full bg-black/30 rounded-md overflow-hidden flex items-center justify-center">
                  {sub.image ? (
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      width={600}
                      height={800}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 50vw, 480px"
                    />
                  ) : (
                    <span className="text-2xl text-muted">???</span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-lg font-semibold text-primary text-center">
                  {sub.title}
                </h3>
                <p className="mt-1 text-sm text-center subtitle-accent group-hover:text-[var(--planet-accent)] transition-colors duration-300">
                  {sub.description}
                </p>

                {/* Play Button */}
                <button
                  onClick={() => setOpenPlayer(isOpen ? null : i)}
                  className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md
                             text-sm font-medium transition-all duration-300
                             bg-black/30 border border-white/10 hover:border-white/25
                             text-white/70 hover:text-white"
                >
                  {isOpen ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Close Player
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Listen Sample
                    </>
                  )}
                </button>

                {/* SoundCloud Embed */}
                {isOpen && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <iframe
                      title={`${sub.title} player`}
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      loading="lazy"
                      src={scSrc}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
