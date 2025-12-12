'use client';

import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Server, Activity, Clock, RefreshCw } from 'lucide-react'
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations'
import { isTestUser } from '@/lib/auth'
import { useState, useEffect } from 'react'

export default function VultrConsole() {
  const [instances, setInstances] = useState([])
  const [metrics, setMetrics] = useState({ cpu_percentage: 0, memory_percentage: 0, disk_percentage: 0 })
  const [executions, setExecutions] = useState([])
  
  const fetchVultrData = async () => {
    try {
      const [instancesRes, metricsRes, executionsRes] = await Promise.all([
        fetch('/api/vultr', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'get_instances' }) }),
        fetch('/api/vultr', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'get_metrics' }) }),
        fetch('/api/vultr', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'get_executions' }) })
      ])
      
      const instancesData = await instancesRes.json()
      const metricsData = await metricsRes.json()
      const executionsData = await executionsRes.json()
      
      setInstances(instancesData.instances || [])
      setMetrics(metricsData.metrics || { cpu_percentage: 0, memory_percentage: 0, disk_percentage: 0 })
      setExecutions(executionsData.executions || [])
    } catch (error) {
      console.error('Failed to fetch Vultr data:', error)
    }
  }
  
  useEffect(() => {
    fetchVultrData()
  }, [])
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center mb-8">
          <Button onClick={fetchVultrData} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-green-600">{instances.length > 0 ? 'Active' : 'No Instances'}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Instances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{instances.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{metrics.cpu_percentage}%</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">RAM Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{metrics.memory_percentage}%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPU:</span>
                  <span>{metrics.cpu_percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Memory:</span>
                  <span>{metrics.memory_percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Disk:</span>
                  <span>{metrics.disk_percentage}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {executions.length > 0 ? executions.map((exec: any) => (
                  <div key={exec.id} className="flex justify-between text-sm">
                    <span>{exec.workflowId}</span>
                    <span className={exec.status === 'completed' ? 'text-green-600' : exec.status === 'running' ? 'text-blue-600' : 'text-red-600'}>
                      {exec.status}
                    </span>
                  </div>
                )) : (
                  <p className="text-sm text-slate-600">No executions found</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Worker Logs</CardTitle>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                <span>Last evaluation: 2 min ago</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 text-green-400 p-4 rounded font-mono text-sm h-64 overflow-y-auto">
              <div>No logs available</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ConsoleLayout>
  )
}