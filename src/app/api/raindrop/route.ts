import { NextRequest, NextResponse } from 'next/server';
import { RaindropServices } from '@/lib/integrations/raindrop-services';
import { mockIntegrationData, isTestCredentials } from '@/lib/mock-integrations';

export async function POST(request: NextRequest) {
  try {
    const { service, action, data } = await request.json();
    
    const smartSqlKey = process.env.RAINDROP_SMARTSQL_API_KEY || '';
    const smartBucketsKey = process.env.RAINDROP_SMARTBUCKETS_ACCESS_KEY || '';
    const smartMemoryEndpoint = process.env.RAINDROP_SMARTMEMORY_ENDPOINT || '';
    const smartInferenceKey = process.env.RAINDROP_SMARTINFERENCE_API_KEY || '';
    
    const useMockData = isTestCredentials(smartSqlKey) || isTestCredentials(smartBucketsKey);
    
    if (useMockData) {
      switch (service) {
        case 'smartsql':
          if (action === 'get_workflows') {
            return NextResponse.json({ success: true, data: mockIntegrationData.raindrop.smartSql });
          }
          break;
        case 'smartbuckets':
          if (action === 'get_snapshots') {
            return NextResponse.json({ success: true, data: mockIntegrationData.raindrop.smartBuckets });
          }
          break;
        case 'smartmemory':
          if (action === 'get_contexts') {
            return NextResponse.json({ success: true, data: mockIntegrationData.raindrop.smartMemory });
          }
          break;
        case 'smartinference':
          if (action === 'get_optimizations') {
            return NextResponse.json({ success: true, data: mockIntegrationData.raindrop.smartInference });
          }
          break;
      }
      return NextResponse.json({ success: true, mock: true });
    }
    
    const raindrop = new RaindropServices({
      smartSqlKey,
      smartBucketsKey,
      smartMemoryEndpoint,
      smartInferenceKey
    });

    switch (service) {
      case 'smartsql':
        if (action === 'store_workflow') {
          const result = await raindrop.storeWorkflowDefinition(data);
          return NextResponse.json({ success: true, result });
        }
        if (action === 'get_metrics') {
          const metrics = await raindrop.getWorkflowMetrics(data.workflowId);
          return NextResponse.json({ success: true, metrics });
        }
        break;
        
      case 'smartbuckets':
        if (action === 'store_snapshot') {
          const stored = await raindrop.storeWorkflowSnapshot(data.workflowId, data.version, data.snapshot);
          return NextResponse.json({ success: stored });
        }
        if (action === 'get_versions') {
          const versions = await raindrop.getWorkflowVersions(data.workflowId);
          return NextResponse.json({ success: true, versions });
        }
        break;
        
      case 'smartmemory':
        if (action === 'store_context') {
          const context = await raindrop.storeAgentContext(data);
          return NextResponse.json({ success: true, context });
        }
        if (action === 'get_memory') {
          const memory = await raindrop.getAgentMemory(data.contextId);
          return NextResponse.json({ success: true, memory });
        }
        break;
        
      case 'smartinference':
        if (action === 'generate_optimization') {
          const optimization = await raindrop.generateOptimization(data.workflow, data.metrics);
          return NextResponse.json({ success: true, optimization });
        }
        if (action === 'score_optimization') {
          const score = await raindrop.scoreOptimization(data.original, data.optimized);
          return NextResponse.json({ success: true, score });
        }
        break;
    }

    return NextResponse.json({ error: 'Invalid service or action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Raindrop service failed' }, { status: 500 });
  }
}