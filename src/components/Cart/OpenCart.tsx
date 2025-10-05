import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

export function OpenCartButton({
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative hover:bg-gray-100/10 h-10 w-10 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200 group"
      {...rest}
    >
      <ShoppingBag className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
      
      {quantity && quantity > 0 ? (
        <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] text-xs font-semibold text-white bg-orange-500 rounded-full border-2 border-gray-900/90 shadow-sm">
          {quantity > 99 ? '99+' : quantity}
        </span>
      ) : null}
      
      <span className="sr-only">Cart {quantity ? `(${quantity} items)` : ''}</span>
    </Button>
  )
}
