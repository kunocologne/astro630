import { Mail, MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen antialiased">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-600/[0.12] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-600/[0.12] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-semibold tracking-[-0.02em] leading-[1.1] [text-wrap:balance]">
            Get in touch
          </h1>
          <p className="text-[clamp(0.9rem,1.3vw,1.1rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT BENTO GRID */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Form - Takes 2 columns */}
            <div className="lg:col-span-2 rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Send us a message</h2>
                  <p className="text-muted-foreground font-light">We&apos;ll get back to you within 24 hours</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-2xl border border-white/[0.15] shadow-sm bg-white/[0.02] focus:outline-none focus:border-white/[0.25] transition-colors text-sm placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-2xl border border-white/[0.15] shadow-sm bg-white/[0.02] focus:outline-none focus:border-white/[0.25] transition-colors text-sm placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-5 py-4 rounded-2xl border border-white/[0.15] shadow-sm bg-white/[0.02] focus:outline-none focus:border-white/[0.25] transition-colors text-sm placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more..."
                      className="w-full px-5 py-4 rounded-2xl border border-white/[0.15] shadow-sm bg-white/[0.02] focus:outline-none focus:border-white/[0.25] transition-colors text-sm resize-none placeholder:text-gray-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Bento Cards */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.12] transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Email</h4>
                    <p className="text-sm text-gray-400 font-light">hello@example.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.12] transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-gray-400 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.12] transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Office</h4>
                    <p className="text-sm text-gray-400 font-light">
                      123 Business St
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
              Frequently asked
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: 'What is your response time?',
                a: 'We typically respond within 24 hours during business days.',
                emoji: '⏱️',
              },
              {
                q: 'Do you offer custom solutions?',
                a: 'Yes, we can tailor our services to meet your specific needs.',
                emoji: '✨',
              },
              {
                q: 'What are your business hours?',
                a: 'Monday to Friday, 9 AM to 6 PM PST.',
                emoji: '🕐',
              },
              {
                q: 'How do I get started?',
                a: 'Simply fill out the contact form and we&apos;ll get back to you shortly.',
                emoji: '🚀',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-white/[0.12] transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{faq.emoji}</div>
                  <div className="space-y-2">
                    <h4 className="text-base font-semibold">{faq.q}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[21/9] rounded-3xl border border-white/[0.15] shadow-sm bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden">
            <div className="text-center space-y-3">
              <MapPin className="w-16 h-16 mx-auto text-gray-700" />
              <p className="text-gray-500 font-light">Map location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
