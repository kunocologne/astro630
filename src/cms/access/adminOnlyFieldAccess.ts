import type { FieldAccess } from 'payload'

export const adminOnlyFieldAccess: FieldAccess = ({ req: { user } }) => {
  return user?.role === 'admin'
}
