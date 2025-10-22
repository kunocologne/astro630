import { ArrowRight, Award, Check, Code, Mail, Palette, Phone, Rocket, Target, TrendingUp, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { MagneticButton } from '@/components/ui/magnetic-button'

export const metadata: Metadata = {
  title: '{{COMPANY_NAME}} - {{TAGLINE}}',
  description: '{{TAGLINE}}',
  keywords: ['agency', 'digital', 'marketing', 'consulting', 'services', 'professional'],
  authors: [{ name: '{{COMPANY_NAME}}' }],
  openGraph: {
    title: '{{COMPANY_NAME}} - {{TAGLINE}}',
    description: '{{TAGLINE}}',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '{{COMPANY_NAME}} - {{TAGLINE}}',
    description: '{{TAGLINE}}',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen antialiased">
      {/* HERO - Professional Clean */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.15] backdrop-blur-xl text-sm font-medium text-muted-foreground">
              <Award className="w-3.5 h-3.5" />
              <span>Award-winning digital agency</span>
            </div>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight leading-[1.1] mb-6">
            {{TAGLINE}}
          </h1>

          <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We partner with ambitious brands to create digital experiences that drive growth, 
            engage audiences, and deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton strength={0.3}>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background text-lg font-semibold hover:opacity-90 transition-all"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.15] bg-white/[0.05] backdrop-blur-xl text-lg font-semibold hover:bg-white/[0.1] transition-all"
              >
                View Our Work
              </Link>
            </MagneticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/[0.08]">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '250+', label: 'Happy Clients' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Grid Layout */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.15] text-sm font-medium text-muted-foreground mb-6">
              Our Services
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight mb-6">
              What we do best
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-service digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.'
              },
              {
                icon: Palette,
                title: 'Brand & Design',
                description: 'Comprehensive brand identity and visual design that tells your story and resonates with your audience.'
              },
              {
                icon: Rocket,
                title: 'Digital Marketing',
                description: 'Strategic marketing campaigns that drive traffic, engagement, and conversions across all channels.'
              },
              {
                icon: Target,
                title: 'Strategy & Consulting',
                description: 'Expert guidance to help you navigate digital transformation and achieve your business objectives.'
              },
              {
                icon: TrendingUp,
                title: 'SEO & Analytics',
                description: 'Data-driven optimization to improve your search rankings and understand your audience better.'
              },
              {
                icon: Users,
                title: 'UX/UI Design',
                description: 'User-centered design that creates intuitive, engaging experiences your customers will love.'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8 hover:border-white/[0.2] hover:bg-white/[0.05] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Timeline */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.15] text-sm font-medium text-muted-foreground mb-6">
              Our Process
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight mb-6">
              How we work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven process that delivers exceptional results every time
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We start by understanding your business, goals, and challenges. Through research and analysis, we develop a comprehensive strategy.',
                icon: Target
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our team creates wireframes, mockups, and prototypes. We collaborate closely to ensure the design aligns with your vision.',
                icon: Palette
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'We build your solution using cutting-edge technologies, with rigorous testing to ensure quality and performance.',
                icon: Code
              },
              {
                step: '04',
                title: 'Launch & Growth',
                description: 'We launch your project and provide ongoing support, optimization, and strategic guidance to drive continued success.',
                icon: Rocket
              }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                  <div className="relative">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground/20 to-foreground/5">
                      {phase.step}
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>
                  <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES / WORK */}
      <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.15] text-sm font-medium text-muted-foreground mb-6">
              Featured Work
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight mb-6">
              Recent projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selected case studies showcasing our expertise across different industries
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'E-commerce Transformation',
                client: 'Fashion Retailer',
                category: 'Web Development, UX Design',
                result: '+127% increase in conversions',
                image: '🛍️'
              },
              {
                title: 'Brand Redesign & Launch',
                client: 'Tech Startup',
                category: 'Branding, Web Design',
                result: 'Raised $5M Series A',
                image: '🚀'
              },
              {
                title: 'Mobile App Development',
                client: 'Healthcare Provider',
                category: 'Product Design, Development',
                result: '50K+ active users',
                image: '📱'
              }
            ].map((project, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden hover:border-white/[0.2] transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-white/[0.05] to-transparent">
                    {/* TODO: Replace with project images */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {project.image}
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.category}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-medium w-fit mb-6">
                      <Check className="w-4 h-4" />
                      <span>{project.result}</span>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all font-medium"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.15] text-sm font-medium text-muted-foreground mb-6">
              Client Testimonials
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight">
              What our clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "{{COMPANY_NAME}} transformed our digital presence completely. Their strategic approach and attention to detail delivered results beyond our expectations.",
                author: "Jennifer Smith",
                role: "CEO, TechCorp",
                avatar: "JS"
              },
              {
                quote: "Working with this team was exceptional. They understood our vision and brought it to life with creativity and professionalism.",
                author: "Michael Brown",
                role: "Founder, StartupCo",
                avatar: "MB"
              },
              {
                quote: "The level of expertise and commitment to our success made all the difference. Highly recommended for any serious project.",
                author: "Sarah Johnson",
                role: "Marketing Director",
                avatar: "SJ"
              },
              {
                quote: "Professional, responsive, and results-driven. They've become our go-to partner for all digital initiatives.",
                author: "David Lee",
                role: "VP of Operations",
                avatar: "DL"
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-amber-400">⭐</div>
                  ))}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight mb-6">
              Let&apos;s build something great together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Get in touch and let&apos;s discuss your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-white/[0.2] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email us</div>
                    <a href="mailto:hello@example.com" className="font-medium hover:text-foreground/80 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-white/[0.2] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Call us</div>
                    <a href="tel:+1234567890" className="font-medium hover:text-foreground/80 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-6">
                <div className="text-sm text-muted-foreground mb-3">Office Hours</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Weekend</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] focus:border-white/[0.3] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] focus:border-white/[0.3] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] focus:border-white/[0.3] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-all"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

