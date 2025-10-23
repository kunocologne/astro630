/**
 * CMS Toggle System
 * Allows turning CMS on/off without rebuilding
 */

export const isCMSEnabled = (): boolean => {
  return process.env.CMS_ENABLED === 'true'
}

export const getCMSConfig = () => {
  if (!isCMSEnabled()) {
    return null
  }

  return {
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
        slug: 'pages',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'content',
            type: 'richText',
          },
        ],
      },
      {
        slug: 'blog-posts',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'excerpt',
            type: 'textarea',
          },
          {
            name: 'content',
            type: 'richText',
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
          {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
          },
        ],
      },
      {
        slug: 'footer',
        fields: [
          {
            name: 'copyright',
            type: 'text',
          },
        ],
      },
    ],
    secret: process.env.PAYLOAD_SECRET || 'template-secret',
    db: null,
  }
}
