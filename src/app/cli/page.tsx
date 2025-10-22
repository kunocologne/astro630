'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Terminal, Code, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CLIPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [step, setStep] = useState(0)

  const steps = [
    { title: "Choose Template", description: "Select from Portfolio, Agency, or SaaS" },
    { title: "Configure Settings", description: "Set up CMS, features, and styling" },
    { title: "Generate Site", description: "Create your professional website" },
    { title: "Deploy", description: "Launch to Vercel in seconds" }
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    setStep(0)
    
    // Simulate generation process
    const interval = setInterval(() => {
      setStep(prev => {
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
        <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <div className="text-white font-semibold">JUNO CLI</div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Generate Your Website
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create a professional website in minutes with our powerful CLI tool
          </p>
        </motion.div>

        {/* Generation Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((stepItem, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                step >= index
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-700 bg-gray-800/50'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step > index ? 'bg-green-500' : step === index ? 'bg-purple-500' : 'bg-gray-600'
                }`}>
                  {step > index ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white font-semibold">{index + 1}</span>
                  )}
                </div>
                <h3 className="text-white font-semibold">{stepItem.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{stepItem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CLI Interface */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-mono">JUNO CLI</span>
          </div>
          
          <div className="font-mono text-sm text-gray-300 space-y-2">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isGenerating ? 1 : 1.05 }}
            whileTap={{ scale: isGenerating ? 1 : 0.95 }}
          >
            <Zap className="w-5 h-5" />
            {isGenerating ? 'Generating...' : 'Start Generation'}
          </motion.button>

          <motion.button
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5" />
            View Documentation
          </motion.button>
        </div>

        {/* Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Generate professional websites in under 5 minutes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Award Quality</h3>
            <p className="text-gray-400">Awwwards-level design standards built-in</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Terminal className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">One Command</h3>
            <p className="text-gray-400">Deploy to Vercel with a single command</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
