'use client'

import { useState } from 'react'
import { ConsoleHeader } from '@/components/console-header'
import { ConsoleSidebar } from '@/components/console-sidebar'

export function ConsoleLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      <ConsoleHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <ConsoleSidebar sidebarOpen={sidebarOpen} />
      <main className={`pt-16 transition-all duration-300 scrollbar-hide ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {children}
      </main>
    </div>
  )
}