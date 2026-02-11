"use client";

import Image from "next/image";

const subthemes = [
  { title: "Zip2", description: "We help media companies get online.", image: "/covers/COS/I-01-1.jpg" },
  { title: "PayPal", description: "Creating a new world currency.", image: "/covers/COS/I-02-2.jpg"  },
  { title: "SpaceX", description: "To make life multi-planetary.", image: "/covers/COS/I-03-3.jpg"  },
  { title: "Tesla", description: "To accelerate the world's transition to sustainable energy.", image: "/covers/COS/I-04-4.jpg"  },
  { title: "Ad Astra", description: "Teach to the problem, not the tool.", image: "/covers/COS/I-05-5.jpg"  },
  { title: "Neuralink", description: "Create a generalized brain interface to restore autonomy.", image: "/covers/COS/I-06-6.jpg"  },
  { title: "The Boring Company", description: "Solve the problem of soul-destroying traffic.", image: "/covers/COS/I-07-7.jpg"  },
  { title: "X", description: "X is the global town square.", image: "/covers/COS/I-08-8.jpg"  },
  { title: "xAI", description: "To understand the true nature of the universe.", image: "/covers/COS/I-09-9.jpg"  },
  { title: "Let's House", description: "Remove unnecessary regulations to unlock economic freedom.", image: "/covers/COS/I-10-10.jpg"  },
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
