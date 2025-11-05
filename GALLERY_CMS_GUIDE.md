# 📸 Gallery CMS Guide

## How to Manage Gallery Images in Payload CMS

The gallery section on your homepage is now fully managed through Payload CMS. You can choose which images to display and control their order.

---

## 📍 Access Gallery Collection

1. **Go to:** `http://localhost:3000/admin`
2. **Navigate to:** Collections → Gallery
3. **Click:** "Create New" to add a new gallery image

---

## ✏️ Adding Gallery Images

### Required Fields:

- **Title** (required)
  - Image title/caption (shown on hover in the gallery)
  - Example: "Underground Sessions", "Live Performance", "Street Culture"

- **Image** (required)
  - Upload an image from your Media library
  - Click "Select existing media" or "Upload new"
  - Recommended: Square or landscape images (800x600px or similar)

### Optional Fields:

- **Order** (sidebar)
  - Display order number (lower numbers appear first)
  - Default: 0
  - Example: Set to 1, 2, 3... to control the sequence

- **Status** (sidebar)
  - Set to "Published" to show on website
  - Set to "Draft" to hide (work in progress)
  - Default: "Draft"

---

## ✅ Checklist for Each Gallery Image

- [ ] Title filled in
- [ ] Image uploaded (required)
- [ ] Order set (optional, for custom sorting)
- [ ] Status set to "Published" (in sidebar)
- [ ] Image is published (`_status = "Published"` if using drafts)
- [ ] Saved successfully

---

## 🎯 What Appears on the Website

Once gallery images are added and published:

- Images appear in the **Gallery** section on the homepage
- Only images with status "Published" are shown
- Images are sorted by `order` field (ascending)
- Maximum 20 images are displayed (for performance)
- Each image shows with its title as hover text
- Images appear in the circular WebGL gallery animation

---

## 📋 Best Practices

1. **Image Quality:**
   - Use high-quality images (800x600px minimum)
   - Optimize images before uploading (keep file sizes reasonable)
   - Square or landscape orientation works best

2. **Ordering:**
   - Use the `order` field to control display sequence
   - Lower numbers appear first
   - If you don't set order, images will be sorted by creation date

3. **Titles:**
   - Keep titles short and descriptive
   - Use titles that match your brand/events
   - Examples: "BASS:MENT Event", "Community Night", "Studio Session"

4. **Quantity:**
   - Recommended: 6-12 images for best visual effect
   - Too many images may slow down the gallery animation
   - You can always add/remove images as needed

---

## 🔍 Troubleshooting

**Gallery image not showing on website?**

- Check that status is "Published" (not "Draft")
- Make sure image is published (`_status = "Published"` if using drafts)
- Ensure image is uploaded (not just selected)
- Check browser console for debug logs: `[Homepage] Query found X gallery items...`

**Images in wrong order?**

- Check the `order` field for each image
- Lower numbers appear first
- If order is the same, images are sorted by creation date

**Gallery section shows "No gallery images available"?**

- This means no published images were found
- Add at least one gallery image and set status to "Published"
- The section will show fallback images if no CMS images are available

---

## 🎨 Example Gallery Images

Here are some example titles you can use:

- "Underground Sessions"
- "Live Performance"
- "Street Culture"
- "Urban Vibes"
- "Night Sessions"
- "Studio Life"
- "Crowd Energy"
- "Bass Drops"
- "Street Art"
- "Hip Hop Culture"
- "Community Night"
- "6:30 Events"

---

## 💡 Tips

- **Quick Batch Upload:** Upload multiple images at once, then edit each one to add titles and set order
- **Reordering:** Update the `order` field to change display sequence without deleting images
- **Draft Mode:** Use "Draft" status to prepare images before publishing
- **Replace Images:** Edit existing gallery items to replace images without losing order/title
