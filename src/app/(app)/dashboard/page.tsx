import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SalesOverview } from '@/components/dashboard/SalesOverview'
import { OrdersTable } from '@/components/dashboard/OrdersTable'
import { SalesChart } from '@/components/dashboard/SalesChart'
import { TopProducts } from '@/components/dashboard/TopProducts'
import { SimpleNavbar } from '@/components/SimpleNavbar'
import { SimpleFooter } from '@/components/sections/SimpleFooter'
import type { Order } from '@/types/payload-types'
import { getSalesStats, aggregateProductSales } from '@/lib/utils/sales'

export const metadata: Metadata = {
  title: 'Sales Dashboard',
  description: 'View your sales statistics and order data',
}

export default async function DashboardPage() {
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  // Only admins can access the dashboard
  if (!user || user.role !== 'admin') {
    redirect('/login?warning=' + encodeURIComponent('Admin access required'))
  }

  let orders: Order[] = []
  let stats = {
    totalRevenue: 0,
    totalOrders: 0,
    averageOrderValue: 0,
    revenueByDate: [] as Array<{ date: string; revenue: number }>,
  }
  let productSales: Array<{
    productId: string
    productTitle: string
    quantitySold: number
    revenue: number
  }> = []
  let recentOrders: Order[] = []

  try {
    // Fetch all orders
    const ordersResult = await payload.find({
      collection: 'orders',
      limit: 0,
      pagination: false,
      user,
      overrideAccess: true,
      depth: 2,
      sort: '-createdAt',
    })

    orders = (ordersResult?.docs || []) as Order[]
    stats = getSalesStats(orders)
    productSales = aggregateProductSales(orders)
    recentOrders = orders.slice(0, 10)
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    // Continue with empty data
  }

  // Get total products count
  let totalProducts = 0
  try {
    const productsResult = await payload.find({
      collection: 'products',
      limit: 0,
      pagination: false,
      user,
      overrideAccess: true,
    })
    totalProducts = productsResult?.totalDocs || 0
  } catch (error) {
    console.error('Error fetching products count:', error)
  }

  return (
    <div className="min-h-screen bg-black">
      <SimpleNavbar />
      <main className="pb-24 pt-20">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-12">
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold text-white">Sales Dashboard</h1>
            <p className="text-gray-400">Overview of your sales and orders</p>
          </div>

          <SalesOverview
            totalRevenue={stats.totalRevenue}
            totalOrders={stats.totalOrders}
            averageOrderValue={stats.averageOrderValue}
            totalProducts={totalProducts}
          />

          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <SalesChart revenueByDate={stats.revenueByDate} />
            <TopProducts products={productSales} />
          </div>

          <OrdersTable orders={recentOrders} />
        </div>
      </main>
      <SimpleFooter />
    </div>
  )
}
