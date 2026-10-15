# TEHRAN | Persian Street Food

A polished, mobile-first German landing page and complete restaurant menu for **TEHRAN Imbiss**, Darmstadt.

## What's included

- Editorial hero section, brand mark and custom favicon
- Responsive layouts with keyboard-accessible mobile navigation
- **All 19 verified dishes, categories, prices and drink sizes** from the original menu
- Working five-category menu filter, with no-JavaScript fallback
- Meal upgrade (+ 5,50 €, Doogh + 0,50 €)
- Location, launch date (01.11.2026), opening hours, telephone, email, map and Instagram links
- SEO meta tags, restaurant structured data, reduced-motion support
- Zero dependencies, no framework or server needed

## Deploy on Cloudflare Pages

1. **Workers & Pages → Create → Pages → Import an existing Git repository**
2. Select `hsdarestani/tehran-foodtruck`
3. **Production branch:** `main`
4. **Framework preset:** `None`
5. **Build command:** leave blank (or use `exit 0`)
6. **Build output directory:** `.` (repository root)
7. **Root directory:** leave empty (default root)
8. Click **Save and Deploy**

Cloudflare will serve the top-level `index.html`. Subsequent pushes to `main` deploy automatically.

## Project files

- `index.html` — all page content and complete verified menu
- `styles.css` — styling and responsive breakpoints
- `app.js` — category filter, mobile navigation, dynamic copyright year
- `favicon.svg` — custom brand mark

## Launch checklist

- Replace **illustrative Unsplash photos** with the restaurant's own real food photography. Current photos are editorial placeholders and may not depict the actual dishes.
- Confirm menu pricing, opening times and opening date prior to launch; the values presently match the supplied reference website.
- Provide and publish legally required German **Impressum** and **Datenschutzerklärung** using the operator's real business details; the proprietor's legal identity was not supplied.
- Consider self-hosting the photos and webfonts for production privacy and faster loading.
- Connect your final custom domain in Cloudflare Pages.

No e-commerce checkout or order-processing backend is included or implied.
