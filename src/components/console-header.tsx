'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PanelRightClose, PanelLeftClose, User, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ConsoleHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function ConsoleHeader({ sidebarOpen, setSidebarOpen }: ConsoleHeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className={`fixed top-0 z-50 bg-white border-b border-l h-16 flex items-center px-6 transition-all duration-300 ${sidebarOpen ? 'left-64' : 'left-16'} right-0`}>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="mr-4"
      >
        {sidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelRightClose className="h-4 w-4" />}
      </Button>

      <div className="ml-auto relative">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <User className="h-4 w-4" />
        </Button>
        {profileOpen && (
          <div className="absolute right-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg">
            <Link href="/console/settings" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100">
              <Settings className="h-4 w-4" />
              Profile
            </Link>
            <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100">
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}