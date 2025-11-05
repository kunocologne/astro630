'use client'

import React, { useEffect, useState } from 'react'
import { Banner } from '@payloadcms/ui'
import { formatCurrency } from '@/lib/utils/sales'

const baseClass = 'before-dashboard'

interface SalesStats {
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
}

export const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<SalesStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Use relative URL - Payload will handle authentication via cookies
        const response = await fetch('/api/sales/stats', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
          throw new Error(errorData.error || `HTTP ${response.status}: Failed to fetch sales stats`)
        }

        const data = await response.json()
        setStats(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching sales stats:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    void fetchStats()
  }, [])

  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="info">
        <h4>Sales Overview</h4>
        <p>
          Quick view of your sales statistics. For detailed analytics, visit the full dashboard.
        </p>
      </Banner>

      {loading && (
        <div className={`${baseClass}__loading`} style={{ padding: '1rem', textAlign: 'center' }}>
          <p>Loading sales data...</p>
        </div>
      )}

      {error && !error.includes("can't be found") && (
        <Banner className={`${baseClass}__error`} type="error">
          <strong>Error loading sales data:</strong> {error}
          <br />
          <small>Make sure you're logged in as an admin and have orders in the system.</small>
        </Banner>
      )}

      {stats ? (
        <div
          className={`${baseClass}__stats`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          <div
            className={`${baseClass}__stat-card`}
            style={{
              padding: '1.25rem',
              background: 'var(--theme-elevation-50)',
              borderRadius: 'var(--style-radius-md)',
              border: '1px solid var(--theme-elevation-100)',
            }}
          >
            <h5
              style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.875rem',
                color: 'var(--theme-text-500)',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Total Revenue
            </h5>
            <p
              style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'var(--theme-success-500)',
              }}
            >
              {formatCurrency(stats.totalRevenue)}
            </p>
          </div>

          <div
            className={`${baseClass}__stat-card`}
            style={{
              padding: '1.25rem',
              background: 'var(--theme-elevation-50)',
              borderRadius: 'var(--style-radius-md)',
              border: '1px solid var(--theme-elevation-100)',
            }}
          >
            <h5
              style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.875rem',
                color: 'var(--theme-text-500)',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Total Orders
            </h5>
            <p
              style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'var(--theme-text)',
              }}
            >
              {stats.totalOrders.toLocaleString()}
            </p>
          </div>

          <div
            className={`${baseClass}__stat-card`}
            style={{
              padding: '1.25rem',
              background: 'var(--theme-elevation-50)',
              borderRadius: 'var(--style-radius-md)',
              border: '1px solid var(--theme-elevation-100)',
            }}
          >
            <h5
              style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.875rem',
                color: 'var(--theme-text-500)',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Avg Order Value
            </h5>
            <p
              style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'var(--theme-text)',
              }}
            >
              {formatCurrency(stats.averageOrderValue)}
            </p>
          </div>
        </div>
      ) : null}

      {stats && stats.totalOrders === 0 && !loading && (
        <Banner className={`${baseClass}__empty`} type="default">
          <strong>No orders yet</strong>
          <br />
          <small>Once customers start placing orders, sales statistics will appear here.</small>
        </Banner>
      )}

      <div
        className={`${baseClass}__footer`}
        style={{
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--theme-elevation-100)',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--theme-text-500)' }}>
          <a
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--theme-success-500)', textDecoration: 'none' }}
          >
            View Full Dashboard →
          </a>
        </p>
      </div>
    </div>
  )
}
