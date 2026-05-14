# SEO Setup Guide for CarbonMint Website

## ✅ Implemented SEO Features

### 1. **Meta Tags & Metadata**
- Comprehensive title and description
- Keywords targeting climate-smart agriculture, carbon credits, Rice360™
- Open Graph tags for social media sharing
- Twitter Card metadata
- Canonical URLs
- Author and publisher information

### 2. **Structured Data (JSON-LD)**
The site includes rich schema markup for Google AI and search engines:
- **Organization Schema** - Company information, address, contact details
- **Product Schema** - Rice360™ product information
- **Service Schema** - All three main services (Rice360, Carbon Development, FPO)
- **FAQ Schema** - Common questions about services

### 3. **Technical SEO**
- ✅ Sitemap.xml (auto-generated at `/sitemap.xml`)
- ✅ Robots.txt configured
- ✅ Semantic HTML5 (article, section, main, nav)
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ ARIA labels for accessibility
- ✅ Mobile-responsive design
- ✅ Fast loading (Next.js optimization)

### 4. **Google AI Optimization**
- Structured data helps Google AI understand:
  - Your organization and services
  - Product offerings (Rice360™)
  - FAQs for direct answers
  - Service areas and capabilities
- Semantic markup helps AI extract key information

## 🔧 Post-Deployment Setup Required

### 1. **Google Search Console**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://carbonmint.com`
3. Verify ownership using the meta tag method
4. Copy the verification code
5. Update `src/app/layout.tsx` line 75:
   ```typescript
   verification: {
     google: 'YOUR_VERIFICATION_CODE_HERE',
   },
   ```
6. Submit your sitemap: `https://carbonmint.com/sitemap.xml`

### 2. **Update Domain in Files**
Replace `https://carbonmint.com` with your actual domain in:
- `src/app/layout.tsx` (line 37)
- `src/app/sitemap.ts` (line 4)
- `public/robots.txt` (line 9)
- `src/components/StructuredData.tsx` (lines 6, 7, 8)

### 3. **Add Social Media Links**
Update `src/components/StructuredData.tsx` lines 23-26 with your actual social media URLs:
```typescript
"sameAs": [
  "https://www.facebook.com/your-page",
  "https://www.linkedin.com/company/your-company",
  "https://twitter.com/your-handle"
]
```

### 4. **Create OG Image**
Create a 1200x630px image for social sharing:
- Save as `public/og-image.png`
- Update `src/app/layout.tsx` line 50 to use `/og-image.png`

### 5. **Google Analytics (Optional)**
Add Google Analytics 4:
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`

### 6. **Submit to Search Engines**
- Google: Via Search Console
- Bing: [Bing Webmaster Tools](https://www.bing.com/webmasters)

## 📊 SEO Monitoring

### Check Your SEO Score:
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **Google Rich Results Test**: https://search.google.com/test/rich-results
3. **Schema Markup Validator**: https://validator.schema.org/

### Monitor Performance:
- Google Search Console - Track rankings, clicks, impressions
- Google Analytics - Track user behavior
- Bing Webmaster Tools - Bing search performance

## 🎯 Key SEO Features for Google AI

### 1. **Structured Data Benefits**
- Appears in Google AI Overviews (SGE)
- Rich snippets in search results
- Knowledge Graph eligibility
- Better understanding of services

### 2. **Content Optimization**
- Clear service descriptions
- FAQ content for direct answers
- Semantic HTML for context
- Proper heading structure

### 3. **Technical Excellence**
- Fast loading times
- Mobile-first design
- Accessibility compliance
- Secure HTTPS (when deployed)

## 📝 Content Best Practices

1. **Keep content fresh** - Update regularly
2. **Add blog section** - For ongoing content
3. **Case studies** - Showcase success stories
4. **Video content** - Already embedded (great for SEO!)
5. **Internal linking** - Link between related pages

## 🚀 Next Steps

1. Deploy to production
2. Add Google Search Console verification
3. Submit sitemap
4. Monitor in Search Console
5. Create high-quality backlinks
6. Add blog content regularly
7. Monitor and optimize based on data

## 📞 Support

For SEO questions or issues, refer to:
- [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
