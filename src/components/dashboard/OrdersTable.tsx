'use client'

import { formatCurrency } from '@/lib/utils/sales'
import type { Order } from '@/types/payload-types'
import Link from 'next/link'
import { format } from 'date-fns'

interface OrdersTableProps {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  if (orders.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <p className="text-gray-400">No orders yet</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="border-b border-white/10 p-6">
        <h2 className="text-xl font-bold text-white">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {orders.map((order) => {
              const amount =
                typeof order.amount === 'number'
                  ? order.amount
                  : parseFloat(order.amount?.toString() || '0')
              const customerEmail =
                order.customerEmail ||
                (typeof order.customer === 'object' && order.customer?.email) ||
                'N/A'
              const status = order.status || 'pending'
              const orderDate = order.createdAt
                ? format(new Date(order.createdAt), 'MMM dd, yyyy')
                : 'N/A'

              return (
                <tr key={order.id} className="transition-colors hover:bg-white/5">
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-white">
                    {order.id.slice(0, 8)}...
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                    {customerEmail}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{orderDate}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-white">
                    {formatCurrency(amount, order.currency || 'EUR')}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Link
                      href={`/orders/${order.id}`}
                      className="text-blue-400 transition-colors hover:text-blue-300"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
