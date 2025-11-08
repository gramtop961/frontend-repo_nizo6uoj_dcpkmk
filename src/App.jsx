import React from 'react';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Benefits from './components/Benefits';
import OrganizersSponsors from './components/OrganizersSponsors';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0B14]">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0B14]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
          <a href="#intro" className="font-semibold tracking-tight">Hyper Hack</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#tracks" className="hover:text-white">Tracks</a>
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#org-sponsor" className="hover:text-white">Organizer & Sponsor</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1.5 text-sm font-medium text-[#0A0B14] shadow-lg shadow-violet-500/20">Register</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Tracks />
        <Benefits />
        <OrganizersSponsors />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0B14] py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Hyper Hack — Built with love for creators.
      </footer>
    </div>
  );
};

export default App;