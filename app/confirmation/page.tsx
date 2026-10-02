import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[32px] border border-emerald-200 bg-white p-8 text-center shadow-soft">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-brand-green">✓</div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Payment confirmed</p>
          <h1 className="mt-3 text-3xl font-black text-brand-dark">Your ticket is booked</h1>
          <p className="mt-3 text-slate-600">Thank you for choosing book.nowCRM. Your confirmation has been sent to your phone and email.</p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Booking reference</p>
                <p className="text-xl font-bold text-brand-dark">BN-2024-00547</p>
              </div>
              <div className="rounded-xl bg-brand-dark px-3 py-2 text-sm font-bold text-white">QR Code</div>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div><span className="block text-sm text-slate-500">Route</span><strong className="text-slate-800">Yaoundé → Douala</strong></div>
              <div><span className="block text-sm text-slate-500">Seat</span><strong className="text-slate-800">Seat 7</strong></div>
              <div><span className="block text-sm text-slate-500">Departure</span><strong className="text-slate-800">15 Oct, 08:30</strong></div>
              <div><span className="block text-sm text-slate-500">Agency</span><strong className="text-slate-800">Congo Express</strong></div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/dashboard" className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white">View dashboard</Link>
            <Link href="/" className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700">Book another trip</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
