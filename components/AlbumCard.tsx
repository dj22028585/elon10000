"use client";

import Image from "next/image";

type AlbumCardProps = {
  title: string;
  subtitle: string;
  coverSrc: string;
};

export default function AlbumCard({ title, subtitle, coverSrc }: AlbumCardProps) {
  return (
    <div
      className="
        group relative block overflow-hidden rounded-2xl
        bg-neutral-900 ring-1 ring-white/5
        transition-all duration-300
        hover:ring-[var(--planet-accent)]
        hover:shadow-[0_0_30px_var(--planet-accent)]
      "
    >
      <Image
        src={coverSrc}
        alt={title}
        width={1024}
        height={1024}
        className="aspect-square w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="subtitle-accent text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
