import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Archive, Brain, Zap, RefreshCw } from 'lucide-react'
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations'
import { isTestUser } from '@/lib/auth'

export default function RaindropConsole() {
  const useTestData = isTestUser() || isTestCredentials(process.env.LIQUIDMETAL_API_KEY || '')
  const raindropData = useTestData ? mockIntegrationData.console.infrastructure.raindrop : { services: 0, status: 'Unknown', connections: 0 }
  return (
    <ConsoleLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-end items-center">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync Status
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Database className="h-4 w-4" />
                SmartSQL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{raindropData.services}</div>
              <div className="text-xs text-slate-500">Active tables</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Archive className="h-4 w-4" />
                SmartBuckets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{raindropData.connections}</div>
              <div className="text-xs text-slate-500">Snapshots stored</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Brain className="h-4 w-4" />
                SmartMemory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-xs text-slate-500">Reasoning data</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                SmartInference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">156</div>
              <div className="text-xs text-slate-500">Jobs completed</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>SmartSQL Tables</CardTitle>
            </CardHeader>
            <CardContent>
              {useTestData ? (
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">workflows</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">24 rows</span>
                    </div>
                    <div className="text-xs text-gray-500">Stores workflow definitions and metadata</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">executions</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1,847 rows</span>
                    </div>
                    <div className="text-xs text-gray-500">Execution logs and performance metrics</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">optimizations</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">156 rows</span>
                    </div>
                    <div className="text-xs text-gray-500">AI-generated optimization suggestions</div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-500">No tables available</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent SmartInference Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              {useTestData ? (
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">Workflow Optimization</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Duration: 1.2s</div>
                      <div>Suggestions: 3 optimizations generated</div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">Anomaly Detection</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Running</span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Progress: 78%</div>
                      <div>ETA: 30 seconds</div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">Performance Scoring</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Score: 96.5/100</div>
                      <div>Improvements: 2 suggestions</div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-500">No recent jobs</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>SmartBuckets Snapshots</CardTitle>
          </CardHeader>
          <CardContent>
            {useTestData ? (
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">wf-001-v1.2.3</span>
                    <span className="text-xs text-gray-500">2.1 MB</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>Created: 2024-01-15 14:25:08</div>
                    <div>Type: Workflow snapshot</div>
                    <div>Status: Verified</div>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">optimization-backup-001</span>
                    <span className="text-xs text-gray-500">1.8 MB</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>Created: 2024-01-15 13:45:22</div>
                    <div>Type: Optimization backup</div>
                    <div>Status: Archived</div>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">system-state-20240115</span>
                    <span className="text-xs text-gray-500">5.4 MB</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>Created: 2024-01-15 12:00:00</div>
                    <div>Type: System state backup</div>
                    <div>Status: Active</div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">No snapshots available</p>
            )}
          </CardContent>
        </Card>
      </div>
    </ConsoleLayout>
  )
}