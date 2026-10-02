import Link from 'next/link';

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/booking" className="mb-6 inline-block text-sm font-semibold text-brand-green">← Back to booking</Link>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Payment</p>
            <h1 className="mt-2 text-3xl font-black text-brand-dark">Complete your payment</h1>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-medium text-slate-500">Choose a payment method</p>
                <div className="space-y-2">
                  {['MTN Mobile Money', 'Orange Money', 'Airtel Money', 'Card payment'].map((method) => (
                    <label key={method} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
                      <input type="radio" name="payment" defaultChecked={method === 'MTN Mobile Money'} />
                      <span className="font-medium text-slate-700">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Phone number</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" placeholder="+237 655 000 000" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Reference / OTP</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" placeholder="Enter OTP or reference" />
              </label>
            </div>
          </section>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Order summary</p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Trip</span><strong className="text-slate-800">Yaoundé → Douala</strong></div>
              <div className="flex justify-between"><span>Departure</span><strong className="text-slate-800">15 Oct, 08:30</strong></div>
              <div className="flex justify-between"><span>Seat</span><strong className="text-slate-800">Seat 7</strong></div>
              <div className="flex justify-between"><span>Ticket</span><strong className="text-slate-800">18,000 FCFA</strong></div>
              <div className="flex justify-between"><span>Fee</span><strong className="text-slate-800">1,500 FCFA</strong></div>
              <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-base font-bold text-brand-dark"><span>Total</span><strong>19,500 FCFA</strong></div>
            </div>

            <Link href="/confirmation" className="mt-6 block w-full rounded-xl bg-brand-green px-5 py-3 text-center font-semibold text-white">
              Pay and confirm
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
