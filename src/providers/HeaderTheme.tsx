'use client'

import React, { createContext, useContext, useState } from 'react'

interface HeaderThemeContextType {
  headerTheme: 'light' | 'dark'
  setHeaderTheme: (theme: 'light' | 'dark') => void
}

const HeaderThemeContext = createContext<HeaderThemeContextType | undefined>(undefined)

export const useHeaderTheme = () => {
  const context = useContext(HeaderThemeContext)
  if (!context) {
    throw new Error('useHeaderTheme must be used within a HeaderThemeProvider')
  }
  return context
}

export const HeaderThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light')

  return (
    <HeaderThemeContext.Provider value={{ headerTheme, setHeaderTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  )
}
