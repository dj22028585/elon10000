"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const subthemes = [
  {
    title: "Letters to Venus",
    description: "Smooth solo R&B confession from Elon.",
    image: "/covers/ven/C-01-Letter.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0001-alone-1?in=tenkforhim/sets/elon-ven-01-lettertovenus",
  },
  {
    title: "Emerald Memory",
    description: "Nostalgic R&B duet glowing in emerald light.",
    image: "/covers/ven/C-02-Emerald.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0101-dorm-first-look-1?in=tenkforhim/sets/elon-ven-02-emeraldmemory",
  },
  {
    title: "The Starter Wife",
    description: "Soulful R&B elegy of a fading first love.",
    image: "/covers/ven/C-03-Starter.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0300-eternal-what-if-100?in=tenkforhim/sets/elon-ven-03-thestarterwife",
  },
  {
    title: "If Thornfield Burns",
    description: "A stately R&B vow shaped by loss, loyalty silence.",
    image: "/covers/ven/C-04-If.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0315-first-kiss-first-calm-15?in=tenkforhim/sets/elon-ven-04-ifthornfieldburns",
  },
  {
    title: "False Dawn",
    description: "Two lights met beneath the water—brilliantly and sincerely.",
    image: "/covers/ven/C-05-False.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0401-on-set-1?in=tenkforhim/sets/elon-ven-05-falsedawn",
  },
  {
    title: "Player of Games",
    description: "Love as a game. Space as the board. Two players, no rules.",
    image: "/covers/ven/C-06-Play.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0501-elevator-eyes-1?in=tenkforhim/sets/elon-ven-06-playerofgames",
  },
  {
    title: "A Rocket with No Ghosting",
    description: "A springtime love that drifts from cherry blossoms to Mars.",
    image: "/covers/ven/C-07-Ani.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0601-under-the-blossoming-rocket-1?in=tenkforhim/sets/elon-ven-07-arocketwithnoghosting",
  },
  {
    title: "Horizons Between Us",
    description: "A roadtrip love story between a bike and a rocket.",
    image: "/covers/ven/C-08-Mika.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0701-glance-from-afar-1?in=tenkforhim/sets/elon-ven-08-horizonsbetweenus",
  },
  {
    title: "Letter from Venus",
    description: "A quiet reply from Venus, written in light rather than words.",
    image: "/covers/ven/C-09-Letter.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-0801-alone-with-you-1?in=tenkforhim/sets/elon-ven-09-letterfromvenus",
  },
  {
    title: "Let's R&B",
    description: "Where machines learn how to love through rhythm.",
    image: "/covers/ven/C-10-Let.jpg",
    scUrl: "https://soundcloud.com/tenkforhim/elon-ven-1000-for-elon-the-lover-100?in=tenkforhim/sets/elon-ven-10-letsrb",
  },
] as const;

export default function VenPage() {
  const [openPlayer, setOpenPlayer] = useState<number | null>(null);

  return (
    <main className="planet-VEN min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        VEN
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes blooming in Venusian R&B
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
