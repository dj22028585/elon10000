"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  { title: "Dungeons & Musk", description: "When the die is cast, ambition composes its own destiny.", image: "/covers/jup/G-01-1.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0001-lanterns-at-the-inn-1?in=tenkforhim/sets/elon-jup-01-dungeons-musk" },
  { title: "Muskilization", description: "History is not written; it is built, turn by turn.", image: "/covers/jup/G-02-2.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0200-civilization-forever-100?in=tenkforhim/sets/elon-jup-02-muskilization" },
  { title: "Musk Arena", description: "A high-velocity symphony where reflexes meet hubris.", image: "/covers/jup/G-03-3.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0201-spawnpoint-overture-1?in=tenkforhim/sets/elon-jup-03-musk-arena" },
  { title: "MuskShock", description: "An Art Deco requiem echoing through a drowned utopia.", image: "/covers/jup/G-04-4.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0344-guardian-of-the-deep-44?in=tenkforhim/sets/elon-jup-04-muskshock" },
  { title: "Elonout", description: "Beyond the ashes, the only path is the horizon.", image: "/covers/jup/G-05-5.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0500-earth-in-the-rearview-100?in=tenkforhim/sets/elon-jup-05-elonout" },
  { title: "Musk Effect", description: "Not force, but the ripple of decision moves the galaxy.", image: "/covers/jup/G-06-6.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0600-symphony-of-the-galactic-council-x-the-voice-of-the-galaxy-100?in=tenkforhim/sets/elon-jup-06-musk-effect" },
  { title: "Saint's Musk", description: "In the absence of law, chaos wears the crown.", image: "/covers/jup/G-07-7.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0700-amen-now-wreck-everything-100?in=tenkforhim/sets/elon-jup-07-saints-musk" },
  { title: "Polymuskia", description: "The simpler the shape, the sharper the strategy.", image: "/covers/jup/G-08-8.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0701-polytopia-bootup-1?in=tenkforhim/sets/elon-jup-08-polymuskia" },
  { title: "Elon Ring", description: "Upon the debris of a broken throne, a new ring is inscribed.", image: "/covers/jup/G-09-9.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-0900-radagon-and-the-elden-beast-100?in=tenkforhim/sets/elon-jup-09-elon-ring" },
  { title: "Let's Classical", description: "It began with a pixel, and ended with a symphony.", image: "/covers/jup/G-10-10.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-jup-1000-for-elon-the-player-100?in=tenkforhim/sets/elon-jup-10-lets-classical" },
] as const;

export default function JupPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main className="planet-JUP min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        JUP
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes echoing Jupiter&apos;s grandeur
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
