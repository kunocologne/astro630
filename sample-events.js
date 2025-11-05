/**
 * Sample Events Data for Payload CMS
 *
 * Copy this data into Payload CMS at /admin/collections/events
 *
 * Instructions:
 * 1. Go to http://localhost:3000/admin
 * 2. Navigate to Collections → Events
 * 3. Click "Create New" for each event below
 * 4. Fill in the fields as specified
 * 5. Set Status (in sidebar) to "Available" or "Upcoming"
 * 6. Upload an image for each event (you can use placeholder images)
 * 7. Make sure to publish each event (set _status to "Published" if using drafts)
 */

const sampleEvents = [
  {
    title: 'BASS:MENT',
    description:
      'An immersive bass music experience featuring underground electronic artists. Expect deep sub-bass, atmospheric soundscapes, and a community of sound enthusiasts.',
    location: 'Cologne, Germany',
    date: '2024-06-15T22:00:00Z', // June 15, 2024 at 10:00 PM
    status: 'available', // or 'upcoming'
    ticketLink: 'https://example.com/tickets/bass-ment',
    // Image: Upload an image (bass/electronic music event style)
  },
  {
    title: 'SUN:SET',
    description:
      'Outdoor electronic music festival celebrating the golden hour. Featuring house, techno, and ambient sounds as the sun sets over the horizon.',
    location: 'Berlin, Germany',
    date: '2024-07-20T18:00:00Z', // July 20, 2024 at 6:00 PM
    status: 'available',
    ticketLink: 'https://example.com/tickets/sunset',
    // Image: Upload an image (sunset/outdoor festival style)
  },
  {
    title: '6:30 Community Night',
    description:
      'A monthly gathering for our community members. Live DJ sets, exclusive merch previews, and networking with fellow creatives.',
    location: 'Amsterdam, Netherlands',
    date: '2024-08-10T20:00:00Z', // August 10, 2024 at 8:00 PM
    status: 'upcoming',
    ticketLink: 'https://example.com/tickets/community-night',
    // Image: Upload an image (community/event style)
  },
  {
    title: 'Underground Sessions',
    description:
      'Intimate underground event featuring local and international DJs. Limited capacity, premium sound system, and exclusive atmosphere.',
    location: 'Hamburg, Germany',
    date: '2024-09-05T23:00:00Z', // September 5, 2024 at 11:00 PM
    status: 'upcoming',
    ticketLink: 'https://example.com/tickets/underground-sessions',
    // Image: Upload an image (underground/warehouse style)
  },
  {
    title: 'Culture Connect',
    description:
      'A celebration of music, art, and community. Featuring live performances, art installations, and pop-up shop with exclusive items.',
    location: 'Munich, Germany',
    date: '2024-10-12T19:00:00Z', // October 12, 2024 at 7:00 PM
    status: 'available',
    ticketLink: 'https://example.com/tickets/culture-connect',
    // Image: Upload an image (cultural event style)
  },
]

// Console output for easy copy-paste
console.log('\n📅 Sample Events for Payload CMS\n')
console.log('='.repeat(60))
sampleEvents.forEach((event, i) => {
  console.log(`\n${i + 1}. ${event.title}`)
  console.log(`   Description: ${event.description}`)
  console.log(`   Location: ${event.location}`)
  console.log(`   Date: ${event.date}`)
  console.log(`   Status: ${event.status}`)
  console.log(`   Ticket Link: ${event.ticketLink || 'N/A'}`)
})
console.log('\n' + '='.repeat(60))
console.log('\n💡 Instructions:')
console.log('   1. Go to http://localhost:3000/admin')
console.log('   2. Navigate to Collections → Events')
console.log('   3. Click "Create New" for each event')
console.log('   4. Fill in the fields above')
console.log('   5. Upload an image for each event')
console.log('   6. Set Status to "Available" or "Upcoming"')
console.log('   7. Make sure to publish (set _status to "Published" if using drafts)')
console.log('\n')
