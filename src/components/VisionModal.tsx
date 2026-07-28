'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Shield,
  HeartHandshake,
  Building2,
  MapPin,
  Trees,
  Wrench,
  FileText,
  Calendar,
  Award,
  Clock,
  Zap,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVoteModal: () => void;
}

export const VisionModal: React.FC<VisionModalProps> = ({ isOpen, onClose, onOpenVoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'vision' | 'manifesto' | 'action-plan'>('all');

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Dialog Shell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="vision-modal-title"
          className="relative bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Top Header Row */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7A1730] to-[#5C1023] text-white flex items-center justify-center shadow-md border border-[#D4AF37]/40 shrink-0">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs font-poppins font-bold text-[#0B6B3A] uppercase tracking-wider block">
                  Bamidele Iyiola S. (ASSORTED) • Ikeja Club 2026
                </span>
                <h2 id="vision-modal-title" className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1F2937]">
                  Vision & Manifesto Blueprint
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Vision Modal"
              className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Filter Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-3 border-b border-gray-100 shrink-0 no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl font-poppins text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-[#7A1730] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Combined Vision & Manifesto</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`px-4 py-2 rounded-xl font-poppins text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'vision'
                  ? 'bg-[#0B6B3A] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Vision</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('manifesto')}
              className={`px-4 py-2 rounded-xl font-poppins text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'manifesto'
                  ? 'bg-[#7A1730] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>4 Core Pillars</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('action-plan')}
              className={`px-4 py-2 rounded-xl font-poppins text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'action-plan'
                  ? 'bg-[#D4AF37] text-[#1F2937] shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>100-Day Action Plan</span>
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto space-y-6 py-4 pr-1 text-gray-700 font-inter text-sm flex-1">
            
            {/* Candidate Mission Statement Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 via-white to-emerald-50 border border-[#7A1730]/20 shadow-xs">
              <span className="font-poppins text-[11px] font-extrabold text-[#7A1730] uppercase tracking-wider block mb-1">
                Official Campaign Mission
              </span>
              <p className="font-cinzel text-base sm:text-lg font-bold text-[#1F2937] italic leading-relaxed">
                "{CAMPAIGN_INFO.missionStatement}"
              </p>
              <div className="mt-3 flex items-center justify-between text-xs font-poppins text-gray-600 border-t border-gray-200/60 pt-2">
                <span className="font-bold text-[#0B6B3A]">
                  Candidate for Premises Secretary
                </span>
                <span className="font-bold text-[#7A1730]">
                  — Bamidele Iyiola S. (ASSORTED)
                </span>
              </div>
            </div>

            {/* SECTION 1: CORE VISION */}
            {(activeTab === 'all' || activeTab === 'vision') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Sparkles className="w-5 h-5 text-[#0B6B3A]" />
                  <h3 className="font-cinzel text-xl font-bold text-[#1F2937]">
                    1. Core Campaign Vision
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-center gap-2 mb-1.5 text-[#0B6B3A]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h4 className="font-poppins text-sm font-bold">Uncompromising Cleanliness</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Enforcing daily standardized sanitation routines across all halls, bars, lawns, and restrooms to keep Ikeja Club pristine.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100">
                    <div className="flex items-center gap-2 mb-1.5 text-[#7A1730]">
                      <Trees className="w-4 h-4 shrink-0" />
                      <h4 className="font-poppins text-sm font-bold">Greener Landscaping</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Nurturing lush greenery, gardens, and clean outdoor pathways that reflect modern executive club elegance.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                    <div className="flex items-center gap-2 mb-1.5 text-[#D4AF37]">
                      <Wrench className="w-4 h-4 shrink-0" />
                      <h4 className="font-poppins text-sm font-bold">Preventive Facility Upgrades</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Conducting routine plumbing, lighting, and electrical audits to fix minor flaws before they become major disruptions.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-center gap-2 mb-1.5 text-[#0B6B3A]">
                      <Zap className="w-4 h-4 shrink-0" />
                      <h4 className="font-poppins text-sm font-bold">Rapid Response Secretariat</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Leveraging campaign office at Ikeja Club Plaza (23 Obafemi Awolowo Way) for zero-delay response to premises needs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 2: 4 CORE PILLARS MANIFESTO */}
            {(activeTab === 'all' || activeTab === 'manifesto') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Shield className="w-5 h-5 text-[#7A1730]" />
                  <h3 className="font-cinzel text-xl font-bold text-[#1F2937]">
                    2. The 4 Pillars Manifesto
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-[#7A1730] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs font-bold text-[#7A1730] uppercase">Pillar I</span>
                      <span className="text-[10px] font-poppins font-semibold px-2 py-0.5 rounded bg-red-50 text-[#7A1730]">Sanitation & Upkeep</span>
                    </div>
                    <h4 className="font-poppins text-sm font-bold text-gray-900 mb-1">
                      Proactive Premises Maintenance & Hygiene
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Deploying dedicated facility cleaning protocols, deep-cleansing restrooms, and establishing daily inspection checklists for every corner of the premises.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-[#0B6B3A] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs font-bold text-[#0B6B3A] uppercase">Pillar II</span>
                      <span className="text-[10px] font-poppins font-semibold px-2 py-0.5 rounded bg-emerald-50 text-[#0B6B3A]">Eco-Beautification</span>
                    </div>
                    <h4 className="font-poppins text-sm font-bold text-gray-900 mb-1">
                      Environmental Excellence & Green Landscaping
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Restoring green lawns, planting fresh ornamental flowers, upgrading outdoor seating illumination, and creating safe, serene garden areas for members.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-[#D4AF37] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs font-bold text-[#D4AF37] uppercase">Pillar III</span>
                      <span className="text-[10px] font-poppins font-semibold px-2 py-0.5 rounded bg-amber-50 text-[#1F2937]">Accessibility & Response</span>
                    </div>
                    <h4 className="font-poppins text-sm font-bold text-gray-900 mb-1">
                      Strategic Proximity & 24/7 Availability
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      With campaign office at Ikeja Club Plaza (23 Obafemi Awolowo Way) and business office at Computer Village, Bamidele guarantees rapid on-site action.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-[#7A1730] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs font-bold text-[#7A1730] uppercase">Pillar IV</span>
                      <span className="text-[10px] font-poppins font-semibold px-2 py-0.5 rounded bg-red-50 text-[#7A1730]">Accountability</span>
                    </div>
                    <h4 className="font-poppins text-sm font-bold text-gray-900 mb-1">
                      Transparent Reporting & Member Voice
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Publishing transparent premises maintenance logs, hosting quarterly member feedback sessions, and maintaining an open WhatsApp hotline (+234 803 775 8413).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 3: 100-DAY ACTION PLAN */}
            {(activeTab === 'all' || activeTab === 'action-plan') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="font-cinzel text-xl font-bold text-[#1F2937]">
                    3. The 100-Day Action Plan
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#7A1730] text-white font-poppins text-[10px] font-bold">
                        Phase 1
                      </span>
                      <span className="text-[10px] font-poppins text-gray-500 font-semibold">Days 1–30</span>
                    </div>
                    <h4 className="font-poppins text-xs font-bold text-gray-900 mb-2">Audit & Quick Fixes</h4>
                    <ul className="space-y-1.5 text-[11px] text-gray-600">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Comprehensive premises facility audit</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Flush drainages & fix urgent plumbing</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Establish direct member feedback loop</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0B6B3A] text-white font-poppins text-[10px] font-bold">
                        Phase 2
                      </span>
                      <span className="text-[10px] font-poppins text-gray-500 font-semibold">Days 31–60</span>
                    </div>
                    <h4 className="font-poppins text-xs font-bold text-gray-900 mb-2">Repairs & Sanitation</h4>
                    <ul className="space-y-1.5 text-[11px] text-gray-600">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Execute high-priority facility restorations</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Introduce structured preventive schedules</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Upgrade club waste management systems</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#1F2937] font-poppins text-[10px] font-bold">
                        Phase 3
                      </span>
                      <span className="text-[10px] font-poppins text-gray-500 font-semibold">Days 61–100</span>
                    </div>
                    <h4 className="font-poppins text-xs font-bold text-gray-900 mb-2">Beautification & Strategy</h4>
                    <ul className="space-y-1.5 text-[11px] text-gray-600">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Landscaping green gardens & walkways</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Install modern garden lighting accents</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] shrink-0 mt-0.5" />
                        <span>Present long-term premises maintenance report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Campaign Office Reference Bar */}
            <div className="p-4 rounded-2xl bg-gray-100 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7A1730] shrink-0" />
                <div>
                  <strong className="font-poppins text-gray-900 block">Campaign Office Secretariat</strong>
                  <span className="text-gray-600">Ikeja Club Plaza, 23 Obafemi Awolowo Way, Ikeja, Lagos</span>
                </div>
              </div>
              <a
                href="https://wa.me/2348037758413"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-poppins text-[11px] font-bold shrink-0 shadow-xs flex items-center gap-1"
              >
                <span>WhatsApp Candidate</span>
              </a>
            </div>

          </div>

          {/* Modal Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenVoteModal();
              }}
              className="flex-1 py-3.5 px-6 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins font-bold text-sm shadow-md flex items-center justify-center gap-2 border border-[#D4AF37]/30 transition-all active:scale-95"
            >
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>Pledge Support / Vote Bamidele</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-poppins font-semibold text-sm transition-colors active:scale-95"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
