import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

export function OpenCartButton({ quantity, ...rest }: { className?: string; quantity?: number }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="group relative h-10 w-10 rounded-lg border border-gray-600/30 transition-all duration-200 hover:border-gray-500/50 hover:bg-gray-100/10"
      {...rest}
    >
      <ShoppingBag className="h-5 w-5 text-gray-300 transition-colors group-hover:text-white" />

      {quantity && quantity > 0 ? (
        <span className="absolute -top-2 -right-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-gray-900/90 bg-orange-500 text-xs font-semibold text-white shadow-sm">
          {quantity > 99 ? '99+' : quantity}
        </span>
      ) : null}

      <span className="sr-only">Cart {quantity ? `(${quantity} items)` : ''}</span>
    </Button>
  )
}
