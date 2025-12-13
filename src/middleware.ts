import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const authToken = request.cookies.get('auth-token')
  
  // Redirect root to login
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  
  // Protect console routes - redirect to login if no auth
  if (pathname.startsWith('/console')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }
  
  // Redirect authenticated users from auth pages to dashboard
  if (pathname.startsWith('/auth') && pathname !== '/auth/logout') {
    if (authToken) {
      return NextResponse.redirect(new URL('/console/dashboard', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/console/:path*', '/auth/:path*']
}