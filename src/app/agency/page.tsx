import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Template - JUNO',
  description: 'Professional agency template with corporate design',
  keywords: ['agency', 'template', 'corporate', 'business'],
}

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Agency Template
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Professional agency template coming soon...
        </p>
        <div className="space-y-4">
          <div className="text-muted-foreground">
            🏢 Corporate design
          </div>
          <div className="text-muted-foreground">
            📈 Business focused
          </div>
          <div className="text-muted-foreground">
            🤝 Team oriented
          </div>
        </div>
      </div>
    </div>
  )
}
