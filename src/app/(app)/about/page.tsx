import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Code,
  Globe,
  Heart,
  Layers,
  Palette,
  Rocket,
  Settings,
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
  title: 'About',
  description: 'Learn about our template and what makes it special.',
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      {/* HERO - Interactive Animated Layout */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="from-foreground/3 to-foreground/3 absolute inset-0 bg-gradient-to-r via-transparent" />
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-500/[0.15] via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/[0.15] via-transparent to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform animate-pulse bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-500/[0.05] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            {/* Left side - Content with floating elements */}
            <div className="relative space-y-10">
              {/* Floating icons around content */}
              <div className="absolute -right-8 -top-8 flex h-16 w-16 animate-bounce items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/20 to-purple-500/20">
                <Star className="h-8 w-8 text-violet-400" />
              </div>
              <div className="absolute -left-12 top-1/2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                <Heart className="h-6 w-6 text-blue-400" />
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-purple-500/10 px-6 py-3 text-sm font-medium text-violet-300 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>About JUNO</span>
                </div>
                <h1 className="text-[clamp(1.5rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                  Built for{' '}
                  <span className="animate-pulse bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    everything
                  </span>
                </h1>
                <p className="text-[clamp(0.9rem,1.3vw,1.1rem)] font-light leading-relaxed text-muted-foreground">
                  A modern e-commerce template that combines premium design with powerful
                  functionality. Build anything you can imagine.
                </p>
              </div>

              {/* Animated stats grid */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '500+', label: 'Components', icon: Layers, color: 'text-violet-400' },
                  { value: '50+', label: 'Templates', icon: Code, color: 'text-blue-400' },
                  { value: '24/7', label: 'Support', icon: Users, color: 'text-purple-400' },
                  { value: '100%', label: 'Customizable', icon: Settings, color: 'text-amber-400' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.02] to-transparent p-6 transition-all hover:scale-105 hover:border-white/[0.15]"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Interactive Visual with floating elements */}
            <div className="relative">
              {/* Main visual container */}
              <div className="relative h-[600px] w-full overflow-hidden rounded-3xl border border-white/[0.15] bg-gradient-to-br from-violet-500/10 to-blue-500/10 shadow-lg backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.08] via-transparent to-transparent" />

                {/* Floating corner elements */}
                <div className="group absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/20 transition-transform hover:scale-110">
                  <Code className="h-8 w-8 text-violet-400" />
                </div>
                <div className="group absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/20 transition-transform hover:scale-110">
                  <Layers className="h-8 w-8 text-blue-400" />
                </div>
                <div className="group absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/20 transition-transform hover:scale-110">
                  <Palette className="h-8 w-8 text-purple-400" />
                </div>
                <div className="group absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/20 transition-transform hover:scale-110">
                  <Rocket className="h-8 w-8 text-amber-400" />
                </div>

                {/* Center element */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="group flex h-32 w-32 items-center justify-center rounded-3xl border border-white/[0.2] bg-gradient-to-br from-violet-500/20 to-blue-500/20 backdrop-blur-sm transition-transform hover:scale-110">
                    <Sparkles className="h-16 w-16 text-white" />
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute left-1/2 top-20 h-8 w-8 -translate-x-1/2 transform animate-bounce rounded-full bg-gradient-to-r from-pink-500/30 to-red-500/30">
                  <Heart className="mx-auto mt-2 h-4 w-4 text-pink-400" />
                </div>
                <div className="absolute bottom-20 left-1/2 h-8 w-8 -translate-x-1/2 transform animate-pulse rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30">
                  <CheckCircle className="mx-auto mt-2 h-4 w-4 text-green-400" />
                </div>
              </div>

              {/* Floating elements outside the main container */}
              <div className="absolute -right-4 -top-4 flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-green-500/20">
                <Award className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC FEATURES - Interactive Rotating Cards */}
      <section className="px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-6 py-3 text-sm font-medium text-amber-300">
              <Zap className="h-4 w-4" />
              <span>Why Choose JUNO</span>
            </div>
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              Built for{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                developers
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light text-gray-400">
              Every detail crafted for performance, scalability, and developer experience
            </p>
          </div>

          {/* Rotating Feature Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Lightning Fast',
                description:
                  'Optimized for performance with Next.js 15 and modern tooling. Every millisecond counts.',
                icon: Zap,
                color: 'from-amber-500/20 to-orange-500/20',
                borderColor: 'border-amber-500/30',
                iconColor: 'text-amber-400',
                stats: [
                  { value: '98', label: 'Lighthouse Score' },
                  { value: '<1s', label: 'Load Time' },
                ],
                rotation: 'rotate-1',
                delay: '0',
              },
              {
                title: 'Production Ready',
                description:
                  'Battle-tested code ready for real-world applications with enterprise-grade reliability.',
                icon: Shield,
                color: 'from-blue-500/20 to-cyan-500/20',
                borderColor: 'border-blue-500/30',
                iconColor: 'text-blue-400',
                rotation: '-rotate-1',
                delay: '100',
              },
              {
                title: 'Modern Design',
                description:
                  'Clean, minimal interface inspired by leading products with attention to every pixel.',
                icon: Palette,
                color: 'from-purple-500/20 to-pink-500/20',
                borderColor: 'border-purple-500/30',
                iconColor: 'text-purple-400',
                rotation: 'rotate-2',
                delay: '200',
              },
              {
                title: 'Clean Code',
                description:
                  'Well-structured, maintainable, fully TypeScript with comprehensive documentation.',
                icon: Code,
                color: 'from-green-500/20 to-emerald-500/20',
                borderColor: 'border-green-500/30',
                iconColor: 'text-green-400',
                rotation: '-rotate-2',
                delay: '300',
              },
              {
                title: 'Customizable',
                description: 'Easy to modify and extend for your needs with modular architecture.',
                icon: Settings,
                color: 'from-cyan-500/20 to-blue-500/20',
                borderColor: 'border-cyan-500/30',
                iconColor: 'text-cyan-400',
                rotation: 'rotate-1',
                delay: '400',
              },
              {
                title: 'Deploy Anywhere',
                description:
                  'Works on Vercel, Netlify, any Node.js environment with zero configuration.',
                icon: Rocket,
                color: 'from-pink-500/20 to-rose-500/20',
                borderColor: 'border-pink-500/30',
                iconColor: 'text-pink-400',
                rotation: '-rotate-1',
                delay: '500',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative ${feature.rotation} animate-fade-in-up transition-all duration-500 hover:rotate-0 hover:scale-105`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div
                  className={`rounded-3xl border ${feature.borderColor} bg-gradient-to-br shadow-lg ${feature.color} to-transparent p-8 backdrop-blur-sm transition-all hover:border-white/[0.25]`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <feature.icon className={`h-12 w-12 ${feature.iconColor}`} />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-gradient-to-r from-white/[0.1] to-transparent">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                      <p className="text-sm font-light leading-relaxed text-gray-400">
                        {feature.description}
                      </p>
                    </div>

                    {feature.stats && (
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        {feature.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                          >
                            <div className="mb-1 text-lg font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating accent element */}
                <div className="absolute -right-2 -top-2 h-6 w-6 animate-pulse rounded-full border border-white/[0.3] bg-gradient-to-r from-white/[0.2] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN BUILD - Bento Grid */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              What you can build
            </h2>
            <p className="mx-auto max-w-xl text-base font-light text-gray-400">
              Unlimited possibilities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                title: 'E-commerce Store',
                description: 'Full-featured online store with products, cart, and checkout flow',
                icon: '🛍',
                color: 'from-violet-500/10',
              },
              {
                title: 'SaaS Platform',
                description: 'Subscription-based software with user management and billing',
                icon: '💼',
                color: 'from-blue-500/10',
              },
              {
                title: 'Marketing Site',
                description: 'Beautiful landing pages with conversion optimization',
                icon: '📱',
                color: 'from-green-500/10',
              },
              {
                title: 'Portfolio',
                description: 'Showcase your work with style and professionalism',
                icon: '🎭',
                color: 'from-pink-500/10',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group rounded-3xl border border-white/[0.15] bg-gradient-to-br shadow-sm ${item.color} to-transparent p-12 transition-all hover:border-white/[0.25]`}
              >
                <div className="space-y-6">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK - Bento Grid */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              Technical excellence
            </h2>
            <p className="mx-auto max-w-xl text-base font-light text-gray-400">
              Built with industry-leading technologies
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { name: 'Next.js 15', icon: '⚛️', desc: 'React Framework' },
              { name: 'TypeScript', icon: '📘', desc: 'Type Safety' },
              { name: 'Tailwind CSS', icon: '🎨', desc: 'Styling' },
              { name: 'Payload CMS', icon: '📦', desc: 'Content' },
            ].map((tech, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 text-center shadow-sm transition-all hover:border-white/[0.25]"
              >
                <div className="space-y-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold">{tech.name}</div>
                    <div className="text-sm font-light text-gray-400">{tech.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 text-sm font-medium text-green-300">
              <Clock className="h-4 w-4" />
              <span>Development Journey</span>
            </div>
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              From idea to{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                launch
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light text-gray-400">
              See how JUNO evolved from concept to production-ready template
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full bg-gradient-to-b from-violet-500/20 via-purple-500/20 to-blue-500/20" />

            <div className="space-y-16">
              {[
                {
                  phase: 'Research',
                  title: 'Market Analysis',
                  description:
                    'Analyzed 100+ templates to identify gaps and opportunities in the market.',
                  icon: Users,
                  color: 'from-violet-500/20 to-purple-500/20',
                  borderColor: 'border-violet-500/30',
                  iconColor: 'text-violet-400',
                  side: 'left',
                },
                {
                  phase: 'Design',
                  title: 'UI/UX Creation',
                  description:
                    'Designed modern, accessible interfaces with attention to every detail.',
                  icon: Palette,
                  color: 'from-blue-500/20 to-cyan-500/20',
                  borderColor: 'border-blue-500/30',
                  iconColor: 'text-blue-400',
                  side: 'right',
                },
                {
                  phase: 'Development',
                  title: 'Code Implementation',
                  description: 'Built with Next.js 15, TypeScript, and modern best practices.',
                  icon: Code,
                  color: 'from-green-500/20 to-emerald-500/20',
                  borderColor: 'border-green-500/30',
                  iconColor: 'text-green-400',
                  side: 'left',
                },
                {
                  phase: 'Testing',
                  title: 'Quality Assurance',
                  description:
                    'Comprehensive testing across devices, browsers, and performance metrics.',
                  icon: Shield,
                  color: 'from-amber-500/20 to-orange-500/20',
                  borderColor: 'border-amber-500/30',
                  iconColor: 'text-amber-400',
                  side: 'right',
                },
                {
                  phase: 'Launch',
                  title: 'Production Ready',
                  description:
                    'Deployed and optimized for real-world applications with full documentation.',
                  icon: Rocket,
                  color: 'from-pink-500/20 to-rose-500/20',
                  borderColor: 'border-pink-500/30',
                  iconColor: 'text-pink-400',
                  side: 'left',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`w-5/12 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <div
                      className={`group relative ${item.side === 'left' ? 'rotate-1' : '-rotate-1'} transition-all duration-500 hover:rotate-0`}
                    >
                      <div
                        className={`rounded-3xl border ${item.borderColor} bg-gradient-to-br shadow-lg ${item.color} to-transparent p-8 backdrop-blur-sm transition-all hover:border-white/[0.25]`}
                      >
                        <div
                          className={`flex items-center gap-4 ${item.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                          <div
                            className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex flex-shrink-0 items-center justify-center`}
                          >
                            <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                          </div>
                          <div className="space-y-3">
                            <div className="text-sm font-medium uppercase tracking-wider text-gray-300">
                              {item.phase}
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                            <p className="text-sm font-light leading-relaxed text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Floating accent */}
                      <div
                        className={`absolute ${item.side === 'left' ? '-left-2 -top-2' : '-right-2 -top-2'} h-6 w-6 animate-pulse rounded-full border border-white/[0.3] bg-gradient-to-r from-white/[0.2] to-transparent`}
                      />
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-white bg-gradient-to-r from-violet-500 to-blue-500 shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXCITING CTA */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10 text-center">
          <div className="relative">
            {/* Floating background elements */}
            <div className="absolute -left-8 -top-8 flex h-16 w-16 animate-bounce items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/20 to-purple-500/20">
              <Star className="h-8 w-8 text-violet-400" />
            </div>
            <div className="absolute -right-8 -top-8 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
              <Rocket className="h-8 w-8 text-blue-400" />
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 text-sm font-medium text-green-300">
                <CheckCircle className="h-4 w-4" />
                <span>Ready to Launch</span>
              </div>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] [text-wrap:balance]">
                Start building your{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  dream project
                </span>{' '}
                today
              </h2>
              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-400">
                Everything you need to launch your next project with confidence and style
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 pt-8 sm:flex-row">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-12 py-6 text-base font-semibold text-white shadow-[0_8px_32px_rgba(139,92,246,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_48px_rgba(139,92,246,0.4)] active:scale-[0.98]"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.02] px-12 py-6 text-base font-semibold shadow-sm backdrop-blur-sm transition-all hover:bg-white/[0.05]"
            >
              <Users className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
