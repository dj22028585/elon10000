"use client"

import { Button } from "@/components/ui/button"
import {
  Music,
  Youtube,
  Instagram,
  Headphones,
  MessageCircle,
  Users,
  Facebook,
  MessageSquare,
  Camera, // ✅ Pinterest는 사진기 아이콘
} from "lucide-react"
import { FaTwitter as FaXTwitter, FaTiktok, FaRocket } from "react-icons/fa"
import React from "react"

type IconComponent = React.ComponentType<{ className?: string }>

/** ---------- LINKS ---------- */
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

type PlatformKey = keyof typeof LINKS
type Item = {
  key: PlatformKey
  label: string
  icon: IconComponent
  special?: "rocket"
}

/** ---------- ITEMS ---------- */
const ITEMS: readonly Item[] = [
  { key: "x", label: "X", icon: FaXTwitter }, // ✅ Twitter → X
  { key: "soundcloud", label: "SoundCloud", icon: Music },
  { key: "youtube", label: "YouTube", icon: Youtube },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "tiktok", label: "TikTok", icon: FaTiktok },
  { key: "pinterest", label: "Pinterest", icon: Camera }, // ✅ 사진기 아이콘 사용
  { key: "bandcamp", label: "Bandcamp", icon: Headphones },
  { key: "medium", label: "Medium", icon: MessageCircle },
  { key: "reddit", label: "Reddit", icon: Users },
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "threads", label: "Threads", icon: MessageSquare },
  { key: "tenkforhim", label: "tenkforhim.com", icon: FaRocket, special: "rocket" },
] as const

/** ---------- COMPONENT ---------- */
export default function SocialIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
      {ITEMS.map(({ key, label, icon: Icon, special }) => (
        <div key={key} className="flex flex-col items-center group">
          <Button
            asChild
            variant="outline"
            className={`h-16 w-16 rounded-full border-primary text-primary bg-transparent transition-all duration-300
              hover:bg-primary hover:text-primary-foreground cosmic-glow group-hover:pulse-glow
              ${special === "rocket" ? "ring-2 ring-cyan-400/40 shadow-[0_0_30px_rgba(0,255,255,0.35)]" : ""}`}
          >
            <a href={LINKS[key]} target="_blank" rel="noopener noreferrer">
              <Icon
                className={`transition-transform
                  ${special === "rocket"
                    ? "h-7 w-7 group-hover:scale-125 text-cyan-300 drop-shadow-[0_0_15px_#00FFFF] animate-pulse"
                    : "h-6 w-6 group-hover:scale-110"}`}
              />
              <span className="sr-only">{label}</span>
            </a>
          </Button>
          <span className="mt-2 text-sm text-center text-foreground group-hover:text-primary transition-colors">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

