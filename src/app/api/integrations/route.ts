import { NextRequest, NextResponse } from 'next/server';
import { AIIntegrationManager } from '@/lib/integrations';

export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();
    
    const manager = new AIIntegrationManager({
      liquidMetal: { apiKey: process.env.LIQUIDMETAL_API_KEY || '' },
      elevenLabs: { apiKey: process.env.ELEVENLABS_API_KEY || '' },
      cerebras: { apiKey: process.env.CEREBRAS_API_KEY || '' }
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