import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { getSalesStats } from '@/lib/utils/sales'
import type { Order } from '@/types/payload-types'

export async function GET(request: Request) {
  try {
    const headers = await getHeaders()
    const payload = await getPayload({ config: configPromise })

    // Try to authenticate user from cookies
    const { user } = await payload.auth({ headers })

    // Only admins can access sales statistics
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 })
    }

    // Check if orders collection exists
    try {
      // Try to fetch orders - if collection doesn't exist, this will throw
      const ordersResult = await payload.find({
        collection: 'orders',
        limit: 0,
        pagination: false,
        user,
        overrideAccess: true,
        depth: 2,
      })

      const orders = (ordersResult?.docs || []) as Order[]
      const stats = getSalesStats(orders)

      return NextResponse.json(stats)
    } catch (collectionError) {
      // If orders collection doesn't exist yet, return empty stats
      const errorMsg =
        collectionError instanceof Error ? collectionError.message : String(collectionError)

      if (errorMsg.includes("can't be found") || errorMsg.includes('does not exist')) {
        // Orders collection doesn't exist yet - return empty stats
        return NextResponse.json({
          totalRevenue: 0,
          totalOrders: 0,
          averageOrderValue: 0,
          revenueByDate: [],
        })
      }

      // Re-throw other errors
      throw collectionError
    }
  } catch (error) {
    console.error('Error fetching sales stats:', error)
    const errorMessage = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
