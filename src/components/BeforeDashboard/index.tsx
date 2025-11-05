import { Banner } from '@payloadcms/ui'
import React from 'react'
import Link from 'next/link'

const baseClass = 'before-dashboard'

export const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your CMS!</h4>
      </Banner>
      Here&apos;s what to do next:
      <ul className={`${baseClass}__instructions`}>
        <li>
          Start by creating your first page in the{' '}
          <Link href="/admin/collections/pages">Pages</Link> collection
        </li>
        <li>
          Upload media files in the <Link href="/admin/collections/media">Media</Link> collection
        </li>
        <li>
          Customize your{' '}
          <a
            href="https://payloadcms.com/docs/configuration/collections"
            rel="noopener noreferrer"
            target="_blank"
          >
            collections
          </a>{' '}
          and add more{' '}
          <a
            href="https://payloadcms.com/docs/fields/overview"
            rel="noopener noreferrer"
            target="_blank"
          >
            fields
          </a>{' '}
          as needed
        </li>
      </ul>
    </div>
  )
}
