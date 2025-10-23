'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react'

/**
 * Modern Portfolio - Warm Minimalism Design
 * Professional, Clean, Warm, Friendly
 */

export default function ModernPortfolioPage() {
  return (
    <div className="to-primary-50/20 min-h-screen bg-gradient-to-br from-neutral-50 via-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="bg-primary-200/40 animate-float absolute top-20 left-20 h-64 w-64 rounded-full blur-3xl" />
          <div
            className="bg-accent-200/30 animate-float absolute right-20 bottom-20 h-96 w-96 rounded-full blur-3xl"
            style={{ animationDelay: '3s' }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary-600 mb-4 flex items-center gap-2 font-medium"
              >
                <span className="bg-primary-600 h-px w-12" />
                Hello, I&apos;m
              </motion.p>

              <h1 className="mb-6 text-5xl leading-tight font-bold lg:text-6xl">Your Name Here</h1>

              <p className="mb-8 text-2xl leading-relaxed text-neutral-600">
                Creative developer crafting{' '}
                <span className="gradient-text font-semibold">beautiful digital experiences</span>{' '}
                that make a difference.
              </p>

              <p className="mb-10 text-lg leading-relaxed text-neutral-500">
                I blend design thinking with technical expertise to build products that are not just
                functional, but delightful to use.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group from-primary-600 to-primary-500 shadow-primary rounded-xl bg-gradient-to-r px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    View my work
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-neutral-700 transition-all duration-300 hover:bg-white/80"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/80"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-neutral-600" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="glass relative aspect-square overflow-hidden rounded-3xl p-8">
                <div className="from-primary-100 via-accent-100 to-primary-200 flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br">
                  <span className="text-6xl">👨‍💻</span>
                </div>

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="glass absolute -bottom-6 -left-6 rounded-2xl p-6 shadow-xl"
                >
                  <p className="gradient-text text-3xl font-bold">5+</p>
                  <p className="text-sm text-neutral-600">Years Exp</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="glass absolute -top-6 -right-6 rounded-2xl p-6 shadow-xl"
                >
                  <p className="gradient-text text-3xl font-bold">50+</p>
                  <p className="text-sm text-neutral-600">Projects</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-neutral-600">A selection of my recent work</p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`group relative cursor-pointer ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="glass rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                    <div className="from-primary-100 to-accent-100 aspect-video overflow-hidden rounded-xl bg-gradient-to-br">
                      {/* Replace with actual project image */}
                      <div className="flex h-full w-full items-center justify-center text-neutral-400">
                        Project Preview
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="from-primary-600/90 to-accent-600/90 absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-primary-600 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold"
                    >
                      View Project
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="mb-4 flex items-center gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass rounded-full px-3 py-1 text-sm text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-primary-100 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                          <div className="bg-primary-600 h-2 w-2 rounded-full" />
                        </div>
                        <p className="text-neutral-600">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass relative overflow-hidden rounded-3xl p-12 text-center"
          >
            <div className="from-primary-500/5 to-accent-500/5 absolute inset-0 bg-gradient-to-br" />

            <div className="relative">
              <h2 className="mb-6 text-4xl font-bold">
                Let&apos;s create something <span className="gradient-text">amazing</span> together
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-neutral-600">
                I&apos;m always open to new opportunities and collaborations. Let&apos;s talk about
                your project.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="from-primary-600 to-primary-500 shadow-primary inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:' },
]

const projects = [
  {
    title: 'E-Commerce Platform',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    description:
      'A modern e-commerce platform with seamless checkout experience and real-time inventory management.',
    highlights: [
      'Increased conversion rate by 45% through optimized UX',
      'Reduced page load time to under 1 second',
      'Integrated AI-powered product recommendations',
    ],
  },
  {
    title: 'SaaS Dashboard',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    description:
      'Comprehensive analytics dashboard helping teams make data-driven decisions with confidence.',
    highlights: [
      'Processed 1M+ data points in real-time',
      'Intuitive interface adopted by 10,000+ users',
      'Custom visualization tools for complex data',
    ],
  },
  {
    title: 'Mobile Banking App',
    tags: ['React Native', 'Firebase', 'Design'],
    description: 'Award-winning mobile banking experience focused on simplicity and security.',
    highlights: [
      'Won "Best Mobile UX" at FinTech Awards 2024',
      '4.8★ rating from 50,000+ users',
      'Bank-level security with biometric authentication',
    ],
  },
]
