'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Zap, Shield, Heart } from 'lucide-react'

/**
 * Modern Homepage - Warm Minimalism Design
 * Professional, Clean, Warm, Friendly
 */

export default function ModernHomePage() {
  return (
    <div className="via-primary-50/30 to-accent-50/30 min-h-screen bg-gradient-to-br from-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-primary-200/30 animate-float absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl" />
          <div
            className="bg-accent-200/30 animate-float absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
            >
              <Sparkles className="text-accent-500 h-4 w-4" />
              <span className="text-sm font-medium text-neutral-700">
                Trusted by innovative teams
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 text-6xl leading-tight font-bold">
              Build experiences that <span className="gradient-text">feel human</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-neutral-600">
              Create beautiful, professional websites with warmth and personality. No design skills
              needed—just your vision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group from-primary-600 to-primary-500 shadow-primary rounded-xl bg-gradient-to-r px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Start building free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-xl px-8 py-4 font-semibold text-neutral-700 transition-all duration-300 hover:bg-white/80"
              >
                View showcase
              </motion.button>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Check className="text-primary-500 h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary-500 h-5 w-5" />
                <span>14-day free trial</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mt-20"
          >
            <div className="glass rounded-2xl p-8 shadow-2xl">
              <div className="from-primary-100 to-accent-100 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br">
                <p className="text-lg text-neutral-400">Your amazing demo here</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass absolute top-1/4 -right-8 rounded-2xl p-6 shadow-xl"
            >
              <Zap className="text-accent-500 h-8 w-8" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass absolute bottom-1/4 -left-8 rounded-2xl p-6 shadow-xl"
            >
              <Heart className="text-primary-500 h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold">
              Everything you need to <span className="gradient-text">stand out</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-neutral-600">
              Professional tools that feel personal. Build with confidence.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="from-primary-100 to-accent-100 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br">
                  <feature.icon className="text-primary-600 h-7 w-7" />
                </div>

                <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p className="leading-relaxed text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
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
                Ready to create something <span className="gradient-text">beautiful</span>?
              </h2>
              <p className="mb-8 text-xl text-neutral-600">
                Join thousands of creators building their dream websites.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="from-primary-600 to-primary-500 shadow-primary rounded-xl bg-gradient-to-r px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl"
              >
                Get started for free
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built for speed. Your sites load instantly, keeping visitors engaged and conversions high.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security built in. Your data and your users are always protected.',
  },
  {
    icon: Heart,
    title: 'Made with Care',
    description: 'Every detail crafted with love. Beautiful designs that feel warm and welcoming.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description:
      'Smart suggestions and automation. Build professional sites without the learning curve.',
  },
  {
    icon: Check,
    title: 'Accessibility First',
    description: 'WCAG compliant out of the box. Build inclusive experiences for everyone.',
  },
  {
    icon: ArrowRight,
    title: 'Seamless Deployment',
    description: 'One click to production. Go live in seconds with automatic scaling.',
  },
]
