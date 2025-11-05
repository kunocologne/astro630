/**
 * Template Configuration Hook
 *
 * This hook provides access to the current template configuration
 * and variables for dynamic content rendering.
 */

import { getActiveTemplateConfig } from '@/config/active-template'
import { generateTemplateVariables, replaceVariables } from '@/lib/template/template-variables'
import { useMemo } from 'react'

export function useTemplateConfig() {
  const config = getActiveTemplateConfig()

  const variables = useMemo(() => {
    return generateTemplateVariables(config)
  }, [config])

  const replaceContent = useMemo(() => {
    return (text: string) => replaceVariables(text, variables)
  }, [variables])

  const getVariable = useMemo(() => {
    return (key: string, fallback?: string) => {
      const variable = variables.find((v) => v.key === key)
      return variable?.value || fallback || ''
    }
  }, [variables])

  const getBrandingCSS = useMemo(() => {
    return {
      '--primary-color': config.branding.primaryColor,
      '--secondary-color': config.branding.secondaryColor,
      '--accent-color': config.branding.accentColor,
      '--font-family': config.branding.fontFamily,
    } as React.CSSProperties
  }, [config.branding])

  return {
    config,
    variables,
    replaceContent,
    getVariable,
    getBrandingCSS,
    // Company info shortcuts
    companyName: config.company.name,
    companyTagline: config.company.tagline,
    companyDescription: config.company.description,
    companyIndustry: config.company.industry,
    companySize: config.company.size,
    companyLocation: config.company.location,
    // Contact info shortcuts
    contactEmail: config.contact.email,
    contactPhone: config.contact.phone,
    contactAddress: config.contact.address,
    contactWebsite: config.contact.website,
    // Social media shortcuts
    socialTwitter: config.contact.social?.twitter,
    socialLinkedin: config.contact.social?.linkedin,
    socialGithub: config.contact.social?.github,
    socialInstagram: config.contact.social?.instagram,
    // Branding shortcuts
    primaryColor: config.branding.primaryColor,
    secondaryColor: config.branding.secondaryColor,
    accentColor: config.branding.accentColor,
    fontFamily: config.branding.fontFamily,
    logoUrl: config.branding.logoUrl,
    faviconUrl: config.branding.faviconUrl,
    // Content shortcuts
    heroHeadline: config.content.hero.headline,
    heroSubheadline: config.content.hero.subheadline,
    heroCtaText: config.content.hero.ctaText,
    heroCtaLink: config.content.hero.ctaLink,
    aboutTitle: config.content.about.title,
    aboutDescription: config.content.about.description,
    aboutImageUrl: config.content.about.imageUrl,
    services: config.content.services || [],
    projects: config.content.projects || [],
    testimonials: config.content.testimonials || [],
  }
}
