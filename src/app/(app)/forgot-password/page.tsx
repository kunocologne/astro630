import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/lib/utils/mergeOpenGraph'
import React from 'react'

import { ForgotPasswordForm } from '@/features/auth/ForgotPasswordForm'

export default async function ForgotPasswordPage() {
  return (
    <div className="container py-16">
      <ForgotPasswordForm />
    </div>
  )
}

export const metadata: Metadata = {
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Forgot Password',
    url: '/forgot-password',
  }),
  title: 'Forgot Password',
}
