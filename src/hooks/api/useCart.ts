import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

// Types
interface CartItem {
  id: string
  product: {
    id: string
    title: string
    slug: string
    price: number
    gallery?: Array<{
      id: string
      url: string
      alt?: string
    }>
  }
  variant?: {
    id: string
    title: string
    price: number
  }
  quantity: number
  total: number
}

interface Cart {
  id: string
  items: CartItem[]
  totalItems: number
  totalAmount: number
  currency: string
  createdAt: string
  updatedAt: string
}

interface AddToCartData {
  productId: string
  variantId?: string
  quantity: number
}

interface UpdateCartItemData {
  itemId: string
  quantity: number
}

// API Functions - Using Payload CMS API routes
// Cart endpoints: The ecommerce plugin uses /api/carts (plural) through Payload's API route handler
const fetchCart = async (): Promise<Cart> => {
  // The ecommerce plugin provides carts through Payload API at /api/carts
  // This goes through the Payload API route handler at /api/[...slug]
  const response = await fetch('/api/carts', {
    credentials: 'include',
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Cart fetch error:', response.status, errorText)
    throw new Error(`Failed to fetch cart: ${response.statusText}`)
  }

  const data = await response.json()
  // Handle both direct cart response and Payload's response format
  return data.docs?.[0] || data || { items: [], total: 0 }
}

const addToCart = async (data: AddToCartData): Promise<Cart> => {
  // The ecommerce plugin expects: { product: productId, variant?: variantId, quantity?: number }
  const payload = {
    product: data.productId,
    ...(data.variantId && { variant: data.variantId }),
    quantity: data.quantity || 1,
  }

  const response = await fetch('/api/carts/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let errorText: string
    try {
      const errorJson = await response.json()
      errorText = errorJson.errors?.[0]?.message || JSON.stringify(errorJson)
    } catch {
      errorText = await response.text()
    }

    console.error('Add to cart error:', response.status, errorText)
    throw new Error(`Failed to add to cart: ${errorText}`)
  }

  return response.json()
}

const updateCartItem = async (data: UpdateCartItemData): Promise<Cart> => {
  const response = await fetch(`/api/carts/items/${data.itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ quantity: data.quantity }),
  })

  if (!response.ok) {
    const fallbackResponse = await fetch(`/api/cart/items/${data.itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ quantity: data.quantity }),
    })
    if (!fallbackResponse.ok) {
      throw new Error(`Failed to update cart item: ${response.statusText}`)
    }
    return fallbackResponse.json()
  }

  return response.json()
}

const removeFromCart = async (itemId: string): Promise<Cart> => {
  const response = await fetch(`/api/carts/items/${itemId}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!response.ok) {
    const fallbackResponse = await fetch(`/api/cart/items/${itemId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    if (!fallbackResponse.ok) {
      throw new Error(`Failed to remove from cart: ${response.statusText}`)
    }
    return fallbackResponse.json()
  }

  return response.json()
}

const clearCart = async (): Promise<Cart> => {
  const response = await fetch('/api/carts', {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!response.ok) {
    const fallbackResponse = await fetch('/api/cart', {
      method: 'DELETE',
      credentials: 'include',
    })
    if (!fallbackResponse.ok) {
      throw new Error(`Failed to clear cart: ${response.statusText}`)
    }
    return fallbackResponse.json()
  }

  return response.json()
}

// Query Keys
export const cartKeys = {
  all: ['cart'] as const,
  current: () => [...cartKeys.all, 'current'] as const,
}

// Hooks
export const useCart = () => {
  return useQuery({
    queryKey: cartKeys.current(),
    queryFn: fetchCart,
    staleTime: 1 * 60 * 1000, // 1 minute (cart changes frequently)
    gcTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    refetchOnWindowFocus: true,
  })
}

export const useAddToCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addToCart,
    onMutate: async (newItem) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: cartKeys.current() })

      // Snapshot the previous value
      const previousCart = queryClient.getQueryData<Cart>(cartKeys.current())

      // Optimistically update the cart
      if (previousCart) {
        const optimisticCart: Cart = {
          ...previousCart,
          totalItems: previousCart.totalItems + newItem.quantity,
          totalAmount: previousCart.totalAmount + newItem.quantity * 100, // Assuming price calculation
          updatedAt: new Date().toISOString(),
        }

        queryClient.setQueryData(cartKeys.current(), optimisticCart)
      }

      return { previousCart }
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(cartKeys.current(), newCart)
      toast.success('Added to cart!')
    },
    onError: (error, newItem, context) => {
      // Revert optimistic update on error
      if (context?.previousCart) {
        queryClient.setQueryData(cartKeys.current(), context.previousCart)
      }
      toast.error(`Failed to add to cart: ${error.message}`)
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: cartKeys.current() })
    },
  })
}

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateCartItem,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: cartKeys.current() })

      const previousCart = queryClient.getQueryData<Cart>(cartKeys.current())

      if (previousCart) {
        const optimisticCart: Cart = {
          ...previousCart,
          items: previousCart.items.map((item) =>
            item.id === data.itemId
              ? { ...item, quantity: data.quantity, total: item.product.price * data.quantity }
              : item,
          ),
          updatedAt: new Date().toISOString(),
        }

        queryClient.setQueryData(cartKeys.current(), optimisticCart)
      }

      return { previousCart }
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(cartKeys.current(), updatedCart)
      toast.success('Cart updated!')
    },
    onError: (error, data, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(cartKeys.current(), context.previousCart)
      }
      toast.error(`Failed to update cart: ${error.message}`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.current() })
    },
  })
}

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: removeFromCart,
    onMutate: async (itemId) => {
      await queryClient.cancelQueries({ queryKey: cartKeys.current() })

      const previousCart = queryClient.getQueryData<Cart>(cartKeys.current())

      if (previousCart) {
        const itemToRemove = previousCart.items.find((item) => item.id === itemId)
        const optimisticCart: Cart = {
          ...previousCart,
          items: previousCart.items.filter((item) => item.id !== itemId),
          totalItems: Math.max(0, previousCart.totalItems - (itemToRemove?.quantity || 0)),
          totalAmount: Math.max(0, previousCart.totalAmount - (itemToRemove?.total || 0)),
          updatedAt: new Date().toISOString(),
        }

        queryClient.setQueryData(cartKeys.current(), optimisticCart)
      }

      return { previousCart }
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(cartKeys.current(), updatedCart)
      toast.success('Removed from cart!')
    },
    onError: (error, itemId, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(cartKeys.current(), context.previousCart)
      }
      toast.error(`Failed to remove from cart: ${error.message}`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.current() })
    },
  })
}

export const useClearCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: clearCart,
    onSuccess: (emptyCart) => {
      queryClient.setQueryData(cartKeys.current(), emptyCart)
      toast.success('Cart cleared!')
    },
    onError: (error) => {
      toast.error(`Failed to clear cart: ${error.message}`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.current() })
    },
  })
}

// Utility hooks
export const useCartItemCount = () => {
  const { data: cart } = useCart()
  if (!cart || !cart.items) return 0
  return cart.items.reduce((total, item) => total + (item.quantity || 0), 0)
}

export const useCartTotal = () => {
  // Mock implementation for design purposes
  return 0
}

export const useIsInCart = (productId: string, variantId?: string) => {
  // Mock implementation for design purposes
  return false
}
