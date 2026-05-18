import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const path = request.nextUrl.pathname;
  
  // AI Bot detection
  const aiBots = [
    { name: 'ChatGPT', pattern: 'GPTBot' },
    { name: 'Claude', pattern: 'Claude-Web' },
    { name: 'Anthropic', pattern: 'anthropic-ai' },
    { name: 'Google Gemini', pattern: 'Google-Extended' },
    { name: 'Perplexity', pattern: 'PerplexityBot' },
    { name: 'Common Crawl', pattern: 'CCBot' },
    { name: 'Cohere', pattern: 'cohere-ai' },
    { name: 'ByteDance', pattern: 'Bytespider' },
    { name: 'Apple Intelligence', pattern: 'Applebot-Extended' },
    { name: 'Meta AI', pattern: 'meta-externalagent' },
    { name: 'Diffbot', pattern: 'Diffbot' },
  ];
  
  const detectedBot = aiBots.find(bot => 
    userAgent.toLowerCase().includes(bot.pattern.toLowerCase())
  );
  
  if (detectedBot) {
    // Log AI bot visit (visible in Vercel logs)
    console.log('🤖 AI Bot Visit:', {
      bot: detectedBot.name,
      userAgent: userAgent,
      path: path,
      timestamp: new Date().toISOString(),
      referer: request.headers.get('referer') || 'direct',
    });
    
    // Add custom header to identify bot requests
    const response = NextResponse.next();
    response.headers.set('X-Bot-Detected', detectedBot.name);
    return response;
  }
  
  return NextResponse.next();
}

// Apply middleware to all routes except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
