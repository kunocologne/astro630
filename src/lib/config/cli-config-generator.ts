/**
 * CLI Configuration Generator
 *
 * This module provides functions to generate template configurations
 * based on user input from the CLI or other sources.
 */

import { TemplateConfig } from '@/config/active-template'

export interface UserInput {
  // Company information
  companyName: string
  companyTagline: string
  companyDescription: string
  companyIndustry: string
  companySize: 'startup' | 'small' | 'medium' | 'enterprise'
  companyLocation?: string
  companyFounded?: string

  // Contact information
  contactEmail: string
  contactPhone?: string
  contactAddress?: string
  contactWebsite?: string

  // Social media
  socialTwitter?: string
  socialLinkedin?: string
  socialGithub?: string
  socialInstagram?: string

  // Branding preferences
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  fontFamily?: string

  // Content preferences
  heroHeadline?: string
  heroSubheadline?: string
  heroCtaText?: string
  heroCtaLink?: string
  aboutTitle?: string
  aboutDescription?: string

  // Template selection
  template: string
  variation: string
}

/**
 * Generate template configuration from user input
 */
export function generateConfigFromUserInput(input: UserInput): TemplateConfig {
  const now = new Date().toISOString()

  return {
    template: input.template,
    variation: input.variation,
    company: {
      name: input.companyName,
      tagline: input.companyTagline,
      description: input.companyDescription,
      industry: input.companyIndustry,
      size: input.companySize,
      founded: input.companyFounded,
      location: input.companyLocation,
    },
    contact: {
      email: input.contactEmail,
      phone: input.contactPhone,
      address: input.contactAddress,
      website: input.contactWebsite,
      social: {
        twitter: input.socialTwitter,
        linkedin: input.socialLinkedin,
        github: input.socialGithub,
        instagram: input.socialInstagram,
      },
    },
    branding: {
      primaryColor: input.primaryColor || '#3b82f6',
      secondaryColor: input.secondaryColor || '#8b5cf6',
      accentColor: input.accentColor || '#06b6d4',
      fontFamily: input.fontFamily || 'Inter',
    },
    content: {
      hero: {
        headline: input.heroHeadline || `Welcome to ${input.companyName}`,
        subheadline: input.heroSubheadline || input.companyDescription,
        ctaText: input.heroCtaText || 'Get Started',
        ctaLink: input.heroCtaLink || '#contact',
      },
      about: {
        title: input.aboutTitle || 'About Us',
        description: input.aboutDescription || input.companyDescription,
      },
      services: generateDefaultServices(input.companyIndustry),
      projects: generateDefaultProjects(input.companyIndustry),
      testimonials: generateDefaultTestimonials(),
    },
    features: ['animations', 'portfolio', 'contact', 'responsive'],
    providers: {},
    metadata: {
      title: `${input.companyName} - ${input.companyTagline}`,
      description: input.companyDescription,
      keywords: generateKeywords(input.companyIndustry, input.companyName),
      author: input.companyName,
    },
    createdAt: now,
    updatedAt: now,
  }
}

/**
 * Generate default services based on industry
 */
function generateDefaultServices(industry: string) {
  const serviceMap: Record<string, Array<{ title: string; description: string; icon: string }>> = {
    Technology: [
      {
        title: 'Web Development',
        description: 'Modern, responsive web applications',
        icon: 'code',
      },
      {
        title: 'Mobile Apps',
        description: 'iOS and Android mobile applications',
        icon: 'smartphone',
      },
      { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure', icon: 'cloud' },
    ],
    Design: [
      { title: 'UI/UX Design', description: 'User-centered design solutions', icon: 'palette' },
      { title: 'Brand Identity', description: 'Complete brand identity systems', icon: 'award' },
      {
        title: 'Digital Marketing',
        description: 'Strategic digital marketing campaigns',
        icon: 'trending-up',
      },
    ],
    Consulting: [
      {
        title: 'Strategy Consulting',
        description: 'Business strategy and planning',
        icon: 'target',
      },
      {
        title: 'Process Optimization',
        description: 'Streamline business processes',
        icon: 'settings',
      },
      {
        title: 'Digital Transformation',
        description: 'Modernize your business operations',
        icon: 'refresh-cw',
      },
    ],
  }

  return serviceMap[industry] || serviceMap['Technology']
}

/**
 * Generate default projects based on industry
 */
function generateDefaultProjects(industry: string) {
  const projectMap: Record<
    string,
    Array<{
      title: string
      description: string
      imageUrl: string
      category: string
      tags: string[]
      featured: boolean
    }>
  > = {
    Technology: [
      {
        title: 'E-commerce Platform',
        description: 'Modern e-commerce solution with seamless user experience',
        imageUrl: '/media/portfolio-ecommerce-hero.jpg',
        category: 'Web Development',
        tags: ['React', 'Next.js', 'Tailwind'],
        featured: true,
      },
      {
        title: 'Mobile Banking App',
        description: 'Secure and intuitive banking experience',
        imageUrl: '/media/portfolio-mobile-banking.jpg',
        category: 'Mobile Development',
        tags: ['React Native', 'Security', 'UX'],
        featured: true,
      },
    ],
    Design: [
      {
        title: 'Brand Identity System',
        description: 'Complete brand identity for tech startup',
        imageUrl: '/media/portfolio-branding.jpg',
        category: 'Branding',
        tags: ['Logo Design', 'Branding', 'Identity'],
        featured: true,
      },
      {
        title: 'UI/UX Design',
        description: 'User-centered design for mobile app',
        imageUrl: '/media/portfolio-ui-ux.jpg',
        category: 'UI/UX',
        tags: ['Figma', 'Prototyping', 'UX'],
        featured: false,
      },
    ],
  }

  return projectMap[industry] || projectMap['Technology']
}

/**
 * Generate default testimonials
 */
function generateDefaultTestimonials() {
  return [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp',
      content: 'Exceptional work that exceeded our expectations. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'Professional, creative, and delivered on time. Perfect collaboration.',
    },
  ]
}

/**
 * Generate SEO keywords based on industry and company
 */
function generateKeywords(industry: string, companyName: string): string[] {
  const baseKeywords = [companyName, industry.toLowerCase()]

  const industryKeywords: Record<string, string[]> = {
    Technology: ['web development', 'software', 'digital solutions', 'tech consulting'],
    Design: ['graphic design', 'branding', 'ui ux', 'creative services'],
    Consulting: ['business consulting', 'strategy', 'process improvement', 'advisory'],
    Marketing: ['digital marketing', 'seo', 'social media', 'advertising'],
  }

  const industrySpecific = industryKeywords[industry] || industryKeywords['Technology']

  return [...baseKeywords, ...industrySpecific]
}

/**
 * Validate user input
 */
export function validateUserInput(input: Partial<UserInput>): string[] {
  const errors: string[] = []

  if (!input.companyName || input.companyName.trim().length === 0) {
    errors.push('Company name is required')
  }

  if (!input.companyTagline || input.companyTagline.trim().length === 0) {
    errors.push('Company tagline is required')
  }

  if (!input.companyDescription || input.companyDescription.trim().length === 0) {
    errors.push('Company description is required')
  }

  if (!input.contactEmail || input.contactEmail.trim().length === 0) {
    errors.push('Contact email is required')
  }

  if (input.contactEmail && !isValidEmail(input.contactEmail)) {
    errors.push('Invalid email format')
  }

  if (input.contactWebsite && !isValidUrl(input.contactWebsite)) {
    errors.push('Invalid website URL format')
  }

  if (input.primaryColor && !isValidColor(input.primaryColor)) {
    errors.push('Invalid primary color format')
  }

  if (input.secondaryColor && !isValidColor(input.secondaryColor)) {
    errors.push('Invalid secondary color format')
  }

  if (input.accentColor && !isValidColor(input.accentColor)) {
    errors.push('Invalid accent color format')
  }

  return errors
}

/**
 * Helper validation functions
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`)
    return true
  } catch {
    return false
  }
}

function isValidColor(color: string): boolean {
  const colorRegex = /^(#([0-9a-f]{3}){1,2}|rgb\(|rgba\(|hsl\(|hsla\(|[a-z]+)$/i
  return colorRegex.test(color)
}

/**
 * Generate configuration file content
 */
export function generateConfigFile(config: TemplateConfig): string {
  return `// Auto-generated template configuration
// Generated on: ${new Date().toISOString()}

export const TEMPLATE_CONFIG = ${JSON.stringify(config, null, 2)} as const

export default TEMPLATE_CONFIG
`
}

/**
 * Example CLI usage function
 */
export function exampleCLIUsage() {
  console.log(`
Example CLI usage for generating template configuration:

const userInput = {
  companyName: "Acme Corp",
  companyTagline: "Innovative Solutions",
  companyDescription: "We provide cutting-edge technology solutions for modern businesses.",
  companyIndustry: "Technology",
  companySize: "medium",
  companyLocation: "San Francisco, CA",
  contactEmail: "hello@acmecorp.com",
  contactPhone: "+1 (555) 123-4567",
  contactWebsite: "https://acmecorp.com",
  socialLinkedin: "acmecorp",
  socialTwitter: "@acmecorp",
  primaryColor: "#2563eb",
  secondaryColor: "#7c3aed",
  accentColor: "#06b6d4",
  template: "portfolio-bold",
  variation: "professional"
}

const config = generateConfigFromUserInput(userInput)
const configFile = generateConfigFile(config)

// Write to file
fs.writeFileSync('src/config/generated-config.ts', configFile)
`)
}
