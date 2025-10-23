import {
  ArrowRight,
  Award,
  Calendar,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio - Professional Creative',
  description: 'Professional portfolio with beautiful animations and modern design',
  keywords: ['portfolio', 'design', 'creative', 'professional'],
  authors: [{ name: 'JUNO' }],
}

/**
 * Master-Level Portfolio Template
 *
 * This portfolio follows Awwwards standards with:
 * - Award-winning aesthetics and typography
 * - Clean Tangerine theme design system
 * - Professional layout and spacing
 * - High-quality images and content
 */

function Navigation() {
  return (
    <nav className="bg-background border-foreground fixed top-0 right-0 left-0 z-50 border-b-4">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary transform text-3xl font-black tracking-tight transition-transform duration-300 hover:scale-105">
              PORTFOLIO
            </div>
          </div>
          <div className="hidden items-center space-x-12 md:flex">
            <a
              href="#work"
              className="text-foreground hover:text-primary group relative text-lg font-bold transition-colors duration-300"
            >
              WORK
              <span className="bg-primary absolute -bottom-1 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary group relative text-lg font-bold transition-colors duration-300"
            >
              ABOUT
              <span className="bg-primary absolute -bottom-1 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#calendar"
              className="text-foreground hover:text-primary group relative text-lg font-bold transition-colors duration-300"
            >
              CALENDAR
              <span className="bg-primary absolute -bottom-1 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary group relative text-lg font-bold transition-colors duration-300"
            >
              CONTACT
              <span className="bg-primary absolute -bottom-1 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="bg-primary text-primary-foreground border-foreground border-4 px-8 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-secondary border-foreground animate-float absolute top-20 left-20 h-32 w-32 rotate-12 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
        <div
          className="bg-accent border-foreground animate-float absolute top-40 right-32 h-24 w-24 -rotate-12 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="bg-primary border-foreground animate-float absolute bottom-32 left-1/4 h-20 w-20 rotate-45 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
        {/* Badge */}
        <div className="bg-secondary text-secondary-foreground border-foreground animate-fade-in mb-12 inline-flex items-center gap-3 border-4 px-6 py-3 text-sm font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Award className="animate-bounce-gentle h-5 w-5" />
          <span>AVAILABLE FOR PROJECTS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-foreground animate-fade-in mb-8 text-6xl leading-none font-black tracking-tight sm:text-7xl lg:text-8xl">
          CREATIVE
          <br />
          <span className="text-primary">DESIGNER</span>
          <br />& DEVELOPER
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground animate-fade-in mx-auto mb-16 max-w-5xl text-xl leading-relaxed font-medium sm:text-2xl lg:text-3xl">
          CRAFTING DIGITAL EXPERIENCES THAT COMBINE BEAUTIFUL DESIGN WITH SEAMLESS FUNCTIONALITY.
          <br />
          <span className="text-foreground font-bold">
            LET&apos;S BUILD SOMETHING AMAZING TOGETHER.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in mb-20 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="group bg-primary text-primary-foreground border-foreground relative inline-flex items-center gap-4 border-4 px-10 py-4 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Mail className="h-6 w-6" />
            START A PROJECT
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          <button className="group border-foreground text-foreground bg-background hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-4 border-4 px-10 py-4 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ExternalLink className="h-6 w-6" />
            VIEW WORK
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in flex flex-col items-center justify-center gap-12 text-lg font-bold sm:flex-row">
          <div className="hover-scale flex items-center gap-3">
            <Users className="animate-bounce-gentle h-6 w-6" />
            <span>
              <span className="text-primary text-2xl">50+</span> HAPPY CLIENTS
            </span>
          </div>
          <div className="hover-scale flex items-center gap-3">
            <Award className="animate-bounce-gentle h-6 w-6" style={{ animationDelay: '0.5s' }} />
            <span>
              <span className="text-primary text-2xl">5</span> DESIGN AWARDS
            </span>
          </div>
          <div className="hover-scale flex items-center gap-3">
            <Calendar className="animate-bounce-gentle h-6 w-6" style={{ animationDelay: '1s' }} />
            <span>
              <span className="text-primary text-2xl">3+</span> YEARS EXPERIENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  tags: string[]
  featured: boolean
  color: string
}

function WorkSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-COMMERCE PLATFORM',
      category: 'WEB DESIGN',
      image: '/media/hat-logo.png',
      description: 'MODERN E-COMMERCE SOLUTION WITH SEAMLESS USER EXPERIENCE',
      tags: ['REACT', 'NEXT.JS', 'TAILWIND'],
      featured: true,
      color: 'bg-primary',
    },
    {
      id: 2,
      title: 'MOBILE BANKING APP',
      category: 'MOBILE DESIGN',
      image: '/media/tshirt-black.png',
      description: 'SECURE AND INTUITIVE BANKING EXPERIENCE',
      tags: ['FIGMA', 'PROTOTYPING', 'UX'],
      featured: true,
      color: 'bg-primary',
    },
    {
      id: 3,
      title: 'SAAS DASHBOARD',
      category: 'WEB DESIGN',
      image: '/media/tshirt-white.png',
      description: 'ANALYTICS DASHBOARD WITH REAL-TIME DATA VISUALIZATION',
      tags: ['VUE.JS', 'D3.JS', 'ANALYTICS'],
      featured: false,
      color: 'bg-primary',
    },
    {
      id: 4,
      title: 'BRAND IDENTITY',
      category: 'BRANDING',
      image: '/media/image-hero1.webp',
      description: 'COMPLETE BRAND IDENTITY FOR TECH STARTUP',
      tags: ['LOGO DESIGN', 'BRANDING', 'IDENTITY'],
      featured: false,
      color: 'bg-primary',
    },
  ]

  return (
    <section id="work" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <h2 className="text-foreground mb-8 text-6xl font-black tracking-tight sm:text-7xl">
            FEATURED WORK
          </h2>
          <p className="text-muted-foreground mx-auto max-w-4xl text-2xl font-medium">
            A SELECTION OF PROJECTS THAT SHOWCASE MY DESIGN AND DEVELOPMENT SKILLS
          </p>
        </div>

        {/* Project Grid */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className={`group bg-card border-foreground relative transform-gpu touch-manipulation border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out will-change-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              {/* Project Image */}
              <div className="bg-muted relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 scale-100 transform transition-transform duration-300 ease-out md:scale-0 md:group-hover:scale-100">
                    <div className="bg-primary text-primary-foreground border-foreground flex items-center gap-2 border-2 px-3 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Star className="animate-bounce-gentle h-4 w-4 fill-current" />
                      <span>FEATURED</span>
                    </div>
                  </div>
                )}

                {/* Project Info Overlay */}
                <div className="absolute right-4 bottom-4 left-4 translate-y-0 transform opacity-100 transition-all duration-500 ease-out md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div className="bg-background/95 border-foreground border-2 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-black tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Tags */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <button className="bg-background border-foreground text-foreground hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground flex h-10 w-10 touch-manipulation items-center justify-center border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:scale-105 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:scale-95 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <ExternalLink className="h-5 w-5 transition-transform duration-200 hover:rotate-12 active:rotate-12" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="bg-muted text-muted-foreground border-foreground hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground touch-manipulation border-2 px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:scale-105 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:scale-95 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
                      style={{
                        animationDelay: `${index * 0.1 + tagIndex * 0.05}s`,
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'translateY(20px)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary text-primary-foreground border-foreground group inline-flex touch-manipulation items-center gap-4 border-4 px-12 py-4 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out hover:translate-x-1 hover:translate-y-1 hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:scale-95 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Github className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
            VIEW ALL PROJECTS
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-foreground mb-6 text-4xl font-bold sm:text-5xl">About Me</h2>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              I&apos;m a passionate designer and developer with over 3 years of experience creating
              digital experiences that users love. I specialize in modern web technologies and have
              a keen eye for detail.
            </p>
            <p className="text-muted-foreground mb-8 text-lg">
              When I&apos;m not coding, you can find me exploring new design trends, contributing to
              open source projects, or sharing knowledge with the developer community.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-8">
              <div className="hover-scale text-center">
                <div className="text-primary mb-2 text-3xl font-bold">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="hover-scale text-center">
                <div className="text-primary mb-2 text-3xl font-bold">3+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="hover-scale text-center">
                <div className="text-primary mb-2 text-3xl font-bold">100%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="hover-scale text-center">
                <div className="text-primary mb-2 text-3xl font-bold">5</div>
                <div className="text-muted-foreground text-sm">Design Awards</div>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground hover-lift inline-flex transform items-center gap-3 rounded-lg px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Mail className="h-5 w-5" />
              Let&apos;s Work Together
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="from-primary to-accent aspect-square rounded-xl bg-gradient-to-br shadow-2xl">
              <div className="absolute inset-0 rounded-xl bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-float mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Users className="h-12 w-12" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Professional Portrait</h3>
                  <p className="text-white/80">High-quality headshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-primary relative overflow-hidden py-24">
      <div className="from-primary via-primary/90 to-accent/20 absolute inset-0 bg-gradient-to-r" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-primary-foreground mb-6 text-4xl font-bold sm:text-5xl">
          Let&apos;s Create Something Amazing
        </h2>
        <p className="text-primary-foreground/80 mx-auto mb-12 max-w-2xl text-xl">
          Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss
          how we can work together.
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="hover-lift text-center">
            <div className="bg-primary-foreground/20 animate-bounce-gentle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm">
              <Mail className="text-primary-foreground h-8 w-8" />
            </div>
            <h3 className="text-primary-foreground mb-2 text-lg font-semibold">Email</h3>
            <p className="text-primary-foreground/80">hello@portfolio.com</p>
          </div>

          <div className="hover-lift text-center">
            <div
              className="bg-primary-foreground/20 animate-bounce-gentle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm"
              style={{ animationDelay: '0.5s' }}
            >
              <Phone className="text-primary-foreground h-8 w-8" />
            </div>
            <h3 className="text-primary-foreground mb-2 text-lg font-semibold">Phone</h3>
            <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
          </div>

          <div className="hover-lift text-center">
            <div
              className="bg-primary-foreground/20 animate-bounce-gentle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm"
              style={{ animationDelay: '1s' }}
            >
              <MapPin className="text-primary-foreground h-8 w-8" />
            </div>
            <h3 className="text-primary-foreground mb-2 text-lg font-semibold">Location</h3>
            <p className="text-primary-foreground/80">San Francisco, CA</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="bg-primary-foreground text-primary hover-lift inline-flex transform items-center gap-3 rounded-lg px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Mail className="h-5 w-5" />
            Send Message
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-lift inline-flex items-center gap-3 rounded-lg border-2 px-8 py-4 font-semibold transition-all duration-300">
            <Github className="h-5 w-5" />
            View GitHub
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-primary mb-4 text-2xl font-bold">Portfolio</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating beautiful digital experiences that combine design and development for modern
              businesses.
            </p>
            <div className="flex space-x-4">
              <button className="bg-muted-foreground/10 hover:bg-muted-foreground/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button className="bg-muted-foreground/10 hover:bg-muted-foreground/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#work"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Web Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Mobile Apps</span>
              </li>
              <li>
                <span className="text-muted-foreground">Branding</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-8 border-t pt-8 text-center">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function CalendarSection() {
  return (
    <section id="calendar" className="bg-muted py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <h2 className="text-foreground mb-8 text-6xl font-black tracking-tight sm:text-7xl">
            BOOK A MEETING
          </h2>
          <p className="text-muted-foreground mx-auto max-w-4xl text-2xl font-medium">
            SCHEDULE A CONSULTATION TO DISCUSS YOUR PROJECT AND BRING YOUR IDEAS TO LIFE
          </p>
        </div>

        <div className="bg-card border-foreground transform-gpu border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out will-change-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-8">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2RQiJRHR1o2AQFFzOw7QJC4oAow3haionWzEeuVMDjSf9xgJu8WoicFYH73G3Ek0PHnRLkAgoy?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-lg"
              title="Google Calendar Appointment Scheduling"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <CalendarSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
