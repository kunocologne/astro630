import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

// Types
interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  role: 'admin' | 'customer'
  addresses?: Array<{
    id: string
    firstName: string
    lastName: string
    company?: string
    address1: string
    address2?: string
    city: string
    state: string
    zip: string
    country: string
    phone?: string
    isDefault?: boolean
  }>
  createdAt: string
  updatedAt: string
}

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  email: string
  password: string
  firstName?: string
  lastName?: string
}

interface AuthResponse {
  user: User
  token: string
  expires: string
}

// API Functions
const fetchCurrentUser = async (): Promise<User> => {
  const response = await fetch('/api/users/me', {
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`)
  }

  return response.json()
}

const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to login: ${response.statusText}`)
  }

  return response.json()
}

const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to register: ${response.statusText}`)
  }

  return response.json()
}

const logout = async (): Promise<void> => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error(`Failed to logout: ${response.statusText}`)
  }
}

const forgotPassword = async (email: string): Promise<void> => {
  const response = await fetch('/api/users/forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    throw new Error(`Failed to send reset email: ${response.statusText}`)
  }
}

const resetPassword = async ({
  token,
  password,
}: {
  token: string
  password: string
}): Promise<void> => {
  const response = await fetch('/api/users/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, password }),
  })

  if (!response.ok) {
    throw new Error(`Failed to reset password: ${response.statusText}`)
  }
}

const updateProfile = async (data: Partial<User>): Promise<User> => {
  const response = await fetch('/api/users/me', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to update profile: ${response.statusText}`)
  }

  return response.json()
}

// Query Keys
export const authKeys = {
  all: ['auth'] as const,
  user: () => [...authKeys.all, 'user'] as const,
}

// Hooks
export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: fetchCurrentUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on 401 (unauthorized)
      if (error instanceof Error && error.message.includes('401')) {
        return false
      }
      return failureCount < 3
    },
    refetchOnWindowFocus: true,
  })
}

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Update user cache
      queryClient.setQueryData(authKeys.user(), data.user)

      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: authKeys.user() })

      toast.success('Welcome back!')
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.message}`)
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      // Update user cache
      queryClient.setQueryData(authKeys.user(), data.user)

      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: authKeys.user() })

      toast.success('Account created successfully!')
    },
    onError: (error) => {
      toast.error(`Registration failed: ${error.message}`)
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Clear user cache
      queryClient.removeQueries({ queryKey: authKeys.user() })

      // Clear all other caches that depend on user
      queryClient.removeQueries({ queryKey: ['cart'] })
      queryClient.removeQueries({ queryKey: ['orders'] })

      toast.success('Logged out successfully!')
    },
    onError: (error) => {
      toast.error(`Logout failed: ${error.message}`)
    },
  })
}

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success('Password reset email sent!')
    },
    onError: (error) => {
      toast.error(`Failed to send reset email: ${error.message}`)
    },
  })
}

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success('Password reset successfully!')
    },
    onError: (error) => {
      toast.error(`Failed to reset password: ${error.message}`)
    },
  })
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProfile,
    onMutate: async (newData) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: authKeys.user() })

      // Snapshot the previous value
      const previousUser = queryClient.getQueryData<User>(authKeys.user())

      // Optimistically update the user
      if (previousUser) {
        const optimisticUser = { ...previousUser, ...newData }
        queryClient.setQueryData(authKeys.user(), optimisticUser)
      }

      return { previousUser }
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(authKeys.user(), updatedUser)
      toast.success('Profile updated successfully!')
    },
    onError: (error, newData, context) => {
      // Revert optimistic update on error
      if (context?.previousUser) {
        queryClient.setQueryData(authKeys.user(), context.previousUser)
      }
      toast.error(`Failed to update profile: ${error.message}`)
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: authKeys.user() })
    },
  })
}

// Utility hooks
export const useIsAuthenticated = () => {
  const { data: user, isLoading } = useCurrentUser()
  return { isAuthenticated: !!user, isLoading }
}

export const useIsAdmin = () => {
  const { data: user } = useCurrentUser()
  return user?.role === 'admin'
}

export const useUserRole = () => {
  const { data: user } = useCurrentUser()
  return user?.role
}
