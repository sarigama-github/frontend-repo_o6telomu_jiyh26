import React from 'react'

export default function About() {
  return (
    <div className="pt-28 pb-16 mx-auto max-w-7xl px-6">
      <h1 className="text-3xl sm:text-4xl font-semibold">About ASW Africa</h1>
      <p className="mt-3 text-white/70 max-w-3xl">Founded with a vision to secure Africa's homes and enterprises, Avicenna SmartWorld blends beautiful industrial design with robust cryptography. Our mission is to deliver trustworthy, future‑ready access for every door.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6"><h3 className="font-medium">Vision</h3><p className="mt-1 text-white/70">A continent where access is simple, safe and smart.</p></div>
        <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6"><h3 className="font-medium">Mission</h3><p className="mt-1 text-white/70">Deliver premium smart locks and deploy expert installation teams across Africa.</p></div>
        <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6"><h3 className="font-medium">Values</h3><p className="mt-1 text-white/70">Trust, innovation, reliability, and exceptional support.</p></div>
      </div>
      <div className="mt-10 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
        <h2 className="text-2xl font-semibold">Warranty & Support</h2>
        <p className="mt-2 text-white/70">Every installation is backed by a 5‑year warranty and 7‑day support with rapid on‑site response.</p>
      </div>
    </div>
  )
}
