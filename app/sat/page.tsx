"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  { title: "Curiosity", description: "Ask the waves, Where are you?", image: "/covers/sat/H-01-1.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0100-por-que-tudo-ficou-azul-100?in=tenkforhim/sets/elon-sat-01-curiosity" },
  { title: "First Principles", description: "A clean room where truth is rebuilt.", image: "/covers/sat/H-02-2.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0101-the-origin-1?in=tenkforhim/sets/elon-sat-02-first-principles" },
  { title: "D", description: "Delete until only the human breath remains.", image: "/covers/sat/H-03-3.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0201-delete-1?in=tenkforhim/sets/elon-sat-03-d" },
  { title: "REDLINE", description: "Speed with its jaw clenched.", image: "/covers/sat/H-04-4.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0400-overdriving-100?in=tenkforhim/sets/elon-sat-04-redline" },
  { title: "Risk", description: "Beauty with a cracked seal.", image: "/covers/sat/H-05-5.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0401-error_404_swing-1?in=tenkforhim/sets/elon-sat-05-risk" },
  { title: "Free Speech", description: "Street gospel in a brass throat.", image: "/covers/sat/H-06-6.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0501-admit-you-love-censorship-20251205-1?in=tenkforhim/sets/elon-sat-06-free-speech" },
  { title: "胡蝶之夢", description: "A soft world that forgets which side is real.", image: "/covers/sat/H-07-7.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0700-hu-die-zhi-meng-soft-render-100?in=tenkforhim/sets/elon-sat-07" },
  { title: "BIG BUSINESS", description: "Marble quiet. Ink that bites.", image: "/covers/sat/H-08-8.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0701-the-door-clicks-shut-behind-us-and-every-smile-in-the-room-becomes-expensive-and-carefully-measured-1?in=tenkforhim/sets/elon-sat-08-big-business" },
  { title: "Consciousness", description: "A hundred sparks learning one name.", image: "/covers/sat/H-09-9.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-0801-w-1?in=tenkforhim/sets/elon-sat-09-consciousness" },
  { title: "Let's Jazz", description: "Cold metal, warm warning.", image: "/covers/sat/H-10-10.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-sat-1000-for-elon-the-thinker-100?in=tenkforhim/sets/elon-sat-10-lets-jazz" },
] as const;

export default function SatPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main
      className="planet-SAT min-h-screen bg-cosmic-gradient px-6 py-20"
      style={{ "--planet-accent": "#00ced1" } as React.CSSProperties}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        SAT
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes swinging in emerald jazz
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
