import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', property: '', units: '' })
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    alert('Thanks! We\'ll get back to you shortly.')
  }

  return (
    <div className="pt-28 pb-16 mx-auto max-w-5xl px-6">
      <h1 className="text-3xl sm:text-4xl font-semibold">Contact Us</h1>
      <p className="mt-3 text-white/70">Tell us about your project. We respond within one business day.</p>
      <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
        <input name="name" value={form.name} onChange={handle} placeholder="Name" className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand" />
        <input name="phone" value={form.phone} onChange={handle} placeholder="Phone" className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand" />
        <input name="email" value={form.email} onChange={handle} placeholder="Email" className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand sm:col-span-2" />
        <input name="property" value={form.property} onChange={handle} placeholder="Property Type (Home, Airbnb, Office, Hotel, etc.)" className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand sm:col-span-2" />
        <input name="units" value={form.units} onChange={handle} placeholder="Number of Units" className="rounded-md bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-brand sm:col-span-2" />
        <button className="rounded-md bg-brand text-black font-semibold px-4 py-3 shadow-lg shadow-brand/20 hover:shadow-brand/40 transition sm:col-span-2">Send</button>
      </form>
    </div>
  )
}
