import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { enabled } = await request.json()
    
    // Update .env.local file
    const envPath = path.join(process.cwd(), '.env.local')
    let envContent = ''
    
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8')
    }
    
    // Update or add CMS_ENABLED
    if (envContent.includes('CMS_ENABLED=')) {
      envContent = envContent.replace(
        /CMS_ENABLED=.*/,
        `CMS_ENABLED=${enabled}`
      )
    } else {
      envContent += `\nCMS_ENABLED=${enabled}\n`
    }
    
    fs.writeFileSync(envPath, envContent)
    
    return NextResponse.json({ 
      success: true, 
      enabled,
      message: `CMS ${enabled ? 'enabled' : 'disabled'} successfully`
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to toggle CMS' },
      { status: 500 }
    )
  }
}
