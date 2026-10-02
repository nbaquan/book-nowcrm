import Link from 'next/link';

export default function DashboardPage() {
  const bookings = [
    { id: 'BN-2024-00547', route: 'Yaoundé → Douala', date: '15 Oct 2024', status: 'Confirmed', amount: '19,500 FCFA' },
    { id: 'BN-2024-00512', route: 'Douala → Bafoussam', date: '10 Oct 2024', status: 'Completed', amount: '12,000 FCFA' }
  ];

  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black text-brand-dark">Welcome back, John</h1>
          </div>
          <Link href="/" className="rounded-full bg-brand-green px-4 py-2 font-semibold text-white">Book new trip</Link>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {[
            { label: 'Reward points', value: '2,350 pts' },
            { label: 'This month', value: '3 bookings' },
            { label: 'Next discount', value: '5% offer' }
          ].map((card) => (
            <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm text-slate-500">{card.label}</p>
              <p className="mt-3 text-3xl font-black text-brand-dark">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-brand-dark">Recent bookings</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3">Reference</th>
                  <th className="px-4 py-3">Route</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{booking.id}</td>
                    <td className="px-4 py-3">{booking.route}</td>
                    <td className="px-4 py-3">{booking.date}</td>
                    <td className="px-4 py-3"><span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-brand-green">{booking.status}</span></td>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
