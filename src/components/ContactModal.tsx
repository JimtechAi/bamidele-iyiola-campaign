'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Building, Send, PhoneCall, CheckCircle2, Mail } from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const whatsappMsg = `Hello Bamidele (ASSORTED),\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/2348037758413?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          aria-labelledby="contact-modal-title"
          className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact modal"
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#0B6B3A] text-white flex items-center justify-center shadow-md border border-emerald-300/40">
              <PhoneCall className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-xs font-poppins font-bold text-[#7A1730] uppercase tracking-wider block">
                Direct Communication
              </span>
              <h2 id="contact-modal-title" className="font-cinzel text-2xl font-bold text-[#1F2937]">
                Contact Bamidele's Campaign
              </h2>
            </div>
          </div>

          {/* Office Address Info Card */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 mb-6 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#0B6B3A] shrink-0 mt-1" />
            <div className="text-xs font-poppins text-emerald-950">
              <strong className="block text-sm font-bold text-[#0B6B3A] mb-0.5">
                Campaign & Business Office
              </strong>
              <p className="font-medium text-gray-700">
                {CAMPAIGN_INFO.officeAddress.street}, {CAMPAIGN_INFO.officeAddress.area},{' '}
                {CAMPAIGN_INFO.officeAddress.district}, {CAMPAIGN_INFO.officeAddress.city}.
              </p>
              <div className="mt-2 text-[11px] font-semibold text-[#0B6B3A] flex flex-wrap items-center gap-x-4 gap-y-1">
                <div className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>Business: {CAMPAIGN_INFO.business}</span>
                </div>
                <a href={`mailto:${CAMPAIGN_INFO.contact.email}`} className="flex items-center gap-1 text-[#7A1730] hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{CAMPAIGN_INFO.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-[#0B6B3A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#1F2937]">Message Received</h3>
              <p className="font-inter text-xs text-gray-600 max-w-sm mx-auto">
                Thank you for reaching out to Bamidele Iyiola S. (ASSORTED). Our campaign team will get back to you promptly.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#7A1730] text-white font-poppins text-xs font-semibold"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-poppins font-semibold text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief O. Adeleke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B6B3A] text-sm font-inter"
                />
              </div>

              <div>
                <label className="block text-xs font-poppins font-semibold text-gray-700 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B6B3A] text-sm font-inter"
                />
              </div>

              <div>
                <label className="block text-xs font-poppins font-semibold text-gray-700 mb-1">
                  Message or Suggestion for Ikeja Club Premises
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share your thoughts, suggestions or support for Bamidele 2026..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B6B3A] text-sm font-inter resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0B6B3A] hover:bg-[#064A27] text-white font-poppins font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all border border-emerald-300/30"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span>Send Message to Campaign</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
