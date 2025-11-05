import type { Access } from 'payload'

export const publicAccess: Access = () => {
  // Public access - no restrictions
  return true
}
