'use client';

import { useState } from 'react'
import { ConsoleLayout } from '@/components/console-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send, Bot, User } from 'lucide-react'
import { isTestCredentials } from '@/lib/mock-integrations'
import { isTestUser } from '@/lib/auth'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export default function AgentPlayground() {
  const useTestData = isTestUser() || isTestCredentials(process.env.CEREBRAS_API_KEY || '')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const mockResponses = [
    "I've analyzed your workflow performance and found 3 optimization opportunities. Would you like me to implement them?",
    "Your Vultr instances are running optimally. CPU usage is at 68% and memory at 45%. All systems healthy.",
    "I've detected an anomaly in your data processing pipeline. The latency increased by 15% in the last hour. Investigating...",
    "Voice alerts are configured and active. ElevenLabs integration is working perfectly. Last alert sent 2 hours ago.",
    "SmartSQL has 24 workflows stored, SmartBuckets contains 89 snapshots, and SmartInference has processed 67 optimizations today.",
    "I recommend scaling your Vultr compute instances during peak hours (2-4 PM). This could improve performance by 23%.",
    "Your workflow success rate is 96.5%. The 2 failures were due to timeout issues, which I've now optimized."
  ]

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const response = useTestData 
        ? mockResponses[Math.floor(Math.random() * mockResponses.length)]
        : "I'm currently in demo mode. Please configure your AI services to enable full functionality."
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response,
        timestamp: new Date().toLocaleTimeString()
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000 + Math.random() * 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }
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
            <div className="flex-1 space-y-4 overflow-y-auto mb-4 p-4 bg-slate-50 rounded-lg">
              {messages.length === 0 ? (
                <div className="text-center text-slate-600 py-8">
                  <p>Start a conversation with the Compound Agent</p>
                  {useTestData && (
                    <p className="text-sm mt-2">Try asking: &ldquo;How are my workflows performing?&rdquo; or &ldquo;Check system health&rdquo;</p>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.role === 'user' ? 'bg-indigo-100' : 'bg-blue-100'
                        }`}>
                          {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`p-3 rounded-lg ${
                          message.role === 'user' 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-white border'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 opacity-70`}>{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="p-3 rounded-lg bg-white border">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask the Compound Agent anything..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={isLoading || !input.trim()}>
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