"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  { title: "My Little Pilot", description: "Freedom at full throttle.", image: "/covers/mar/F-01-1.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0001-sparkling-blue-tumyeonghan-sijag-1?in=tenkforhim/sets/elon-mar-01-my-little-pilot" },
  { title: "My Little Player", description: "Insert Coin, Master Reality.", image: "/covers/mar/F-02-2.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0101-insert-interest-gwansimtuib-1?in=tenkforhim/sets/elon-mar-02-my-little-player" },
  { title: "My Little Architect", description: "5 Kilobytes of infinite dreams.", image: "/covers/mar/F-03-3.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0298-memory-remains-98?in=tenkforhim/sets/elon-mar-03-my-little-architect" },
  { title: "My Little Survivor", description: "Survival is the first lesson.", image: "/covers/mar/F-04-4.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0301-cold-steel-cagaun-soe-1?in=tenkforhim/sets/elon-mar-04-my-little-survivor" },
  { title: "My Little Hitchhiker", description: "Don't Panic. Just ask.", image: "/covers/mar/F-05-5.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0401-dont-panic-danghwanghaji-ma-1?in=tenkforhim/sets/elon-mar-05-my-little-hitchhiker" },
  { title: "My Little Wanderer", description: "A one-way ticket to destiny.", image: "/covers/mar/F-06-6.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0501-han-jangyi-yagsog-a-page-of-promise-1?in=tenkforhim/sets/elon-mar-06-my-little-wanderer" },
  { title: "My Little Promoter", description: "Tonight's rent, tomorrow's empire.", image: "/covers/mar/F-07-7.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0601-mun-yeoleo-open-the-door-1?in=tenkforhim/sets/elon-mar-07-my-little-promoter" },
  { title: "My Little Futurist", description: "Thinking about electric.", image: "/covers/mar/F-08-8.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0701-neoreul-saenggaghae-do-you-1?in=tenkforhim/sets/elon-mar-08-my-little-futurist" },
  { title: "My Little Mechanic", description: "Broken roads, unbreakable grit.", image: "/covers/mar/F-09-9.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-0900-no-u-turn-for-us-100?in=tenkforhim/sets/elon-mar-09-my-little-mechanic" },
  { title: "Let's K-POP", description: "Dancing on the Red Planet.", image: "/covers/mar/F-10-10.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-mar-1000-for-elon-the-little-boy-100?in=tenkforhim/sets/elon-mar-10-lets-k-pop" },
] as const;

export default function MarPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main className="planet-MAR min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        MAR
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes shining with K-POP passion
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
