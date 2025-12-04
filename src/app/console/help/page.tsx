import { ConsoleLayout } from '@/components/console-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HelpCircle, Book, MessageCircle, Mail } from 'lucide-react'

export default function Help() {
  return (
    <ConsoleLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Learn how to use Compound Agent features</p>
              <ul className="text-sm space-y-2">
                <li>• Getting Started Guide</li>
                <li>• Workflow Creation</li>
                <li>• API Integration</li>
                <li>• Troubleshooting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Connect with other users</p>
              <ul className="text-sm space-y-2">
                <li>• Discussion Forum</li>
                <li>• Feature Requests</li>
                <li>• Best Practices</li>
                <li>• User Examples</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Get help from our team</p>
              <ul className="text-sm space-y-2">
                <li>• Email: support@compoundagent.com</li>
                <li>• Response time: 24 hours</li>
                <li>• Priority support available</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                FAQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Common questions and answers</p>
              <ul className="text-sm space-y-2">
                <li>• How do workflows improve automatically?</li>
                <li>• What is SmartInference?</li>
                <li>• Billing and pricing</li>
                <li>• Security and privacy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </ConsoleLayout>
  )
}