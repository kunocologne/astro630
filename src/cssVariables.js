/**
 * CSS Variables and breakpoints for the application
 * This file provides JavaScript access to CSS custom properties and breakpoints
 */

export const cssVariables = {
  // Breakpoints for responsive images and layouts
  breakpoints: {
    sm: 640, // 40rem
    md: 768, // 48rem
    lg: 1024, // 64rem
    xl: 1280, // 80rem
    '2xl': 1376, // 86rem
  },

  // Color system - matches the CSS custom properties
  colors: {
    // Base colors (light/dark mode aware)
    base0: '#fafafa', // --background in light mode
    base1000: '#141414', // --foreground in light mode

    // Error colors
    error500: '#ef4444', // --error color

    // Additional colors that might be needed
    primary: '#141414', // --primary in light mode
    secondary: '#e5e5e5', // --secondary in light mode
    accent: '#141414', // --accent in light mode
    muted: '#e5e5e5', // --muted in light mode
    card: '#ffffff', // --card in light mode
    popover: '#fafafa', // --popover in light mode
    border: '#e5e5e5', // --border in light mode
    input: '#e5e5e5', // --input in light mode
    ring: '#141414', // --ring in light mode
    success: '#22c55e', // --success
    warning: '#f59e0b', // --warning
    destructive: '#ef4444', // --destructive
  },

  // Typography
  fontFamily: {
    sans: ['var(--font-geist-sans)', 'sans-serif'],
    mono: ['var(--font-geist-mono)', 'monospace'],
  },

  // Border radius
  radius: '1.5rem', // --radius

  // Spacing
  spacing: {
    unit: '4px',
  },

  // Grid
  grid: {
    columnSpacing: '20px',
    rowSpacing: '20px',
  },
}

// Helper function to get CSS custom property value
export const getCSSVariable = (variable) => {
  if (typeof window === 'undefined') return null
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
}

// Helper function to get breakpoint value
export const getBreakpoint = (breakpoint) => {
  return cssVariables.breakpoints[breakpoint]
}

// Helper function to get color value
export const getColor = (color) => {
  return cssVariables.colors[color]
}
