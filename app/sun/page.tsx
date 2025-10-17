"use client";

import AlbumCard from "@/components/AlbumCard";

type Subtheme = {
  title: string;
  description: string;
  image: string | null;
  // soundcloudUrl?: string; // 나중에 업로드하면 이 필드 추가해서 <Link>로 바꿔 쓰면 됨
};

const subthemes: Readonly<Subtheme[]> = [
  { title: "Ignition",              description: "Where the sky learns to burn",  image: "/covers/sun/A-01-IGNITION.jpg" },
  { title: "Solar Embrace",         description: "Radiant warmth and light",     image: "/covers/sun/A-02-Solar.jpg" },
  { title: "Aureate Throne",        description: "Majestic golden energy",       image: "/covers/sun/A-03-Aureate.jpg" },
  { title: "Red March, Black Ledger", description: "War and reckoning",          image: "/covers/sun/A-04-Red.jpg" },
  { title: "Dear Rocket Boy",       description: "Letters to the sky",            image: "/covers/sun/A-05-Dear.jpg" },
  { title: "Chasing Horizons",      description: "Beyond the edge of day",        image: "/covers/sun/A-06-Chasing.jpg" },
  { title: "Endless Sunset",        description: "Never-ending glow",             image: "/covers/sun/A-07-Endless.jpg" },
  { title: "Lucid Reverie",         description: "Dreamlike clarity",             image: "/covers/sun/A-08-Lucid.jpg" },
  { title: "Riff & Boogie",         description: "Rhythms of freedom",            image: "/covers/sun/A-09-Riff.jpg" },
  { title: "Let’s Rock",            description: "Coming soon",                    image: null }, // 커버 없음
];

export default function SunPage() {
  return (
    <main className="planet-SUN min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-2">SUN</h1>
      {/* 작은 설명: 기본은 TenK 블루, 호버 시 SUN 컬러 */}
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes inspired by the Sun
      </p>

      {/* 2 x 5 grid (1:1 스포티파이 커버 기준) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {subthemes.map((sub) =>
          sub.image ? (
            <AlbumCard
              key={sub.title}
              title={sub.title}
              subtitle={sub.description}
              coverSrc={sub.image}
            />
          ) : (
            // 커버가 아직 없을 때의 플레이스홀더 카드
            <div
              key={sub.title}
              className="
                group relative block overflow-hidden rounded-2xl
                bg-neutral-900 ring-1 ring-white/5
                transition-all duration-300
                hover:ring-[var(--planet-accent)]
                hover:shadow-[0_0_30px_var(--planet-accent)]
              "
            >
              <div className="aspect-square w-full grid place-items-center bg-black/40">
                <span className="text-2xl font-semibold text-muted">???</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <h3 className="text-lg font-semibold text-white">{sub.title}</h3>
                <p className="subtitle-accent text-sm">{sub.description}</p>
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
