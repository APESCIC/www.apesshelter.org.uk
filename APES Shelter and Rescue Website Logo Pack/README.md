# APES Shelter and Rescue Website Logo Pack

Prepared for `www.apes.org.uk` from the supplied APES Shelter and Rescue logo artwork.

## What is included

This pack keeps the attached logo artwork intact and provides website-ready resized/exported versions only.

## Recommended usage

### Header / navigation

Use the header WebP files in normal page chrome. Keep PNG fallbacks for older browsers.

```html
<picture>
  <source srcset="/assets/logos/apes-shelter-rescue-logo-header-320w.webp 320w,
                  /assets/logos/apes-shelter-rescue-logo-header-440w.webp 440w,
                  /assets/logos/apes-shelter-rescue-logo-header-660w.webp 660w"
          type="image/webp">
  <img src="/assets/logos/apes-shelter-rescue-logo-header-440w.png"
       alt="APES Shelter and Rescue"
       width="440">
</picture>
```

For a compact navigation bar, use one of the `apes-shelter-rescue-logo-navbar-*h` files.

### Primary brand areas

Use `apes-shelter-rescue-logo-primary-trimmed-640w.webp` or `apes-shelter-rescue-logo-primary-trimmed-900w.webp` for hero sections where a transparent background is needed.

### Favicons

Place the contents of `03-favicons-app-icons` into `/favicons/`, and place `site.webmanifest` at the website root or update the paths in `html-head-snippet.html`.

### Social sharing

Use `apes-shelter-rescue-og-image-1200x630.jpg` for Open Graph, `apes-shelter-rescue-twitter-card-1200x600.jpg` for Twitter/X cards, and `apes-shelter-rescue-social-square-1080.jpg` for square previews.

## Notes

PNG files retain transparency. WebP files are compressed for faster website loading. JPG social assets use a solid dark green background because Open Graph platforms handle transparent images inconsistently. `apes-shelter-rescue-logo-raster.svg` is an SVG wrapper around the raster artwork, not a manually redrawn vector logo.

Generated on: 2026-06-06
