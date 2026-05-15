#!/usr/bin/env node

/**
 * Generate version file before build
 * This creates a version.json file with build metadata
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Read package.json version
const packageJson = require('../package.json');
const version = packageJson.version;

// Get git info
let gitCommit = 'unknown';
let gitBranch = 'unknown';
let gitDate = new Date().toISOString();

try {
  gitCommit = execSync('git rev-parse --short HEAD').toString().trim();
  gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  gitDate = execSync('git log -1 --format=%cI').toString().trim();
} catch (error) {
  console.warn('Warning: Could not get git information');
}

// Build metadata
const versionInfo = {
  version,
  buildDate: new Date().toISOString(),
  gitCommit,
  gitBranch,
  gitDate,
  buildNumber: process.env.BUILD_NUMBER || 'local',
  environment: process.env.NODE_ENV || 'development',
};

// Write to public folder
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(
  path.join(publicDir, 'version.json'),
  JSON.stringify(versionInfo, null, 2)
);

// Write to src for import
const srcDir = path.join(__dirname, '../src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

fs.writeFileSync(
  path.join(srcDir, 'version.ts'),
  `// Auto-generated file - do not edit manually
export const VERSION_INFO = ${JSON.stringify(versionInfo, null, 2)} as const;

export const getVersion = () => VERSION_INFO.version;
export const getBuildDate = () => VERSION_INFO.buildDate;
export const getGitCommit = () => VERSION_INFO.gitCommit;
export const getFullVersion = () => \`v\${VERSION_INFO.version} (\${VERSION_INFO.gitCommit})\`;
`
);

console.log(`✅ Version ${version} generated (commit: ${gitCommit})`);
