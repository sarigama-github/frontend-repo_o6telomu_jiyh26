import React from 'react'

export default function Developers() {
  const tiers = [
    { range: '50–100 units', hotel: '$$$', apt: '$$$' },
    { range: '100–150 units', hotel: '$$$', apt: '$$$' },
    { range: '150+ units', hotel: '$$$', apt: '$$$' },
  ]

  return (
    <div className="relative">
      <section className="relative pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl sm:text-4xl font-semibold">Developer, Hotel & Apartment Solutions</h1>
          <p className="mt-3 text-white/70 max-w-3xl">Elevate your projects with modern, keyless access. Faster occupancy, improved security, and a premium resident experience.</p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
            <h2 className="text-2xl font-semibold">Developer Solutions Overview</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Competitive edge with modern amenities</li>
              <li>Centralized access management for residents and staff</li>
              <li>Reduced key management and lock replacement costs</li>
              <li>Future-proof infrastructure with cloud and edge control</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
            <h2 className="text-2xl font-semibold">Why Developers Trust ASW Africa</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Fast installation teams</li>
              <li>Long warranty</li>
              <li>Bulk discounts</li>
              <li>Unified access management systems</li>
              <li>Free on-site assessment for large projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Hotel Smart Lock Solutions</h2>
            <p className="mt-2 text-white/70">Efficiency, access logs, staff cards, guest PINs, NFC/RFID and mobile access.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.range} className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4">
                  <p className="text-sm text-white/60">{t.range}</p>
                  <p className="mt-1 text-2xl font-semibold">{t.hotel}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60">Installation support for large projects included.</p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Apartment Developers</h2>
            <p className="mt-2 text-white/70">Ideal for high‑rise buildings, rentals, and serviced apartments. Supports centralized control and tenant turnover.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.range} className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4">
                  <p className="text-sm text-white/60">{t.range}</p>
                  <p className="mt-1 text-2xl font-semibold">{t.apt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Book a Free On‑Site Assessment</h2>
          <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-black font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">Request Consultation</a>
        </div>
      </section>
    </div>
  )
}
