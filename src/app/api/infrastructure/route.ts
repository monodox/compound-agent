import { NextResponse } from 'next/server'

const mockInfrastructure = {
  vultr: {
    instances: [
      { id: 'vultr-1', name: 'workflow-worker-1', status: 'running', cpu: 45, memory: 62 },
      { id: 'vultr-2', name: 'workflow-worker-2', status: 'running', cpu: 38, memory: 55 }
    ],
    totalCost: 89.50
  },
  raindrop: {
    smartSQL: { status: 'healthy', queries: 1247, avgResponseTime: 45 },
    smartBuckets: { status: 'healthy', storage: '2.3TB', requests: 8920 },
    smartMemory: { status: 'healthy', hitRate: 94.2, size: '512MB' },
    smartInference: { status: 'healthy', predictions: 3420, accuracy: 97.8 }
  }
}

export async function GET() {
  return NextResponse.json(mockInfrastructure)
}