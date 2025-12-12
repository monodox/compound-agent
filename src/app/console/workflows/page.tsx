import Link from 'next/link'
import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Play, Edit, FileText, RotateCcw, CheckCircle, XCircle, Clock } from 'lucide-react'
import { mockData } from '@/lib/mock-data'
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations'
import { isTestUser } from '@/lib/auth'

export default function Workflows() {
  const useTestData = isTestUser() || isTestCredentials(process.env.LIQUIDMETAL_API_KEY || '') || process.env.NODE_ENV === 'development'
  const workflows = useTestData ? mockIntegrationData.console.workflows : []
  
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center mb-8">
          <Link href="/console/workflows/new">
            <Button>Create Workflow</Button>
          </Link>
        </div>
        
        <div className="space-y-4">
          {workflows.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-slate-600">No workflows found. Create your first workflow to get started.</p>
              </CardContent>
            </Card>
          ) : (
            workflows.map((workflow) => (
              <Card key={workflow.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">{workflow.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        {workflow.status === 'success' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {workflow.status === 'running' && <Clock className="h-4 w-4 text-blue-600" />}
                        {workflow.status === 'failed' && <XCircle className="h-4 w-4 text-red-600" />}
                        <span className="text-sm text-slate-600 capitalize">{workflow.status}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Link href={`/console/workflows/${workflow.id}`}>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-6 text-sm text-slate-600">
                    <span>Last run: {workflow.lastRun}</span>
                    <span>Versions: {(workflow as any).versions || 1}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </ConsoleLayout>
  )
}