import Link from 'next/link';

const cities = ['Yaoundé', 'Douala', 'Bafoussam', 'Garoua', 'Bamenda'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-cream text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-lg font-bold text-white">B</div>
            <div>
              <p className="text-xl font-extrabold tracking-tight text-brand-dark">book.nowCRM</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="#services">Services</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="/search">Book</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full px-4 py-2 text-sm font-semibold text-brand-green">Sign in</button>
            <Link href="/search" className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-soft">Book now</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              Trusted by local travelers
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-brand-dark sm:text-5xl">
              Book bus tickets in Cameroon with confidence.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">
              Compare routes, book with your favorite agency, and pay securely using mobile money or card.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/search" className="rounded-full bg-brand-green px-6 py-3 text-center font-semibold text-white shadow-soft">Search tickets</Link>
              <Link href="#how-it-works" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center font-semibold text-slate-700">How it works</Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                { label: 'Routes', value: '120+' },
                { label: 'Agencies', value: '35+' },
                { label: 'Traveler rating', value: '4.8/5' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                  <p className="text-2xl font-extrabold text-brand-dark">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft">
            <div className="rounded-[24px] bg-slate-50 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Quick Booking</p>
                  <h2 className="text-2xl font-bold text-brand-dark">Find your trip</h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-brand-green">Live availability</span>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">From</span>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none ring-0">
                      {cities.map((city) => (
                        <option key={city}>{city}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">To</span>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none ring-0">
                      {cities.map((city) => (
                        <option key={city}>{city}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Departure date</span>
                    <input type="date" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none ring-0" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Passengers</span>
                    <input type="number" defaultValue={1} min={1} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none ring-0" />
                  </label>
                </div>

                <Link href="/search" className="mt-2 flex w-full justify-center rounded-xl bg-brand-green px-5 py-3 font-semibold text-white">
                  Search routes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black text-brand-dark">A smarter way to travel.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Multiple agencies, one platform',
              text: 'Compare bus schedules and fares from different operators without leaving the app.'
            },
            {
              title: 'Fast and secure payments',
              text: 'Pay using MTN Mobile Money, Orange Money, Airtel Money, or card with secure checkout.'
            },
            {
              title: 'Travel rewards',
              text: 'Earn travel points on each booking and redeem them for future discounts on select offers.'
            }
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-brand-green">✓</div>
              <h3 className="text-xl font-bold text-brand-dark">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">How it works</p>
            <h2 className="mt-3 text-3xl font-black">Simple, fast, and transparent.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Search by route and departure date',
              'Select the best bus and confirm your seat',
              'Pay and receive your booking confirmation'
            ].map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green font-bold text-white">0{index + 1}</div>
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
