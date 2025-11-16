import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, LockKeyhole, Fingerprint } from 'lucide-react'

function EntryGate({ onEnter }) {
  const [hover, setHover] = useState(false)
  const [scanning, setScanning] = useState(false)

  const handleEnter = () => {
    setScanning(true)
    setTimeout(() => {
      onEnter()
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/20">
              <LockKeyhole className="h-5 w-5 text-brand" />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Avicenna SmartWorld</p>
              <p className="text-2xl font-semibold">ASW Africa</p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Unlock the Future</h1>
          <p className="mt-3 max-w-xl text-white/70">Touch the fingerprint sensor to enter. Experience premium, next‑gen access technology engineered for Africa.</p>

          <motion.button
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            onClick={handleEnter}
            className="mt-10 relative inline-flex items-center justify-center rounded-full px-8 py-8"
          >
            <span className="absolute inset-0 rounded-full bg-brand/20 blur-xl" />
            <span className={`relative grid place-items-center h-28 w-28 rounded-full ring-2 ${scanning ? 'ring-brand animate-pulse' : 'ring-white/20'} bg-black/60 backdrop-blur`}> 
              <Fingerprint className={`h-10 w-10 transition ${hover ? 'text-brand' : 'text-white/70'}`} />
              <span className="absolute -bottom-8 text-xs uppercase tracking-widest text-white/70">ENTER</span>
            </span>
          </motion.button>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16 text-xs text-white/50">Click to scan and unlock</motion.p>
        </motion.div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0 gradient pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <motion.h1 initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Secure the Future of Access
          </motion.h1>
          <motion.p initial={{ y: 14, opacity: 0 }} whileInView={{ y: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-5 text-lg text-white/70 max-w-2xl">
            Premium Smart Lock Solutions for Homes, Businesses & Developments Across Africa
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/products" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-black font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">
              Explore Smart Locks
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-md px-5 py-3 ring-1 ring-white/15 hover:bg-white/5 transition">
              Get a Free Consultation
            </a>
          </div>
        </div>
        <div className="lg:col-span-5" />
      </div>
    </section>
  )
}

function WhoWeAre() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Who We Are</h2>
        <p className="mt-3 text-white/70 max-w-3xl">
          Avicenna SmartWorld (ASW Africa) is a leading smart lock provider in Kenya, delivering elegant, secure, and future‑ready access solutions. We combine advanced biometrics, robust hardware, and cloud intelligence — backed by expert installation, a 5‑year warranty, and optimization for African markets.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Local presence & fast support' },
            { t: '5‑year warranty' },
            { t: 'Trusted by Nairobi developers' },
            { t: 'Military‑grade encryption' },
          ].map((i) => (
            <div key={i.t} className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-5 text-sm text-white/80">{i.t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsGrid() {
  const items = [
    { title: 'Homes', href: '/solutions/homes' },
    { title: 'Airbnbs', href: '/solutions/airbnbs' },
    { title: 'Rental Properties', href: '/solutions/rentals' },
    { title: 'Offices', href: '/solutions/offices' },
    { title: 'Gates', href: '/solutions/gates' },
    { title: 'Shops & Businesses', href: '/solutions/shops' },
  ]
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Solutions</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent" />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-medium">Smart Locks for {item.title}</h3>
                <span className="text-brand group-hover:translate-x-1 transition">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const points = [
    'Local presence and fast support',
    '5‑year warranty',
    'Trusted by developers in Nairobi',
    'Military‑grade encryption',
    'Easy installation on most doors',
    'Remote control, fingerprint unlock, PIN, RFID card, and app unlock',
  ]
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Why Choose ASW Africa</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-5">{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function InstallSupport() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Installation & Support</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3 text-white/80">
          <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-5">Professional installation</div>
          <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-5">Available 7 days a week</div>
          <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-5">Quick-response maintenance team & after‑sales assistance</div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { q: 'Seamless for our Airbnb guests. Setup was quick and reliable.', a: 'Airbnb Host – Nairobi' },
    { q: 'Perfect for our office — audit logs and multiple unlock options.', a: 'Operations Manager – Westlands' },
    { q: 'Our apartment project sold faster thanks to modern, keyless access.', a: 'Real Estate Developer – Kilimani' },
  ]
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">What Customers Say</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((t) => (
            <blockquote key={t.q} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <p className="text-white/90">“{t.q}”</p>
              <footer className="mt-3 text-sm text-white/60">{t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Upgrade Your Security Today</h2>
        <p className="mt-3 text-white/70">Request a tailored quote for your home, business, or development.</p>
        <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-black font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">
          Request a Quote
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div>
      <AnimatePresence>
        {!unlocked && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <EntryGate onEnter={() => setUnlocked(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {unlocked && (
        <>
          <Hero />
          <WhoWeAre />
          <SolutionsGrid />
          <WhyChoose />
          <InstallSupport />
          <Testimonials />
          <FinalCTA />
        </>
      )}
    </div>
  )
}
