# TEHRAN Foodtruck — custom editorial design

A mobile-first one-page German website for **TEHRAN Persian Streetfood** in Darmstadt. The design is an original typography-led Persian city-signage concept with teal, saffron and coral, including a custom SVG foodtruck illustration. No stock photos, frameworks, tracking scripts, or build dependencies.

## Menu

The original reference website was inspected interactively using the second TinyFish account. All **19 listed menu items** and their original prices were transferred, including offers whose prices vary, the drinks sizes, and the +5.50 EUR combo upgrade (+0.50 EUR to switch to Doogh).

## Deploy on Cloudflare Pages

Connect GitHub repository `hsdarestani/tehran-foodtruck` to Cloudflare Pages:

- **Branch:** `main`
- **Framework preset:** `None`
- **Build command:** leave blank (or `exit 0`)
- **Build output directory:** `.`
- **Root directory:** repository root

Deploys automatically on updates to `main` once connected.

## Files

- `index.html` — complete landing page, menu, contact details, semantic markup and schema.org data
- `styles.css` — original visual identity and responsive styles
- `app.js` — active menu-section highlighting, dynamic year
- `favicon.svg` — Persian brand monogram

## Before public launch

1. Confirm the planned opening date (1 November 2026), hours, prices, phone, and address.
2. Add legally required Impressum and Datenschutz pages using business-owner details before officially launching. Legal identity is not provided in the source reference.
3. Optionally self-host Google Fonts for greater resilience and privacy compliance.

This is a restaurant presentation / menu site, not an online ordering or payment system.