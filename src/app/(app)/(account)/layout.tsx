import type { ReactNode } from 'react'

import { headers as getHeaders } from 'next/headers.js'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { RenderParams } from '@/components/RenderParams'
import { AccountNav } from '@/components/AccountNav'

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  return (
    <div>
      <div className="container">
        <RenderParams className="" />
      </div>

      <div className="container mt-16 flex gap-8 pb-8">
        {user && (
          <AccountNav className="hidden max-w-[15.5rem] grow flex-col items-start gap-4 md:flex" />
        )}

        <div className="flex grow flex-col gap-12">{children}</div>
      </div>
    </div>
  )
}
