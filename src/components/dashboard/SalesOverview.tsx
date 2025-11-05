'use client'

import { formatCurrency } from '@/lib/utils/sales'
import { TrendingUp, ShoppingCart, DollarSign, Package } from 'lucide-react'

interface SalesOverviewProps {
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
  totalProducts?: number
}

export function SalesOverview({
  totalRevenue,
  totalOrders,
  averageOrderValue,
  totalProducts,
}: SalesOverviewProps) {
  const stats = [
    {
      label: 'Total Revenue',
      value: formatCurrency(totalRevenue),
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      label: 'Total Orders',
      value: totalOrders.toLocaleString(),
      icon: ShoppingCart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      label: 'Average Order Value',
      value: formatCurrency(averageOrderValue),
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    ...(totalProducts !== undefined
      ? [
          {
            label: 'Products',
            value: totalProducts.toLocaleString(),
            icon: Package,
            color: 'text-orange-400',
            bgColor: 'bg-orange-400/10',
          },
        ]
      : []),
  ]

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`h-12 w-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}
              >
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
