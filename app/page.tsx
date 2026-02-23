"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play, Music, Rocket, CheckCircle2, Sparkles } from "lucide-react";
import CosmicBackground from "@/components/cosmic-background";
import SocialIcons from "@/components/social-icons";

/* ───────────────────────────── Confetti Effect ───────────────────────────── */
function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#FFD700", "#00BFFF", "#FF4500", "#22C55E", "#FF69B4", "#8A0303", "#FFFFFF"];
    const particles: {
      x: number; y: number; w: number; h: number;
      color: string; vx: number; vy: number;
      rotation: number; rotSpeed: number; opacity: number;
    }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1.5,
        w: Math.random() * 8 + 4,
        h: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 4 + 2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        opacity: 1,
      });
    }

    let frame = 0;
    const maxFrames = 180;

    const animate = () => {
      if (frame > maxFrames) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const fadeStart = maxFrames * 0.6;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rotSpeed;
        if (frame > fadeStart) {
          p.opacity = Math.max(0, 1 - (frame - fadeStart) / (maxFrames - fadeStart));
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      frame++;
      requestAnimationFrame(animate);
    };

    const timeout = setTimeout(animate, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
}

/* ───────────────────────── Count-up Animation Hook ───────────────────────── */
function useCountUp(target: number, duration = 2500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

/* ──────────────────── Collapsible SoundCloud Player ──────────────────────── */
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
  accent?: string;
  icon?: ReactNode;
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

/* ═══════════════════════════════ Main Page ════════════════════════════════ */
export default function HomePage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const counter = useCountUp(10000, 3000);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  /** 10 Planets */
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
      subtitle: "Earth's rhythm, one heartbeat.",
      color: "#22C55E",
      url: "https://soundcloud.com/tenkforhim",
      href: "/ear",
    },
    {
      id: "AI",
      title: "AI (EDM)",
      subtitle: "EDM forged by AI's pulse.",
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
      subtitle: "Saturn's rings in smooth jazz.",
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
      subtitle: "Ten thousand ways to say one thing.",
      color: "#8A0303",
      url: "https://soundcloud.com/tenkforhim",
      href: "/you",
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
      <CosmicBackground />
      {showConfetti && <Confetti />}

      {/* ─────────────────────────── Hero Section ─────────────────────────── */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-glow mb-4 text-primary">
            ELON:10,000
          </h1>
          <p className="text-sm text-secondary mb-2">by TenKforHim</p>

          {/* ★ Completion Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 animate-pulse"
            style={{
              background: "linear-gradient(90deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))",
              border: "1px solid rgba(255,215,0,0.4)",
              boxShadow: "0 0 20px rgba(255,215,0,0.2)",
            }}
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide">
              10,000 SONGS COMPLETE
            </span>
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-xl md:text-2xl text-foreground">
              A Playlist for the Hitchhiker&apos;s Guide to the Galaxy
            </p>
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

      {/* ────────────────────── Project Progress (Songs Only) ────────────── */}
      <section id="progress" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">
            Project Progress
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <CheckCircle2 className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold" style={{ color: "#FFD700", textShadow: "0 0 15px rgba(255,215,0,0.5)" }}>
                  Songs
                </h3>
              </div>
              <div className="space-y-4 max-w-lg mx-auto" ref={counter.ref}>
                <div className="flex justify-between text-xl">
                  <span>{counter.value.toLocaleString()} / 10,000</span>
                  <span className="font-bold" style={{ color: "#FFD700", textShadow: "0 0 10px rgba(255,215,0,0.5)" }}>
                    (100%)
                  </span>
                </div>
                <div className="relative w-full bg-input rounded-full h-4">
                  <div
                    className="h-4 rounded-full relative transition-all duration-300"
                    style={{
                      width: "100%",
                      background: "linear-gradient(90deg, #B8860B, #FFD700, #FFF8DC, #FFD700, #B8860B)",
                      boxShadow: "0 0 16px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.2)",
                    }}
                  >
                    <CheckCircle2 className="absolute -right-2 -top-1 h-6 w-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]" />
                  </div>
                </div>
                <p className="text-center text-sm text-yellow-400/70 mt-2">
                  ✦ All 10,000 songs across 10 planets — complete. ✦
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ──────────────────────── Featured Samples ────────────────────────── */}
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

      {/* ─────────────────────── Find Us Everywhere ───────────────────────── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-glow">Find Us Everywhere</h2>
          <SocialIcons />
        </div>
      </section>

      {/* ──────────────────────────── About ────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-glow">
                About ELON:10,000
              </h2>
              <div className="prose prose-invert max-w-none text-center">
                <p className="text-lg leading-relaxed">
                  ELON:10,000 is an AI+Human collaboration — 10,000 songs across
                  ten planetary themes, dedicated to Elon Musk and the era he
                  helped build.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ──────────────────────────── Footer ───────────────────────────────── */}
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
