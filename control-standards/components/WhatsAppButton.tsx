'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919730644552"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-400/40 transition-all hover:scale-105"
      aria-label="WhatsApp Engineering Support"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
