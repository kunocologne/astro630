'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', newTheme)
  }

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative h-7 w-14 rounded-full bg-gray-200 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative h-7 w-14 rounded-full transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={`absolute left-0.5 top-0.5 flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {theme === 'light' ? (
          <Sun className="h-3.5 w-3.5 text-[#FF6B35]" />
        ) : (
          <Moon className="h-3.5 w-3.5 text-[#FF6B35]" />
        )}
      </span>
    </button>
  )
}
