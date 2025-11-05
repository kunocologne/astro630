import type { FieldAccess } from 'payload'

export const customerOnlyFieldAccess: FieldAccess = ({ req: { user } }) => {
  // Only customers (non-admins) can access this field
  return user?.role !== 'admin'
}
