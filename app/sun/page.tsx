"use client"

import Image from "next/image"

const subthemes = [
  {
    title: "Ignition",
    description: "The mystery begins",
    image: null, // 커버 없으니 ??? 유지
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
    description: "???",
    image: null, // 커버 없으니 ??? 유지
  },
] as const;
export default function SunPage() {
  return (
    <div className="min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-4">SUN</h1>
      <p className="text-center text-secondary mb-12">Ten sub-themes inspired by the Sun</p>

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
