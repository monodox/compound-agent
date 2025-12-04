import Link from 'next/link'
import { Bot } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full p-4 bg-gradient-to-r from-indigo-900 to-indigo-800 shadow-lg">
      <Link href="/" className="flex items-center gap-2 text-white hover:text-indigo-400">
        <Bot className="h-6 w-6" />
        <span className="font-semibold">Compound Agent</span>
      </Link>
    </header>
  )
}