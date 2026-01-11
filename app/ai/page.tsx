"use client";

import Image from "next/image";

const subthemes = [
  { title: "DOGE", description: "wow. much rocket. very destiny.", image: "/covers/ai/E-1-1.jpg" },
  { title: "GAMESTONK!!", description: "One screenshot. One subreddit. One financial crisis (for shorts).", image: "/covers/ai/E-2-2.jpg" },
  { title: "NOT-A-FLAMETHROWER", description: "It’s not a flamethrower. It’s a ‘warm air encouragement device.", image: "/covers/ai/E-3-3.jpg" },
  { title: "S3XY SHORT SHORTS", description: "Dress code: confidence. Fabric: chaos.", image:  "/covers/ai/E-4-4.jpg" },
  { title: "USE SIGNAL", description: "If you can read this, you’re already encrypted.", image:  "/covers/ai/E-5-5.jpg" },
  { title: "CAGE MATCH", description: "Send location. Bring protein. No excuses.", image:  "/covers/ai/E-6-6.jpg" },
  { title: "TECHNOKING", description: "CEO by day, warehouse rave deity by night.", image:  "/covers/ai/E-7-7.jpg" },
  { title: "OPTIMUS DEMO", description: "If it glitches on stage, it’s officially a feature.", image:  "/covers/ai/E-8-8.jpg" },
  { title: "BURNT HAIR", description: "Repugnant desire, bottled—then sold out like it’s couture.", image:  "/covers/ai/E-9-9.jpg" },
  { title: "Let's EDM", description: "The sink dropped. The bass dropped harder.", image:  "/covers/ai/E-10-Let.jpg" },
] as const;

export default function AiPage() {
  return (
    <main className="planet-AI min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        AI
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes where the machine learns to feel
      </p>

      {/* 2 x 5 Grid (세로 3:4 유지) */}
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
