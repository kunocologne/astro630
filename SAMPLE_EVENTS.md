# 📅 Sample Events for Payload CMS

Copy these events into your Payload CMS at `/admin/collections/events`

---

## How to Add Events

1. **Go to:** `http://localhost:3000/admin`
2. **Navigate to:** Collections → Events
3. **Click:** "Create New"
4. **Fill in the fields** (see below)
5. **Upload an image** for each event
6. **Set Status** (in sidebar) to "Available" or "Upcoming"
7. **Publish** the event (set `_status` to "Published" if using drafts)
8. **Save**

---

## Sample Events

### 1. BASS:MENT

**Title:** `BASS:MENT`

**Description:**

```
An immersive bass music experience featuring underground electronic artists. Expect deep sub-bass, atmospheric soundscapes, and a community of sound enthusiasts.
```

**Location:** `Cologne, Germany`

**Date:** `June 15, 2024 at 10:00 PM` (or `2024-06-15T22:00:00Z`)

**Status:** `Available` (select from dropdown in sidebar)

**Ticket Link:** `https://example.com/tickets/bass-ment`

**Image:** Upload an image (bass/electronic music event style)

---

### 2. SUN:SET

**Title:** `SUN:SET`

**Description:**

```
Outdoor electronic music festival celebrating the golden hour. Featuring house, techno, and ambient sounds as the sun sets over the horizon.
```

**Location:** `Berlin, Germany`

**Date:** `July 20, 2024 at 6:00 PM` (or `2024-07-20T18:00:00Z`)

**Status:** `Available`

**Ticket Link:** `https://example.com/tickets/sunset`

**Image:** Upload an image (sunset/outdoor festival style)

---

### 3. 6:30 Community Night

**Title:** `6:30 Community Night`

**Description:**

```
A monthly gathering for our community members. Live DJ sets, exclusive merch previews, and networking with fellow creatives.
```

**Location:** `Amsterdam, Netherlands`

**Date:** `August 10, 2024 at 8:00 PM` (or `2024-08-10T20:00:00Z`)

**Status:** `Upcoming`

**Ticket Link:** `https://example.com/tickets/community-night`

**Image:** Upload an image (community/event style)

---

### 4. Underground Sessions

**Title:** `Underground Sessions`

**Description:**

```
Intimate underground event featuring local and international DJs. Limited capacity, premium sound system, and exclusive atmosphere.
```

**Location:** `Hamburg, Germany`

**Date:** `September 5, 2024 at 11:00 PM` (or `2024-09-05T23:00:00Z`)

**Status:** `Upcoming`

**Ticket Link:** `https://example.com/tickets/underground-sessions`

**Image:** Upload an image (underground/warehouse style)

---

### 5. Culture Connect

**Title:** `Culture Connect`

**Description:**

```
A celebration of music, art, and community. Featuring live performances, art installations, and pop-up shop with exclusive items.
```

**Location:** `Munich, Germany`

**Date:** `October 12, 2024 at 7:00 PM` (or `2024-10-12T19:00:00Z`)

**Status:** `Available`

**Ticket Link:** `https://example.com/tickets/culture-connect`

**Image:** Upload an image (cultural event style)

---

## ✅ Checklist for Each Event

- [ ] Title filled in
- [ ] Description filled in
- [ ] Location filled in
- [ ] Date and time set (use date picker)
- [ ] Image uploaded (required)
- [ ] Status set to "Available" or "Upcoming" (in sidebar)
- [ ] Ticket link added (optional)
- [ ] Event is published (`_status = "Published"` if using drafts)
- [ ] Saved successfully

---

## 🎯 What Appears on the Website

Once events are added and published:

- Events appear in the **Events Calendar** section on the homepage
- Only events with status "Available" or "Upcoming" are shown
- Events are sorted by date (earliest first)
- Maximum 6 events are displayed
- Each event shows: image, title, location, date, time, description, and ticket button

---

## 🔍 Troubleshooting

**Event not showing on website?**

- Check that status is "Available" or "Upcoming" (not "Sold Out" or "Cancelled")
- Make sure event is published (`_status = "Published"`)
- Ensure all required fields are filled (title, location, date, image)
- Check browser console for debug logs: `[Homepage] Query found X events...`
