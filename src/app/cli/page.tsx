'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Terminal, Code, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CLIPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [step, setStep] = useState(0)

  const steps = [
    { title: 'Choose Template', description: 'Select from Portfolio, Agency, or SaaS' },
    { title: 'Configure Settings', description: 'Set up CMS, features, and styling' },
    { title: 'Generate Site', description: 'Create your professional website' },
    { title: 'Deploy', description: 'Launch to Vercel in seconds' },
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    setStep(0)

    // Simulate generation process
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval)
          setIsGenerating(false)
          return prev
        }
        return prev + 1
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-white transition-colors hover:text-purple-400"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
        <div className="font-semibold text-white">JUNO CLI</div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold text-white">Generate Your Website</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Create a professional website in minutes with our powerful CLI tool
          </p>
        </motion.div>

        {/* Generation Steps */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((stepItem, index) => (
            <motion.div
              key={index}
              className={`rounded-xl border-2 p-6 transition-all duration-300 ${
                step >= index
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-700 bg-gray-800/50'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step > index ? 'bg-green-500' : step === index ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  {step > index ? (
                    <CheckCircle className="h-5 w-5 text-white" />
                  ) : (
                    <span className="font-semibold text-white">{index + 1}</span>
                  )}
                </div>
                <h3 className="font-semibold text-white">{stepItem.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{stepItem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CLI Interface */}
        <motion.div
          className="mb-8 rounded-2xl border border-gray-700 bg-black/50 p-6 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <Terminal className="h-5 w-5 text-green-400" />
            <span className="font-mono text-green-400">JUNO CLI</span>
          </div>

          <div className="space-y-2 font-mono text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <span>cd cli && node create-site.js</span>
            </div>

            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400"
              >
                ✓ Generating your website...
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <motion.button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:from-purple-700 hover:to-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
            whileHover={{ scale: isGenerating ? 1 : 1.05 }}
            whileTap={{ scale: isGenerating ? 1 : 0.95 }}
          >
            <Zap className="h-5 w-5" />
            {isGenerating ? 'Generating...' : 'Start Generation'}
          </motion.button>

          <motion.button
            className="group relative inline-flex items-center gap-3 rounded-xl border-2 border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="h-5 w-5" />
            View Documentation
          </motion.button>
        </div>

        {/* Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
              <Zap className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Lightning Fast</h3>
            <p className="text-gray-400">Generate professional websites in under 5 minutes</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
              <CheckCircle className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Award Quality</h3>
            <p className="text-gray-400">Awwwards-level design standards built-in</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <Terminal className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">One Command</h3>
            <p className="text-gray-400">Deploy to Vercel with a single command</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
