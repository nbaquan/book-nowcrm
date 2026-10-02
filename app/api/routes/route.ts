import { NextResponse } from 'next/server';
import { routeResults } from '@/lib/data';

export async function GET() {
  return NextResponse.json({ routes: routeResults });
}
