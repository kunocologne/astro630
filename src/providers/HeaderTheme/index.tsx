'use client'

import React, { createContext, useContext } from 'react'

export interface ContextType {
  headerTheme?: string | null
  setHeaderTheme: (theme: string | undefined) => void
}

const initialContext: ContextType = {
  headerTheme: 'dark',
  setHeaderTheme: () => null,
}

const HeaderThemeContext = createContext(initialContext)

export const HeaderThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderThemeContext.Provider value={initialContext}>{children}</HeaderThemeContext.Provider>
  )
}

export const useHeaderTheme = (): ContextType => useContext(HeaderThemeContext)
