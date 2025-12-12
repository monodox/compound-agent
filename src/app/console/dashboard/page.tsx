import { ConsoleLayout } from '@/components/console-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, CheckCircle, XCircle, TrendingUp, Settings, Plus } from 'lucide-react'
import { mockData } from '@/lib/mock-data'
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations'
import { isTestUser } from '@/lib/auth'
import { AIIntegrationPanel } from '@/components/ai-integration-panel'
import { RaindropServicesPanel } from '@/components/raindrop-services-panel'

export default function Dashboard() {
  const useTestData = isTestUser() || isTestCredentials(process.env.CEREBRAS_API_KEY || '')
  const metrics = useTestData ? (mockData.dashboard.metrics.totalWorkflows > 0 ? mockData.dashboard.metrics : { totalWorkflows: 24, successRate: 96.5, failures24h: 2, improvements: 8 }) : { totalWorkflows: 0, successRate: 0, failures24h: 0, improvements: 0 }
  const activity = useTestData ? (mockData.dashboard.recentActivity.length > 0 ? mockData.dashboard.recentActivity : mockIntegrationData.console.workflows.map(w => ({ id: w.id, type: 'success', message: `${w.name} completed successfully`, time: w.lastRun }))) : []
  const health = useTestData ? (mockData.dashboard.systemHealth.smartSQL !== 'Unknown' ? mockData.dashboard.systemHealth : { smartSQL: 'Healthy', vultrWorker: 'Running', smartInference: 'Active', smartBuckets: 'Online' }) : { smartSQL: 'Unknown', vultrWorker: 'Unknown', smartInference: 'Unknown', smartBuckets: 'Unknown' }

  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.totalWorkflows || '-'}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{metrics.successRate ? `${metrics.successRate}%` : '-'}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Failures (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{metrics.failures24h || '-'}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{metrics.improvements || '-'}</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>AI Integration Hub</CardTitle>
              <CardDescription>Manage LiquidMetal, ElevenLabs, and Cerebras integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <AIIntegrationPanel />
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Raindrop Platform</CardTitle>
              <CardDescription>SmartSQL, SmartBuckets, SmartMemory, and SmartInference services</CardDescription>
            </CardHeader>
            <CardContent>
              <RaindropServicesPanel />
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {activity.length > 0 ? (
                <div className="space-y-3">
                  {activity.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      {item.type === 'success' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {item.type === 'improvement' && <TrendingUp className="h-4 w-4 text-blue-600" />}
                      {item.type === 'created' && <Plus className="h-4 w-4 text-indigo-600" />}
                      {item.type === 'optimization' && <Settings className="h-4 w-4 text-purple-600" />}
                      <div className="flex-1">
                        <p className="text-sm">{item.message}</p>
                        <p className="text-xs text-slate-500">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-600">No recent activity</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">SmartSQL</span>
                <span className={`text-sm ${health.smartSQL === 'Healthy' ? 'text-green-600' : 'text-slate-500'}`}>{health.smartSQL}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Vultr Worker</span>
                <span className={`text-sm ${health.vultrWorker === 'Running' ? 'text-green-600' : 'text-slate-500'}`}>{health.vultrWorker}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">SmartInference</span>
                <span className={`text-sm ${health.smartInference === 'Active' ? 'text-green-600' : 'text-slate-500'}`}>{health.smartInference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">SmartBuckets</span>
                <span className={`text-sm ${health.smartBuckets === 'Online' ? 'text-green-600' : 'text-slate-500'}`}>{health.smartBuckets}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ConsoleLayout>
  )
}