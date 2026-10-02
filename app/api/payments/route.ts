import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: 'Payment initiated',
    provider: body.provider,
    reference: 'PAY-00123',
    status: 'pending'
  });
}
