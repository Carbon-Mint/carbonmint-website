# MongoDB Setup for Bot Analytics

## ✅ What's Been Updated

Bot analytics now uses **MongoDB** for persistent storage instead of in-memory storage.

### Files Modified:
1. ✅ `src/lib/mongodb.ts` - MongoDB connection handler
2. ✅ `src/app/api/bot-analytics/route.ts` - Updated to use MongoDB
3. ✅ `.env.local.example` - Added MongoDB URI template

---

## 📦 Installation

### Step 1: Install MongoDB Driver

```bash
npm install mongodb
```

This will add the MongoDB Node.js driver to your project.

---

## 🔧 Setup Instructions

### Step 2: Get MongoDB Connection String

#### **Option A: MongoDB Atlas (Free - Recommended)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up / Log in
3. Click **Create** → **Shared** (Free tier)
4. Choose:
   - Cloud Provider: **AWS**
   - Region: **Mumbai (ap-south-1)** or closest to you
   - Cluster Name: `carbonmint-cluster`
5. Click **Create Cluster** (takes 3-5 minutes)

6. **Create Database User:**
   - Click **Database Access** (left sidebar)
   - Click **Add New Database User**
   - Username: `carbonmint_user`
   - Password: Generate secure password (save it!)
   - Database User Privileges: **Read and write to any database**
   - Click **Add User**

7. **Whitelist IP Address:**
   - Click **Network Access** (left sidebar)
   - Click **Add IP Address**
   - Click **Allow Access from Anywhere** (0.0.0.0/0)
   - Click **Confirm**

8. **Get Connection String:**
   - Click **Database** (left sidebar)
   - Click **Connect** on your cluster
   - Click **Connect your application**
   - Copy the connection string:
     ```
     mongodb+srv://carbonmint_user:<password>@carbonmint-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - Replace `<password>` with your actual password
   - Add database name: `/carbonmint` before the `?`
     ```
     mongodb+srv://carbonmint_user:YOUR_PASSWORD@carbonmint-cluster.xxxxx.mongodb.net/carbonmint?retryWrites=true&w=majority
     ```

#### **Option B: Self-Hosted MongoDB**

If you have your own MongoDB server:
```
mongodb://username:password@your-server:27017/carbonmint
```

---

### Step 3: Add to Environment Variables

#### **For Local Development:**

1. Create `.env.local` file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local`:
   ```
   MONGODB_URI=mongodb+srv://carbonmint_user:YOUR_PASSWORD@carbonmint-cluster.xxxxx.mongodb.net/carbonmint?retryWrites=true&w=majority
   ```

3. Restart dev server:
   ```bash
   npm run dev
   ```

#### **For Vercel Deployment:**

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your site

---

## 📊 Database Structure

### Database: `carbonmint`

### Collection 1: `carbonmint_com_bot_visits`

**Document Schema:**
```typescript
{
  bot: string;          // e.g., "ChatGPT", "Claude"
  path: string;         // e.g., "/", "/about"
  timestamp: string;    // ISO 8601 format
  userAgent: string;    // Full user agent string
}
```

**Example Document:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "bot": "ChatGPT",
  "path": "/",
  "timestamp": "2026-05-18T10:12:34.567Z",
  "userAgent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.0; +https://openai.com/gptbot)"
}
```

### Collection 2: `carbonmint_com_contact_submissions`

**Document Schema:**
```typescript
{
  name: string;         // Contact name
  email: string;        // Contact email (lowercase)
  message: string;      // Message content
  timestamp: string;    // ISO 8601 format
  userAgent?: string;   // Browser user agent
  ipAddress?: string;   // IP address (if available)
}
```

**Example Document:**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Rajesh Kumar",
  "email": "rajesh@example.com",
  "message": "Interested in Rice360 for our FPO",
  "timestamp": "2026-05-18T10:15:00.000Z",
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
  "ipAddress": "103.x.x.x"
}
```

---

## 🧪 Testing

### Test MongoDB Connection:

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Visit the analytics endpoint:
   ```
   http://localhost:3000/api/bot-analytics
   ```

3. Should return:
   ```json
   {
     "totalVisits": 0,
     "uniqueBots": [],
     "recentVisits": [],
     "visitsByBot": {},
     "visitsByPath": {},
     "firstVisit": null,
     "lastVisit": null
   }
   ```

4. If you see this, MongoDB is connected! ✅

### Test Bot Visit Recording:

Simulate a bot visit:
```bash
curl -X POST http://localhost:3000/api/bot-analytics \
  -H "Content-Type: application/json" \
  -d '{
    "bot": "TestBot",
    "path": "/test",
    "userAgent": "TestBot/1.0",
    "timestamp": "2026-05-18T10:00:00.000Z"
  }'
```

Should return:
```json
{
  "success": true,
  "totalVisits": 1,
  "visit": {
    "bot": "TestBot",
    "path": "/test",
    "userAgent": "TestBot/1.0",
    "timestamp": "2026-05-18T10:00:00.000Z"
  }
}
```

---

## 📈 Viewing Analytics

### API Endpoint:
```
GET https://carbonmint.com/api/bot-analytics
```

### Response Format:
```json
{
  "totalVisits": 42,
  "uniqueBots": ["ChatGPT", "Claude", "Perplexity"],
  "recentVisits": [
    {
      "bot": "ChatGPT",
      "path": "/",
      "timestamp": "2026-05-18T10:12:34.567Z",
      "userAgent": "..."
    }
  ],
  "visitsByBot": {
    "ChatGPT": 5,
    "Claude": 3,
    "Perplexity": 12
  },
  "visitsByPath": {
    "/": 15,
    "/about": 8,
    "/#solutions": 10
  },
  "firstVisit": "2026-05-01T08:00:00.000Z",
  "lastVisit": "2026-05-18T10:12:34.567Z"
}
```

---

## 🔍 MongoDB Atlas Dashboard

### View Data in Atlas:

1. Go to https://cloud.mongodb.com
2. Click **Database** → **Browse Collections**
3. Select `carbonmint` database → `bot_visits` collection
4. See all bot visits in real-time

### Useful Queries:

**Count visits by bot:**
```javascript
db.bot_visits.aggregate([
  { $group: { _id: "$bot", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
```

**Recent visits:**
```javascript
db.bot_visits.find().sort({ timestamp: -1 }).limit(20)
```

**Visits today:**
```javascript
db.bot_visits.find({
  timestamp: {
    $gte: new Date(new Date().setHours(0,0,0,0)).toISOString()
  }
})
```

---

## 🎯 Benefits of MongoDB Storage

### vs. In-Memory:
- ✅ **Persistent** - Data survives deployments
- ✅ **Historical** - Keep all data forever
- ✅ **Scalable** - No memory limits
- ✅ **Queryable** - Advanced analytics possible

### vs. Vercel Logs:
- ✅ **Long-term** - Logs expire, MongoDB doesn't
- ✅ **Structured** - Easy to query and analyze
- ✅ **Exportable** - Download data anytime
- ✅ **Free** - MongoDB Atlas free tier (512 MB)

---

## 💾 Data Management

### Backup:

**Export data:**
```bash
mongoexport --uri="YOUR_MONGODB_URI" \
  --collection=bot_visits \
  --out=bot_visits_backup.json
```

### Cleanup Old Data:

**Delete visits older than 90 days:**
```javascript
db.bot_visits.deleteMany({
  timestamp: {
    $lt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()
  }
})
```

### Add Indexes for Performance:

```javascript
// Index on timestamp for faster sorting
db.bot_visits.createIndex({ timestamp: -1 })

// Index on bot for faster grouping
db.bot_visits.createIndex({ bot: 1 })

// Compound index for common queries
db.bot_visits.createIndex({ bot: 1, timestamp: -1 })
```

---

## 🐛 Troubleshooting

### "Cannot find module 'mongodb'"

**Solution:**
```bash
npm install mongodb
```

### "MongoServerError: bad auth"

**Causes:**
- Wrong username/password
- User not created in MongoDB Atlas
- Password contains special characters (needs URL encoding)

**Solution:**
- Verify credentials in MongoDB Atlas
- URL encode password: `p@ssw0rd` → `p%40ssw0rd`

### "MongoNetworkError: connection timeout"

**Causes:**
- IP not whitelisted in MongoDB Atlas
- Firewall blocking connection

**Solution:**
- Add `0.0.0.0/0` to Network Access in Atlas
- Or add Vercel IP ranges

### "Failed to fetch analytics"

**Check:**
1. MongoDB URI is correct in environment variables
2. Database name is `carbonmint`
3. Collection will be auto-created on first insert

---

## 📊 MongoDB Atlas Free Tier Limits

- **Storage:** 512 MB (plenty for bot analytics)
- **RAM:** Shared
- **Connections:** 500 concurrent
- **Backups:** No automatic backups (manual export)

**Estimated capacity:**
- ~500,000 bot visit records
- Years of data for typical traffic

---

## 🚀 Next Steps

1. **Install MongoDB driver:**
   ```bash
   npm install mongodb
   ```

2. **Set up MongoDB Atlas** (or provide your connection string)

3. **Add `MONGODB_URI` to:**
   - `.env.local` (local development)
   - Vercel environment variables (production)

4. **Deploy and test:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/api/bot-analytics
   ```

5. **Monitor bot visits** in MongoDB Atlas dashboard

---

## ✅ Summary

**What you have now:**
- ✅ MongoDB integration ready
- ✅ Persistent bot analytics storage
- ✅ Historical data preservation
- ✅ Advanced query capabilities

**What you need:**
1. Install `mongodb` package
2. Get MongoDB connection string
3. Add to environment variables
4. Deploy

Your bot analytics will be stored permanently in MongoDB! 📊🎉
