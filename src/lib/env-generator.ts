/**
 * Environment File Generator
 * Creates .env.local with CMS toggle settings
 */

export function generateEnvFile(options: {
  cmsEnabled: boolean
  cmsType?: string
  projectName: string
}) {
  const envContent = [
    '# JUNO Environment Configuration',
    `# Generated for: ${options.projectName}`,
    '',
    '# CMS Configuration',
    `CMS_ENABLED=${options.cmsEnabled}`,
    '',
    '# Database Configuration',
    'DATABASE_URL=file:./database.sqlite',
    '',
    '# Payload CMS Configuration',
    'PAYLOAD_SECRET=your-secret-key-here',
    '',
    '# Next.js Configuration',
    'NEXT_PUBLIC_SITE_URL=http://localhost:3000',
    '',
    '# Email Configuration (if needed)',
    '# RESEND_API_KEY=your_resend_api_key',
    '# SENDGRID_API_KEY=your_sendgrid_api_key',
    '',
    '# Analytics Configuration (if needed)',
    '# NEXT_PUBLIC_GA_ID=your_ga4_measurement_id',
    '# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain',
    '',
    '# CMS Type Configuration',
    options.cmsType ? `CMS_TYPE=${options.cmsType}` : '# CMS_TYPE=basic',
    '',
    '# Toggle Instructions',
    '# To enable/disable CMS:',
    '# 1. Change CMS_ENABLED=true/false',
    '# 2. Restart the development server',
    '# 3. Visit /admin to manage CMS settings',
  ]

  return envContent.join('\n')
}

export function getCMSInstructions(cmsEnabled: boolean, cmsType?: string) {
  if (!cmsEnabled) {
    return {
      status: 'Static Site Mode',
      description: 'CMS is disabled. Site runs as a static website.',
      instructions: [
        'Content is managed through code files',
        'No admin panel available',
        'Faster performance, simpler deployment',
        'To enable CMS later, set CMS_ENABLED=true in .env.local',
      ],
    }
  }

  const cmsTypes = {
    basic: {
      features: ['Pages', 'Blog Posts', 'Contact Forms'],
      admin: '/admin',
      description: 'Essential content management',
    },
    ecommerce: {
      features: ['Products', 'Orders', 'Customers', 'Inventory'],
      admin: '/admin',
      description: 'Full e-commerce functionality',
    },
    enterprise: {
      features: ['Multi-site', 'Advanced Permissions', 'API Access'],
      admin: '/admin',
      description: 'Enterprise-grade content management',
    },
  }

  const config = cmsTypes[cmsType as keyof typeof cmsTypes] || cmsTypes.basic

  return {
    status: 'CMS Enabled',
    description: config.description,
    features: config.features,
    adminUrl: config.admin,
    instructions: [
      'Access admin panel at /admin',
      'Manage content through the CMS interface',
      'Content changes are reflected immediately',
      'To disable CMS, set CMS_ENABLED=false in .env.local',
    ],
  }
}
