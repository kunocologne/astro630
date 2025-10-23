/**
 * Dynamic Template Loader
 * 
 * This module handles dynamic imports of template-specific components
 * to prevent unnecessary loading and improve performance.
 */

import { getActiveTemplateConfig } from '@/config/active-template'

/**
 * Template component mapping
 * Maps template names to their component paths for dynamic imports
 */
const TEMPLATE_COMPONENT_MAP = {
  'portfolio-bold': {
    page: () => import('@/templates/portfolio-bold/page')
  },
  'saas-futuristic': {
    page: () => import('@/templates/saas-futuristic/page')
  },
  'agency-corporate': {
    page: () => import('@/templates/agency-corporate/page')
  }
} as const

/**
 * Load template page component dynamically
 */
export async function loadTemplatePage(template: string) {
  try {
    const templateConfig = getActiveTemplateConfig()
    const templateKey = template || templateConfig.template
    
    if (templateKey === 'none' || !(templateKey in TEMPLATE_COMPONENT_MAP)) {
      // Return a default template selection page
      return await import('@/app/templates/page')
    }
    
    const templateMap = TEMPLATE_COMPONENT_MAP[templateKey as keyof typeof TEMPLATE_COMPONENT_MAP]
    
    if (!templateMap?.page) {
      throw new Error(`Template page not found for: ${templateKey}`)
    }
    
    return await templateMap.page()
  } catch (error) {
    console.error('Failed to load template page:', error)
    // Fallback to template selection page
    return await import('@/app/templates/page')
  }
}

/**
 * Load template component dynamically
 */
export async function loadTemplateComponent(template: string, componentName: string) {
  try {
    const templateConfig = getActiveTemplateConfig()
    const templateKey = template || templateConfig.template
    
    if (templateKey === 'none' || !(templateKey in TEMPLATE_COMPONENT_MAP)) {
      throw new Error(`Template not found: ${templateKey}`)
    }
    
    // For now, we only have page-level templates
    // Individual components will be loaded within the template pages
    throw new Error(`Component loading not yet implemented for template: ${templateKey}`)
  } catch (error) {
    console.error(`Failed to load template component '${componentName}':`, error)
    throw error
  }
}

/**
 * Preload template components for better performance
 */
export async function preloadTemplateComponents(template: string) {
  try {
    const templateConfig = getActiveTemplateConfig()
    const templateKey = template || templateConfig.template
    
    if (templateKey === 'none' || !(templateKey in TEMPLATE_COMPONENT_MAP)) {
      return
    }
    
    const templateMap = TEMPLATE_COMPONENT_MAP[templateKey as keyof typeof TEMPLATE_COMPONENT_MAP]
    
    if (!templateMap?.page) {
      return
    }
    
    // Preload the template page
    await templateMap.page().catch(error => {
      console.warn(`Failed to preload template page:`, error)
      return null
    })
  } catch (error) {
    console.error('Failed to preload template components:', error)
  }
}

/**
 * Get template metadata
 */
export function getTemplateMetadata(template: string) {
  const templateConfig = getActiveTemplateConfig()
  const templateKey = template || templateConfig.template
  
  return {
    template: templateKey,
    variation: templateConfig.variation,
    companyName: templateConfig.companyName,
    tagline: templateConfig.tagline,
    features: templateConfig.features,
    metadata: templateConfig.metadata
  }
}

/**
 * Check if template has specific feature
 */
export function hasTemplateFeature(template: string, feature: string): boolean {
  const templateConfig = getActiveTemplateConfig()
  return templateConfig.features.includes(feature)
}

/**
 * Get template dependencies
 */
export function getTemplateDependencies(template: string): string[] {
  const templateConfig = getActiveTemplateConfig()
  const templateKey = template || templateConfig.template
  
  // This would typically come from the template registry
  // For now, return common dependencies
  const commonDependencies = ['framer-motion', 'lucide-react', '@radix-ui/react-*']
  
  return commonDependencies
}
