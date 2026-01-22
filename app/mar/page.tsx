"use client";

import Image from "next/image";

const subthemes = [
  { title: "My Little Pilot", description: "Freedom at full throttle.", image: "/covers/mar/F-01-1.jpg"},
  { title: "My Little Player", description: "Insert Coin, Master Reality.", image: "/covers/mar/F-02-2.jpg" },
  { title: "My Little Architect", description: "5 Kilobytes of infinite dreams.", image: "/covers/mar/F-03-3.jpg" },
  { title: "My Little Survivor", description: "Survival is the first lesson.", image: "/covers/mar/F-04-4.jpg" },
  { title: "My Little Hitchhiker", description: "Don't Panic. Just ask.", image: "/covers/mar/F-05-5.jpg" },
  { title: "My Little Wanderer", description: "A one-way ticket to destiny.", image: "/covers/mar/F-06-6.jpg" },
  { title: "My Little Promoter", description: "Tonight's rent, tomorrow's empire.", image: "/covers/mar/F-07-7.jpg" },
  { title: "My Little Futurist", description: "Thinking about electric.", image: "/covers/mar/F-08-8.jpg" },
  { title: "My Little Mechanic", description: "Broken roads, unbreakable grit.", image: "/covers/mar/F-09-9.jpg" },
  { title: "Let's K-POP", description: "Dancing on the Red Planet.", image: "/covers/mar/F-10-10.jpg" },
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
