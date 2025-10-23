import { ArrowRight, Award, Calendar, ExternalLink, Github, Mail, MapPin, Phone, Star, Users } from 'lucide-react'
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-3xl font-black text-primary tracking-tight transform hover:scale-105 transition-transform duration-300">
              PORTFOLIO
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a href="#work" className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-300 relative group">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-300 relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#calendar" className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-300 relative group">
              CALENDAR
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-300 relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="bg-primary text-primary-foreground px-8 py-3 font-bold text-lg border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12 animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground font-bold text-sm border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12 animate-fade-in">
          <Award className="w-5 h-5 animate-bounce-gentle" />
          <span>AVAILABLE FOR PROJECTS</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-none tracking-tight animate-fade-in">
          CREATIVE
          <br />
          <span className="text-primary">DESIGNER</span>
          <br />
          & DEVELOPER
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-16 max-w-5xl mx-auto leading-relaxed font-medium animate-fade-in">
          CRAFTING DIGITAL EXPERIENCES THAT COMBINE BEAUTIFUL DESIGN WITH SEAMLESS FUNCTIONALITY.
          <br />
          <span className="text-foreground font-bold">LET&apos;S BUILD SOMETHING AMAZING TOGETHER.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in">
          <button className="group relative inline-flex items-center gap-4 px-10 py-4 bg-primary text-primary-foreground font-bold text-lg border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
            <Mail className="w-6 h-6" />
            START A PROJECT
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          
          <button className="group inline-flex items-center gap-4 px-10 py-4 border-4 border-foreground text-foreground font-bold text-lg bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ExternalLink className="w-6 h-6" />
            VIEW WORK
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-lg font-bold animate-fade-in">
          <div className="flex items-center gap-3 hover-scale">
            <Users className="w-6 h-6 animate-bounce-gentle" />
            <span>
              <span className="text-primary text-2xl">50+</span> HAPPY CLIENTS
            </span>
          </div>
          <div className="flex items-center gap-3 hover-scale">
            <Award className="w-6 h-6 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
            <span>
              <span className="text-primary text-2xl">5</span> DESIGN AWARDS
            </span>
          </div>
          <div className="flex items-center gap-3 hover-scale">
            <Calendar className="w-6 h-6 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
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
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  featured: boolean;
  color: string;
}

function WorkSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-COMMERCE PLATFORM",
      category: "WEB DESIGN",
      image: "/media/hat-logo.png",
      description: "MODERN E-COMMERCE SOLUTION WITH SEAMLESS USER EXPERIENCE",
      tags: ["REACT", "NEXT.JS", "TAILWIND"],
      featured: true,
      color: "bg-primary"
    },
    {
      id: 2,
      title: "MOBILE BANKING APP",
      category: "MOBILE DESIGN",
      image: "/media/tshirt-black.png",
      description: "SECURE AND INTUITIVE BANKING EXPERIENCE",
      tags: ["FIGMA", "PROTOTYPING", "UX"],
      featured: true,
      color: "bg-primary"
    },
    {
      id: 3,
      title: "SAAS DASHBOARD",
      category: "WEB DESIGN",
      image: "/media/tshirt-white.png",
      description: "ANALYTICS DASHBOARD WITH REAL-TIME DATA VISUALIZATION",
      tags: ["VUE.JS", "D3.JS", "ANALYTICS"],
      featured: false,
      color: "bg-primary"
    },
    {
      id: 4,
      title: "BRAND IDENTITY",
      category: "BRANDING",
      image: "/media/image-hero1.webp",
      description: "COMPLETE BRAND IDENTITY FOR TECH STARTUP",
      tags: ["LOGO DESIGN", "BRANDING", "IDENTITY"],
      featured: false,
      color: "bg-primary"
    }
  ]

  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-foreground mb-8 tracking-tight">
            FEATURED WORK
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            A SELECTION OF PROJECTS THAT SHOWCASE MY DESIGN AND DEVELOPMENT SKILLS
          </p>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projects.map((project: Project, index: number) => (
            <div 
              key={project.id}
              className={`group relative bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 transition-all duration-500 ease-out transform-gpu will-change-transform touch-manipulation ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 transform scale-100 md:scale-0 md:group-hover:scale-100 transition-transform duration-300 ease-out">
                    <div className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground font-bold text-sm border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">
                      <Star className="w-4 h-4 fill-current animate-bounce-gentle" />
                      <span>FEATURED</span>
                    </div>
                  </div>
                )}
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="bg-background/95 backdrop-blur-sm border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="font-black text-foreground mb-2 text-lg tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">{project.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Project Tags */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <button className="w-10 h-10 bg-background border-2 border-foreground flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 hover:scale-105 active:scale-95 touch-manipulation">
                    <ExternalLink className="w-5 h-5 transition-transform duration-200 hover:rotate-12 active:rotate-12" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, tagIndex: number) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm font-bold border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground hover:scale-105 active:scale-95 touch-manipulation"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s`,
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'translateY(20px)'
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
          <button className="inline-flex items-center gap-4 px-12 py-4 bg-primary text-primary-foreground font-bold text-lg border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 transition-all duration-500 ease-out hover:scale-105 active:scale-95 touch-manipulation group">
            <Github className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            VIEW ALL PROJECTS
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I&apos;m a passionate designer and developer with over 3 years of experience creating 
              digital experiences that users love. I specialize in modern web technologies 
              and have a keen eye for detail.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              When I&apos;m not coding, you can find me exploring new design trends, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Design Awards</div>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-lift">
              <Mail className="w-5 h-5" />
              Let&apos;s Work Together
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-black/20 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional Portrait</h3>
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
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
          Let&apos;s Create Something Amazing
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss how we can work together.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center hover-lift">
            <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Email</h3>
            <p className="text-primary-foreground/80">hello@portfolio.com</p>
          </div>
          
          <div className="text-center hover-lift">
            <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Phone</h3>
            <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center hover-lift">
            <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Location</h3>
            <p className="text-primary-foreground/80">San Francisco, CA</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-lift">
            <Mail className="w-5 h-5" />
            Send Message
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 hover-lift">
            <Github className="w-5 h-5" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating beautiful digital experiences that combine design and development for modern businesses.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-muted-foreground/10 rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-muted-foreground/10 rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Web Design</span></li>
              <li><span className="text-muted-foreground">Mobile Apps</span></li>
              <li><span className="text-muted-foreground">Branding</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function CalendarSection() {
  return (
    <section id="calendar" className="py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-foreground mb-8 tracking-tight">
            BOOK A MEETING
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            SCHEDULE A CONSULTATION TO DISCUSS YOUR PROJECT AND BRING YOUR IDEAS TO LIFE
          </p>
        </div>
        
        <div className="bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-500 ease-out transform-gpu will-change-transform">
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
    <div className="min-h-screen bg-background">
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