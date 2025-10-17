"use client";

import Image from "next/image";

const subthemes = [
  {
    title: "Ignition",
    description: "Where the sky learns to burn",
    image: "/covers/sun/A-01-IGNITION.jpg",
  },
  {
    title: "Solar Embrace",
    description: "Radiant warmth and light",
    image: "/covers/sun/A-02-Solar.jpg",
  },
  {
    title: "Aureate Throne",
    description: "Majestic golden energy",
    image: "/covers/sun/A-03-Aureate.jpg",
  },
  {
    title: "Red March, Black Ledger",
    description: "War and reckoning",
    image: "/covers/sun/A-04-Red.jpg",
  },
  {
    title: "Dear Rocket Boy",
    description: "Letters to the sky",
    image: "/covers/sun/A-05-Dear.jpg",
  },
  {
    title: "Chasing Horizons",
    description: "Beyond the edge of day",
    image: "/covers/sun/A-06-Chasing.jpg",
  },
  {
    title: "Endless Sunset",
    description: "Never-ending glow",
    image: "/covers/sun/A-07-Endless.jpg",
  },
  {
    title: "Lucid Reverie",
    description: "Dreamlike clarity",
    image: "/covers/sun/A-08-Lucid.jpg",
  },
  {
    title: "Riff & Boogie",
    description: "Rhythms of freedom",
    image: "/covers/sun/A-09-Riff.jpg",
  },
  {
    title: "Let’s Rock",
    description: "Coming soon",
    image: null,
  },
] as const;

export default function SunPage() {
  return (
    <main className="planet-SUN min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        SUN
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes inspired by the Sun
      </p>

      {/* 2 x 5 Grid (세로 비율 유지) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {subthemes.map((sub, i) => (
          <div
            key={i}
            className="
              group rounded-xl overflow-hidden bg-card/40 border border-border/60 
              shadow-sm transition-all duration-300 
              hover:shadow-[0_0_30px_var(--planet-accent)] hover:border-[var(--planet-accent)]
            "
          >
            <div className="p-4">
              {/* 세로형 비율 3:4 유지 */}
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

              {/* 텍스트 영역 */}
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
