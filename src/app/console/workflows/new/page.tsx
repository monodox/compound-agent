import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, FileText, Zap, Database } from 'lucide-react'
import Link from 'next/link'

export default function CreateWorkflow() {
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/console/workflows">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Workflow Name</label>
                  <Input placeholder="Enter workflow name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Input placeholder="Describe what this workflow does" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Templates</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50">
                  <FileText className="h-8 w-8 text-indigo-600 mb-2" />
                  <h3 className="font-medium">Data Processing</h3>
                  <p className="text-sm text-slate-600">ETL pipeline template</p>
                </div>
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50">
                  <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                  <h3 className="font-medium">API Integration</h3>
                  <p className="text-sm text-slate-600">REST API workflow</p>
                </div>
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50">
                  <Database className="h-8 w-8 text-green-600 mb-2" />
                  <h3 className="font-medium">Database Sync</h3>
                  <p className="text-sm text-slate-600">Data synchronization</p>
                </div>
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50">
                  <div className="h-8 w-8 bg-slate-200 rounded mb-2" />
                  <h3 className="font-medium">Blank</h3>
                  <p className="text-sm text-slate-600">Start from scratch</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Setup Wizard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
                    <span className="text-sm">Basic Info</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs">2</div>
                    <span className="text-sm text-slate-500">Template</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs">3</div>
                    <span className="text-sm text-slate-500">Configuration</span>
                  </div>
                </div>
                <Button className="w-full">Continue</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  )
}