'use client'

import Image from 'next/image'
import React from 'react'

interface MediaProps {
  media?: {
    url?: string
    alt?: string
    width?: number
    height?: number
    filename?: string
  }
  resource?: any
  src?: any
  className?: string
  imgClassName?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  width?: number
  height?: number
}

export const Media: React.FC<MediaProps> = ({
  media,
  resource,
  src,
  className = '',
  imgClassName = '',
  priority = false,
  fill = false,
  sizes = '100vw',
  width,
  height,
}) => {
  if (!media?.url) {
    return (
      <div className={`bg-muted flex items-center justify-center rounded-lg ${className}`}>
        <span className="text-muted-foreground">No image</span>
      </div>
    )
  }

  const imageProps = {
    src: media.url,
    alt: media.alt || media.filename || 'Media',
    className,
    priority,
    sizes,
  }

  if (fill) {
    return (
      <Image
        src={media.url}
        alt={media.alt || media.filename || 'Media'}
        className={imgClassName || className}
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
      className={imgClassName || className}
      priority={priority}
      sizes={sizes}
      width={media.width || 800}
      height={media.height || 600}
    />
  )
}
