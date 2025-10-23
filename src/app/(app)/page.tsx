import CommunityDiscord from '@/components/CommunityDiscord'
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CreditCard,
  Package,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'JUNO - Premium E-Commerce Boilerplate',
  description:
    'Complete Next.js 15 + Payload CMS e-commerce solution. Ship your online store in days, not months.',
}

export default function HomePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col antialiased">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="from-foreground/5 to-foreground/5 absolute inset-0 bg-gradient-to-br via-transparent" />
          <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-violet-500/[0.08] blur-[100px]" />
          <div
            className="absolute right-1/3 bottom-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-amber-500/[0.08] blur-[100px]"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-purple-500/[0.05] blur-[150px]"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="animate-fade-in mb-8 flex justify-center">
            <div className="group inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-3 py-1.5 backdrop-blur-xl transition-all hover:bg-white/[0.08]">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-muted-foreground text-sm font-medium">
                Introducing the next generation
              </span>
              <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
            </div>
          </div>

          <div className="animate-fade-in-up mb-16 space-y-8 text-center">
            <h1 className="mx-auto max-w-5xl text-[clamp(2rem,6vw,4.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] [text-wrap:balance]">
              Build{' '}
              <span className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                e-commerce & SaaS
              </span>{' '}
              in days, not months
            </h1>

            <p className="text-muted-foreground mx-auto max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed font-light [text-wrap:balance]">
              Complete Next.js 15 + Payload CMS boilerplate with e-commerce, multi-tenant SaaS, and
              production-ready code.
            </p>

            <div className="relative flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 left-1/4 rotate-12 transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm">
                  <Sparkles className="h-6 w-6 text-violet-400" />
                </div>
              </div>

              <div className="absolute right-1/4 -bottom-8 -rotate-12 transform">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm">
                  <Star className="h-5 w-5 text-amber-400" />
                </div>
              </div>

              <Link
                href="/shop"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">View Demo</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </Link>
              <CommunityDiscord className="px-8 py-4 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* SAAS FEATURES */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-3 py-1.5 text-sm font-medium">
              <Building2 className="h-3.5 w-3.5" />
              <span>Enterprise SaaS Features</span>
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] font-semibold tracking-[-0.02em] [text-wrap:balance]">
              Everything you need for{' '}
              <span className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                modern SaaS
              </span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-[clamp(0.9rem,1.5vw,1.1rem)] leading-relaxed [text-wrap:balance]">
              Multi-tenant architecture and subscription billing built-in.
            </p>
          </div>

          {/* Creative Floating Layout */}
          <div className="relative">
            {/* Main cards with creative positioning */}
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Multi-tenant - Left side, slightly rotated */}
              <div className="relative lg:col-span-2">
                <div className="-rotate-1 transform transition-transform duration-500 hover:rotate-0">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                          <Building2 className="h-8 w-8 text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Multi-tenant Architecture</h3>
                          <p className="text-muted-foreground text-sm">
                            Enterprise-grade isolation
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Isolated workspaces with custom domains and subdomains for each
                        organization. Perfect for SaaS platforms serving multiple clients.
                      </p>
                      <div className="text-muted-foreground flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-violet-400"></div>
                          <span>Custom domains</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                          <span>Data isolation</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                          <span>Scalable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription Billing - Right side, offset and rotated */}
              <div className="relative lg:col-span-1">
                <div className="mt-8 rotate-2 transform transition-transform duration-500 hover:rotate-0">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-emerald-500/5 to-blue-500/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                    <div className="space-y-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                        <CreditCard className="h-7 w-7 text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold">Subscription Billing</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Stripe-powered recurring billing with multiple pricing tiers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute -top-4 -right-4 rotate-6 transform">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 text-amber-400" />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 -rotate-6 transform">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID - Features */}
      <section className="relative px-4 py-32 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          {/* Organic, asymmetrical layout */}
          <div className="relative">
            {/* Main performance card - large and prominent */}
            <div className="relative mb-8">
              <div className="-rotate-1 transform transition-transform duration-700 hover:rotate-0">
                <div className="group relative overflow-hidden rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/8 to-purple-500/8 p-10 shadow-xl backdrop-blur-sm transition-all hover:border-white/[0.25] md:p-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.1] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Floating performance badges */}
                  <div className="absolute top-6 right-6 rotate-12 transform">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm">
                      <Zap className="h-8 w-8 text-green-400" />
                    </div>
                  </div>

                  <div className="relative space-y-8">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        <Zap className="h-4 w-4" />
                        <span>Lightning Performance</span>
                      </div>
                      <h3 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
                        Built for{' '}
                        <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                          speed
                        </span>
                      </h3>
                      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-light">
                        Built on Next.js 15 with automatic code splitting, image optimization, and
                        edge caching for blazing fast performance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="rotate-1 transform transition-transform duration-300 hover:rotate-0">
                        <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-6 backdrop-blur-sm">
                          <div className="mb-2 text-3xl font-bold text-violet-400">0.8s</div>
                          <div className="text-muted-foreground text-sm">Load time</div>
                        </div>
                      </div>
                      <div className="-rotate-1 transform transition-transform duration-300 hover:rotate-0">
                        <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 backdrop-blur-sm">
                          <div className="mb-2 text-3xl font-bold text-purple-400">98</div>
                          <div className="text-muted-foreground text-sm">Lighthouse</div>
                        </div>
                      </div>
                      <div className="rotate-1 transform transition-transform duration-300 hover:rotate-0">
                        <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-pink-500/10 to-amber-500/10 p-6 backdrop-blur-sm">
                          <div className="mb-2 text-3xl font-bold text-pink-400">99%</div>
                          <div className="text-muted-foreground text-sm">Uptime</div>
                        </div>
                      </div>
                      <div className="-rotate-1 transform transition-transform duration-300 hover:rotate-0">
                        <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 backdrop-blur-sm">
                          <div className="mb-2 text-3xl font-bold text-amber-400">A+</div>
                          <div className="text-muted-foreground text-sm">Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats cards in creative positions */}
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* 10K+ Stores - Left side, rotated */}
              <div className="relative">
                <div className="rotate-2 transform transition-transform duration-500 hover:rotate-0">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/5 to-blue-500/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                    <div className="space-y-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                        <Users className="h-8 w-8 text-violet-400" />
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
                <div className="-rotate-1 transform transition-transform duration-500 hover:rotate-0">
                  <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                    <div className="space-y-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                        <Star className="h-8 w-8 text-amber-400" />
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
              <div className="absolute -top-6 -right-6 rotate-12 transform">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 -rotate-12 transform">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-pink-400" />
                </div>
              </div>
            </div>

            {/* Creative Feature Cards Layout */}
            <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Premium Products - Rotated card */}
              <div className="rotate-1 transform transition-transform duration-500 hover:rotate-0">
                <div className="group h-full rounded-3xl border border-white/[0.15] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                  <div className="space-y-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                      <Package className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold">Premium Products</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        Curated collection of high-quality items that your customers will love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Payment - Negative rotation */}
              <div className="-rotate-1 transform transition-transform duration-500 hover:rotate-0">
                <div className="group h-full rounded-3xl border border-white/[0.15] bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                  <div className="space-y-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                      <Shield className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold">Secure Payment</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        Enterprise-grade security for all transactions with PCI compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Analytics - Wide card with floating elements */}
              <div className="relative md:col-span-2 lg:col-span-1">
                <div className="rotate-2 transform transition-transform duration-500 hover:rotate-0">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/[0.15] bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/[0.25]">
                    {/* Floating analytics icon */}
                    <div className="absolute top-4 right-4 rotate-12 transform">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/20 backdrop-blur-sm">
                        <TrendingUp className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                        <TrendingUp className="h-8 w-8 text-purple-400" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold">Real-time Analytics</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          Track your sales, customers, and performance with detailed insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-8 -left-8 rotate-45 transform">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm">
                <Sparkles className="h-6 w-6 text-orange-400" />
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 -rotate-45 transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
                <Star className="h-4 w-4 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative border-t border-white/[0.08] py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-12 text-center text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 items-center gap-x-12 gap-y-8 md:grid-cols-4">
            {['Vercel', 'Stripe', 'Linear', 'GitHub'].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <span className="cursor-default text-xl font-semibold text-gray-600 transition-colors hover:text-gray-400">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Bento Grid */}
      <section className="relative border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em]">
              Loved by thousands
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-light text-gray-400">
              Don&apos;t take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 transition-all hover:border-white/[0.25]"
              >
                <div className="space-y-6">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="leading-relaxed font-light text-gray-300">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/[0.08] pt-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-amber-500 text-sm font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm font-light text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - Bento Grid */}
      <section className="relative px-4 py-32 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em]">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-light text-gray-400">
              Start free, scale as you grow
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$29',
                description: 'Perfect for small projects',
                features: [
                  'Up to 100 products',
                  'Basic analytics',
                  'Email support',
                  '1 team member',
                ],
              },
              {
                name: 'Pro',
                price: '$99',
                description: 'For growing businesses',
                features: [
                  'Unlimited products',
                  'Advanced analytics',
                  'Priority support',
                  '10 team members',
                  'Custom domain',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: [
                  'Everything in Pro',
                  'Dedicated support',
                  'Custom integrations',
                  'Unlimited team members',
                  'SLA guarantee',
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl p-[1px] ${
                  plan.popular ? 'bg-gradient-to-b from-white/20 to-white/5' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 right-0 left-0 flex justify-center">
                    <div className="rounded-full bg-gradient-to-r from-violet-500 to-amber-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div
                  className={`h-full rounded-3xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02]'
                      : 'border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent'
                  } transition-all hover:border-white/[0.25]`}
                >
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{plan.name}</h3>
                      <p className="text-sm font-light text-gray-400">{plan.description}</p>
                    </div>
                    <div>
                      <div className="text-5xl font-semibold tracking-tight">{plan.price}</div>
                      {plan.price !== 'Custom' && (
                        <div className="mt-1 font-light text-gray-400">per month</div>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                          <span className="font-light text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/shop"
                      className={`block rounded-full py-3.5 text-center font-semibold transition-all ${
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
      <section className="relative border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em] [text-wrap:balance]">
            Ready to launch your store?
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-400">
            Join thousands of businesses already using our platform
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-base font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm font-light text-gray-500">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
