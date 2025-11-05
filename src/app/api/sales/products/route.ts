import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { aggregateProductSales } from '@/lib/utils/sales'
import type { Order } from '@/types/payload-types'

export async function GET() {
  try {
    const headers = await getHeaders()
    const payload = await getPayload({ config: configPromise })
    const { user } = await payload.auth({ headers })

    // Only admins can access product sales data
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch all orders
    const ordersResult = await payload.find({
      collection: 'orders',
      limit: 0,
      pagination: false,
      user,
      overrideAccess: true,
      depth: 2,
    })

    const orders = (ordersResult?.docs || []) as Order[]
    const productSales = aggregateProductSales(orders)

    return NextResponse.json({
      products: productSales,
      totalProducts: productSales.length,
    })
  } catch (error) {
    console.error('Error fetching product sales:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
