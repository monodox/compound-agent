import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Archive, Brain, Zap, RefreshCw } from 'lucide-react'

export default function RaindropConsole() {
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
              <div className="text-2xl font-bold">-</div>
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
              <div className="text-2xl font-bold">-</div>
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
              <div className="text-2xl font-bold">-</div>
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
              <div className="text-2xl font-bold">-</div>
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
              <p className="text-sm text-slate-500">No tables available</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent SmartInference Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">No recent jobs</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>SmartBuckets Snapshots</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">No snapshots available</p>
          </CardContent>
        </Card>
      </div>
    </ConsoleLayout>
  )
}