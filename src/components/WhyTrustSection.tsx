import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Briefcase,
  ShieldCheck,
  Eye,
  Sparkles,
  Zap,
  ArrowRight,
  Award,
} from 'lucide-react';

interface WhyTrustSectionProps {
  onOpenVisionModal: () => void;
  onOpenVoteModal: () => void;
}

export const WhyTrustSection: React.FC<WhyTrustSectionProps> = ({
  onOpenVisionModal,
  onOpenVoteModal,
}) => {
  const cards = [
    {
      icon: MapPin,
      title: 'Accessibility',
      description:
        'My campaign office at Ikeja Club Plaza (23 Obafemi Awolowo Way) and business office at Computer Village ensure immediate accessibility whenever facility issues arise.',
      accentColor: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
      borderColor: 'group-hover:border-[#7A1730]/40',
      badge: 'Location Advantage',
    },
    {
      icon: Briefcase,
      title: 'Business Experience',
      description:
        'Years of running a successful business have strengthened my skills in organisation, accountability and problem-solving.',
      accentColor: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
      borderColor: 'group-hover:border-[#0B6B3A]/40',
      badge: 'Proven Leadership',
    },
    {
      icon: ShieldCheck,
      title: 'Commitment',
      description:
        'I am committed to preserving and improving the beauty and functionality of our great club.',
      accentColor: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/15',
      borderColor: 'group-hover:border-[#D4AF37]/50',
      badge: 'Unwavering Duty',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'Every decision will be guided by honesty, fairness and the interests of our members.',
      accentColor: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
      borderColor: 'group-hover:border-[#7A1730]/40',
      badge: 'Accountable Governance',
    },
    {
      icon: Sparkles,
      title: 'Beautification',
      description:
        'I will support continuous landscaping, cleaner surroundings and well-maintained recreational spaces.',
      accentColor: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
      borderColor: 'group-hover:border-[#0B6B3A]/40',
      badge: 'Premises Upgrade',
    },
    {
      icon: Zap,
      title: 'Responsiveness',
      description:
        'Issues affecting our club premises deserve timely attention. My proximity to the club allows for faster communication and action.',
      accentColor: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/15',
      borderColor: 'group-hover:border-[#D4AF37]/50',
      badge: 'Prompt Action',
    },
  ];

  return (
    <section
      id="why-trust"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 right-0 -z-10 w-[500px] h-[500px] bg-gradient-to-l from-[#7A1730]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -z-10 w-[500px] h-[500px] bg-gradient-to-r from-[#0B6B3A]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Pattern Grid */}
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
              Why Members Can Trust Bamidele
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] leading-tight tracking-tight mb-4"
          >
            A Practical Leader Ready to Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-poppins text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Leadership is not only about promises. It is about availability, responsibility and delivering results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${card.borderColor}`}
              >
                {/* Accent Top Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7A1730]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${card.bgColor} ${card.accentColor} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-poppins text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600 uppercase group-hover:bg-[#7A1730] group-hover:text-white transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-cinzel text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#7A1730] transition-colors">
                    {card.title}
                  </h3>

                  {/* Supporting Text */}
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Card Footer Decorative Bar */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-poppins text-gray-400 group-hover:text-[#0B6B3A] transition-colors">
                  <span className="font-medium">Ikeja Club Standard</span>
                  <span className="font-bold">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#7A1730] via-[#5C1023] to-[#0B6B3A] text-white shadow-2xl border border-[#D4AF37]/30 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Decorative Aura inside banner */}
          <div className="absolute top-0 right-0 -z-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left max-w-2xl">
            <span className="inline-block font-poppins text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 px-3 py-1 rounded-md bg-black/20 border border-[#D4AF37]/30">
              Shared Vision for 2026
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Together We Can Build a Better Ikeja Club
            </h3>
            <p className="font-inter text-sm sm:text-base text-gray-200 mt-2">
              Preserving beauty, maintaining standards, and ensuring prompt action for every member.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={onOpenVisionModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] text-[#1F2937] font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#7A1730]" />
              <span>View My Vision</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onOpenVoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold text-sm border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Pledge Vote</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
