/**
 * Template Variables System
 *
 * This system provides dynamic content replacement based on template configuration.
 * It allows templates to use variables that get replaced with actual company/content data.
 */

import { TemplateConfig } from '@/config/active-template'

export interface TemplateVariable {
  key: string
  value: string
  type: 'text' | 'html' | 'url' | 'email' | 'phone' | 'color'
  fallback?: string
}

/**
 * Generate template variables from configuration
 */
export function generateTemplateVariables(config: TemplateConfig): TemplateVariable[] {
  const variables: TemplateVariable[] = []

  // Company variables
  variables.push(
    { key: 'company.name', value: config.company.name, type: 'text' },
    { key: 'company.tagline', value: config.company.tagline, type: 'text' },
    { key: 'company.description', value: config.company.description, type: 'text' },
    { key: 'company.industry', value: config.company.industry, type: 'text' },
    { key: 'company.size', value: config.company.size, type: 'text' },
    { key: 'company.founded', value: config.company.founded || '', type: 'text' },
    { key: 'company.location', value: config.company.location || '', type: 'text' },
  )

  // Contact variables
  variables.push(
    { key: 'contact.email', value: config.contact.email, type: 'email' },
    { key: 'contact.phone', value: config.contact.phone || '', type: 'phone' },
    { key: 'contact.address', value: config.contact.address || '', type: 'text' },
    { key: 'contact.website', value: config.contact.website || '', type: 'url' },
  )

  // Social media variables
  if (config.contact.social) {
    variables.push(
      { key: 'social.twitter', value: config.contact.social.twitter || '', type: 'url' },
      { key: 'social.linkedin', value: config.contact.social.linkedin || '', type: 'url' },
      { key: 'social.github', value: config.contact.social.github || '', type: 'url' },
      { key: 'social.instagram', value: config.contact.social.instagram || '', type: 'url' },
    )
  }

  // Branding variables
  variables.push(
    { key: 'branding.primaryColor', value: config.branding.primaryColor, type: 'color' },
    { key: 'branding.secondaryColor', value: config.branding.secondaryColor, type: 'color' },
    { key: 'branding.accentColor', value: config.branding.accentColor, type: 'color' },
    { key: 'branding.fontFamily', value: config.branding.fontFamily, type: 'text' },
    { key: 'branding.logoUrl', value: config.branding.logoUrl || '', type: 'url' },
    { key: 'branding.faviconUrl', value: config.branding.faviconUrl || '', type: 'url' },
  )

  // Content variables
  variables.push(
    { key: 'content.hero.headline', value: config.content.hero.headline, type: 'text' },
    { key: 'content.hero.subheadline', value: config.content.hero.subheadline, type: 'text' },
    { key: 'content.hero.ctaText', value: config.content.hero.ctaText, type: 'text' },
    { key: 'content.hero.ctaLink', value: config.content.hero.ctaLink, type: 'url' },
    { key: 'content.about.title', value: config.content.about.title, type: 'text' },
    { key: 'content.about.description', value: config.content.about.description, type: 'text' },
    { key: 'content.about.imageUrl', value: config.content.about.imageUrl || '', type: 'url' },
  )

  // Metadata variables
  variables.push(
    { key: 'metadata.title', value: config.metadata.title, type: 'text' },
    { key: 'metadata.description', value: config.metadata.description, type: 'text' },
    { key: 'metadata.keywords', value: config.metadata.keywords.join(', '), type: 'text' },
    { key: 'metadata.author', value: config.metadata.author, type: 'text' },
  )

  return variables
}

/**
 * Replace variables in text content
 */
export function replaceVariables(text: string, variables: TemplateVariable[]): string {
  let result = text

  for (const variable of variables) {
    const placeholder = `{{${variable.key}}}`
    const value = variable.value || variable.fallback || ''

    // Apply type-specific formatting
    let formattedValue = value
    switch (variable.type) {
      case 'email':
        formattedValue = value ? `mailto:${value}` : ''
        break
      case 'phone':
        formattedValue = value ? `tel:${value}` : ''
        break
      case 'url':
        formattedValue = value ? (value.startsWith('http') ? value : `https://${value}`) : ''
        break
      case 'color':
        formattedValue = value || '#000000'
        break
      default:
        formattedValue = value
    }

    result = result.replace(new RegExp(placeholder, 'g'), formattedValue)
  }

  return result
}

/**
 * Replace variables in HTML content
 */
export function replaceVariablesInHTML(html: string, variables: TemplateVariable[]): string {
  let result = html

  for (const variable of variables) {
    const placeholder = `{{${variable.key}}}`
    const value = variable.value || variable.fallback || ''

    // For HTML content, we need to be more careful with escaping
    let formattedValue = value
    switch (variable.type) {
      case 'html':
        formattedValue = value // HTML is passed through as-is
        break
      case 'email':
        formattedValue = value ? `mailto:${value}` : ''
        break
      case 'phone':
        formattedValue = value ? `tel:${value}` : ''
        break
      case 'url':
        formattedValue = value ? (value.startsWith('http') ? value : `https://${value}`) : ''
        break
      case 'color':
        formattedValue = value || '#000000'
        break
      default:
        // Escape HTML for text content
        formattedValue = value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
    }

    result = result.replace(new RegExp(placeholder, 'g'), formattedValue)
  }

  return result
}

/**
 * Get CSS custom properties for branding
 */
export function getBrandingCSSVariables(config: TemplateConfig): Record<string, string> {
  return {
    '--primary-color': config.branding.primaryColor,
    '--secondary-color': config.branding.secondaryColor,
    '--accent-color': config.branding.accentColor,
    '--font-family': config.branding.fontFamily,
  }
}

/**
 * Generate dynamic metadata based on configuration
 */
export function generateDynamicMetadata(config: TemplateConfig) {
  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    author: config.metadata.author,
    openGraph: {
      title: config.metadata.title,
      description: config.metadata.description,
      type: 'website',
      siteName: config.company.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.metadata.title,
      description: config.metadata.description,
    },
  }
}

/**
 * Validate template variables
 */
export function validateTemplateVariables(variables: TemplateVariable[]): string[] {
  const errors: string[] = []

  for (const variable of variables) {
    if (!variable.key) {
      errors.push('Variable key is required')
    }

    if (variable.type === 'email' && variable.value && !isValidEmail(variable.value)) {
      errors.push(`Invalid email format for ${variable.key}`)
    }

    if (variable.type === 'url' && variable.value && !isValidUrl(variable.value)) {
      errors.push(`Invalid URL format for ${variable.key}`)
    }

    if (variable.type === 'color' && variable.value && !isValidColor(variable.value)) {
      errors.push(`Invalid color format for ${variable.key}`)
    }
  }

  return errors
}

/**
 * Helper functions for validation
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
  // Check for hex colors, rgb, rgba, hsl, hsla, or named colors
  const colorRegex = /^(#([0-9a-f]{3}){1,2}|rgb\(|rgba\(|hsl\(|hsla\(|[a-z]+)$/i
  return colorRegex.test(color)
}
