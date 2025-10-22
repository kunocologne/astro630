'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
      >
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Title */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              JUNO
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Professional website generation system that creates award-winning websites in minutes, not months.
          </motion.p>

          {/* Animated Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5min</div>
              <div className="text-sm text-gray-400">Generation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7.5+</div>
              <div className="text-sm text-gray-400">Awwwards Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">90+</div>
              <div className="text-sm text-gray-400">Lighthouse Score</div>
            </div>
          </motion.div>

          {/* Template Carousel */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-8">Choose Your Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Portfolio Template */}
              <TemplateCard
                title="Portfolio Bold"
                description="Creative, gradient-based design for designers and photographers"
                href="/portfolio"
                gradient="from-pink-500 to-purple-600"
                icon="🎨"
                features={["3D Animations", "Gradient Design", "Creative Layout"]}
              />
              
              {/* Agency Template */}
              <TemplateCard
                title="Agency Corporate"
                description="Professional, business-oriented design for agencies and consultancies"
                href="/agency"
                gradient="from-blue-500 to-cyan-600"
                icon="🏢"
                features={["Professional", "Business Focus", "Trust Indicators"]}
              />
              
              {/* SaaS Template */}
              <TemplateCard
                title="SaaS Futuristic"
                description="Clean, tech-focused layout for startups and software companies"
                href="/saas"
                gradient="from-emerald-500 to-teal-600"
                icon="🚀"
                features={["Modern UI", "Tech Focus", "Data Visualization"]}
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/cli">
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <FloatingElements />
    </div>
  )
}

function TemplateCard({ title, description, href, gradient, icon, features }: {
  title: string
  description: string
  href: string
  gradient: string
  icon: string
  features: string[]
}) {
  return (
    <Link href={href}>
      <motion.div
        className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="text-center">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/20 rounded-full text-xs text-white"
              >
                {feature}
              </span>
            ))}
          </div>
          
          <div className={`w-full h-2 bg-gradient-to-r ${gradient} rounded-full`} />
        </div>
      </motion.div>
    </Link>
  )
}

function FloatingElements() {
  return (
    <>
      {/* Floating Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {[Zap, Star, Sparkles][i % 3] && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[Zap, Star, Sparkles][i % 3] && (
                <Zap className="w-6 h-6" />
              )}
            </motion.div>
          )}
        </motion.div>
      ))}
    </>
  )
}