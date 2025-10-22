import { NextResponse } from 'next/server'
import { isCMSEnabled } from '@/lib/cms-toggle'

export async function GET() {
  try {
    const enabled = isCMSEnabled()
    
    if (!enabled) {
      return NextResponse.json({
        enabled: false,
        collections: 0,
        globals: 0
      })
    }
    
    // If CMS is enabled, return actual stats
    return NextResponse.json({
      enabled: true,
      collections: 3, // users, pages, blog-posts
      globals: 2 // header, footer
    })
  } catch (error) {
    return NextResponse.json({
      enabled: false,
      collections: 0,
      globals: 0
    })
  }
}
