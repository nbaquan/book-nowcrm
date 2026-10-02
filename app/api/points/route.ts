import { NextResponse } from 'next/server';
import { calculateRewardPoints } from '@/lib/points';

export async function GET() {
  return NextResponse.json({
    pointsBalance: 2350,
    totalEarned: calculateRewardPoints(115000),
    rewardTier: 'Silver'
  });
}
