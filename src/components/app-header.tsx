import Link from 'next/link'
import { Bot, Star, Github } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full p-4 bg-gradient-to-r from-indigo-900 to-indigo-800 shadow-lg">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-indigo-400">
          <Bot className="h-6 w-6" />
          <span className="font-semibold">Compound Agent</span>
        </Link>
        <a
          href="https://github.com/monodox/compound-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
        >
          <Github className="h-4 w-4" />
          <Star className="h-4 w-4" />
          Star
        </a>
      </div>
    </header>
  )
}