import type { CollectionConfig } from 'payload'
import { adminOnly } from '../access/adminOnly'
import { adminOrPublishedStatus } from '../access/adminOrPublishedStatus'
import { slugField } from '../fields/slug'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'date', 'status', 'updatedAt'],
    group: 'Content',
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
      admin: {
        description: 'Event name (e.g., BASS:MENT, SUN:SET)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short description of the event',
      },
    },
    slugField('title'),
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'Event location (e.g., Cologne, Germany)',
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        description: 'Event date',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Event image/photo',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Sold Out', value: 'sold-out' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Upcoming', value: 'upcoming' },
      ],
      defaultValue: 'upcoming',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'ticketLink',
      type: 'text',
      admin: {
        description: 'Link to buy tickets (optional)',
      },
    },
  ],
}
