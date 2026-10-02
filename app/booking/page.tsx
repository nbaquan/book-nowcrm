import Link from 'next/link';
import { routeResults } from '@/lib/data';

export default function BookingPage() {
  const selectedRoute = routeResults[0];

  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/search" className="mb-6 inline-block text-sm font-semibold text-brand-green">← Back to routes</Link>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Trip details</p>
            <h1 className="mt-2 text-3xl font-black text-brand-dark">{selectedRoute.from} to {selectedRoute.to}</h1>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Agency</p>
                  <p className="text-lg font-bold text-brand-dark">{selectedRoute.agency}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Departure</p>
                  <p className="font-bold text-slate-800">{selectedRoute.departure}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div><span className="block text-slate-500">Arrival</span><strong className="text-slate-800">{selectedRoute.arrival}</strong></div>
                <div><span className="block text-slate-500">Duration</span><strong className="text-slate-800">{selectedRoute.duration}</strong></div>
                <div><span className="block text-slate-500">Seat type</span><strong className="text-slate-800">VIP</strong></div>
                <div><span className="block text-slate-500">Fare</span><strong className="text-brand-green">{selectedRoute.price} FCFA</strong></div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold text-brand-dark">Seat selection</h2>
              <div className="grid grid-cols-6 gap-3">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((seat, index) => (
                  <button
                    key={seat}
                    className={`rounded-xl border px-3 py-3 text-center text-sm font-semibold ${
                      index % 3 === 0 ? 'border-slate-200 bg-slate-100 text-slate-500' : 'border-emerald-200 bg-emerald-100 text-brand-green'
                    }`}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Passenger information</p>
            <form className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" placeholder="John Doe" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Phone number</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" placeholder="+237 655 000 000" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" placeholder="hello@example.com" />
              </label>

              <div className="rounded-2xl bg-brand-soft p-4 text-sm text-slate-700">
                <div className="flex justify-between"><span>Ticket price</span><strong>{selectedRoute.price} FCFA</strong></div>
                <div className="mt-2 flex justify-between"><span>Service fee</span><strong>1,500 FCFA</strong></div>
                <div className="mt-2 flex justify-between border-t border-slate-200 pt-2 font-bold text-brand-dark"><span>Total</span><strong>{selectedRoute.price + 1500} FCFA</strong></div>
              </div>

              <Link href="/payment" className="block w-full rounded-xl bg-brand-green px-5 py-3 text-center font-semibold text-white">
                Continue to payment
              </Link>
            </form>
          </aside>
        </div>
      </div>
    </main>
  );
}
