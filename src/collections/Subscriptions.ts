import type { CollectionConfig } from 'payload'

export const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['tenant', 'plan', 'status', 'currentPeriodEnd'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      return {
        'tenant.users.id': {
          equals: user?.id,
        },
      }
    },
    create: ({ req: { user } }) => Boolean(user?.roles?.includes('admin')),
    update: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      return {
        'tenant.users.id': {
          equals: user?.id,
        },
      }
    },
    delete: ({ req: { user } }) => Boolean(user?.roles?.includes('admin')),
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      admin: {
        description: 'The tenant this subscription belongs to',
      },
    },
    {
      name: 'stripeSubscriptionId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Stripe subscription ID',
      },
    },
    {
      name: 'stripeCustomerId',
      type: 'text',
      required: true,
      admin: {
        description: 'Stripe customer ID',
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
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Past Due', value: 'past_due' },
        { label: 'Canceled', value: 'canceled' },
        { label: 'Incomplete', value: 'incomplete' },
        { label: 'Incomplete Expired', value: 'incomplete_expired' },
        { label: 'Trialing', value: 'trialing' },
        { label: 'Unpaid', value: 'unpaid' },
      ],
      required: true,
    },
    {
      name: 'priceId',
      type: 'text',
      admin: {
        description: 'Stripe price ID for this subscription',
      },
    },
    {
      name: 'quantity',
      type: 'number',
      defaultValue: 1,
      admin: {
        description: 'Number of seats/users for this subscription',
      },
    },
    {
      name: 'currentPeriodStart',
      type: 'date',
      required: true,
      admin: {
        description: 'Start of current billing period',
      },
    },
    {
      name: 'currentPeriodEnd',
      type: 'date',
      required: true,
      admin: {
        description: 'End of current billing period',
      },
    },
    {
      name: 'cancelAtPeriodEnd',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether to cancel at the end of the current period',
      },
    },
    {
      name: 'canceledAt',
      type: 'date',
      admin: {
        description: 'When the subscription was canceled',
      },
    },
    {
      name: 'trialStart',
      type: 'date',
      admin: {
        description: 'Start of trial period',
      },
    },
    {
      name: 'trialEnd',
      type: 'date',
      admin: {
        description: 'End of trial period',
      },
    },
    {
      name: 'billingCycleAnchor',
      type: 'date',
      admin: {
        description: 'Determines the date of the first full invoice',
      },
    },
    {
      name: 'metadata',
      type: 'json',
      admin: {
        description: 'Additional metadata from Stripe',
      },
    },
  ],
}
