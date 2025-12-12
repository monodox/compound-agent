// Mock data for AI integrations when using test credentials
export const mockIntegrationData = {
  liquidMetal: {
    workflows: [
      { id: 'wf-001', name: 'Data Processing Pipeline', status: 'running', success_rate: 98.5 },
      { id: 'wf-002', name: 'API Integration Workflow', status: 'completed', success_rate: 99.2 },
      { id: 'wf-003', name: 'Database Sync', status: 'optimizing', success_rate: 97.8 }
    ],
    executions: {
      'exec-001': { status: 'completed', duration: 45, optimization: 'Reduced memory usage by 15%' },
      'exec-002': { status: 'running', duration: 23, optimization: 'Processing...' }
    }
  },
  
  cerebras: {
    analyses: [
      'System performance is optimal. CPU usage stable at 65%. Recommend maintaining current configuration.',
      'Detected minor bottleneck in database queries. Suggest implementing connection pooling for 12% performance gain.',
      'Memory usage trending upward. Consider implementing garbage collection optimization to prevent future issues.'
    ],
    suggestions: [
      '1. Implement Redis caching for frequently accessed data\n2. Add load balancing for high-traffic endpoints\n3. Set up automated backup workflows',
      'Critical: High error rate detected in payment processing. Immediate investigation required.',
      'Performance optimization complete. System efficiency improved by 23%.'
    ]
  },
  
  elevenLabs: {
    voices: [
      { id: 'voice-001', name: 'Alert System', status: 'active' },
      { id: 'voice-002', name: 'Notification Bot', status: 'active' }
    ],
    alerts: [
      { message: 'System health check completed successfully', severity: 'low', timestamp: new Date().toISOString() },
      { message: 'Performance optimization in progress', severity: 'medium', timestamp: new Date().toISOString() }
    ]
  },
  
  console: {
    workflows: [
      { id: 'wf-001', name: 'E-commerce Data Pipeline', status: 'success', created: '2024-01-15', lastRun: '2 hours ago', versions: 3, executions: 156, successRate: 98.5 },
      { id: 'wf-002', name: 'Customer Analytics', status: 'running', created: '2024-01-10', lastRun: '1 day ago', versions: 2, executions: 89, successRate: 96.2 },
      { id: 'wf-003', name: 'Inventory Sync', status: 'success', created: '2024-01-08', lastRun: '30 minutes ago', versions: 4, executions: 234, successRate: 99.1 },
      { id: 'wf-004', name: 'Payment Processing', status: 'failed', created: '2024-01-05', lastRun: '45 minutes ago', versions: 1, executions: 67, successRate: 94.8 },
      { id: 'wf-005', name: 'Email Automation', status: 'success', created: '2024-01-12', lastRun: '1 hour ago', versions: 2, executions: 123, successRate: 97.3 }
    ],
    analytics: {
      performance: { cpu: 68, memory: 45, latency: 120, throughput: 1250 },
      trends: [
        { date: '2024-01-01', value: 85 },
        { date: '2024-01-02', value: 92 },
        { date: '2024-01-03', value: 78 },
        { date: '2024-01-04', value: 95 },
        { date: '2024-01-05', value: 88 }
      ]
    },
    infrastructure: {
      vultr: { instances: 3, status: 'Healthy', usage: '68%' },
      raindrop: { services: 4, status: 'Active', connections: 12 }
    }
  },
  
  raindrop: {
    smartSql: {
      workflows: 24,
      executions: 1847,
      metrics: 156,
      status: 'Connected'
    },
    smartBuckets: {
      snapshots: 89,
      versions: 312,
      storage: '2.4GB',
      status: 'Active'
    },
    smartMemory: {
      contexts: 45,
      reasoning: 234,
      memory: '512MB',
      status: 'Learning'
    },
    smartInference: {
      optimizations: 67,
      scores: 423,
      latency: '45ms',
      status: 'Processing'
    }
  },
  
  vultr: {
    instances: [
      {
        id: 'vultr-001',
        label: 'compound-worker-1',
        status: 'active',
        region: 'ewr',
        plan: 'vc2-2c-4gb',
        main_ip: '192.168.1.100',
        vcpu_count: 2,
        ram: 4096,
        disk: 80
      },
      {
        id: 'vultr-002',
        label: 'compound-worker-2',
        status: 'active',
        region: 'lax',
        plan: 'vc2-1c-2gb',
        main_ip: '192.168.1.101',
        vcpu_count: 1,
        ram: 2048,
        disk: 55
      }
    ],
    executions: [
      {
        id: 'exec-001',
        workflowId: 'wf-001',
        status: 'completed',
        startTime: '2024-01-15T10:30:00Z',
        duration: 145,
        results: { success: true, optimizations: ['Reduced memory usage by 15%'] }
      },
      {
        id: 'exec-002',
        workflowId: 'wf-002',
        status: 'running',
        startTime: '2024-01-15T11:00:00Z'
      }
    ],
    metrics: {
      cpu_percentage: 68,
      memory_percentage: 45,
      disk_percentage: 32,
      network_in: 1250000,
      network_out: 890000
    }
  }
};

export function isTestCredentials(apiKey: string): boolean {
  const testKeys = [
    'test_key',
    'mock_key', 
    'demo_key',
    'lm_test_',
    'sk_test_',
    'csk_test_'
  ];
  return testKeys.some(key => apiKey.startsWith(key)) || apiKey === '';
}