"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  { title: "DOGE", description: "wow. much rocket. very destiny.", image: "/covers/ai/E-1-1.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0001-doge-bootup-1?in=tenkforhim/sets/elon-ai-01-doge" },
  { title: "GAMESTONK!!", description: "One screenshot. One subreddit. Shorts panic.", image: "/covers/ai/E-2-2.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0101-citadel-buy-button-1?in=tenkforhim/sets/elon-ai-02-gamestonk" },
  { title: "NOT-A-FLAMETHROWER", description: "It's not a flamethrower. It's a warm air encouragement device.", image: "/covers/ai/E-3-3.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0201-cutter-teeth-1?in=tenkforhim/sets/elon-ai-03-not-a-flamethrower" },
  { title: "S3XY SHORT SHORTS", description: "Dress code: confidence. Fabric: chaos.", image: "/covers/ai/E-4-4.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0301-short-seller-gloom-1?in=tenkforhim/sets/elon-ai-04-s3xy-short-shorts" },
  { title: "USE SIGNAL", description: "If you can read this, you're already encrypted.", image: "/covers/ai/E-5-5.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0401-whatsapp-update-1?in=tenkforhim/sets/elon-ai-05-use-signal" },
  { title: "CAGE MATCH", description: "Send location. Fists don't check bank accounts.", image: "/covers/ai/E-6-6.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0501-cage-match-1?in=tenkforhim/sets/elon-ai-06-cage-match" },
  { title: "TECHNOKING", description: "CEO by day, warehouse rave deity by night.", image: "/covers/ai/E-7-7.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0700-i-am-iron-guy-100?in=tenkforhim/sets/elon-ai-07-technoking" },
  { title: "OPTIMUS DEMO", description: "If it glitches on stage, it's officially a feature.", image: "/covers/ai/E-8-8.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0701-throw-the-ball-1?in=tenkforhim/sets/optimus-demo" },
  { title: "BURNT HAIR", description: "Repugnant desire, bottled, then sold out like it's couture.", image: "/covers/ai/E-9-9.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-0801-with-a-name-like-mine-1?in=tenkforhim/sets/elon-ai-09-burnt-hair" },
  { title: "Let's EDM", description: "The sink dropped. The bass dropped harder.", image: "/covers/ai/E-10-Let.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-ai-1000-for-elon-the-memelord-100?in=tenkforhim/sets/elon-ai-10-lets-edm" },
] as const;

export default function AiPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main className="planet-AI min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        AI
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes where the machine learns to feel
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
