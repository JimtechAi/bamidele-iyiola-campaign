'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Users,
  TrendingUp,
  Flag,
  ShieldCheck,
  MapPin,
  Sparkles,
  Award,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Building2,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';

interface LeadershipJourneySectionProps {
  onOpenVisionModal: () => void;
  onOpenVoteModal: () => void;
}

export const LeadershipJourneySection: React.FC<LeadershipJourneySectionProps> = ({
  onOpenVisionModal,
  onOpenVoteModal,
}) => {
  const journeyItems = [
    {
      step: 'STEP 01',
      title: 'Building a Business',
      icon: Briefcase,
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
      borderColor: 'border-[#7A1730]',
      description:
        'Established a successful business in the import and export of phones and gadgets through dedication, professionalism and customer trust.',
      badge: 'Entrepreneurship',
    },
    {
      step: 'STEP 02',
      title: 'Serving the Community',
      icon: Users,
      color: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
      borderColor: 'border-[#0B6B3A]',
      description:
        'Developed strong relationships with people through honesty, accountability and consistent service in Computer Village and Ikeja Club.',
      badge: 'Community Service',
    },
    {
      step: 'STEP 03',
      title: 'Growing Through Experience',
      icon: TrendingUp,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/15',
      borderColor: 'border-[#D4AF37]',
      description:
        'Years of business management have strengthened my planning, organisational, fiscal discipline, and leadership abilities.',
      badge: 'Proven Capability',
    },
    {
      step: 'STEP 04',
      title: 'Ready to Serve Ikeja Club',
      icon: Flag,
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
      borderColor: 'border-[#7A1730]',
      description:
        'Prepared to bring practical leadership, accessibility and commitment to the role of Premises Secretary for Ikeja Club 2026.',
      badge: 'Premises Secretary 2026',
    },
  ];

  const highlightBadges = [
    {
      title: 'Business Leadership',
      desc: 'Decades of entrepreneurial discipline',
      icon: Briefcase,
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
    },
    {
      title: 'Accessibility',
      desc: '5 minutes away at Computer Village',
      icon: MapPin,
      color: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
    },
    {
      title: 'Integrity',
      desc: 'Honest, accountable stewardship',
      icon: ShieldCheck,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/15',
    },
    {
      title: 'Problem Solving',
      desc: 'Prompt action on facility needs',
      icon: Sparkles,
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 left-1/4 -z-10 w-[550px] h-[550px] bg-gradient-to-br from-[#7A1730]/5 via-[#D4AF37]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 w-[550px] h-[550px] bg-gradient-to-tl from-[#0B6B3A]/5 via-emerald-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Abstract Line Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1F2937 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1730]/10 border border-[#7A1730]/20 text-[#7A1730] shadow-2xs mb-4"
          >
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              LEADERSHIP JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] leading-tight tracking-tight mb-4"
          >
            A Journey Built on Integrity, Service and Responsibility
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Strong leadership is built over time through hard work, consistency and a commitment to serving others. My professional journey has equipped me with the practical experience needed to serve Ikeja Club with excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative mb-24">
          {/* Central Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#7A1730] via-[#0B6B3A] to-[#D4AF37] opacity-30 pointer-events-none" />

          {/* Left Line on Mobile */}
          <div className="block lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7A1730] via-[#0B6B3A] to-[#D4AF37] opacity-30 pointer-events-none" />

          <div className="space-y-12 lg:space-y-16">
            {journeyItems.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node Center Point */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center z-10">
                    <div className={`w-8 h-8 rounded-full ${item.bgColor} ${item.color} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Timeline Card Container */}
                  <div className="pl-16 lg:pl-0 w-full lg:w-1/2 lg:px-8">
                    <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                      {/* Top Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.borderColor.replace('border-', 'bg-')}`} />

                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="font-poppins text-xs font-bold uppercase tracking-wider text-[#7A1730]">
                          {item.step}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-poppins font-semibold bg-gray-100 text-gray-700">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-2xl font-bold text-[#1F2937] mb-3 group-hover:text-[#7A1730] transition-colors">
                        {item.title}
                      </h3>

                      <p className="font-inter text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Opposite Side on Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Highlight Panel Feature: Why My Experience Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-red-50/20 to-emerald-50/20 border border-gray-200/80 shadow-xl mb-20 grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          {/* Left Column: Executive Monogram Badge Block */}
          <div className="lg:col-span-5 relative p-8 sm:p-10 bg-gradient-to-br from-[#1F2937] via-[#2A1019] to-[#0A2E1A] text-white flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7A1730] to-[#0B6B3A] border border-[#D4AF37] flex items-center justify-center shadow-lg mb-4">
              <span className="font-cinzel font-extrabold text-2xl text-[#D4AF37] tracking-wider">
                BIS
              </span>
            </div>
            
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#D4AF37] text-[#1F2937] font-poppins font-bold text-xs uppercase tracking-wider mb-2">
              Executive Profile
            </span>
            <h4 className="font-cinzel text-xl font-bold text-white">
              {CAMPAIGN_INFO.candidateName}
            </h4>
            <p className="font-poppins text-xs text-[#E5C358] mt-1">
              Importer & Exporter of Phones & Gadgets
            </p>
          </div>

          {/* Right Column: Why My Experience Matters */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B6B3A]/10 text-[#0B6B3A] font-poppins text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#0B6B3A]" />
              Business & Executive Competence
            </span>

            <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] leading-tight mb-4">
              Why My Experience Matters
            </h3>

            <p className="font-inter text-base text-gray-600 leading-relaxed mb-8">
              Running a successful business requires planning, accountability, financial discipline, communication and timely decision-making. These same qualities are essential for maintaining and improving the facilities of Ikeja Club.
            </p>

            {/* 4 Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlightBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.title}
                    className="p-4 rounded-2xl bg-white/90 border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-3"
                  >
                    <div className={`w-10 h-10 rounded-xl ${badge.bgColor} ${badge.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-poppins font-bold text-sm text-[#1F2937]">
                        {badge.title}
                      </h5>
                      <p className="font-inter text-xs text-gray-600 mt-0.5">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#7A1730] via-[#5C1023] to-[#0B6B3A] text-white shadow-2xl border border-[#D4AF37]/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-2xl relative z-10">
            <span className="inline-block font-poppins text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 px-3 py-1 rounded-md bg-black/20 border border-[#D4AF37]/30">
              Trusted Leadership
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Experience That Inspires Confidence
            </h3>
            <p className="font-inter text-sm sm:text-base text-gray-200 mt-2 leading-relaxed">
              Leadership is demonstrated through action, responsibility and a genuine commitment to serving others.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto relative z-10">
            <button
              type="button"
              onClick={onOpenVisionModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] text-[#1F2937] font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#7A1730]" />
              <span>Read My Vision</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onOpenVoteModal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold text-sm border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Support the Campaign</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
