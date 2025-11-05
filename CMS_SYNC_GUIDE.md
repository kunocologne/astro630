# CMS ↔ Website Sync Guide

## ✅ How It Works

The website **automatically reflects** what's in Payload CMS:

### **Products**

- ✅ **Shows on website:** Only products with:
  - Status = `Published`
  - Featured = `true`
- ❌ **Hidden from website:**
  - Draft products
  - Unfeatured products
  - Deleted products

### **Events**

- ✅ **Shows on website:** Only events with:
  - Status = `Available` or `Upcoming`
  - Published status (not drafts)
- ❌ **Hidden from website:**
  - Draft events
  - Events with status = `Sold Out` or `Cancelled`
  - Deleted events

### **Charity**

- ✅ **Shows on website:** Always (it's a Global)
- ✅ **Updates immediately** when you change it in `/admin/globals/charity`

---

## 🔄 Real-Time Updates

### **When You Add Something:**

1. Go to `/admin`
2. Create a new product/event
3. Set status to `Published`
4. For products: Check `Featured` checkbox
5. For events: Set status to `Available` or `Upcoming`
6. **Refresh the website** - it appears immediately!

### **When You Delete Something:**

1. Go to `/admin`
2. Delete the product/event
3. **Refresh the website** - it disappears immediately!

### **When You Update Something:**

1. Edit in `/admin`
2. Save changes
3. **Refresh the website** - changes appear immediately!

---

## ⚠️ Important Notes

### **For Products to Show:**

- ✅ Status must be `Published` (not `Draft`)
- ✅ `Featured` checkbox must be checked
- ✅ Must have at least one image in gallery
- ✅ Must have a price

### **For Events to Show:**

- ✅ Status must be `Available` or `Upcoming`
- ✅ Must be `Published` (not `Draft`)
- ✅ Must have an image
- ✅ Must have a date and location

### **If Something Doesn't Appear:**

1. Check it's `Published` (not `Draft`)
2. Check the status field (for events: `Available` or `Upcoming`)
3. Check `Featured` checkbox (for products)
4. Refresh the website page
5. Clear browser cache if needed

---

## 🎯 Quick Reference

| Action             | What to Do                                                                       | Result                      |
| ------------------ | -------------------------------------------------------------------------------- | --------------------------- |
| **Add Product**    | Create → Set Status `Published` → Check `Featured` → Add Image → Save            | ✅ Appears on homepage      |
| **Remove Product** | Delete OR Uncheck `Featured` OR Set Status `Draft`                               | ❌ Disappears from homepage |
| **Add Event**      | Create → Set Status `Available` or `Upcoming` → Set Published → Add Image → Save | ✅ Appears on homepage      |
| **Remove Event**   | Delete OR Set Status `Sold Out` or `Cancelled` OR Set to Draft                   | ❌ Disappears from homepage |
| **Update Charity** | Edit `/admin/globals/charity` → Save                                             | ✅ Updates immediately      |

---

## 💡 Tips

1. **Always set status to `Published`** for content to appear on the website
2. **Use `Draft` status** to work on content without it showing publicly
3. **Refresh the website** after making changes (changes appear immediately, but browser may cache)
4. **Check `Featured`** on products you want on the homepage (max 4 shown)
5. **Deleted items** are automatically removed from the website
