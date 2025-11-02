import React from 'react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Get started with core memory and chat.',
    features: [
      'Basic AI memory',
      'Self-conversation mode',
      'Upload notes & chats',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$19/mo',
    tagline: 'Advanced self-modeling and offline cloning.',
    features: [
      'Deep personality engine',
      'Offline cloning mode',
      'Growth graph insights',
      'Mind duplication (split meshes)'
    ],
    cta: 'Go Premium',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Digital employee clones for teams & creators.',
    features: [
      'Admin & roles',
      'Audit & privacy controls',
      'Priority support',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Simple pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that grows with your digital self.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${tier.highlight ? 'border-violet-400/50 bg-white/10' : 'border-white/10 bg-white/5'}`}
            >
              {tier.highlight && (
                <div className="pointer-events-none absolute -inset-1 -z-0 rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl" />
              )}
              <div className="relative z-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <div className="text-2xl font-bold">{tier.price}</div>
                </div>
                <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className={`w-full rounded-full px-5 py-3 text-sm font-medium transition-colors ${tier.highlight ? 'bg-white text-black hover:bg-neutral-200' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}>
                    {tier.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
