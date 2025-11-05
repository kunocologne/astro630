# 🔄 Migration vs. Seeding - Visual Guide

## 📊 **Konzeptioneller Unterschied**

```
┌─────────────────────────────────────────────────────────────┐
│                    DATENBANK                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────┐         ┌───────────────────┐    │
│  │   MIGRATION          │         │   SEEDING         │    │
│  │   (Struktur)         │         │   (Daten)         │    │
│  └──────────────────────┘         └───────────────────┘    │
│           │                                 │               │
│           ▼                                 ▼               │
│  ┌──────────────────────┐         ┌───────────────────┐    │
│  │  CREATE TABLE        │         │  INSERT INTO      │    │
│  │  products (          │         │  products VALUES  │    │
│  │    id,               │         │  ('T-Shirt',     │    │
│  │    title,            │         │   29.99)         │    │
│  │    price             │         │                   │    │
│  │  )                   │         │                   │    │
│  └──────────────────────┘         └───────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ **Migration = Bauplan**

**Metapher:** Migration ist wie der **Bauplan eines Hauses**

```
┌─────────────────────────────────────────────┐
│  Migration (Bauplan)                        │
├─────────────────────────────────────────────┤
│  • Wie viele Zimmer?                        │
│  • Wo sind die Türen?                       │
│  • Wie groß sind die Fenster?               │
└─────────────────────────────────────────────┘
```

**In Datenbank-Sprache:**

```typescript
// Migration definiert die STRUKTUR
export const Products = {
  slug: 'products',
  fields: [
    { name: 'id', type: 'integer' }, // ← Zimmer 1
    { name: 'title', type: 'text' }, // ← Zimmer 2
    { name: 'price', type: 'number' }, // ← Zimmer 3
  ],
}
```

---

## 🌱 **Seeding = Möbel**

**Metapher:** Seeding ist wie die **Möbel im Haus**

```
┌─────────────────────────────────────────────┐
│  Seeding (Möbel)                            │
├─────────────────────────────────────────────┤
│  • Welches Sofa steht im Wohnzimmer?        │
│  • Welche Bilder hängen an der Wand?        │
│  • Welche Pflanzen stehen am Fenster?       │
└─────────────────────────────────────────────┘
```

**In Datenbank-Sprache:**

```typescript
// Seeding füllt die Struktur mit DATEN
await payload.create({
  collection: 'products',
  data: {
    title: 'T-Shirt Black', // ← Möbel 1
    price: 29.99, // ← Möbel 2
  },
})
```

---

## 🔄 **Timeline: Wann wird was ausgeführt?**

```
PROJECT LIFECYCLE
═════════════════

1. PROJECT START
   ┌──────────────────┐
   │  Initial Setup   │
   └──────────────────┘
          │
          ├─► Migration (Struktur erstellen)
          └─► Seeding (Test-Daten füllen)

2. DEVELOPMENT
   ┌──────────────────┐
   │  Schema-Änderung │
   └──────────────────┘
          │
          └─► Migration (Struktur anpassen)

3. PRODUCTION DEPLOY
   ┌──────────────────┐
   │  First Deploy    │
   └──────────────────┘
          │
          ├─► Migration (Struktur erstellen)
          └─► ❌ KEIN Seeding! (Kunde fügt echte Daten ein)

4. SCHEMA UPDATE
   ┌──────────────────┐
   │  Feature Added   │
   └──────────────────┘
          │
          └─► Migration (Struktur erweitern)
```

---

## 📋 **Praktisches Beispiel: E-Commerce Shop**

### **Szenario: Neuer Shop von 0**

#### **Schritt 1: Migration (Struktur)**

```typescript
// src/cms/collections/Products.ts
export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'price', type: 'number', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
  ],
}
```

```bash
bun run migrate:create
bun run migrate
```

**Ergebnis:**

```
✅ Tabelle "products" erstellt
✅ Felder: title, price, description, image, category
✅ Datenbank bereit — aber LEER
```

---

#### **Schritt 2: Seeding (Test-Daten)**

```typescript
// scripts/seed-shop.ts
import payload from 'payload'

async function seedShop() {
  // Kategorien
  const tshirts = await payload.create({
    collection: 'categories',
    data: { name: 'T-Shirts' },
  })

  const hoodies = await payload.create({
    collection: 'categories',
    data: { name: 'Hoodies' },
  })

  // Produkte
  await payload.create({
    collection: 'products',
    data: {
      title: 'Classic Black T-Shirt',
      price: 29.99,
      description: 'Premium cotton t-shirt',
      category: tshirts.id,
    },
  })

  await payload.create({
    collection: 'products',
    data: {
      title: 'White Hoodie',
      price: 59.99,
      description: 'Cozy hoodie for winter',
      category: hoodies.id,
    },
  })

  console.log('✅ Shop seeded with 2 products!')
}

seedShop()
```

```bash
bun run tsx scripts/seed-shop.ts
```

**Ergebnis:**

```
✅ 2 Kategorien erstellt
✅ 2 Produkte erstellt
✅ Shop ist ready für Demo/Testing
```

---

## 🎯 **Wann nutze ich was?**

### **Migration nutzen für:**

✅ **Neue Collection erstellen**

```typescript
export const Testimonials = {
  slug: 'testimonials',
  fields: [...]
}
```

✅ **Felder hinzufügen/entfernen**

```typescript
{ name: 'sku', type: 'text' }  // ← Neu
```

✅ **Feld-Typ ändern**

```typescript
// Vorher: type: 'text'
// Nachher: type: 'number'
```

✅ **Relationen ändern**

```typescript
{ name: 'category', type: 'relationship', relationTo: 'categories' }
```

---

### **Seeding nutzen für:**

✅ **Initial-Daten für Development**

```typescript
await payload.create({ collection: 'products', data: {...} })
```

✅ **Demo-Daten für Präsentationen**

```typescript
await createDemoShop()
```

✅ **Test-Daten für E2E Tests**

```typescript
beforeEach(() => seedTestData())
```

❌ **NICHT in Production** (Kunde fügt echte Daten ein!)

---

## 🚨 **Wichtige Regeln**

### **Migration:**

```bash
# ✅ IMMER in Production ausführen
bun run migrate

# ✅ Bei jedem Schema-Change
bun run migrate:create

# ✅ Committen mit Code
git add src/cms/migrations/
```

### **Seeding:**

```bash
# ✅ Nur lokal/Development
bun run seed

# ❌ NIEMALS in Production
# (außer für initial Demo-Setup)

# ❌ Nicht committen (Optional)
.gitignore → scripts/seed-*.ts
```

---

## 📊 **Vergleichstabelle**

| Aspekt         | Migration                | Seeding              |
| -------------- | ------------------------ | -------------------- |
| **Was**        | Schema-Struktur          | Daten-Inhalt         |
| **Wann**       | Bei Schema-Änderungen    | Bei Setup/Demo       |
| **Wo**         | Lokal + Production       | Nur lokal/staging    |
| **Wie oft**    | Bei jedem Change         | Einmalig             |
| **Reversibel** | Ja (Rollback)            | Nein                 |
| **Git**        | ✅ Committen             | ❌ Optional          |
| **Production** | ✅ Immer                 | ❌ Niemals           |
| **Beispiel**   | `ALTER TABLE ADD COLUMN` | `INSERT INTO VALUES` |

---

## 🔄 **Workflow-Beispiel: Feature-Entwicklung**

### **Feature: Product Variants hinzufügen**

#### **Phase 1: Schema-Design (Migration)**

```typescript
// src/cms/collections/Products.ts
export const Products = {
  slug: 'products',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'price', type: 'number' },
    // ⬇️ NEU: Variants
    {
      name: 'variants',
      type: 'array',
      fields: [
        { name: 'size', type: 'select', options: ['S', 'M', 'L', 'XL'] },
        { name: 'color', type: 'text' },
        { name: 'stock', type: 'number' },
      ],
    },
  ],
}
```

```bash
# Migration erstellen
bun run migrate:create
bun run migrate
```

**✅ Schema ist ready!**

---

#### **Phase 2: Test-Daten (Seeding)**

```typescript
// scripts/seed-variants.ts
await payload.update({
  collection: 'products',
  id: existingProductId,
  data: {
    variants: [
      { size: 'S', color: 'Black', stock: 10 },
      { size: 'M', color: 'Black', stock: 15 },
      { size: 'L', color: 'Black', stock: 8 },
      { size: 'S', color: 'White', stock: 12 },
      { size: 'M', color: 'White', stock: 20 },
    ],
  },
})
```

```bash
bun run tsx scripts/seed-variants.ts
```

**✅ Test-Daten eingefügt!**

---

#### **Phase 3: Production Deployment**

```bash
# Migration deployen (automatisch via Vercel)
git add src/cms/collections/Products.ts
git add src/cms/migrations/[timestamp]_add_variants.ts
git commit -m "feat: Add product variants"
git push origin main

# ✅ Vercel führt Migration aus
# ✅ Schema ist live
# ❌ Kein Seeding (Kunde fügt echte Variants ein)
```

---

## 🎓 **Zusammenfassung**

### **Migration:**

```
┌─────────────────────────────────────────┐
│  WAS:  Schema-Struktur definieren       │
│  WANN: Bei Code-Änderungen              │
│  WO:   Lokal + Production               │
│  WIE:  bun run migrate:create           │
└─────────────────────────────────────────┘
```

### **Seeding:**

```
┌─────────────────────────────────────────┐
│  WAS:  Daten einfügen                   │
│  WANN: Initial Setup, Demo, Testing     │
│  WO:   Nur lokal/staging                │
│  WIE:  Custom Script (seed-*.ts)        │
└─────────────────────────────────────────┘
```

---

## 🚀 **Nächste Schritte**

### **Für Payload-Änderungen:**

1. **Schema ändern** → Collection-Datei bearbeiten
2. **Migration erstellen** → `bun run migrate:create`
3. **Lokal testen** → `bun dev` + Admin prüfen
4. **Deployen** → `git push origin main`

### **Für Test-Daten:**

1. **Seed-Script erstellen** → `scripts/seed-*.ts`
2. **Lokal ausführen** → `bun run tsx scripts/seed-*.ts`
3. **Admin prüfen** → http://localhost:3000/admin
4. **⚠️ NICHT in Production deployen!**

---

**✨ Migration = Struktur | Seeding = Daten**

**Weitere Infos:**

- [PAYLOAD_WORKFLOW.md](./PAYLOAD_WORKFLOW.md) - Kompletter Workflow
- [migrations.md](./migrations.md) - Migration Details
- [MIGRATIONS_QUICKSTART.md](../MIGRATIONS_QUICKSTART.md) - Quick-Start
