import type { Payload } from 'payload'

interface SeedParams {
  payload: Payload
  req: any
}

/**
 * Seed function for database initialization
 * This is a stub - you can add seed data here if needed
 */
export async function seed({ payload, req }: SeedParams): Promise<void> {
  // Stub implementation - no seed data needed
  // You can add seed logic here if you want to populate initial data
  payload.logger.info('Seed function called - no seed data configured')
}
