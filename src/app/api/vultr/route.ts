import { NextRequest, NextResponse } from 'next/server';
import { VultrClient } from '@/lib/integrations/vultr';
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations';

export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();
    
    const vultrApiKey = process.env.VULTR_API_KEY || '';
    const useMockData = isTestCredentials(vultrApiKey);
    
    if (useMockData) {
      switch (action) {
        case 'get_instances':
          return NextResponse.json({ success: true, instances: mockIntegrationData.vultr.instances });
        case 'get_executions':
          return NextResponse.json({ success: true, executions: mockIntegrationData.vultr.executions });
        case 'get_metrics':
          return NextResponse.json({ success: true, metrics: mockIntegrationData.vultr.metrics });
        case 'execute_workflow':
          const mockExecution = {
            id: `exec-${Date.now()}`,
            workflowId: data.workflowId,
            status: 'running',
            startTime: new Date().toISOString()
          };
          return NextResponse.json({ success: true, execution: mockExecution });
        case 'create_instance':
          const mockInstance = {
            id: `vultr-${Date.now()}`,
            label: data.label,
            status: 'pending',
            region: data.region || 'ewr',
            plan: data.plan || 'vc2-1c-1gb'
          };
          return NextResponse.json({ success: true, instance: mockInstance });
        default:
          return NextResponse.json({ success: true, mock: true });
      }
    }
    
    const vultr = new VultrClient({ apiKey: vultrApiKey });

    switch (action) {
      case 'get_instances':
        const instances = await vultr.getInstances();
        return NextResponse.json({ success: true, instances });

      case 'create_instance':
        const instance = await vultr.createWorkerInstance(data.label, data.region, data.plan);
        return NextResponse.json({ success: true, instance });

      case 'execute_workflow':
        const execution = await vultr.executeWorkflow(data.instanceId, data.workflow);
        return NextResponse.json({ success: true, execution });

      case 'get_metrics':
        const metrics = await vultr.getInstanceMetrics(data.instanceId);
        return NextResponse.json({ success: true, metrics });

      case 'delete_instance':
        const deleted = await vultr.deleteInstance(data.instanceId);
        return NextResponse.json({ success: deleted });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Vultr service failed' }, { status: 500 });
  }
}