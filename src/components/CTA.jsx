import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Ready for executive-grade security?</h2>
        <p className="mt-3 text-white/70">Let’s tailor a solution for your buildings, teams and guests. Our team will respond within one business day.</p>
        <form className="mt-8 grid gap-3 sm:grid-cols-3">
          <input className="sm:col-span-1 rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand" placeholder="Name" />
          <input className="sm:col-span-1 rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand" placeholder="Work Email" />
          <button className="sm:col-span-1 rounded-md bg-brand text-black font-semibold px-4 py-3 shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">Request a Demo</button>
        </form>
        <p className="mt-3 text-xs text-white/50">By submitting you agree to our privacy notice.</p>
      </div>
    </section>
  )
}
