# Partner Logo Download Guide

## Quick Download Options

### Option 1: Run the Download Scripts

**Bash Script (Mac/Linux):**
```bash
chmod +x download-logos.sh
./download-logos.sh
```

**Node.js Script:**
```bash
node download-logos.js
```

---

## Manual Download Instructions

### Partners

#### 1. NABARD
- **Website**: https://www.nabard.org/
- **Direct Logo**: https://www.nabard.org/auth/writereaddata/Images/NABARD-Logo.png
- **Save as**: `nabard.png`
- **How**: Right-click the logo in header → Save image as...

#### 2. IIRR (Indian Institute of Rice Research)
- **Website**: https://icar-iirr.org/
- **Logo Location**: Header/top-left corner
- **Save as**: `iirr.png`
- **How**: Right-click logo → Save image as...

#### 3. Bayer
- **Website**: https://www.bayer.com/
- **Brand Center**: https://www.bayer.com/en/media/brand-center
- **Save as**: `bayer.png` or `bayer.svg`
- **How**: Download from brand center or header logo

#### 4. Mana Telangana
- **Website**: Search for official Mana Telangana website
- **Save as**: `mana-telangana.png`
- **Alternative**: Contact organization for logo

#### 5. Kattangur FPO
- **Save as**: `kattangur-fpo.png`
- **How**: Request logo from FPO or create text-based placeholder

#### 6. Department of Agriculture (Telangana)
- **Website**: https://agri.telangana.gov.in/
- **Logo Location**: Header
- **Save as**: `dept-agriculture-telangana.png`
- **How**: Right-click government emblem/logo → Save image as...

#### 7. Prasad Seeds
- **Website**: Search for Prasad Seeds official website
- **Save as**: `prasad-seeds.png`
- **How**: Contact company or find on their website

---

### Clients

#### 1. Kattangur FPCL
- **Save as**: `kattangur-fpcl.png`
- **How**: Request logo or create placeholder

#### 2. Two Brothers
- **Website**: Search for Two Brothers Organic Farms
- **Save as**: `two-brothers.png`
- **How**: Find on their website or social media

#### 3. DeHaat
- **Website**: https://www.dehaat.in/
- **Direct Logo**: https://www.dehaat.in/static/media/logo.svg
- **Save as**: `dehaat.svg` or `dehaat.png`
- **How**: Right-click logo in header → Save image as...

#### 4. Organo
- **Website**: https://www.organo.co.in/
- **Save as**: `organo.png`
- **How**: Right-click logo → Save image as...

---

## Quick Download Commands

### Using curl (Mac/Linux):

```bash
# Create directory
mkdir -p public/partners

# Download available logos
curl -L -o public/partners/nabard.png "https://www.nabard.org/auth/writereaddata/Images/NABARD-Logo.png"
curl -L -o public/partners/dehaat.svg "https://www.dehaat.in/static/media/logo.svg"
curl -L -o public/partners/bayer.svg "https://www.bayer.com/themes/custom/bayer_cpa/logo.svg"
```

### Using wget (Linux):

```bash
# Create directory
mkdir -p public/partners

# Download available logos
wget -O public/partners/nabard.png "https://www.nabard.org/auth/writereaddata/Images/NABARD-Logo.png"
wget -O public/partners/dehaat.svg "https://www.dehaat.in/static/media/logo.svg"
wget -O public/partners/bayer.svg "https://www.bayer.com/themes/custom/bayer_cpa/logo.svg"
```

---

## Logo Specifications

- **Format**: PNG or SVG (SVG preferred)
- **Background**: Transparent
- **Size**: At least 200x200px
- **File Size**: Under 100KB

---

## Converting SVG to PNG (if needed)

If you download SVG but need PNG:

### Using ImageMagick:
```bash
convert input.svg -resize 400x400 output.png
```

### Using Online Tools:
- https://cloudconvert.com/svg-to-png
- https://convertio.co/svg-png/

---

## Troubleshooting

### Logo not downloading?
1. Check if URL is correct
2. Try opening URL in browser first
3. Some sites block direct downloads - use browser to save

### Logo has white background?
1. Use image editing tool to remove background
2. Look for SVG version (usually transparent)
3. Use online tools like remove.bg

### Can't find logo?
1. Check company's LinkedIn page
2. Look for "Press Kit" or "Media" section
3. Contact company directly
4. Use placeholder until you get official logo

---

## After Downloading

1. Save all logos in `public/partners/` folder
2. Use exact filenames as listed above
3. Refresh website - logos will appear automatically!
4. Check that logos look good on white background
5. Optimize file sizes if needed

---

## Need Help?

If you're stuck on a specific logo, you can:
1. Create a text-based placeholder
2. Use company initials in a colored circle
3. Contact the organization's marketing team
4. Check their social media profiles for high-res logos
