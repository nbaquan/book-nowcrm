import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: 'Booking created successfully',
    booking: {
      id: 'BN-2024-00547',
      route: body.route,
      passengerName: body.passengerName,
      amount: 19500,
      status: 'confirmed'
    }
  });
}
