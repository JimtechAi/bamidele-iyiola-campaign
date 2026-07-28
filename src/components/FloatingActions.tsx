'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = CAMPAIGN_INFO.contact.phonePrimary.replace(/[^0-9]/g, '') || '2348037758413';
  const whatsappLabel = CAMPAIGN_INFO.contact.phonePrimary || '+234 803 775 8413';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Bamidele (ASSORTED), I would like to connect with your campaign for Ikeja Club Premises Secretary.'
  )}`;
  const instagramUrl = 'https://instagram.com/assorted_phone_and_gadgets';

  return (
    <>
      <div className="fixed bottom-6 left-4 sm:left-6 z-[9999] pointer-events-none">
        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group pointer-events-auto w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #f58529 0%, #dd2a7b 45%, #8134af 75%, #515bd4 100%)' }}
        >
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 rounded-xl bg-gray-900 text-white font-poppins text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Instagram
          </span>
        </motion.a>
      </div>

      <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Bamidele on WhatsApp"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative group pointer-events-auto flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 border border-emerald-300/40"
        >
          {/* Pulsing glow ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

          {/* WhatsApp Icon */}
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366] shrink-0" />

          {/* Label on medium+ screens */}
          <span className="hidden sm:inline-block font-poppins text-xs font-bold tracking-wide pr-1">
            WhatsApp Bamidele
          </span>

          {/* Tooltip on mobile / hover */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-gray-900 text-white font-poppins text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Connect on WhatsApp ({whatsappLabel})
          </span>
        </motion.a>

        {/* Floating Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to Top"
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#7A1730] hover:bg-[#5c1023] text-white flex items-center justify-center shadow-2xl border border-[#D4AF37]/50 group transition-all"
            >
              <ArrowUp className="w-5 h-5 text-[#D4AF37] group-hover:-translate-y-0.5 transition-transform" />
              <span className="sr-only">Back to Top</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
