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

// API Functions
const fetchCart = async (): Promise<Cart> => {
  const response = await fetch('/api/cart')
  
  if (!response.ok) {
    throw new Error(`Failed to fetch cart: ${response.statusText}`)
  }
  
  return response.json()
}

const addToCart = async (data: AddToCartData): Promise<Cart> => {
  const response = await fetch('/api/cart/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error(`Failed to add to cart: ${response.statusText}`)
  }
  
  return response.json()
}

const updateCartItem = async (data: UpdateCartItemData): Promise<Cart> => {
  const response = await fetch(`/api/cart/items/${data.itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity: data.quantity }),
  })
  
  if (!response.ok) {
    throw new Error(`Failed to update cart item: ${response.statusText}`)
  }
  
  return response.json()
}

const removeFromCart = async (itemId: string): Promise<Cart> => {
  const response = await fetch(`/api/cart/items/${itemId}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error(`Failed to remove from cart: ${response.statusText}`)
  }
  
  return response.json()
}

const clearCart = async (): Promise<Cart> => {
  const response = await fetch('/api/cart', {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error(`Failed to clear cart: ${response.statusText}`)
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
          totalAmount: previousCart.totalAmount + (newItem.quantity * 100), // Assuming price calculation
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
          items: previousCart.items.map(item =>
            item.id === data.itemId
              ? { ...item, quantity: data.quantity, total: item.product.price * data.quantity }
              : item
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
        const itemToRemove = previousCart.items.find(item => item.id === itemId)
        const optimisticCart: Cart = {
          ...previousCart,
          items: previousCart.items.filter(item => item.id !== itemId),
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
  return cart?.totalItems || 0
}

export const useCartTotal = () => {
  const { data: cart } = useCart()
  return cart?.totalAmount || 0
}

export const useIsInCart = (productId: string, variantId?: string) => {
  const { data: cart } = useCart()
  
  if (!cart) return false
  
  return cart.items.some(item => 
    item.product.id === productId && 
    (!variantId || item.variant?.id === variantId)
  )
}
