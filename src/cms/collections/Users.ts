import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access/adminOnly'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: adminOnly,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'role', 'updatedAt'],
    group: 'Admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: 'user',
      required: true,
    },
  ],
}
