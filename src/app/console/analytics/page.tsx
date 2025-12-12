import { ConsoleLayout } from '@/components/console-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, AlertTriangle, Zap } from 'lucide-react'
import { mockData } from '@/lib/mock-data'
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations'
import { isTestUser } from '@/lib/auth'

export default function Analytics() {
  const useTestData = isTestUser() || isTestCredentials(process.env.CEREBRAS_API_KEY || '')
  const performance = useTestData ? mockIntegrationData.console.analytics.performance : { cpu: 0, memory: 0, latency: 0, throughput: 0 }
  const bottlenecks = useTestData ? mockData.analytics.bottlenecks : []
  const improvements = useTestData ? mockData.analytics.recentImprovements : []
  
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overall Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{performance.cpu}%</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Latency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{performance.latency}ms</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Error Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{performance.memory}%</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-600">{performance.throughput}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Bottleneck Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockData.analytics.bottlenecks.map((bottleneck, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                    <div>
                      <p className="font-medium">{bottleneck.component}</p>
                      <p className="text-sm text-slate-600">{bottleneck.suggestion}</p>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      bottleneck.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {bottleneck.impact}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockData.analytics.recentImprovements.map((improvement) => (
                  <div key={improvement.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{improvement.title}</p>
                      <p className="text-sm text-slate-500">{improvement.date}</p>
                    </div>
                    <span className="text-sm text-green-600 font-medium">{improvement.impact}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ConsoleLayout>
  )
}