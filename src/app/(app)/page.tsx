import CommunityDiscord from '@/components/CommunityDiscord'
import { ArrowRight, Building2, Check, ChevronRight, CreditCard, Package, Shield, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'JUNO - Premium E-Commerce Boilerplate',
  description: 'Complete Next.js 15 + Payload CMS e-commerce solution. Ship your online store in days, not months.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen antialiased">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-violet-500/[0.08] rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-amber-500/[0.08] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/[0.05] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.15] hover:bg-white/[0.08] transition-all backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-sm font-medium text-muted-foreground">Introducing the next generation</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>

          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[1.1] [text-wrap:balance] max-w-5xl mx-auto">
              Build{' '}
              <span className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                e-commerce & SaaS
              </span>
              {' '}in days, not months
          </h1>

            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed [text-wrap:balance] font-light">
              Complete Next.js 15 + Payload CMS boilerplate with e-commerce, multi-tenant SaaS, and production-ready code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 left-1/4 transform rotate-12">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-6 h-6 text-violet-400" />
                </div>
              </div>
              
              <div className="absolute -bottom-8 right-1/4 transform -rotate-12">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-5 h-5 text-amber-400" />
                </div>
              </div>

              <Link
                href="/shop"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black text-base font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)]"
              >
                <span className="relative z-10">View Demo</span>
                <ArrowRight className="relative z-10 w-4 h-4" />
              </Link>
              <CommunityDiscord className="px-8 py-4 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* SAAS FEATURES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.15] text-sm font-medium text-muted-foreground mb-6">
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise SaaS Features</span>
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-[1.1] [text-wrap:balance] max-w-3xl mx-auto mb-6">
              Everything you need for{' '}
              <span className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                modern SaaS
              </span>
            </h2>
            <p className="text-[clamp(0.9rem,1.5vw,1.1rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
              Multi-tenant architecture and subscription billing built-in.
            </p>
          </div>

          {/* Creative Floating Layout */}
          <div className="relative">
            {/* Main cards with creative positioning */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {/* Multi-tenant - Left side, slightly rotated */}
              <div className="lg:col-span-2 relative">
                <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-8 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                          <Building2 className="w-8 h-8 text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Multi-tenant Architecture</h3>
                          <p className="text-sm text-muted-foreground">Enterprise-grade isolation</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Isolated workspaces with custom domains and subdomains for each organization. Perfect for SaaS platforms serving multiple clients.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                          <span>Custom domains</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          <span>Data isolation</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                          <span>Scalable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription Billing - Right side, offset and rotated */}
              <div className="lg:col-span-1 relative">
                <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500 mt-8">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-emerald-500/5 to-blue-500/5 p-6 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <CreditCard className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold">Subscription Billing</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Stripe-powered recurring billing with multiple pricing tiers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute -top-4 -right-4 transform rotate-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-8 h-8 text-amber-400" />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 transform -rotate-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID - Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="relative max-w-7xl mx-auto">
          {/* Organic, asymmetrical layout */}
          <div className="relative">
            {/* Main performance card - large and prominent */}
            <div className="relative mb-8">
              <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/8 to-purple-500/8 p-10 md:p-16 relative overflow-hidden hover:border-white/[0.25] transition-all shadow-xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating performance badges */}
                  <div className="absolute top-6 right-6 transform rotate-12">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center backdrop-blur-sm">
                      <Zap className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="relative space-y-8">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm font-medium text-violet-300">
                        <Zap className="w-4 h-4" />
                        <span>Lightning Performance</span>
                      </div>
                      <h3 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
                        Built for{' '}
                        <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                          speed
                        </span>
                      </h3>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                        Built on Next.js 15 with automatic code splitting, image optimization, and edge caching for blazing fast performance.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-white/[0.15] backdrop-blur-sm">
                          <div className="text-3xl font-bold mb-2 text-violet-400">0.8s</div>
                          <div className="text-sm text-muted-foreground">Load time</div>
                        </div>
                      </div>
                      <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/[0.15] backdrop-blur-sm">
                          <div className="text-3xl font-bold mb-2 text-purple-400">98</div>
                          <div className="text-sm text-muted-foreground">Lighthouse</div>
                        </div>
                      </div>
                      <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-amber-500/10 border border-white/[0.15] backdrop-blur-sm">
                          <div className="text-3xl font-bold mb-2 text-pink-400">99%</div>
                          <div className="text-sm text-muted-foreground">Uptime</div>
                        </div>
                      </div>
                      <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/[0.15] backdrop-blur-sm">
                          <div className="text-3xl font-bold mb-2 text-amber-400">A+</div>
                          <div className="text-sm text-muted-foreground">Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats cards in creative positions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* 10K+ Stores - Left side, rotated */}
              <div className="relative">
                <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/5 to-blue-500/5 p-8 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                        <Users className="w-8 h-8 text-violet-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-violet-400">10K+</div>
                        <p className="text-muted-foreground text-sm font-light">Stores launched</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.9★ Rating - Center, slightly offset */}
              <div className="relative mt-4">
                <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-8 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                        <Star className="w-8 h-8 text-amber-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-amber-400">4.9★</div>
                        <p className="text-muted-foreground text-sm font-light">Customer rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 transform rotate-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 transform -rotate-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-pink-400" />
                </div>
              </div>
            </div>

            {/* Creative Feature Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative">
              {/* Premium Products - Rotated card */}
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-8 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm h-full">
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                      <Package className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold">Premium Products</h4>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
                        Curated collection of high-quality items that your customers will love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Payment - Negative rotation */}
              <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-8 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm h-full">
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20">
                      <Shield className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold">Secure Payment</h4>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
                        Enterprise-grade security for all transactions with PCI compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Analytics - Wide card with floating elements */}
              <div className="lg:col-span-1 md:col-span-2 relative">
                <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-8 hover:border-white/[0.25] transition-all shadow-lg backdrop-blur-sm relative overflow-hidden">
                    {/* Floating analytics icon */}
                    <div className="absolute top-4 right-4 transform rotate-12">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                        <TrendingUp className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                        <TrendingUp className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold">Real-time Analytics</h4>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed">
                          Track your sales, customers, and performance with detailed insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-8 -left-8 transform rotate-45">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-orange-400" />
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 transform -rotate-45">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 border-t border-white/[0.08] relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-12 uppercase tracking-[0.2em] font-medium">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 items-center">
            {['Vercel', 'Stripe', 'Linear', 'GitHub'].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-600 hover:text-gray-400 transition-colors cursor-default">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em]">
              Loved by thousands
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Don&apos;t take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: 'Sarah Chen',
                role: 'Founder at TechStart',
                avatar: 'SC',
                text: 'This template saved us months of development time. The code quality is exceptional and the design is absolutely beautiful.',
                rating: 5,
              },
              {
                name: 'Michael Rodriguez',
                role: 'CEO at Innovate Labs',
                avatar: 'MR',
                text: 'Best investment we made. Our conversion rate increased by 40% after switching. The performance is incredible.',
                rating: 5,
              },
              {
                name: 'Emily Thompson',
                role: 'Designer at Studio X',
                avatar: 'ET',
                text: 'Finally, a template that doesn&apos;t compromise on design. Every detail is thoughtfully crafted.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all"
              >
                <div className="space-y-6">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-amber-500 flex items-center justify-center text-sm font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400 font-light">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em]">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Start free, scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$29',
                description: 'Perfect for small projects',
                features: ['Up to 100 products', 'Basic analytics', 'Email support', '1 team member'],
              },
              {
                name: 'Pro',
                price: '$99',
                description: 'For growing businesses',
                features: ['Unlimited products', 'Advanced analytics', 'Priority support', '10 team members', 'Custom domain'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'Unlimited team members', 'SLA guarantee'],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`group rounded-3xl p-[1px] relative ${
                  plan.popular ? 'bg-gradient-to-b from-white/20 to-white/5' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-amber-500 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`h-full rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02]' 
                    : 'border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent'
                } hover:border-white/[0.25] transition-all`}>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{plan.name}</h3>
                      <p className="text-sm text-gray-400 font-light">{plan.description}</p>
                    </div>
                    <div>
                      <div className="text-5xl font-semibold tracking-tight">{plan.price}</div>
                      {plan.price !== 'Custom' && (
                        <div className="text-gray-400 font-light mt-1">per month</div>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/shop"
                      className={`block text-center rounded-full py-3.5 font-semibold transition-all ${
                        plan.popular
                          ? 'bg-white text-black hover:bg-gray-100'
                          : 'border border-white/[0.15] hover:bg-white/[0.05]'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em] [text-wrap:balance]">
            Ready to launch your store?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Join thousands of businesses already using our platform
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-black text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)]"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 font-light">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
