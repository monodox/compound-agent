import Link from 'next/link'
import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-slate-100">
      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/auth/login">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-semibold mb-3">What are cookies?</h2>
          <p className="mb-4">Cookies are small text files stored on your device to enhance your experience.</p>
          <h2 className="text-xl font-semibold mb-3">How we use cookies</h2>
          <p className="mb-4">We use cookies for authentication, preferences, and analytics.</p>
          <h2 className="text-xl font-semibold mb-3">Managing cookies</h2>
          <p className="mb-4">You can control cookies through your browser settings.</p>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}