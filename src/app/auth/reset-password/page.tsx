'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Bot, ArrowLeft } from 'lucide-react'

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 animate-gradient">
      <AppHeader />
      <div className="flex-1 flex items-center justify-center py-12 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <Card className="w-full max-w-lg mx-4">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Bot className="h-12 w-12 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl">Set new password</CardTitle>
          <CardDescription>Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">New Password</label>
            <Input id="password" type="password" placeholder="Enter new password" />
          </div>
          <Button className="w-full">Update Password</Button>
          <div className="text-center">
            <Link href="/auth/login" className="inline-flex items-center text-sm text-indigo-600 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to sign in
            </Link>
          </div>
        </CardContent>
      </Card>
      </motion.div>
      </div>
      <AppFooter />
    </div>
  )
}