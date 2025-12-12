import { LiquidMetalClient } from './liquidmetal';
import { ElevenLabsClient } from './elevenlabs';
import { CerebrasClient } from './cerebras';

export { LiquidMetalClient, ElevenLabsClient, CerebrasClient };

// Integration manager for coordinated AI operations
export class AIIntegrationManager {
  private liquidMetal?: LiquidMetalClient;
  private elevenLabs?: ElevenLabsClient;
  private cerebras?: CerebrasClient;

  constructor(config: {
    liquidMetal?: { apiKey: string };
    elevenLabs?: { apiKey: string };
    cerebras?: { apiKey: string };
  }) {
    if (config.liquidMetal) {
      this.liquidMetal = new LiquidMetalClient(config.liquidMetal);
    }
    if (config.elevenLabs) {
      this.elevenLabs = new ElevenLabsClient(config.elevenLabs);
    }
    if (config.cerebras) {
      this.cerebras = new CerebrasClient(config.cerebras);
    }
  }

  async intelligentWorkflowOptimization(workflowId: string, metrics: Record<string, any>) {
    if (!this.cerebras || !this.liquidMetal) return null;

    // Analyze performance with Cerebras
    const analysis = await this.cerebras.analyzeWorkflowPerformance(metrics);
    
    if (analysis) {
      // Execute optimized workflow with LiquidMetal
      return await this.liquidMetal.executeWorkflow(workflowId, { optimization: analysis });
    }
    
    return null;
  }

  async voiceAlertSystem(message: string, severity: 'low' | 'medium' | 'high' = 'medium') {
    if (!this.elevenLabs) return null;

    const voiceIds = {
      low: 'pNInz6obpgDQGcFmaJgB',
      medium: '21m00Tcm4TlvDq8ikWAM',
      high: 'AZnzlk1XvdvUeBnXmlld'
    };

    return await this.elevenLabs.generateAlerts(message, voiceIds[severity]);
  }

  async smartAnomalyDetection(systemData: Record<string, any>) {
    if (!this.cerebras || !this.elevenLabs) return null;

    const anomalies = await this.cerebras.detectAnomalies(systemData);
    
    if (anomalies && anomalies.toLowerCase().includes('critical')) {
      await this.voiceAlertSystem(`Critical anomaly detected: ${anomalies}`, 'high');
    }
    
    return anomalies;
  }
}