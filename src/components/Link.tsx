'use client'

import Link from 'next/link'
import React from 'react'

interface CMSLinkProps {
  href?: string
  children?: React.ReactNode
  className?: string
  target?: string
  rel?: string
  size?: string
  appearance?: string | null
  type?: string | null
  newTab?: boolean | null
  reference?: any
  url?: string | null
  label?: string
}

export const CMSLink: React.FC<CMSLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  target,
  rel 
}) => {
  if (!href) {
    return <span className={className}>{children}</span>
  }

  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        className={className}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
