'use client'

import React from 'react'
import Image from 'next/image'

interface MediaProps {
  media?: {
    url?: string
    alt?: string
    width?: number
    height?: number
    filename?: string
  }
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

export const Media: React.FC<MediaProps> = ({ 
  media, 
  className = '', 
  priority = false,
  fill = false,
  sizes = '100vw'
}) => {
  if (!media?.url) {
    return (
      <div className={`bg-muted rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground">No image</span>
      </div>
    )
  }

  const imageProps = {
    src: media.url,
    alt: media.alt || media.filename || 'Media',
    className,
    priority,
    sizes
  }

  if (fill) {
    return (
      <Image
        src={media.url}
        alt={media.alt || media.filename || 'Media'}
        className={className}
        priority={priority}
        sizes={sizes}
        fill
        style={{ objectFit: 'cover' }}
      />
    )
  }

  return (
    <Image
      src={media.url}
      alt={media.alt || media.filename || 'Media'}
      className={className}
      priority={priority}
      sizes={sizes}
      width={media.width || 800}
      height={media.height || 600}
    />
  )
}
