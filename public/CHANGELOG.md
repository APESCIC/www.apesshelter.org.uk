# Public Website Changelog

## v0.0.16 Beta - 6 June 2026

- Shared mobile navigation logic now handles menu open and close state, grouped route toggles, Escape close and resize sync more reliably on smaller screens.
- OneSignal and Hellobar are now loaded through a shared host-aware script so the beta hostname no longer throws production-only console errors.
- Existing widget suppression for donor, chat, push and banner layers was preserved while the mobile menu is open.
- Footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub were re-checked after the shared runtime patch.
- Sitemap, page metadata and the branded 404 page were reviewed and did not need route-related changes.
- Public release labels, version files and release records updated to v0.0.16 Beta.

## v0.0.15 Beta - 6 June 2026

- Shared mobile navigation now opens as a wider APES-style panel below the sticky header instead of a narrow drawer isolated to the header edge.
- The mobile overlay and panel now use a synced header offset, stronger full-content coverage and a scrollable inner route list so grouped routes open cleanly inside the panel.
- Existing menu close behaviour for overlay tap, Escape, outside click, resize sync, link follow and widget suppression was preserved while the mobile presentation was rebuilt.
- Footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub were re-checked after the nav update.
- Sitemap, page metadata and the branded 404 page were reviewed and did not need route-related changes.
- Public release labels and release records updated to v0.0.15 Beta.

## v0.0.14 Beta - 6 June 2026

- Shared mobile navigation now uses an explicit top-layer stacking context so the drawer, overlay and grouped routes stay above homepage hero content, urgent banners and other page sections on small screens.
- Deployment verification confirmed the beta hostname is serving the current shared CSS asset path and identified that the live hostname should be synced with a full `public/` upload because it does not expose the same asset URL.
- Existing mobile drawer behaviour for overlay close, Escape close, outside-click close, scroll lock and grouped menus was preserved while the stacking rules were hardened.
- Footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub were re-checked after the nav patch.
- Sitemap, page metadata and the branded 404 page were reviewed and did not need route-related changes.
- Public release labels and release records updated to v0.0.14 Beta.

## v0.0.13 Beta - 6 June 2026

- Shared mobile navigation layering was raised so the drawer, overlay and grouped routes stay above the homepage hero and other page content on small screens.
- Existing mobile drawer behaviour for overlay close, Escape close, outside-click close, scroll lock and grouped menus was preserved while the layering bug was fixed.
- Footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub were re-checked after the nav fix.
- Sitemap, page metadata and the branded 404 page were reviewed and did not need route-related changes.
- Public release labels and release records updated to v0.0.13 Beta.

## v0.0.12 Beta - 6 June 2026

- Shared navigation rebuilt to use an APES-style mobile drawer and native grouped menu behaviour without changing Shelter route labels or destinations.
- Mobile nav now supports overlay close, Escape close, outside-click close, scroll lock and safer behaviour around shared widgets.
- Footer routes for Donate, Privacy Policy, Terms of Service and Change Log Hub were re-checked after the nav update.
- Sitemap, page metadata and the branded 404 page were reviewed and did not need route-related changes.
- Public release labels and release records updated to v0.0.12 Beta.

## v0.0.11 Beta - 4 June 2026

- Shared layout updated to a 90% viewport width on desktop and tablet, with a mobile readability exception.
- Shared footer rebuilt in the APES style with four content panels, partner pills, social links and expanded legal/contact details.
- Footer route checks confirmed for Donate, Privacy Policy, Terms of Service, Refund Policy and Change Log Hub.
- Public release labels and release records updated to v0.0.11 Beta.
