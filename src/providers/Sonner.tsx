'use client'

import { useTheme } from '@/providers/Theme'
import { Toaster } from 'sonner'

export const SonnerProvider = ({ children }: { children?: React.ReactNode }) => {
  const { theme } = useTheme()

  return (
    <>
      {children}

      <Toaster 
        richColors 
        position="top-right" 
        theme={theme || 'light'} 
        duration={2000}
        closeButton={true}
        toastOptions={{
          style: {
            marginTop: '80px', // Push down to avoid navbar
          },
        }}
      />
    </>
  )
}
