'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  Users,
  MessageSquareHeart,
  PhoneCall,
  ShieldCheck,
  Handshake,
  Briefcase,
  Award,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface CommunityEngagementSectionProps {
  onOpenVisionModal: () => void;
  onOpenContactModal: () => void;
}

interface SupportingPhoto {
  src: string;
  alt: string;
  caption: string;
  category: string;
  spanClass?: string;
}

interface ImpactItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
  border: string;
}

const SupportingPhotoCard: React.FC<{
  photo: SupportingPhoto;
  index: number;
}> = ({ photo, index }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#1F2937]/10 shadow-[0_18px_36px_-30px_rgba(31,41,55,0.58)] ${photo.spanClass ?? ''}`}
    >
      <div className="relative h-full min-h-[170px] sm:min-h-[190px]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2.5 left-2.5 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 backdrop-blur-sm">
          <span className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-white">
            {photo.category}
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-3">
          <figcaption className="font-poppins text-[11px] sm:text-xs font-medium text-white leading-snug">
            {photo.caption}
          </figcaption>
        </div>
      </div>
    </motion.figure>
  );
};

const ImpactCard: React.FC<{
  item: ImpactItem;
  index: number;
}> = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      tabIndex={0}
      aria-label={`${item.title}: ${item.description}`}
      className={`rounded-2xl border ${item.border} bg-white p-6 shadow-[0_18px_36px_-30px_rgba(31,41,55,0.62)] hover:shadow-[0_24px_44px_-30px_rgba(31,41,55,0.75)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30`}
    >
      <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3 className="font-poppins text-lg font-bold text-[#1F2937] mb-1.5">{item.title}</h3>
      <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.description}</p>
    </motion.article>
  );
};

export const CommunityEngagementSection: React.FC<CommunityEngagementSectionProps> = ({
  onOpenVisionModal,
  onOpenContactModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const supportingPhotos: SupportingPhoto[] = [
    {
      src: '/images/leadership/leadership2.webp',
      alt: 'Bamidele in leadership meeting with members',
      caption: 'Listening to member perspectives and aligning practical action points.',
      category: 'Leadership Moments',
    },
    {
      src: '/images/gallery/gallery2.webp',
      alt: 'Bamidele supporting a club community initiative',
      caption: 'Supporting initiatives that strengthen unity and shared ownership.',
      category: 'Community Service',
    },
    {
      src: '/images/leadership/leadership3.webp',
      alt: 'Bamidele engaging stakeholders in discussion',
      caption: 'Engaging stakeholders to coordinate delivery with accountability.',
      category: 'Leadership Moments',
    },
    {
      src: '/images/gallery/gallery4.webp',
      alt: 'Bamidele and members collaborating at club event',
      caption: 'Working with members to build sustainable improvements.',
      category: 'Community Service',
    },
    {
      src: '/images/gallery/gallery6.webp',
      alt: 'Bamidele in networking and business interactions',
      caption: 'Professional engagement anchored on trust, discipline, and service.',
      category: 'Professional Engagement',
    },
  ];

  const galleryCategories = ['Leadership Moments', 'Community Service', 'Professional Engagement'];

  const impactCards: ImpactItem[] = [
    {
      title: 'Member Engagement',
      description: 'Active listening, inclusive dialogue, and responsive follow-through for member concerns.',
      icon: MessageSquareHeart,
      color: 'text-[#7A1730]',
      bg: 'bg-[#7A1730]/10',
      border: 'border-[#7A1730]/20',
    },
    {
      title: 'Leadership',
      description: 'Steady, service-driven direction grounded in responsibility, integrity, and clarity.',
      icon: ShieldCheck,
      color: 'text-[#0B6B3A]',
      bg: 'bg-[#0B6B3A]/10',
      border: 'border-[#0B6B3A]/20',
    },
    {
      title: 'Professional Excellence',
      description: 'Operational discipline and standards-focused execution across priorities.',
      icon: Briefcase,
      color: 'text-[#8F7314]',
      bg: 'bg-[#D4AF37]/12',
      border: 'border-[#D4AF37]/30',
    },
    {
      title: 'Community Commitment',
      description: 'Consistent presence and collaboration that supports long-term community value.',
      icon: Users,
      color: 'text-[#0B6B3A]',
      bg: 'bg-[#0B6B3A]/10',
      border: 'border-[#0B6B3A]/20',
    },
  ];

  const qualitativeHighlights = [
    'Member conversations are translated into clear implementation priorities.',
    'Leadership presence remains visible during planning, execution, and review.',
    'Cross-functional collaboration strengthens delivery quality and consistency.',
    'Professional conduct and transparent communication sustain member trust.',
  ];

  return (
    <section
      id="community"
      className="section-shell"
    >
      {/* Subtle Background Accents */}
      <div className="absolute -top-20 left-[-6%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[115px] pointer-events-none" />
      <div className="absolute -bottom-20 right-[-7%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/[0.04] via-[#0B6B3A]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -z-10 h-[540px] w-[540px] rounded-full bg-[#D4AF37]/[0.035] blur-[140px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow bg-[#0B6B3A]/10 border border-[#0B6B3A]/20 text-[#0B6B3A] mb-5"
          >
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              COMMUNITY IMPACT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Leadership Through Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description max-w-2xl mx-auto"
          >
            Leadership is demonstrated through action, collaboration and commitment to the people we serve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </motion.header>

        {/* Featured Story + Category Gallery */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-14 sm:mb-16 lg:mb-20" aria-label="Community leadership gallery">
          <motion.figure
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-[24px] overflow-hidden border border-[#1F2937]/10 shadow-[0_26px_50px_-36px_rgba(31,41,55,0.75)] bg-white group"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src="/images/leadership/leadership1.webp"
                alt="Bamidele Iyiola S. engaging with Ikeja Club members"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-4 sm:p-5">
                <figcaption className="font-poppins text-xs sm:text-sm font-medium text-white leading-relaxed">
                  Featured Story: listening directly to members, clarifying needs, and aligning next-step action.
                </figcaption>
              </div>
            </div>
          </motion.figure>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1730]/10 text-[#7A1730] border border-[#7A1730]/20 font-poppins text-[11px] font-semibold uppercase tracking-widest mb-3">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                Featured Leadership Story
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2937] leading-tight mb-3">
                Authentic Presence, Meaningful Engagement
              </h3>
              <p className="font-inter text-sm sm:text-base text-gray-600 leading-[1.78] max-w-[40rem]">
                Leadership impact is built through consistent presence, active listening, and accountable collaboration. These moments reflect practical service across member interactions, community initiatives, and professional coordination.
              </p>
            </motion.div>

            <div className="space-y-5" aria-label="Leadership gallery categories">
              {galleryCategories.map((category) => {
                const categoryPhotos = supportingPhotos.filter((photo) => photo.category === category);
                return (
                  <section key={category} aria-label={category}>
                    <h4 className="font-poppins text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A1730] mb-2.5">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categoryPhotos.map((photo, index) => (
                        <SupportingPhotoCard key={`${category}-${photo.src}`} photo={photo} index={index} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Cards */}
        <section aria-label="Community leadership impact" className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2937]">Community & Leadership Impact</h3>
            <p className="font-inter text-sm text-gray-600 mt-2">Evidence of service-driven leadership rooted in engagement, professional standards, and long-term commitment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {impactCards.map((item, index) => (
              <ImpactCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* Qualitative Highlights */}
        <motion.section
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-label="Qualitative highlights"
          className="mb-10 rounded-[24px] border border-[#D4AF37]/30 bg-gradient-to-r from-[#7A1730]/[0.04] via-white to-[#0B6B3A]/[0.04] p-5 sm:p-6 lg:p-7"
        >
          <div className="flex items-center gap-2 mb-3.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1F2937]">Qualitative Highlights</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
            {qualitativeHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-xl border border-[#1F2937]/10 bg-white/85 p-3.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B6B3A] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="font-inter text-sm text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Section Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={onOpenVisionModal}
            aria-label="Open vision details"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins font-semibold text-sm border border-[#D4AF37]/35 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Read My Vision</span>
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenContactModal}
            aria-label="Contact campaign team"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#1F2937] hover:bg-gray-50 font-poppins font-semibold text-sm border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#0B6B3A]" />
            <span>Contact the Campaign</span>
          </button>
        </div>
      </div>
    </section>
  );
};
