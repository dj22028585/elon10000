"use client"

type Sub = { title: string; description: string; image: string | null }

const subThemes: Sub[] = [
  { title: "Ignition", description: "The mystery begins", image: null },
  { title: "Solar Embrace", description: "Radiant warmth and light", image: "/A 02 Solar.jpg" },
  { title: "Aureate Throne", description: "Majestic golden energy", image: "/A 03 Aureate.jpg" },
  { title: "Red March, Black Ledger", description: "War and reckoning", image: "/A 04 Red.jpg" },
  { title: "Dear Rocket Boy", description: "Letters to the sky", image: "/A 05 Dear.jpg" },
  { title: "Chasing Horizons", description: "Beyond the edge of day", image: "/A 06 Chasing.jpg" },
  { title: "Endless Sunset", description: "Never-ending glow", image: "/A 07 Endless.jpg" },
  { title: "Lucid Reverie", description: "Dreamlike clarity", image: "/A 08 Lucid.jpg" },
  { title: "Riff & Boogie", description: "Rhythms of freedom", image: "/A 09 Riff.jpg" },
  { title: "Let's Rock", description: "Final burst — ???", image: null },
]

export default function SunPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-6">
      <h1 className="text-5xl font-bold text-center mb-3 text-glow">SUN</h1>
      <p className="text-center mb-12 text-lg">Ten sub-themes inspired by the Sun</p>

      {/* ✅ 2열 레이아웃: 모바일 1열, 그 이상은 2열 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {subThemes.map((sub, i) => {
          const src = sub.image ? encodeURI(sub.image) : null
          return (
            <div
              key={i}
              className="bg-card/40 border border-primary/40 rounded-xl p-6 text-center hover:scale-[1.02] hover:shadow-lg transition"
            >
              {src ? (
                // ✅ 공백 파일명도 안전하게 로드 (encodeURI)
                <img
                  src={src}
                  alt={sub.title}
                  loading="lazy"
                  className="w-full h-44 object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-44 mx-auto mb-4 flex items-center justify-center bg-muted rounded text-2xl font-bold">
                  ???
                </div>
              )}

              <h2 className="text-xl font-bold text-primary mb-2">{sub.title}</h2>
              <p className="text-secondary">{sub.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
