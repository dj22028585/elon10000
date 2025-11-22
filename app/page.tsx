"use client";

import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play, Music, Rocket, Feather } from "lucide-react";
import CosmicBackground from "@/components/cosmic-background";
import SocialIcons from "@/components/social-icons";

/** 접기식 사운드클라우드 플레이어 (행성별 색/아이콘 적용) */
function CollapsiblePlayer({
  url,
  open,
  onToggle,
  accent = "#00BFFF",
  icon = "▶",
}: {
  url: string;
  open: boolean;
  onToggle: () => void;
  accent?: string;         // 버튼 그라데이션/글로우 색
  icon?: ReactNode;        // 버튼 안 왼쪽에 들어갈 아이콘/이모지
}) {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url
  )}&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
    <div className="rounded-lg bg-input/60 p-3">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-center gap-2 cursor-pointer px-3 py-2 rounded-md font-medium"
        aria-expanded={open}
        style={{
          background: `linear-gradient(90deg, ${accent}33, ${accent}55)`,
          boxShadow: `0 0 12px ${accent}55, inset 0 0 0 1px ${accent}66`,
        }}
      >
        <span className="text-base leading-none">{icon}</span>
        <span>Play Sample</span>
      </button>

      {open && (
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
      )}
    </div>
  );
}

/** 메인 페이지 */
export default function HomePage() {
/** 10개 대주제 데이터 */
const planets = [
  {
    id: "SUN",
    title: "SUN (ROCK)",
    subtitle: "Explosive rock born from the Sun.",
    color: "#FF4500",
    url: "https://soundcloud.com/tenkforhim",
    href: "/sun",
  },
  {
    id: "MER",
    title: "MER (HIP-HOP)",
    subtitle: "Speed. Swagger. Mercury flow.",
    color: "#00BFFF",
    url: "https://soundcloud.com/tenkforhim",
    href: "/mer",
  },
  {
    id: "VEN",
    title: "VEN (R&B)",
    subtitle: "Velvet R&B under Venus lights.",
    color: "#800080",
    url: "https://soundcloud.com/tenkforhim",
    href: "/ven",
  },
  {
    id: "EAR",
    title: "EAR (WORLD)",
    subtitle: "Earth’s rhythm, one heartbeat.",
    color: "#22C55E",
    url: "https://soundcloud.com/tenkforhim",
    href: "/ear",
  },
  {
    id: "AI",
    title: "AI (EDM)",
    subtitle: "EDM forged by AI’s pulse.",
    color: "#C0C0C0",
    url: "https://soundcloud.com/tenkforhim",
    href: "/ai",
  },
  {
    id: "MAR",
    title: "MAR (K-POP)",
    subtitle: "Red-hot K-Pop ignition.",
    color: "#FF69B4",
    url: "https://soundcloud.com/tenkforhim",
    href: "/mar",
  },
  {
    id: "JUP",
    title: "JUP (CLASSICAL)",
    subtitle: "Orchestral power of Jupiter.",
    color: "#FFD700",
    url: "https://soundcloud.com/tenkforhim",
    href: "/jup",
  },
  {
    id: "SAT",
    title: "SAT (JAZZ)",
    subtitle: "Saturn’s rings in smooth jazz.",
    color: "#40E0D0",
    url: "https://soundcloud.com/tenkforhim",
    href: "/sat",
  },
  {
    id: "COS",
    title: "COS (HOUSE)",
    subtitle: "House beats across the cosmos.",
    color: "#0B2D5C",
    url: "https://soundcloud.com/tenkforhim",
    href: "/cos",
  },
  {
    id: "YOU",
    title: "YOU",
    subtitle: "You are the final universe.",
    color: "#8A0303",
    url: "https://soundcloud.com/tenkforhim",
    href: "/you",
  },
];


  return (
    <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
      <CosmicBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-glow mb-4 text-primary">
            ELON:10,000
          </h1>
          <p className="text-sm text-secondary mb-2">by TenKforHim</p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-xl md:text-2xl text-foreground">
              10,000 songs · 10,000 poems · for Elon Musk
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("progress")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="ml-2 p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Rocket className="h-6 w-6 text-primary animate-pulse" />
            </button>
          </div>
          <p className="text-lg text-secondary mb-8">
            One human. AI tools. 10,000 songs. Built as a thank-you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="cosmic-glow bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              <a
                href="https://soundcloud.com/tenkforhim"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://x.com/TenKforHim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Progress */}
      <section id="progress" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">
            Project Progress
          </h2>

          {/* Songs */}
          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <Music className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-glow">Songs</h3>
              </div>
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="flex justify-between text-xl">
                  <span>2600 / 10,000</span>
                  <span className="text-primary font-bold text-glow">(26%)</span>
                </div>
                <div className="relative w-full bg-input rounded-full h-4">
                  <div
                    className="h-4 rounded-full cosmic-glow relative"
                    style={{
                      width: "23%",
                      background: "linear-gradient(90deg, #00bfff, #1e90ff)",
                    }}
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
                <Feather className="h-8 w-8 text-primary" />
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
                    style={{
                      width: "3%",
                      background: "linear-gradient(90deg, #00bfff, #1e90ff)",
                    }}
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
    <h2 className="text-4xl font-bold text-center mb-12 text-glow">
      Featured Samples
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {planets.map((p) => (
        <div
          key={p.id}
          className="group relative rounded-xl p-6 transition-all duration-300
                     bg-gradient-to-br from-black/50 via-black/30 to-black/10
                     hover:scale-[1.04] hover:-translate-y-1
                     shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] overflow-hidden"
        >
          {/* Outer neon border */}
          <div
            className="absolute inset-0 rounded-xl opacity-40 group-hover:opacity-100 transition-all duration-300 blur-md"
            style={{
              background: `linear-gradient(135deg, ${p.color}44, transparent 60%)`,
              boxShadow: `0 0 25px ${p.color}55`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              {/* ⬇️ 옵션 A 적용: 한 줄 고정 + 반응형 폰트 */}
              <h3
                className="font-bold tracking-tight leading-tight whitespace-nowrap mb-3"
                style={{
                  color: p.color,
                  textShadow: `0 0 10px ${p.color}AA`,
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                }}
              >
                {p.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {p.subtitle}
              </p>
            </div>

            <button
              onClick={() => (window.location.href = p.href)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md
                         font-semibold transition-all duration-300
                         bg-black/40 border border-white/20
                         group-hover:shadow-[0_0_18px_currentColor]"
              style={{
                color: p.color,
                boxShadow: `inset 0 0 12px ${p.color}55`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(90deg, ${p.color}33, ${p.color}55)`;
                e.currentTarget.style.boxShadow = `0 0 25px ${p.color}77, inset 0 0 8px ${p.color}AA`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `rgba(0,0,0,0.4)`;
                e.currentTarget.style.boxShadow = `inset 0 0 12px ${p.color}55`;
              }}
            >
              <Play className="h-5 w-5" />
              Play Sample
            </button>
          </div>
        </div>
      ))}
    </div>
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
              <h2 className="text-3xl font-bold mb-6 text-center text-glow">
                About ELON:10,000
              </h2>
              <div className="prose prose-invert max-w-none text-center">
                <p className="text-lg leading-relaxed">
              ELON:10,000 is an AI+Human collaboration creating 10,000 songs and 10,000 poems 
across ten planetary themes—dedicated to Elon Musk and the era he helped build.
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
          <p className="text-sm text-muted">
            © TenKforHim — 10,000 songs for Elon Musk
          </p>
        </div>
      </footer>
    </div>
  );
}
