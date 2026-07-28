import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const clean = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const validatePayload = (payload: ContactPayload) => {
  const errors: Record<string, string> = {};

  const fullName = clean(payload.fullName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const subject = clean(payload.subject);
  const message = clean(payload.message);

  if (!fullName) {
    errors.fullName = 'Full Name is required.';
  } else if (fullName.length < 3 || fullName.length > 80) {
    errors.fullName = 'Full Name must be between 3 and 80 characters.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!phone) {
    errors.phone = 'Phone is required.';
  } else if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) {
    errors.phone = 'Please provide a valid phone number.';
  }

  if (!subject) {
    errors.subject = 'Subject is required.';
  } else if (subject.length < 4 || subject.length > 120) {
    errors.subject = 'Subject must be between 4 and 120 characters.';
  }

  if (!message) {
    errors.message = 'Message is required.';
  } else if (message.length < 15 || message.length > 2500) {
    errors.message = 'Message must be between 15 and 2500 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      fullName,
      email,
      phone,
      subject,
      message,
    },
  };
};

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return NextResponse.json(
      { ok: false, message: 'Unsupported content type. JSON expected.' },
      { status: 415 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }

  const { isValid, errors, sanitized } = validatePayload(body);

  if (!isValid) {
    return NextResponse.json(
      { ok: false, message: 'Please correct the highlighted fields.', errors },
      { status: 422 }
    );
  }

  console.info('[contact-form] submission received', {
    fullName: sanitized.fullName,
    email: sanitized.email,
    phone: sanitized.phone,
    subject: sanitized.subject,
    messageLength: sanitized.message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      ok: true,
      message: 'Thank you. Your message has been securely received by the campaign office.',
    },
    { status: 200 }
  );
}
