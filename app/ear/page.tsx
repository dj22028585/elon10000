"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import type { CSSProperties } from "react";

type Subtheme = {
  title: string;
  description: string;
  image?: string | null;
  scUrl: string;
};

const subthemes: Subtheme[] = [
  { title: "Cradle", description: "A portrait of Earth before anyone was there to remember it.", image: "/covers/ear/D-01-C.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0001-horizon-1?in=tenkforhim/sets/elon-ear-01-cradle" },
  { title: "Neighbors", description: "They noticed us before we noticed them.", image: "/covers/ear/D-02-N.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0200-mountain-gorilla-100?in=tenkforhim/sets/elon-ear-02-neighbors" },
  { title: "Motherland", description: "Where journeys begin and stories remember.", image: "/covers/ear/D-03-A.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0201-kabla-ya-kutenganishwa-1?in=tenkforhim/sets/elon-ear-03-motherland" },
  { title: "Craft", description: "Where hands learn, and meaning is shaped.", image: "/covers/ear/D-04-A.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0301-xing-notian-xia-1?in=tenkforhim/sets/elon-ear-04-craft" },
  { title: "Form", description: "Where law meets beauty, and design becomes destiny.", image: "/covers/ear/D-05-E.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0406-via-ad-martem-6?in=tenkforhim/sets/elon-ear-05-form" },
  { title: "Expansion", description: "Where frontiers widen, and tomorrow learns to move.", image: "/covers/ear/D-06-N.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0528-texas-28?in=tenkforhim/sets/elon-ear-06-expansion" },
  { title: "Pulse", description: "Where rhythm becomes heartbeat, and the earth dances.", image: "/covers/ear/D-07-S.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0682-cumbia-futuro-82?in=tenkforhim/sets/elon-ear-07-pulse" },
  { title: "Voyage", description: "Where the sea becomes a road, and stars guide the way.", image: "/covers/ear/D-08-O.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0800-namo-i-te-po-100?in=tenkforhim/sets/elon-ear-08-voyage" },
  { title: "Silence", description: "A blues elegy for the decades the Moon stayed quiet.", image: "/covers/ear/D-09-M.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-0801-moonlight-on-a-dead-clock-1?in=tenkforhim/sets/elon-ear-09-silence" },
  { title: "Let's World Music", description: "When borders fade, the chorus begins.", image: "/covers/ear/D-10-Let.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ear-1000-for-elon-the-human-100?in=tenkforhim/sets/elon-ear-10-letsworldmusic" },
];

const EAR_ACCENT = "#41ff8f";

export default function EarPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main
      className="planet-EAR min-h-screen bg-cosmic-gradient px-6 py-20"
      style={{ "--planet-accent": EAR_ACCENT } as CSSProperties}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        EAR
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes woven from Earth&apos;s voices
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
                hover:shadow-[0_0_30px_var(--planet-accent)]
                hover:border-[var(--planet-accent)]
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
