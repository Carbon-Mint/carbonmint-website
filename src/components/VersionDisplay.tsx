'use client';

import { useState, useEffect } from 'react';

interface VersionInfo {
  version: string;
  buildDate: string;
  gitCommit: string;
  gitBranch: string;
  environment: string;
}

export default function VersionDisplay() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Fetch version info
    fetch('/version.json')
      .then(res => res.json())
      .then(data => setVersionInfo(data))
      .catch(() => {
        // Fallback if version.json doesn't exist
        setVersionInfo({
          version: '1.0.0',
          buildDate: new Date().toISOString(),
          gitCommit: 'unknown',
          gitBranch: 'main',
          environment: 'development',
        });
      });
  }, []);

  if (!versionInfo) return null;

  return (
    <div className="text-center text-gray-500 text-xs">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="hover:text-green-400 transition-colors cursor-pointer"
        title="Click for build details"
      >
        v{versionInfo.version}
      </button>
      
      {showDetails && (
        <div className="mt-2 p-3 bg-gray-800 rounded-lg text-left inline-block">
          <div className="space-y-1">
            <div><span className="text-gray-400">Version:</span> {versionInfo.version}</div>
            <div><span className="text-gray-400">Commit:</span> {versionInfo.gitCommit}</div>
            <div><span className="text-gray-400">Branch:</span> {versionInfo.gitBranch}</div>
            <div><span className="text-gray-400">Built:</span> {new Date(versionInfo.buildDate).toLocaleString()}</div>
            <div><span className="text-gray-400">Env:</span> {versionInfo.environment}</div>
          </div>
        </div>
      )}
    </div>
  );
}
