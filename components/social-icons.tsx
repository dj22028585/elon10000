"use client"

import {
  Globe,
  Twitter,
  Music2,
  Youtube,
  Instagram,
  Camera,
  Headphones,
  MessageCircle,
  Reddit,
  Facebook,
  MessageSquare,
} from "lucide-react"

// 실제 링크들
const LINKS = {
  youtube: "https://www.youtube.com/@TenKforHim",
  instagram: "https://www.instagram.com/tenkforhim/",
  bandcamp: "https://tenkforhim.bandcamp.com/",
  tiktok: "https://www.tiktok.com/@tenkforhim",
  soundcloud: "https://soundcloud.com/tenkforhim",
  x: "https://x.com/TenKforHim",
  pinterest: "https://kr.pinterest.com/tenkforhim/",
  facebook: "https://www.facebook.com/profile.php?id=61579061834689",
  medium: "https://medium.com/@tenkforhim",
  threads: "https://www.threads.com/@tenkforhim",
  tenkforhim: "https://tenkforhim.com/",
  reddit: "https://www.reddit.com/user/BrotherDisastrous303/",
} as const

const items = [
  { key: "x", label: "X (Twitter)", Icon: Twitter },
  { key: "soundcloud", label: "SoundCloud", Icon: Music2 },
  { key: "youtube", label: "YouTube", Icon: Youtube },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "tiktok", label: "TikTok", Icon: Camera },
  { key: "pinterest", label: "Pinterest", Icon: Camera },
  { key: "bandcamp", label: "Bandcamp", Icon: Headphones },
  { key: "medium", label: "Medium", Icon: MessageCircle },
  { key: "reddit", label: "Reddit", Icon: Reddit },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "threads", label: "Threads", Icon: MessageSquare },
  { key: "tenkforhim", label: "tenkforhim.com", Icon: Globe },
]

export function SocialIcons() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
      {items.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={LINKS[key as keyof typeof LINKS]}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
          <div className="rounded-full p-6 bg-black/70 ring-1 ring-cyan-500/20 group-hover:ring-cyan-400/50 transition">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <span className="mt-3 text-sm">{label}</span>
        </a>
      ))}
    </div>
  )
}
