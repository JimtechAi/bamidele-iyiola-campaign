'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ShieldCheck,
  Wrench,
  Flower2,
  Cpu,
  Users,
  Ear,
  ClipboardList,
  Hammer,
  RefreshCw,
  Quote,
  Award,
  Sparkles,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface VisionManifestoSectionProps {
  onOpenContactModal: () => void;
  onOpenVoteModal: () => void;
}

export const VisionManifestoSection: React.FC<VisionManifestoSectionProps> = (_props) => {
  const shouldReduceMotion = useReducedMotion();

  const visionCards = [
    {
      title: 'Preserve',
      icon: ShieldCheck,
      description: 'Protect the standards, heritage, and identity members value most.',
      iconColor: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/8',
      borderColor: 'border-[#7A1730]/20',
    },
    {
      title: 'Maintain',
      icon: Wrench,
      description: 'Strengthen maintenance discipline for clean, functional daily operations.',
      iconColor: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/8',
      borderColor: 'border-[#0B6B3A]/20',
    },
    {
      title: 'Beautify',
      icon: Flower2,
      description: 'Elevate landscaping and public spaces with lasting visual quality.',
      iconColor: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
      borderColor: 'border-[#D4AF37]/30',
    },
    {
      title: 'Modernise',
      icon: Cpu,
      description: 'Deliver practical upgrades that improve comfort and member experience.',
      iconColor: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/8',
      borderColor: 'border-[#0B6B3A]/20',
    },
  ];

  const campaignPriorities = [
    {
      title: 'Facility Reliability',
      description: 'Keep key premises systems dependable through preventive maintenance.',
      icon: Wrench,
      accent: 'border-[#7A1730]/20 bg-[#7A1730]/[0.04] text-[#7A1730]',
    },
    {
      title: 'Member Comfort',
      description: 'Improve cleanliness, ambience, and usability across shared spaces.',
      icon: Users,
      accent: 'border-[#0B6B3A]/20 bg-[#0B6B3A]/[0.04] text-[#0B6B3A]',
    },
    {
      title: 'Landscape Quality',
      description: 'Maintain attractive and healthy green areas throughout the club.',
      icon: Flower2,
      accent: 'border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] text-[#7A1730]',
    },
    {
      title: 'Transparent Delivery',
      description: 'Track and communicate progress with clear accountability.',
      icon: ShieldCheck,
      accent: 'border-[#0B6B3A]/20 bg-[#0B6B3A]/[0.04] text-[#0B6B3A]',
    },
  ];

  const roadmapSteps = [
    { label: 'Listen', icon: Ear, detail: 'Gather member needs and priorities.' },
    { label: 'Plan', icon: ClipboardList, detail: 'Define actions, ownership, and timelines.' },
    { label: 'Execute', icon: Hammer, detail: 'Deliver maintenance and upgrades promptly.' },
    { label: 'Review', icon: RefreshCw, detail: 'Evaluate outcomes and improve continuously.' },
  ];

  return (
    <section
      id="vision"
      className="section-shell"
    >
      {/* Subtle Premium Background Depth */}
      <div className="absolute -top-20 left-[-6%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-24 right-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/[0.04] via-[#0B6B3A]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -z-10 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/[0.035] blur-[140px] pointer-events-none" />

      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_25%_20%,rgba(122,23,48,0.03),transparent_45%),radial-gradient(circle_at_75%_75%,rgba(11,107,58,0.025),transparent_46%)]" />

      <div className="section-container">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-eyebrow bg-[#0B6B3A]/10 border border-[#0B6B3A]/20 text-[#0B6B3A] mb-5"
          >
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              OUR VISION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Vision & Manifesto for a Better Ikeja Club
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description max-w-3xl mx-auto"
          >
            A clear, practical direction focused on preservation, quality maintenance, and measurable improvements for every member.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </motion.header>

        {/* Highlighted Vision Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-12 lg:mb-14 rounded-[22px] border border-[#D4AF37]/35 bg-gradient-to-r from-[#7A1730]/[0.05] via-white to-[#0B6B3A]/[0.05] p-6 sm:p-7 lg:p-8 shadow-[0_20px_40px_-30px_rgba(31,41,55,0.55)]"
          aria-label="Vision statement"
        >
          <div className="flex items-start gap-3.5">
            <Quote className="w-6 h-6 text-[#7A1730] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-cinzel text-xl sm:text-2xl font-bold text-[#1F2937] leading-[1.55]">
                "To preserve our legacy, maintain excellence, and deliver progressive improvements with transparency and discipline."
              </p>
              <p className="mt-3 font-poppins text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#7A1730]">
                {CAMPAIGN_INFO.candidateName} ({CAMPAIGN_INFO.nickname})
              </p>
            </div>
          </div>
        </motion.blockquote>

        {/* Vision Cards */}
        <section aria-label="Vision cards" className="mb-10 sm:mb-12 lg:mb-14">
          <h3 className="font-cinzel text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] font-bold text-[#1F2937] mb-5 sm:mb-6">
            Four Vision Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5" role="list">
          {visionCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                role="listitem"
                tabIndex={0}
                aria-label={`${card.title}: ${card.description}`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.07 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className={`group relative p-5 sm:p-6 rounded-[22px] bg-white border ${card.borderColor} shadow-[0_18px_36px_-30px_rgba(31,41,55,0.55)] hover:shadow-[0_24px_44px_-28px_rgba(31,41,55,0.65)] transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.iconColor} border border-current/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:text-[#1F2937]`}>
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-[1.2rem] font-bold text-[#1F2937] mb-1.5">
                      {card.title}
                    </h4>
                    <p className="font-inter text-sm text-gray-600 leading-[1.72]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </section>

        {/* Campaign Priorities */}
        <section aria-label="Campaign priorities" className="mb-10 sm:mb-12 lg:mb-14">
          <h3 className="font-cinzel text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] font-bold text-[#1F2937] mb-5 sm:mb-6">
            Campaign Priorities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5" role="list">
            {campaignPriorities.map((priority, index) => {
              const IconComponent = priority.icon;
              return (
                <motion.article
                  key={priority.title}
                  role="listitem"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.07 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  className={`rounded-[20px] border p-5 ${priority.accent} bg-white shadow-[0_14px_30px_-26px_rgba(31,41,55,0.55)] transition-all duration-300`}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/80 border border-current/20 mb-3">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-poppins text-sm font-bold tracking-wide text-[#1F2937] mb-1.5">{priority.title}</h4>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">{priority.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Vision Roadmap */}
        <section className="mb-12 sm:mb-14 lg:mb-16" aria-label="Vision roadmap">
          <h3 className="font-cinzel text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] font-bold text-[#1F2937] mb-5 sm:mb-6">
            Delivery Roadmap
          </h3>
          <div className="rounded-[22px] border border-[#1F2937]/10 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_18px_36px_-30px_rgba(31,41,55,0.45)]">
            <div className="hidden md:grid grid-cols-4 gap-4 items-start" role="list">
              {roadmapSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === roadmapSteps.length - 1;
                return (
                  <motion.div
                    key={step.label}
                    role="listitem"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7A1730] via-[#7A1730] to-[#0B6B3A] text-white flex items-center justify-center border border-[#D4AF37]/40 shadow-sm">
                      <IconComponent className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                    </div>
                    <span className="mt-2.5 font-poppins text-[11px] font-semibold tracking-wide uppercase text-[#1F2937]">
                      {step.label}
                    </span>
                    <p className="mt-1.5 max-w-[12rem] font-inter text-xs text-gray-600 leading-relaxed">{step.detail}</p>
                    {!isLast ? (
                      <span className="absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#7A1730]/45 via-[#D4AF37]/40 to-[#0B6B3A]/45" aria-hidden="true" />
                    ) : null}
                  </motion.div>
                );
              })}
            </div>

            <div className="md:hidden flex flex-col gap-3.5" role="list">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  role="listitem"
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-gradient-to-r from-[#7A1730] to-[#0B6B3A] text-white flex items-center justify-center border border-[#D4AF37]/40 shrink-0">
                    {React.createElement(step.icon, { className: 'w-3.5 h-3.5 text-[#D4AF37]', 'aria-hidden': true })}
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-semibold tracking-wide uppercase text-[#1F2937]">{step.label}</p>
                    <p className="font-inter text-xs text-gray-600 mt-0.5">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Signature */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative max-w-4xl mx-auto rounded-[24px] p-7 sm:p-9 lg:p-10 bg-white border border-[#7A1730]/20 shadow-[0_24px_46px_-34px_rgba(31,41,55,0.55)] text-center overflow-hidden"
        >
          <Quote className="absolute top-5 left-6 w-14 h-14 text-[#7A1730]/10 pointer-events-none" />
          <Quote className="absolute bottom-5 right-6 w-14 h-14 text-[#0B6B3A]/10 rotate-180 pointer-events-none" />
          <Sparkles className="absolute top-6 right-8 w-5 h-5 text-[#D4AF37]/55 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10">
            <blockquote className="font-cinzel text-[1.25rem] sm:text-[1.55rem] lg:text-[1.85rem] font-bold italic text-[#1F2937] leading-[1.6] mb-5">
              "Our commitment is not simply to maintain Ikeja Club, but to preserve its legacy while preparing it for the future."
            </blockquote>
            <p className="font-poppins text-sm sm:text-base font-bold text-[#7A1730]">
              {CAMPAIGN_INFO.candidateName} ({CAMPAIGN_INFO.nickname})
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
