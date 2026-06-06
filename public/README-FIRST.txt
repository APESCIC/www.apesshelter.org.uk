# APES Shelter & Rescue Website
Version: v0.0.19 Beta

## Simple upload instructions

1. Unzip this folder on your computer.
2. Open your FTP app.
3. Connect to your website hosting account using the FTP details from your hosting control panel.
4. Open the website/public folder shown by your FTP app.
5. Upload everything inside this folder.
6. Visit the website in a browser and check the menu, forms and contact links.

No database is needed. No command line is needed. No build step is needed.

## Main files

- index.html: homepage
- services.html: service hub with searchable directory
- adoptions.html: adoption page with ShelterManager animal feed and fee calculator
- surrender.html: owner surrender route
- rescues.html: rescue and wildlife support route
- sponsorships.html: sponsorship route
- education.html: primate welfare education page
- news.html: news landing page
- contact.html: contact, WhatsApp, lost and found routes
- policies.html: policy hub
- changelog.html: public changelog and version history
- .htaccess: optional Apache redirects for common old URLs

## Important retained external services

- ShelterManager adoptable animals feed
- ShelterManager surrender form ID 112
- ShelterManager lost pet form ID 26
- ShelterManager found pet form ID 25
- APES contact centre
- APES service user portal

## Before public launch

Check every button, external form and phone/email link. Review policies, privacy/cookies, refund address, donation provider and newsletter wording before making the site live.

Menu update: the main navigation now uses Home, Animal Services, Support APES and Information, each with its own mega menu route.

v0.0.19 Beta changes:

- Change type: Navigation spacing. Added a small bottom gutter to the sticky mobile header so the Menu button no longer sits flush to the header border.
- Change type: Mobile UX. Tightened the opened drawer offset so the panel sits just below the nav bar with a small intentional gap.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the spacing patch.
- Change type: SEO and error pages. Confirmed sitemap, robots/noindex, metadata, Newsroom routing and the branded 404 page needed no route changes.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.19 Beta.

v0.0.18 Beta changes:
- Change type: Navigation fix. Removed the closed mobile navigation shell from the under-980px layout so it cannot add header height, create a large opening gap or leave a blank white panel after close.
- Change type: Behaviour. Hardened mobile close and reopen handling so overlay state, body scroll lock, grouped menu state, widget suppression and focus restoration reset consistently.
- Change type: Console triage. Reviewed the uploaded developer panel log and confirmed `share-modal.js` is not sourced from this repository; Donorbox/FingerprintJS/reCAPTCHA/hCaptcha messages remain third-party embed warnings unless donation testing shows a user-facing issue.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the mobile navigation patch.
- Change type: SEO and error pages. Confirmed sitemap records, robots/noindex rules, page metadata, Newsroom routing and the branded 404 page needed no route changes.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.18 Beta.

v0.0.17 Beta changes:
- Change type: Navigation. Hardened the shared APES-style Shelter header controller with synced mobile and desktop menu offsets, pagehide cleanup, beforeunload cleanup and persisted pageshow reset handling.
- Change type: Desktop mega menus. Added a shared desktop mega-panel offset and constrained panel sizing to reduce horizontal overflow risk while keeping Shelter route labels and grouped menus unchanged.
- Change type: Mobile navigation. Preserved the 980px mobile breakpoint, fixed header-offset overlay, scroll lock, grouped accordions, Escape close, overlay close, outside-click close, link-close behaviour and widget suppression.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the shared header/footer patch.
- Change type: SEO and error pages. Confirmed the sitemap and page metadata needed no route changes and verified the shared nav still works on the branded 404 page.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.17 Beta.

v0.0.16 Beta changes:
- Change type: Navigation. Hardened the shared menu controller so mobile open and close state, grouped route toggles, Escape handling and resize sync behave more reliably on smaller screens.
- Change type: Runtime. Moved OneSignal and Hellobar into a shared guarded loader so unsupported beta hosts no longer throw production-only console errors.
- Change type: Compatibility. Preserved donor, chat, push and banner widget suppression while the menu is open and confirmed the remaining `share-modal.js` error is not sourced from this repository.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the runtime patch.
- Change type: SEO and error pages. Confirmed the sitemap and page metadata needed no route changes and verified the shared nav still works on the branded 404 page.
- Change type: Versioning. Added synced root and public `VERSION` files and bumped current package version labels and release docs to v0.0.16 Beta.

v0.0.15 Beta changes:
- Change type: Navigation. Reworked the shared Shelter mobile menu so it opens as a wider APES-style panel below the sticky header instead of a narrow right-edge drawer.
- Change type: UX. Added synced header-offset positioning, stronger overlay coverage and a scroll-contained route list so grouped menus stay usable on smaller screens.
- Change type: Behaviour. Preserved overlay close, Escape close, outside-click close, resize sync, link-close behaviour and widget suppression while rebuilding the mobile panel layout.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the nav update.
- Change type: SEO and error pages. Confirmed the sitemap and page metadata needed no route changes and verified the shared nav still works on the branded 404 page.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.15 Beta.

v0.0.13 Beta changes:
- Change type: Navigation. Raised the shared mobile drawer layering so the menu, overlay and grouped routes stay above hero content and other page sections on small screens.
- Change type: UX. Preserved overlay close, Escape close, outside-click close, resize sync and scroll-lock behaviour while fixing the layering bug.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the nav fix.
- Change type: SEO and error pages. Confirmed the sitemap and page metadata needed no route changes and verified the shared nav still works on the branded 404 page.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.13 Beta.

v0.0.12 Beta changes:
- Change type: Navigation. Rebuilt the shared Shelter nav into an APES-style mobile drawer with native grouped menu behaviour while keeping Shelter labels and links unchanged.
- Change type: UX. Added overlay close, Escape close, outside-click close, resize sync and scroll-lock behaviour for the shared mobile menu.
- Change type: Compliance. Re-checked shared footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub after the nav update.
- Change type: SEO and error pages. Confirmed the sitemap and page metadata needed no route changes and verified the shared nav still works on the branded 404 page.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.12 Beta.

v0.0.11 Beta changes:
- Change type: Layout. Updated shared page containers to a 90% viewport width on desktop and tablet, with a mobile exception for readability.
- Change type: Footer. Rebuilt the shared footer into an APES-style four-panel layout with shelter-specific journeys, partner pills, social links and legal/contact fine print.
- Change type: Compliance. Checked shared footer routes for Donate, Privacy Policy, Terms of Service, Refund Policy and Change Log Hub.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.11 Beta.

v0.0.10 Beta changes:
- Change type: Navigation. Enhanced Animal Services, Support APES and Information mega menus with richer layout, route summaries and clearer card hierarchy.
- Change type: Content. Added menu intros, quick topic pills and visual link markers to improve scanability and route clarity.
- Change type: Tracking. Added a dedicated Known issues section on changelog.html linked to active GitHub issues.
- Change type: Versioning. Bumped current package version labels and release docs to v0.0.10 Beta.

v0.0.9 Beta changes:
- Change type: Feature. Added dog-cat-rehoming.html with official dog and cat rescue/shelter listings and a filterable finder.
- Change type: Guidance. Added highlighted notices on surrender and rescues pages confirming APES does not intake dogs or cats.
- Change type: Navigation. Added Dog & Cat Rehoming links to the mega menu, Services directory and Search page.
- Change type: Compatibility. Added legacy redirect from /cat-dog-sheltering to /dog-cat-rehoming.html.
- Change type: Update. Bumped current package version labels and release docs to v0.0.9 Beta.

v0.0.8 Beta changes:
- Change type: Bug logged. Site-wide garbled encoding issue identified (for example broken symbols and malformed emoji byte strings).
- Change type: Bug fixed. Repaired corrupted icons, punctuation and currency symbols across affected pages.
- Change type: Patch. Applied UTF-8 cleanup pass to restore valid text rendering in public content.
- Change type: Update. Updated changelog structure with explicit change categories and bumped version labels to v0.0.8 Beta.

v0.0.7 Beta changes:
- Refreshed all pages to match the colourful, interactive Adoptions style using reusable highlight cards, badges, timelines and accordions.
- Added a donation impact explorer to donate.html.
- Added a contact-route helper and copy buttons to contact.html.
- Added a rescue-route helper and FAQs to rescues.html.
- Added a sponsorship planner to sponsorships.html.
- Added a portal helper to portal.html.
- Added searchable explorers to policies.html, education.html, news.html and search.html.
- Updated version references and changelog.

v0.0.6 Beta changes:
- Rebuilt the Surrender page using the advanced Shelter and Surrender layout with route helper, readiness checker, animal category filtering, journey and FAQs.

v0.0.5 Beta changes:
- Fixed unreadable text on dark green cards and strengthened contrast across reusable components.
- Renamed the mega menu service item to Service Finder.
- Added under-construction Trial Adoptions and Foster Scheme pages.
- Added Trial Adoptions and Foster Scheme links to the mega menu, Services directory and Adoptions page.

v0.0.4 Beta changes:
- Enhanced the Adoptions page with a more engaging adoption journey, fee explorer and adopter guidance.
- Expanded the adoption fee calculator to include every listed animal fee type.
- Added optional add-ons and optional reservation-fee planning to the calculator.
- Restyled the estimate total box using APES green and gold branding with live summary chips and a clear breakdown.

v0.0.3 Beta changes:
- Services mega menu now stays open after click and closes only on outside click, Escape or navigation.

v0.0.2 Beta changes:
- Wider full-page layout across all public pages.
- Homepage hero spacing fix.
- Readability refinements for cards, grids and route helper.
- Chatwoot live support widget added to public pages.
