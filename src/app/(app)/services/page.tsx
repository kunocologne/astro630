import { ArrowRight, BarChart, Code, Layout, MessageSquare, Palette, Rocket, Search, Target, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional services for your business needs.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen antialiased">
      {/* HERO - Diagonal Layout */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/4 via-transparent to-foreground/4" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[linear-gradient(135deg,_var(--tw-gradient-stops))] from-blue-500/[0.08] via-transparent to-purple-500/[0.08]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-500/[0.06] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side - Content (8 columns) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium text-blue-300">
                  <Target className="w-4 h-4" />
                  <span>Our Services</span>
                </div>
                <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.1]">
                  Services we{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                    offer
                  </span>
                </h1>
                <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-muted-foreground leading-relaxed font-light max-w-2xl">
                  From coaching to complete product development. Everything you need to succeed in today&apos;s digital landscape.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-base font-semibold">Coaching</div>
                  <div className="text-xs text-muted-foreground">1-on-1 sessions</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-base font-semibold">Development</div>
                  <div className="text-xs text-muted-foreground">Full-stack solutions</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto">
                    <Rocket className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="text-base font-semibold">Launch</div>
                  <div className="text-xs text-muted-foreground">Go-to-market</div>
                </div>
              </div>
            </div>

            {/* Right side - Floating Cards (4 columns) */}
            <div className="lg:col-span-4 relative">
              <div className="space-y-6">
                {/* Floating card 1 */}
                <div className="relative transform rotate-2">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/[0.15] shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <BarChart className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-sm font-semibold">Analytics</div>
                    </div>
                    <p className="text-xs text-muted-foreground">Track performance with detailed insights</p>
                  </div>
                </div>

                {/* Floating card 2 */}
                <div className="relative transform -rotate-1 ml-8">
                  <div className="bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl p-6 border border-white/[0.15] shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Search className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-sm font-semibold">SEO</div>
                    </div>
                    <p className="text-xs text-muted-foreground">Optimize for search engines</p>
                  </div>
                </div>

                {/* Floating card 3 */}
                <div className="relative transform rotate-1 ml-4">
                  <div className="bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-2xl p-6 border border-white/[0.15] shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-sm font-semibold">Support</div>
                    </div>
                    <p className="text-xs text-muted-foreground">24/7 customer assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Large service card */}
            <div className="md:row-span-2 group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-blue-500/[0.08] to-transparent p-12 hover:border-white/[0.25] transition-all">
              <div className="h-full flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <Users className="w-16 h-16 text-blue-400" />
                  <h3 className="text-xl font-semibold">Business Coaching</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    One-on-one coaching to help you reach your business goals with personalized strategies and actionable insights.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>1-on-1 Sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Custom Strategy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Ongoing Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular service cards */}
            <div className="group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all">
              <div className="space-y-4">
                <Layout className="w-12 h-12 text-purple-400" />
                <h4 className="text-xl font-semibold">UI Design</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Beautiful, intuitive interfaces that users love. From wireframes to high-fidelity mockups.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all">
              <div className="space-y-4">
                <Palette className="w-12 h-12 text-pink-400" />
                <h4 className="text-xl font-semibold">UX Design</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Research-backed user experiences that drive engagement and conversions.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <Target className="w-12 h-12 text-green-400" />
                  <h4 className="text-xl font-semibold">Marketing</h4>
                  <p className="text-gray-400 font-light leading-relaxed max-w-2xl">
                    Data-driven marketing strategies that grow your business and reach the right audience.
                  </p>
                </div>
                <div className="hidden lg:block flex-shrink-0">
                  <Target className="w-32 h-32 text-green-400/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
              Additional services
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              Complete solutions for your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Code, title: 'Development', desc: 'Custom web and mobile applications', color: 'text-blue-400' },
              { icon: Search, title: 'SEO', desc: 'Improve your search rankings', color: 'text-green-400' },
              { icon: MessageSquare, title: 'Content Strategy', desc: 'Compelling content creation', color: 'text-purple-400' },
              { icon: BarChart, title: 'Analytics', desc: 'Data insights and reporting', color: 'text-cyan-400' },
              { icon: Target, title: 'Brand Strategy', desc: 'Build a memorable brand', color: 'text-pink-400' },
              { icon: Users, title: 'Consulting', desc: 'Expert digital advice', color: 'text-amber-400' },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all"
              >
                <div className="space-y-4">
                  <service.icon className={`w-10 h-10 ${service.color}`} />
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
              How we work
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              A proven process that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Discovery', desc: 'Understand your goals', emoji: '🔍' },
              { num: '02', title: 'Strategy', desc: 'Create the plan', emoji: '📋' },
              { num: '03', title: 'Execution', desc: 'Bring it to life', emoji: '⚙️' },
              { num: '04', title: 'Optimize', desc: 'Continuous improvement', emoji: '📈' },
            ].map((phase, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all text-center"
              >
                <div className="space-y-4">
                  <div className="text-5xl">{phase.emoji}</div>
                  <div className="text-sm text-gray-500 font-medium">{phase.num}</div>
                  <h4 className="text-xl font-semibold">{phase.title}</h4>
                  <p className="text-sm text-gray-400 font-light">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.02em] [text-wrap:balance]">
            Let&apos;s work together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Ready to start your next project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-black text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)]"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/[0.15] shadow-sm bg-white/[0.02] text-lg font-semibold hover:bg-white/[0.05] transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
