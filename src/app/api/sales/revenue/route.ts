import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { groupOrdersByDate, calculateTotalRevenue } from '@/lib/utils/sales'
import type { Order } from '@/types/payload-types'

export async function GET(request: Request) {
  try {
    const headers = await getHeaders()
    const payload = await getPayload({ config: configPromise })
    const { user } = await payload.auth({ headers })

    // Only admins can access sales data
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30', 10)

    // Fetch all orders
    const ordersResult = await payload.find({
      collection: 'orders',
      limit: 0,
      pagination: false,
      user,
      overrideAccess: true,
    })

    const orders = (ordersResult?.docs || []) as Order[]
    const revenueByDate = groupOrdersByDate(orders, days)
    const totalRevenue = calculateTotalRevenue(orders)

    return NextResponse.json({
      totalRevenue,
      revenueByDate,
      period: `${days} days`,
    })
  } catch (error) {
    console.error('Error fetching revenue data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
