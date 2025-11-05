# 🎯 Antwort: Migration vs. Seeding + Payload Workflow

## ✨ **Kurze Antwort**

### **Was ist eine Migration?**

Eine **Migration** ändert die **Struktur** deiner Datenbank (Tabellen, Felder, Beziehungen).

**Beispiel:** "Füge Feld `sku` zur Tabelle `products` hinzu"

---

### **Was ist Seeding?**

**Seeding** füllt die Datenbank mit **Initial-Daten** (Inhalte, keine Struktur).

**Beispiel:** "Erstelle 10 Beispiel-Produkte mit Titel und Preis"

---

### **Wie sind sie ähnlich?**

Beide arbeiten mit der Datenbank, aber:

- **Migration** = Bauplan des Hauses (Struktur)
- **Seeding** = Möbel im Haus (Inhalt)

---

## 🔄 **Was muss ich tun, um alle Änderungen in Payload zu sehen?**

### **Einfacher Workflow:**

```bash
# 1. Code ändern (Collection/Block)
# → src/cms/collections/Products.ts

# 2. Dev-Server starten (Auto-Sync)
bun dev

# 3. Admin öffnen
# → http://localhost:3000/admin
# ✅ Änderungen sind SOFORT sichtbar!

# 4. Für Production: Migration erstellen
bun run migrate:create
bun run migrate

# 5. Deployen
git push origin main
# → Vercel führt Migration automatisch aus
```

---

## 📋 **Detaillierte Tabelle**

| Aspekt         | Migration                | Seeding                      |
| -------------- | ------------------------ | ---------------------------- |
| **Zweck**      | Schema-Struktur          | Daten-Inhalt                 |
| **Beispiel**   | "Füge Feld `sku` hinzu"  | "Erstelle Produkt 'T-Shirt'" |
| **Wann**       | Bei Schema-Änderungen    | Initial Setup/Demo           |
| **Wo**         | Lokal + Production       | Nur lokal                    |
| **Command**    | `bun run migrate:create` | `bun run seed` (custom)      |
| **Git**        | ✅ Committen             | ❌ Optional                  |
| **Production** | ✅ Immer ausführen       | ❌ Niemals                   |

---

## 🎯 **Praktisches Beispiel**

### **Szenario: Neues Feld `sku` zu Products**

#### **Schritt 1: Code-Änderung**

```typescript
// src/cms/collections/Products.ts
export const Products = {
  slug: 'products',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'price', type: 'number' },
    { name: 'sku', type: 'text' }, // ← NEU
  ],
}
```

#### **Schritt 2: Lokal testen**

```bash
bun dev
# → http://localhost:3000/admin
# ✅ Neues Feld `sku` ist sichtbar!
```

#### **Schritt 3: Migration für Production**

```bash
bun run migrate:create  # Erstellt Migration
bun run migrate         # Testet lokal
git push origin main    # Deploy
```

---

## 📚 **Vollständige Dokumentation**

Alle Details findest du hier:

| Thema                            | Datei                                                          |
| -------------------------------- | -------------------------------------------------------------- |
| **Quick-Start**                  | [MIGRATIONS_QUICKSTART.md](./MIGRATIONS_QUICKSTART.md)         |
| **Migration vs. Seeding**        | [docs/MIGRATION_VS_SEEDING.md](./docs/MIGRATION_VS_SEEDING.md) |
| **Payload Workflow**             | [docs/PAYLOAD_WORKFLOW.md](./docs/PAYLOAD_WORKFLOW.md)         |
| **Vollständige Migrations-Docs** | [docs/migrations.md](./docs/migrations.md)                     |
| **Implementation Summary**       | [docs/MIGRATIONS_SUMMARY.md](./docs/MIGRATIONS_SUMMARY.md)     |

---

## ⚡ **TL;DR**

```
MIGRATION = STRUKTUR (Bauplan)
  → Fügt Felder hinzu
  → Ändert Tabellen
  → Wird in Production ausgeführt

SEEDING = DATEN (Möbel)
  → Fügt Test-Daten ein
  → Nur für Demo/Development
  → NICHT in Production

WORKFLOW:
  1. Code ändern
  2. bun dev (lokal sofort sichtbar)
  3. bun run migrate:create (für Production)
  4. git push origin main (automatisches Deploy)
```

---

**✨ Jetzt weißt du, wie du Änderungen in Payload siehst und was der Unterschied zwischen Migration und Seeding ist!**
