import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ id: string }>
}

const blogPosts = {
  '1': {
    title: 'The Future of E-Commerce: Trends Shaping 2025',
    excerpt:
      'Discover the emerging trends that will define online shopping in 2025, from AI-powered personalization to immersive AR experiences.',
    category: 'E-Commerce',
    date: 'December 15, 2024',
    readTime: '8 min read',
    author: 'Sarah Johnson',
    authorRole: 'E-Commerce Strategist',
    image: '🛍️',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    content: [
      {
        type: 'intro',
        text: 'The e-commerce landscape is evolving at an unprecedented pace. As we look ahead to 2025, several transformative trends are reshaping how consumers discover, evaluate, and purchase products online. Understanding these shifts is crucial for businesses that want to stay ahead of the curve.',
      },
      {
        type: 'heading',
        text: 'AI-Powered Personalization',
      },
      {
        type: 'paragraph',
        text: 'Artificial intelligence is revolutionizing how online stores interact with customers. Advanced algorithms now predict customer preferences with stunning accuracy, creating truly personalized shopping experiences. From product recommendations to dynamic pricing, AI is making every interaction feel custom-tailored.',
      },
      {
        type: 'paragraph',
        text: "The technology goes beyond simple product suggestions. Modern AI systems analyze browsing patterns, purchase history, and even social media behavior to understand customers at a deeper level. This means showing the right product, at the right time, with the right message - resulting in conversion rates that traditional approaches can&apos;t match.",
      },
      {
        type: 'heading',
        text: 'Augmented Reality Shopping',
      },
      {
        type: 'paragraph',
        text: "AR technology has moved from gimmick to necessity. Customers now expect to visualize products in their own space before purchasing. Whether it&apos;s furniture in their living room or sunglasses on their face, AR bridges the gap between online and in-store shopping experiences.",
      },
      {
        type: 'quote',
        text: 'AR technology has reduced product returns by up to 40% for early adopters, while increasing customer confidence and satisfaction.',
      },
      {
        type: 'heading',
        text: 'Social Commerce Integration',
      },
      {
        type: 'paragraph',
        text: "Social media platforms are becoming full-fledged shopping destinations. Instagram, TikTok, and Pinterest now offer seamless checkout experiences, allowing users to purchase products without leaving their favorite apps. This integration of social and commerce is creating new opportunities for brands to reach customers where they already spend their time.",
      },
      {
        type: 'paragraph',
        text: 'Live shopping events, influencer partnerships, and user-generated content are driving engagement and sales in ways traditional e-commerce never could. The line between social media and shopping is blurring, creating a new paradigm for online retail.',
      },
      {
        type: 'heading',
        text: 'Sustainability and Transparency',
      },
      {
        type: 'paragraph',
        text: "Consumers increasingly demand to know where products come from and how they&apos;re made. Successful e-commerce businesses in 2025 will need to provide complete transparency about their supply chains, manufacturing processes, and environmental impact. This isn&apos;t just about marketing - it&apos;s about building trust with conscious consumers.",
      },
      {
        type: 'conclusion',
        text: "The future of e-commerce is exciting and full of opportunity. Businesses that embrace these trends - AI personalization, AR experiences, social commerce, and sustainability - will be well-positioned to thrive in the evolving digital marketplace. The key is to start experimenting now, learning what works for your audience, and iterating quickly.",
      },
    ],
  },
  '2': {
    title: 'Building Accessible Web Applications: A Complete Guide',
    excerpt:
      'Learn how to create inclusive digital experiences that work for everyone, with practical tips and real-world examples.',
    category: 'Development',
    date: 'December 10, 2024',
    readTime: '12 min read',
    author: 'Marcus Chen',
    authorRole: 'Senior Frontend Developer',
    image: '♿',
    gradient: 'from-green-500/10 to-emerald-500/10',
    content: [
      {
        type: 'intro',
        text: 'Web accessibility is not just a nice-to-have feature - it\'s a fundamental right and legal requirement in many jurisdictions. Building accessible web applications ensures that everyone, regardless of their abilities, can use and enjoy your digital products.',
      },
      {
        type: 'heading',
        text: 'Why Accessibility Matters',
      },
      {
        type: 'paragraph',
        text: 'Over 1 billion people worldwide live with some form of disability. When we build inaccessible websites, we\'re excluding a significant portion of potential users and customers. Beyond the moral imperative, accessibility makes good business sense - accessible websites rank better in search engines, load faster, and provide better experiences for all users.',
      },
      {
        type: 'heading',
        text: 'Semantic HTML: The Foundation',
      },
      {
        type: 'paragraph',
        text: 'The first step to accessibility is using semantic HTML correctly. Instead of divs for everything, use proper elements: buttons for actions, links for navigation, headings for structure, and forms for input. Screen readers and assistive technologies rely on semantic markup to understand your content.',
      },
      {
        type: 'quote',
        text: 'Good HTML is 80% of accessibility. Get the basics right, and you\'re already ahead of most websites.',
      },
      {
        type: 'heading',
        text: 'Keyboard Navigation',
      },
      {
        type: 'paragraph',
        text: 'Not everyone uses a mouse. Many users rely on keyboards, switch devices, or other input methods. Every interactive element must be reachable and usable via keyboard. Test your entire application using only the Tab key - if you can\'t access something, neither can many of your users.',
      },
      {
        type: 'heading',
        text: 'ARIA Attributes',
      },
      {
        type: 'paragraph',
        text: 'ARIA (Accessible Rich Internet Applications) attributes help bridge gaps when HTML semantics fall short. Use them to provide additional context: aria-label for button purposes, aria-expanded for disclosure widgets, aria-live for dynamic content. But remember: the first rule of ARIA is "don\'t use ARIA" if HTML can do the job.',
      },
      {
        type: 'heading',
        text: 'Color and Contrast',
      },
      {
        type: 'paragraph',
        text: 'Color blindness affects approximately 8% of men and 0.5% of women. Never rely solely on color to convey information. Ensure sufficient contrast ratios: at least 4.5:1 for normal text and 3:1 for large text. Tools like WebAIM\'s contrast checker make this easy to verify.',
      },
      {
        type: 'conclusion',
        text: 'Building accessible web applications is an ongoing journey, not a destination. Start with the basics - semantic HTML, keyboard navigation, and proper contrast. Test with real users and assistive technologies. Remember: accessibility benefits everyone, creating better experiences for all your users.',
      },
    ],
  },
  '3': {
    title: 'UX Psychology: Understanding How Users Think',
    excerpt:
      'Dive deep into the psychology behind user behavior and learn how to design interfaces that resonate with your audience.',
    category: 'UX Design',
    date: 'December 5, 2024',
    readTime: '10 min read',
    author: 'Dr. Emily Rodriguez',
    authorRole: 'UX Researcher',
    image: '🧠',
    gradient: 'from-purple-500/10 to-pink-500/10',
    content: [
      {
        type: 'intro',
        text: 'Great UX design isn\'t magic - it\'s psychology. Understanding how people think, make decisions, and form habits is the key to creating interfaces that feel intuitive and delightful. Let\'s explore the cognitive principles that should guide every design decision.',
      },
      {
        type: 'heading',
        text: 'Cognitive Load Theory',
      },
      {
        type: 'paragraph',
        text: 'Our brains have limited capacity for processing information. Every unnecessary element, confusing label, or extra step increases cognitive load and makes your interface harder to use. The goal is to minimize mental effort while maximizing effectiveness.',
      },
      {
        type: 'paragraph',
        text: 'Design with cognitive load in mind: remove unnecessary elements, use clear language, provide helpful defaults, and break complex tasks into simple steps. Your users shouldn\'t need to think about how to use your interface - it should be obvious.',
      },
      {
        type: 'heading',
        text: 'The Psychology of Choice',
      },
      {
        type: 'paragraph',
        text: 'Hick\'s Law states that decision time increases with the number of choices. Too many options overwhelm users and lead to decision paralysis. The famous jam study showed that while 60% of people stopped to sample from a display of 24 jams, only 24% stopped for a display of 6 jams - but the conversion rate was nearly 10 times higher with fewer options.',
      },
      {
        type: 'quote',
        text: 'Simplicity is the ultimate sophistication. Every feature you add is a burden on your users.',
      },
      {
        type: 'heading',
        text: 'Recognition vs. Recall',
      },
      {
        type: 'paragraph',
        text: 'Recognition is easier than recall. Users find it much simpler to recognize information when they see it than to remember it from memory. This is why icons should be accompanied by labels, why autocomplete is so powerful, and why showing recent actions is better than making users remember what they did.',
      },
      {
        type: 'heading',
        text: 'The Power of Consistency',
      },
      {
        type: 'paragraph',
        text: 'Jakob\'s Law states that users spend most of their time on other websites, which means they prefer your site to work the same way as all the other sites they already know. Don\'t reinvent common patterns - use familiar conventions for navigation, form layouts, and interactions.',
      },
      {
        type: 'heading',
        text: 'Social Proof and Trust',
      },
      {
        type: 'paragraph',
        text: 'We look to others\' behavior to guide our own. Reviews, testimonials, user counts, and social media mentions all provide social proof that influences decisions. Display these prominently, but authentically - fake reviews and inflated numbers destroy trust.',
      },
      {
        type: 'conclusion',
        text: 'Understanding user psychology isn\'t about manipulation - it\'s about removing friction and creating experiences that align with how people naturally think and behave. Apply these principles thoughtfully, test with real users, and iterate based on feedback. The result will be interfaces that feel effortless and natural.',
      },
    ],
  },
  '4': {
    title: 'From Zero to Launch: Building a SaaS Product in 90 Days',
    excerpt:
      'A detailed case study of how we helped a startup go from concept to paying customers in just three months.',
    category: 'Case Study',
    date: 'November 28, 2024',
    readTime: '15 min read',
    author: 'Alex Thompson',
    authorRole: 'Product Manager',
    image: '🚀',
    gradient: 'from-orange-500/10 to-red-500/10',
    content: [
      {
        type: 'intro',
        text: 'When TaskFlow approached us, they had an idea and three months to validate it. Their goal: build an MVP, acquire their first 100 paying customers, and secure seed funding. Here\'s how we made it happen.',
      },
      {
        type: 'heading',
        text: 'Week 1-2: Discovery and Strategy',
      },
      {
        type: 'paragraph',
        text: 'We started with intensive customer research. Rather than assuming what users wanted, we interviewed 50 potential customers in their target market. These conversations revealed surprising insights that shaped the entire product strategy.',
      },
      {
        type: 'paragraph',
        text: 'Key insight: Users didn\'t need another feature-rich project management tool. They needed something dead simple that integrated with their existing workflow. This realization helped us ruthlessly prioritize features.',
      },
      {
        type: 'heading',
        text: 'Week 3-6: Design and MVP Development',
      },
      {
        type: 'paragraph',
        text: 'With clear direction from research, we moved fast. Using a modern tech stack (Next.js, TypeScript, Supabase), we built core features in parallel. The team worked in tight sprints, shipping working prototypes every week for user feedback.',
      },
      {
        type: 'quote',
        text: 'Speed beats perfection when validating a business idea. We shipped 80% solutions and iterated based on real usage.',
      },
      {
        type: 'heading',
        text: 'Week 7-8: Beta Testing',
      },
      {
        type: 'paragraph',
        text: 'We recruited 25 beta testers from our research interviews. Their daily usage revealed bugs, confusion points, and missing features we hadn\'t considered. More importantly, they validated that people would actually use and pay for the product.',
      },
      {
        type: 'heading',
        text: 'Week 9-10: Marketing and Pre-Launch',
      },
      {
        type: 'paragraph',
        text: 'While polishing the product, we built anticipation. A landing page, email sequence, and content marketing attracted 500 signups before launch. We also prepared launch materials for Product Hunt, Hacker News, and relevant subreddits.',
      },
      {
        type: 'heading',
        text: 'Week 11-12: Launch and Iteration',
      },
      {
        type: 'paragraph',
        text: 'Launch day exceeded expectations: 1,200 signups and 47 paying customers in the first 24 hours. But the real work began after launch - analyzing user behavior, fixing issues, and rapidly deploying improvements based on feedback.',
      },
      {
        type: 'heading',
        text: 'Results',
      },
      {
        type: 'paragraph',
        text: 'By day 90, TaskFlow had: 112 paying customers generating $4,200 MRR, 2,300 total signups with 18% conversion rate, and a product people loved (NPS score of 68). Most importantly, they secured $500K in seed funding to continue growing.',
      },
      {
        type: 'conclusion',
        text: 'Building a successful SaaS in 90 days is possible, but it requires ruthless focus, rapid iteration, and close customer collaboration. Start with customer research, ship fast, and let real usage guide your decisions. Perfect is the enemy of done - especially when validating a new business.',
      },
    ],
  },
  '5': {
    title: 'The Art of Minimalist Design: Less is More',
    excerpt:
      'Explore the principles of minimalist design and how to create beautiful, focused interfaces that users love.',
    category: 'Design',
    date: 'November 20, 2024',
    readTime: '7 min read',
    author: 'Isabella Martinez',
    authorRole: 'Creative Director',
    image: '🎨',
    gradient: 'from-pink-500/10 to-rose-500/10',
    content: [
      {
        type: 'intro',
        text: 'Minimalism in design isn\'t about removing everything - it\'s about removing anything that doesn\'t serve a purpose. It\'s the art of making every element count, creating clarity through simplicity, and letting content breathe.',
      },
      {
        type: 'heading',
        text: 'The Philosophy Behind Minimalism',
      },
      {
        type: 'paragraph',
        text: 'Minimalist design emerged from the principle that form should follow function. Every element should serve a purpose - whether functional or aesthetic. If it doesn\'t add value, it creates noise. The goal is to communicate as much as possible with as little as possible.',
      },
      {
        type: 'quote',
        text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupéry',
      },
      {
        type: 'heading',
        text: 'White Space: The Silent Designer',
      },
      {
        type: 'paragraph',
        text: 'White space (negative space) isn\'t empty space - it\'s a powerful design tool. It creates breathing room, establishes hierarchy, and guides the eye. Cramped interfaces feel overwhelming; generous spacing feels premium and confident.',
      },
      {
        type: 'heading',
        text: 'Typography as the Hero',
      },
      {
        type: 'paragraph',
        text: 'In minimalist design, typography carries more weight. Without decorative elements competing for attention, your choice of fonts, sizes, and spacing becomes critical. Clean, readable typography with clear hierarchy can create stunning interfaces with no other embellishment.',
      },
      {
        type: 'heading',
        text: 'Color Restraint',
      },
      {
        type: 'paragraph',
        text: 'Minimalist palettes typically use 2-3 colors maximum. A neutral base (black, white, gray) with one or two accent colors creates sophistication and focus. When every element isn\'t competing for attention through color, the important elements stand out naturally.',
      },
      {
        type: 'heading',
        text: 'Functional Animation',
      },
      {
        type: 'paragraph',
        text: 'Animation in minimalist design should be subtle and purposeful. Use motion to provide feedback, guide attention, or explain transitions - not to show off. Every animation should answer: "What does this help the user understand?"',
      },
      {
        type: 'conclusion',
        text: 'Minimalist design is harder than it looks. It requires discipline to resist adding "just one more thing" and confidence to let simplicity speak for itself. But when done right, minimalism creates timeless, elegant experiences that users love. Start by removing one unnecessary element from your design - you might be surprised how little you miss it.',
      },
    ],
  },
  '6': {
    title: 'SEO in 2025: What Actually Works',
    excerpt:
      'Cut through the noise and learn the SEO strategies that actually drive organic traffic and improve rankings.',
    category: 'Marketing',
    date: 'November 15, 2024',
    readTime: '11 min read',
    author: 'David Park',
    authorRole: 'SEO Specialist',
    image: '📈',
    gradient: 'from-yellow-500/10 to-amber-500/10',
    content: [
      {
        type: 'intro',
        text: 'SEO has changed dramatically. The old playbook of keyword stuffing, link farms, and thin content doesn\'t work anymore. In 2025, search engines are sophisticated enough to understand intent, context, and quality. Here\'s what actually moves the needle.',
      },
      {
        type: 'heading',
        text: 'E-E-A-T: Experience, Expertise, Authority, Trust',
      },
      {
        type: 'paragraph',
        text: 'Google\'s updated quality guidelines emphasize E-E-A-T, adding "Experience" to the original EAT framework. They want content from people who have real experience with the topics they\'re writing about. This means demonstrating first-hand knowledge, showing credentials, and building topical authority over time.',
      },
      {
        type: 'heading',
        text: 'Content Quality Over Quantity',
      },
      {
        type: 'paragraph',
        text: 'Publishing mediocre content frequently doesn\'t work anymore. One comprehensive, well-researched article that truly answers user questions will outperform ten shallow posts. Focus on depth, originality, and usefulness. Ask yourself: would someone bookmark this? Share it? Come back to it?',
      },
      {
        type: 'quote',
        text: 'The best SEO strategy is to create content so good that people link to it naturally because it\'s valuable.',
      },
      {
        type: 'heading',
        text: 'Technical SEO Fundamentals',
      },
      {
        type: 'paragraph',
        text: 'Page speed, mobile usability, and Core Web Vitals are ranking factors. But they\'re also table stakes - you need to get these right just to compete. Use tools like Lighthouse and PageSpeed Insights to identify issues. Prioritize: fast loading, mobile-first design, clean URLs, proper heading hierarchy, and schema markup.',
      },
      {
        type: 'heading',
        text: 'Search Intent Optimization',
      },
      {
        type: 'paragraph',
        text: 'Keywords matter less than intent. When someone searches "best project management tool", they want comparison content. When they search "how to manage remote teams", they want educational content. Match your content to intent, not just keywords.',
      },
      {
        type: 'heading',
        text: 'Link Building in 2025',
      },
      {
        type: 'paragraph',
        text: 'Quality backlinks still matter, but link building has evolved. Guest posting on spammy sites doesn\'t help. Instead: create link-worthy content (original research, comprehensive guides, tools), build genuine relationships with industry sites, and focus on earning links rather than building them.',
      },
      {
        type: 'heading',
        text: 'AI and Search',
      },
      {
        type: 'paragraph',
        text: 'AI overviews and chat-based search are changing how people find information. Optimize for featured snippets and AI-generated summaries by answering questions clearly and concisely. Structure content with clear headings, use Q&A formats, and provide direct answers.',
      },
      {
        type: 'conclusion',
        text: 'SEO in 2025 rewards the same things it always should have: quality content, technical excellence, and genuine authority. Skip the shortcuts and focus on creating value. Build a site that deserves to rank well, and the rankings will follow. The best SEO investment is in making your site genuinely useful.',
      },
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="container py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lg font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-4 py-1.5 rounded-full bg-foreground/10 font-semibold text-foreground">
                {post.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author & Share */}
            <div className="flex items-center justify-between pt-8 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-foreground/20 hover:bg-foreground/5 transition-all">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className={`aspect-[21/9] rounded-3xl bg-gradient-to-br ${post.gradient} flex items-center justify-center border border-border/50`}>
              <div className="text-9xl">{post.image}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'intro':
                  return (
                    <p
                      key={index}
                      className="text-xl leading-relaxed font-light text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left"
                    >
                      {block.text}
                    </p>
                  )
                case 'heading':
                  return (
                    <h2 key={index} className="text-3xl md:text-4xl font-bold tracking-tight pt-8">
                      {block.text}
                    </h2>
                  )
                case 'paragraph':
                  return (
                    <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                      {block.text}
                    </p>
                  )
                case 'quote':
                  return (
                    <blockquote
                      key={index}
                      className="relative pl-6 py-4 border-l-4 border-foreground/20 italic text-xl my-8"
                    >
                      <p className="text-foreground/80">{block.text}</p>
                    </blockquote>
                  )
                case 'conclusion':
                  return (
                    <div key={index} className="p-8 rounded-2xl bg-muted/50 border border-border/50 mt-12">
                      <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">{block.text}</p>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-3xl border-2 border-foreground/20 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5">
            <h2 className="text-3xl md:text-4xl font-bold">Enjoyed this article?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter for more insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl border-2 border-border/50 focus:border-foreground/40 bg-background focus:outline-none transition-colors"
              />
              <button className="px-8 py-3 rounded-xl bg-foreground text-background font-semibold hover:scale-105 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, relatedPost]) => (
                  <Link
                    key={key}
                    href={`/blog/${key}`}
                    className="group bg-background rounded-2xl p-6 border border-border/50 hover:border-foreground/20 transition-all hover:shadow-xl"
                  >
                    <div className="text-4xl mb-4">{relatedPost.image}</div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-foreground/10">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold mt-3 mb-2 line-clamp-2 group-hover:text-foreground/70 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

