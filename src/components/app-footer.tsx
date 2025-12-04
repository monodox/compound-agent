import Link from 'next/link'
import { Bot } from 'lucide-react'

export function AppFooter() {
  return (
    <footer className="w-full p-6 bg-gradient-to-r from-indigo-900 to-indigo-800 text-indigo-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-white" />
          <div>
            <div className="font-semibold text-white">Compound Agent</div>
            <div className="text-sm">AI-powered workflow automation</div>
          </div>
        </div>
        <div className="flex gap-6">
          <Link href="/legal/terms" className="text-sm hover:text-white">
            Terms
          </Link>
          <Link href="/legal/cookies" className="text-sm hover:text-white">
            Cookies
          </Link>
          <Link href="/legal/privacy" className="text-sm hover:text-white">
            Privacy
          </Link>
        </div>
      </div>
      <div className="text-center text-sm border-t border-slate-700 pt-4">
        © 2025 Compound Agent. All rights reserved.
      </div>
    </footer>
  )
}