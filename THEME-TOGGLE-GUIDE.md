# SPECTRUM - Theme Toggle Guide

## 🌞 Light Mode Experience

**Primary Colors:**

- Background: `#FFFFFF` (Pure white)
- Alt Background: `#F9FAFB` (Off-white)
- Text: `#111827` (Dark gray)
- Cards: `rgba(255, 255, 255, 0.8)` (Opaque white glass)
- Borders: `#E5E7EB` (Light gray)

**Visual Feel:**

- Clean, minimal, and bright
- High contrast for readability
- Glassmorphism with **light blur** (10px)
- Semi-transparent white cards
- Soft shadows
- Professional and modern

**Card Styling:**

- White with 80% opacity
- 10px blur backdrop
- Light borders (60% opacity white)
- Minimal shadow: `0 8px 32px rgba(0, 0, 0, 0.1)`
- Hover: Orange border + lift animation

---

## 🌙 Dark Mode Experience

**Primary Colors:**

- Background: `#000000` (Pure black)
- Alt Background: `#0A0A0A` (Almost black)
- Text: `#FFFFFF` (Pure white)
- Cards: `rgba(20, 20, 25, 0.9)` (Dark opaque glass)
- Borders: `rgba(255, 255, 255, 0.08)` (Very subtle white)

**Visual Feel:**

- Bold, immersive, and premium
- Lower contrast for eye comfort
- Glassmorphism with **strong blur** (20px)
- Dark semi-transparent cards
- Deeper shadows
- High-end and sophisticated

**Card Styling:**

- Almost-black with 90% opacity
- 20px blur backdrop (more dramatic)
- Very subtle borders (8% opacity white)
- Deeper shadow: `0 8px 32px rgba(0, 0, 0, 0.3)`
- Hover: Orange border + lift animation

---

## 🎨 Consistent Elements

### Orange Accent (`#FF6B35`)

- **Same in both modes** - Primary brand color
- Used for buttons, links, hover states
- Creates visual continuity

### Animations

- **Light Mode:** 500ms smooth transition
- **Dark Mode:** 500ms smooth transition
- All elements smoothly fade between themes

### Glassmorphism Effect

- **Light:** More transparent, softer blur
- **Dark:** More opaque, stronger blur
- Both maintain the premium feel

---

## 🔄 How the Toggle Works

1. **Click the toggle** in the header (Sun/Moon icon)
2. **Smooth 500ms transition** between themes
3. **Preference saved** to localStorage
4. **Persists across sessions**

### HTML/Body Changes:

```html
<!-- Light Mode (Default) -->
<html>
  <!-- No .dark class -->

  <!-- Dark Mode -->
  <html class="dark"></html>
</html>
```

---

## 📊 Visual Differences

| Element    | Light             | Dark             |
| ---------- | ----------------- | ---------------- |
| Background | Pure White        | Pure Black       |
| Cards      | White glass (80%) | Dark glass (90%) |
| Text       | Dark gray         | Pure white       |
| Borders    | Light gray        | Subtle white     |
| Shadows    | Soft/subtle       | Deep/pronounced  |
| Blur       | 10px              | 20px             |
| Contrast   | High              | Medium-High      |
| Vibe       | Minimal & Clean   | Premium & Bold   |

---

## 🎯 Key Separation Points

### Background

- Light: Alternates between white and off-white
- Dark: Alternates between black and almost-black

### Cards

- Light: Opaque white with subtle blur
- Dark: Near-opaque dark with strong blur

### Text

- Light: Dark gray for readability on white
- Dark: Pure white for readability on black

### Borders

- Light: Visible gray borders
- Dark: Almost invisible subtle borders

### Shadows

- Light: Minimal (0.1 opacity)
- Dark: Deeper (0.3+ opacity)

---

## 🌟 Premium Features

Both themes maintain:
✅ Orange brand accent (#FF6B35)
✅ Glassmorphism styling
✅ Smooth animations (300-500ms)
✅ Hover effects (border + shadow + lift)
✅ Responsive design
✅ Accessibility standards

The toggle switches between **two visually distinct, fully-featured experiences** that share the same brand and structure but have completely different visual feels.
