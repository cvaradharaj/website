'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const MAX_FILE_MB = 5;

export default function CareerApplyForm({
  positions,
  selectedPosition,
  onPositionChange,
}: {
  positions: string[];
  selectedPosition: string;
  onPositionChange: (value: string) => void;
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    const form = e.currentTarget;
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setErrorMsg('Please attach your resume before submitting.');
      setStatus('error');
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setErrorMsg(`Resume file is too large — please attach a file under ${MAX_FILE_MB}MB.`);
      setStatus('error');
      return;
    }

    const formData = new FormData(form);
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@controlstandards.in', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      form.reset();
      onPositionChange(positions[0]);
    } catch {
      setErrorMsg(
        'Something went wrong sending your application. Please email your resume directly to info@controlstandards.in.'
      );
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 text-center border-emerald-400/20"
      >
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">Application Sent</h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Thank you for applying to Control Standards. Our team will review your resume and reach
          out if there is a match — usually within a few working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-6 sm:p-8 space-y-5"
      encType="multipart/form-data"
    >
      {/* FormSubmit.co configuration — delivers this submission directly to
          info@controlstandards.in with no backend required. */}
      <input type="hidden" name="_subject" value="New Job Application — Control Standards Careers" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
            Email *
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
            Phone *
          </label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
            Position Applying For *
          </label>
          <select
            required
            name="position"
            value={selectedPosition}
            onChange={(e) => onPositionChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
          >
            {positions.map((p) => (
              <option key={p} value={p} className="bg-slate-900">
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
          Cover Message (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us why you're a good fit for this role..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.06] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
          Resume / CV — PDF or Word, max {MAX_FILE_MB}MB *
        </label>
        <input
          required
          ref={fileRef}
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-500/10 file:text-blue-300 hover:file:bg-blue-500/20 file:cursor-pointer cursor-pointer"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/25"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" /> Submit Application
          </>
        )}
      </button>
      <p className="text-[11px] text-slate-500">
        Applications are emailed directly to info@controlstandards.in. We never share your
        information with third parties.
      </p>
    </form>
  );
}
