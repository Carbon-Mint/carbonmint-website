import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, Db, Collection } from 'mongodb';

// Interface for the biochar programme enquiry form data
interface BiocharProgrammeEnquiry {
  fpcName: string;
  registrationNumber: string;
  state: string;
  district: string;
  block: string;
  yearOfIncorporation: string;
  promotingInstitution: string;
  totalMemberFarmers: string;
  totalLandAcres: string;
  primaryCrops: string[];
  otherCrop: string;
  contactPersonName: string;
  designation: string;
  mobileNumber: string;
  whatsappSameAsMobile: boolean;
  whatsappNumber: string;
  emailAddress: string;
  preferredContactTime: string;
  preferredLanguage: string;
  howDidYouHear: string;
  questions: string;
  consent: boolean;
  timestamp: string;
  userAgent?: string;
  ipAddress?: string;
}

// MongoDB connection
let client: MongoClient | null = null;
let db: Db | null = null;

async function getDatabase(): Promise<Db> {
  if (!client) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    client = new MongoClient(uri);
    await client.connect();
    db = client.db('carbonmint');
  }
  if (!db) {
    throw new Error('Database connection failed');
  }
  return db;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['fpcName', 'registrationNumber', 'state', 'totalMemberFarmers', 'totalLandAcres', 'contactPersonName', 'designation', 'mobileNumber', 'consent'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format if provided
    if (data.emailAddress) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.emailAddress)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Validate mobile number format (10-digit Indian mobile)
    if (!/^[0-9]{10}$/.test(data.mobileNumber)) {
      return NextResponse.json(
        { error: 'Invalid mobile number format. Please enter a 10-digit Indian mobile number.' },
        { status: 400 }
      );
    }

    // Validate WhatsApp number if different from mobile
    if (!data.whatsappSameAsMobile && data.whatsappNumber && !/^[0-9]{10}$/.test(data.whatsappNumber)) {
      return NextResponse.json(
        { error: 'Invalid WhatsApp number format. Please enter a 10-digit Indian mobile number.' },
        { status: 400 }
      );
    }

    const database = await getDatabase();
    const collection = database!.collection<BiocharProgrammeEnquiry>('carbonmint_com_biochar_programme_enquiries');

    // Store biochar programme enquiry
    const enquiry: BiocharProgrammeEnquiry = {
      fpcName: data.fpcName.trim(),
      registrationNumber: data.registrationNumber.trim(),
      state: data.state.trim(),
      district: data.district.trim(),
      block: data.block.trim(),
      yearOfIncorporation: data.yearOfIncorporation.trim(),
      promotingInstitution: data.promotingInstitution.trim(),
      totalMemberFarmers: data.totalMemberFarmers.trim(),
      totalLandAcres: data.totalLandAcres.trim(),
      primaryCrops: data.primaryCrops || [],
      otherCrop: data.otherCrop.trim(),
      contactPersonName: data.contactPersonName.trim(),
      designation: data.designation.trim(),
      mobileNumber: data.mobileNumber.trim(),
      whatsappSameAsMobile: data.whatsappSameAsMobile,
      whatsappNumber: data.whatsappSameAsMobile ? data.mobileNumber.trim() : data.whatsappNumber.trim(),
      emailAddress: data.emailAddress.trim().toLowerCase(),
      preferredContactTime: data.preferredContactTime.trim(),
      preferredLanguage: data.preferredLanguage.trim(),
      howDidYouHear: data.howDidYouHear.trim(),
      questions: data.questions.trim(),
      consent: data.consent,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 undefined,
    };

    const result = await collection.insertOne(enquiry);

    return NextResponse.json({ 
      success: true, 
      message: 'Biochar programme enquiry submitted successfully',
      enquiryId: result.insertedId 
    }, { status: 200 });

  } catch (error) {
    console.error('Biochar programme enquiry submission error:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const database = await getDatabase();
    const collection = database!.collection<BiocharProgrammeEnquiry>('carbonmint_com_biochar_programme_enquiries');

    // Fetch recent enquiries (last 50, sorted by timestamp descending)
    const enquiries = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(50)
      .toArray();

    // Remove sensitive information for public view
    const sanitizedEnquiries = enquiries.map(enquiry => ({
      ...enquiry,
      mobileNumber: enquiry.mobileNumber.substring(0, 3) + 'XXXX' + enquiry.mobileNumber.substring(7),
      whatsappNumber: enquiry.whatsappNumber ? enquiry.whatsappNumber.substring(0, 3) + 'XXXX' + enquiry.whatsappNumber.substring(7) : undefined,
      emailAddress: enquiry.emailAddress ? enquiry.emailAddress.substring(0, 2) + 'XXXX@XXXX.com' : undefined,
    }));

    return NextResponse.json({ 
      success: true, 
      enquiries: sanitizedEnquiries,
      total: await collection.countDocuments()
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching biochar programme enquiries:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error' 
    }, { status: 500 });
  }
}
