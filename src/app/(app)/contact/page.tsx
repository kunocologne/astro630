import { Mail, MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us.',
}

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col antialiased">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-600/[0.12] blur-[120px]" />
          <div className="absolute right-1/3 bottom-1/3 h-[500px] w-[500px] rounded-full bg-teal-600/[0.12] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl space-y-8 text-center">
          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] [text-wrap:balance]">
            Get in touch
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed font-light">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT BENTO GRID */}
      <section className="px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Form - Takes 2 columns */}
            <div className="rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-12 shadow-sm lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-2 text-lg font-semibold">Send us a message</h2>
                  <p className="text-muted-foreground font-light">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/[0.15] bg-white/[0.02] px-5 py-4 text-sm shadow-sm transition-colors placeholder:text-gray-600 focus:border-white/[0.25] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-white/[0.15] bg-white/[0.02] px-5 py-4 text-sm shadow-sm transition-colors placeholder:text-gray-600 focus:border-white/[0.25] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full rounded-2xl border border-white/[0.15] bg-white/[0.02] px-5 py-4 text-sm shadow-sm transition-colors placeholder:text-gray-600 focus:border-white/[0.25] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more..."
                      className="w-full resize-none rounded-2xl border border-white/[0.15] bg-white/[0.02] px-5 py-4 text-sm shadow-sm transition-colors placeholder:text-gray-600 focus:border-white/[0.25] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-white px-10 py-4 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.12)] transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Bento Cards */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.12]">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold">Email</h4>
                    <p className="text-sm font-light text-gray-400">hello@example.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.12]">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold">Phone</h4>
                    <p className="text-sm font-light text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.12]">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold">Office</h4>
                    <p className="text-sm font-light text-gray-400">
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
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
              Frequently asked
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light text-gray-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                className="group rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-sm transition-all hover:border-white/[0.12]"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-3xl">{faq.emoji}</div>
                  <div className="space-y-2">
                    <h4 className="text-base font-semibold">{faq.q}</h4>
                    <p className="text-sm leading-relaxed font-light text-gray-400">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="border-t border-white/[0.08] px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex aspect-[21/9] items-center justify-center overflow-hidden rounded-3xl border border-white/[0.15] bg-gradient-to-br from-white/[0.02] to-transparent shadow-sm">
            <div className="space-y-3 text-center">
              <MapPin className="mx-auto h-16 w-16 text-gray-700" />
              <p className="font-light text-gray-500">Map location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
