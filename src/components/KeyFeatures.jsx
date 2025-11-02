import React from 'react';
import { Brain, MessageSquare, LineChart, GitBranch, Shield } from 'lucide-react';

const features = [
  {
    title: 'Personality Engine',
    desc: 'Learns your tone, values, and logic from journals, chats, and documents.',
    Icon: Brain,
    accent: 'from-fuchsia-500/20 to-violet-500/20',
  },
  {
    title: 'Self-Conversation',
    desc: 'Chat with your digital self to debate ideas, plan, and brainstorm.',
    Icon: MessageSquare,
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Growth Graph',
    desc: 'See how your AI self evolves over time as it learns from you.',
    Icon: LineChart,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Mind Duplication',
    desc: 'Create focused meshes like WorkMesh, DreamMesh, or StudyMesh.',
    Icon: GitBranch,
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Privacy Vault',
    desc: 'Local-only learning mode keeps your sensitive data on your device.',
    Icon: Shield,
    accent: 'from-purple-500/20 to-indigo-500/20',
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Key Features</h2>
          <p className="mt-3 text-white/70">Everything you need to build, train, and evolve a personal digital consciousness.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon, accent }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={`pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${accent} blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
