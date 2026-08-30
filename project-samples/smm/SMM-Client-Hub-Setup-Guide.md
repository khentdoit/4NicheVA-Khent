# SMM Client Hub — Notion Dashboard Setup Guide

Your all-in-one business command center as a social media manager. Follow this guide to build it once in Notion, then duplicate it as a sellable template.

---

## 1. Page Structure

```
📊 My Business Hub  (top-level page)
├── 🗂️ Client Tracker  (database — gallery view)
├── 🗓️ Content Calendar  (database — calendar + board views)
├── ✅ Today's To-Do  (simple checklist block)
├── ⏰ Clock + Date widget  (embed — optional, use a free widget site)
├── ⚡ Quick Links  (linked bookmarks section)
├── 🎯 Goals & Income Tracker  (database)
└── 📁 Templates Library  (sub-page: welcome packet, contracts, invoices, reports)
```

Build this as ONE parent page ("My Business Hub") with the items above as either
inline databases or sub-pages, so a buyer can duplicate the whole thing in one click.

---

## 2. Database: Client Tracker

Create this as a **Notion database** (gallery view as the default so client cards
show with cover images/colors, like a portfolio wall).

| Property | Type | Options |
|---|---|---|
| Client Name | Title | — |
| Cover Color / Logo | Files & media | Client's brand color or logo |
| Platform(s) | Multi-select | Instagram, TikTok, Facebook, YouTube, Pinterest, LinkedIn, X |
| Service Type | Select | Content Creation, Full Management, Strategy Only, Content + Community |
| Package Tier | Select | Starter, Standard, Premium |
| Status | Select | 🟡 Onboarding, 🟢 Active, 🔴 Paused, ⚪ Completed |
| Start Date | Date | — |
| Monthly Rate | Number (currency) | — |
| Contract Signed | Checkbox | — |
| Next Deliverable Due | Date | — |
| Drive/Canva Folder | URL | — |
| Notes | Text | — |

**Views to add:**
- **Gallery** (default) — grouped by Status, card size large, shows cover
- **Board** — grouped by Package Tier, for spotting upsell opportunities
- **Table** — for a quick financial overview (sort by Monthly Rate)

Inside each Client page, add sub-sections (as toggle lists) for:
- 🎯 Goals
- 🎨 Branding assets
- 📱 SMM templates used
- 🗓️ Content Planner (filtered view of the Content Calendar database, filtered to this client)
- 🎬 Content Shoot schedule
- 📈 Account Monitoring / analytics log

---

## 3. Database: Content Calendar

A second database, linked to Client Tracker via a **Relation** property.

| Property | Type | Options |
|---|---|---|
| Content Title/Hook | Title | — |
| Client | Relation | → Client Tracker |
| Platform | Select | Instagram, TikTok, Facebook, YouTube, Pinterest |
| Content Type | Select | Reel, Carousel, Static Post, Story, Blog |
| Caption/Copy | Text | — |
| Status | Select | 💡 Idea, ✍️ Drafting, 🎨 Design, ✅ Approved, 📅 Scheduled, ✔️ Posted |
| Post Date | Date | — |
| Asset Link | URL | Canva/Drive link |
| Hashtags | Text | — |
| Performance Notes | Text | filled in after posting |

**Views to add:**
- **Calendar view** (default) — visual monthly planning
- **Board view** — grouped by Status (your production pipeline)
- **Table view, filtered per client** — embed on each client's page

---

## 4. Goals & Income Tracker (simple database)

| Property | Type |
|---|---|
| Month | Date |
| Target Income | Number |
| Actual Income | Number (rollup from Client Tracker if you want it automatic) |
| New Clients Goal | Number |
| New Clients Actual | Number |
| Notes | Text |

---

## 5. Quick Links Section

A simple block with bookmark previews (Notion auto-generates a preview card for pasted URLs):
- Canva
- Instagram / TikTok / Facebook Business Suite / Pinterest / YouTube Studio
- Google Drive (shared client folder root)
- Your invoicing tool (e.g., Wave, PayPal Invoicing, or your bank)
- Your contract e-sign tool (e.g., Notion form, Google Forms, or a free e-sign tool)

---

## 6. Turning It Into a Sellable Template

1. Build everything above inside one Notion page.
2. Clean out any real client data — replace with 2–3 example "demo" clients so buyers see it populated.
3. Add a short "Read Me First" callout block at the top with instructions (duplicate → rename → delete demo data).
4. Click **Share → "+ Create link"** and enable **"Allow duplicate as template."**
5. That share link is the product you deliver after payment.
6. Package the sale on Gumroad (10% flat fee, easiest to start) and/or Etsy (great for organic discovery). Comprehensive SMM systems like this typically sell in the $19–$45 / ₱1,100–₱2,600 range — price toward the top of that range once you have a polished preview and at least a few reviews.

---

## 7. What Makes This Different From a Generic Template

- Every database is **relational** (Content Calendar ↔ Client Tracker), so filtering content per client is one click — most budget templates skip this.
- Built-in **Goals & Income Tracker** ties your business metrics to your client roster, not just content planning.
- Structured for **resale**: demo data + Read Me block + duplicate-as-template link baked in from day one.
