import {
  ArrowRight,
  BarChart,
  Code,
  Layout,
  MessageSquare,
  Palette,
  Rocket,
  Search,
  Target,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional services for your business needs.',
}

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col antialiased">
      {/* HERO - Diagonal Layout */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="from-foreground/4 to-foreground/4 absolute inset-0 bg-gradient-to-br via-transparent" />
          <div className="absolute top-0 right-0 h-full w-2/3 bg-[linear-gradient(135deg,_var(--tw-gradient-stops))] from-blue-500/[0.08] via-transparent to-purple-500/[0.08]" />
          <div className="absolute bottom-0 left-0 h-2/3 w-1/3 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-500/[0.06] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left side - Content (8 columns) */}
            <div className="space-y-8 lg:col-span-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  <Target className="h-4 w-4" />
                  <span>Our Services</span>
                </div>
                <h1 className="text-[clamp(2rem,6vw,4.5rem)] leading-[1.1] font-bold tracking-[-0.02em]">
                  Services we{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                    offer
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed font-light">
                  From coaching to complete product development. Everything you need to succeed in
                  today&apos;s digital landscape.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-base font-semibold">Coaching</div>
                  <div className="text-muted-foreground text-xs">1-on-1 sessions</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-base font-semibold">Development</div>
                  <div className="text-muted-foreground text-xs">Full-stack solutions</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                    <Rocket className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="text-base font-semibold">Launch</div>
                  <div className="text-muted-foreground text-xs">Go-to-market</div>
                </div>
              </div>
            </div>

            {/* Right side - Floating Cards (4 columns) */}
            <div className="relative lg:col-span-4">
              <div className="space-y-6">
                {/* Floating card 1 */}
                <div className="relative rotate-2 transform">
                  <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 shadow-sm backdrop-blur-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                        <BarChart className="h-4 w-4 text-blue-400" />
                      </div>
                      <div className="text-sm font-semibold">Analytics</div>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Track performance with detailed insights
                    </p>
                  </div>
                </div>

                {/* Floating card 2 */}
                <div className="relative ml-8 -rotate-1 transform">
                  <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-purple-500/10 to-amber-500/10 p-6 shadow-sm backdrop-blur-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20">
                        <Search className="h-4 w-4 text-purple-400" />
                      </div>
                      <div className="text-sm font-semibold">SEO</div>
                    </div>
                    <p className="text-muted-foreground text-xs">Optimize for search engines</p>
                  </div>
                </div>

                {/* Floating card 3 */}
                <div className="relative ml-4 rotate-1 transform">
                  <div className="rounded-2xl border border-white/[0.15] bg-gradient-to-br from-amber-500/10 to-blue-500/10 p-6 shadow-sm backdrop-blur-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20">
                        <MessageSquare className="h-4 w-4 text-amber-400" />
                      </div>
                      <div className="text-sm font-semibold">Support</div>
                    </div>
                    <p className="text-muted-foreground text-xs">24/7 customer assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES - Bento Grid */}
      <section className="px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Large service card */}
            <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-blue-500/[0.08] to-transparent p-12 shadow-sm transition-all hover:border-white/[0.25] md:row-span-2">
              <div className="flex h-full flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <Users className="h-16 w-16 text-blue-400" />
                  <h3 className="text-xl font-semibold">Business Coaching</h3>
                  <p className="text-sm leading-relaxed font-light text-gray-400">
                    One-on-one coaching to help you reach your business goals with personalized
                    strategies and actionable insights.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>1-on-1 Sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>Custom Strategy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>Ongoing Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular service cards */}
            <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.25]">
              <div className="space-y-4">
                <Layout className="h-12 w-12 text-purple-400" />
                <h4 className="text-xl font-semibold">UI Design</h4>
                <p className="leading-relaxed font-light text-gray-400">
                  Beautiful, intuitive interfaces that users love. From wireframes to high-fidelity
                  mockups.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.25]">
              <div className="space-y-4">
                <Palette className="h-12 w-12 text-pink-400" />
                <h4 className="text-xl font-semibold">UX Design</h4>
                <p className="leading-relaxed font-light text-gray-400">
                  Research-backed user experiences that drive engagement and conversions.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.25] md:col-span-2">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <Target className="h-12 w-12 text-green-400" />
                  <h4 className="text-xl font-semibold">Marketing</h4>
                  <p className="max-w-2xl leading-relaxed font-light text-gray-400">
                    Data-driven marketing strategies that grow your business and reach the right
                    audience.
                  </p>
                </div>
                <div className="hidden flex-shrink-0 lg:block">
                  <Target className="h-32 w-32 text-green-400/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES - Bento Grid */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
              Additional services
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light text-gray-400">
              Complete solutions for your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code,
                title: 'Development',
                desc: 'Custom web and mobile applications',
                color: 'text-blue-400',
              },
              {
                icon: Search,
                title: 'SEO',
                desc: 'Improve your search rankings',
                color: 'text-green-400',
              },
              {
                icon: MessageSquare,
                title: 'Content Strategy',
                desc: 'Compelling content creation',
                color: 'text-purple-400',
              },
              {
                icon: BarChart,
                title: 'Analytics',
                desc: 'Data insights and reporting',
                color: 'text-cyan-400',
              },
              {
                icon: Target,
                title: 'Brand Strategy',
                desc: 'Build a memorable brand',
                color: 'text-pink-400',
              },
              {
                icon: Users,
                title: 'Consulting',
                desc: 'Expert digital advice',
                color: 'text-amber-400',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.25]"
              >
                <div className="space-y-4">
                  <service.icon className={`h-10 w-10 ${service.color}`} />
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-sm leading-relaxed font-light text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Bento Grid */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
              How we work
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light text-gray-400">
              A proven process that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              { num: '01', title: 'Discovery', desc: 'Understand your goals', emoji: '🔍' },
              { num: '02', title: 'Strategy', desc: 'Create the plan', emoji: '📋' },
              { num: '03', title: 'Execution', desc: 'Bring it to life', emoji: '⚙️' },
              { num: '04', title: 'Optimize', desc: 'Continuous improvement', emoji: '📈' },
            ].map((phase, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 text-center shadow-sm transition-all hover:border-white/[0.25]"
              >
                <div className="space-y-4">
                  <div className="text-5xl">{phase.emoji}</div>
                  <div className="text-sm font-medium text-gray-500">{phase.num}</div>
                  <h4 className="text-xl font-semibold">{phase.title}</h4>
                  <p className="text-sm font-light text-gray-400">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.02em] [text-wrap:balance]">
            Let&apos;s work together
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-400">
            Ready to start your next project?
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.02] px-10 py-5 text-lg font-semibold shadow-sm transition-all hover:bg-white/[0.05]"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
