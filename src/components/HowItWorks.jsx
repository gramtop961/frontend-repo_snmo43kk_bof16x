import React from 'react';

const steps = [
  {
    title: 'Input Stream',
    desc: 'Upload journal entries, chats, notes, and documents. MindMesh learns your style.',
  },
  {
    title: 'Neural Persona',
    desc: 'We weave a mesh of personality traits, reasoning patterns, and creative preferences.',
  },
  {
    title: 'Conversation Mode',
    desc: 'Chat with your digital self — debate, plan, and brainstorm together.',
  },
  {
    title: 'Evolution Hub',
    desc: 'Your mesh improves as you interact. Split versions for work, study, or play.',
  },
  {
    title: 'Memory Bridge',
    desc: 'Sync with devices to recall tasks, summarize days, and predict needs.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">How it works</h2>
          <p className="mt-3 text-white/70">From your thoughts to a living, evolving AI persona.</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute right-4 top-4 text-5xl font-black text-white/10">{i + 1}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
