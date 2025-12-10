"use client";

import Image from "next/image";

const subthemes = [
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
  { title: "???", description: "COMING SOON", image: null },
] as const;

export default function SatPage() {
  return (
    <main
      className="planet-SAT min-h-screen bg-cosmic-gradient px-6 py-20"
      // ✅ 전역 설정과 무관하게 이 페이지만 에메랄드 네온 사용
      style={{ "--planet-accent": "#00ced1" }}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        SAT
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes swinging in emerald jazz
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
              {/* 세로형 3:4 */}
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
