"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const SUN_TOPICS = [
  { slug: "flares", title: "Solar Flares", desc: "Explosive bursts, high-energy rhythms" },
  { slug: "sunspots", title: "Sunspots", desc: "Shadowed textures, cyclical patterns" },
  { slug: "corona", title: "Corona", desc: "Halo-like pads and airy leads" },
  { slug: "granules", title: "Granules", desc: "Pointillistic beats, micro-motifs" },
  { slug: "wind", title: "Solar Wind", desc: "Streaming arps and motion" },
  { slug: "prominence", title: "Prominence", desc: "Rising hooks, ribbon-like themes" },
  { slug: "fusion", title: "Fusion", desc: "Core heat, dense harmonics" },
  { slug: "cycle", title: "11-Year Cycle", desc: "Build–release macro structures" },
  { slug: "eclipse", title: "Eclipse", desc: "Contrast, silence vs. blaze" },
  { slug: "dawn", title: "Dawn", desc: "First-light melodies, gentle bloom" },
]

export default function SunIndexPage() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-glow">SUN</h1>
        <p className="text-center text-muted mb-10">Ten sub-themes inspired by the Sun</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SUN_TOPICS.map((t) => (
            <Link key={t.slug} href={`/sun/${t.slug}`} className="block">
              <Card
                className="bg-card/50 backdrop-blur-sm border-2 hover:shadow-lg transition-shadow"
                style={{ borderColor: "#FF4500" }}
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#FF4500" }}>
                    {t.title}
                  </h3>
                  <p className="text-sm text-muted">{t.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
