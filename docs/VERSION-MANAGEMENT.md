# Version Management System

## Overview

The CarbonMint website now has automatic version tracking with build metadata. The version is displayed in the footer and can be bumped automatically or manually.

## Current Version: 1.0.0

---

## How It Works

### 1. **Automatic Version on Build**
Every time you run `npm run build`, the patch version automatically increments:
- `1.0.0` → `1.0.1` → `1.0.2` etc.

### 2. **Version Display**
- **Footer**: Shows version number (e.g., "v1.0.0")
- **Click version**: Shows detailed build info (commit, date, branch)
- **Public API**: Available at `/version.json`

### 3. **Build Metadata**
Each build generates:
- Version number from package.json
- Git commit hash
- Git branch name
- Build timestamp
- Environment info

---

## Usage

### Manual Version Bumps

```bash
# Patch version (1.0.0 → 1.0.1) - for bug fixes
npm run version:patch

# Minor version (1.0.0 → 1.1.0) - for new features
npm run version:minor

# Major version (1.0.0 → 2.0.0) - for breaking changes
npm run version:major
```

### Automatic Build Bump

```bash
# This automatically bumps patch version and builds
npm run build
```

### Development (No Version Bump)

```bash
# Development mode - no version changes
npm run dev
```

---

## Version Files Generated

### 1. `public/version.json`
Public API endpoint with version info:
```json
{
  "version": "1.0.0",
  "buildDate": "2025-05-15T01:44:00.000Z",
  "gitCommit": "ffcc1f9",
  "gitBranch": "main",
  "gitDate": "2025-05-15T01:40:00.000Z",
  "buildNumber": "local",
  "environment": "production"
}
```

Access at: `https://yoursite.com/version.json`

### 2. `src/version.ts`
TypeScript module for importing version in code:
```typescript
import { VERSION_INFO, getVersion, getFullVersion } from '@/version';

console.log(getVersion()); // "1.0.0"
console.log(getFullVersion()); // "v1.0.0 (ffcc1f9)"
```

---

## Where Version is Displayed

### Footer
- Bottom of every page
- Click to see build details
- Shows: version, commit, branch, build date

### Version API
- Public endpoint: `/version.json`
- Use for monitoring, debugging, support

---

## Git Integration

### Pre-commit Hook (Optional)
To auto-generate version on every commit:

1. Install husky:
```bash
npm install --save-dev husky
npx husky install
```

2. The `.husky/pre-commit` hook is already created
3. Make it executable:
```bash
chmod +x .husky/pre-commit
```

Now every commit will update version files automatically!

---

## Versioning Strategy

### Semantic Versioning (SemVer)
Format: `MAJOR.MINOR.PATCH`

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
  - Complete redesign
  - Major feature overhaul
  - API changes
  
- **MINOR** (1.0.0 → 1.1.0): New features
  - New sections added
  - New functionality
  - Backward compatible
  
- **PATCH** (1.0.0 → 1.0.1): Bug fixes
  - Bug fixes
  - Performance improvements
  - Small tweaks

### Recommended Workflow

1. **Development**: Use `npm run dev` (no version change)
2. **Bug Fix**: `npm run version:patch` then commit
3. **New Feature**: `npm run version:minor` then commit
4. **Major Release**: `npm run version:major` then commit
5. **Production Build**: `npm run build` (auto-bumps patch)

---

## Scripts Reference

### Version Scripts
```json
{
  "version:patch": "Bump patch version (1.0.0 → 1.0.1)",
  "version:minor": "Bump minor version (1.0.0 → 1.1.0)",
  "version:major": "Bump major version (1.0.0 → 2.0.0)",
  "version:build": "Auto-bump on build",
  "prebuild": "Generate version files before build"
}
```

### Build Scripts
```json
{
  "dev": "Development server (no version bump)",
  "build": "Production build (auto-bumps patch)",
  "start": "Start production server"
}
```

---

## Files in Version System

```
├── package.json              # Version number stored here
├── scripts/
│   ├── generate-version.js   # Creates version files
│   └── version-bump.js       # Auto-increment version
├── src/
│   ├── version.ts           # Generated - TypeScript module
│   └── components/
│       └── VersionDisplay.tsx # Footer version component
├── public/
│   └── version.json         # Generated - Public API
└── .husky/
    └── pre-commit           # Optional git hook
```

---

## Examples

### Example 1: Bug Fix Release
```bash
# Fix a bug
git add .
npm run version:patch  # 1.0.0 → 1.0.1
git commit -m "fix: correct navigation links"
git push
npm run build
```

### Example 2: New Feature Release
```bash
# Add new feature
git add .
npm run version:minor  # 1.0.0 → 1.1.0
git commit -m "feat: add partner logos section"
git push
npm run build
```

### Example 3: Quick Build
```bash
# Just build (auto-bumps patch)
npm run build  # 1.0.0 → 1.0.1
```

---

## Monitoring & Debugging

### Check Current Version
```bash
# In package.json
cat package.json | grep version

# In browser
curl https://yoursite.com/version.json

# In footer
# Just look at bottom of any page
```

### Version History
```bash
# Git tags (if you tag releases)
git tag -l

# Git log with version commits
git log --grep="version"
```

---

## CI/CD Integration

### Vercel/Netlify
The build scripts work automatically:
```yaml
# Build command in deployment settings
npm run build
```

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

---

## Troubleshooting

### Version not updating?
```bash
# Manually run version generation
node scripts/generate-version.js
```

### Git info showing "unknown"?
```bash
# Make sure you're in a git repository
git status

# Make sure you have commits
git log
```

### Version display not showing?
1. Check `/version.json` exists in public folder
2. Check browser console for errors
3. Rebuild: `npm run build`

---

## Best Practices

1. ✅ **Commit before versioning**: Always commit changes first
2. ✅ **Use semantic versioning**: Follow MAJOR.MINOR.PATCH
3. ✅ **Tag releases**: `git tag v1.0.0` for major releases
4. ✅ **Document changes**: Keep a CHANGELOG.md
5. ✅ **Test before release**: Always test after version bump

---

## Future Enhancements

### Planned Features:
- [ ] Automatic CHANGELOG generation
- [ ] Release notes in version display
- [ ] Version comparison tool
- [ ] Rollback capability
- [ ] A/B testing with versions

### Optional Additions:
- Add version to meta tags
- Add version to error reports
- Track version in analytics
- Show version in admin panel

---

## Support

For questions about versioning:
1. Check this documentation
2. Review `scripts/generate-version.js`
3. Check `package.json` scripts section
4. Contact dev team

**Current Version System Status**: ✅ Active and Working
