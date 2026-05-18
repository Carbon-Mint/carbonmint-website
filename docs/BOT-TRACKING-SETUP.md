# AI Bot Tracking Setup

## ✅ What's Been Implemented

Your site now tracks AI bot crawlers visiting your website!

### Files Created:
1. ✅ `middleware.ts` - Server-side bot detection (logs to Vercel)
2. ✅ `src/app/api/bot-analytics/route.ts` - Analytics API endpoint
3. ✅ `src/components/BotTracker.tsx` - Client-side bot tracking
4. ✅ Updated `src/app/layout.tsx` - Added BotTracker component

---

## 🤖 Tracked AI Bots

Your site now detects and logs these AI crawlers:

| AI System | User-Agent Pattern | Purpose |
|-----------|-------------------|---------|
| **ChatGPT** | GPTBot | OpenAI training & responses |
| **Claude** | Claude-Web | Anthropic training |
| **Anthropic** | anthropic-ai | Claude AI training |
| **Google Gemini** | Google-Extended | Gemini AI training |
| **Perplexity AI** | PerplexityBot | Search & answers |
| **Common Crawl** | CCBot | Dataset for AI training |
| **Cohere** | cohere-ai | Cohere AI training |
| **ByteDance** | Bytespider | TikTok/ByteDance AI |
| **Apple Intelligence** | Applebot-Extended | Apple AI features |
| **Meta AI** | meta-externalagent | Meta AI training |
| **Diffbot** | Diffbot | Knowledge graph |

---

## 📊 How to View Bot Analytics

### **Method 1: Vercel Logs (Real-time)**

1. Go to **Vercel Dashboard** → Your Project → **Logs**
2. Look for entries with 🤖 emoji: `🤖 AI Bot Visit:`
3. Each log shows:
   - Bot name (e.g., "ChatGPT")
   - Full User-Agent string
   - Page visited
   - Timestamp
   - Referrer

**Example log:**
```json
{
  "bot": "ChatGPT",
  "userAgent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.0; +https://openai.com/gptbot)",
  "path": "/",
  "timestamp": "2026-05-18T08:54:23.456Z",
  "referer": "direct"
}
```

### **Method 2: Analytics API Endpoint**

Visit your analytics endpoint:
```
https://carbonmint.com/api/bot-analytics
```

**Returns:**
```json
{
  "totalVisits": 42,
  "uniqueBots": ["ChatGPT", "Claude", "Perplexity"],
  "recentVisits": [...],
  "visitsByBot": {
    "ChatGPT": 5,
    "Claude": 3,
    "Perplexity": 12,
    "Common Crawl": 22
  },
  "visitsByPath": {
    "/": 15,
    "/about": 8,
    "/#solutions": 10
  }
}
```

### **Method 3: Browser DevTools**

1. Open your site
2. Press F12 → Console tab
3. Bot visits trigger console logs (in development)

---

## 🔍 What Gets Tracked

### **Server-Side (Middleware):**
- ✅ All bot requests (even if JavaScript is disabled)
- ✅ Logged to Vercel logs immediately
- ✅ Custom header added: `X-Bot-Detected: [BotName]`
- ✅ Works for all pages and routes

### **Client-Side (BotTracker):**
- ✅ Bots that execute JavaScript
- ✅ Sends data to `/api/bot-analytics`
- ✅ Stores in-memory analytics
- ✅ Provides summary statistics

### **Data Collected:**
- Bot name/type
- Full User-Agent string
- Page path visited
- Timestamp (ISO 8601)
- Referrer (if available)

---

## 📈 Expected Bot Activity

Based on your AI optimization setup:

### **Week 1-2:**
- Initial discovery by search engines
- First bot visits from major crawlers

### **Month 1:**
- **Common Crawl (CCBot):** Daily visits
- **Perplexity:** 3-5 visits/week
- **Google-Extended:** 2-3 visits/week
- **ChatGPT (GPTBot):** 1-2 visits/week
- **Claude:** 1-2 visits/week

### **Month 2+:**
- Increased frequency as content is indexed
- More comprehensive crawls
- Regular re-indexing

---

## 🎯 Using the Data

### **Insights You Can Gain:**

1. **Which AI systems are indexing you:**
   - Track which bots visit most often
   - Identify new AI crawlers

2. **Content popularity with AI:**
   - Which pages bots crawl most
   - FAQ vs. homepage visits
   - Solution pages vs. about page

3. **Crawl patterns:**
   - Time between visits
   - Depth of crawling
   - New vs. returning bots

4. **Effectiveness of robots.txt:**
   - Verify allowed bots are visiting
   - Check if disallowed bots respect rules

### **Optimization Actions:**

- **High bot traffic on FAQ?** → Add more Q&A
- **Low bot visits overall?** → Improve structured data
- **Specific bot not visiting?** → Check robots.txt
- **Frequent re-crawls?** → Content is being updated in AI models

---

## 🔧 Advanced Configuration

### **Add More Bots:**

Edit `middleware.ts`:
```typescript
const aiBots = [
  // ... existing bots
  { name: 'Your New Bot', pattern: 'BotUserAgent' },
];
```

### **Store in Database (Production):**

Replace in-memory storage in `api/bot-analytics/route.ts`:

```typescript
// Example with Vercel Postgres
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  const data = await request.json();
  
  await sql`
    INSERT INTO bot_visits (bot, path, timestamp, user_agent)
    VALUES (${data.bot}, ${data.path}, ${data.timestamp}, ${data.userAgent})
  `;
  
  return NextResponse.json({ success: true });
}
```

### **Export Analytics:**

Add export endpoint in `api/bot-analytics/route.ts`:

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format');
  
  if (format === 'csv') {
    const csv = botVisits.map(v => 
      `${v.timestamp},${v.bot},${v.path}`
    ).join('\n');
    
    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=bot-analytics.csv'
      }
    });
  }
  
  // ... existing JSON response
}
```

---

## 📊 Integration with Google Analytics

Bot visits are separate from GA4 (GA4 filters bots by default).

To track in GA4 as custom events, the `BotTracker` component can send events:

```typescript
if (detectedBot && typeof window.gtag !== 'undefined') {
  window.gtag('event', 'ai_bot_visit', {
    bot_name: detectedBot,
    page_path: window.location.pathname
  });
}
```

---

## 🐛 Troubleshooting

### **"No bot visits showing in logs"**

**Possible reasons:**
1. Bots haven't discovered your site yet (takes 1-2 weeks)
2. Sitemap not submitted to search engines
3. New domain (low authority)

**Solutions:**
- Submit sitemap to Google Search Console
- Share site on social media
- Wait for natural discovery

### **"Analytics endpoint returns empty data"**

**Reason:** In-memory storage resets on each deployment

**Solutions:**
- Use database for persistent storage
- Check Vercel logs instead (always persistent)

### **"Too many bot visits"**

**If overwhelmed by bots:**
- Adjust `robots.txt` crawl-delay
- Block specific aggressive bots
- Use Vercel's rate limiting

---

## 📞 Monitoring & Alerts

### **Set Up Alerts:**

1. **Vercel Integrations:**
   - Add Slack/Discord integration
   - Get notified of bot visits

2. **Custom Webhooks:**
   - Modify middleware to send webhook on bot visit
   - Integrate with your monitoring tools

3. **Weekly Reports:**
   - Export analytics data
   - Create automated reports

---

## 🎉 Summary

**What you have now:**
- ✅ Real-time bot detection (middleware)
- ✅ Bot visit logging (Vercel logs)
- ✅ Analytics API endpoint
- ✅ Client-side tracking
- ✅ 11 AI bots tracked

**How to use:**
1. **Check Vercel Logs** for real-time bot visits
2. **Visit `/api/bot-analytics`** for summary stats
3. **Monitor trends** over time
4. **Optimize content** based on bot behavior

**Next steps:**
1. Wait 1-2 weeks for initial bot visits
2. Review Vercel logs weekly
3. Analyze which pages bots prefer
4. Expand FAQ/content based on bot activity

Your site is now tracking AI bot activity! 🤖📊
