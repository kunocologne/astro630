import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Enterprise-grade throttle hook
 * Limits the rate of function execution
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThrottle = <T extends (...args: any[]) => any>(callback: T, delay: number): T => {
  const lastRun = useRef(Date.now())

  return useCallback(
    ((...args: Parameters<T>) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args)
        lastRun.current = Date.now()
      }
    }) as T,
    [callback, delay],
  )
}

/**
 * Throttled value hook
 * Limits the rate of value updates
 */
export const useThrottledValue = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastUpdate = useRef(Date.now())

  useEffect(() => {
    const now = Date.now()
    if (now - lastUpdate.current >= delay) {
      setThrottledValue(value)
      lastUpdate.current = now
    } else {
      const timer = setTimeout(
        () => {
          setThrottledValue(value)
          lastUpdate.current = Date.now()
        },
        delay - (now - lastUpdate.current),
      )

      return () => clearTimeout(timer)
    }
  }, [value, delay])

  return throttledValue
}
