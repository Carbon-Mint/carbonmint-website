import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

interface BotVisit {
  bot: string;
  path: string;
  timestamp: string;
  userAgent: string;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('carbonmint');
    const collection = db.collection<BotVisit>('carbonmint_com_bot_visits');

    // Get all bot visits
    const allVisits = await collection.find({}).toArray();

    // Calculate analytics
    const summary = {
      totalVisits: allVisits.length,
      uniqueBots: [...new Set(allVisits.map(v => v.bot))],
      recentVisits: allVisits
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 20),
      visitsByBot: allVisits.reduce((acc, visit) => {
        acc[visit.bot] = (acc[visit.bot] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      visitsByPath: allVisits.reduce((acc, visit) => {
        acc[visit.path] = (acc[visit.path] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      firstVisit: allVisits.length > 0 
        ? allVisits.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())[0].timestamp
        : null,
      lastVisit: allVisits.length > 0
        ? allVisits.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0].timestamp
        : null,
    };

    return NextResponse.json(summary);
  } catch (error) {
    console.error('MongoDB GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const client = await clientPromise;
    const db = client.db('carbonmint');
    const collection = db.collection<BotVisit>('carbonmint_com_bot_visits');

    // Store bot visit
    const botVisit: BotVisit = {
      bot: data.bot,
      path: data.path,
      timestamp: data.timestamp || new Date().toISOString(),
      userAgent: data.userAgent,
    };

    await collection.insertOne(botVisit);

    // Get total count
    const totalVisits = await collection.countDocuments();

    return NextResponse.json({ 
      success: true, 
      totalVisits,
      visit: botVisit 
    });
  } catch (error) {
    console.error('MongoDB POST error:', error);
    return NextResponse.json(
      { error: 'Failed to store bot visit' },
      { status: 500 }
    );
  }
}
