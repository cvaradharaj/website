'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <motion.a
      href="https://wa.me/919730644552"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-400/40 transition-all"
      aria-label="WhatsApp Engineering Support"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
