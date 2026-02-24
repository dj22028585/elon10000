"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Play,
  Music,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import CosmicBackground from "@/components/cosmic-background";
import SocialIcons from "@/components/social-icons";

/* ═══════════════════════ Confetti (Platinum / Cyan) ══════════════════════ */
function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#E0E7FF", "#00BFFF", "#1E90FF", "#B0C4DE",
      "#FFFFFF", "#87CEEB", "#C0D8F0", "#A0C4E8",
    ];
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
        if (frame > fadeStart)
          p.opacity = Math.max(0, 1 - (frame - fadeStart) / (maxFrames - fadeStart));

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

  return <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" />;
}

/* ══════════════════════ Count-up Animation Hook ═════════════════════════ */
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

/* ════════════════════════════ Main Page ═════════════════════════════════ */
export default function HomePage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const counter = useCountUp(10000, 3000);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  /** 10 Planets */
  const planets = [
    { id: "SUN", title: "SUN (ROCK)", color: "#FF4500", href: "/sun" },
    { id: "MER", title: "MER (HIP-HOP)", color: "#00BFFF", href: "/mer" },
    { id: "VEN", title: "VEN (R&B)", color: "#800080", href: "/ven" },
    { id: "EAR", title: "EAR (WORLD)", color: "#22C55E", href: "/ear" },
    { id: "AI", title: "AI (EDM)", color: "#C0C0C0", href: "/ai" },
    { id: "MAR", title: "MAR (K-POP)", color: "#FF69B4", href: "/mar" },
    { id: "JUP", title: "JUP (CLASSICAL)", color: "#FFD700", href: "/jup" },
    { id: "SAT", title: "SAT (JAZZ)", color: "#40E0D0", href: "/sat" },
    { id: "COS", title: "COS (HOUSE)", color: "#0B2D5C", href: "/cos" },
    { id: "YOU", title: "YOU", color: "#8A0303", href: "/you" },
  ];

  return (
    <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
      <CosmicBackground />
      {showConfetti && <Confetti />}

      {/* ═══════════════════════ Hero Section ═══════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-glow mb-4 text-primary whitespace-nowrap">
            ELON:10,000
          </h1>
          <p className="text-sm text-secondary mb-3">by TenKforHim</p>

          {/* Completion Badge — Platinum / Cyan */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-5"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,191,255,0.12), rgba(255,255,255,0.06))",
              border: "1px solid rgba(0,191,255,0.35)",
              boxShadow: "0 0 24px rgba(0,191,255,0.15)",
              animation: "badge-glow 3s ease-in-out infinite",
            }}
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-cyan-200 text-xs sm:text-sm font-semibold tracking-widest">
              10,000 SONGS COMPLETE
            </span>
            <Sparkles className="h-4 w-4 text-cyan-300" />
          </div>

          <div className="mb-2 px-4">
            <p className="text-base sm:text-xl md:text-2xl text-foreground">
              The Hitchhiker&apos;s Playlist to the Galaxy
            </p>
          </div>
          <p className="text-base sm:text-lg text-secondary mb-8 px-4">
            10,000 songs for one man. Built as a thank-you.
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

      {/* ═══════════════════ Project Progress (Songs Only) ════════════════ */}
      <section id="progress" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">
            Project Progress
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <CheckCircle2 className="h-8 w-8 text-cyan-300" />
                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: "#E0E7FF",
                    textShadow: "0 0 15px rgba(0,191,255,0.4)",
                  }}
                >
                  Songs
                </h3>
              </div>
              <div className="space-y-4 max-w-lg mx-auto" ref={counter.ref}>
                <div className="flex justify-between text-xl">
                  <span>{counter.value.toLocaleString()} / 10,000</span>
                  <span
                    className="font-bold"
                    style={{
                      color: "#E0E7FF",
                      textShadow: "0 0 10px rgba(0,191,255,0.4)",
                    }}
                  >
                    (100%)
                  </span>
                </div>
                <div className="relative w-full bg-input rounded-full h-4">
                  <div
                    className="h-4 rounded-full relative transition-all duration-300"
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(90deg, #1a3a5c, #00BFFF, #E0E7FF, #00BFFF, #1a3a5c)",
                      boxShadow:
                        "0 0 16px rgba(0,191,255,0.4), 0 0 40px rgba(0,191,255,0.15)",
                    }}
                  >
                    <CheckCircle2 className="absolute -right-2 -top-1 h-6 w-6 text-cyan-300 drop-shadow-[0_0_6px_rgba(0,191,255,0.7)]" />
                  </div>
                </div>
                <p className="text-center text-sm text-cyan-300/60 mt-2">
                  ✦ All 10,000 songs across 10 planets — complete. ✦
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ═══════════════════ Featured Samples ══════════════════════════ */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">
            Featured Samples
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {planets.map((p) => (
              <button
                key={p.id}
                onClick={() => (window.location.href = p.href)}
                className="group relative rounded-xl p-5 sm:p-6 transition-all duration-300
                           bg-gradient-to-br from-black/50 via-black/30 to-black/10
                           hover:scale-[1.05] hover:-translate-y-1
                           shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] overflow-hidden
                           cursor-pointer text-center"
              >
                {/* Neon glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-80 transition-all duration-300 blur-md"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}44, transparent 60%)`,
                    boxShadow: `0 0 25px ${p.color}44`,
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="font-bold tracking-tight leading-tight"
                    style={{
                      color: p.color,
                      textShadow: `0 0 12px ${p.color}AA`,
                      fontSize: "clamp(14px, 1.6vw, 20px)",
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Find Us Everywhere ══════════════════════ */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-glow">
            Find Us Everywhere
          </h2>
          <SocialIcons />
        </div>
      </section>

      {/* ══════════════════════════ About ════════════════════════════════ */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border pulse-glow">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-glow">
                About ELON:10,000
              </h2>
              <div className="prose prose-invert max-w-none text-center">
                <p className="text-lg leading-relaxed">
                  Ten planets. Ten thousand songs. One thank-you — dedicated to
                  Elon Musk and the era he helped build.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ══════════════════════════ Footer ═══════════════════════════════ */}
      <footer className="relative z-10 py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
          <p className="text-sm text-muted">
            © TenKforHim — 10,000 songs for Elon Musk
          </p>
        </div>
      </footer>

      {/* ══════════════════ Badge Glow Keyframes ════════════════════════ */}
      <style jsx global>{`
        @keyframes badge-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(0, 191, 255, 0.12);
          }
          50% {
            box-shadow: 0 0 32px rgba(0, 191, 255, 0.25);
          }
        }
      `}</style>
    </div>
  );
}
