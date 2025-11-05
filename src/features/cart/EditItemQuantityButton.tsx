'use client'

import { CartItem } from '@/features/cart'
import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import clsx from 'clsx'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useMemo } from 'react'
import { toast } from 'sonner'

export function EditItemQuantityButton({ type, item }: { item: CartItem; type: 'minus' | 'plus' }) {
  const { decrementItem, incrementItem } = useCart()

  const disabled = useMemo(() => {
    if (!item.id) return true

    const target =
      item.variant && typeof item.variant === 'object'
        ? item.variant
        : item.product && typeof item.product === 'object'
          ? item.product
          : null

    if (
      target &&
      typeof target === 'object' &&
      target.inventory !== undefined &&
      target.inventory !== null
    ) {
      if (type === 'plus' && item.quantity !== undefined && item.quantity !== null) {
        return item.quantity >= target.inventory
      }
    }

    return false
  }, [item, type])

  return (
    <form>
      <button
        aria-disabled={disabled}
        disabled={disabled}
        aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
        className={clsx(
          'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full border border-border px-2 transition-all duration-200 hover:cursor-pointer hover:border-primary/50 hover:bg-primary/5 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
          {
            'cursor-not-allowed opacity-50': disabled,
            'ml-auto': type === 'minus',
          },
        )}
        onClick={(e: React.FormEvent<HTMLButtonElement>) => {
          e.preventDefault()

          if (item.id) {
            if (type === 'plus') {
              incrementItem(Number(item.id))
              toast.success('Quantity increased')
            } else {
              decrementItem(Number(item.id))
              toast.success('Quantity decreased')
            }
          }
        }}
        type="button"
      >
        {type === 'plus' ? (
          <PlusIcon className="h-4 w-4 hover:text-blue-300 dark:text-neutral-500" />
        ) : (
          <MinusIcon className="h-4 w-4 hover:text-blue-300 dark:text-neutral-500" />
        )}
      </button>
    </form>
  )
}
