import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    agencies: [
      { id: 1, name: 'Congo Express', routes: 18 },
      { id: 2, name: 'Bamenda Link', routes: 12 },
      { id: 3, name: 'North Star Travel', routes: 9 }
    ]
  });
}
