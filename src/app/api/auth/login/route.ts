import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    // Demo authentication - replace with actual auth logic
    if (email === 'test@example.com' && password === 'password') {
      const response = NextResponse.json({ 
        success: true, 
        user: { email, name: 'Demo User' } 
      })
      
      // Set auth cookie
      response.cookies.set('auth-token', 'demo-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400 // 24 hours
      })
      
      return response
    }
    
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}