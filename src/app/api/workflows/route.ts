import { NextRequest, NextResponse } from 'next/server'

const mockWorkflows = [
  {
    id: '1',
    name: 'Data Processing Pipeline',
    status: 'active',
    lastRun: new Date().toISOString(),
    successRate: 98.5,
    executions: 1247
  },
  {
    id: '2', 
    name: 'API Integration Sync',
    status: 'active',
    lastRun: new Date(Date.now() - 3600000).toISOString(),
    successRate: 99.2,
    executions: 892
  }
]

export async function GET() {
  return NextResponse.json({ workflows: mockWorkflows })
}

export async function POST(request: NextRequest) {
  try {
    const workflow = await request.json()
    const newWorkflow = {
      id: Date.now().toString(),
      ...workflow,
      status: 'draft',
      executions: 0,
      successRate: 0
    }
    
    return NextResponse.json({ workflow: newWorkflow }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid workflow data' }, { status: 400 })
  }
}