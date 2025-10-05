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
      className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm text-sm font-medium hover:bg-white/[0.05] hover:border-white/[0.12] transition-all ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-violet-400" />
      <span>Join Community</span>
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    </Link>
  )
}
