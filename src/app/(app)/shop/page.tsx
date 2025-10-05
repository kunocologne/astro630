import { Grid } from '@/components/Grid'
import { ProductGridItem } from '@/components/ProductGridItem'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const metadata = {
  description: 'Search for products in the store.',
  title: 'Shop',
}

type SearchParams = { [key: string]: string | string[] | undefined }

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function ShopPage({ searchParams }: Props) {
  const { q: searchValue, sort, category } = await searchParams
  const payload = await getPayload({ config: configPromise })

  const products = await payload.find({
    collection: 'products',
    draft: false,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      gallery: true,
      categories: true,
      priceInUSD: true,
    },
    ...(sort ? { sort } : { sort: 'title' }),
    ...(searchValue || category
      ? {
          where: {
            and: [
              {
                _status: {
                  equals: 'published',
                },
              },
              ...(searchValue
                ? [
                    {
                      or: [
                        {
                          title: {
                            like: searchValue,
                          },
                        },
                        {
                          description: {
                            like: searchValue,
                          },
                        },
                      ],
                    },
                  ]
                : []),
              ...(category
                ? [
                    {
                      categories: {
                        contains: category,
                      },
                    },
                  ]
                : []),
            ],
          },
        }
      : {}),
  })

  const resultsText = products.docs.length > 1 ? 'results' : 'result'

  return (
    <div className="py-12">
      {/* Page Header - Refined */}
      <div className="mb-16">
        <div className="relative inline-block">
          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight">
            Shop
          </h1>
          <p className="mt-4 text-base text-muted-foreground font-light">
            Discover our curated collection
          </p>
        </div>
      </div>

      {/* Search Results Info */}
      {searchValue ? (
        <div className="mb-12 p-6 rounded-2xl border border-border/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <p className="text-base font-medium text-muted-foreground">
            {products.docs?.length === 0
              ? 'No products match '
              : `${products.docs.length} ${resultsText} for `}
            <span className="font-semibold text-foreground">&quot;{searchValue}&quot;</span>
          </p>
        </div>
      ) : null}

      {!searchValue && products.docs?.length === 0 && (
        <div className="p-12 rounded-2xl border border-border/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm text-center">
          <p className="text-base font-medium text-muted-foreground">
            No products found. Try adjusting your filters.
          </p>
        </div>
      )}

      {/* Product Grid - Spacious Layout */}
      {products?.docs.length > 0 ? (
        <Grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.docs.map((product, index) => {
            return <ProductGridItem key={product.id} product={product} index={index} />
          })}
        </Grid>
      ) : null}
    </div>
  )
}
