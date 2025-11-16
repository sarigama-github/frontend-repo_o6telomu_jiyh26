import React, { useState } from 'react'

const demoProducts = [
  { id: 1, name: 'ASW Pro X', price: 'KES 45,000', img: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1200&auto=format&fit=crop', feats: ['Fingerprint', 'PIN', 'Card', 'App', 'Remote'] },
  { id: 2, name: 'ASW Edge S', price: 'KES 38,000', img: 'https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1200&auto=format&fit=crop', feats: ['Fingerprint', 'PIN', 'Card', 'App'] },
  { id: 3, name: 'ASW Hotel Key', price: 'KES 32,000', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', feats: ['Card', 'PIN', 'NFC', 'App'] },
  { id: 4, name: 'ASW Gate Max', price: 'KES 55,000', img: 'https://images.unsplash.com/photo-1541123356211-9e5f6e1f9720?q=80&w=1200&auto=format&fit=crop', feats: ['Remote', 'RFID', 'App'] },
]

export default function ProductsPage() {
  const [inquiry, setInquiry] = useState([])
  const toggle = (p) => {
    setInquiry((prev) => prev.includes(p.id) ? prev.filter(id => id !== p.id) : [...prev, p.id])
  }

  return (
    <div className="relative pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold">Smart Lock Models</h1>
        <p className="mt-3 text-white/70">Explore our curated lineup. Add items to your inquiry and request pricing.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProducts.map((p) => (
            <div key={p.id} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 overflow-hidden">
              <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{p.name}</h3>
                  <span className="text-brand font-semibold">{p.price}</span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                  {p.feats.map(f => <li key={f} className="rounded-full bg-white/[0.06] px-2.5 py-1">{f}</li>)}
                </ul>
                <button onClick={() => toggle(p)} className={`mt-5 w-full rounded-md px-4 py-2 font-medium transition ${inquiry.includes(p.id) ? 'bg-white/10 ring-1 ring-white/20' : 'bg-brand text-black shadow-lg shadow-brand/20 hover:shadow-brand/40'}`}>
                  {inquiry.includes(p.id) ? 'Added to Inquiry' : 'Add to Inquiry'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
          <h2 className="text-xl font-semibold">Your Inquiry</h2>
          {inquiry.length === 0 ? (
            <p className="mt-2 text-white/70">No items yet.</p>
          ) : (
            <p className="mt-2 text-white/70">{inquiry.length} item(s) selected. <a href="/contact" className="text-brand underline">Request a quote</a>.</p>
          )}
        </div>
      </div>
    </div>
  )
}
