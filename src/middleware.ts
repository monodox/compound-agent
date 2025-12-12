import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Protect console routes
  if (pathname.startsWith('/console')) {
    const authToken = request.cookies.get('auth-token')
    
    if (!authToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }
  
  // Redirect authenticated users from auth pages
  if (pathname.startsWith('/auth')) {
    const authToken = request.cookies.get('auth-token')
    
    if (authToken && pathname !== '/auth/logout') {
      return NextResponse.redirect(new URL('/console/dashboard', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/console/:path*', '/auth/:path*']
}