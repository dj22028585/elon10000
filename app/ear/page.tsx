"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type Subtheme = {
  title: string;
  description: string;
  image?: string | null;
};

// 나중에 진짜 타이틀/설명/이미지 정해지면 여기만 수정하면 됨
const subthemes: Subtheme[] = [
  { title: "Cradle", description: "A portrait of Earth before anyone was there to remember it.", image: "/covers/ear/D-01-C.jpg" },
  { title: "Neighbors", description: "They noticed us before we noticed them.", image: "/covers/ear/D-02-N.jpg" },
  { title: "Motherland", description: "Where journeys begin and stories remember.", image: "/covers/ear/D-03-A.jpg" },
  { title: "Craft", description: "Where hands learn, and meaning is shaped.", image: "/covers/ear/D-04-A.jpg" },
  { title: "Form", description: "Where law meets beauty, and design becomes destiny.", image: "/covers/ear/D-05-E.jpg" },
  { title: "Expansion", description: "Where frontiers widen, and tomorrow learns to move.", image: "/covers/ear/D-06-N.jpg" },
  { title: "Pulse", description: "Where rhythm becomes heartbeat, and the earth dances.", image: "/covers/ear/D-07-S.jpg" },
  { title: "???", description: "Where the sea becomes a road, and stars guide the way.", image: "/covers/ear/D-08-O.jpg" },
  { title: "???", description: "A blues elegy for the decades the Moon stayed quiet.", image: "/covers/ear/D-09-M.jpg" },
  { title: "???", description: "COMING SOON", image: null },
];

// EAR 전용 네온 컬러 (홈 화면 EAR 카드랑 맞춘 초록)
const EAR_ACCENT = "#41ff8f";

export default function EarPage() {
  return (
    <main
      className="planet-EAR min-h-screen bg-cosmic-gradient px-6 py-20"
      style={{ "--planet-accent": EAR_ACCENT } as CSSProperties}
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
