'use client';

import { motion } from 'framer-motion';
import { Cpu, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

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
          <span className="text-xs font-mono text-blue-400/60 tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Start Your <span className="text-gradient-blue">Project</span>
          </h2>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
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
                <option>Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Describe your project or requirements..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry
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
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-sm font-bold">
                  <span className="text-white">CONTROL</span>
                  <span className="text-blue-400 ml-1">STANDARDS</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    2nd Floor, Punyakoti House, APC Layout,
                    <br />
                    Lakeshore Gardens, Vidhyaranyapura Post,
                    <br />
                    Thindlu Village, Bangalore – 560097
                  </span>
                </div>

                <a
                  href="tel:+919730644552"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  +91 9730644552
                </a>

                <a
                  href="mailto:info@controlstandards.in"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  info@controlstandards.in
                </a>
              </div>

              <div className="pt-4 border-t border-white/[0.04]">
                <a
                  href="https://wa.me/919730644552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Engineering Support
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden glass border-white/[0.03] h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.59!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzQ4LjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen
                loading="lazy"
                title="Control Standards — Bengaluru Office"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
