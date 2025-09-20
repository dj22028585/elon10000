import { Button } from "@/components/ui/button"
import {
  Music,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Globe,
  Radio,
  MessageCircle,
  Camera,
  Users,
  Headphones,
} from "lucide-react"

const socialPlatforms = [
  { name: "X (Twitter)", icon: Twitter, href: "#" },
  { name: "SoundCloud", icon: Music, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "TikTok", icon: Radio, href: "#" },
  { name: "Pinterest", icon: Camera, href: "#" },
  { name: "Bandcamp", icon: Headphones, href: "#" },
  { name: "Medium", icon: MessageCircle, href: "#" },
  { name: "Reddit", icon: Users, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Threads", icon: MessageCircle, href: "#" },
  { name: "tenkforhim.com", icon: Globe, href: "#" },
]

export function SocialIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
      {socialPlatforms.map((platform) => {
        const Icon = platform.icon
        return (
          <div key={platform.name} className="flex flex-col items-center group">
            <Button
              variant="outline"
              size="lg"
              className="h-16 w-16 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground cosmic-glow group-hover:pulse-glow bg-transparent transition-all duration-300"
              asChild
            >
              <a href={platform.href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">{platform.name}</span>
              </a>
            </Button>
            <span className="mt-2 text-sm text-center text-foreground group-hover:text-primary transition-colors">
              {platform.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
