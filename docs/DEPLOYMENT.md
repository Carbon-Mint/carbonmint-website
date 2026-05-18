# Deployment Guide for CarbonMint Clone

This guide will help you deploy the CarbonMint clone to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (sign up at https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CarbonMint clone"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Select the repository containing your CarbonMint clone
   - Click "Import"

3. **Configure Project**
   - Vercel will automatically detect that this is a Next.js project
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts to link your project
   - The CLI will automatically detect Next.js settings

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

This project doesn't require any environment variables for basic functionality. If you add features that need environment variables (like API keys), add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development environments

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to your Git repository, Vercel will automatically:
- Deploy every push to the `main` branch to production
- Create preview deployments for pull requests
- Run builds and tests before deploying

## Build Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify that the build succeeds locally with `npm run build`

### CSS Not Loading
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

### 404 Errors
- Verify that all pages are in the correct directory structure
- Check that file names follow Next.js conventions

## Performance Optimization

Vercel automatically optimizes your Next.js app:
- Edge caching for static assets
- Automatic image optimization
- Serverless functions for API routes
- Global CDN distribution

## Monitoring

Access deployment analytics:
1. Go to your project in Vercel dashboard
2. Click on "Analytics" to view:
   - Page views
   - Performance metrics
   - User demographics
   - Real User Monitoring (RUM)

## Support

For issues with deployment:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
