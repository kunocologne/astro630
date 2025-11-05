# 🔄 Database Migrations - Quick Start

## ⚡ TL;DR

```bash
# 1. Entwickle lokal (Auto-Sync mit SQLite)
bun dev

# 2. Collections/Blocks bearbeiten
# → src/cms/collections/ oder src/cms/blocks/

# 3. Migration erstellen
bun run migrate:create

# 4. Migration testen
bun run migrate

# 5. Deploy (automatische Migration auf Vercel)
git add . && git commit -m "feat: Update schema"
git push origin main
```

---

## 🎯 Problem & Lösung

### ❌ Problem

- **Blocks sichtbar, aber Felder nicht editierbar im Payload-Dashboard**
- **Code-Änderungen werden nicht automatisch übertragen**
- **SQLite (lokal) ≠ Postgres (produktiv)**

### ✅ Lösung

**Migrations synchronisieren Code ↔ Datenbank automatisch.**

---

## 📋 Verfügbare Commands

```bash
# Status prüfen
bun run migrate:status

# Neue Migration erstellen
bun run migrate:create

# Migrations ausführen
bun run migrate

# Fresh Start (⚠️ löscht alle Daten!)
bun run migrate:fresh
```

---

## 🚀 Deployment Workflow

### **Lokal → Produktion**

```bash
# LOKAL
1. bun dev                    # Auto-Sync
2. Bearbeite Collections      # Code-Änderungen
3. bun run migrate:create     # Migration erstellen
4. bun run migrate            # Lokal testen

# PRODUKTION
5. git push origin main       # Deploy zu Vercel
   → Vercel führt automatisch aus:
     ✓ bun run migrate        # Postgres-Migration
     ✓ bun run build          # Next.js Build
```

---

## 🔧 Typische Use-Cases

### **Use-Case 1: Neues Feld zu Collection hinzufügen**

```typescript
// src/cms/collections/Products.ts
{
  name: 'products',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'price', type: 'number' },
    // ⬇️ Neues Feld
    { name: 'sku', type: 'text' },
  ]
}
```

```bash
bun run migrate:create  # Erstellt Migration
bun run migrate         # Wendet sie an
```

---

### **Use-Case 2: Neuen Block erstellen**

```typescript
// src/cms/blocks/TestimonialBlock/config.ts
export const TestimonialBlock = {
  slug: 'testimonial',
  fields: [
    { name: 'quote', type: 'textarea' },
    { name: 'author', type: 'text' },
  ],
}
```

```bash
# Registriere in src/cms/collections/Pages/index.ts
bun run migrate:create
bun run migrate
```

---

### **Use-Case 3: Feld zu Block hinzufügen**

```typescript
// src/cms/blocks/HeroBlock/config.ts
{
  fields: [
    { name: 'headline', type: 'text' },
    // ⬇️ Neues Feld
    { name: 'subtitle', type: 'text' },
  ]
}
```

```bash
bun run migrate:create
bun run migrate
```

---

## 🔍 Troubleshooting

### **Problem: "Migration failed"**

```bash
# Prüfe Datenbank-Verbindung
echo $DATABASE_URL

# Status prüfen
bun run migrate:status

# Logs ansehen
bun run migrate --debug
```

---

### **Problem: "Felder nicht editierbar"**

**Root Cause:** `readOnly: true` in Collection-Definition

```typescript
// ❌ Falsch
{ name: 'title', type: 'text', readOnly: true }

// ✅ Richtig
{ name: 'title', type: 'text' }
```

```bash
# Nach Änderung
bun run migrate:create
bun run migrate
```

---

### **Problem: "Schema mismatch"**

```bash
# Erstelle Migration für alle Änderungen
bun run migrate:create

# Wende sie an
bun run migrate

# Prüfe Ergebnis
bun run migrate:status
```

---

## 📚 Weiterführende Dokumentation

- **Vollständige Anleitung:** [docs/migrations.md](./docs/migrations.md)
- **Payload Migrations:** [payloadcms.com/docs/database/migrations](https://payloadcms.com/docs/database/migrations)
- **Vercel Deployment:** [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

---

## ⚠️ Best Practices

### ✅ DO

- Migration nach **jeder** Schema-Änderung erstellen
- Migrationen **lokal testen** vor Deployment
- SQLite lokal, Postgres produktiv nutzen
- Migrationen mit Code committen

### ❌ DON'T

- **NIEMALS** `migrate:fresh` in Produktion (löscht alle Daten!)
- **NIEMALS** Migrations manuell bearbeiten nach Deployment
- **NIEMALS** Schema direkt in Supabase ändern
- **NIEMALS** ohne Migration deployen bei Schema-Änderungen

---

## 🔐 Environment Variables (Vercel)

```bash
# Vercel Dashboard → Settings → Environment Variables
DATABASE_URL=postgresql://user:pass@db.supabase.co:5432/postgres
PAYLOAD_SECRET=min-32-zeichen-production-secret
NEXT_PUBLIC_SERVER_URL=https://deine-domain.vercel.app
```

---

**✨ Mit diesem System sind Code und Datenbank immer synchron!**

**Need help?** → [docs/migrations.md](./docs/migrations.md)
