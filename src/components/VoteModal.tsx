'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, CheckCircle2, Award, Heart, Share2 } from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoteModal: React.FC<VoteModalProps> = ({ isOpen, onClose }) => {
  const [pledged, setPledged] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="vote-modal-title"
          className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 z-10 max-h-[90vh] overflow-y-auto text-center"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close vote modal"
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A1730] to-[#5C1023] text-white flex items-center justify-center shadow-lg border border-[#D4AF37]/50 mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
          </div>

          <span className="text-xs font-poppins font-bold text-[#0B6B3A] uppercase tracking-wider block mb-1">
            Official Ballot Endorsement
          </span>

          <h2 id="vote-modal-title" className="font-cinzel text-2xl font-bold text-[#1F2937] mb-2">
            Vote Bamidele Iyiola S.
          </h2>

          <p className="font-poppins text-xs font-semibold text-[#7A1730] mb-6">
            ({CAMPAIGN_INFO.nickname}) • Premises Secretary Candidate, Ikeja Club
          </p>

          {pledged ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
              <div className="w-12 h-12 bg-[#0B6B3A] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#0B6B3A]">Support Pledged!</h3>
              <p className="font-inter text-xs text-gray-700 leading-relaxed">
                Thank you for standing with Bamidele Iyiola S. (ASSORTED) for a cleaner, greener, and better-managed Ikeja Club!
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-6 py-2 rounded-xl bg-[#7A1730] text-white font-poppins text-xs font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 text-left space-y-2">
                <div className="flex items-center gap-2 text-[#7A1730] font-poppins text-xs font-bold">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Why Members Trust Bamidele:</span>
                </div>
                <ul className="text-xs font-inter text-gray-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Prompt Action:</strong> Computer Village office is only 5 minutes away.</li>
                  <li><strong>Proven Business Leader:</strong> Phone & gadget import/export expert.</li>
                  <li><strong>Clear Mission:</strong> Preserving beauty, cleanliness & functionality.</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setPledged(true)}
                className="w-full py-3.5 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins font-semibold text-sm shadow-md flex items-center justify-center gap-2 border border-[#D4AF37]/30 group transition-all"
              >
                <Heart className="w-4 h-4 text-[#D4AF37] group-hover:scale-125 transition-transform fill-[#D4AF37]" />
                <span>Pledge My Vote to Bamidele</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
