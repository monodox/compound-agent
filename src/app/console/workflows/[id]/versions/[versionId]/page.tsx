import { AppHeader } from '@/components/app-header'
import { AppFooter } from '@/components/app-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Plus, Minus, Edit } from 'lucide-react'
import Link from 'next/link'

export default function VersionDiff({ params }: { params: { id: string, versionId: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/console/workflows/${params.id}/versions`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Version {params.versionId} Changes</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <Plus className="h-4 w-4" />
                <span className="text-sm">Added error handling for API calls</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Edit className="h-4 w-4" />
                <span className="text-sm">Optimized data processing logic</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <Minus className="h-4 w-4" />
                <span className="text-sm">Removed redundant validation step</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Execution time:</span>
                <span className="text-sm text-green-600">-15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Error rate:</span>
                <span className="text-sm text-green-600">-8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Resource usage:</span>
                <span className="text-sm text-green-600">-12%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Code Diff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-sm space-y-1">
              <div className="bg-red-50 text-red-800 p-2 rounded">
                <span className="text-red-600">-</span> &quot;timeout&quot;: 5000
              </div>
              <div className="bg-green-50 text-green-800 p-2 rounded">
                <span className="text-green-600">+</span> &quot;timeout&quot;: 10000,
              </div>
              <div className="bg-green-50 text-green-800 p-2 rounded">
                <span className="text-green-600">+</span> &quot;retry&quot;: &lbrace; &quot;attempts&quot;: 3, &quot;delay&quot;: 1000 &rbrace;
              </div>
              <div className="p-2">
                &quot;url&quot;: &quot;https://api.example.com/data&quot;
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <AppFooter />
    </div>
  )
}