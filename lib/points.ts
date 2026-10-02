export function calculateRewardPoints(amount: number, multiplier = 1) {
  return Math.round(amount * 0.02 * multiplier);
}

export function formatPoints(points: number) {
  return `${points.toLocaleString()} pts`;
}
