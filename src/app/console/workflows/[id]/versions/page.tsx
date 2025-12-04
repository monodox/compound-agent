import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, RotateCcw, Eye, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const versions = [
  { id: 'v3', date: '2024-01-15', changes: 'Optimized API calls, added error handling', active: true, reasoning: 'SmartInference detected redundant calls' },
  { id: 'v2', date: '2024-01-10', changes: 'Added retry logic for failed requests', active: false, reasoning: 'Failure rate analysis suggested improvements' },
  { id: 'v1', date: '2024-01-05', changes: 'Initial workflow creation', active: false, reasoning: 'Base implementation' },
]

export default function VersionManager({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/console/workflows/${params.id}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Workflow #{params.id} Versions</h1>
        </div>

        <div className="space-y-4">
          {versions.map((version) => (
            <Card key={version.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{version.id}</CardTitle>
                    {version.active && (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Active</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/console/workflows/${params.id}/versions/${version.id}`}>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    {!version.active && (
                      <Button size="sm" variant="outline">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    )}
                    {!version.active && (
                      <Button size="sm">Activate</Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-slate-600">
                    <span className="font-medium">Date:</span> {version.date}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Changes:</span> {version.changes}
                  </div>
                  <div className="text-sm text-blue-600">
                    <span className="font-medium">SmartMemory:</span> {version.reasoning}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <AppFooter />
    </div>
  )
}