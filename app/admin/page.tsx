export default function AdminPage() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-black text-brand-dark">Admin dashboard</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            'Users', 'Agencies', 'Transactions', 'Rewards'
          ].map((label) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-black text-brand-dark">{label === 'Users' ? '8,432' : label === 'Agencies' ? '35' : label === 'Transactions' ? '2,180' : '14,500'}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
