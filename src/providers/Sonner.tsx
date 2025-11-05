'use client'

import { Toaster } from 'sonner'

export const SonnerProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children}

      <Toaster
        richColors
        position="top-right"
        theme="dark"
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
