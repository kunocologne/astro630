'use client'

import { useMemo } from 'react'
import CircularGallery from '@/components/gallery/CircularGallery'
import type { Gallery } from '@/types/payload-types'

interface GallerySectionProps {
  gallery?: Gallery | null
}

// Helper to extract image URL from Payload media object
function getImageUrl(image: unknown): string {
  if (!image) return ''

  // If it's already a string URL
  if (typeof image === 'string') {
    return image.startsWith('http') || image.startsWith('/') ? image : `/${image}`
  }

  // If it's a Payload media object
  if (typeof image === 'object' && image !== null) {
    const media = image as { url?: string; filename?: string }
    if (media.url) return media.url
    if (media.filename) return `/media/${media.filename}`
  }

  return ''
}

export function GallerySection({ gallery }: GallerySectionProps) {
  // Convert gallery images to CircularGallery format
  const items = useMemo(() => {
    if (!gallery || !Array.isArray(gallery.images)) return []

    return gallery.images
      .map((imageItem) => {
        const imageUrl = getImageUrl(imageItem?.image)
        const altText = imageItem?.alt || 'Gallery Image'

        // Only include items with valid image URLs
        if (!imageUrl) return null

        return {
          image: imageUrl,
          text: altText,
        }
      })
      .filter((item): item is { image: string; text: string } => item !== null)
  }, [gallery])

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Gallery</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Explore moments from our events, community initiatives, and creative journey.
          </p>
        </div>

        {/* Circular Gallery */}
        {items.length > 0 ? (
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              items={items}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              scrollSpeed={1}
            />
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-white/70">
              No gallery images available yet. Add images in Payload CMS to see them here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
