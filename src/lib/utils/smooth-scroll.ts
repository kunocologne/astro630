/**
 * Smooth scroll utility for better navigation experience
 */

export function smoothScrollTo(element: string | HTMLElement, offset: number = 0) {
  const target = typeof element === 'string' ? document.querySelector(element) : element

  if (!target) return

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  })
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}

/**
 * Get the current scroll progress as a percentage (0-100)
 */
export function getScrollProgress(): number {
  const scrollTop = window.pageYOffset
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return (scrollTop / docHeight) * 100
}

/**
 * Check if an element is in the viewport
 */
export function isInViewport(element: HTMLElement, threshold: number = 0.1): boolean {
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold
}

/**
 * Get all sections in the viewport
 */
export function getVisibleSections(sectionIds: string[]): string[] {
  return sectionIds.filter((id) => {
    const element = document.getElementById(id)
    return element ? isInViewport(element) : false
  })
}
