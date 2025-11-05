# 🔄 Payload CMS - Complete Workflow Guide

## 🎯 **"Wie sehe ich meine Änderungen im Payload Admin?"**

### **Workflow: Von Code zu Admin-Dashboard**

```
Code-Änderung → Migration → Admin-Dashboard
```

---

## 📋 **Schritt-für-Schritt Anleitung**

### **Szenario: Neues Feld zu Collection hinzufügen**

#### **Schritt 1: Code-Änderung**

```typescript
// src/cms/collections/Products.ts
export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    // ⬇️ NEUES FELD
    {
      name: 'sku',
      type: 'text',
      required: false,
      admin: {
        description: 'Stock Keeping Unit',
      },
    },
  ],
}
```

**✅ Gespeichert**

---

#### **Schritt 2: Dev-Server starten (Auto-Sync)**

```bash
bun dev
```

**Was passiert:**

- ✅ Payload erkennt Schema-Änderungen automatisch
- ✅ SQLite-Datenbank wird synchronisiert
- ✅ Neues Feld ist sofort verfügbar

**Öffne Admin:**

```
http://localhost:3000/admin
```

**✅ Neues Feld `sku` ist jetzt sichtbar und editierbar!**

---

#### **Schritt 3: Migration für Produktion erstellen**

```bash
# Migration erstellen
bun run migrate:create

# Output:
# ✅ Created migration: 20250129_add_sku_to_products.ts
```

**Was wurde erstellt:**

```typescript
// src/cms/migrations/20250129_add_sku_to_products.ts
import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
    ALTER TABLE "products" ADD COLUMN "sku" text;
  `)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
    ALTER TABLE "products" DROP COLUMN "sku";
  `)
}
```

---

#### **Schritt 4: Migration lokal testen**

```bash
# Führe Migration aus
bun run migrate

# Prüfe Status
bun run migrate:status

# Output:
# ✅ Migration 20250129_add_sku_to_products applied
# ✅ Database is up to date
```

---

#### **Schritt 5: Deployment zu Produktion**

```bash
# Commit alles zusammen
git add src/cms/collections/Products.ts
git add src/cms/migrations/20250129_add_sku_to_products.ts
git commit -m "feat: Add SKU field to products"
git push origin main
```

**Vercel führt automatisch aus:**

```
1. bun install
2. bun run migrate        ← Postgres-Migration
3. bun run build          ← Next.js Build
4. Deploy ✅
```

---

#### **Schritt 6: Verifizierung in Production**

```
1. Öffne: https://deine-domain.vercel.app/admin
2. Gehe zu Products
3. ✅ Neues Feld `sku` ist sichtbar und editierbar!
```

---

## 🔄 **Kompletter Workflow: Alle Änderungstypen**

### **1. Neues Feld hinzufügen**

```typescript
// Code-Änderung
{
  name: 'newField',
  type: 'text',
}
```

```bash
# Lokal (Auto-Sync)
bun dev  # ✅ Sofort sichtbar

# Produktion (Migration)
bun run migrate:create
bun run migrate
git push origin main
```

---

### **2. Neuen Block erstellen**

```typescript
// src/cms/blocks/TestimonialBlock/config.ts
export const TestimonialBlock = {
  slug: 'testimonial',
  fields: [
    { name: 'quote', type: 'textarea' },
    { name: 'author', type: 'text' },
    { name: 'company', type: 'text' },
  ],
}
```

```typescript
// Registriere in Pages Collection
// src/cms/collections/Pages/index.ts
import { TestimonialBlock } from '@/cms/blocks/TestimonialBlock/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        TestimonialBlock, // ← Hinzufügen
      ],
    },
  ],
}
```

```bash
# Workflow
bun dev                    # Lokal testen
bun run migrate:create     # Migration erstellen
bun run migrate           # Migration ausführen
git push origin main      # Deploy
```

**✅ Neuer Block ist in Page Builder verfügbar!**

---

### **3. Collection-Name ändern**

```typescript
// Vorher:
export const Products = {
  slug: 'products',
}

// Nachher:
export const Products = {
  slug: 'shop-items', // ⚠️ Breaking Change!
}
```

```bash
# Migration erstellen (erstellt automatisch RENAME)
bun run migrate:create

# ⚠️ ACHTUNG: Prüfe Migration manuell!
cat src/cms/migrations/[timestamp]_*.ts

# Teste lokal
bun run migrate

# Wenn OK → Deploy
git push origin main
```

---

### **4. Feld-Typ ändern**

```typescript
// Vorher:
{ name: 'price', type: 'text' }

// Nachher:
{ name: 'price', type: 'number' }
```

```bash
# Migration erstellen
bun run migrate:create

# ⚠️ ACHTUNG: Daten-Konvertierung prüfen!
# Migration öffnen und SQL prüfen:
cat src/cms/migrations/[timestamp]_*.ts

# Teste mit Backup lokal
cp database.sqlite database.sqlite.backup
bun run migrate

# Wenn OK → Deploy
git push origin main
```

---

## 🎨 **UI-Änderungen (ohne Migration)**

Manche Änderungen benötigen **keine Migration**, nur Code-Update:

### **1. Admin UI Labels/Descriptions**

```typescript
{
  name: 'title',
  type: 'text',
  admin: {
    description: 'Produkttitel für Shop',  // ← Keine Migration nötig
  }
}
```

```bash
# Einfach deployen
git push origin main
```

---

### **2. Validierungsregeln**

```typescript
{
  name: 'email',
  type: 'email',
  required: true,        // ← Keine Migration nötig
  validate: (val) => {
    // Custom Validation
  }
}
```

```bash
git push origin main  # ✅ Sofort aktiv
```

---

### **3. Conditional Logic**

```typescript
{
  name: 'showPrice',
  type: 'checkbox',
},
{
  name: 'price',
  type: 'number',
  admin: {
    condition: (data) => data.showPrice === true,  // ← Keine Migration
  }
}
```

---

## 🔍 **Troubleshooting: "Ich sehe meine Änderungen nicht!"**

### **Problem 1: Änderungen lokal nicht sichtbar**

**Ursache:** Dev-Server läuft nicht oder Cache-Problem

**Lösung:**

```bash
# 1. Server neu starten
pkill -f "bun.*dev"
rm -rf .next
bun dev

# 2. Admin neu laden (Hard Refresh)
# Chrome/Edge: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

# 3. Browser Cache leeren
# Dev Tools → Application → Clear Storage
```

---

### **Problem 2: Änderungen in Produktion nicht sichtbar**

**Ursache:** Migration wurde nicht ausgeführt

**Lösung:**

```bash
# 1. Prüfe Vercel Deployment Logs
vercel logs [deployment-url]

# 2. Suche nach "migrate" in Logs
# Erwartete Ausgabe:
# ✅ Running: bun run migrate
# ✅ Migration applied

# 3. Falls Migration fehlt, manuell ausführen:
# → Vercel Dashboard → Deployments → Redeploy

# 4. Falls weiterhin Probleme:
# → Vercel Dashboard → Environment Variables
# → Prüfe DATABASE_URL
```

---

### **Problem 3: Felder nicht editierbar**

**Ursache:** `readOnly: true` oder `admin.disabled: true`

**Lösung:**

```typescript
// ❌ Falsch
{
  name: 'title',
  type: 'text',
  readOnly: true,          // ← Entfernen!
  admin: {
    disabled: true,        // ← Entfernen!
  }
}

// ✅ Richtig
{
  name: 'title',
  type: 'text',
}
```

```bash
bun run migrate:create  # Falls Schema geändert
git push origin main
```

---

### **Problem 4: Block nicht im Page Builder sichtbar**

**Ursache:** Block nicht in Pages Collection registriert

**Lösung:**

```typescript
// src/cms/collections/Pages/index.ts
import { MyNewBlock } from '@/cms/blocks/MyNewBlock/config'

export const Pages: CollectionConfig = {
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        MyNewBlock, // ← Hinzufügen!
      ],
    },
  ],
}
```

```bash
bun dev  # Lokal testen
git push origin main  # Deploy (keine Migration nötig!)
```

---

## 📋 **Checkliste: "Sind meine Änderungen live?"**

### **Lokal (Development):**

- [ ] `bun dev` läuft
- [ ] Hard Refresh im Browser (Cmd+Shift+R)
- [ ] Admin: http://localhost:3000/admin
- [ ] Collection/Block ist sichtbar
- [ ] Felder sind editierbar
- [ ] Speichern funktioniert

### **Produktion (Vercel):**

- [ ] Migration erstellt (`bun run migrate:create`)
- [ ] Migration lokal getestet (`bun run migrate`)
- [ ] Code committed (Collections + Migrations)
- [ ] Pushed zu GitHub (`git push origin main`)
- [ ] Vercel Deployment erfolgreich
- [ ] Vercel Logs zeigen "migrate" Erfolg
- [ ] Admin: https://domain.vercel.app/admin
- [ ] Änderungen sind sichtbar und funktional

---

## 🎯 **Quick-Reference**

| Änderung                | Migration nötig? | Command                  |
| ----------------------- | ---------------- | ------------------------ |
| Neues Feld              | ✅ Ja            | `bun run migrate:create` |
| Neuer Block             | ✅ Ja            | `bun run migrate:create` |
| Field Type ändern       | ✅ Ja            | `bun run migrate:create` |
| Collection umbenennen   | ✅ Ja            | `bun run migrate:create` |
| Admin Label/Description | ❌ Nein          | Direkt deployen          |
| Validation Rules        | ❌ Nein          | Direkt deployen          |
| Conditional Logic       | ❌ Nein          | Direkt deployen          |
| Access Control          | ❌ Nein          | Direkt deployen          |

---

## 🚀 **Optimierter Workflow (Zusammenfassung)**

```bash
# === ENTWICKLUNG ===
1. Code ändern (Collections/Blocks)
2. bun dev
3. Teste in Admin (http://localhost:3000/admin)

# === MIGRATION ===
4. bun run migrate:create
5. bun run migrate
6. bun run migrate:status

# === DEPLOYMENT ===
7. git add . && git commit -m "feat: ..."
8. git push origin main

# === VERIFIZIERUNG ===
9. Öffne Vercel Admin
10. Prüfe Deployment Logs
11. Teste in Production Admin
```

---

**✨ Mit diesem Workflow siehst du alle Änderungen sofort — lokal und in Produktion!**

**Fragen?** → [migrations.md](./migrations.md) oder [MIGRATIONS_QUICKSTART.md](../MIGRATIONS_QUICKSTART.md)
