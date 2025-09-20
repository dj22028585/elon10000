"use client";

import {
  Globe, Twitter, Music2, Youtube, Instagram, Camera, Headphones,
  MessageSquare, Reddit, Facebook,
} from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
      <Item href="https://x.com/TenKforHim" label="X (Twitter)" Icon={Twitter} />
      <Item href="https://soundcloud.com/tenkforhim" label="SoundCloud" Icon={Music2} />
      <Item href="https://www.youtube.com/@TenKforHim" label="YouTube" Icon={Youtube} />
      <Item href="https://www.instagram.com/tenkforhim/" label="Instagram" Icon={Instagram} />
      <Item href="https://www.tiktok.com/@tenkforhim" label="TikTok" Icon={Camera} />
      <Item href="https://kr.pinterest.com/tenkforhim/" label="Pinterest" Icon={Camera} />
      <Item href="https://tenkforhim.bandcamp.com/" label="Bandcamp" Icon={Headphones} />
      <Item href="https://medium.com/@tenkforhim" label="Medium" Icon={MessageSquare} />
      <Item href="https://www.reddit.com/user/BrotherDisastrous303/" label="Reddit" Icon={Reddit} />
      <Item href="https://www.facebook.com/profile.php?id=61579061834689" label="Facebook" Icon={Facebook} />
      <Item href="https://www.threads.net/@tenkforhim" label="Threads" Icon={MessageSquare} />
      <Item href="https://tenkforhim.com/" label="tenkforhim.com" Icon={Globe} />
    </div>
  );
}

function Item({
  href, label, Icon,
}: {
  href: string; label: string; Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full border border-primary text-primary
                      hover:bg-primary hover:text-primary-foreground cosmic-glow
                      group-hover:pulse-glow flex items-center justify-center
                      transition-all duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <span className="mt-3 text-sm">{label}</span>
    </a>
  );
}
