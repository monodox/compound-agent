import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { 
  LayoutDashboard, 
  Workflow, 
  BarChart3, 
  FileText, 
  Lightbulb, 
  Server, 
  TestTube, 
  Bot,
  User,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

const navigationTop = [
  { name: 'Dashboard', href: '/console/dashboard', icon: LayoutDashboard },
  { name: 'Workflows', href: '/console/workflows', icon: Workflow },
  { name: 'Analytics', href: '/console/analytics', icon: BarChart3 },
  { name: 'Logs', href: '/console/logs', icon: FileText },
]

const navigationMiddle = [
  { name: 'Improvements', href: '/console/improvements', icon: Lightbulb },
  { name: 'Agent', href: '/console/agent', icon: Bot },
  { name: 'Sandbox', href: '/console/sandbox', icon: TestTube },
]

const navigationBottom = [
  { name: 'Admin', href: '/console/admin', icon: User },
  { name: 'Settings', href: '/console/settings', icon: Settings },
  { name: 'Help', href: '/console/help', icon: HelpCircle },
]

const infrastructureItems = [
  { name: 'Vultr', href: '/console/infrastructure/vultr' },
  { name: 'Raindrop', href: '/console/infrastructure/raindrop' },
]

interface ConsoleSidebarProps {
  sidebarOpen: boolean
}

export function ConsoleSidebar({ sidebarOpen }: ConsoleSidebarProps) {
  const [infrastructureOpen, setInfrastructureOpen] = useState(false)
  const pathname = usePathname()

  return (
    <aside className={`fixed top-0 left-0 bottom-0 bg-slate-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} flex flex-col`}>
      <div className="h-16 flex items-center px-4 border-b border-slate-700 flex-shrink-0">
        <Link href="/console/dashboard" className={`flex items-center text-white hover:text-indigo-400 ${sidebarOpen ? 'gap-2' : 'justify-center w-full'}`}>
          <Bot className="h-5 w-5" />
          {sidebarOpen && <span className="font-semibold">Compound Agent</span>}
        </Link>
      </div>
      <nav className="p-4 space-y-2 flex flex-col flex-1 overflow-y-auto scrollbar-hide">
        {navigationTop.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center rounded-md hover:bg-slate-800 transition-colors ${sidebarOpen ? 'gap-3 px-3 py-2 text-sm' : 'justify-center py-3'}`}
            title={!sidebarOpen ? item.name : undefined}
          >
            <item.icon className="h-5 w-5" />
            {sidebarOpen && item.name}
          </Link>
        ))}
        
        {/* Infrastructure dropdown */}
        <div>
          <button
            onClick={() => setInfrastructureOpen(!infrastructureOpen)}
            className={`w-full flex items-center rounded-md hover:bg-slate-800 transition-colors ${sidebarOpen ? 'gap-3 px-3 py-2 text-sm' : 'justify-center py-3'}`}
            title={!sidebarOpen ? 'Infrastructure' : undefined}
          >
            <Server className="h-5 w-5" />
            {sidebarOpen && (
              <>
                <span>Infrastructure</span>
                {infrastructureOpen ? <ChevronDown className="h-4 w-4 ml-auto" /> : <ChevronRight className="h-4 w-4 ml-auto" />}
              </>
            )}
          </button>
          {sidebarOpen && infrastructureOpen && (
            <div className="ml-6 mt-1 space-y-1">
              {infrastructureItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm rounded-md hover:bg-slate-800 transition-colors ${
                    pathname === item.href ? 'bg-slate-800 text-indigo-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {navigationMiddle.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center rounded-md hover:bg-slate-800 transition-colors ${sidebarOpen ? 'gap-3 px-3 py-2 text-sm' : 'justify-center py-3'}`}
            title={!sidebarOpen ? item.name : undefined}
          >
            <item.icon className="h-5 w-5" />
            {sidebarOpen && item.name}
          </Link>
        ))}

        <div className="flex-1"></div>
        <div className="border-t border-slate-700 pt-2">
          {navigationBottom.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-md hover:bg-slate-800 transition-colors ${sidebarOpen ? 'gap-3 px-3 py-2 text-sm' : 'justify-center py-3'}`}
              title={!sidebarOpen ? item.name : undefined}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && item.name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  )
}