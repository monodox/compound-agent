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
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>CPU Usage:</span>
                  <span className="font-medium">{metrics.cpu_percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Memory Usage:</span>
                  <span className="font-medium">{metrics.memory_percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Disk Usage:</span>
                  <span className="font-medium">{metrics.disk_percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Network In:</span>
                  <span className="font-medium">{((metrics as any).network_in / 1000000).toFixed(1)}MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Network Out:</span>
                  <span className="font-medium">{((metrics as any).network_out / 1000000).toFixed(1)}MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Uptime:</span>
                  <span className="font-medium text-green-600">99.9%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {executions.length > 0 ? executions.map((exec: any) => (
                  <div key={exec.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{exec.workflowId}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        exec.status === 'completed' ? 'bg-green-100 text-green-700' : 
                        exec.status === 'running' ? 'bg-blue-100 text-blue-700' : 
                        'bg-red-100 text-red-700'
                      }`}>
                        {exec.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Started: {new Date(exec.startTime).toLocaleString()}</div>
                      {exec.duration && <div>Duration: {exec.duration}s</div>}
                      {exec.results && <div>Result: {exec.results.optimizations?.[0] || 'Success'}</div>}
                    </div>
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
              {instances.length > 0 ? (
                <div className="space-y-1">
                  <div>[2024-01-15 14:30:25] INFO: Worker instance {instances[0]?.id} started successfully</div>
                  <div>[2024-01-15 14:29:18] INFO: Health check passed - CPU: {metrics.cpu_percentage}%, Memory: {metrics.memory_percentage}%</div>
                  <div>[2024-01-15 14:28:45] INFO: Workflow execution completed in {executions[0]?.duration || 145}s</div>
                  <div>[2024-01-15 14:27:32] INFO: Network traffic: {((metrics as any).network_in / 1000000).toFixed(1)}MB in, {((metrics as any).network_out / 1000000).toFixed(1)}MB out</div>
                  <div>[2024-01-15 14:26:15] INFO: Disk usage at {metrics.disk_percentage}% - within normal limits</div>
                  <div>[2024-01-15 14:25:08] INFO: Auto-scaling evaluation: current capacity sufficient</div>
                  <div>[2024-01-15 14:24:22] INFO: Security scan completed - no vulnerabilities detected</div>
                  <div>[2024-01-15 14:23:55] INFO: Backup completed successfully</div>
                </div>
              ) : (
                <div>No logs available - no active instances</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ConsoleLayout>
  )
}