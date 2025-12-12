export function isTestUser(): boolean {
  if (typeof window === 'undefined') return false
  
  // Check if user is authenticated with test credentials
  const authCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('auth-token='))
  
  return authCookie?.includes('demo-token') || false
}

export function getEmptyState(message: string = 'No data available') {
  return {
    message,
    isEmpty: true
  }
}