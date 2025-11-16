import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Developers from './pages/Developers'
import Products from './pages/ProductsPage'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions/*" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <footer className="border-t border-white/10 mt-10">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Avicenna SmartWorld (ASW Africa). All rights reserved.</p>
            <nav className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Terms</a>
            </nav>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
