'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface ConnectSectionProps {
  title?: string
  subtitle?: string
  formTitle?: string
  formDescription?: string
}

export function ConnectSection({
  title = 'Get Started',
  subtitle = 'Join the community or reach out',
  formTitle = 'Contact Us',
  formDescription = "Have questions? We're here to help.",
}: ConnectSectionProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section
      id="connect"
      className="relative z-10 bg-gradient-to-b from-slate-950 to-slate-900 py-20 transition-colors duration-300"
    >
      {/* Top Divider */}
      <div className="absolute left-1/2 top-0 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        {/* Simple Contact Form */}
        <div className="mx-auto max-w-xl">
          <div className="card-glass-lg shadow-lg">
            {/* Inner Glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 blur-3xl" />

            <div className="relative z-10 mb-6">
              <h3 className="mb-2 text-xl font-bold text-foreground">{formTitle}</h3>
              <p className="text-sm text-muted-foreground">{formDescription}</p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-lg border-white/20 bg-white/5 text-foreground placeholder-muted-foreground backdrop-blur-xl focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="rounded-lg border-white/20 bg-white/5 text-foreground placeholder-muted-foreground backdrop-blur-xl focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="min-h-[120px] rounded-lg border-white/20 bg-white/5 text-foreground placeholder-muted-foreground backdrop-blur-xl focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500 font-bold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:from-orange-400 hover:to-pink-400 hover:shadow-xl"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Contact Info */}
            <div className="relative z-10 mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <Mail className="mx-auto mb-2 h-6 w-6 text-[#FF6B35]" />
                <p className="text-xs text-muted-foreground">Email Us</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <MessageCircle className="mx-auto mb-2 h-6 w-6 text-[#FF6B35]" />
                <p className="text-xs text-muted-foreground">Live Chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
