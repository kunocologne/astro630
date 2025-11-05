export function slugField(fieldToUse = 'title') {
  return {
    name: 'slug',
    type: 'text',
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [
        ({ value, data }) => {
          if (typeof data === 'object' && data !== null && fieldToUse in data) {
            return (
              value ||
              String(data[fieldToUse])
                ?.toLowerCase()
                ?.trim()
                ?.replace(/[^\w\s-]/g, '')
                ?.replace(/[\s_-]+/g, '-')
                ?.replace(/^-+|-+$/g, '')
            )
          }
          return value
        },
      ],
    },
  }
}
