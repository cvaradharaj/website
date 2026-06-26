'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400/80 tracking-[0.15em] uppercase mb-6">
            <MessageCircle className="w-3 h-3" />
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Let&apos;s Discuss How We Can Help{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Transform Your Operations
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            For enterprise solutions and custom requirements, reach out to our engineering team.
            We&apos;ll schedule a consultation and discuss how our expertise can solve your specific challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-strong rounded-3xl p-8 space-y-5 border-white/[0.04]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="liquid-glass-icon w-8 h-8 rounded-lg">
                  <Mail className="w-4 h-4 icon-inner text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-white">Send us a message</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors"
              />
              <select
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-slate-400 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Select Service Interest</option>
                <option>Industrial Automation</option>
                <option>Electrical Engineering / Panels</option>
                <option>Machine Modernization</option>
                <option>Process Improvement</option>
                <option>AI & Analytics Solutions</option>
                <option>Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Describe your project or requirements..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-strong rounded-3xl p-8 space-y-6 border-white/[0.04]">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-sm.png"
                  alt="Control Standards"
                   className="h-10 w-auto opacity-90"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="liquid-glass-icon w-8 h-8 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 icon-inner text-cyan-400" />
                  </div>
                  <span className="leading-relaxed pt-1">
                    2nd Floor, Punyakoti House, APC Layout,
                    <br />
                    Lakeshore Gardens, Vidhyaranyapura Post,
                    <br />
                    Thindlu Village, Bangalore – 560097
                  </span>
                </div>

                <a
                  href="tel:+919730644552"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="liquid-glass-icon w-8 h-8 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 icon-inner text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="pt-1">+91 9730644552</span>
                </a>

                <a
                  href="mailto:info@controlstandards.in"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="liquid-glass-icon w-8 h-8 rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 icon-inner text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="pt-1">info@controlstandards.in</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/[0.04] space-y-3">
                <a
                  href="https://wa.me/919730644552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Engineering Support
                  <ArrowRight className="w-3 h-3 ml-auto" />
                </a>
              </div>
            </div>

            {/* Quick response */}
            <div className="glass rounded-2xl p-5 border-white/[0.03]">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>
                  Enterprise inquiries typically responded to within{' '}
                  <strong className="text-white">4 hours</strong>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
