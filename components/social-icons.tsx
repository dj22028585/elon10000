"use client"

import {
  Globe,
  Twitter,
  Music2,
  Youtube,
  Instagram,
  Camera,
  Headphones,
  MessagesSquare,
  Reddit,
  Facebook,
} from "lucide-react"

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
  threads: "https://www.threads.net/@tenkforhim",
  tenkforhim: "https://tenkforhim.com/",
  reddit: "https://www.reddit.com/user/BrotherDisastrous303/",
} as const

const items = [
  { key: "x", label: "X (Twitter)", Icon: Twitter },
  { key: "soundcloud", label: "SoundCloud", Icon: Music2 },
  { key: "youtube", label: "YouTube", Icon: Youtube },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "tiktok", label: "TikTok", Icon: Camera },
  { key: "bandcamp", label: "Bandcamp", Icon: Headphones },
  { key: "medium", label: "Medium", Icon: MessagesSquare },
  { key: "reddit", label: "Reddit", Icon: Reddit },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "threads", label: "Threads", Icon: MessagesSquare },
  { key: "tenkforhim", label: "tenkforhim.com", Icon: Globe },
  { key: "pinterest", label: "Pinterest", Icon: Camera },
]

export default function SocialIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
      {items.map(({ key, label, Icon }) => (
        <div key={key} className="flex flex-col items-center group">
          <a
            href={LINKS[key as keyof typeof LINKS]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground cosmic-glow group-hover:pulse-glow flex items-center justify-center transition-all duration-300"
          >
            <Icon className="h-6 w-6" />
          </a>
          <span className="mt-2 text-sm text-foreground group-hover:text-primary transition-colors">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
