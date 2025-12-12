const API_BASE = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE}/api${endpoint}`
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }
  
  return response.json()
}

export const api = {
  auth: {
    login: (credentials: { email: string; password: string }) =>
      apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
  },
  workflows: {
    list: () => apiRequest('/workflows'),
    create: (workflow: any) =>
      apiRequest('/workflows', {
        method: 'POST',
        body: JSON.stringify(workflow),
      }),
  },
  analytics: {
    get: () => apiRequest('/analytics'),
  },
  infrastructure: {
    get: () => apiRequest('/infrastructure'),
  },
}