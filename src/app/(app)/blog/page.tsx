import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, tips, and stories from our team about design, development, and business growth.',
}

const blogPosts = [
  {
    id: 1,
    title: 'The Future of E-Commerce: Trends Shaping 2025',
    excerpt:
      'Discover the emerging trends that will define online shopping in 2025, from AI-powered personalization to immersive AR experiences.',
    category: 'E-Commerce',
    date: 'December 15, 2024',
    readTime: '8 min read',
    image: '🛍️',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 2,
    title: 'Building Accessible Web Applications: A Complete Guide',
    excerpt:
      'Learn how to create inclusive digital experiences that work for everyone, with practical tips and real-world examples.',
    category: 'Development',
    date: 'December 10, 2024',
    readTime: '12 min read',
    image: '♿',
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    id: 3,
    title: 'UX Psychology: Understanding How Users Think',
    excerpt:
      'Dive deep into the psychology behind user behavior and learn how to design interfaces that resonate with your audience.',
    category: 'UX Design',
    date: 'December 5, 2024',
    readTime: '10 min read',
    image: '🧠',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 4,
    title: 'From Zero to Launch: Building a SaaS Product in 90 Days',
    excerpt:
      'A detailed case study of how we helped a startup go from concept to paying customers in just three months.',
    category: 'Case Study',
    date: 'November 28, 2024',
    readTime: '15 min read',
    image: '🚀',
    gradient: 'from-orange-500/10 to-red-500/10',
  },
  {
    id: 5,
    title: 'The Art of Minimalist Design: Less is More',
    excerpt:
      'Explore the principles of minimalist design and how to create beautiful, focused interfaces that users love.',
    category: 'Design',
    date: 'November 20, 2024',
    readTime: '7 min read',
    image: '🎨',
    gradient: 'from-pink-500/10 to-rose-500/10',
  },
  {
    id: 6,
    title: 'SEO in 2025: What Actually Works',
    excerpt:
      'Cut through the noise and learn the SEO strategies that actually drive organic traffic and improve rankings.',
    category: 'Marketing',
    date: 'November 15, 2024',
    readTime: '11 min read',
    image: '📈',
    gradient: 'from-yellow-500/10 to-amber-500/10',
  },
]

const categories = [
  'All',
  'E-Commerce',
  'Development',
  'UX Design',
  'Case Study',
  'Design',
  'Marketing',
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="from-foreground/5 to-foreground/5 absolute inset-0 bg-gradient-to-br via-transparent" />

        <div className="relative z-10 container">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] leading-tight font-bold tracking-tight">
              Insights &
              <br />
              <span className="from-foreground via-foreground/80 to-foreground/60 bg-gradient-to-r bg-clip-text text-transparent">
                Inspiration
              </span>
            </h1>

            <p className="text-muted-foreground mx-auto max-w-2xl text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed">
              Expert insights on design, development, and digital strategy to help you build better
              products and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="border-border/70 hover:border-foreground/20 bg-background hover:bg-foreground/5 rounded-full border px-6 py-2.5 text-sm font-medium shadow-sm transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="bg-foreground/5 border-foreground/10 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="text-sm font-semibold">Featured Article</span>
            </div>

            <div className="group bg-background border-border/70 hover:border-foreground/20 relative overflow-hidden rounded-3xl border p-12 shadow-sm transition-all duration-500 hover:shadow-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${blogPosts[0].gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <span className="bg-foreground/10 rounded-full px-3 py-1 font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl leading-tight font-bold md:text-3xl">
                    {blogPosts[0].title}
                  </h2>

                  <p className="text-muted-foreground text-base leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center gap-3 text-base font-semibold transition-all hover:gap-4"
                  >
                    Read Full Article
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-[120px] leading-none">{blogPosts[0].image}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Latest Articles</h2>
            <p className="text-muted-foreground text-base">
              Fresh insights and practical guides to help you succeed
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-background border-border/70 hover:border-foreground/20 overflow-hidden rounded-3xl border shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                >
                  <div className="text-7xl">{post.image}</div>
                </div>

                <div className="space-y-4 p-8">
                  <div className="text-muted-foreground flex items-center gap-3 text-sm">
                    <span className="bg-foreground/10 rounded-full px-2.5 py-1 text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="group-hover:text-foreground/80 text-xl leading-tight font-bold transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="border-border/50 flex items-center justify-between border-t pt-4">
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container">
          <div className="border-foreground/20 from-foreground/5 to-foreground/5 mx-auto max-w-4xl space-y-8 rounded-3xl border-2 bg-gradient-to-br via-transparent p-12 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold md:text-3xl">Never Miss an Update</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base">
                Get our latest articles, insights, and tips delivered straight to your inbox every
                week.
              </p>
            </div>

            <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-border/50 focus:border-foreground/40 bg-background flex-1 rounded-xl border-2 px-6 py-4 transition-colors focus:outline-none"
              />
              <button className="bg-foreground text-background inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold whitespace-nowrap transition-all hover:scale-105">
                Subscribe
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <p className="text-muted-foreground text-sm">
              Join 10,000+ readers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Popular Topics</h2>
            <p className="text-muted-foreground text-base">
              Explore articles by topic to find exactly what you need
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'E-Commerce', count: 24, icon: '🛍️' },
              { name: 'Design', count: 18, icon: '🎨' },
              { name: 'Development', count: 32, icon: '💻' },
              { name: 'Marketing', count: 21, icon: '📈' },
              { name: 'UX/UI', count: 15, icon: '✨' },
              { name: 'Business', count: 27, icon: '💼' },
            ].map((topic) => (
              <Link
                key={topic.name}
                href={`/blog/category/${topic.name.toLowerCase()}`}
                className="group bg-background border-border/70 hover:border-foreground/20 space-y-3 rounded-2xl border p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl">{topic.icon}</div>
                <div>
                  <h3 className="mb-1 font-semibold">{topic.name}</h3>
                  <p className="text-muted-foreground text-sm">{topic.count} articles</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
