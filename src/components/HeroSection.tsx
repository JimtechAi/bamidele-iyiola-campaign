'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface HeroSectionProps {
  onOpenVisionModal: () => void;
  onOpenContactModal: () => void;
  onOpenVoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVisionModal,
  onOpenContactModal,
  onOpenVoteModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const trustIndicators = [
    'Member-Focused Leadership',
    'Transparent Operations',
    'Prompt Response Culture',
    'Sustainable Premises Standards',
  ];

  return (
    <section
      id="home"
      className="relative min-h-[82vh] lg:min-h-[86vh] pt-[6.75rem] sm:pt-28 lg:pt-[6.5rem] pb-10 lg:pb-8 flex flex-col overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Animated Subtle Background Blur Circles (Wine & Deep Green) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.1, 1],
                opacity: [0.02, 0.035, 0.02],
                x: [0, 14, 0],
                y: [0, -14, 0],
              }
        }
        transition={shouldReduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-8%] right-[-4%] -z-10 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#7A1730]/4 via-[#7A1730]/2 to-transparent blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.02, 0.035, 0.02],
                x: [0, -18, 0],
                y: [0, 18, 0],
              }
        }
        transition={
          shouldReduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
        }
        className="absolute bottom-[-8%] left-[-4%] -z-10 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/4 via-[#0B6B3A]/2 to-transparent blur-[140px] pointer-events-none"
      />

      {/* Soft Gold Accent Mesh Glow */}
      <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[760px] h-[760px] rounded-full bg-[#D4AF37]/4 blur-[160px] pointer-events-none" />

      {/* Premium Wash Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_12%_10%,rgba(122,23,48,0.045)_0%,transparent_46%),radial-gradient(80%_70%_at_88%_86%,rgba(212,175,55,0.06)_0%,transparent_55%)] pointer-events-none" />

      {/* Subtle Abstract Grid Lines */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1F2937 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Main Grid Container */}
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-10 items-start lg:items-center">
          
          {/* LEFT COLUMN: Campaign Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Campaign Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1730]/10 border border-[#7A1730]/25 text-[#7A1730] shadow-2xs mb-6"
            >
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <div className="relative h-6 w-24 sm:h-7 sm:w-28 overflow-hidden rounded-md">
                <Image
                  src="/images/branding/campaign-logo.webp"
                  alt="Bamidele campaign logo"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-cinzel text-[2.3rem] sm:text-[2.8rem] md:text-[3.25rem] lg:text-[4.2rem] xl:text-[4.9rem] font-extrabold text-[#1F2937] leading-[1.05] lg:leading-[1.03] tracking-[-0.01em] mb-6"
            >
              Leadership. <br className="hidden sm:inline" />
              <span className="text-[#7A1730]">Commitment.</span> <br className="hidden sm:inline" />
              <span className="text-[#0B6B3A]">Continuity.</span>
            </motion.h1>

            {/* Candidate Identity Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-5"
            >
              <p className="font-poppins text-base sm:text-lg lg:text-xl font-semibold text-gray-800 leading-snug">
                Elect <span className="text-[#7A1730] font-bold">Bamidele Iyiola S.</span>{' '}
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#0B6B3A] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xs align-middle">
                  ({CAMPAIGN_INFO.nickname})
                </span>{' '}
                <br className="hidden sm:inline" />
                For <span className="text-[#7A1730] underline decoration-[#D4AF37] decoration-2 underline-offset-4">Premises Secretary</span>
              </p>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-inter text-[15px] sm:text-[17px] lg:text-lg text-gray-600 leading-[1.78] mb-8 lg:mb-9 max-w-[38rem]"
            >
              Together we can preserve, maintain and improve the beauty, cleanliness and functionality of Ikeja Club through responsible leadership, transparency and prompt action.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: Vote Bamidele */}
              <button
                type="button"
                onClick={onOpenVoteModal}
                className="btn-primary flex items-center justify-center gap-2.5 group min-h-[48px] shadow-md shadow-[#7A1730]/20 hover:shadow-lg hover:shadow-[#7A1730]/25 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/45"
                aria-label="Open vote information"
              >
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                <span>Vote Bamidele</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Read My Vision */}
              <button
                type="button"
                onClick={onOpenVisionModal}
                className="btn-secondary flex items-center justify-center gap-2.5 group min-h-[48px] border border-[#0B6B3A]/30 hover:border-[#0B6B3A]/45 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6B3A]/35"
                aria-label="Read campaign vision"
              >
                <Sparkles className="w-4 h-4 text-[#0B6B3A] group-hover:scale-110 transition-transform" />
                <span>Read My Vision</span>
              </button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.6 }}
              className="mt-6 lg:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-[42rem]"
              aria-label="Trust indicators"
            >
              {trustIndicators.map((indicator) => (
                <li
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/35 bg-white/80 px-3 py-2 text-xs sm:text-[13px] font-poppins font-medium text-gray-700"
                >
                  <span className="h-2 w-2 rounded-full bg-[#0B6B3A]" aria-hidden="true" />
                  <span>{indicator}</span>
                </li>
              ))}
            </motion.ul>

            <div className="sr-only" aria-live="polite">
              Use the vote or vision buttons to continue.
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Executive Portrait with Gradient Shapes & Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center mt-2 lg:mt-0 lg:pt-1"
          >
            {/* Background Decorative Gradient Shapes & Soft Blurred Circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1730]/5 via-[#0B6B3A]/4 to-[#D4AF37]/4 rounded-3xl blur-2xl transform scale-110 pointer-events-none" />

            {/* Rotating Decorative Accent Border */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] opacity-[0.14] blur-sm pointer-events-none" />

            {/* Portrait Frame Wrapper replaced with Executive Monogram Card */}
            <figure className="relative w-full max-w-xl lg:max-w-none rounded-[1.75rem] p-4 sm:p-6 bg-gradient-to-br from-[#1F2937] via-[#2A1019] to-[#0A2E1A] text-white shadow-[0_22px_60px_-34px_rgba(15,23,42,0.75)] border border-white/20 overflow-hidden">
              {/* Subtle Decorative Backdrop Elements */}
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#D4AF37]/10 blur-xl pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#0B6B3A]/20 blur-xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center p-2 sm:p-4">
                {/* Candidate Portrait */}
                <div className="relative w-full max-w-[560px] aspect-[4/5] rounded-[1.65rem] overflow-hidden border border-[#D4AF37]/55 shadow-[0_20px_44px_-28px_rgba(17,24,39,0.65)] mb-6 group lg:mb-5">
                  <Image
                    src="/images/hero/bamidele portrait.webp"
                    alt="Bamidele Iyiola S. portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    priority
                  />
                </div>
              </div>
            </figure>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="py-4 flex justify-center z-10">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1.5 text-xs font-poppins text-gray-500 hover:text-[#7A1730] transition-colors group cursor-pointer"
        >
          {/* Animated Mouse Icon */}
          <div className="w-5 h-8 rounded-full border-2 border-gray-400 group-hover:border-[#7A1730] flex justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-[#7A1730]"
            />
          </div>
          <span className="tracking-wide font-medium text-[11px] uppercase">
            Scroll to Explore
          </span>
        </a>
      </div>
    </section>
  );
};

