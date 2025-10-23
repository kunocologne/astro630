/**
 * Active Template Configuration
 * 
 * This file defines the current active template state for the JUNO system.
 * It serves as the explicit handoff point between the CLI and the Next.js app,
 * ensuring transparent state management and preventing implicit dependencies.
 */

export interface TemplateConfig {
  /** Template identifier (e.g., 'portfolio-bold', 'saas-futuristic') */
  template: string
  
  /** Template variation (e.g., 'minimal', 'bold', 'startup', 'enterprise') */
  variation: string
  
  /** Company/client name for personalization */
  companyName: string
  
  /** Tagline or description */
  tagline: string
  
  /** Features enabled for this template */
  features: string[]
  
  /** Provider configurations */
  providers: {
    database?: string
    paymentProvider?: string
    authProvider?: string
    cmsProvider?: string
    emailProvider?: string
    analyticsProvider?: string
  }
  
  /** Template-specific metadata */
  metadata: {
    title: string
    description: string
    keywords: string[]
    author: string
  }
  
  /** Creation timestamp */
  createdAt: string
  
  /** Last updated timestamp */
  updatedAt: string
}

/**
 * Default template configuration when no template is selected
 */
export const DEFAULT_TEMPLATE_CONFIG: TemplateConfig = {
  template: 'none',
  variation: 'default',
  companyName: 'JUNO',
  tagline: 'Master Template System',
  features: [],
  providers: {},
  metadata: {
    title: 'JUNO - Master Template System',
    description: 'Generate professional websites with beautiful animations and modern design',
    keywords: ['template', 'website', 'design', 'professional'],
    author: 'JUNO'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}

/**
 * Get the current active template configuration
 * This function reads from the active template file or returns default config
 */
export function getActiveTemplateConfig(): TemplateConfig {
  try {
    // In a real implementation, this would read from a file or database
    // For now, we'll return the default config
    return DEFAULT_TEMPLATE_CONFIG
  } catch (error) {
    console.warn('Failed to load active template config, using default:', error)
    return DEFAULT_TEMPLATE_CONFIG
  }
}

/**
 * Set the active template configuration
 * This function writes the config to the active template file
 */
export function setActiveTemplateConfig(config: Partial<TemplateConfig>): void {
  try {
    // In a real implementation, this would write to a file or database
    console.log('Setting active template config:', config)
  } catch (error) {
    console.error('Failed to set active template config:', error)
    throw error
  }
}

/**
 * Template registry - defines available templates and their configurations
 */
export const TEMPLATE_REGISTRY = {
  'portfolio-bold': {
    name: 'Portfolio Bold',
    description: 'Professional portfolio with beautiful animations and bento box layouts',
    variations: ['minimal', 'bold', 'professional'] as const,
    features: ['animations', 'portfolio', 'contact'],
    requiredDependencies: ['framer-motion', 'lucide-react']
  },
  'saas-futuristic': {
    name: 'SaaS Futuristic',
    description: 'Modern SaaS landing page with cutting-edge design',
    variations: ['startup', 'enterprise'] as const,
    features: ['pricing', 'features', 'testimonials'],
    requiredDependencies: ['framer-motion', 'lucide-react']
  },
  'agency-corporate': {
    name: 'Agency Corporate',
    description: 'Professional agency website with corporate branding',
    variations: ['corporate', 'creative'] as const,
    features: ['services', 'team', 'case-studies'],
    requiredDependencies: ['framer-motion', 'lucide-react']
  }
} as const

/**
 * Check if a template is available
 */
export function isTemplateAvailable(template: string): boolean {
  return template in TEMPLATE_REGISTRY
}

/**
 * Get template information
 */
export function getTemplateInfo(template: string) {
  return TEMPLATE_REGISTRY[template as keyof typeof TEMPLATE_REGISTRY]
}

/**
 * Validate template configuration
 */
export function validateTemplateConfig(config: Partial<TemplateConfig>): string[] {
  const errors: string[] = []
  
  if (config.template && !isTemplateAvailable(config.template)) {
    errors.push(`Template '${config.template}' is not available`)
  }
  
  if (config.template && config.variation) {
    const templateInfo = getTemplateInfo(config.template)
    if (templateInfo && !(templateInfo.variations as readonly string[]).includes(config.variation)) {
      errors.push(`Variation '${config.variation}' is not available for template '${config.template}'`)
    }
  }
  
  if (!config.companyName || config.companyName.trim().length === 0) {
    errors.push('Company name is required')
  }
  
  if (!config.tagline || config.tagline.trim().length === 0) {
    errors.push('Tagline is required')
  }
  
  return errors
}
