import React from 'react'
import { DoorClosed, Cpu, Wifi, Shield } from 'lucide-react'

const products = [
  {
    name: 'ASW One',
    desc: 'Premium smart door lock with biometric + passkey and NFC mobile unlocking.',
    specs: ['Grade 1 hardware', 'FIDO2 passkeys', 'BLE + NFC', 'IP65'],
  },
  {
    name: 'ASW Core',
    desc: 'Rugged controller for maglocks and strikes with PoE and offline access.',
    specs: ['PoE+', 'Offline cache', 'AES-256', 'Edge rules'],
  },
  {
    name: 'ASW Cloud',
    desc: 'Command console to manage sites, users, policies and audit trails.',
    specs: ['RBAC', 'SAML/SCIM', 'SIEM export', 'Realtime events'],
  }
]

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">The Avicenna suite</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Hardware, edge, and cloud software engineered to work in concert.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{p.name}</h3>
                <Shield className="h-5 w-5 text-brand" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/70 list-disc list-inside">
                {p.specs.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
