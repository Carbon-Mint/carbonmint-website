'use client';

import { useEffect } from 'react';

export default function BotTracker() {
  useEffect(() => {
    // Client-side bot detection (for bots that execute JavaScript)
    const userAgent = navigator.userAgent;
    
    const aiBotPatterns = [
      'GPTBot', 'Claude-Web', 'anthropic-ai', 'Google-Extended',
      'PerplexityBot', 'CCBot', 'cohere-ai', 'Bytespider',
      'Applebot-Extended', 'meta-externalagent', 'Diffbot'
    ];
    
    const detectedBot = aiBotPatterns.find(pattern =>
      userAgent.toLowerCase().includes(pattern.toLowerCase())
    );
    
    if (detectedBot) {
      // Send bot visit to analytics endpoint
      fetch('/api/bot-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bot: detectedBot,
          path: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: userAgent,
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is unavailable
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
