interface LiquidMetalConfig {
  apiKey: string;
  baseUrl?: string;
}

interface LiquidMetalResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class LiquidMetalClient {
  private config: LiquidMetalConfig;

  constructor(config: LiquidMetalConfig) {
    this.config = {
      baseUrl: 'https://api.liquidmetal.com',
      ...config
    };
  }

  async executeWorkflow(workflowId: string, params: Record<string, any>): Promise<LiquidMetalResponse> {
    try {
      const response = await fetch(`${this.config.baseUrl}/workflows/${workflowId}/execute`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });

      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  async getWorkflowStatus(executionId: string): Promise<LiquidMetalResponse> {
    try {
      const response = await fetch(`${this.config.baseUrl}/executions/${executionId}`, {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`
        }
      });

      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}