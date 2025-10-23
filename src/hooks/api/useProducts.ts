import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

// Types
interface Product {
  id: string
  title: string
  slug: string
  price: number
  description?: string
  gallery?: Array<{
    id: string
    url: string
    alt?: string
  }>
  inventory?: {
    quantity: number
    status: 'in_stock' | 'out_of_stock' | 'low_stock'
  }
  variants?: Array<{
    id: string
    title: string
    price: number
    inventory: {
      quantity: number
      status: 'in_stock' | 'out_of_stock' | 'low_stock'
    }
  }>
  createdAt: string
  updatedAt: string
}

interface ProductsResponse {
  docs: Product[]
  totalDocs: number
  limit: number
  page: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

interface ProductFilters {
  page?: number
  limit?: number
  category?: string
  search?: string
  sort?: 'price_asc' | 'price_desc' | 'title_asc' | 'title_desc' | 'created_desc'
  inStock?: boolean
}

// API Functions
const fetchProducts = async (filters: ProductFilters = {}): Promise<ProductsResponse> => {
  const params = new URLSearchParams()

  if (filters.page) params.append('page', filters.page.toString())
  if (filters.limit) params.append('limit', filters.limit.toString())
  if (filters.category) params.append('category', filters.category)
  if (filters.search) params.append('search', filters.search)
  if (filters.sort) params.append('sort', filters.sort)
  if (filters.inStock !== undefined) params.append('inStock', filters.inStock.toString())

  const response = await fetch(`/api/products?${params.toString()}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`)
  }

  return response.json()
}

const fetchProduct = async (slug: string): Promise<Product> => {
  const response = await fetch(`/api/products/${slug}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`)
  }

  return response.json()
}

const createProduct = async (productData: Partial<Product>): Promise<Product> => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })

  if (!response.ok) {
    throw new Error(`Failed to create product: ${response.statusText}`)
  }

  return response.json()
}

const updateProduct = async ({
  id,
  ...productData
}: Partial<Product> & { id: string }): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })

  if (!response.ok) {
    throw new Error(`Failed to update product: ${response.statusText}`)
  }

  return response.json()
}

const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Failed to delete product: ${response.statusText}`)
  }
}

// Query Keys
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (slug: string) => [...productKeys.details(), slug] as const,
}

// Hooks
export const useProducts = (filters: ProductFilters = {}) => {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: productKeys.detail(slug),
    queryFn: () => fetchProduct(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
  })
}

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createProduct,
    onSuccess: (newProduct) => {
      // Invalidate and refetch products list
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })

      // Add the new product to the cache
      queryClient.setQueryData(productKeys.detail(newProduct.slug), newProduct)

      toast.success('Product created successfully!')
    },
    onError: (error) => {
      toast.error(`Failed to create product: ${error.message}`)
    },
  })
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct) => {
      // Update the product in cache
      queryClient.setQueryData(productKeys.detail(updatedProduct.slug), updatedProduct)

      // Invalidate products list to refetch
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })

      toast.success('Product updated successfully!')
    },
    onError: (error) => {
      toast.error(`Failed to update product: ${error.message}`)
    },
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (_, deletedId) => {
      // Remove product from cache
      queryClient.removeQueries({ queryKey: productKeys.detail(deletedId) })

      // Invalidate products list to refetch
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })

      toast.success('Product deleted successfully!')
    },
    onError: (error) => {
      toast.error(`Failed to delete product: ${error.message}`)
    },
  })
}

// Prefetching utilities
export const usePrefetchProduct = () => {
  const queryClient = useQueryClient()

  return (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: productKeys.detail(slug),
      queryFn: () => fetchProduct(slug),
      staleTime: 5 * 60 * 1000,
    })
  }
}

// Optimistic updates
export const useOptimisticProductUpdate = () => {
  const queryClient = useQueryClient()

  return (slug: string, updates: Partial<Product>) => {
    queryClient.setQueryData(productKeys.detail(slug), (oldData: Product | undefined) => {
      if (!oldData) return oldData
      return { ...oldData, ...updates }
    })
  }
}
