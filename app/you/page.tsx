"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  { title: "His Life", description: "From first breath to the final frontier.", image: "/covers/you/J-01-1.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0100-2070-still-curious-100?in=tenkforhim/sets/elon-you-01-his-story" },
  { title: "His Roots", description: "The deep soil beneath a tree meant for the stars.", image: "/covers/you/J-02-2.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0101-maye-musk-1-1?in=tenkforhim/sets/elon-you-02-his-roots" },
  { title: "His Children", description: "The living reasons the future must be built.", image: "/covers/you/J-03-3.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0201-to-my-children-1?in=tenkforhim/sets/elon-you-03-his-children" },
  { title: "His Partners", description: "Those who shared the weight of impossible dreams.", image: "/covers/you/J-04-4.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0301-kimbal-musk-brother-1?in=tenkforhim/sets/elon-you-04-his-partners" },
  { title: "His Books", description: "Galaxies folded between pages.", image: "/covers/you/J-05-5.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0450-i-felt-like-a-martian-50?in=tenkforhim/sets/elon-you-05-his-books" },
  { title: "His Taste", description: "The frequencies, flavors, and frames of a restless soul.", image: "/covers/you/J-06-6.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0600-a-good-heart-100?in=tenkforhim/sets/elon-you-06-his-taste" },
  { title: "His Body", description: "An anatomical symphony of an immortal vessel.", image: "/covers/you/J-07-7.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0700-neuron-100?in=tenkforhim/sets/elon-you-07-his-body" },
  { title: "His Pain", description: "Where words surrender to scars.", image: "/covers/you/J-08-8.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0800-i-dont-wanna-be-alone-100?in=tenkforhim/sets/elon-you-08-his-pain" },
  { title: "His Modes", description: "A kaleidoscope of faces he never explained.", image: "/covers/you/J-09-9.jpg", scUrl: "https://soundcloud.com/tenkforhim/elon-you-0854-elons-april-fools-54?in=tenkforhim/sets/elon-you-09-his-modes" },
  { title: "Let's Live", description: "Ten thousand ways to say one thing.", image: null, scUrl: "https://soundcloud.com/tenkforhim/elon-you-1000-10000-100?in=tenkforhim/sets/elon-you-10-lets-live" },
] as const;

export default function YouPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main
      className="planet-YOU min-h-screen bg-cosmic-gradient px-6 py-20"
      style={{ "--planet-accent": "#B30000" } as React.CSSProperties}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        YOU
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes beyond existence — the final universe
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
