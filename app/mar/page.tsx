"use client";

import Image from "next/image";

const subthemes = [
  { title: "My Little Pilot", description: "Freedom is not taught; it is ignited the moment you twist the throttle.", image: null },
  { title: "My Little Player", description: "Before rewriting the world, he mastered the rules of the game.", image: null },
  { title: "My Little Architect", description: "The first architecture of a world built from imagination into code.", image: null },
  { title: "My Little Survivor", description: "The wild holds no mercy; to protect your own, you must learn to stand your ground.", image: null },
  { title: "My Little Hitchhiker", description: "More vital than the answer is the courage to ask the universe the right question.", image: null },
  { title: "My Little Wanderer", description: "Leaving the safety of home for the unknown, fueled only by the audacity of hope.", image: null },
  { title: "My Little Promoter", description: "Gather the crowd, set the stage; capital is the fuel that turns dreams into reality.", image: null },
  { title: "My Little Futurist", description: "A first love who saw the future of electric cars while the world slept in the present.", image: null },
  { title: "My Little Mechanic", description: "Like fixing a broken engine on the road, true engineering is solving the impossible with your own hands.", image: null },
  { title: "Let's K-POP", description: "The boy's dream comes alive, dancing with a new humanity on the stage of Mars.", image: null },
] as const;

export default function MarPage() {
  return (
    <main className="planet-MAR min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        MAR
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes shining with K-POP passion
      </p>

      {/* 2 x 5 Grid (세로 비율 유지) */}
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
              {/* 세로형 3:4 비율 */}
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
