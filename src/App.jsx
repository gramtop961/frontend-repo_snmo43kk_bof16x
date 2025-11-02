import React from 'react';
import NeuralHero from './components/NeuralHero';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import ChatDemo from './components/ChatDemo';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-sm sm:text-base font-semibold tracking-tight">MindMesh.ai</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Sign in</button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <NeuralHero />
        <KeyFeatures />
        <HowItWorks />
        <ChatDemo />
        <Pricing />
      </main>

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} MindMesh.ai — All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
