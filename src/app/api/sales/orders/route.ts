import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import type { Order } from '@/types/payload-types'

export async function GET(request: Request) {
  try {
    const headers = await getHeaders()
    const payload = await getPayload({ config: configPromise })
    const { user } = await payload.auth({ headers })

    // Only admins can access all orders
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50', 10)
    const status = searchParams.get('status') || undefined

    const where: any = {}
    if (status) {
      where.status = { equals: status }
    }

    // Fetch orders
    const ordersResult = await payload.find({
      collection: 'orders',
      limit,
      user,
      overrideAccess: true,
      depth: 2,
      where,
      sort: '-createdAt',
    })

    const orders = (ordersResult?.docs || []) as Order[]

    return NextResponse.json({
      orders,
      totalDocs: ordersResult?.totalDocs || 0,
      limit: ordersResult?.limit || limit,
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
