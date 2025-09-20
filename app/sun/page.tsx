"use client"

import Image from "next/image"

const subThemes = [
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
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-6 text-glow">SUN</h1>
      <p className="text-center mb-12 text-lg">Ten sub-themes inspired by the Sun</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subThemes.map((sub, i) => (
          <div
            key={i}
            className="bg-card/40 border border-primary/40 rounded-lg p-6 text-center hover:scale-105 transition"
          >
            {sub.image ? (
              <Image
                src={sub.image}
                alt={sub.title}
                width={300}
                height={200}
                className="mx-auto rounded mb-4 object-cover"
              />
            ) : (
              <div className="w-[300px] h-[200px] mx-auto mb-4 flex items-center justify-center bg-muted text-2xl font-bold">
                ???
              </div>
            )}
            <h2 className="text-xl font-bold text-primary mb-2">{sub.title}</h2>
            <p className="text-secondary">{sub.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
