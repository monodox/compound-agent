'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Database, Archive, Brain, Zap, RefreshCw } from 'lucide-react';

export function RaindropServicesPanel() {
  const [services, setServices] = useState({
    smartSql: { workflows: 0, executions: 0, metrics: 0, status: 'Unknown' },
    smartBuckets: { snapshots: 0, versions: 0, storage: '0GB', status: 'Unknown' },
    smartMemory: { contexts: 0, reasoning: 0, memory: '0MB', status: 'Unknown' },
    smartInference: { optimizations: 0, scores: 0, latency: '0ms', status: 'Unknown' }
  });

  const fetchServiceData = async (service: string, action: string) => {
    try {
      const response = await fetch('/api/raindrop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, action })
      });
      const result = await response.json();
      return result.data || result;
    } catch (error) {
      console.error(`Failed to fetch ${service} data:`, error);
      return null;
    }
  };

  const refreshServices = async () => {
    const [smartSql, smartBuckets, smartMemory, smartInference] = await Promise.all([
      fetchServiceData('smartsql', 'get_workflows'),
      fetchServiceData('smartbuckets', 'get_snapshots'),
      fetchServiceData('smartmemory', 'get_contexts'),
      fetchServiceData('smartinference', 'get_optimizations')
    ]);

    setServices({
      smartSql: smartSql || services.smartSql,
      smartBuckets: smartBuckets || services.smartBuckets,
      smartMemory: smartMemory || services.smartMemory,
      smartInference: smartInference || services.smartInference
    });
  };

  useEffect(() => {
    refreshServices();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Raindrop Services</h3>
        <Button onClick={refreshServices} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-600" />
              SmartSQL
            </CardTitle>
            <Badge variant={services.smartSql.status === 'Connected' ? 'default' : 'secondary'}>
              {services.smartSql.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Workflows:</span>
                <span className="font-medium">{services.smartSql.workflows}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Executions:</span>
                <span className="font-medium">{services.smartSql.executions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Metrics:</span>
                <span className="font-medium">{services.smartSql.metrics}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Archive className="h-4 w-4 text-green-600" />
              SmartBuckets
            </CardTitle>
            <Badge variant={services.smartBuckets.status === 'Active' ? 'default' : 'secondary'}>
              {services.smartBuckets.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Snapshots:</span>
                <span className="font-medium">{services.smartBuckets.snapshots}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Versions:</span>
                <span className="font-medium">{services.smartBuckets.versions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Storage:</span>
                <span className="font-medium">{services.smartBuckets.storage}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-600" />
              SmartMemory
            </CardTitle>
            <Badge variant={services.smartMemory.status === 'Learning' ? 'default' : 'secondary'}>
              {services.smartMemory.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Contexts:</span>
                <span className="font-medium">{services.smartMemory.contexts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Reasoning:</span>
                <span className="font-medium">{services.smartMemory.reasoning}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Memory:</span>
                <span className="font-medium">{services.smartMemory.memory}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="h-4 w-4 text-orange-600" />
              SmartInference
            </CardTitle>
            <Badge variant={services.smartInference.status === 'Processing' ? 'default' : 'secondary'}>
              {services.smartInference.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Optimizations:</span>
                <span className="font-medium">{services.smartInference.optimizations}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Scores:</span>
                <span className="font-medium">{services.smartInference.scores}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Latency:</span>
                <span className="font-medium">{services.smartInference.latency}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}