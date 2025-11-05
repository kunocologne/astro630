import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not defined')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

// Email templates and utilities
export const sendTransactionalEmail = async ({
  to,
  subject,
  html,
  from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
}: {
  to: string | string[]
  subject: string
  html: string
  from?: string
}) => {
  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}

// Order confirmation email
export const sendOrderConfirmationEmail = async ({
  to,
  orderNumber,
  total,
  items,
}: {
  to: string
  orderNumber: string
  total: string
  items: { name: string; quantity: number; price: string }[]
}) => {
  const itemsHtml = items
    .map(
      (item) => `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${item.price}</td>
    </tr>
  `,
    )
    .join('')

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0 0 10px 0; font-size: 24px; color: #000;">Order Confirmation</h1>
          <p style="margin: 0; font-size: 16px; color: #666;">Order #${orderNumber}</p>
        </div>
        
        <p style="font-size: 16px;">Thank you for your order! We've received your payment and are processing your order.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #f9f9f9;">
              <th style="padding: 12px 8px; text-align: left; border-bottom: 2px solid #ddd;">Item</th>
              <th style="padding: 12px 8px; text-align: center; border-bottom: 2px solid #ddd;">Quantity</th>
              <th style="padding: 12px 8px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding: 12px 8px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">Total:</td>
              <td style="padding: 12px 8px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">${total}</td>
            </tr>
          </tfoot>
        </table>
        
        <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Questions about your order?</p>
          <p style="margin: 0; font-size: 14px;"><a href="${process.env.NEXT_PUBLIC_SERVER_URL}/find-order" style="color: #0070f3; text-decoration: none;">Track your order</a></p>
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
          This is an automated email. Please do not reply.
        </p>
      </body>
    </html>
  `

  return sendTransactionalEmail({
    to,
    subject: `Order Confirmation - #${orderNumber}`,
    html,
  })
}

// Welcome email
export const sendWelcomeEmail = async ({ to, name }: { to: string; name: string }) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0 0 10px 0; font-size: 24px; color: #000;">Welcome${name ? `, ${name}` : ''}!</h1>
        </div>
        
        <p style="font-size: 16px;">Thank you for creating an account with us.</p>
        
        <p style="font-size: 16px;">You can now:</p>
        <ul style="font-size: 16px; line-height: 1.8;">
          <li>Track your orders</li>
          <li>Save your shipping addresses</li>
          <li>Manage your account settings</li>
        </ul>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/account" style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 500;">Go to My Account</a>
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
          This is an automated email. Please do not reply.
        </p>
      </body>
    </html>
  `

  return sendTransactionalEmail({
    to,
    subject: 'Welcome to our store!',
    html,
  })
}

// Password reset email
export const sendPasswordResetEmail = async ({
  to,
  resetToken,
}: {
  to: string
  resetToken: string
}) => {
  const resetUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password?token=${resetToken}`

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0 0 10px 0; font-size: 24px; color: #000;">Password Reset</h1>
        </div>
        
        <p style="font-size: 16px;">You requested a password reset for your account.</p>
        
        <p style="font-size: 16px;">Click the button below to reset your password. This link will expire in 1 hour.</p>
        
        <div style="margin: 30px 0; text-align: center;">
          <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 500;">Reset Password</a>
        </div>
        
        <p style="font-size: 14px; color: #666;">If you didn't request this, you can safely ignore this email.</p>
        
        <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
          This is an automated email. Please do not reply.
        </p>
      </body>
    </html>
  `

  return sendTransactionalEmail({
    to,
    subject: 'Password Reset Request',
    html,
  })
}
