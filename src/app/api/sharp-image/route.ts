import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const imagePath = searchParams.get('path')

    if (!imagePath) {
      return new NextResponse('Missing image path', { status: 400 })
    }

    // Security: ensure the path is within public/media
    const safePath = path.normalize(imagePath).replace(/^(\.\.\/)+/, '')
    if (!safePath.startsWith('media/')) {
      return new NextResponse('Invalid path', { status: 400 })
    }

    const fullPath = path.join(process.cwd(), 'public', safePath)

    if (!fs.existsSync(fullPath)) {
      return new NextResponse('Image not found', { status: 404 })
    }

    // Read and process image with Sharp
    const imageBuffer = fs.readFileSync(fullPath)

    // Sharpen the image using Sharp's sharpen filter
    const sharpened = await sharp(imageBuffer)
      .sharpen({
        sigma: 1.5, // Sharpening radius
        flat: 1.0, // Flat area threshold
        jagged: 2.0, // Jagged area threshold
      })
      .png({
        quality: 100,
        compressionLevel: 9,
      })
      .toBuffer()

    return new NextResponse(sharpened, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error processing image:', error)
    return new NextResponse('Error processing image', { status: 500 })
  }
}
