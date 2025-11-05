import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: path.resolve(process.cwd(), 'public', 'media'),
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'desktop',
        width: 1920,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  admin: {
    useAsTitle: 'filename',
    group: 'Content',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description: 'Alternative text for the image',
      },
    },
  ],
}
