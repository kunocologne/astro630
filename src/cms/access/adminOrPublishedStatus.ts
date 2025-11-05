import type { Access } from 'payload'

export const adminOrPublishedStatus: Access = ({ req: { user } }) => {
  if (user?.role === 'admin') {
    return true
  }
  // Public users can only see published content
  return {
    _status: {
      equals: 'published',
    },
  }
}
