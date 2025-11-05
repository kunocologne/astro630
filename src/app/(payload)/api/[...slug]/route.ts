/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
// import '@payloadcms/next/css'
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from '@payloadcms/next/routes'

// Runtime validation wrapper to catch PAYLOAD_SECRET errors before Payload uses it
function withSecretValidation(
  handler: (request: Request, args: { params: Promise<{ slug?: string[] }> }) => Promise<Response>,
) {
  return async (
    request: Request,
    args: { params: Promise<{ slug?: string[] }> },
  ): Promise<Response> => {
    // Validate PAYLOAD_SECRET is available before Payload processes the request
    const secret = process.env.PAYLOAD_SECRET
    if (!secret || secret.trim().length < 32) {
      console.error('❌ PAYLOAD_SECRET is missing or invalid in API route')
      console.error('   This often happens after hot reload or navigation')
      console.error('   Solution: Restart the development server (bun dev)')
      return new Response(
        JSON.stringify({
          error: 'PAYLOAD_SECRET is missing or invalid. Please restart the development server.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
    return handler(request, args)
  }
}

export const GET = withSecretValidation(REST_GET(config))
export const POST = withSecretValidation(REST_POST(config))
export const DELETE = withSecretValidation(REST_DELETE(config))
export const PATCH = withSecretValidation(REST_PATCH(config))
export const PUT = withSecretValidation(REST_PUT(config))
export const OPTIONS = withSecretValidation(REST_OPTIONS(config))
