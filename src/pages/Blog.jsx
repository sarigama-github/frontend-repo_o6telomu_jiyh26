import React from 'react'

export default function Blog() {
  const posts = [
    { t: 'Smart Lock Trends in Africa 2025', s: 'How keyless access is shaping modern real estate.' },
    { t: 'Nairobi Security Innovations', s: 'From biometrics to cloud control: practical gains.' },
    { t: 'Choosing the Right Smart Lock', s: 'Door compatibility, power, and feature checklists.' },
  ]
  return (
    <div className="pt-28 pb-16 mx-auto max-w-7xl px-6">
      <h1 className="text-3xl sm:text-4xl font-semibold">Insights</h1>
      <p className="mt-3 text-white/70">Expert perspectives on access control, property tech, and security in Africa.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {posts.map(p => (
          <article key={p.t} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
            <div className="h-36 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent" />
            <h3 className="mt-4 font-medium">{p.t}</h3>
            <p className="mt-1 text-sm text-white/70">{p.s}</p>
            <a href="#" className="mt-4 inline-block text-brand">Read more →</a>
          </article>
        ))}
      </div>
    </div>
  )
}
