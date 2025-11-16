import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>
      <footer className="border-t border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Avicenna Smart World. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
