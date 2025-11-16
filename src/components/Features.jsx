import React from 'react'
import { ShieldCheck, SmartphoneNfc, KeyRound, Fingerprint, Building2, ServerCog } from 'lucide-react'

const features = [
  {
    icon: Fingerprint,
    title: 'Biometric + Passkey',
    desc: 'Native passkeys with FIDO2, FaceID/TouchID and multi-factor enforcement.'
  },
  {
    icon: SmartphoneNfc,
    title: 'Mobile + NFC',
    desc: 'Tap-to-unlock and offline credentials with dynamic keys and anti-cloning.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Trust',
    desc: 'Continuous verification, device posture checks and policy-based access.'
  },
  {
    icon: ServerCog,
    title: 'Cloud Or Edge',
    desc: 'Resilient edge controllers with instant cloud sync for enterprise scale.'
  },
  {
    icon: KeyRound,
    title: 'Executive Controls',
    desc: 'Just-in-time access, schedules, visitor passes and emergency overrides.'
  },
  {
    icon: Building2,
    title: 'Industry Ready',
    desc: 'Healthcare, fintech, data centers and critical infrastructure.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 gradient pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Security without friction</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A platform that blends beautiful industrial design with rigorous cryptography and policy automation.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
              <f.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
