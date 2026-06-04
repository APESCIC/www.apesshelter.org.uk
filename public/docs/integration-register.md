# Integration Register

Version: v0.0.11 Beta

| Service | URL | Treatment |
|---|---|---|
| ShelterManager adoptable animals | https://service.sheltermanager.com/asmservice?account=apes&method=html_adoptable_animals | Embedded as iframe and linked externally |
| ShelterManager surrender form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112 | External hosted form |
| ShelterManager lost pet form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=26 | External hosted form |
| ShelterManager found pet form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=25 | External hosted form |
| Contact Centre | https://contact.apesshelter.org.uk/ | External support route |
| Service User Portal | https://www.apesshelter.org.uk/signin | External authenticated route |


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
