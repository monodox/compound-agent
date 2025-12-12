interface CerebrasConfig {
  apiKey: string;
  baseUrl?: string;
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  max_tokens?: number;
  temperature?: number;
  stream?: boolean;
}

interface CerebrasResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class CerebrasClient {
  private config: CerebrasConfig;

  constructor(config: CerebrasConfig) {
    this.config = {
      baseUrl: 'https://api.cerebras.ai/v1',
      ...config
    };
  }

  async chatCompletion(request: ChatCompletionRequest): Promise<CerebrasResponse | null> {
    try {
      const response = await fetch(`${this.config.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: request.model || 'llama3.1-8b',
          messages: request.messages,
          max_tokens: request.max_tokens || 1000,
          temperature: request.temperature || 0.7,
          stream: request.stream || false
        })
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Cerebras API error:', error);
      return null;
    }
  }

  async analyzeWorkflowPerformance(metrics: Record<string, any>): Promise<string | null> {
    const response = await this.chatCompletion({
      model: 'llama3.1-8b',
      messages: [
        {
          role: 'system',
          content: 'You are an AI operations engineer analyzing workflow performance metrics. Provide concise optimization recommendations.'
        },
        {
          role: 'user',
          content: `Analyze these workflow metrics and suggest optimizations: ${JSON.stringify(metrics)}`
        }
      ],
      max_tokens: 500,
      temperature: 0.3
    });

    return response?.choices[0]?.message?.content || null;
  }

  async generateWorkflowSuggestions(context: string): Promise<string | null> {
    const response = await this.chatCompletion({
      model: 'llama3.1-8b',
      messages: [
        {
          role: 'system',
          content: 'You are an automation expert. Generate practical workflow automation suggestions based on the given context.'
        },
        {
          role: 'user',
          content: `Context: ${context}. Suggest 3 automation workflows that would be most beneficial.`
        }
      ],
      max_tokens: 800,
      temperature: 0.5
    });

    return response?.choices[0]?.message?.content || null;
  }

  async detectAnomalies(systemData: Record<string, any>): Promise<string | null> {
    const response = await this.chatCompletion({
      model: 'llama3.1-8b',
      messages: [
        {
          role: 'system',
          content: 'You are a system monitoring AI. Analyze system data for anomalies and potential issues.'
        },
        {
          role: 'user',
          content: `System data: ${JSON.stringify(systemData)}. Identify any anomalies or potential issues.`
        }
      ],
      max_tokens: 400,
      temperature: 0.2
    });

    return response?.choices[0]?.message?.content || null;
  }
}