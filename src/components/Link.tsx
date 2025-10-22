'use client'

import React from 'react'
import Link from 'next/link'

interface CMSLinkProps {
  href?: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
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
