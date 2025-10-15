"use client";

import Image from "next/image";

const subthemes = [
  {
    title: "Letters to Venus",
    description: "Smooth solo R&B confession from Elon.",
    image: "/covers/mer/C-01-Letter.jpg",
  },
  {
    title: "Emerald Memory",
    description: "Nostalgic R&B duet glowing in emerald light.",
    image: "/covers/mer/C-02-Emerald.jpg",
  },
  {
    title: "The Starter Wife",
    description: "Soulful R&B elegy of a fading first love.",
    image: "/covers/mer/C-03-Starter.jpg",
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
  {
    title: "???",
    description: "COMING SOON",
    image: null, // 아직 커버 미제작이면 ??? 표시
  },
] as const;

export default function MerPage() {
  return (
    <div className="min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-4">MER</h1>
      <p className="text-center text-secondary mb-12">
        Ten sub-themes reflecting Mercury’s speed
      </p>

      {/* 2 x 5 grid (세로 커버에 맞춘 카드) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {subthemes.map((sub, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/60 bg-card/40 shadow-sm hover:shadow-md transition"
          >
            <div className="p-4">
              {/* 세로 비율 3:4 박스 */}
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

              {/* 텍스트는 이미지 아래로 분리 */}
              <h3 className="mt-4 text-lg font-semibold text-primary text-center">
                {sub.title}
              </h3>
              <p className="mt-1 text-sm text-secondary text-center">
                {sub.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
