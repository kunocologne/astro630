'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface InfiniteScrollProps<T> {
  items: T[]
  hasNextPage: boolean
  isFetching: boolean
  fetchNextPage: () => void
  renderItem: (item: T, index: number) => ReactNode
  renderLoading?: () => ReactNode
  renderEnd?: () => ReactNode
  className?: string
  threshold?: number
}

/**
 * Enterprise-grade infinite scroll component
 * Provides smooth infinite loading with intersection observer
 */
export const InfiniteScroll = <T,>({
  items,
  hasNextPage,
  isFetching,
  fetchNextPage,
  renderItem,
  renderLoading,
  renderEnd,
  className = '',
  threshold = 0.1,
}: InfiniteScrollProps<T>) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const { ref, inView } = useInView({
    threshold,
    rootMargin: '100px',
  })

  // Fetch next page when in view
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage])

  // Handle initial load
  useEffect(() => {
    if (items.length > 0 && isInitialLoad) {
      setIsInitialLoad(false)
    }
  }, [items.length, isInitialLoad])

  const defaultLoadingComponent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center py-8"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full"
      />
      <span className="ml-3 text-gray-600">Loading more...</span>
    </motion.div>
  )

  const defaultEndComponent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center items-center py-8 text-gray-500"
    >
      <div className="text-center">
        <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-2" />
        <p>You've reached the end</p>
      </div>
    </motion.div>
  )

  return (
    <div className={className}>
      {/* Items */}
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3, 
              delay: isInitialLoad ? index * 0.05 : 0 
            }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Loading Trigger */}
      {hasNextPage && (
        <div ref={ref} className="h-4" />
      )}

      {/* Loading State */}
      {isFetching && (renderLoading || defaultLoadingComponent)()}

      {/* End State */}
      {!hasNextPage && items.length > 0 && (renderEnd || defaultEndComponent)()}
    </div>
  )
}

/**
 * Hook for infinite scroll logic
 */
export const useInfiniteScroll = <T,>(
  fetchFn: (page: number) => Promise<{ items: T[]; hasNextPage: boolean }>,
  initialPage = 1
) => {
  const [items, setItems] = useState<T[]>([])
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const fetchNextPage = useCallback(async () => {
    if (isFetching || !hasNextPage) return

    setIsFetching(true)
    try {
      const result = await fetchFn(currentPage)
      
      if (isInitialLoad) {
        setItems(result.items)
        setIsInitialLoad(false)
      } else {
        setItems(prev => [...prev, ...result.items])
      }
      
      setHasNextPage(result.hasNextPage)
      setCurrentPage(prev => prev + 1)
    } catch (error) {
      console.error('Failed to fetch next page:', error)
    } finally {
      setIsFetching(false)
    }
  }, [currentPage, isFetching, hasNextPage, fetchFn, isInitialLoad])

  const reset = useCallback(() => {
    setItems([])
    setCurrentPage(initialPage)
    setHasNextPage(true)
    setIsFetching(false)
    setIsInitialLoad(true)
  }, [initialPage])

  return {
    items,
    hasNextPage,
    isFetching,
    isInitialLoad,
    fetchNextPage,
    reset,
  }
}
