import { CMSToggle } from '@/components/CMSToggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, Database, Globe, Users } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Site Administration</h1>
          <p className="text-gray-600 mt-2">Manage your website settings and content</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CMS Toggle */}
          <CMSToggle />
          
          {/* Site Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Site Status
              </CardTitle>
              <CardDescription>
                Current website configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Site Mode</span>
                <Badge variant="default">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Template</span>
                <span className="text-sm text-gray-600">Portfolio Bold</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Updated</span>
                <span className="text-sm text-gray-600">Just now</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common administrative tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium">Clear Cache</div>
                <div className="text-sm text-gray-600">Refresh site content</div>
              </button>
              
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium">Export Content</div>
                <div className="text-sm text-gray-600">Download site data</div>
              </button>
              
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium">View Analytics</div>
                <div className="text-sm text-gray-600">Site performance metrics</div>
              </button>
            </CardContent>
          </Card>
          
          {/* System Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                System Information
              </CardTitle>
              <CardDescription>
                Technical details about your site
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Framework:</span>
                <span>Next.js 15</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Styling:</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Database:</span>
                <span>SQLite</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Deployment:</span>
                <span>Vercel</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
