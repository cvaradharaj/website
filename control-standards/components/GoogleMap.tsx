'use client';

export default function GoogleMap() {
  return (
    <div className="w-full h-[250px] rounded-lg bg-slate-900/50 border border-slate-800/80 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.59!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzQ4LjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Control Standards — Bengaluru Office"
      />
    </div>
  );
}
