"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  {
    title: "Street X",
    description: "Grinding boom-bap from the streets.",
    image: "/covers/mer/B-01-STREET.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0001-bottom-1?in=tenkforhim/sets/elon-mer-01-streetx",
  },
  {
    title: "Afterglow",
    description: "A dreamy trap getaway.",
    image: "/covers/mer/B-02-Afterglow.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0101-slow-tides-1?in=tenkforhim/sets/elon-mer-02-afterglowvacation",
  },
  {
    title: "17:22",
    description: "Jazzy campus memories in rap.",
    image: "/covers/mer/B-03-1722.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0201-pretoria-night-awake-1?in=tenkforhim/sets/elon-mer-03-1722",
  },
  {
    title: "CASH GOD",
    description: "High-gloss FLEX anthem.",
    image: "/covers/mer/B-04-Cash.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0352-mona-musk-52?in=tenkforhim/sets/elon-mer-04-cashgod",
  },
  {
    title: "Ugly Truth",
    description: "Crunk confession, raw and loud.",
    image: "/covers/mer/B-05-Ugly.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0500-child-abuse-in-the-name-of-progress-100?in=tenkforhim/sets/elon-mer-05-uglytruth",
  },
  {
    title: "Ten Shouts",
    description: "Drill disses, ten shots fired.",
    image: "/covers/mer/B-06-Ten.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0580-banned-one-80?in=tenkforhim/sets/elon-mer-06-tenshots",
  },
  {
    title: "Orbit of Us",
    description: "Melodic, romantic hip-hop.",
    image: "/covers/mer/B-07-Orbit.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0601-in-your-orbit-1?in=tenkforhim/sets/elon-mer-07-orbitofus",
  },
  {
    title: "Crown Me Bitch",
    description: "Women's rap in full flame.",
    image: "/covers/mer/B-08-Crown.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0800-eternal-audit-paid-in-red-100?in=tenkforhim/sets/elon-mer-08-crown-me-bitch",
  },
  {
    title: "We Are the One",
    description: "Latin hip-hop unity.",
    image: "/covers/mer/B-09-We.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-0844-senor-marte-perreo-44?in=tenkforhim/sets/elon-mer-09-wearetheone",
  },
  {
    title: "Let's Hip-hop",
    description: "Machine-made future bounce.",
    image: "/covers/mer/B-10-Let.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-mer-1000-for-elon-the-hustler-100?in=tenkforhim/sets/elon-mer-10-letshiphop",
  },
] as const;

export default function MerPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main className="planet-MER min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        MER
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes reflecting Mercury&apos;s speed
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

                <h3 className="mt-4 text-lg font-semibold text-primary text-center">
                  {sub.title}
                </h3>
                <p className="mt-1 text-sm text-center subtitle-accent group-hover:text-[var(--planet-accent)] transition-colors duration-300">
                  {sub.description}
                </p>

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
