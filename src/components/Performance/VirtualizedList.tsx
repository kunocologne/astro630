'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useRef, useState, type ReactNode } from 'react'

interface VirtualizedListProps<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: T, index: number) => ReactNode
  overscan?: number
  className?: string
}

/**
 * Enterprise-grade virtualized list component
 * Provides high-performance rendering for large lists
 */
export const VirtualizedList = <T,>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5,
  className = '',
}: VirtualizedListProps<T>) => {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate visible range
  const visibleRange = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length - 1
    )

    return {
      start: Math.max(0, startIndex - overscan),
      end: Math.min(items.length - 1, endIndex + overscan),
    }
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan])

  // Get visible items
  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end + 1)
  }, [items, visibleRange])

  // Handle scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }

  // Calculate total height
  const totalHeight = items.length * itemHeight

  // Calculate offset for visible items
  const offsetY = visibleRange.start * itemHeight

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => {
              const actualIndex = visibleRange.start + index
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  style={{ height: itemHeight }}
                  className="flex items-center"
                >
                  {renderItem(item, actualIndex)}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

/**
 * Hook for virtualized list calculations
 */
export const useVirtualization = (
  itemCount: number,
  itemHeight: number,
  containerHeight: number,
  scrollTop: number,
  overscan = 5
) => {
  return useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      itemCount - 1
    )

    return {
      start: Math.max(0, startIndex - overscan),
      end: Math.min(itemCount - 1, endIndex + overscan),
      totalHeight: itemCount * itemHeight,
      offsetY: Math.max(0, startIndex - overscan) * itemHeight,
    }
  }, [itemCount, itemHeight, containerHeight, scrollTop, overscan])
}
