import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['./tests/int/**/*.spec.ts', './tests/unit/**/*.test.ts'],
    exclude: ['./tests/e2e/**/*', './tests/accessibility.test.tsx'],
  },
})
