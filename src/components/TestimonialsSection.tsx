'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  Quote,
  Award,
  ShieldCheck,
  Users,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenVoteModal: () => void;
  onOpenContactModal: () => void;
}

interface TestimonialItem {
  id: number;
  name: string;
  relationship: string;
  testimonial: string;
  photo: string;
  photoAlt: string;
  isVerified: boolean;
}

interface EndorsementHighlight {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenVoteModal: _onOpenVoteModal,
  onOpenContactModal: _onOpenContactModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Add verified testimonials here after explicit member consent/approval.
  const verifiedTestimonials: TestimonialItem[] = [];

  const hasVerifiedTestimonials = verifiedTestimonials.length > 0;

  const endorsementHighlights: EndorsementHighlight[] = [
    {
      title: 'Trusted Leadership',
      description: 'Recognised for responsible, calm, and service-oriented leadership practice.',
      icon: ShieldCheck,
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
      borderColor: 'border-[#7A1730]/20',
    },
    {
      title: 'Community Engagement',
      description: 'Consistent member interaction that prioritises listening and collaboration.',
      icon: Users,
      color: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
      borderColor: 'border-[#0B6B3A]/20',
    },
    {
      title: 'Business Experience',
      description: 'Professional operational discipline translated into practical execution standards.',
      icon: Briefcase,
      color: 'text-[#8F7314]',
      bgColor: 'bg-[#D4AF37]/12',
      borderColor: 'border-[#D4AF37]/30',
    },
  ];

  const featuredEndorsement = hasVerifiedTestimonials ? verifiedTestimonials[0] : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="testimonials"
      className="section-shell"
    >
      <div className="absolute -top-20 left-[-7%] -z-10 h-[430px] w-[430px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-[-7%] -z-10 h-[430px] w-[430px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/[0.04] via-[#0B6B3A]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -z-10 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/[0.035] blur-[145px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow bg-[#0B6B3A]/10 border border-[#0B6B3A]/20 text-[#0B6B3A] mb-5"
          >
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Testimonials & Endorsements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description max-w-2xl mx-auto"
          >
            A professional showcase of verified member feedback and leadership endorsement themes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </motion.header>

        {/* Featured Endorsement */}
        <motion.section
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-12 rounded-[24px] border border-[#D4AF37]/30 bg-gradient-to-r from-[#7A1730]/[0.05] via-white to-[#0B6B3A]/[0.05] p-6 sm:p-7 lg:p-8 shadow-[0_22px_42px_-34px_rgba(31,41,55,0.7)]"
          aria-label="Featured endorsement"
        >
          {featuredEndorsement ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-gray-100">
                  <Image
                    src={featuredEndorsement.photo}
                    alt={featuredEndorsement.photoAlt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#7A1730]/10 border border-[#7A1730]/20 text-[#7A1730] font-poppins text-[11px] font-semibold uppercase tracking-wider mb-2.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                  Verified Endorsement
                </div>
                <h3 className="font-poppins text-base sm:text-lg font-bold text-[#1F2937]">
                  {featuredEndorsement.name}
                </h3>
                <p className="font-inter text-sm text-gray-500 mt-0.5 mb-2.5">{featuredEndorsement.relationship}</p>
                <blockquote className="font-cinzel text-lg sm:text-xl text-[#1F2937] leading-[1.65] italic">
                  "{featuredEndorsement.testimonial}"
                </blockquote>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0B6B3A]/10 border border-[#0B6B3A]/20 text-[#0B6B3A] font-poppins text-[11px] font-semibold uppercase tracking-wider mb-2.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                Verification In Progress
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#1F2937] mb-2">Featured Endorsement</h3>
              <p className="font-inter text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Verified testimonial publication is pending member consent and profile approvals. Endorsements will be displayed here once verification is complete.
              </p>
            </div>
          )}
        </motion.section>

        {/* Endorsement Highlights */}
        <section aria-label="Endorsement highlights" className="mb-10 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {endorsementHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  className={`rounded-2xl border ${item.borderColor} bg-white p-5 sm:p-6 shadow-[0_16px_34px_-28px_rgba(31,41,55,0.65)]`}
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-poppins text-base font-bold text-[#1F2937] mb-1.5">{item.title}</h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Testimonial Cards */}
        {hasVerifiedTestimonials ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7"
            aria-label="Verified testimonials"
          >
            {verifiedTestimonials.map((item) => (
              <motion.article
                key={item.id}
                variants={cardVariants}
                transition={{ duration: 0.45 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="relative rounded-[24px] border border-[#1F2937]/10 bg-white p-6 sm:p-7 shadow-[0_20px_38px_-30px_rgba(31,41,55,0.65)] hover:shadow-[0_26px_46px_-30px_rgba(31,41,55,0.75)] transition-all duration-300 overflow-hidden"
              >
                <Quote
                  className="absolute -right-3 -top-3 w-16 h-16 text-[#7A1730]/8 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-start gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/35 shrink-0 bg-gray-100">
                    <Image
                      src={item.photo}
                      alt={item.photoAlt}
                      fill
                      loading="lazy"
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-poppins font-bold text-sm text-[#1F2937] truncate">{item.name}</h3>
                    <p className="font-inter text-xs text-gray-500">{item.relationship}</p>
                  </div>
                </div>

                <blockquote className="font-inter text-sm text-gray-700 leading-[1.75] italic">
                  "{item.testimonial}"
                </blockquote>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[24px] border border-[#1F2937]/10 bg-white p-7 sm:p-9 text-center shadow-[0_20px_38px_-30px_rgba(31,41,55,0.6)]"
            role="status"
            aria-live="polite"
          >
            <h3 className="font-cinzel text-2xl sm:text-[2rem] font-bold text-[#1F2937] mb-2.5">
              Verified Testimonials Coming Soon
            </h3>
            <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              No verified testimonials are currently published. This section will display approved member endorsements once verification and consent checks are completed.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
