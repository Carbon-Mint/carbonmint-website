# Quick Start Guide

Get the CarbonMint clone running in minutes!

## Installation

```bash
# Navigate to the project directory
cd carbonmint-clone

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Project Overview

### Pages
- **Home** (`/`) - Main landing page with all sections
- **About Us** (`/about`) - Information about CarbonMint

### Sections on Homepage
1. **Hero** - Main banner with call-to-action
2. **Solutions** - 8 solution cards showcasing services
3. **Features** - 6 feature cards highlighting platform capabilities
4. **Benefits** - 3 key benefits for stakeholders
5. **Projects** - 3 major project showcases
6. **Contact** - Contact form and information

### Key Features
- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Smooth scroll navigation
- ✅ Mobile-friendly navigation menu
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Ready for Vercel deployment

## Customization

### Update Colors
Edit `src/app/globals.css` to change the color scheme.

### Modify Content
- **Header/Navigation**: `src/components/Header.tsx`
- **Hero Section**: `src/components/Hero.tsx`
- **Solutions**: `src/components/Solutions.tsx`
- **Features**: `src/components/Features.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Contact**: `src/components/Contact.tsx`
- **Footer**: `src/components/Footer.tsx`

### Add New Pages
Create a new folder in `src/app/` with a `page.tsx` file.

Example:
```bash
mkdir src/app/services
touch src/app/services/page.tsx
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## Tech Stack

- **Next.js 16.2.6** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS
- **React 19** - UI library

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
