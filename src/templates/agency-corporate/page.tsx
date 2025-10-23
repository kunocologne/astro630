import {
  ArrowRight,
  Award,
  Check,
  Code,
  Mail,
  Palette,
  Phone,
  Rocket,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { MagneticButton } from '@/components/ui/magnetic-button'
import { HeroImage, OptimizedImage } from '@/components/ui/optimized-image'

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
    <div className="bg-background text-foreground flex min-h-screen flex-col antialiased">
      {/* HERO - Professional Clean */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          {/* Professional Corporate Background */}
          <HeroImage
            src="/media/agency-hero-office.jpg"
            alt="Professional Corporate Office"
            className="h-full w-full"
            fallbackGradient="bg-gradient-to-br from-gray-800 to-gray-900"
          />
          <div className="via-background/50 to-background absolute inset-0 bg-gradient-to-b from-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <div className="mb-8">
            <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-4 py-2 text-sm font-medium backdrop-blur-xl">
              <Award className="h-3.5 w-3.5" />
              <span>Award-winning digital agency</span>
            </div>
          </div>

          <h1 className="mb-6 text-[clamp(2.5rem,7vw,5rem)] leading-[1.1] font-bold tracking-tight">
            Transforming Ideas Into Digital Excellence
          </h1>

          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed">
            We partner with ambitious brands to create digital experiences that drive growth, engage
            audiences, and deliver measurable results.
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton intensity={0.3}>
              <Link
                href="#contact"
                className="bg-foreground text-background inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold transition-all hover:opacity-90"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </MagneticButton>
            <MagneticButton intensity={0.2}>
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.15] bg-white/[0.05] px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all hover:bg-white/[0.1]"
              >
                View Our Work
              </Link>
            </MagneticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-4">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '250+', label: 'Happy Clients' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Grid Layout */}
      <section
        id="services"
        className="bg-gradient-to-b from-white/[0.02] to-transparent px-4 py-32 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-3 py-1.5 text-sm font-medium">
              Our Services
            </div>
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold tracking-tight">
              What we do best
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Full-service digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code,
                title: 'Web Development',
                description:
                  'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
              },
              {
                icon: Palette,
                title: 'Brand & Design',
                description:
                  'Comprehensive brand identity and visual design that tells your story and resonates with your audience.',
              },
              {
                icon: Rocket,
                title: 'Digital Marketing',
                description:
                  'Strategic marketing campaigns that drive traffic, engagement, and conversions across all channels.',
              },
              {
                icon: Target,
                title: 'Strategy & Consulting',
                description:
                  'Expert guidance to help you navigate digital transformation and achieve your business objectives.',
              },
              {
                icon: TrendingUp,
                title: 'SEO & Analytics',
                description:
                  'Data-driven optimization to improve your search rankings and understand your audience better.',
              },
              {
                icon: Users,
                title: 'UX/UI Design',
                description:
                  'User-centered design that creates intuitive, engaging experiences your customers will love.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8 transition-all hover:border-white/[0.2] hover:bg-white/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05] transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Timeline */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-3 py-1.5 text-sm font-medium">
              Our Process
            </div>
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold tracking-tight">
              How we work
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              A proven process that delivers exceptional results every time
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description:
                  'We start by understanding your business, goals, and challenges. Through research and analysis, we develop a comprehensive strategy.',
                icon: Target,
              },
              {
                step: '02',
                title: 'Design & Planning',
                description:
                  'Our team creates wireframes, mockups, and prototypes. We collaborate closely to ensure the design aligns with your vision.',
                icon: Palette,
              },
              {
                step: '03',
                title: 'Development & Testing',
                description:
                  'We build your solution using cutting-edge technologies, with rigorous testing to ensure quality and performance.',
                icon: Code,
              },
              {
                step: '04',
                title: 'Launch & Growth',
                description:
                  'We launch your project and provide ongoing support, optimization, and strategic guidance to drive continued success.',
                icon: Rocket,
              },
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="grid items-start gap-8 md:grid-cols-[120px_1fr]">
                  <div className="relative">
                    <div className="from-foreground/20 to-foreground/5 bg-gradient-to-b bg-clip-text text-6xl font-bold text-transparent">
                      {phase.step}
                    </div>
                    {i < 3 && (
                      <div className="absolute top-20 left-8 hidden h-20 w-0.5 bg-gradient-to-b from-white/20 to-transparent md:block" />
                    )}
                  </div>
                  <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05]">
                        <phase.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="mb-3 text-2xl font-bold">{phase.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
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
      <section id="work" className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-3 py-1.5 text-sm font-medium">
              Featured Work
            </div>
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold tracking-tight">
              Recent projects
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
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
                image: '/media/agency-project-ecommerce.jpg',
              },
              {
                title: 'Brand Redesign & Launch',
                client: 'Tech Startup',
                category: 'Branding, Web Design',
                result: 'Raised $5M Series A',
                image: '/media/agency-project-branding.jpg',
              },
              {
                title: 'Mobile App Development',
                client: 'Healthcare Provider',
                category: 'Product Design, Development',
                result: '50K+ active users',
                image: '/media/agency-project-mobile.jpg',
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent transition-all hover:border-white/[0.2]"
              >
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative aspect-[4/3]">
                    {/* Project Image */}
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-full w-full"
                      fallbackGradient="bg-gradient-to-br from-gray-800 to-gray-900"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-12">
                    <p className="text-muted-foreground mb-2 text-sm">{project.client}</p>
                    <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.category}</p>
                    <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-2 font-medium text-green-400">
                      <Check className="h-4 w-4" />
                      <span>{project.result}</span>
                    </div>
                    <Link
                      href="#"
                      className="text-foreground inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-3 py-1.5 text-sm font-medium">
              Client Testimonials
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold tracking-tight">
              What our clients say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  '{{COMPANY_NAME}} transformed our digital presence completely. Their strategic approach and attention to detail delivered results beyond our expectations.',
                author: 'Jennifer Smith',
                role: 'CEO, TechCorp',
                avatar: 'JS',
              },
              {
                quote:
                  'Working with this team was exceptional. They understood our vision and brought it to life with creativity and professionalism.',
                author: 'Michael Brown',
                role: 'Founder, StartupCo',
                avatar: 'MB',
              },
              {
                quote:
                  'The level of expertise and commitment to our success made all the difference. Highly recommended for any serious project.',
                author: 'Sarah Johnson',
                role: 'Marketing Director',
                avatar: 'SJ',
              },
              {
                quote:
                  "Professional, responsive, and results-driven. They've become our go-to partner for all digital initiatives.",
                author: 'David Lee',
                role: 'VP of Operations',
                avatar: 'DL',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-8"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-5 w-5 text-amber-400">
                      ⭐
                    </div>
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold tracking-tight">
              Let&apos;s build something great together
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Ready to take your digital presence to the next level? Get in touch and let&apos;s
              discuss your project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-all hover:border-white/[0.2]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1 text-sm">Email us</div>
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-foreground/80 font-medium transition-colors"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-all hover:border-white/[0.2]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1 text-sm">Call us</div>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-foreground/80 font-medium transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.03] to-transparent p-6">
                <div className="text-muted-foreground mb-3 text-sm">Office Hours</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="text-muted-foreground flex justify-between">
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
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 transition-colors focus:border-white/[0.3] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 transition-colors focus:border-white/[0.3] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 transition-colors focus:border-white/[0.3] focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-foreground text-background inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all hover:opacity-90"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
