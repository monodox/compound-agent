export const mockData = {
  dashboard: {
    metrics: {
      totalWorkflows: 24,
      activeWorkflows: 18,
      successRate: 96.8,
      failures24h: 2,
      improvements: 12,
      totalExecutions: 15420,
      avgResponseTime: 2.3
    },
    recentActivity: [
      { id: 1, type: 'success', message: 'Workflow "E-commerce Data Pipeline" completed successfully', time: '2 minutes ago' },
      { id: 2, type: 'improvement', message: 'Performance improved by 15% in "Customer Analytics"', time: '5 minutes ago' },
      { id: 3, type: 'created', message: 'New workflow "Social Media Publisher" created', time: '12 minutes ago' },
      { id: 4, type: 'optimization', message: 'Auto-optimization applied to "Email Automation"', time: '18 minutes ago' },
      { id: 5, type: 'success', message: 'Workflow "Inventory Sync" executed (234 runs)', time: '30 minutes ago' },
      { id: 6, type: 'improvement', message: 'AI model accuracy improved to 97.8%', time: '45 minutes ago' },
      { id: 7, type: 'created', message: 'Test credentials configured for "Payment Processing"', time: '1 hour ago' },
      { id: 8, type: 'optimization', message: 'Database backup completed with 99.8% success rate', time: '3 hours ago' }
    ],
    systemHealth: {
      smartSQL: 'Healthy',
      vultrWorker: 'Running',
      smartInference: 'Active',
      smartBuckets: 'Online',
      smartMemory: 'Operational'
    },
    testCredentials: {
      cerebras: { apiKey: 'test_key_cerebras_xyz789', endpoint: 'https://api.cerebras.ai/v1', status: 'active' },
      elevenlabs: { apiKey: 'test_key_elevenlabs_abc123', voiceId: 'test_voice_alert_001', status: 'active' },
      liquidmetal: { apiKey: 'lm_test_key_workflow_def456', endpoint: 'https://api.liquidmetal.com/v1', status: 'active' },
      raindrop: { apiKey: 'test_key_raindrop_ghi789', services: ['smartSQL', 'smartBuckets', 'smartMemory', 'smartInference'], status: 'active' },
      vultr: { apiKey: 'test_key_vultr_jkl012', endpoint: 'https://api.vultr.com/v2', status: 'active' }
    }
  },
  
  workflows: [
    { id: '1', name: 'Data Processing Pipeline', status: 'success', lastRun: '2 minutes ago', versions: 3, executions: 1247, successRate: 98.5 },
    { id: '2', name: 'API Integration Sync', status: 'running', lastRun: '5 minutes ago', versions: 2, executions: 892, successRate: 99.2 },
    { id: '3', name: 'Email Automation', status: 'success', lastRun: '1 hour ago', versions: 1, executions: 456, successRate: 97.8 },
    { id: '4', name: 'Database Backup', status: 'failed', lastRun: '3 hours ago', versions: 4, executions: 234, successRate: 95.2 },
    { id: '5', name: 'Report Generation', status: 'success', lastRun: '6 hours ago', versions: 2, executions: 678, successRate: 96.9 }
  ],
  
  analytics: {
    metrics: {
      overallSuccessRate: 98.7,
      avgLatency: 2.3,
      errorFrequency: 1.3,
      improvements: 7
    },
    bottlenecks: [
      { component: 'Database Query', impact: 'High', suggestion: 'Add indexing to user_events table' },
      { component: 'API Rate Limit', impact: 'Medium', suggestion: 'Implement request batching' }
    ],
    recentImprovements: [
      { id: 1, title: 'Query Optimization', impact: '+15% performance', date: '2 hours ago' },
      { id: 2, title: 'Cache Implementation', impact: '+8% response time', date: '1 day ago' }
    ]
  },
  
  logs: [
    { id: 1, timestamp: '2024-01-15 14:32:15', level: 'INFO', source: 'workflow-engine', message: 'Workflow "Data Processing" started execution' },
    { id: 2, timestamp: '2024-01-15 14:31:45', level: 'SUCCESS', source: 'api-sync', message: 'Successfully synced 1,247 records' },
    { id: 3, timestamp: '2024-01-15 14:30:22', level: 'WARNING', source: 'email-queue', message: 'Queue processing slower than expected' },
    { id: 4, timestamp: '2024-01-15 14:29:18', level: 'ERROR', source: 'database-backup', message: 'Connection timeout during backup operation' },
    { id: 5, timestamp: '2024-01-15 14:28:55', level: 'INFO', source: 'smart-inference', message: 'Model prediction accuracy: 97.8%' }
  ],
  
  improvements: [
    { id: 1, title: 'Database Query Optimization', status: 'pending', impact: '+65% execution time', confidence: 92, type: 'performance' },
    { id: 2, title: 'API Batching Implementation', status: 'approved', impact: '+40% throughput', confidence: 88, type: 'efficiency' },
    { id: 3, title: 'Cache Layer Addition', status: 'deployed', impact: '+25% response time', confidence: 95, type: 'performance' },
    { id: 4, title: 'Error Handling Enhancement', status: 'testing', impact: '-80% error rate', confidence: 90, type: 'reliability' }
  ],
  
  infrastructure: {
    vultr: {
      instances: [
        { id: 'vultr-1', name: 'workflow-worker-1', status: 'running', cpu: 45, memory: 62, region: 'New York' },
        { id: 'vultr-2', name: 'workflow-worker-2', status: 'running', cpu: 38, memory: 55, region: 'London' },
        { id: 'vultr-3', name: 'api-gateway', status: 'running', cpu: 23, memory: 41, region: 'Singapore' }
      ],
      totalCost: 89.50,
      monthlyUsage: 2847
    },
    raindrop: {
      smartSQL: { status: 'healthy', queries: 1247, avgResponseTime: 45, uptime: 99.9 },
      smartBuckets: { status: 'healthy', storage: '2.3TB', requests: 8920, bandwidth: '1.2GB' },
      smartMemory: { status: 'healthy', hitRate: 94.2, size: '512MB', operations: 15420 },
      smartInference: { status: 'healthy', predictions: 3420, accuracy: 97.8, models: 4 }
    }
  },
  
  agent: {
    conversations: [
      { id: 1, title: 'Optimize workflow performance', messages: 3, lastActivity: '5 minutes ago' },
      { id: 2, title: 'Debug API integration', messages: 7, lastActivity: '2 hours ago' },
      { id: 3, title: 'Setup new deployment', messages: 12, lastActivity: '1 day ago' }
    ],
    suggestions: [
      'Consider implementing caching for frequently accessed data',
      'Your API response times could be improved with request batching',
      'Database queries show potential for optimization'
    ]
  },
  
  settings: {
    notifications: {
      email: true,
      slack: false,
      webhook: true
    },
    preferences: {
      theme: 'light',
      timezone: 'UTC',
      language: 'en'
    },
    integrations: {
      vultr: { connected: true, lastSync: '2 minutes ago' },
      raindrop: { connected: true, lastSync: '1 minute ago' },
      workos: { connected: false, lastSync: 'Never' }
    }
  }
}