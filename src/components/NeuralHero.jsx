import React from 'react';
import Spline from '@splinetool/react-spline';

export default function NeuralHero() {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient aura overlay to blend the 3D with the page */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-white/70 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          Introducing MindMesh.ai — build your digital consciousness
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-violet-200 to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Grow a digital version of you
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70">
          Upload your thoughts, chats, and files. Train an evolving AI persona that debates, advises, and creates — just like you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Get Started Free
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
