'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Volume2, Zap } from 'lucide-react';

export function AIIntegrationPanel() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [anomalies, setAnomalies] = useState<string | null>(null);

  const optimizeWorkflow = async () => {
    setIsOptimizing(true);
    try {
      const response = await fetch('/api/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'optimize_workflow',
          data: {
            workflowId: 'main-workflow',
            metrics: { cpu: 75, memory: 60, latency: 120 }
          }
        })
      });
      const result = await response.json();
      console.log('Optimization result:', result);
    } finally {
      setIsOptimizing(false);
    }
  };

  const detectAnomalies = async () => {
    try {
      const response = await fetch('/api/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'detect_anomalies',
          data: {
            systemData: { cpu: 95, memory: 85, errors: 12, responseTime: 2500 }
          }
        })
      });
      const result = await response.json();
      setAnomalies(result.anomalies);
    } catch (error) {
      console.error('Anomaly detection failed:', error);
    }
  };

  const sendVoiceAlert = async () => {
    try {
      await fetch('/api/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'voice_alert',
          data: {
            message: 'System performance degradation detected',
            severity: 'high'
          }
        })
      });
    } catch (error) {
      console.error('Voice alert failed:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cerebras AI</CardTitle>
          <Brain className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button 
              onClick={optimizeWorkflow} 
              disabled={isOptimizing}
              className="w-full"
            >
              {isOptimizing ? 'Optimizing...' : 'Optimize Workflow'}
            </Button>
            <Button 
              onClick={detectAnomalies}
              variant="outline"
              className="w-full"
            >
              Detect Anomalies
            </Button>
            {anomalies && (
              <div className="mt-2 p-2 bg-yellow-50 rounded text-xs">
                {anomalies}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ElevenLabs</CardTitle>
          <Volume2 className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button onClick={sendVoiceAlert} className="w-full">
              Test Voice Alert
            </Button>
            <Badge variant="secondary" className="w-full justify-center">
              Voice Notifications Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">LiquidMetal</CardTitle>
          <Zap className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="outline" className="w-full justify-center">
              Workflow Engine Ready
            </Badge>
            <div className="text-xs text-muted-foreground text-center">
              Auto-execution enabled
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}