'use client'

import Image from 'next/image'
import type { Charity } from '@/types/payload-types'

interface CharitySectionProps {
  charity: Charity | null
}

// Type for media/image objects from Payload CMS
type MediaReference =
  | string
  | {
      id?: string
      url?: string
      filename?: string
    }
  | null
  | undefined

// Extended Charity type to include fields from CMS that may not be in generated types
interface ExtendedCharity extends Charity {
  widgetUrl?: string
  images?: Array<{
    image?: MediaReference
    alt?: string
  }>
}

// Helper to get image URL
function getImageUrl(image: MediaReference): string {
  if (!image) return '/media/placeholder.jpg'
  if (typeof image === 'string') return image
  if (typeof image === 'object') {
    return image.url || image.filename || '/media/placeholder.jpg'
  }
  return '/media/placeholder.jpg'
}

// Helper to convert GoFundMe URL to embed URL
function getWidgetEmbedUrl(url: string): string {
  if (!url) return ''

  // If it's already an embed URL, return as is
  if (url.includes('/widget/') || url.includes('embed')) {
    return url
  }

  // Convert GoFundMe campaign URL to embed URL
  // Example: https://www.gofundme.com/f/campaign-name -> https://www.gofundme.com/f/campaign-name/widget
  if (url.includes('gofundme.com')) {
    // Remove query params and add /widget
    const baseUrl = url.split('?')[0]
    return `${baseUrl}/widget`
  }

  return url
}

export function CharitySection({ charity }: CharitySectionProps) {
  if (!charity) {
    return (
      <section className="relative bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <p className="text-center text-white/70">Charity information coming soon...</p>
        </div>
      </section>
    )
  }

  // Type-safe access to optional fields (extended from CMS schema)
  const extendedCharity = charity as ExtendedCharity
  const widgetUrl = extendedCharity.widgetUrl || ''
  const hasWidget = widgetUrl.trim() !== ''
  const images = extendedCharity.images || []

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            {charity.title || 'Making a Difference'}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            {charity.description ||
              'Supporting African communities through sustainable water and energy initiatives.'}
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Images */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            {images.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {images.map((item, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={getImageUrl(item.image)}
                      alt={item.alt || `Charity image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white/10">
                  <p className="text-sm text-white/50">Add images in CMS</p>
                </div>
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white/10">
                  <p className="text-sm text-white/50">Add images in CMS</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Fundraising Widget */}
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            {hasWidget ? (
              <div className="p-8">
                <h3 className="mb-6 text-2xl font-bold">Support Our Cause</h3>
                {/* Widget Embed */}
                <div className="w-full" style={{ minHeight: '400px' }}>
                  <iframe
                    src={getWidgetEmbedUrl(widgetUrl)}
                    width="100%"
                    height="100%"
                    style={{ minHeight: '400px', border: 'none' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="payment"
                    title="Fundraising Widget"
                  />
                </div>
              </div>
            ) : (
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Support Our Cause</h3>
                <p className="mb-6 text-sm text-gray-400">
                  Add your fundraising widget URL in Payload CMS to display the widget here.
                </p>
                <div className="rounded-lg bg-white/10 p-8 text-center">
                  <p className="text-sm text-white/50">Fundraising widget will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
