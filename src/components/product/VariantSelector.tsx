'use client'

import { Button } from '@/components/ui/button'
import type { Product } from '@/payload-types'

import { createUrl } from '@/utilities/createUrl'
import clsx from 'clsx'
import { CheckCircle2 } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function VariantSelector({ product }: { product: Product }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const variants = product.variants?.docs
  const variantTypes = product.variantTypes
  const hasVariants = Boolean(product.enableVariants && variants?.length && variantTypes?.length)

  if (!hasVariants) {
    return null
  }

  return variantTypes?.map((type) => {
    if (!type || typeof type !== 'object') {
      return <></>
    }

    const options = type.options?.docs

    if (!options || !Array.isArray(options) || !options.length) {
      return <></>
    }

    return (
      <div key={type.id} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor={`variant-${type.name}`}>
            {type.label}
          </label>
          <div 
            id={`variant-${type.name}`}
            role="radiogroup" 
            aria-label={`Select ${type.label}`}
            className="flex flex-wrap gap-2"
          >
            {options?.map((option) => {
              if (!option || typeof option !== 'object') {
                return <></>
              }

              const optionID = option.id
              const optionKeyLowerCase = type.name

              // Base option params on current params so we can preserve any other param state in the url.
              const optionSearchParams = new URLSearchParams(searchParams.toString())

              // Remove image and variant ID from this search params so we can loop over it safely.
              optionSearchParams.delete('variant')
              optionSearchParams.delete('image')

              // Update the option params using the current option to reflect how the url *would* change,
              // if the option was clicked.
              optionSearchParams.set(optionKeyLowerCase, String(optionID))

              const currentOptions = Array.from(optionSearchParams.values())

              let isAvailableForSale = true

              // Find a matching variant
              if (variants) {
                const matchingVariant = variants
                  .filter((variant) => typeof variant === 'object')
                  .find((variant) => {
                    if (!variant.options || !Array.isArray(variant.options)) return false

                    // Check if all variant options match the current options in the URL
                    return variant.options.every((variantOption) => {
                      if (typeof variantOption !== 'object')
                        return currentOptions.includes(String(variantOption))

                      return currentOptions.includes(String(variantOption.id))
                    })
                  })

                if (matchingVariant) {
                  // If we found a matching variant, set the variant ID in the search params.
                  optionSearchParams.set('variant', String(matchingVariant.id))

                  if (matchingVariant.inventory && matchingVariant.inventory > 0) {
                    isAvailableForSale = true
                  } else {
                    isAvailableForSale = false
                  }
                }
              }

              const optionUrl = createUrl(pathname, optionSearchParams)

              // The option is active if it's in the url params.
              const isActive =
                Boolean(isAvailableForSale) &&
                searchParams.get(optionKeyLowerCase) === String(optionID)

              return (
                <Button
                  key={option.id}
                  variant="outline"
                  role="radio"
                  aria-checked={isActive}
                  aria-disabled={!isAvailableForSale}
                  aria-label={`${option.label} ${!isAvailableForSale ? '(Out of Stock)' : ''}`}
                  className={clsx(
                    'relative h-12 px-4 py-2 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-primary/50',
                    {
                      // Active state - selected option
                      'border-primary bg-primary/5 text-primary shadow-sm': isActive && isAvailableForSale,
                      // Available but not selected
                      'border-border hover:border-primary/50 hover:bg-primary/2 text-foreground': !isActive && isAvailableForSale,
                      // Out of stock
                      'border-muted bg-muted/50 text-muted-foreground cursor-not-allowed opacity-60': !isAvailableForSale,
                    }
                  )}
                  disabled={!isAvailableForSale}
                  onClick={() => {
                    if (isAvailableForSale) {
                      router.replace(`${optionUrl}`, {
                        scroll: false,
                      })
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      if (isAvailableForSale) {
                        router.replace(`${optionUrl}`, {
                          scroll: false,
                        })
                      }
                    }
                  }}
                >
                  <span className="font-medium">{option.label}</span>
                  {isActive && isAvailableForSale && (
                    <CheckCircle2 className="absolute top-1 right-1 w-4 h-4 text-primary" />
                  )}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    )
  })
}
