import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Template - JUNO',
  description: 'Modern SaaS landing page with cutting-edge design',
  keywords: ['saas', 'template', 'modern', 'landing'],
}

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          SaaS Template
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Modern SaaS landing page coming soon...
        </p>
        <div className="space-y-4">
          <div className="text-muted-foreground">
            🚀 Modern animations
          </div>
          <div className="text-muted-foreground">
            💼 Business focused
          </div>
          <div className="text-muted-foreground">
            📊 Analytics ready
          </div>
        </div>
      </div>
    </div>
  )
}
