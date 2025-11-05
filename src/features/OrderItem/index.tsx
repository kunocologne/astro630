import { OrderStatus } from '@/features/OrderStatus'
import { Price } from '@/components/common/Price'
import { Button } from '@/components/ui/button'
import { Order } from '@/types/payload-types'
import { formatDateTime } from '@/lib/utils/formatDateTime'
import Link from 'next/link'

type Props = {
  order: Order
}

export const OrderItem: React.FC<Props> = ({ order }) => {
  const itemsLabel = order.items?.length === 1 ? 'Item' : 'Items'

  return (
    <div className="flex flex-col gap-12 rounded-lg border bg-card px-4 py-2 sm:flex-row sm:items-center sm:justify-between md:px-6 md:py-4">
      <div className="flex flex-col gap-4">
        <h3 className="max-w-[8rem] truncate font-mono text-sm uppercase tracking-[0.1em] text-primary/50 sm:max-w-none">{`#${order.id}`}</h3>

        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center">
          <p className="text-xl">
            <time dateTime={order.createdAt}>
              {formatDateTime({ date: order.createdAt, format: 'MMMM dd, yyyy' })}
            </time>
          </p>

          {order.status && <OrderStatus status={order.status} />}
        </div>

        <p className="flex gap-2 text-xs text-primary/80">
          <span>
            {order.items?.length} {itemsLabel}
          </span>
          {order.amount && (
            <>
              <span>•</span>
              <Price as="span" amount={order.amount} currencyCode={order.currency ?? undefined} />
            </>
          )}
        </p>
      </div>

      <Button variant="outline" asChild className="self-start sm:self-auto">
        <Link href={`/orders/${order.id}`}>View Order</Link>
      </Button>
    </div>
  )
}
