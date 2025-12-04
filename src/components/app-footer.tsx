import Link from 'next/link'
import { Bot } from 'lucide-react'

export function AppFooter() {
  return (
    <footer className="w-full p-6 bg-gradient-to-r from-indigo-900 to-indigo-800 text-indigo-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="font-semibold text-white flex items-center gap-2">
            <Bot className="h-6 w-6" />
            Compound Agent
          </div>
          <div className="text-sm">
            <div>A self-improving automation engine that builds,</div>
            <div>monitors, and optimizes workflows autonomously</div>
            <div>using AI-powered intelligence.</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white mb-2">Legal</div>
          <div className="flex flex-col gap-1">
            <Link href="/legal/terms" className="text-sm hover:text-white">
              Terms of Service
            </Link>
            <Link href="/legal/cookies" className="text-sm hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/legal/privacy" className="text-sm hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm border-t border-slate-700 pt-4">
        © 2025 Compound Agent. All rights reserved.
      </div>
    </footer>
  )
}