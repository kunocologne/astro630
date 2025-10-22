// Toggle CMS System
// CMS can be enabled/disabled via CMS_ENABLED environment variable
import { getCMSConfig } from './lib/cms-toggle'

const config = getCMSConfig()
export default config || {
  admin: { user: 'users' },
  collections: [],
  globals: [],
  secret: 'disabled',
  db: null,
} as any