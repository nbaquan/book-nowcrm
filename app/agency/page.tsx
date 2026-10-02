import Link from 'next/link';

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Agency</p>
            <h1 className="mt-2 text-3xl font-black text-brand-dark">Congo Express Agency</h1>
          </div>
          <Link href="/admin" className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700">Admin panel</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: 'Booked today', value: '164' },
            { label: 'Pending payouts', value: '1.8M FCFA' },
            { label: 'Occupancy rate', value: '74%' }
          ].map((card) => (
            <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm text-slate-500">{card.label}</p>
              <p className="mt-2 text-3xl font-black text-brand-dark">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
