interface VultrConfig {
  apiKey: string;
  baseUrl?: string;
}

interface VultrInstance {
  id: string;
  label: string;
  status: string;
  region: string;
  plan: string;
  main_ip: string;
  vcpu_count: number;
  ram: number;
  disk: number;
}

interface WorkflowExecution {
  id: string;
  workflowId: string;
  status: 'running' | 'completed' | 'failed';
  startTime: string;
  duration?: number;
  results?: any;
}

export class VultrClient {
  private config: VultrConfig;

  constructor(config: VultrConfig) {
    this.config = {
      baseUrl: 'https://api.vultr.com/v2',
      ...config
    };
  }

  async getInstances(): Promise<VultrInstance[]> {
    try {
      const response = await fetch(`${this.config.baseUrl}/instances`, {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        return data.instances || [];
      }
      return [];
    } catch (error) {
      console.error('Vultr API error:', error);
      return [];
    }
  }

  async createWorkerInstance(label: string, region: string = 'ewr', plan: string = 'vc2-1c-1gb') {
    try {
      const response = await fetch(`${this.config.baseUrl}/instances`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          label,
          region,
          plan,
          os_id: 387, // Ubuntu 20.04
          enable_ipv6: false,
          backups: 'disabled',
          ddos_protection: false
        })
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Vultr instance creation error:', error);
      return null;
    }
  }

  async executeWorkflow(instanceId: string, workflowData: any): Promise<WorkflowExecution | null> {
    try {
      // This would typically SSH into the instance and execute the workflow
      // For now, we'll simulate the execution
      const execution: WorkflowExecution = {
        id: `exec-${Date.now()}`,
        workflowId: workflowData.id,
        status: 'running',
        startTime: new Date().toISOString()
      };

      // Simulate async execution
      setTimeout(() => {
        execution.status = 'completed';
        execution.duration = Math.floor(Math.random() * 300) + 30; // 30-330 seconds
        execution.results = { success: true, optimizations: ['Reduced CPU usage by 12%'] };
      }, 2000);

      return execution;
    } catch (error) {
      console.error('Workflow execution error:', error);
      return null;
    }
  }

  async getInstanceMetrics(instanceId: string) {
    try {
      const response = await fetch(`${this.config.baseUrl}/instances/${instanceId}`, {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        return {
          cpu_percentage: Math.floor(Math.random() * 40) + 30, // Mock CPU usage
          memory_percentage: Math.floor(Math.random() * 30) + 40, // Mock memory usage
          disk_percentage: Math.floor(Math.random() * 20) + 20, // Mock disk usage
          network_in: Math.floor(Math.random() * 1000000), // Mock network in bytes
          network_out: Math.floor(Math.random() * 1000000) // Mock network out bytes
        };
      }
      return null;
    } catch (error) {
      console.error('Vultr metrics error:', error);
      return null;
    }
  }

  async deleteInstance(instanceId: string) {
    try {
      const response = await fetch(`${this.config.baseUrl}/instances/${instanceId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`
        }
      });

      return response.ok;
    } catch (error) {
      console.error('Vultr instance deletion error:', error);
      return false;
    }
  }
}