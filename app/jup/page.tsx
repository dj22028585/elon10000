"use client";

import Image from "next/image";

const subthemes = [
  { title: "Dungeons & Musk", description: "When the die is cast, ambition composes its own destiny.", image: null },
  { title: "Muskilization", description: "History is not written; it is built, turn by turn.", image: null },
  { title: "Musk Arena", description: "A high-velocity symphony where reflexes meet hubris.", image: null },
  { title: "MuskShock", description: "An Art Deco requiem echoing through a drowned utopia.", image: null },
  { title: "Elonout", description: "Beyond the ashes, the only path is the horizon.", image: null },
  { title: "Musk Effect", description: "Not force, but the ripple of decision moves the galaxy.", image: null },
  { title: "Saint’s Musk ", description: "In the absence of law, chaos wears the crown.", image: null },
  { title: "Polymuskia", description: "The simpler the shape, the sharper the strategy.", image: null },
  { title: "Elon Ring", description: "Upon the debris of a broken throne, a new ring is inscribed.", image: null },
  { title: "Let's Classical", description: "It began with a pixel, and ended with a symphony.", image: null },
] as const;

export default function JupPage() {
  return (
    <main className="planet-JUP min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        JUP
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes echoing Jupiter’s grandeur
      </p>

      {/* 2 x 5 Grid (세로 비율 3:4 유지) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {subthemes.map((sub, i) => (
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
              {/* 세로형 비율 3:4 */}
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

              {/* 텍스트 */}
              <h3 className="mt-4 text-lg font-semibold text-primary text-center">
                {sub.title}
              </h3>
              <p className="mt-1 text-sm text-center subtitle-accent group-hover:text-[var(--planet-accent)] transition-colors duration-300">
                {sub.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
