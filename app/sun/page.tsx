"use client"

import Image from "next/image"

const subthemes = [
  { title: "Ignition", description: "The mystery begins", image: null },
  { title: "Solar Embrace", description: "Radiant warmth and light", image: "/A-02-Solar.jpg" },
  { title: "Aureate Throne", description: "Majestic golden energy", image: "/A-03-Aureate.jpg" },
  { title: "Red March, Black Ledger", description: "War and reckoning", image: "/A-04-Red.jpg" },
  { title: "Dear Rocket Boy", description: "Letters to the sky", image: "/A-05-Dear.jpg" },
  { title: "Chasing Horizons", description: "Beyond the edge of day", image: "/A-06-Chasing.jpg" },
  { title: "Endless Sunset", description: "Never-ending glow", image: "/A-07-Endless.jpg" },
  { title: "Lucid Reverie", description: "Dreamlike clarity", image: "/A-08-Lucid.jpg" },
  { title: "Riff & Boogie", description: "Rhythms of freedom", image: "/A-09-Riff.jpg" },
  { title: "Let’s Rock", description: "???", image: null },
]

export default function SunPage() {
  return (
    <div className="min-h-screen bg-cosmic-gradient px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-4">SUN</h1>
      <p className="text-center text-secondary mb-12">Ten sub-themes inspired by the Sun</p>

      {/* 2 x 5 grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {subthemes.map((sub, i) => (
          <div
            key={i}
            className="bg-card/40 rounded-lg overflow-hidden border border-primary/40 shadow-md hover:shadow-xl transition"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-black/30">
              {sub.image ? (
                <Image src={sub.image} alt={sub.title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 500px" />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-2xl text-muted">???</div>
              )}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">{sub.title}</h3>
              <p className="text-sm text-secondary">{sub.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
