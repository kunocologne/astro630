import { Categories } from '@/components/layout/search/Categories'
import { FilterList } from '@/components/layout/search/filter'
import { sorting } from '@/lib/constants'
import { Search } from '@/components/Search'
import React, { Suspense } from 'react'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <div className="container my-16 flex flex-col gap-8 pb-4">
        <Search className="mb-8" />

        <div className="flex flex-col items-start justify-between gap-16 md:flex-row md:gap-4">
          <div className="flex w-full flex-none basis-1/5 flex-col gap-4 md:gap-8">
            <Categories />
            <FilterList list={sorting} title="Sort by" />
          </div>
          <div className="min-h-screen w-full">{children}</div>
        </div>
      </div>
    </Suspense>
  )
}
