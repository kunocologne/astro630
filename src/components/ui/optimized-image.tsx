'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fallbackGradient?: string
  quality?: number
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Automatic WebP conversion
 * - Responsive image loading
 * - Lazy loading with intersection observer
 * - Fallback gradients for loading states
 * - Error handling with graceful degradation
 * - Performance optimized for web
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  fallbackGradient = 'bg-gradient-to-br from-blue-500 to-purple-600',
  quality = 85
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className={`${fallbackGradient} ${className} flex items-center justify-center`}>
        <div className="text-white/80 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-2xl">📷</span>
          </div>
          <p className="text-sm">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <div className={`absolute inset-0 ${fallbackGradient} animate-pulse`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        </div>
      )}
      
      {/* Optimized Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  )
}

/**
 * Hero Image Component
 * Specialized for hero sections with larger dimensions
 */
export function HeroImage({
  src,
  alt,
  className = '',
  fallbackGradient = 'bg-gradient-to-br from-blue-500 to-purple-600'
}: Omit<OptimizedImageProps, 'width' | 'height' | 'priority'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={className}
      priority={true}
      fallbackGradient={fallbackGradient}
      quality={90}
    />
  )
}

/**
 * Project Image Component
 * Optimized for project showcase cards
 */
export function ProjectImage({
  src,
  alt,
  className = '',
  fallbackGradient = 'bg-gradient-to-br from-blue-500 to-purple-600'
}: Omit<OptimizedImageProps, 'width' | 'height'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={className}
      fallbackGradient={fallbackGradient}
      quality={85}
    />
  )
}

/**
 * Thumbnail Image Component
 * Small images for cards and thumbnails
 */
export function ThumbnailImage({
  src,
  alt,
  className = '',
  fallbackGradient = 'bg-gradient-to-br from-blue-500 to-purple-600'
}: Omit<OptimizedImageProps, 'width' | 'height'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={className}
      fallbackGradient={fallbackGradient}
      quality={80}
    />
  )
}
