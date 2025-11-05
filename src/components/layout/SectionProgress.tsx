'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface SectionProgressProps {
  sections: string[]
}

export function SectionProgress({ sections }: SectionProgressProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)

      // Find active section
      const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean)
      let currentSection = 0

      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = i
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return (
    <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col items-center space-y-4 p-4">
        {/* Progress Line */}
        <div className="h-32 w-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="w-full rounded-full bg-gradient-to-b from-blue-600 to-purple-600 transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* Section Dots */}
        <div className="flex flex-col space-y-3">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className={cn(
                'h-3 w-3 rounded-full transition-all duration-300 hover:scale-125',
                activeSection === index
                  ? 'bg-blue-600 shadow-lg dark:bg-blue-400'
                  : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500',
              )}
              aria-label={`Go to ${section} section`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
