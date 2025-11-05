'use client'

import { Calendar, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/types/payload-types'
import { format } from 'date-fns'

interface EventsSectionProps {
  events: Event[]
}

// Helper to get event image URL
function getEventImage(event: Event): string {
  if (event.image && typeof event.image === 'object') {
    return event.image.url || event.image.filename || '/media/placeholder.jpg'
  }
  return '/media/placeholder.jpg'
}

// Helper to format date
function formatEventDate(date: string | Date): { date: string; time: string } {
  try {
    const eventDate = typeof date === 'string' ? new Date(date) : date
    return {
      date: format(eventDate, 'EEEE'), // Day name (e.g., "Friday")
      time: format(eventDate, 'HH:mm'), // Time (e.g., "00:00")
    }
  } catch {
    return { date: 'TBA', time: 'TBA' }
  }
}

export function EventsSection({ events }: EventsSectionProps) {
  const displayEvents = events.length > 0 ? events : []
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block text-xs uppercase tracking-wider text-gray-400">
            UPCOMING EXPERIENCES
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Events Calendar</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            While our main focus is our shop collection, we occasionally host events to celebrate
            our community and culture.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {displayEvents.length === 0 ? (
            <div className="col-span-full py-12 text-center">
              <p className="text-xl text-white/70">
                No upcoming events scheduled. Check back soon!
              </p>
            </div>
          ) : (
            displayEvents.map((event) => {
              const { date: dateStr, time: timeStr } = event.date
                ? formatEventDate(event.date)
                : { date: 'TBA', time: 'TBA' }
              const isAvailable = event.status === 'available' || event.status === 'upcoming'

              return (
                <div
                  key={event.id}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all hover:border-white/20"
                >
                  <div className="relative h-64">
                    <Image
                      src={getEventImage(event)}
                      alt={event.title || 'Event'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute right-4 top-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          isAvailable ? 'bg-green-500 text-black' : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {event.status === 'available'
                          ? 'Available'
                          : event.status === 'sold-out'
                            ? 'Sold Out'
                            : event.status === 'cancelled'
                              ? 'Cancelled'
                              : 'Upcoming'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-4 text-2xl font-bold">{event.title}</h3>

                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{dateStr}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{timeStr}</span>
                      </div>
                    </div>

                    {event.description && <p className="mb-6 text-gray-300">{event.description}</p>}

                    {event.ticketLink && isAvailable ? (
                      <Link
                        href={event.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-black transition-colors hover:bg-gray-200"
                      >
                        Buy Tickets Now
                      </Link>
                    ) : (
                      <button
                        disabled={!isAvailable}
                        className={`w-full rounded-lg px-6 py-3 font-semibold transition-colors ${
                          isAvailable
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'cursor-not-allowed bg-gray-700 text-gray-400'
                        }`}
                      >
                        {isAvailable ? 'Buy Tickets Now' : 'Sold Out'}
                      </button>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Past Events Link */}
        <div className="mt-12 text-center">
          <button className="text-gray-400 underline transition-colors hover:text-white">
            View Past Events
          </button>
        </div>
      </div>
    </section>
  )
}
