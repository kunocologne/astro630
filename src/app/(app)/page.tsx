import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SimpleNavbar } from '@/components/SimpleNavbar'
import { SimpleFooter } from '@/components/sections/SimpleFooter'
import { ProductsHero } from '@/components/sections/ProductsHero'
import { CharitySection } from '@/components/sections/CharitySection'
import { EventsSection } from '@/components/sections/EventsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSectionNew } from '@/components/sections/ContactSectionNew'
import type { Product, Event, Charity, Gallery } from '@/types/payload-types'

export const metadata: Metadata = {
  title: '6:30SHOP - Curated Merch & Culture',
  description:
    'Curated merch that embodies our creative vision and artistic energy. Wear the movement, share the culture, express your style.',
}

async function getHomePageData() {
  try {
    const headersList = await headers()
    const payload = await getPayload({ config: configPromise })
    const { user } = await payload.auth({ headers: headersList })

    // Fetch featured products (published, featured, no limit)
    // Note: Deleted items are automatically excluded by Payload
    let products: Product[] = []
    try {
      // Fetch products - check both status fields (custom status and Payload's _status for drafts)
      const productsResult = await payload.find({
        collection: 'products',
        where: {
          and: [{ status: { equals: 'published' } }, { featured: { equals: true } }],
        },
        // No limit - show all featured products
        depth: 2,
        // Use admin access to bypass access control and see all products
        user,
        overrideAccess: true,
      })

      // Filter to ensure we only get valid products with all required data
      products = (productsResult.docs || []).filter((p) => {
        // Must have all required fields
        if (!p || !p.id) return false
        if (!p.title) return false
        if (p.price === undefined || p.price === null) return false
        if (!p.gallery || p.gallery.length === 0) return false
        // Must be published and featured
        if (p.status !== 'published') return false
        if (!p.featured) return false
        return true
      }) as Product[]

      // Debug logging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(
          `[Homepage] Query found ${productsResult.docs.length} products, filtered to ${products.length} valid products`,
        )
        if (products.length === 0 && productsResult.docs.length > 0) {
          console.log('⚠️ Products found but filtered out. Checking why...')
          productsResult.docs.forEach((p) => {
            console.log(
              `  - ${p.title}: status=${p.status}, featured=${p.featured}, hasImage=${!!p.gallery?.length}, hasPrice=${p.price !== undefined}`,
            )
          })
        }
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      // In development, log more details
      if (process.env.NODE_ENV === 'development') {
        console.error('Product fetch error details:', error)
      }
    }

    // Fetch upcoming events (status: available or upcoming, limit 6)
    // Note: Deleted items are automatically excluded by Payload
    let events: Event[] = []
    try {
      const eventsResult = await payload.find({
        collection: 'events',
        where: {
          and: [{ status: { in: ['available', 'upcoming'] } }],
        },
        limit: 6,
        sort: 'date',
        depth: 2,
        // Use admin access to bypass access control and see all events, then filter client-side
        user,
        overrideAccess: true,
      })

      // Filter to ensure we only get valid events with all required data
      events = (eventsResult.docs || []).filter((e) => {
        // Must have all required fields
        if (!e || !e.id) return false
        if (!e.title) return false
        if (!e.location) return false
        if (!e.date) return false
        if (!e.image) return false
        // Must be available or upcoming (not sold-out or cancelled)
        if (e.status !== 'available' && e.status !== 'upcoming') return false
        // Must be published (not draft)
        if (e._status && e._status !== 'published') return false
        return true
      }) as Event[]

      // Debug logging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(
          `[Homepage] Query found ${eventsResult.docs.length} events, filtered to ${events.length} valid events`,
        )
        if (events.length === 0 && eventsResult.docs.length > 0) {
          console.log('⚠️ Events found but filtered out. Checking why...')
          eventsResult.docs.forEach((e) => {
            console.log(
              `  - ${e.title}: status=${e.status}, _status=${e._status}, hasImage=${!!e.image}, hasLocation=${!!e.location}, hasDate=${!!e.date}`,
            )
          })
        }
      }
    } catch (error) {
      console.error('Error fetching events:', error)
      // In development, log more details
      if (process.env.NODE_ENV === 'development') {
        console.error('Event fetch error details:', error)
      }
    }

    // Fetch charity global
    let charity: Charity | null = null
    try {
      const charityGlobal = await payload.findGlobal({
        slug: 'charity',
        depth: 2,
      })
      charity = charityGlobal as Charity
    } catch (error) {
      console.error('Error fetching charity global:', error)
    }

    // Fetch gallery global (single gallery with unlimited images)
    let gallery: Gallery | null = null
    try {
      const galleryGlobal = await payload.findGlobal({
        slug: 'gallery',
        depth: 2,
      })
      gallery = galleryGlobal as Gallery

      // Debug logging
      if (process.env.NODE_ENV === 'development') {
        const imageCount = gallery?.images?.length || 0
        console.log(`[Homepage] Gallery: ${imageCount} images`)
      }
    } catch (error) {
      console.error('Error fetching gallery global:', error)
    }

    return {
      products,
      events,
      charity,
      gallery,
    }
  } catch (error) {
    console.error('Error in getHomePageData:', error)
    // Return empty data to prevent infinite loops
    return {
      products: [],
      events: [],
      charity: null,
      gallery: null,
    }
  } finally {
    // Ensure we always return, even if there's an error
  }
}

// Revalidate every 60 seconds (1 minute) - balance between freshness and performance
export const revalidate = 60

export default async function HomePage() {
  const { products, events, charity, gallery } = await getHomePageData()

  return (
    <div className="min-h-screen bg-black">
      <SimpleNavbar />

      <ProductsHero products={products} />
      <CharitySection charity={charity} />
      <EventsSection events={events} />
      <GallerySection gallery={gallery} />
      <ContactSectionNew />

      <SimpleFooter />
    </div>
  )
}
