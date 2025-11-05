import type { Access } from 'payload'

export const adminOrCustomerOwner: Access = ({ req: { user } }) => {
  if (user?.role === 'admin') {
    return true
  }
  // For anonymous users, allow access (for cart creation)
  if (!user) {
    return true
  }
  // Allow users to access their own records
  return {
    customer: {
      equals: user.id,
    },
  }
}
