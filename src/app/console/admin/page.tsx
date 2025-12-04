import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Key, Server, Zap, Shield, Building } from 'lucide-react'

export default function Admin() {
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center mb-8">
          <div className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium">
            Admin Only
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Organization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Organization Name</label>
                <Input placeholder="Enter organization name" />
              </div>
              <div>
                <label className="text-sm font-medium">Plan</label>
                <Input placeholder="Plan type" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Billing Email</label>
                <Input placeholder="Enter billing email" />
              </div>
              <Button>Update Organization</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">WorkOS Organization ID</label>
                <Input placeholder="Enter WorkOS organization ID" />
              </div>
              <div>
                <label className="text-sm font-medium">WorkOS API Key</label>
                <Input type="password" placeholder="Enter WorkOS API key" />
              </div>
              <Button>Update Authentication</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Raindrop Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">SmartSQL API Key</label>
                <Input type="password" placeholder="Enter SmartSQL API key" />
              </div>
              <div>
                <label className="text-sm font-medium">SmartBuckets Access Key</label>
                <Input type="password" placeholder="Enter SmartBuckets access key" />
              </div>
              <div>
                <label className="text-sm font-medium">SmartMemory Endpoint</label>
                <Input placeholder="SmartMemory endpoint URL" />
              </div>
              <div>
                <label className="text-sm font-medium">SmartInference API Key</label>
                <Input type="password" placeholder="Enter SmartInference API key" />
              </div>
              <Button>Update Raindrop Keys</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Vultr API Key</label>
                <Input type="password" placeholder="Enter Vultr API key" />
              </div>
              <div>
                <label className="text-sm font-medium">Worker Instance ID</label>
                <Input placeholder="Vultr worker instance ID" />
              </div>
              <Button>Update Infrastructure</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                AI Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Antigravity Model Key</label>
                <Input type="password" placeholder="Enter Antigravity API key" />
              </div>
              <div>
                <label className="text-sm font-medium">Analysis Frequency</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Every 6 hours</option>
                  <option>Every 12 hours</option>
                  <option>Daily</option>
                </select>
              </div>
              <Button>Update AI Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ConsoleLayout>
  )
}