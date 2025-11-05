import type { GlobalConfig } from 'payload'
import { adminOnly } from '../access/adminOnly'

export const Gallery: GlobalConfig = {
  slug: 'gallery',
  admin: {
    group: 'Content',
    description: 'Add or remove gallery images. Each image can have alt text for accessibility.',
  },
  access: {
    read: () => true,
    update: adminOnly,
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images',
      admin: {
        description: 'Add unlimited images to your gallery. Each image can have alt text.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload an image',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
          admin: {
            description: 'Alt text for accessibility (recommended)',
          },
        },
      ],
    },
  ],
}
