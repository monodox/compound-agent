import { NextResponse } from 'next/server'

const mockAnalytics = {
  totalWorkflows: 12,
  activeWorkflows: 8,
  totalExecutions: 15420,
  successRate: 98.7,
  avgExecutionTime: 2.3,
  recentActivity: [
    { time: '2 min ago', event: 'Workflow "Data Sync" completed successfully' },
    { time: '5 min ago', event: 'Performance optimization applied to "API Integration"' },
    { time: '12 min ago', event: 'New workflow "Email Automation" created' }
  ],
  performanceMetrics: {
    cpu: 45,
    memory: 62,
    storage: 38,
    network: 23
  }
}

export async function GET() {
  return NextResponse.json(mockAnalytics)
}