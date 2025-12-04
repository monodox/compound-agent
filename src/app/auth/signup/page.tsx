'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { TypingText } from '@/components/typing-text'
import { Bot, Shield, Rocket, Users } from 'lucide-react'

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 animate-gradient">
      <AppHeader />
      <div className="flex-1 flex items-center py-12 mt-8">
        <motion.div 
          className="flex-1 pl-12 pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-indigo-900 mb-6">
              Join the Future
            </h1>
            <div className="text-xl text-indigo-700 mb-8 h-8">
              <TypingText 
                texts={[
                  "Build smarter workflows",
                  "Scale your automation", 
                  "Deploy with confidence",
                  "Grow your business"
                ]}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-600">
                <Rocket className="h-5 w-5" />
                <span>Get started in minutes</span>
              </div>
              <div className="flex items-center gap-3 text-indigo-600">
                <Shield className="h-5 w-5" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-3 text-indigo-600">
                <Users className="h-5 w-5" />
                <span>Join thousands of users</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="pr-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        <Card className="w-full max-w-lg mx-4">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Bot className="h-12 w-12 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl">Create account</CardTitle>
          <CardDescription>Start building smarter workflows today</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <Input id="name" type="text" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>
          <Button className="w-full">Create Account</Button>
          <div className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-indigo-600 hover:underline">
              Sign in
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