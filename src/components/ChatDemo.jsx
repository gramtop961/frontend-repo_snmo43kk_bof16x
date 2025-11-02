import React, { useState } from 'react';

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are the user\'s inner voice: concise, helpful, and aligned with their goals.' },
  ]);
  const [input, setInput] = useState('How can I structure my day to balance deep work and rest?');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const next = [...messages, { role: 'user', content: input.trim() }];
    setMessages(next);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${backend}/api/gemini/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || 'Request failed');
      }
      const data = await res.json();
      const reply = data.reply || 'No response';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Self-Conversation Demo</h2>
          <p className="mt-3 text-white/70">Talk to your evolving mesh. This demo uses the Gemini API through a secure backend.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-xs text-white/60">Conversation</div>
            <div className="h-72 overflow-y-auto space-y-3 pr-1">
              {messages.filter(m => m.role !== 'system').map((m, i) => (
                <div key={i} className={`rounded-xl p-3 ${m.role === 'user' ? 'bg-white/10' : 'bg-gradient-to-br from-violet-500/20 to-cyan-500/20'}`}>
                  <div className="text-[10px] uppercase tracking-wide text-white/60">{m.role}</div>
                  <div className="mt-1 text-sm leading-relaxed whitespace-pre-wrap">{m.content}</div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={sendMessage} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
            <label className="mb-2 text-xs text-white/60">Ask your mesh</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[140px] w-full resize-y rounded-xl border border-white/10 bg-black/40 p-3 text-sm outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Type a question..."
            />
            {error && <div className="mt-2 text-xs text-red-400">{error}</div>}
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-white/50">Backend: {backend || 'not set (set VITE_BACKEND_URL)'}</div>
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-neutral-200 disabled:opacity-60"
              >
                {loading ? 'Thinking…' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
