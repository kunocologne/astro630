import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access/adminOnly'
import { adminOrPublishedStatus } from '../access/adminOrPublishedStatus'
import { slugField } from '../fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
    group: 'Shop',
  },
  access: {
    read: adminOrPublishedStatus,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    slugField('name'),
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        description: 'Parent category (for subcategories)',
      },
    },
  ],
}
