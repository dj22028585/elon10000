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
      title: "SUN (Rock)",
      subtitle: "Fiery rock anthems inspired by the Sun’s energy",
      color: "#FF4500",
      url: "https://soundcloud.com/2qlev7gnf4pl/little-m/s-DIxyQwsedsz?si=fa38edb33c6f4f1fad055e7848546017&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      href: "/sun",
    },
    {
      id: "MER",
      title: "MER (Hip-Hop)",
      subtitle: "Fast-paced hip-hop reflecting Mercury’s speed",
      color: "#00BFFF",
      url: "https://soundcloud.com/tenkforhim",
      href: "/mer",
    },
    {
      id: "VEN",
      title: "VEN (R&B)",
      subtitle: "Smooth melodies celebrating Venus",
      color: "#800080",
      url: "https://soundcloud.com/tenkforhim",
      href: "/ven",
    },
    {
      id: "EAR",
      title: "EAR (World Music)",
      subtitle: "Global sounds celebrating Earth’s diversity",
      color: "#22C55E",
      url: "https://soundcloud.com/tenkforhim",
      href: "/ear",
    },
    {
      id: "AI",
      title: "AI (EDM)",
      subtitle: "Electronic beats powered by artificial intelligence",
      color: "#C0C0C0",
      url: "https://soundcloud.com/tenkforhim",
      href: "/ai",
    },
    {
      id: "MAR",
      title: "MAR (K-POP)",
      subtitle: "Energetic K-Pop inspired by Mars",
      color: "#FF69B4",
      url: "https://soundcloud.com/tenkforhim",
      href: "/mar",
    },
    {
      id: "JUP",
      title: "JUP (Classical)",
      subtitle: "Majestic orchestral music honoring Jupiter",
      color: "#FFD700",
      url: "https://soundcloud.com/tenkforhim",
      href: "/jup",
    },
    {
      id: "SAT",
      title: "SAT (Jazz)",
      subtitle: "Smooth jazz echoing Saturn's rings",
      color: "#40E0D0",
      url: "https://soundcloud.com/tenkforhim",
      href: "/sat",
    },
    {
      id: "COS",
      title: "COS (House)",
      subtitle: "Cosmic house music for interstellar journeys",
      color: "#0B2D5C",
      url: "https://soundcloud.com/tenkforhim",
      href: "/cos",
    },
    {
      id: "YOU",
      title: "YOU",
      subtitle: "The mystery awaits...",
      color: "#FACC15",
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
              10,000 songs · 10,000 poems · honoring one living legend
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
            For Elon Musk, an AI+Human odyssey of sound and poetry.
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
                  <span>2300 / 10,000</span>
                  <span className="text-primary font-bold text-glow">(23%)</span>
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
                  <span>300 / 10,000</span>
                  <span className="text-primary font-bold text-glow">(3%)</span>
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

    {(() => {
      const items = [
        { id:"SUN", title:"SUN (Rock)",        sub:"Fiery rock anthems inspired by the Sun’s energy",           color:"#FF4500", href:"/sun" },
        { id:"MER", title:"MER (Hip-Hop)",     sub:"Fast-paced hip-hop reflecting Mercury’s speed",             color:"#00BFFF", href:"/mer" },
        { id:"VEN", title:"VEN (R&B)",         sub:"Smooth melodies celebrating Venus",                         color:"#800080", href:"/ven" },
        { id:"EAR", title:"EAR (World Music)", sub:"Global sounds celebrating Earth’s diversity",               color:"#22C55E", href:"/ear" },
        { id:"AI",  title:"AI (EDM)",          sub:"Electronic beats powered by artificial intelligence",       color:"#C0C0C0", href:"/ai" },
        { id:"MAR", title:"MAR (K-POP)",       sub:"Energetic K-Pop inspired by Mars",                          color:"#FF69B4", href:"/mar" },
        { id:"JUP", title:"JUP (Classical)",   sub:"Majestic orchestral music honoring Jupiter",                 color:"#FFD700", href:"/jup" },
        { id:"SAT", title:"SAT (Jazz)",        sub:"Smooth jazz echoing Saturn's rings",                         color:"#40E0D0", href:"/sat" },
        { id:"COS", title:"COS (House)",       sub:"Cosmic house music for interstellar journeys",              color:"#0B2D5C", href:"/cos" },
        { id:"YOU", title:"YOU",               sub:"The mystery awaits...",                                     color:"#FACC15", href:"/you" },
      ];

      return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
  {items.map((p) => (
    <div
      key={p.id}
      className="group rounded-xl p-5 bg-white/[0.06] ring-1 ring-white/12
                 transition hover:-translate-y-1"
      /* 기본은 옅은 내부선, 호버 시 행성색으로 또렷하게 */
      style={{
        boxShadow: `inset 0 0 0 2px ${p.color}22`,
      }}
    >
      {/* 상단 타이틀 + 얇은 액센트 바 */}
      <div className="mb-4">
        <h3
          className="text-lg font-semibold tracking-tight"
          style={{ color: p.color }}
        >
          {p.title}
        </h3>
        <div
          className="mt-2 h-[2px] w-10 rounded-full transition-all
                     group-hover:w-16"
          style={{ background: `${p.color}CC` }}
        />
      </div>

      <p className="text-sm text-white/75 mb-5 leading-relaxed">
        {p.sub}
      </p>

      {/* 버튼만 이동 동작 */}
      <button
        onClick={() => (window.location.href = p.href)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md
                   text-sm font-medium transition
                   ring-1 ring-white/25 bg-white/[0.02]
                   hover:bg-white/[0.06]"
        style={{
          /* 버튼은 미묘한 테두리 + 행성색 보더/글자 강조 */
          borderColor: `${p.color}66`,
          color: "#E5F4FF",
          boxShadow: `0 0 0 1px ${p.color}33`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget.style.boxShadow = `0 0 18px ${p.color}44`);
          (e.currentTarget.style.borderColor = `${p.color}AA`);
        }}
        onMouseLeave={(e) => {
          (e.currentTarget.style.boxShadow = `0 0 0 1px ${p.color}33`);
          (e.currentTarget.style.borderColor = `${p.color}66`);
        }}
      >
        <Play className="h-4 w-4" />
        Play Sample
      </button>

      {/* 카드 외곽선 강조는 hover에만 */}
      <style jsx>{`
        .group:hover {
          box-shadow:
            inset 0 0 0 2px ${p.color}AA,
            0 10px 22px -12px ${p.color}40;
        }
      `}</style>
    </div>
  ))}
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
                  ELON:10,000 is an AI+Human collaboration dedicated to Elon
                  Musk, creating 10,000 songs and 10,000 poems across ten cosmic
                  themes. A living legend in progress.
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
            © TenKforHim — A living legend in progress
          </p>
        </div>
      </footer>
    </div>
  );
}
