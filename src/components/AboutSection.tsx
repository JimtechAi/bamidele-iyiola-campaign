'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  Briefcase,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  Quote,
  CheckCircle2,
  PhoneCall,
  Award,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface AboutSectionProps {
  onOpenVisionModal: () => void;
  onOpenContactModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenVisionModal,
  onOpenContactModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const biographyBlocks = [
    {
      title: 'Executive Profile',
      content:
        'A respected entrepreneur and active Ikeja Club member known for disciplined execution, trust-based relationships, and dependable service leadership.',
    },
    {
      title: 'Professional Foundation',
      content:
        'As an importer and exporter of phones and gadgets, he manages operations that require precision, accountability, and timely stakeholder communication.',
    },
    {
      title: 'Campaign Commitment',
      content:
        'Focused on preserving valued standards, maintaining daily excellence, and improving spaces that shape member experience across Ikeja Club.',
    },
  ];

  const leadershipHighlights = [
    {
      icon: Briefcase,
      title: 'Operational Discipline',
      description: 'Delivers structured execution with clear priorities and follow-through.',
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/8',
      borderColor: 'border-[#7A1730]/20',
    },
    {
      icon: Users,
      title: 'Member-First Service',
      description: 'Listens actively and responds with practical solutions for members.',
      color: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/8',
      borderColor: 'border-[#0B6B3A]/20',
    },
    {
      icon: ShieldCheck,
      title: 'Accountable Leadership',
      description: 'Promotes transparency and responsibility in every decision.',
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/8',
      borderColor: 'border-[#7A1730]/20',
    },
    {
      icon: Sparkles,
      title: 'Continuous Improvement',
      description: 'Drives measured upgrades that sustain long-term club standards.',
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
      borderColor: 'border-[#D4AF37]/30',
    },
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'Transparent conduct and ethical stewardship of shared resources.',
    },
    {
      title: 'Responsiveness',
      description: 'Prompt action on premises matters that impact daily member comfort.',
    },
    {
      title: 'Excellence',
      description: 'Consistent standards in cleanliness, functionality, and maintenance.',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Established Business Credibility',
      description: 'Built a trusted business reputation through consistency and service.',
    },
    {
      icon: CheckCircle2,
      title: 'Process-Driven Management',
      description: 'Applied structured workflows to support reliable outcomes.',
    },
    {
      icon: Users,
      title: 'Community Reliability',
      description: 'Maintained active engagement and dependable support within the community.',
    },
  ];

  return (
    <section
      id="about"
      className="section-shell"
    >
      {/* Subtle Luxury Background Depth */}
      <div className="absolute -top-24 left-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-28 right-[-6%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tl from-[#D4AF37]/[0.04] via-[#D4AF37]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(122,23,48,0.03),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(212,175,55,0.025),transparent_45%)]" />

      <div className="section-container">
        {/* Main Grid: Left Portrait + Right Executive Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <article className="relative w-full max-w-[520px] mx-auto lg:mx-0 rounded-[24px] border border-[#1F2937]/10 bg-white p-3 sm:p-4 shadow-[0_22px_50px_-38px_rgba(31,41,55,0.55)]">
              <div className="absolute -inset-px rounded-[24px] bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#7A1730]/15 pointer-events-none" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[20px] border border-[#D4AF37]/30">
                <Image
                  src="/images/about/bamidele about.webp"
                  alt="Professional portrait of Bamidele Iyiola S."
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1F2937]/35 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              <div className="mt-4 rounded-[16px] border border-[#D4AF37]/30 bg-gradient-to-r from-[#7A1730]/6 to-[#0B6B3A]/6 px-4 py-3">
                <p className="font-poppins text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#7A1730]">
                  {CAMPAIGN_INFO.position} Candidate
                </p>
                <p className="mt-1 font-poppins text-sm sm:text-base font-semibold text-[#1F2937]">
                  {CAMPAIGN_INFO.candidateName} ({CAMPAIGN_INFO.nickname})
                </p>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#0B6B3A]" aria-hidden="true" />
                <span className="font-poppins text-[11px] font-semibold uppercase tracking-wider text-[#7A1730]">
                  Proven Executive Capacity
                </span>
              </div>
            </article>
          </motion.div>

          {/* RIGHT COLUMN: Executive Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="lg:col-span-7"
          >
            <article className="max-w-[760px]">
              <span className="inline-block font-poppins text-xs font-semibold tracking-[0.2em] text-[#7A1730] uppercase mb-4">
                About The Candidate
              </span>

              <h2 className="font-cinzel text-[2rem] sm:text-[2.35rem] lg:text-[3rem] font-extrabold leading-[1.14] tracking-[-0.012em] text-[#1F2937] mb-5">
                Meet Bamidele Iyiola S. <span className="text-[#7A1730]">({CAMPAIGN_INFO.nickname})</span>
              </h2>

              <p className="font-inter text-base sm:text-lg text-gray-600 leading-[1.72] max-w-[42rem] mb-8">
                A respected entrepreneur, community leader and committed member dedicated to preserving, maintaining and improving the beauty and functionality of Ikeja Club.
              </p>

              <section aria-label="Executive biography" className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
                {biographyBlocks.map((block, index) => (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="rounded-2xl border border-[#1F2937]/10 bg-white px-4 py-4 shadow-[0_12px_26px_-22px_rgba(31,41,55,0.45)]"
                  >
                    <h3 className="font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#7A1730] mb-2">
                      {block.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 leading-[1.75]">{block.content}</p>
                  </motion.div>
                ))}
              </section>

              <section aria-label="Leadership highlights" className="mb-8">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
                  Leadership Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {leadershipHighlights.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.07 }}
                        className={`rounded-2xl bg-white border ${card.borderColor} p-5 shadow-[0_14px_28px_-22px_rgba(31,41,55,0.45)] hover:shadow-[0_20px_36px_-24px_rgba(31,41,55,0.55)] hover:-translate-y-0.5 transition-all duration-300`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${card.bgColor} ${card.color} flex items-center justify-center border border-current/10`}>
                            <IconComponent className="w-5 h-5" aria-hidden="true" />
                          </div>
                          <h4 className="font-poppins text-sm font-bold text-[#1F2937] tracking-wide">{card.title}</h4>
                        </div>
                        <p className="font-inter text-sm text-gray-700 leading-relaxed">{card.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              <section aria-label="Core values" className="mb-8">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {coreValues.map((value, index) => (
                    <motion.article
                      key={value.title}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="rounded-2xl border border-[#0B6B3A]/20 bg-white p-4"
                    >
                      <h4 className="font-poppins text-sm font-bold text-[#0B6B3A] mb-1.5">{value.title}</h4>
                      <p className="font-inter text-sm text-gray-600 leading-relaxed">{value.description}</p>
                    </motion.article>
                  ))}
                </div>
              </section>

              <motion.blockquote
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#7A1730]/[0.03] via-white to-[#D4AF37]/[0.04] p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A1730] mt-0.5 shrink-0" />
                  <p className="font-cinzel text-lg sm:text-xl leading-[1.6] text-[#1F2937]">
                    "Leadership is not about promises. It is about responsibility, consistency and service."
                  </p>
                </div>
              </motion.blockquote>

              <section aria-label="Achievements" className="mb-8">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {achievements.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="rounded-2xl border border-[#D4AF37]/30 bg-white p-4"
                      >
                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#D4AF37]/12 text-[#7A1730] mb-2.5">
                          <IconComponent className="w-4.5 h-4.5" aria-hidden="true" />
                        </div>
                        <h4 className="font-poppins text-sm font-bold text-[#1F2937] mb-1.5">{item.title}</h4>
                        <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.article>
                    );
                  })}
                </div>
              </section>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={onOpenVisionModal}
                  className="btn-primary w-full sm:w-auto py-3.5 sm:text-sm flex items-center justify-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/45"
                  aria-label="Read campaign vision"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                  <span>Read My Vision</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#0B6B3A]/30 bg-white text-[#0B6B3A] font-poppins text-sm font-semibold hover:bg-[#0B6B3A]/5 hover:border-[#0B6B3A]/45 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6B3A]/35"
                  aria-label="Contact campaign team"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Campaign</span>
                </button>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
