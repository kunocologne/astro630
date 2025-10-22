'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, Database, Globe } from 'lucide-react'

interface CMSStatus {
  enabled: boolean
  collections: number
  globals: number
}

export const CMSToggle: React.FC = () => {
  const [cmsStatus, setCmsStatus] = useState<CMSStatus>({
    enabled: false,
    collections: 0,
    globals: 0
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check CMS status
    fetch('/api/cms/status')
      .then(res => res.json())
      .then(data => setCmsStatus(data))
      .catch(() => {
        // CMS not available
        setCmsStatus({ enabled: false, collections: 0, globals: 0 })
      })
  }, [])

  const toggleCMS = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/cms/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: !cmsStatus.enabled })
      })
      
      if (response.ok) {
        setCmsStatus(prev => ({ ...prev, enabled: !prev.enabled }))
      }
    } catch (error) {
      console.error('Failed to toggle CMS:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          CMS Status
        </CardTitle>
        <CardDescription>
          Toggle content management system on/off
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">CMS Status</span>
          <Badge variant={cmsStatus.enabled ? "default" : "secondary"}>
            {cmsStatus.enabled ? "Enabled" : "Disabled"}
          </Badge>
        </div>
        
        {cmsStatus.enabled && (
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Collections:</span>
              <span>{cmsStatus.collections}</span>
            </div>
            <div className="flex justify-between">
              <span>Globals:</span>
              <span>{cmsStatus.globals}</span>
            </div>
          </div>
        )}
        
        <Button 
          onClick={toggleCMS}
          disabled={isLoading}
          variant={cmsStatus.enabled ? "destructive" : "default"}
          className="w-full"
        >
          {isLoading ? "Updating..." : cmsStatus.enabled ? "Disable CMS" : "Enable CMS"}
        </Button>
        
        <div className="text-xs text-muted-foreground">
          {cmsStatus.enabled 
            ? "CMS is active. Content can be managed through the admin panel."
            : "CMS is disabled. Site runs in static mode."
          }
        </div>
      </CardContent>
    </Card>
  )
}
