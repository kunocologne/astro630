'use client'

import { formatCurrency } from '@/lib/utils/sales'
import type { ProductSales } from '@/lib/utils/sales'
import { Package } from 'lucide-react'

interface TopProductsProps {
  products: ProductSales[]
  limit?: number
}

export function TopProducts({ products, limit = 10 }: TopProductsProps) {
  const topProducts = products.slice(0, limit)

  if (topProducts.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <p className="text-gray-400">No product sales data available</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-3">
        <Package className="h-6 w-6 text-white" />
        <h2 className="text-xl font-bold text-white">Top Selling Products</h2>
      </div>
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div
            key={product.productId}
            className="flex items-center justify-between rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-white">{product.productTitle}</p>
                <p className="text-sm text-gray-400">
                  {product.quantitySold} {product.quantitySold === 1 ? 'sale' : 'sales'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-white">{formatCurrency(product.revenue)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
