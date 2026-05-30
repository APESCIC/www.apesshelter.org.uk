# Integration Register

Version: v0.0.6 Beta

| Service | URL | Treatment |
|---|---|---|
| ShelterManager adoptable animals | https://service.sheltermanager.com/asmservice?account=apes&method=html_adoptable_animals | Embedded as iframe and linked externally |
| ShelterManager surrender form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112 | External hosted form |
| ShelterManager lost pet form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=26 | External hosted form |
| ShelterManager found pet form | https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=25 | External hosted form |
| Contact Centre | https://contact.apesshelter.org.uk/ | External support route |
| Service User Portal | https://www.apesshelter.org.uk/signin | External authenticated route |


## v0.0.6 Beta notes
- Chatwoot live support widget added to public HTML pages.
- Full-width page layout applied across templates.


## v0.0.6 Beta notes
- Confirm dark-card and mega-menu contrast in browser QA.
- Confirm Trial Adoptions and Foster Scheme remain under construction until service wording is approved.
- Check links from the mega menu, Services directory and Adoptions page to the new pages.


v0.0.6 Beta changes:
- Rebuilt surrender.html with advanced route helper, readiness checker, animal category filter, process journey and FAQ sections.
- Kept ShelterManager surrender form as the external system of record.
- Updated version and changelog.
