'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    alert('Form submission functionality will be enabled when email service is configured')
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 backdrop-blur-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Let's{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Ready to start your project? We'd love to hear from you.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Form */}
          <div className="rounded-2xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-orange-500/50 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-orange-500/50 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full resize-none rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-orange-500/50 focus:outline-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-pink-600"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20">
                    <Mail className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-gray-400">
                      Email
                    </h4>
                    <p className="text-lg text-white">hello@company.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20">
                    <Phone className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-gray-400">
                      Phone
                    </h4>
                    <p className="text-lg text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20">
                    <MapPin className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-gray-400">
                      Address
                    </h4>
                    <p className="text-lg text-white">
                      123 Business St
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
