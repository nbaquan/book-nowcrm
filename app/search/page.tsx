import Link from 'next/link';
import { routeResults } from '@/lib/data';

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Search</p>
            <h1 className="mt-2 text-3xl font-black text-brand-dark">Available bus routes</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            Back home
          </Link>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="grid gap-4 md:grid-cols-5">
            {['From', 'To', 'Date', 'Passengers', 'Action'].map((label, index) => (
              <div key={label} className={index === 4 ? 'md:col-span-1' : 'md:col-span-1'}>
                {label === 'Action' ? (
                  <button className="w-full rounded-xl bg-brand-green px-5 py-3 font-semibold text-white">Search</button>
                ) : (
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-600">{label}</span>
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none"
                      placeholder={label === 'Date' ? 'Select date' : label === 'Passengers' ? '1' : 'City'}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {routeResults.map((route) => (
            <article key={route.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{route.agency}</p>
                  <h2 className="mt-1 text-xl font-bold text-brand-dark">{route.from} → {route.to}</h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-brand-green">{route.seats} seats left</span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Departure</span>
                  <strong className="text-slate-800">{route.departure}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Arrival</span>
                  <strong className="text-slate-800">{route.arrival}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <strong className="text-slate-800">{route.duration}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Price</span>
                  <strong className="text-2xl font-black text-brand-green">{route.price} FCFA</strong>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link href={`/booking?route=${route.id}`} className="flex-1 rounded-xl bg-brand-green px-4 py-3 text-center font-semibold text-white">
                  Book now
                </Link>
                <Link href={`/booking?route=${route.id}`} className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-700">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
