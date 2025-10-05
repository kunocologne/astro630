import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tips, and stories from our team about design, development, and business growth.',
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

const categories = ['All', 'E-Commerce', 'Development', 'UX Design', 'Case Study', 'Design', 'Marketing']

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight leading-tight">
              Insights &
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Inspiration
              </span>
            </h1>

            <p className="text-[clamp(0.9rem,1.3vw,1.1rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert insights on design, development, and digital strategy to help you build better products and grow your business.
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
                className="px-6 py-2.5 rounded-full border border-border/70 shadow-sm hover:border-foreground/20 bg-background hover:bg-foreground/5 text-sm font-medium transition-all"
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
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
              <span className="text-sm font-semibold">Featured Article</span>
            </div>

            <div className="relative group bg-background rounded-3xl p-12 border border-border/70 shadow-sm hover:border-foreground/20 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${blogPosts[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-foreground/10 font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    {blogPosts[0].title}
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center gap-3 text-base font-semibold hover:gap-4 transition-all"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
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
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest Articles</h2>
            <p className="text-base text-muted-foreground">
              Fresh insights and practical guides to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-background rounded-3xl border border-border/70 shadow-sm hover:border-foreground/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className={`relative h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <div className="text-7xl">{post.image}</div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="px-2.5 py-1 rounded-full bg-foreground/10 font-medium text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-tight group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
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
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border-2 border-foreground/20 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Never Miss an Update</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Get our latest articles, insights, and tips delivered straight to your inbox every week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-border/50 focus:border-foreground/40 bg-background focus:outline-none transition-colors"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-8 py-4 font-semibold hover:scale-105 transition-all whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground">
              Join 10,000+ readers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Topics</h2>
            <p className="text-base text-muted-foreground">
              Explore articles by topic to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
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
                className="group bg-background rounded-2xl p-6 border border-border/70 shadow-sm hover:border-foreground/20 transition-all duration-300 hover:shadow-xl text-center space-y-3"
              >
                <div className="text-4xl">{topic.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground">{topic.count} articles</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

