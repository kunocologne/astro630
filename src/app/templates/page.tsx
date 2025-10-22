import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Template Gallery - JUNO',
  description: 'Browse all available templates for your next project',
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Template Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our collection of professional templates designed for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Portfolio Template */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="w-fit">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Available
                </Badge>
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <CardTitle>Portfolio Bold</CardTitle>
              <CardDescription>
                Professional portfolio with beautiful animations and bento box layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Framer Motion</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                  <Badge variant="outline">Bento Box</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    ✨ Smooth animations
                  </div>
                  <div className="text-sm text-muted-foreground">
                    🎨 Professional design
                  </div>
                  <div className="text-sm text-muted-foreground">
                    📱 Fully responsive
                  </div>
                </div>
                <Link href="/portfolio">
                  <Button className="w-full group-hover:bg-primary/90">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Agency Template */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="w-fit">
                  <Zap className="h-3 w-3 mr-1" />
                  Coming Soon
                </Badge>
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <CardTitle>Agency Corporate</CardTitle>
              <CardDescription>
                Professional agency website with corporate branding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Framer Motion</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                  <Badge variant="outline">Corporate</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    🏢 Corporate design
                  </div>
                  <div className="text-sm text-muted-foreground">
                    📈 Business focused
                  </div>
                  <div className="text-sm text-muted-foreground">
                    🤝 Team oriented
                  </div>
                </div>
                <Link href="/agency">
                  <Button variant="outline" className="w-full">
                    Preview Agency
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* SaaS Template */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="w-fit">
                  <Zap className="h-3 w-3 mr-1" />
                  Coming Soon
                </Badge>
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <CardTitle>SaaS Futuristic</CardTitle>
              <CardDescription>
                Modern SaaS landing page with cutting-edge design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Framer Motion</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                  <Badge variant="outline">SaaS</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    🚀 Modern animations
                  </div>
                  <div className="text-sm text-muted-foreground">
                    💼 Business focused
                  </div>
                  <div className="text-sm text-muted-foreground">
                    📊 Analytics ready
                  </div>
                </div>
                <Link href="/saas">
                  <Button variant="outline" className="w-full">
                    Preview SaaS
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Use our CLI to generate a custom website with your own content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
            <Button>
              <Zap className="mr-2 h-4 w-4" />
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}