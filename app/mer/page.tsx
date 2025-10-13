"use client";

import Image from "next/image";

const subthemes = [
  {
    title: "Street X",
    description: "Grinding boom-bap from the streets.",
    image: "/covers/mer/B-01-STREET.jpg",
  },
  {
    title: "Afterglow",
    description: "A dreamy trap getaway.",
    image: "/covers/mer/B-02-Afeterglow.jpg",
  },
  {
    title: "17:22",
    description: "Jazzy campus memories in rap.",
    image: "/covers/mer/B-03-1722.jpg",
  },
  {
    title: "CASH GOD",
    description: "High-gloss FLEX anthem.",
    image: "/covers/mer/B-04-Cash.jpg",
  },
  {
    title: "Ugly Truth",
    description: "Crunk confession, raw and loud.",
    image: "/covers/mer/B-05-Ugly.jpg",
  },
  {
    title: "Ten Shouts",
    description: "Drill disses, ten shots fired.",
    image: "/covers/mer/B-06-Ten.jpg",
  },
  {
    title: "Orbit of Us",
    description: "Melodic, romantic hip-hop.",
    image: "/covers/mer/B-07-Orbit.jpg",
  },
  {
    title: "Crown Me Bitch",
    description: "Women’s rap in full flame.",
    image: "/covers/mer/B-08-Crown.jpg",
  },
  {
    title: "We Are the One",
    description: "Latin hip-hop unity.",
    image: "/covers/mer/B-09-We.jpg",
  },
  {
    title: "Let’s Hip-hop",
    description: "Machine-made future bounce.",
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
