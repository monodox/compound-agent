import Link from 'next/link'
import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle, Zap, TrendingUp } from 'lucide-react'

const improvements: any[] = []

export default function Improvements() {
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {improvements.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-slate-600">No improvement suggestions available.</p>
              </CardContent>
            </Card>
          ) : (
            improvements.map((improvement) => (
              <Card key={improvement.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <div>
                        <CardTitle className="text-lg">{improvement.title}</CardTitle>
                        <div className="text-sm text-slate-600">{improvement.workflow}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Confidence:</span> {improvement.confidence}%
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        improvement.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {improvement.impact} Impact
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">{improvement.reasoning}</p>
                    <div className="flex gap-3">
                      <Link href={`/console/improvements/${improvement.id}`}>
                        <Button size="sm" variant="outline">View Details</Button>
                      </Link>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>AI Analysis Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">No analysis data available</p>
          </CardContent>
        </Card>
      </div>
    </ConsoleLayout>
  )
}