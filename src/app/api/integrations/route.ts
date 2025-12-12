import { NextRequest, NextResponse } from 'next/server';
import { AIIntegrationManager } from '@/lib/integrations';
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations';

export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();
    
    const liquidMetalKey = process.env.LIQUIDMETAL_API_KEY || '';
    const elevenLabsKey = process.env.ELEVENLABS_API_KEY || '';
    const cerebrasKey = process.env.CEREBRAS_API_KEY || '';
    
    // Use mock data for test credentials
    const useMockData = isTestCredentials(liquidMetalKey) || isTestCredentials(elevenLabsKey) || isTestCredentials(cerebrasKey);
    
    if (useMockData) {
      switch (action) {
        case 'optimize_workflow':
          const mockResult = mockIntegrationData.liquidMetal.executions['exec-001'];
          return NextResponse.json({ success: true, result: mockResult });

        case 'voice_alert':
          return NextResponse.json({ success: true, hasAudio: true, mock: true });

        case 'detect_anomalies':
          const mockAnomalies = mockIntegrationData.cerebras.analyses[Math.floor(Math.random() * 3)];
          return NextResponse.json({ success: true, anomalies: mockAnomalies });

        default:
          return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
      }
    }
    
    const manager = new AIIntegrationManager({
      liquidMetal: { apiKey: liquidMetalKey },
      elevenLabs: { apiKey: elevenLabsKey },
      cerebras: { apiKey: cerebrasKey }
    });

    switch (action) {
      case 'optimize_workflow':
        const result = await manager.intelligentWorkflowOptimization(data.workflowId, data.metrics);
        return NextResponse.json({ success: true, result });

      case 'voice_alert':
        const audio = await manager.voiceAlertSystem(data.message, data.severity);
        return NextResponse.json({ success: true, hasAudio: !!audio });

      case 'detect_anomalies':
        const anomalies = await manager.smartAnomalyDetection(data.systemData);
        return NextResponse.json({ success: true, anomalies });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Integration failed' }, { status: 500 });
  }
}