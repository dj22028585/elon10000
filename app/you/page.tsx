"use client";

import Image from "next/image";

const subthemes = [
  { title: "His Life", description: "From first breath to the final frontier.", image: "/covers/you/J-01-1.jpg" },
  { title: "His Roots", description: "The deep soil beneath a tree meant for the stars.", image: "/covers/you/J-02-2.jpg" },
  { title: "His Children", description: "The living reasons the future must be built.", image: "/covers/you/J-03-3.jpg" },
  { title: "His Partners", description: "Those who shared the weight of impossible dreams.", image: "/covers/you/J-04-4.jpg" },
  { title: "His Books", description: "Galaxies folded between pages.", image: "/covers/you/J-05-5.jpg" },
  { title: "His Taste", description: "The frequencies, flavors, and frames of a restless soul.", image: "/covers/you/J-06-6.jpg" },
  { title: "His Body", description: "An anatomical symphony of an immortal vessel.", image: "/covers/you/J-07-7.jpg" },
  { title: "His Pain", description: "Where words surrender to scars.", image: "/covers/you/J-08-8.jpg" },
  { title: "His Modes", description: "A kaleidoscope of faces he never explained.", image: "/covers/you/J-09-9.jpg" },
  { title: "Let's Live", description: "Ten thousand ways to say one thing.", image: null },
] as const;

export default function YouPage() {
  return (
    <main
      className="planet-YOU min-h-screen bg-cosmic-gradient px-6 py-20"
      // ✅ 진홍빛 네온으로 지정
      style={{ ["--planet-accent" as any]: "#B30000" }}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        YOU
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes beyond existence — the final universe
      </p>

      {/* 2 x 5 Grid (세로형 3:4 유지) */}
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
              {/* 이미지 영역 */}
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
