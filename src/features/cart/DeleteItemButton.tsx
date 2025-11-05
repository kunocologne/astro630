'use client'

import type { CartItem } from '@/features/cart'
import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import clsx from 'clsx'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

export function DeleteItemButton({ item }: { item: CartItem }) {
  const { removeItem } = useCart()
  const itemId = item.id

  return (
    <form>
      <button
        aria-disabled={!itemId}
        aria-label="Remove cart item"
        className={clsx(
          'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-red-500 transition-all duration-200 hover:cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2',
          {
            'cursor-not-allowed px-0 opacity-50': !itemId,
          },
        )}
        disabled={!itemId}
        onClick={(e: React.FormEvent<HTMLButtonElement>) => {
          e.preventDefault()
          if (itemId) {
            removeItem(Number(itemId))
            toast.success('Item removed from cart')
          }
        }}
        type="button"
      >
        <Trash2 className="h-3 w-3 text-white" />
      </button>
    </form>
  )
}
