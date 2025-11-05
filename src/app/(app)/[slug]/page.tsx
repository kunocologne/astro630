import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const page = await queryPageBySlug({ slug })

  return {
    title: page?.title || 'Page',
    description: page?.content ? String(page.content).slice(0, 160) : '',
  }
}

export default async function Page({ params }: Args) {
  const { slug } = await params
  const page = await queryPageBySlug({ slug })

  if (!page) {
    return notFound()
  }

  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">{page.title}</h1>
        {page.content && (
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Render rich text content here - you can add Payload's RichText component if needed */}
            <div className="text-gray-700 dark:text-gray-300">
              {typeof page.content === 'string'
                ? page.content
                : 'Content stored in CMS. Install @payloadcms/richtext-lexical to render rich text.'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    depth: 1,
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
}
