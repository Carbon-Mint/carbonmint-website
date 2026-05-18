# Favicon & Icon Setup

## ✅ Files Created

### App Icons (src/app/)
Next.js 13+ automatically serves these files:

1. **`icon.svg`** - Vector favicon (32x32)
   - Scalable SVG with CarbonMint branding
   - Green leaf background (#2D5016)
   - Orange "C" accent (#FFA500)
   - Mint green leaf detail (#90EE90)

2. **`icon.png`** - PNG favicon (120x120)
   - Based on carbonmint-logo.png
   - Used as fallback for browsers that don't support SVG

3. **`apple-icon.png`** - Apple Touch Icon (120x120)
   - For iOS home screen bookmarks
   - Same as icon.png

4. **`favicon.ico`** - Traditional favicon (already existed)
   - Legacy browser support

### Web Manifest (public/)

**`site.webmanifest`** - PWA manifest
```json
{
  "name": "CarbonMint",
  "short_name": "CarbonMint",
  "theme_color": "#2D5016"
}
```

## How It Works

Next.js 13+ automatically:
- Serves `src/app/icon.*` files as favicons
- Generates appropriate `<link>` tags in the HTML
- Optimizes and caches icons
- Supports multiple formats (SVG, PNG, ICO)

## Browser Support

- ✅ **Modern browsers**: Use `icon.svg` (scalable, crisp at any size)
- ✅ **Older browsers**: Fall back to `icon.png` or `favicon.ico`
- ✅ **iOS/Safari**: Use `apple-icon.png` for home screen
- ✅ **Android**: Use manifest for PWA installation

## Metadata Configuration

Updated `src/app/layout.tsx`:
- ✅ Removed placeholder Google verification code
- ✅ Added manifest link
- ✅ Icons auto-discovered from `src/app/` directory

## Testing

After deployment, test favicons at:
- https://realfavicongenerator.net/favicon_checker
- Check browser tab icon
- Check iOS home screen icon
- Check Android PWA icon

## Future Improvements

If you want higher quality icons:
1. Create 180x180 PNG for `apple-icon.png` (recommended size)
2. Create 192x192 and 512x512 for Android PWA
3. Add to `site.webmanifest` icons array
4. Generate from a high-res source logo

## Color Scheme

- **Primary**: #2D5016 (Dark Green - leaf/agriculture)
- **Accent**: #FFA500 (Orange - carbon/energy)
- **Highlight**: #90EE90 (Light Green - mint/freshness)
