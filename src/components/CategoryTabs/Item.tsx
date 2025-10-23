'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  href: string
  title: string
}

export function Item({ href, title }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = pathname === href
  const q = searchParams.get('q')
  const DynamicTag = active ? 'p' : Link

  return (
    <li className="mt-2 flex text-sm text-black dark:text-white">
      <DynamicTag
        className={clsx(
          'text-primary/50 hover:text-primary/100 w-full rounded-md px-2 py-1 font-mono text-sm uppercase hover:bg-white/5',
          {
            'text-primary/100 bg-white/5': active,
          },
        )}
        href={href}
        prefetch={!active ? false : undefined}
      >
        {title}
      </DynamicTag>
    </li>
  )
}
