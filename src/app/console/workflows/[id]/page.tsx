import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Save, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function WorkflowEditor({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/console/workflows">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Edit Workflow #{params.id}</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Workflow Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input defaultValue="Data Sync Workflow" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Input defaultValue="Syncs data between systems every hour" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Workflow Logic</CardTitle>
                  <Button variant="outline">
                    <Zap className="h-4 w-4 mr-2" />
                    Analyze & Suggest
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <textarea 
                  className="w-full h-64 p-3 border rounded-md font-mono text-sm"
                  defaultValue={`{
  "steps": [
    {
      "name": "fetch_data",
      "type": "api_call",
      "url": "https://api.example.com/data"
    },
    {
      "name": "process_data", 
      "type": "transform",
      "script": "data.map(item => ({ ...item, processed: true }))"
    }
  ]
}`}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Schema valid</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" className="w-full">Test Run</Button>
                <Button variant="outline" className="w-full">View History</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}