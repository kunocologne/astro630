import { ArrowRight, Award, CheckCircle, Clock, Code, Globe, Heart, Layers, Palette, Rocket, Settings, Shield, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our template and what makes it special.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen antialiased">
      {/* HERO - Interactive Animated Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/3 via-transparent to-foreground/3" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-500/[0.15] via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/[0.15] via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-500/[0.05] via-transparent to-transparent animate-pulse" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left side - Content with floating elements */}
            <div className="space-y-10 relative">
              {/* Floating icons around content */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center animate-bounce">
                <Star className="w-8 h-8 text-violet-400" />
              </div>
              <div className="absolute top-1/2 -left-12 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center animate-pulse">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-sm font-medium text-violet-300 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>About JUNO</span>
                </div>
                <h1 className="text-[clamp(1.5rem,4.5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.1]">
                  Built for{' '}
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    everything
                  </span>
          </h1>
                <p className="text-[clamp(0.9rem,1.3vw,1.1rem)] text-muted-foreground leading-relaxed font-light">
            A modern e-commerce template that combines premium design with powerful functionality. Build anything you can imagine.
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
                  <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.08] hover:border-white/[0.15] transition-all hover:scale-105">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
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
              <div className="relative w-full h-[600px] rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/[0.15] shadow-lg overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.08] via-transparent to-transparent" />
                
                {/* Floating corner elements */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center group hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-violet-400" />
                </div>
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center group hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-amber-400" />
                </div>
                
                {/* Center element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/[0.2] flex items-center justify-center backdrop-blur-sm group hover:scale-110 transition-transform">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500/30 to-red-500/30 animate-bounce">
                  <Heart className="w-4 h-4 text-pink-400 mx-auto mt-2" />
                </div>
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 animate-pulse">
                  <CheckCircle className="w-4 h-4 text-green-400 mx-auto mt-2" />
                </div>
              </div>
              
              {/* Floating elements outside the main container */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center animate-bounce">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center animate-pulse">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC FEATURES - Interactive Rotating Cards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-sm font-medium text-amber-300">
              <Zap className="w-4 h-4" />
              <span>Why Choose JUNO</span>
            </div>
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              Built for{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                developers
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              Every detail crafted for performance, scalability, and developer experience
            </p>
          </div>

          {/* Rotating Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Fast',
                description: 'Optimized for performance with Next.js 15 and modern tooling. Every millisecond counts.',
                icon: Zap,
                color: 'from-amber-500/20 to-orange-500/20',
                borderColor: 'border-amber-500/30',
                iconColor: 'text-amber-400',
                stats: [
                  { value: '98', label: 'Lighthouse Score' },
                  { value: '<1s', label: 'Load Time' }
                ],
                rotation: 'rotate-1',
                delay: '0'
              },
              {
                title: 'Production Ready',
                description: 'Battle-tested code ready for real-world applications with enterprise-grade reliability.',
                icon: Shield,
                color: 'from-blue-500/20 to-cyan-500/20',
                borderColor: 'border-blue-500/30',
                iconColor: 'text-blue-400',
                rotation: '-rotate-1',
                delay: '100'
              },
              {
                title: 'Modern Design',
                description: 'Clean, minimal interface inspired by leading products with attention to every pixel.',
                icon: Palette,
                color: 'from-purple-500/20 to-pink-500/20',
                borderColor: 'border-purple-500/30',
                iconColor: 'text-purple-400',
                rotation: 'rotate-2',
                delay: '200'
              },
              {
                title: 'Clean Code',
                description: 'Well-structured, maintainable, fully TypeScript with comprehensive documentation.',
                icon: Code,
                color: 'from-green-500/20 to-emerald-500/20',
                borderColor: 'border-green-500/30',
                iconColor: 'text-green-400',
                rotation: '-rotate-2',
                delay: '300'
              },
              {
                title: 'Customizable',
                description: 'Easy to modify and extend for your needs with modular architecture.',
                icon: Settings,
                color: 'from-cyan-500/20 to-blue-500/20',
                borderColor: 'border-cyan-500/30',
                iconColor: 'text-cyan-400',
                rotation: 'rotate-1',
                delay: '400'
              },
              {
                title: 'Deploy Anywhere',
                description: 'Works on Vercel, Netlify, any Node.js environment with zero configuration.',
                icon: Rocket,
                color: 'from-pink-500/20 to-rose-500/20',
                borderColor: 'border-pink-500/30',
                iconColor: 'text-pink-400',
                rotation: '-rotate-1',
                delay: '500'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative ${feature.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className={`rounded-3xl border ${feature.borderColor} shadow-lg bg-gradient-to-br ${feature.color} to-transparent p-8 hover:border-white/[0.25] transition-all backdrop-blur-sm`}>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <feature.icon className={`w-12 h-12 ${feature.iconColor}`} />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/[0.1] to-transparent border border-white/[0.2] flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed">
                        {feature.description}
                      </p>
            </div>

                    {feature.stats && (
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        {feature.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                            <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
                        ))}
            </div>
                    )}
              </div>
            </div>

                {/* Floating accent element */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-white/[0.2] to-transparent border border-white/[0.3] animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN BUILD - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              What you can build
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto font-light">
              Unlimited possibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className={`group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br ${item.color} to-transparent p-12 hover:border-white/[0.25] transition-all`}
              >
                <div className="space-y-6">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              Technical excellence
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto font-light">
              Built with industry-leading technologies
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Next.js 15', icon: '⚛️', desc: 'React Framework' },
              { name: 'TypeScript', icon: '📘', desc: 'Type Safety' },
              { name: 'Tailwind CSS', icon: '🎨', desc: 'Styling' },
              { name: 'Payload CMS', icon: '📦', desc: 'Content' },
            ].map((tech, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.25] transition-all text-center"
              >
                <div className="space-y-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold">{tech.name}</div>
                    <div className="text-sm text-gray-400 font-light">{tech.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-sm font-medium text-green-300">
              <Clock className="w-4 h-4" />
              <span>Development Journey</span>
            </div>
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
              From idea to{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                launch
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              See how JUNO evolved from concept to production-ready template
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500/20 via-purple-500/20 to-blue-500/20 rounded-full" />
            
            <div className="space-y-16">
              {[
                {
                  phase: 'Research',
                  title: 'Market Analysis',
                  description: 'Analyzed 100+ templates to identify gaps and opportunities in the market.',
                  icon: Users,
                  color: 'from-violet-500/20 to-purple-500/20',
                  borderColor: 'border-violet-500/30',
                  iconColor: 'text-violet-400',
                  side: 'left'
                },
                {
                  phase: 'Design',
                  title: 'UI/UX Creation',
                  description: 'Designed modern, accessible interfaces with attention to every detail.',
                  icon: Palette,
                  color: 'from-blue-500/20 to-cyan-500/20',
                  borderColor: 'border-blue-500/30',
                  iconColor: 'text-blue-400',
                  side: 'right'
                },
                {
                  phase: 'Development',
                  title: 'Code Implementation',
                  description: 'Built with Next.js 15, TypeScript, and modern best practices.',
                  icon: Code,
                  color: 'from-green-500/20 to-emerald-500/20',
                  borderColor: 'border-green-500/30',
                  iconColor: 'text-green-400',
                  side: 'left'
                },
                {
                  phase: 'Testing',
                  title: 'Quality Assurance',
                  description: 'Comprehensive testing across devices, browsers, and performance metrics.',
                  icon: Shield,
                  color: 'from-amber-500/20 to-orange-500/20',
                  borderColor: 'border-amber-500/30',
                  iconColor: 'text-amber-400',
                  side: 'right'
                },
                {
                  phase: 'Launch',
                  title: 'Production Ready',
                  description: 'Deployed and optimized for real-world applications with full documentation.',
                  icon: Rocket,
                  color: 'from-pink-500/20 to-rose-500/20',
                  borderColor: 'border-pink-500/30',
                  iconColor: 'text-pink-400',
                  side: 'left'
                }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`group relative ${item.side === 'left' ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-500`}>
                      <div className={`rounded-3xl border ${item.borderColor} shadow-lg bg-gradient-to-br ${item.color} to-transparent p-8 hover:border-white/[0.25] transition-all backdrop-blur-sm`}>
                        <div className={`flex items-center gap-4 ${item.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center flex-shrink-0`}>
                            <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                          </div>
                          <div className="space-y-3">
                            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">{item.phase}</div>
                            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating accent */}
                      <div className={`absolute ${item.side === 'left' ? '-top-2 -left-2' : '-top-2 -right-2'} w-6 h-6 rounded-full bg-gradient-to-r from-white/[0.2] to-transparent border border-white/[0.3] animate-pulse`} />
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 border-2 border-white shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXCITING CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="relative">
            {/* Floating background elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center animate-bounce">
              <Star className="w-8 h-8 text-violet-400" />
            </div>
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center animate-pulse">
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-sm font-medium text-green-300">
                <CheckCircle className="w-4 h-4" />
                <span>Ready to Launch</span>
              </div>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] [text-wrap:balance]">
                Start building your{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  dream project
                </span>{' '}
                today
          </h2>
              <p className="text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Everything you need to launch your next project with confidence and style
          </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_8px_32px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.4)]"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 rounded-full border border-white/[0.15] shadow-sm bg-white/[0.02] text-base font-semibold hover:bg-white/[0.05] transition-all backdrop-blur-sm"
            >
              <Users className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
