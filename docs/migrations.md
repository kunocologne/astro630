# 🔄 Database Migrations Guide

## **Problem & Lösung**

### ❌ Problem

- Blocks/Layout im Payload-Dashboard sichtbar, aber **Felder nicht editierbar**
- Code-Änderungen (Collections/Blocks) werden nicht automatisch in die Datenbank übertragen
- Lokale Entwicklung (SQLite) ≠ Produktion (Postgres/Supabase)
- Schema-Drift zwischen Code und Datenbank

### ✅ Lösung

**Migrations-System**: Synchronisiere Code-Schema mit Datenbank-Schema automatisch.

---

## 🎯 **Workflow: Lokale Entwicklung → Produktion**

### **Phase 1: Lokale Entwicklung**

```bash
# 1. Starte Dev-Server (automatische Schema-Sync)
bun dev

# 2. Bearbeite Collections/Blocks in /src/cms/
# → Änderungen werden automatisch erkannt

# 3. Teste im Admin-Dashboard
# → http://localhost:3000/admin
```

**✅ Lokal synchronisiert sich Payload automatisch mit SQLite.**

---

### **Phase 2: Schema-Änderungen für Produktion vorbereiten**

Wenn du fertig bist mit Änderungen an Collections/Blocks:

```bash
# 1. Erstelle eine neue Migration
bun run migrate:create

# → Gibt dir einen Namen wie: 20250129_123456_initial_schema
# → Erstellt Datei in /src/cms/migrations/
```

**Was macht das?**

- Vergleicht aktuelles Code-Schema mit Datenbank
- Generiert SQL-Statements für die Änderungen
- Speichert Migration als `.ts`-Datei

---

### **Phase 3: Migration ausführen (lokal testen)**

```bash
# Führe Migration aus (lokal)
bun run migrate

# Prüfe Status
bun run migrate:status
```

**Erwartetes Ergebnis:**

```
✅ Migration 20250129_123456_initial_schema applied
✅ Database is up to date
```

---

### **Phase 4: Deployment zu Vercel/Supabase**

#### **Schritt 1: Environment Variables setzen (Vercel)**

```bash
# In Vercel Dashboard → Environment Variables:
DATABASE_URL=postgresql://user:pass@db.supabase.co:5432/postgres
PAYLOAD_SECRET=dein-production-secret
NEXT_PUBLIC_SERVER_URL=https://deine-domain.vercel.app
```

#### **Schritt 2: Build Hook konfigurieren**

Füge in `package.json` hinzu:

```json
"scripts": {
  "vercel-build": "bun run migrate && bun run build"
}
```

#### **Schritt 3: Deploy**

```bash
# Commit Migration
git add .
git commit -m "feat: Add migration for new schema"
git push origin main

# → Vercel triggert automatisch:
# 1. bun run migrate (Postgres-Migration)
# 2. bun run build (Next.js Build)
```

---

## 🧪 **Migration Commands Referenz**

| Command                  | Beschreibung                             |
| ------------------------ | ---------------------------------------- |
| `bun run migrate:create` | Neue Migration erstellen                 |
| `bun run migrate`        | Alle Pending Migrations ausführen        |
| `bun run migrate:status` | Status aller Migrations anzeigen         |
| `bun run migrate:fresh`  | **⚠️ Danger:** DB löschen + neu aufbauen |

---

## 🔍 **Troubleshooting**

### **Problem: "Migration failed"**

```bash
# 1. Prüfe Database Connection
echo $DATABASE_URL

# 2. Prüfe Migration Status
bun run migrate:status

# 3. Rollback (falls nötig)
# → Manually delete last migration file
# → Re-run: bun run migrate
```

---

### **Problem: "Fields not editable in Admin"**

**Root Cause:** Collection-Definition enthält `readOnly: true` oder fehlerhafte Feldkonfiguration.

**Fix:**

1. Öffne `/src/cms/collections/[YourCollection].ts`
2. Entferne `readOnly: true` von Feldern
3. Speichere und erstelle neue Migration:
   ```bash
   bun run migrate:create
   bun run migrate
   ```

---

### **Problem: "Schema mismatch between code and DB"**

**Root Cause:** Code wurde geändert, aber keine Migration erstellt.

**Fix:**

```bash
# Erstelle Migration für alle ausstehenden Änderungen
bun run migrate:create

# Wende sie an
bun run migrate
```

---

## 📋 **Best Practices**

### ✅ DO

- **Erstelle Migrationen nach jeder Schema-Änderung**
- **Teste Migrationen lokal vor Deployment**
- **Benenne Migrationen beschreibend** (z.B. `add_product_variants`)
- **Commite Migrations mit Code-Änderungen zusammen**
- **Nutze SQLite lokal, Postgres produktiv**

### ❌ DON'T

- **NIEMALS** `migrate:fresh` in Produktion ausführen (löscht alle Daten!)
- **NIEMALS** Migrations manuell bearbeiten nach Deployment
- **NIEMALS** Database-Schema direkt in Supabase ändern (immer über Migrations)
- **NIEMALS** ohne Migration deployen, wenn Collections/Blocks geändert wurden

---

## 🚀 **Kompletter Workflow (Zusammenfassung)**

```bash
# === LOKALE ENTWICKLUNG ===
1. bun dev                          # Starte Dev-Server
2. Bearbeite /src/cms/collections   # Code-Änderungen
3. Teste in Admin-Dashboard         # Prüfe Funktionalität

# === MIGRATION VORBEREITEN ===
4. bun run migrate:create           # Erstelle Migration
5. bun run migrate                  # Teste Migration lokal
6. bun run migrate:status           # Prüfe Status

# === DEPLOYMENT ===
7. git add . && git commit -m "..."
8. git push origin main             # Push zu GitHub
9. → Vercel führt automatisch aus:
   - bun run migrate                # Postgres-Migration
   - bun run build                  # Next.js Build

# === VERIFIZIERUNG ===
10. Öffne https://deine-domain.vercel.app/admin
11. Prüfe, ob alle Felder editierbar sind
12. ✅ Done!
```

---

## 🔐 **Security Notes**

- `PAYLOAD_SECRET` muss in Produktion **einzigartig** sein (min. 32 Zeichen)
- `DATABASE_URL` niemals in Git committen
- Nutze Vercel Environment Variables für Secrets
- Aktiviere SSL für Postgres-Verbindungen (`?sslmode=require`)

---

## 📚 **Weitere Ressourcen**

- [Payload Migrations Docs](https://payloadcms.com/docs/database/migrations)
- [Vercel Build Configuration](https://vercel.com/docs/build-configuration)
- [Supabase Connection Strings](https://supabase.com/docs/guides/database/connecting-to-postgres)

---

**✨ Mit diesem System sind Blocks und Felder im Admin-Dashboard immer synchron, editierbar und deployment-ready!**
