'use client'

import { formatCurrency } from '@/lib/utils/sales'
import { format, parseISO } from 'date-fns'

interface SalesChartProps {
  revenueByDate: Array<{ date: string; revenue: number }>
}

export function SalesChart({ revenueByDate }: SalesChartProps) {
  if (revenueByDate.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <p className="text-gray-400">No revenue data available</p>
      </div>
    )
  }

  const maxRevenue = Math.max(...revenueByDate.map((d) => d.revenue), 1)

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h2 className="mb-6 text-xl font-bold text-white">Revenue Over Time (Last 30 Days)</h2>
      <div className="space-y-2">
        {revenueByDate.map((data) => {
          const percentage = (data.revenue / maxRevenue) * 100
          const date = parseISO(data.date)
          const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')

          return (
            <div key={data.date} className="flex items-center gap-4">
              <div className="w-24 text-right text-sm text-gray-400">{format(date, 'MMM dd')}</div>
              <div className="relative flex-1">
                <div className="h-8 overflow-hidden rounded bg-white/5">
                  <div
                    className={`h-full rounded transition-all ${
                      isToday
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gradient-to-r from-blue-400/50 to-purple-400/50'
                    }`}
                    style={{ width: `${Math.max(percentage, 2)}%` }}
                  />
                </div>
              </div>
              <div className="w-24 text-right text-sm font-semibold text-white">
                {formatCurrency(data.revenue)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
