# Google Analytics Setup Guide

## ✅ What's Been Added

Google Analytics (GA4) tracking has been integrated into your CarbonMint website.

### Files Created/Modified:
1. ✅ `src/components/GoogleAnalytics.tsx` - GA4 tracking component
2. ✅ `src/app/layout.tsx` - Added GoogleAnalytics component
3. ✅ `.env.local.example` - Environment variable template

---

## 🚀 Setup Instructions

### Step 1: Create Google Analytics Account

1. Go to https://analytics.google.com
2. Click **Start measuring** (or **Admin** if you have an account)
3. Create a new **Property**:
   - Property name: `CarbonMint`
   - Reporting time zone: `India (GMT+5:30)`
   - Currency: `Indian Rupee (₹)`
4. Click **Next** → Select industry category → Click **Create**
5. Accept Terms of Service

### Step 2: Get Your Measurement ID

1. In GA4, go to **Admin** (bottom left)
2. Under **Property**, click **Data Streams**
3. Click **Add stream** → **Web**
4. Enter:
   - Website URL: `https://carbonmint.com`
   - Stream name: `CarbonMint Website`
5. Click **Create stream**
6. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add Measurement ID to Your Project

#### **For Local Development:**

1. Create `.env.local` file in project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace `G-XXXXXXXXXX` with your actual Measurement ID)

3. Restart dev server:
   ```bash
   npm run dev
   ```

#### **For Vercel Deployment:**

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your Measurement ID)
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your site (or it will auto-deploy on next push)

---

## 🧪 Testing

### Verify Tracking is Working:

#### **Method 1: Real-time Reports**
1. Visit your website: `https://carbonmint.com`
2. In Google Analytics, go to **Reports** → **Realtime**
3. You should see yourself as an active user
4. Navigate to different pages → See page views update

#### **Method 2: Browser Console**
1. Open your website
2. Open browser DevTools (F12)
3. Go to **Console** tab
4. Type: `dataLayer`
5. Should see array with GA events

#### **Method 3: Network Tab**
1. Open DevTools → **Network** tab
2. Filter by: `google-analytics` or `gtag`
3. Reload page
4. Should see requests to `www.google-analytics.com`

---

## 📊 What Gets Tracked

### Automatic Tracking:
- ✅ **Page views** - Every page visit
- ✅ **Sessions** - User sessions
- ✅ **User demographics** - Location, device, browser
- ✅ **Traffic sources** - Where users come from
- ✅ **Engagement time** - How long users stay
- ✅ **Scroll depth** - How far users scroll

### Available in GA4 Dashboard:
- **Realtime** - Live visitors
- **Acquisition** - How users find you (Google, social, direct)
- **Engagement** - Page views, events, conversions
- **Demographics** - Age, gender, interests
- **Tech** - Devices, browsers, OS
- **Geography** - Countries, cities

---

## 🎯 Recommended Setup (After Basic Tracking Works)

### 1. **Set Up Conversions**
Track important actions:
- Contact form submissions
- Demo bookings
- Newsletter signups
- Download clicks

### 2. **Link to Google Search Console**
1. In GA4: **Admin** → **Product Links** → **Search Console**
2. Link your Search Console property
3. See search queries that bring users to your site

### 3. **Create Custom Reports**
- Farmer vs. Business visitor behavior
- Most popular solutions
- Contact form conversion rate
- Geographic distribution of visitors

### 4. **Set Up Goals**
- Contact form submission
- Time on site > 2 minutes
- Pages per session > 3

---

## 🔒 Privacy & Compliance

### GDPR/Privacy Considerations:

Your site already has:
- ✅ Privacy-friendly setup (no PII collected by default)
- ✅ IP anonymization (GA4 default)

**Recommended additions:**
1. **Cookie Consent Banner** (if targeting EU users)
2. **Privacy Policy** - Mention Google Analytics usage
3. **Cookie Policy** - Explain tracking cookies

---

## 🐛 Troubleshooting

### "No data showing in GA4"

**Check:**
1. Measurement ID is correct (starts with `G-`)
2. Environment variable is set in Vercel
3. Site has been redeployed after adding env var
4. Ad blockers are disabled when testing
5. Wait 24-48 hours for data to appear in reports (Realtime should work immediately)

### "dataLayer is not defined"

**Solution:**
- Clear browser cache
- Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check browser console for script errors

### "Tracking works locally but not on Vercel"

**Solution:**
1. Verify environment variable is set in Vercel
2. Check it's set for "Production" environment
3. Redeploy the site
4. Check browser Network tab for GA requests

---

## 📈 Next Steps

### Week 1:
- [ ] Set up GA4 account
- [ ] Add Measurement ID to Vercel
- [ ] Verify tracking works
- [ ] Check Realtime reports

### Week 2:
- [ ] Link Google Search Console
- [ ] Set up conversion tracking
- [ ] Create custom reports
- [ ] Add team members to GA4

### Month 1:
- [ ] Analyze traffic sources
- [ ] Identify top-performing pages
- [ ] Track user behavior patterns
- [ ] Optimize based on data

---

## 📞 Support

**Google Analytics Help:**
- https://support.google.com/analytics

**GA4 Documentation:**
- https://developers.google.com/analytics/devguides/collection/ga4

**Vercel Environment Variables:**
- https://vercel.com/docs/environment-variables

---

## ✅ Summary

**What you have now:**
- ✅ GA4 tracking code integrated
- ✅ Environment variable setup
- ✅ Ready for production

**What you need to do:**
1. Create GA4 property
2. Get Measurement ID
3. Add to Vercel environment variables
4. Deploy and verify

**Time to complete:** 10-15 minutes

Your site will start tracking visitors as soon as you add the Measurement ID! 📊
