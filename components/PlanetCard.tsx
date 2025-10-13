"use client";

import Link from "next/link";
import { Play } from "lucide-react";

export default function PlanetCard({
  title, subtitle, color, href
}: {
  title: string;
  subtitle: string;
  color: string;
  href: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col justify-between
                 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition
                 min-h-[220px]"
      style={{ boxShadow: `0 0 0 2px ${color} inset` }}
    >
      <div>
        <h3 className="text-xl font-semibold" style={{ color }}>{title}</h3>
        <p className="mt-3 text-white/75 text-sm leading-relaxed">{subtitle}</p>
      </div>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5
                   bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur"
      >
        <Play className="w-4 h-4" />
        Play Sample
      </Link>
    </div>
  );
}
