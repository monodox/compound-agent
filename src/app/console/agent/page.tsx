import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send, Bot } from 'lucide-react'

const chatHistory: any[] = []

export default function AgentPlayground() {
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-600" />
              Compound Agent Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
              {chatHistory.length === 0 ? (
                <div className="text-center text-slate-600 py-8">
                  <p>Start a conversation with the Compound Agent</p>
                </div>
              ) : (
                chatHistory.map((chat, i) => (
                  <div key={i} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      chat.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 text-slate-900'
                    }`}>
                      <div className="text-sm">{chat.message}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="flex gap-2">
              <Input 
                placeholder="Ask the Compound Agent anything..."
                className="flex-1"
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card className="cursor-pointer hover:shadow-md">
            <CardContent className="p-4">
              <div className="text-sm font-medium">Workflow Analysis</div>
              <div className="text-xs text-slate-500">Ask about workflow performance and issues</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md">
            <CardContent className="p-4">
              <div className="text-sm font-medium">Optimization Requests</div>
              <div className="text-xs text-slate-500">Request specific workflow improvements</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md">
            <CardContent className="p-4">
              <div className="text-sm font-medium">System Status</div>
              <div className="text-xs text-slate-500">Check infrastructure and service health</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ConsoleLayout>
  )
}