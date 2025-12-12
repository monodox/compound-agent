import Link from 'next/link'
import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Play, TrendingUp } from 'lucide-react'
import { mockData } from '@/lib/mock-data'

export default function Improvements() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'deployed': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'testing': return <Play className="h-4 w-4 text-blue-600" />
      default: return <Clock className="h-4 w-4 text-yellow-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'bg-green-100 text-green-800'
      case 'testing': return 'bg-blue-100 text-blue-800'
      case 'approved': return 'bg-indigo-100 text-indigo-800'
      default: return 'bg-yellow-100 text-yellow-800'
    }
  }

  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Improvements</h1>
          <p className="text-slate-600">Automated optimizations discovered by Compound Agent</p>
        </div>

        <div className="space-y-4">
          {mockData.improvements.map((improvement) => (
            <Card key={improvement.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{improvement.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(improvement.status)}
                      <span className={`text-xs px-2 py-1 rounded font-medium ${getStatusColor(improvement.status)}`}>
                        {improvement.status}
                      </span>
                    </div>
                  </div>
                  <Link href={`/console/improvements/${improvement.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Impact: {improvement.impact}</span>
                  </div>
                  <span>Confidence: {improvement.confidence}%</span>
                  <span className="capitalize">Type: {improvement.type}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ConsoleLayout>
  )
}