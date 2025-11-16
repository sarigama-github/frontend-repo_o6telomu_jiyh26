import React from 'react'
import { Menu, Phone, LockKeyhole } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-brand/10 ring-1 ring-brand/30">
            <LockKeyhole className="h-5 w-5 text-brand" />
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-widest text-white/60">Avicenna SmartWorld</p>
            <p className="font-semibold">ASW Africa</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="/solutions" className="hover:text-white">Solutions</a>
          <a href="/products" className="hover:text-white">Products</a>
          <a href="/developers" className="hover:text-white">Developers</a>
          <a href="/blog" className="hover:text-white">Insights</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-black font-medium shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">
            <Phone className="h-4 w-4" />
            Talk to Sales
          </a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
