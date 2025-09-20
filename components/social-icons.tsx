"use client"

import { Button } from "@/components/ui/button"
import {
  Twitter as XIcon,
  Music,
  Youtube,
  Instagram,
  Radio,
  Camera,
  Headphones,
  MessageCircle,
  Users,
  Facebook,
  MessageSquare,
  Globe,
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

const ITEMS = [
  { key: "x", label: "X (Twitter)", icon: XIcon },
  { key: "soundcloud", label: "SoundCloud", icon: Music },
  { key: "youtube", label: "YouTube", icon: Youtube },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "tiktok", label: "TikTok", icon: Radio },
  { key: "pinterest", label: "Pinterest", icon: Camera },
  { key: "bandcamp", label: "Bandcamp", icon: Headphones },
  { key: "medium", label: "Medium", icon: MessageCircle },
  { key: "reddit", label: "Reddit", icon: Users },
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "threads", label: "Threads", icon: MessageSquare },
  { key: "tenkforhim", label: "tenkforhim.com", icon: Globe },
] as const

export default function SocialIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
      {ITEMS.map((platform) => {
        const Icon = platform.icon
        return (
          <div key={platform.key} className="flex flex-col items-center group">
            <Button
              asChild
              variant="outline"
              className="h-16 w-16 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground cosmic-glow group-hover:pulse-glow bg-transparent transition-all duration-300"
            >
              <a href={LINKS[platform.key]} target="_blank" rel="noopener noreferrer">
                <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">{platform.label}</span>
              </a>
            </Button>
            <span className="mt-2 text-sm text-center text-foreground group-hover:text-primary transition-colors">
              {platform.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
