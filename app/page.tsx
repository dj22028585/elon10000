"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play, Music, Rocket } from "lucide-react";
import CosmicBackground from "@/components/cosmic-background";
import SocialIcons from "@/components/social-icons";

/** 접기식 사운드클라우드 플레이어 */
function CollapsiblePlayer({ url }: { url: string }) {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url
  )}&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
    <details className="rounded-lg bg-input/60 p-3">
      <summary className="list-none flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md bg-primary/10 hover:bg-primary/20 select-none">
        <Play className="h-5 w-5" />
        <span className="font-medium">Play Sample</span>
      </summary>
      <div className="mt-3 rounded-lg overflow-hidden">
        <iframe
          title="SoundCloud player"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          loading="lazy"
          src={src}
        />
      </div>
    </details>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
      <CosmicBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-glow mb-4 text-primary">ELON:10,000</h1>
          <p className="text-sm text-secondary mb-2">by TenKforHim</p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-xl md:text-2xl text-foreground">
              10,000 songs · 10,000 poems · honoring one living legend
            </p>
            <button
              onClick={() => document.getElementById("progress")?.scrollIntoView({ behavior: "smooth" })}
              className="ml-2 p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Rocket className="h-6 w-6 text-primary animate-pulse" />
            </button>
          </div>
          <p className="text-lg text-secondary mb-8">
            For Elon Musk, an AI+Human odyssey of sound and poetry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cosmic-glow bg-primary hover:bg-primary/80 text-primary-foreground">
              <a href="https://soundcloud.com/tenkforhim" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" />
                Listen on SoundCloud
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="pulse-glow border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              <a href="https://x.com/TenKforHim" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">Project Progress</h2>

          {/* Songs */}
          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <Music className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-glow">Songs</h3>
              </div>
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="flex justify-between text-xl">
                  <span>2300 / 10,000</span>
                  <span className="text-primary font-bold text-glow">(23%)</span>
                </div>
                <div className="relative w-full bg-input rounded-full h-4">
                  <div
                    className="h-4 rounded-full cosmic-glow relative"
                    style={{ width: "23%", background: "linear-gradient(90deg, #00bfff, #1e90ff)" }}
                  >
                    <Rocket className="absolute -right-2 -top-1 h-6 w-6 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Poems */}
          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <Music className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-glow">Poems</h3>
              </div>
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="flex justify-between text-xl">
                  <span>200 / 10,000</span>
                  <span className="text-primary font-bold text-glow">(2%)</span>
                </div>
                <div className="relative w-full bg-input rounded-full h-4">
                  <div
                    className="h-4 rounded-full cosmic-glow relative"
                    style={{ width: "2%", background: "linear-gradient(90deg, #00bfff, #1e90ff)" }}
                  >
                    <Rocket className="absolute -right-2 -top-1 h-6 w-6 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Samples */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">Featured Samples</h2>

          {/* Row 1: SUN, MER, VEN, EAR, AI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            {/* SUN (Rock) → /sun 페이지로 이동 + 접기식 플레이어 */}
            <Link href="/sun" className="block">
              <Card
                className="bg-card/50 backdrop-blur-sm border-2 hover:shadow-lg transition-shadow"
                style={{ borderColor: "#FF4500" }}
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#FF4500" }}>
                    SUN (Rock)
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    ELON-SUN-0123 — A fiery rock anthem representing the Sun&apos;s energy
                  </p>
                  <div className="rounded-lg overflow-hidden bg-input">
                    <CollapsiblePlayer url="https://soundcloud.com/2qlev7gnf4pl/little-m/s-DIxyQwsedsz?si=fa38edb33c6f4f1fad055e7848546017&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* MER (Hip-Hop) */}
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#00BFFF" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#00BFFF" }}>
                  MER (Hip-Hop)
                </h3>
                <p className="text-sm text-muted mb-3">
                  ELON-MER-0089 — Fast-paced beats reflecting Mercury&apos;s speed
                </p>
                <div className="rounded-lg overflow-hidden bg-input">
                  <CollapsiblePlayer url="https://soundcloud.com/2qlev7gnf4pl/moonlit-whisper?si=62c01721af254260977f1a5192ec4cf1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
                </div>
              </CardContent>
            </Card>

            {/* VEN (R&B) → 임베드 없음 (요청대로) */}
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#800080" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#800080" }}>
                  VEN (R&amp;B)
                </h3>
                <p className="text-sm text-muted mb-3">
                  ELON-VEN-0156 — Smooth melodies celebrating Venus
                </p>
              </CardContent>
            </Card>

            {/* EAR (World Music) */}
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#228B22" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#228B22" }}>
                  EAR (World Music)
                </h3>
                <p className="text-sm text-muted mb-3">Global sounds celebrating Earth&apos;s diversity</p>
              </CardContent>
            </Card>

            {/* AI (EDM) */}
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#C0C0C0" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#C0C0C0" }}>
                  AI (EDM)
                </h3>
                <p className="text-sm text-muted mb-3">Electronic beats powered by artificial intelligence</p>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: MAR, JUP, SAT, COS(네이비), YOU */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#FF69B4" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#FF69B4" }}>
                  MAR (K-POP)
                </h3>
                <p className="text-sm text-muted mb-3">Energetic K-Pop inspired by Mars</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#FFD700" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#FFD700" }}>
                  JUP (Classical)
                </h3>
                <p className="text-sm text-muted mb-3">Majestic orchestral music honoring Jupiter</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#40E0D0" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#40E0D0" }}>
                  SAT (Jazz)
                </h3>
                <p className="text-sm text-muted mb-3">Smooth jazz echoing Saturn&apos;s rings</p>
              </CardContent>
            </Card>

            {/* COS 네이비 */}
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#0B2D5C" }}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0B2D5C" }}>
                  COS (House)
                </h3>
                <p className="text-sm text-muted mb-3">Cosmic house music for interstellar journeys</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: "#000000" }}>
              <CardContent className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    background: "linear-gradient(45deg, #000000, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  YOU
                </h3>
                <p className="text-sm text-muted mb-3">The mystery awaits...</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Poem */}
          <Card className="mt-12 bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-glow">
                Featured Poem — Something Still
              </h3>
              <div className="max-w-2xl mx-auto text-center">
                <blockquote className="text-lg italic leading-relaxed text-muted">
                  {"Between the errands stands a field"}
                  <br />
                  {"Our breathing finds a place to graze"}
                  <br />
                  {"A small bird nails noon to blue"}
                  <br />
                  {"The clock forgets its sharper tongue"}
                  <br />
                  {"We listen until the edges blur"}
                  <br />
                  {"And call this resting music quiet"}
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Find Us Everywhere */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-glow">Find Us Everywhere</h2>
          <SocialIcons />
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-glow">About ELON:10,000</h2>
              <div className="prose prose-invert max-w-none text-center">
                <p className="text-lg leading-relaxed">
                  ELON:10,000 is an AI+Human collaboration dedicated to Elon Musk, creating 10,000 songs and 10,000
                  poems across ten cosmic themes. A living legend in progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
          <p className="text-sm text-muted">© TenKforHim — A living legend in progress</p>
        </div>
      </footer>
    </div>
  );
}
