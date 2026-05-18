# Version Management - Quick Start

## 🎯 What You Need to Know

### Version is displayed in the **footer** of every page
- Shows: `v1.0.0`
- Click it to see build details (commit, date, branch)

---

## 📦 Quick Commands

### Version Bumps (Before Commit)
```bash
# Bug fix (1.1.0 → 1.1.1)
npm run version:patch

# New feature (1.1.0 → 1.2.0)
npm run version:minor

# Major release (1.1.0 → 2.0.0)
npm run version:major
```

### Build
```bash
npm run build
# Generates version files from package.json
```

### Development (No version change)
```bash
npm run dev
```

---

## 📍 Where to Find Version

1. **Website Footer** - Bottom of every page
2. **Public API** - `https://yoursite.com/version.json`
3. **Package.json** - `"version": "1.0.0"`

---

## 🔄 Typical Workflow (Vercel-Compatible)

### Standard Workflow
```bash
# 1. Make changes
git add .

# 2. Bump version BEFORE commit
npm run version:minor  # 1.1.0 → 1.2.0

# 3. Commit with version
git add package.json
git commit -m "feat: new feature (v1.2.0)"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys with correct version ✅
```

### Quick Fix Workflow
```bash
# 1. Fix bug
git add .

# 2. Bump patch version
npm run version:patch  # 1.1.0 → 1.1.1

# 3. Commit and push
git add package.json
git commit -m "fix: navigation links (v1.1.1)"
git push
```

---

## 📊 Version Info Includes

- **Version number** (from package.json)
- **Git commit hash** (short)
- **Git branch name**
- **Build timestamp**
- **Environment** (dev/production)

---

## 🎨 What It Looks Like

**Footer Display:**
```
©2025 CarbonMint India Private Limited
v1.0.0  ← Click this!
```

**Expanded Details:**
```
Version: 1.0.0
Commit: ffcc1f9
Branch: main
Built: 5/15/2025, 7:14:00 AM
Env: production
```

---

## 🚀 That's It!

For detailed docs, see: `VERSION-MANAGEMENT.md`

**Current Version**: 1.0.0
