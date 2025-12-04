import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Play, CheckCircle, XCircle, Clock } from 'lucide-react'

const testRuns: any[] = []

export default function Sandbox() {
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Test Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Workflow Version</label>
                  <Input placeholder="Select workflow version to test" />
                </div>
                <div>
                  <label className="text-sm font-medium">Sample Input Data</label>
                  <textarea 
                    className="w-full h-32 p-3 border rounded-md text-sm"
                    placeholder="Enter test data in JSON format..."
                    defaultValue={`{
  "users": [
    {"id": 1, "email": "test@example.com"},
    {"id": 2, "email": "demo@example.com"}
  ]
}`}
                  />
                </div>
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Run Test
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Test Output</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 text-green-400 p-4 rounded font-mono text-sm h-48 overflow-y-auto">
                  <div>No test output available</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600">No test results available</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">No recent tests</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  )
}