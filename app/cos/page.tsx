"use client";

import Image from "next/image";

const subthemes = [
  { title: "Zip2", description: "We help media companies get online.", image: null },
  { title: "PayPal", description: "Creating a new world currency.", image: null },
  { title: "SpaceX", description: "To make life multi-planetary.", image: null },
  { title: "Tesla", description: "To accelerate the world's transition to sustainable energy.", image: null },
  { title: "Ad Astra", description: "Teach to the problem, not the tool.", image: null },
  { title: "Neuralink", description: "Create a generalized brain interface to restore autonomy.", image: null },
  { title: "The Boring Company", description: "Solve the problem of soul-destroying traffic.", image: null },
  { title: "X", description: "X is the global town square.", image: null },
  { title: "xAI", description: "To understand the true nature of the universe.", image: null },
  { title: "Let's House", description: "Remove unnecessary regulations to unlock economic freedom.", image: null },
] as const;

export default function CosPage() {
  return (
    <main
      className="planet-COS min-h-screen bg-cosmic-gradient px-6 py-20"
      // ✅ 이 페이지만 딥네이비-터키즈 계열로 지정
      style={{ ["--planet-accent" as any]: "#191970" }}
    >
      <h1 className="text-5xl font-bold text-center text-primary mb-2">
        COS
      </h1>
      <p className="subtitle-accent text-center mb-12">
        Ten sub-themes pulsing through cosmic house
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
