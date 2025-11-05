import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

interface CommunityDiscordProps {
  className?: string
}

export default function CommunityDiscord({ className = '' }: CommunityDiscordProps) {
  return (
    <Link
      href="https://discord.gg/juno"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:border-white/[0.12] hover:bg-white/[0.05] ${className}`}
    >
      <MessageCircle className="h-4 w-4 text-violet-400" />
      <span>Join Community</span>
      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
    </Link>
  )
}
