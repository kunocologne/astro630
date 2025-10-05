import type { CollectionConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'
import { adminOrPublishedStatus } from '@/access/adminOrPublishedStatus'

export const PricingPlans: CollectionConfig = {
  slug: 'pricingPlans',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOrPublishedStatus,
    update: adminOnly,
  },
  admin: {
    group: 'Content',
    defaultColumns: ['name', 'price', 'popular', 'order', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'Price display (e.g., "$29", "Custom", "Free")',
      },
    },
    {
      name: 'description',
      type: 'text',
      admin: {
        description: 'Brief description of the plan',
      },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'List of features included in this plan',
      },
    },
    {
      name: 'popular',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as most popular plan',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
      admin: {
        description: 'Call-to-action button text',
      },
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '/contact',
      admin: {
        description: 'Call-to-action button URL',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'billing',
      type: 'group',
      fields: [
        {
          name: 'interval',
          type: 'select',
          options: [
            { label: 'One-time', value: 'one-time' },
            { label: 'Monthly', value: 'monthly' },
            { label: 'Yearly', value: 'yearly' },
            { label: 'Custom', value: 'custom' },
          ],
          defaultValue: 'monthly',
        },
        {
          name: 'trialDays',
          type: 'number',
          admin: {
            description: 'Number of trial days (0 for no trial)',
          },
        },
      ],
    },
    {
      name: 'limits',
      type: 'group',
      fields: [
        {
          name: 'products',
          type: 'number',
          admin: {
            description: 'Maximum number of products (null for unlimited)',
          },
        },
        {
          name: 'users',
          type: 'number',
          admin: {
            description: 'Maximum number of users (null for unlimited)',
          },
        },
        {
          name: 'storage',
          type: 'text',
          admin: {
            description: 'Storage limit (e.g., "10GB", "Unlimited")',
          },
        },
      ],
    },
  ],
}
