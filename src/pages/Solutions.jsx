import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const pages = [
  { slug: 'homes', title: 'Homes', blurb: 'Keyless convenience and superior security for your family.' },
  { slug: 'airbnbs', title: 'Airbnbs', blurb: 'Hassle‑free guest access with time‑bound PINs and mobile keys.' },
  { slug: 'rentals', title: 'Rental Properties', blurb: 'Simplify tenant turnover and access control at scale.' },
  { slug: 'offices', title: 'Offices', blurb: 'Enterprise‑grade security with audit logs and role‑based access.' },
  { slug: 'gates', title: 'Gates', blurb: 'Secure perimeter access with remote control and RFID.' },
  { slug: 'shops', title: 'Shops & Businesses', blurb: 'Smart access for retail and SMEs with flexible permissions.' },
]

function SolutionsIndex() {
  return (
    <div className="pt-28 pb-16 mx-auto max-w-7xl px-6">
      <h1 className="text-3xl sm:text-4xl font-semibold">Solutions</h1>
      <p className="mt-3 text-white/70">Find the right setup for your space.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map(p => (
          <Link key={p.slug} to={p.slug} className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
            <div className="h-36 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent" />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-medium">{p.title}</h3>
              <span className="text-brand group-hover:translate-x-1 transition">→</span>
            </div>
            <p className="mt-1 text-sm text-white/70">{p.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function SolutionsDetail({ title, blurb }) {
  const recs = ['ASW Pro X', 'ASW Edge S', 'ASW Hotel Key']
  return (
    <div className="pt-28 pb-16 mx-auto max-w-7xl px-6">
      <h1 className="text-3xl sm:text-4xl font-semibold">Smart Locks for {title}</h1>
      <p className="mt-3 text-white/70 max-w-3xl">{blurb}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {recs.map(r => (
          <div key={r} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
            <div className="h-36 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent" />
            <h3 className="mt-4 font-medium">{r}</h3>
            <p className="mt-1 text-sm text-white/70">Fingerprint, PIN, Card, App, Remote</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-black font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">Get Pricing</a>
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <Routes>
      <Route index element={<SolutionsIndex />} />
      {pages.map(p => (
        <Route key={p.slug} path={p.slug} element={<SolutionsDetail title={p.title} blurb={p.blurb} />} />
      ))}
    </Routes>
  )
}
