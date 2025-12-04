import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, CheckCircle, XCircle, Play, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ImprovementDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/console/improvements">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Improvement #{params.id}</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Current Implementation</h3>
                    <div className="bg-red-50 p-3 rounded font-mono text-sm">
                      <div className="text-red-800">for (const item of items) {"{"}</div>
                      <div className="text-red-800 ml-4">await apiCall(item)</div>
                      <div className="text-red-800">{"}"}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Proposed Implementation</h3>
                    <div className="bg-green-50 p-3 rounded font-mono text-sm">
                      <div className="text-green-800">const batches = chunk(items, 10)</div>
                      <div className="text-green-800">await Promise.all(batches.map(batch =></div>
                      <div className="text-green-800 ml-4">apiCall(batch)</div>
                      <div className="text-green-800">))</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sandbox Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">All test cases passed</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">No breaking changes detected</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Performance improvement verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Execution time:</span>
                  <span className="text-sm text-green-600">-65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">API calls:</span>
                  <span className="text-sm text-green-600">-80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Resource usage:</span>
                  <span className="text-sm text-green-600">-45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Confidence:</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Reasoning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  SmartInference analyzed 1,247 execution traces and identified a pattern of sequential API calls 
                  that can be optimized through batching. Antigravity AI confirmed the optimization maintains 
                  data consistency while significantly reducing latency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deployment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Test in Sandbox
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Deploy Improvement
                </Button>
                <Button variant="outline" className="w-full text-red-600">
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}