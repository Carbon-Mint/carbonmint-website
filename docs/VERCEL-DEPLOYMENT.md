# Vercel Deployment & Versioning

## 🚀 How Versioning Works with Vercel

### **Important: Vercel Cannot Update GitHub**

Vercel builds are **read-only**:
- ✅ Clones your repo
- ✅ Runs build scripts
- ✅ Generates version files
- ❌ **Cannot push changes back to GitHub**
- ❌ **Cannot update package.json in repo**

### **Solution: Manual Version Control**

Version bumps happen **before** pushing to GitHub, not during Vercel builds.

---

## 📋 Recommended Workflow

### **Option 1: Version Before Commit (Recommended)**

```bash
# 1. Make your changes
git add .

# 2. Bump version (choose one)
npm run version:patch  # Bug fix: 1.1.0 → 1.1.1
npm run version:minor  # Feature: 1.1.0 → 1.2.0
npm run version:major  # Breaking: 1.1.0 → 2.0.0

# 3. Commit with version change
git add package.json
git commit -m "feat: add new feature (v1.2.0)"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys with correct version
```

### **Option 2: Use Git Tags**

```bash
# 1. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 2. Create version tag
git tag v1.2.0

# 3. Update package.json to match
npm run version:minor

# 4. Commit version update
git add package.json
git commit -m "chore: bump version to 1.2.0"

# 5. Push with tags
git push --follow-tags
```

---

## 🔧 What Happens on Vercel

### **Build Process:**

1. **Vercel receives push**
   - Webhook from GitHub
   - Clones latest code

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Pre-build script runs**
   ```bash
   node scripts/generate-version.js
   ```
   - Reads version from `package.json` (1.1.0)
   - Gets git commit hash from clone
   - Generates `src/version.ts`
   - Generates `public/version.json`

4. **Build runs**
   ```bash
   next build
   ```
   - Includes generated version files
   - Version files are bundled into build

5. **Deploy**
   - Static files deployed to CDN
   - Version info available at `/version.json`

### **Result:**
- ✅ Website shows correct version (1.1.0)
- ✅ Git commit hash is accurate
- ✅ Build date is current
- ❌ package.json in GitHub unchanged (as expected)

---

## 📊 Version Information on Vercel

### **What Gets Included:**

```json
{
  "version": "1.1.0",           // ← From package.json
  "buildDate": "2025-05-15...", // ← Vercel build time
  "gitCommit": "abc123",        // ← From git clone
  "gitBranch": "main",          // ← From deployment branch
  "buildNumber": "local",       // ← Can set via env var
  "environment": "production"   // ← From NODE_ENV
}
```

### **Environment Variables (Optional):**

Add to Vercel dashboard:
```
BUILD_NUMBER=123
NODE_ENV=production
```

---

## 🎯 Best Practices

### **1. Version Before Deploy**
```bash
# Always bump version before pushing
npm run version:minor
git add package.json
git commit -m "chore: bump to v1.2.0"
git push
```

### **2. Use Semantic Versioning**
- **Patch** (1.1.0 → 1.1.1): Bug fixes, small tweaks
- **Minor** (1.1.0 → 1.2.0): New features, backward compatible
- **Major** (1.1.0 → 2.0.0): Breaking changes

### **3. Tag Releases**
```bash
# After version bump
git tag v1.2.0
git push --tags
```

### **4. Keep CHANGELOG**
```markdown
# CHANGELOG.md

## [1.2.0] - 2025-05-15
### Added
- Partner logos section
- Version display in footer

### Fixed
- Navigation links
- Performance optimizations
```

---

## 🔍 Vercel Configuration

### **Build Settings:**

```yaml
# In Vercel Dashboard or vercel.json

Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### **vercel.json (Optional):**

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  }
}
```

---

## 🚨 Common Issues

### **Issue 1: Version Not Updating**

**Problem:** Website still shows old version after deploy

**Solution:**
```bash
# Check package.json was committed
git log -1 --name-only

# Should show:
# modified: package.json

# If not, version wasn't committed
npm run version:minor
git add package.json
git commit --amend
git push --force
```

### **Issue 2: Git Info Shows "unknown"**

**Problem:** Commit hash shows "unknown" on Vercel

**Solution:**
- Vercel should have git info by default
- Check Vercel build logs
- Ensure `.git` folder isn't in `.vercelignore`

### **Issue 3: Build Fails**

**Problem:** `scripts/generate-version.js` fails

**Solution:**
```bash
# Test locally first
node scripts/generate-version.js

# Check scripts folder is committed
git ls-files scripts/
```

---

## 📈 Tracking Deployments

### **Vercel Deployment Info:**

Each Vercel deployment has:
- Deployment URL
- Git commit hash
- Build logs
- Environment variables

### **Match Version to Deployment:**

1. **Check website footer:** `v1.2.0`
2. **Check `/version.json`:**
   ```bash
   curl https://yoursite.com/version.json
   ```
3. **Match commit in Vercel dashboard**
4. **View that deployment's logs**

---

## 🎨 Complete Example Workflow

### **Scenario: Adding New Feature**

```bash
# 1. Create feature branch
git checkout -b feature/partner-logos

# 2. Make changes
# ... edit files ...

# 3. Test locally
npm run dev

# 4. Commit changes
git add .
git commit -m "feat: add partner logos section"

# 5. Bump minor version (new feature)
npm run version:minor  # 1.1.0 → 1.2.0

# 6. Commit version bump
git add package.json
git commit -m "chore: bump version to 1.2.0"

# 7. Merge to main
git checkout main
git merge feature/partner-logos

# 8. Tag release
git tag v1.2.0

# 9. Push everything
git push origin main --tags

# 10. Vercel auto-deploys
# ✅ Website shows v1.2.0
# ✅ Footer displays correct version
# ✅ /version.json has all info
```

---

## 🔐 Security Notes

### **What's Safe to Expose:**

✅ Version number (1.2.0)
✅ Git commit hash (abc123)
✅ Build date
✅ Branch name

### **What to Keep Private:**

❌ API keys (use env vars)
❌ Secrets (use Vercel secrets)
❌ Internal URLs
❌ Database credentials

---

## 📚 Summary

### **Key Points:**

1. ✅ **Version in package.json** - Update before commit
2. ✅ **Vercel reads version** - From committed package.json
3. ✅ **Generates metadata** - During build (git info, date)
4. ✅ **Displays in footer** - Shows correct version
5. ❌ **No auto-update** - Vercel can't push to GitHub

### **Your Workflow:**

```bash
# Every release:
npm run version:minor    # Bump version
git add package.json     # Stage version
git commit -m "v1.2.0"   # Commit version
git push                 # Deploy to Vercel
```

### **Vercel Does:**

```bash
# Automatically:
1. Clone repo (with version in package.json)
2. Run: node scripts/generate-version.js
3. Build: next build
4. Deploy with correct version
```

---

## 🎯 Next Steps

1. ✅ Commit current version system
2. ✅ Push to GitHub
3. ✅ Verify Vercel deployment
4. ✅ Check footer shows v1.1.0
5. ✅ Test `/version.json` endpoint

**Your version system is now Vercel-ready!** 🚀
