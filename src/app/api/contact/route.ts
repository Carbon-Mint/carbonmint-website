import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
  userAgent?: string;
  ipAddress?: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('carbonmint');
    const collection = db.collection<ContactSubmission>('carbonmint_com_contact_submissions');

    // Store contact submission
    const submission: ContactSubmission = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      message: data.message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 undefined,
    };

    const result = await collection.insertOne(submission);

    // Log to console for Vercel logs
    console.log('📧 Contact Form Submission:', {
      id: result.insertedId,
      name: submission.name,
      email: submission.email,
      timestamp: submission.timestamp,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      submissionId: result.insertedId,
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve submissions (admin only - add authentication in production)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    
    const client = await clientPromise;
    const db = client.db('carbonmint');
    const collection = db.collection<ContactSubmission>('carbonmint_com_contact_submissions');

    const submissions = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    const summary = {
      totalSubmissions: await collection.countDocuments(),
      recentSubmissions: submissions,
      submissionsByDay: await collection.aggregate([
        {
          $group: {
            _id: {
              $dateToString: {
                format: '%Y-%m-%d',
                date: { $dateFromString: { dateString: '$timestamp' } }
              }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: -1 } },
        { $limit: 30 }
      ]).toArray(),
    };

    return NextResponse.json(summary);
  } catch (error) {
    console.error('Failed to fetch contact submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
