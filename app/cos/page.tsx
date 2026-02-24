"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  { title: "Zip2", description: "We help media companies get online.", image: "/covers/cos/I-01-1.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0001-the-city-had-no-map-until-we-stayed-awake-1?in=tenkforhim/sets/elon-cos-01-zip2" },
  { title: "PayPal", description: "Creating a new world currency.", image: "/covers/cos/I-02-2.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0101-a-bank-without-marble-1?in=tenkforhim/sets/elon-cos-02-paypal" },
  { title: "SpaceX", description: "To make life multi-planetary.", image: "/covers/cos/I-03-3.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0201-mars-oasis-the-dream-1?in=tenkforhim/sets/elon-cos-03-spacex" },
  { title: "Tesla", description: "To accelerate the world's transition to sustainable energy.", image: "/covers/cos/I-04-4.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0301-the-secret-master-plan-1?in=tenkforhim/sets/elon-cos-04-tesla" },
  { title: "Ad Astra", description: "Teach to the problem, not the tool.", image: "/covers/cos/I-05-5.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0401-breaking-the-assembly-line-1?in=tenkforhim/sets/elon-cos-05-ad-astra" },
  { title: "Neuralink", description: "Create a generalized brain interface to restore autonomy.", image: "/covers/cos/I-06-6.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0501-the-threat-1?in=tenkforhim/sets/elon-cos-06-neuralink" },
  { title: "The Boring Company", description: "Solve the problem of soul-destroying traffic.", image: "/covers/cos/I-07-7.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0601-soul-crushing-traffic-1?in=tenkforhim/sets/elon-cos-07-the-boring-company" },
  { title: "X", description: "X is the global town square.", image: "/covers/cos/I-08-8.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0701-let-that-sink-in-1?in=tenkforhim/sets/elon-cos-08-x" },
  { title: "xAI", description: "To understand the true nature of the universe.", image: "/covers/cos/I-09-9.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-0801-maximum-truth-1?in=tenkforhim/sets/elon-cos-09-xai" },
  { title: "Let's House", description: "Slash red tape to unleash freedom.", image: "/covers/cos/I-10-10.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-cos-1000-for-elon-the-emperor-100?in=tenkforhim/sets/elon-cos-10-lets-house" },
] as const;

export default function CosPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main
      className="planet-COS min-h-screen bg-cosmic-gradient px-6 py-20"
      style={{ "--planet-accent": "#191970" } as React.CSSProperties}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        COS
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes pulsing through cosmic house
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
