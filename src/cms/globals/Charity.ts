import type { GlobalConfig } from 'payload'
import { adminOnly } from '../access/adminOnly'

export const Charity: GlobalConfig = {
  slug: 'charity',
  admin: {
    group: 'Content',
    description:
      'Edit the charity section headline and images. Fundraising stats come from the widget.',
  },
  access: {
    read: () => true,
    update: adminOnly,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Making a Difference',
      admin: {
        description: 'Main charity section headline',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Supporting African communities through sustainable water and energy initiatives.',
      admin: {
        description: 'Charity section description text',
      },
    },
    {
      name: 'widgetUrl',
      type: 'text',
      label: 'Fundraising Widget URL',
      admin: {
        description:
          'Paste the embed URL or campaign URL from GoFundMe or your fundraising platform',
        placeholder: 'https://www.gofundme.com/... or embed URL',
      },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Charity Images',
      admin: {
        description: 'Add images for the charity section (typically 2-3 images)',
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
            description: 'Alt text for accessibility',
          },
        },
      ],
    },
  ],
}
