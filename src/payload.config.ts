// Minimal Payload config for template system
// This prevents build errors while maintaining compatibility
export default {
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'password',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'products',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'categories',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'header',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
    {
      slug: 'footer',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
  ],
  secret: 'template-secret',
  db: null,
} as any