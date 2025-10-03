// Enterprise-grade API hooks
// Provides type-safe, performant data fetching with React Query

// Products
export {
    productKeys, useCreateProduct, useDeleteProduct, useOptimisticProductUpdate, usePrefetchProduct, useProduct, useProducts, useUpdateProduct
} from './useProducts'

// Cart
export {
    cartKeys, useAddToCart, useCart, useCartItemCount,
    useCartTotal, useClearCart, useIsInCart, useRemoveFromCart, useUpdateCartItem
} from './useCart'

// Authentication
export {
    authKeys, useCurrentUser, useForgotPassword, useIsAdmin, useIsAuthenticated, useLogin, useLogout, useRegister, useResetPassword,
    useUpdateProfile, useUserRole
} from './useAuth'

// Re-export React Query utilities for convenience
export {
    useInfiniteQuery, useMutation, useQuery, useQueryClient, useSuspenseQuery
} from '@tanstack/react-query'

export type {
    MutationKey, QueryKey, UseInfiniteQueryResult, UseMutationResult, UseQueryResult
} from '@tanstack/react-query'

