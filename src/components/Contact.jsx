import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useReveal } from './useReveal';
import SectionScene from './SectionScene';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const { ref, visible } = useReveal({ threshold: 0.15 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // For now, just simulate a send
      await new Promise((res) => setTimeout(res, 800));
      setStatus("Thanks! We'll be in touch soon.");
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[#0A0B14] py-28 text-white">
      <SectionScene />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(700px 350px at 10% 80%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(700px 350px at 90% 60%, rgba(124,58,237,0.12), transparent 60%)'
        }} />
      </div>

      <div ref={ref} className={`relative mx-auto max-w-3xl px-6 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="mb-6 flex items-center gap-2" style={{ transition: 'transform 700ms ease, opacity 700ms ease', transitionDelay: visible ? '60ms' : '0ms', transform: visible ? 'translateY(0px)' : 'translateY(12px)', opacity: visible ? 1 : 0 }}>
          <Mail className="h-5 w-5 text-violet-300" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact Us</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" style={{ transition: 'transform 700ms ease, opacity 700ms ease', transitionDelay: visible ? '140ms' : '0ms', transform: visible ? 'translateY(0px)' : 'translateY(12px)', opacity: visible ? 1 : 0 }}>
          <div>
            <label className="mb-2 block text-sm text-white/80">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="Ada Lovelace"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/80">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/80">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="Tell us how you want to collaborate or sponsor..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 font-medium text-[#0A0B14] shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02] active:scale-95"
          >
            <Send className="h-4 w-4" />
            Send message
          </button>

          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
