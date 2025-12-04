import Link from 'next/link'
import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-slate-100">
      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl mt-16">
        <Link href="/auth/login">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">By using Compound Agent, you agree to these terms.</p>
          <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
          <p className="mb-4">Compound Agent provides AI-powered workflow automation and optimization services.</p>
          <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
          <p className="mb-4">Users are responsible for their account security and workflow configurations.</p>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}