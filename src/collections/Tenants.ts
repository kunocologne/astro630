import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'subdomain', 'plan', 'status'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      return {
        'users.id': {
          equals: user?.id,
        },
      }
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      return {
        'users.id': {
          equals: user?.id,
        },
      }
    },
    delete: ({ req: { user } }) => Boolean(user?.roles?.includes('admin')),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'The name of your organization or project',
      },
    },
    {
      name: 'subdomain',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique subdomain for your tenant (e.g., "acme" for acme.yourdomain.com)',
      },
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value === 'string' && !/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(value)) {
          return 'Subdomain must be lowercase letters, numbers, and hyphens only'
        }
        return true
      },
    },
    {
      name: 'domain',
      type: 'text',
      admin: {
        description: 'Custom domain (optional, e.g., "acme.com")',
      },
    },
    {
      name: 'plan',
      type: 'select',
      options: [
        { label: 'Free', value: 'free' },
        { label: 'Pro', value: 'pro' },
        { label: 'Enterprise', value: 'enterprise' },
      ],
      defaultValue: 'free',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Suspended', value: 'suspended' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'active',
      required: true,
    },
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'allowSignup',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Allow new users to sign up to this tenant',
          },
        },
        {
          name: 'maxUsers',
          type: 'number',
          defaultValue: 5,
          admin: {
            description: 'Maximum number of users for this tenant',
          },
        },
        {
          name: 'features',
          type: 'group',
          fields: [
            {
              name: 'ecommerce',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'analytics',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'apiAccess',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'whiteLabel',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'subscription',
      type: 'group',
      fields: [
        {
          name: 'stripeCustomerId',
          type: 'text',
          admin: {
            description: 'Stripe customer ID for billing',
          },
        },
        {
          name: 'stripeSubscriptionId',
          type: 'text',
          admin: {
            description: 'Stripe subscription ID',
          },
        },
        {
          name: 'currentPeriodEnd',
          type: 'date',
          admin: {
            description: 'When the current billing period ends',
          },
        },
        {
          name: 'trialEndsAt',
          type: 'date',
          admin: {
            description: 'When the trial period ends (if applicable)',
          },
        },
      ],
    },
    {
      name: 'users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: {
        description: 'Users who belong to this tenant',
      },
    },
    {
      name: 'metadata',
      type: 'json',
      admin: {
        description: 'Additional metadata for this tenant',
      },
    },
  ],
}
