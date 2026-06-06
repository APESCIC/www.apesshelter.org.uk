# Integration Register

Version: v0.0.17 Beta

| Service | URL | Treatment |
|---|---|---|
| ShelterManager adoptable animals | https://service.sheltermanager.com/asmservice?account=apes&method=html_adoptable_animals | Embedded as iframe and linked externally |
| ShelterManager surrender form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112 | External hosted form |
| ShelterManager lost pet form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=26 | External hosted form |
| ShelterManager found pet form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=25 | External hosted form |
| Contact Centre | https://contact.apesshelter.org.uk/ | External support route |
| Service User Portal | https://www.apesshelter.org.uk/signin | External authenticated route |

## v0.0.17 Beta notes
- Change type: Navigation. Shared APES-style Shelter header controller now syncs both mobile and desktop menu offsets and cleans up menu state on pagehide, beforeunload and persisted pageshow.
- Change type: Desktop mega menus. Mega panels now use a shared desktop offset and constrained sizing to reduce horizontal overflow risk while preserving Shelter route labels and grouped menu structure.
- Change type: Mobile navigation. Existing fixed overlay, scroll lock, grouped accordions, Escape close, overlay close, outside-click close, link-close behaviour and widget suppression remain in place.
- Change type: Compliance. Footer links checked again against Donate, Privacy Policy, Terms of Service and Change Log Hub routes.
- Change type: SEO and error pages. Shared nav verified against the branded 404 page with no sitemap or metadata route changes required.
- Change type: Versioning. Current public release version bumped to v0.0.17 Beta in live labels, version files, changelog, manifests and release docs.


## v0.0.16 Beta notes
- Change type: Navigation. Shared Shelter menu controller hardened so mobile drawer state, grouped route toggles, Escape handling and resize sync behave more reliably on smaller screens.
- Change type: Runtime. OneSignal and Hellobar moved into a shared guarded loader so unsupported beta hosts no longer throw production-only console errors.
- Change type: Compatibility. Existing widget suppression remains in place while the mobile menu is open, and the remaining `share-modal.js` error has been verified as not originating from this repository.
- Change type: Compliance. Footer links checked again against Donate, Privacy Policy, Terms of Service and Change Log Hub routes.
- Change type: SEO and error pages. Shared nav verified against the branded 404 page with no sitemap or metadata route changes required.
- Change type: Versioning. Current public release version bumped to v0.0.16 Beta in live labels, version files, changelog, manifests and release docs.


## v0.0.15 Beta notes
- Change type: Navigation. Shared Shelter mobile navigation rebuilt to use a wider APES-style panel below the sticky header instead of a narrow right-edge drawer.
- Change type: UX. Added synced header-offset positioning, full-content overlay coverage and a scroll-contained route list so grouped menus stay usable on phone-width screens.
- Change type: Behaviour. Existing overlay close, Escape close, outside-click close, resize sync, link-close behaviour and widget suppression preserved during the mobile-nav rebuild.
- Change type: Compliance. Footer links checked again against Donate, Privacy Policy, Terms of Service and Change Log Hub routes.
- Change type: SEO and error pages. Shared nav verified against the branded 404 page with no sitemap or metadata route changes required.
- Change type: Versioning. Current public release version bumped to v0.0.15 Beta in live labels, changelog, manifests and release docs.


## v0.0.14 Beta notes
- Change type: Navigation. Shared mobile drawer stacking context hardened so the menu, overlay and grouped routes render in a dedicated top layer above hero content, urgent banners and other page sections on small screens.
- Change type: Deployment verification. Beta confirmed on the current shared CSS asset path; live deployment should be synced with a full `public/` upload because it does not expose the same asset URL.
- Change type: UX. Existing overlay close, Escape close, outside-click close, resize sync and widget suppression behaviour preserved while the drawer layering rules were tightened.
- Change type: Compliance. Footer links checked again against Donate, Privacy Policy, Terms of Service and Change Log Hub routes.
- Change type: SEO and error pages. Shared nav verified against the branded 404 page with no sitemap or metadata route changes required.
- Change type: Versioning. Current public release version bumped to v0.0.14 Beta in live labels, changelog, manifests and release docs.


## v0.0.13 Beta notes
- Change type: Navigation. Shared mobile drawer layering raised so the menu, overlay and grouped routes stay above homepage hero content and other page sections on small screens.
- Change type: UX. Existing overlay close, Escape close, outside-click close, resize sync and widget suppression behaviour preserved while the layering bug was fixed.
- Change type: Compliance. Footer links checked again against Donate, Privacy Policy, Terms of Service and Change Log Hub routes.
- Change type: SEO and error pages. Shared nav verified against the branded 404 page with no sitemap or metadata route changes required.
- Change type: Versioning. Current public release version bumped to v0.0.13 Beta in live labels, changelog, manifests and release docs.

## v0.0.12 Beta notes
- Change type: Navigation. Shared header updated to the APES drawer-and-details behaviour model without changing Shelter route destinations.
- Change type: UX. Added mobile drawer close controls, overlay handling, resize sync and widget suppression while the nav is open.
- Change type: Compliance. Footer links checked again against Donate, Privacy Policy, Terms of Service and Change Log Hub routes.
- Change type: SEO and error pages. Shared nav verified against the branded 404 page with no sitemap or metadata route changes required.
- Change type: Versioning. Current public release version bumped to v0.0.12 Beta in live labels, changelog and release docs.

## v0.0.11 Beta notes
- Change type: Layout. Shared page containers now use a 90% viewport width on desktop and tablet with a mobile readability exception.
- Change type: Footer. Shared footer replaced with an APES-style shelter footer including partner pills, social links and legal/contact details.
- Change type: Compliance. Footer links checked against Donate, Privacy Policy, Terms of Service, Refund Policy and Change Log Hub routes.
- Change type: Versioning. Current public release version bumped to v0.0.11 Beta in live labels, changelog and release docs.

## v0.0.10 Beta notes
- Change type: Navigation. Enhanced Animal Services, Support APES and Information mega menus with improved hierarchy and visual scanability.
- Change type: Content. Added route intros, quick category pills and clearer mega-menu link cards.
- Change type: Tracking. Added a dedicated Known issues section to changelog.html sourced from the repository issue tracker.
- Change type: Versioning. Current public release version bumped to v0.0.10 Beta in live labels, changelog and release docs.

## v0.0.9 Beta notes
- Change type: Feature. Added dog-cat-rehoming.html with official dog and cat rescue and shelter listings.
- Change type: Guidance. Added clear APES non-intake messaging for dogs and cats on surrender.html and rescues.html.
- Change type: Navigation. Added Dog & Cat Rehoming links to mega menu, Services and Search indexes.
- Change type: Compatibility. Added redirect from /cat-dog-sheltering to /dog-cat-rehoming.html.
- Change type: Update. Current public release version bumped to v0.0.9 Beta in live labels and release notes.

## v0.0.8 Beta notes
- Change type: Bug logged. Site-wide mojibake issue reported affecting icons and symbol rendering.
- Change type: Bug fixed. Corrupted characters repaired across affected public pages.
- Change type: Patch. UTF-8 text cleanup applied to restore emoji, apostrophes, quotation marks, dashes and currency symbols.
- Change type: Update. Current public release version bumped to v0.0.8 Beta in live version labels and release notes.

## v0.0.7 Beta notes
- Verify the new explorers (Policies, Education, News, Search) filter and search correctly.
- Verify the Donate impact explorer updates smoothly on button click and slider drag.
- Verify Contact helper + copy buttons work on mobile and desktop.
- Verify Rescues helper, Sponsorships planner and Portal helper update the recommended actions.

## v0.0.6 Beta notes
- Rebuilt surrender.html with route helper, readiness checker, animal category filter, process journey and FAQ sections.
- Kept ShelterManager surrender form as the external system of record.

## v0.0.5 Beta notes
- Confirm dark-card and mega-menu contrast in browser QA.
- Confirm Trial Adoptions and Foster Scheme remain under construction until service wording is approved.
- Check links from the mega menu, Services directory and Adoptions page to the new pages.

## v0.0.2 Beta notes
- Chatwoot live support widget added to public HTML pages.
- Full-width page layout applied across templates.
