'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Cpu,
  MapPin,
  GraduationCap,
  TrendingUp,
  Plane,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CareerApplyForm from '@/components/CareerApplyForm';

const POSITIONS = [
  'Mechanical Field Service Engineer',
  'Electrical & Electronics Field Service Engineer',
];

const openRoles = [
  {
    id: 'mechanical',
    title: 'Mechanical Field Service Engineer',
    openings: 2,
    icon: Wrench,
    qualification: 'B.E. / B.Tech in Mechanical Engineering',
    responsibilities: [
      'Assist in installation, assembly, alignment, and commissioning of machinery and equipment.',
      'Diagnose and rectify mechanical issues during commissioning and service activities.',
      'Perform preventive maintenance and inspections.',
      'Support equipment testing and performance optimization.',
      'Prepare service reports and maintain technical documentation.',
      'Coordinate with electrical and software teams during project execution.',
      'Ensure adherence to safety and quality standards while working at customer sites.',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical & Electronics Field Service Engineer',
    openings: 2,
    icon: Cpu,
    qualification:
      'B.E. / B.Tech in Electrical, Electronics, Electrical & Electronics, Mechatronics, or related disciplines',
    responsibilities: [
      'Assist in electrical panel inspection, wiring verification, and commissioning activities.',
      'Troubleshoot electrical, electronic, sensor, and control system issues.',
      'Support testing and validation of automation systems.',
      'Assist with installation, calibration, and maintenance of electrical components.',
      'Prepare technical reports and service documentation.',
      'Work closely with mechanical and software teams during project execution.',
      'Follow safety procedures and industry best practices at customer locations.',
    ],
  },
];

const preferredQualities = [
  'Freshers are encouraged to apply.',
  'Strong willingness to learn and work hands-on with equipment.',
  'Ready to travel extensively and work at customer sites.',
  'Positive attitude with a strong desire to build a successful career.',
  'Good communication and interpersonal skills.',
  'Well-mannered, disciplined, and professional in conduct.',
  'High level of integrity, commitment, and accountability.',
  'Self-motivated individuals who can work independently and as part of a team.',
  'Candidates from rural or economically challenged backgrounds with a strong ambition to grow and succeed are especially encouraged to apply.',
];

export default function CareersClient() {
  const [selectedPosition, setSelectedPosition] = useState(POSITIONS[0]);
  const formRef = useRef<HTMLDivElement>(null);

  function applyFor(title: string) {
    setSelectedPosition(title);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 aurora-subtle pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400/80 tracking-[0.15em] uppercase mb-6"
          >
            <MapPin className="w-3 h-3" />
            Bengaluru / Hosur, India
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Careers at{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Control Standards
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            We are a fast-growing engineering startup delivering advanced automation solutions and
            on-site technical support. We are hiring energetic fresh graduates for{' '}
            <strong className="text-slate-200">Field Service Engineer</strong> roles — hands-on
            training on real industrial equipment from day one, with extensive travel across India
            and beyond.
          </motion.p>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="relative py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Open Positions</h2>
            <p className="text-slate-400 mt-2 text-sm">4 openings — training provided, no prior experience required.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 border-white/[0.05] flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="liquid-glass-icon w-12 h-12 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 icon-inner text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">{role.title}</h3>
                      <p className="text-xs font-mono text-cyan-400/70 mt-1">
                        {role.openings} Openings · Trainee Program
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-3">
                    <span className="text-slate-400 font-semibold">Qualification: </span>
                    {role.qualification}
                  </p>

                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400/70 flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => applyFor(role.title)}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20"
                  >
                    Apply for This Role <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Desired Candidate Profile */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Who Should Apply?</h2>
            <p className="text-slate-400 mt-2 text-sm max-w-2xl mx-auto">
              If you are hardworking, eager to learn, willing to travel, and looking for an
              opportunity where your attitude and dedication matter more than prior experience, we
              would love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {preferredQualities.map((q) => (
              <div key={q} className="flex items-start gap-2 glass rounded-xl p-3.5 border-white/[0.04]">
                <CheckCircle className="w-4 h-4 text-cyan-400/70 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Growth + Travel & Benefits */}
      <section className="relative py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border-white/[0.05]">
            <div className="liquid-glass-icon w-11 h-11 rounded-xl mb-4">
              <GraduationCap className="w-5 h-5 icon-inner text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Training &amp; Career Growth</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03]">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Training Period</div>
                  <div className="text-sm text-slate-300">3 months, structured hands-on training</div>
                </div>
                <div className="text-lg font-bold text-cyan-400 font-mono whitespace-nowrap">₹20,000/mo</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03]">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Post Training</div>
                  <div className="text-sm text-slate-300">Plus performance-based annual bonus</div>
                </div>
                <div className="text-lg font-bold text-cyan-400 font-mono whitespace-nowrap">₹25,000/mo</div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Continuous technical and skill development, with fast-track growth into technical
                and leadership roles for high performers.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border-white/[0.05]">
            <div className="liquid-glass-icon w-11 h-11 rounded-xl mb-4">
              <Plane className="w-5 h-5 icon-inner text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Travel &amp; Benefits</h3>
            <ul className="space-y-2.5">
              {[
                'Extensive travel opportunities across India and internationally.',
                'All official travel, accommodation, and work-related expenses covered by the company.',
                'Hands-on exposure to advanced engineering systems and technologies.',
                'Opportunity to grow alongside a dynamic startup and contribute directly to its success.',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                  <TrendingUp className="w-4 h-4 text-blue-400/70 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" ref={formRef} className="relative py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Apply Now</h2>
            <p className="text-slate-400 mt-2 text-sm">
              Attach your resume and we&apos;ll be in touch — applications go straight to our hiring
              team.
            </p>
          </div>
          <CareerApplyForm
            positions={POSITIONS}
            selectedPosition={selectedPosition}
            onPositionChange={setSelectedPosition}
          />
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
