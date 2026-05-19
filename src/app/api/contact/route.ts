import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid payload structure received.' },
        { status: 400 }
      );
    }

    console.log(`\n=================================`);
    console.log(`[SYS ENGINE LOG]: Handshake request from ${email}`);
    console.log(`[MESSAGE PAYLOAD]: ${message}`);
    console.log(`=================================\n`);

    return NextResponse.json(
      { message: 'Handshake successful. Target endpoint registered.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal system relay failure.' },
      { status: 500 }
    );
  }
}