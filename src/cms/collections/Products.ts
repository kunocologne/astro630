import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access/adminOnly'
import { adminOnlyFieldAccess } from '../access/adminOnlyFieldAccess'
import { adminOrPublishedStatus } from '../access/adminOrPublishedStatus'
import { slugField } from '../fields/slug'

export const ProductsCollection: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'status', 'updatedAt'],
    group: 'Shop',
  },
  access: {
    read: adminOrPublishedStatus,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    slugField('title'),
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Price in the base currency (e.g., EUR)',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Product Images',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        description: 'Categories this product belongs to',
      },
    },
    {
      name: 'inventory',
      type: 'group',
      fields: [
        {
          name: 'quantity',
          type: 'number',
          defaultValue: 0,
          min: 0,
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'In Stock', value: 'in_stock' },
            { label: 'Low Stock', value: 'low_stock' },
            { label: 'Out of Stock', value: 'out_of_stock' },
          ],
          defaultValue: 'in_stock',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Feature this product prominently',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
