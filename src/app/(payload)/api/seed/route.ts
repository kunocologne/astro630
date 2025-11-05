import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { seed as seedFunction } from '@/cms/endpoints/seed'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    await seedFunction({
      payload,
      req: {
        payload,
        user: null,
        locale: undefined,
        fallbackLocale: undefined,
        t: (key: string) => key,
        i18n: {} as any,
      } as any,
    })

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully! Products are now available.',
    })
  } catch (error: any) {
    console.error('Seed error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to seed database',
      },
      { status: 500 },
    )
  }
}
