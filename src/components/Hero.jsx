import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 gradient pointer-events-none" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Avicenna Smart World
            <span className="block text-brand">Enterprise Smart Locks</span>
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-lg text-white/70 max-w-xl"
          >
            Executive-grade access control engineered for fintech, healthcare and high-security facilities. Biometric, mobile and passkey authentication with zero-trust architecture.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-black font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 transition">
              Get a Demo
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2 rounded-md px-5 py-3 ring-1 ring-white/15 hover:bg-white/5 transition">
              Explore Solutions
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/60">
            <Stat kpi="99.99%" label="Uptime SLA" />
            <Stat kpi="AES-256" label="End-to-end Encryption" />
            <Stat kpi="FIPS" label="Compliance Ready" />
            <Stat kpi="ISO 27001" label="Certified" />
          </div>
        </div>
        <div className="lg:col-span-6" />
      </div>
    </section>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-4">
      <p className="text-brand text-base font-semibold">{kpi}</p>
      <p className="mt-1 text-white/60">{label}</p>
    </div>
  )
}
