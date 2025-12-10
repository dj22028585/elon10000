"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

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

export default function EarPage() {
  return (
    <main
      className="planet-EAR min-h-screen bg-cosmic-gradient px-6 py-20"
      // 여기 한 줄이 핵심: EAR 페이지 안에서만 네온 컬러를 '초록'으로 강제
      style={{ "--planet-accent": "#41ff8f" } as CSSProperties}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        EAR
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes woven from Earth's voices
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
