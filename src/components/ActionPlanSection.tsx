'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Users,
  RefreshCw,
  Wrench,
  ClipboardList,
  Ear,
  Hammer,
  ArrowUpRight,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';

interface ActionPlanSectionProps {
  onOpenVoteModal: () => void;
  onOpenContactModal: () => void;
}

interface TimelineMilestone {
  period: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeTone: string;
  iconTone: string;
  borderTone: string;
  points: string[];
}

interface PrincipleCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface MetricCard {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const AnimatedMetric: React.FC<{ value: number; suffix?: string; ariaLabel: string }> = ({
  value,
  suffix = '',
  ariaLabel,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime = 0;
    const duration = 900;

    const animate = (timestamp: number) => {
      if (startTime === 0) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = Math.round(value * progress);
      setDisplayValue(nextValue);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [value]);

  return (
    <span aria-label={ariaLabel}>
      {displayValue}
      {suffix}
    </span>
  );
};

export const ActionPlanSection: React.FC<ActionPlanSectionProps> = ({
  onOpenVoteModal,
  onOpenContactModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const timelinePhases: TimelineMilestone[] = [
    {
      period: 'Days 1-30',
      title: 'Listen & Assess',
      icon: Ear,
      badgeTone: 'bg-[#7A1730]/10',
      iconTone: 'text-[#7A1730]',
      borderTone: 'border-[#7A1730]/20',
      points: [
        'Facility walkthrough and condition baseline',
        'Member and committee listening sessions',
        'Issue prioritisation by impact and urgency',
      ],
    },
    {
      period: 'Days 31-60',
      title: 'Plan & Align',
      icon: ClipboardList,
      badgeTone: 'bg-[#0B6B3A]/10',
      iconTone: 'text-[#0B6B3A]',
      borderTone: 'border-[#0B6B3A]/20',
      points: [
        'Publish execution calendar and ownership',
        'Define standards for cleanliness and upkeep',
        'Sequence quick wins and medium-term items',
      ],
    },
    {
      period: 'Days 61-90',
      title: 'Execute & Improve',
      icon: Hammer,
      badgeTone: 'bg-[#D4AF37]/14',
      iconTone: 'text-[#8F7314]',
      borderTone: 'border-[#D4AF37]/30',
      points: [
        'Deliver maintenance and beautification actions',
        'Improve high-traffic shared spaces',
        'Track delivery against agreed milestones',
      ],
    },
    {
      period: 'Days 91-100',
      title: 'Review & Report',
      icon: RefreshCw,
      badgeTone: 'bg-[#7A1730]/10',
      iconTone: 'text-[#7A1730]',
      borderTone: 'border-[#7A1730]/20',
      points: [
        'Conduct performance review and lessons learned',
        'Share delivered actions and pending items',
        'Publish next-cycle improvement priorities',
      ],
    },
  ];

  const keyPrinciples: PrincipleCard[] = [
    {
      title: 'Transparency',
      icon: ShieldCheck,
      description: 'Clear communication of actions, timelines, and progress updates.',
      color: 'text-[#7A1730]',
      bgColor: 'bg-[#7A1730]/10',
      borderColor: 'border-[#7A1730]/20',
    },
    {
      title: 'Accountability',
      icon: ClipboardList,
      description: 'Defined ownership and review points for each implementation phase.',
      color: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
      borderColor: 'border-[#0B6B3A]/20',
    },
    {
      title: 'Collaboration',
      icon: Users,
      description: 'Member input and stakeholder alignment guide practical decisions.',
      color: 'text-[#8F7314]',
      bgColor: 'bg-[#D4AF37]/12',
      borderColor: 'border-[#D4AF37]/30',
    },
    {
      title: 'Continuous Improvement',
      icon: Handshake,
      description: 'Each cycle is reviewed to improve standards and delivery quality.',
      color: 'text-[#0B6B3A]',
      bgColor: 'bg-[#0B6B3A]/10',
      borderColor: 'border-[#0B6B3A]/20',
    },
  ];

  const successMetrics: MetricCard[] = [
    {
      value: 4,
      label: 'Weekly Progress Reviews',
      description: 'Structured checkpoints across each implementation cycle.',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Action Ownership Defined',
      description: 'Every task mapped to clear responsibility and due windows.',
    },
    {
      value: 3,
      label: 'Feedback Loops per Phase',
      description: 'Input captured before, during, and after execution.',
    },
    {
      value: 1,
      label: 'Transparent Implementation Log',
      description: 'Single source of truth for progress visibility and review.',
    },
  ];

  return (
    <section
      id="action-plan"
      className="section-shell"
    >
      {/* Subtle Background Accents */}
      <div className="absolute -top-24 left-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/[0.04] via-[#0B6B3A]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -z-10 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/[0.035] blur-[145px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow bg-[#7A1730]/10 border border-[#7A1730]/20 text-[#7A1730] mb-5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              100-DAY ACTION PLAN
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-5"
          >
            Premium 100-Day Executive Implementation Roadmap
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description max-w-3xl mx-auto"
          >
            A disciplined, time-bound execution model focused on process quality, operational standards, and transparent delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </motion.header>

        {/* Four Phase Cards */}
        <section className="mb-12 sm:mb-14 lg:mb-16" aria-label="100-day phase cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6" role="list">
            {timelinePhases.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.article
                  key={milestone.period}
                  role="listitem"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: index * 0.07 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className={`rounded-[24px] border ${milestone.borderTone} bg-white p-5 sm:p-6 shadow-[0_20px_36px_-30px_rgba(31,41,55,0.62)] hover:shadow-[0_26px_44px_-30px_rgba(31,41,55,0.72)] transition-all duration-300`}
                  aria-label={`${milestone.period}: ${milestone.title}`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-poppins font-bold tracking-wider uppercase ${milestone.badgeTone} ${milestone.iconTone}`}>
                      {milestone.period}
                    </span>
                    <div className={`w-9 h-9 rounded-lg ${milestone.badgeTone} flex items-center justify-center`}>
                      <Icon className={`w-4.5 h-4.5 ${milestone.iconTone}`} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-cinzel text-[1.35rem] font-bold text-[#1F2937] mb-3">{milestone.title}</h3>

                  <ul className="space-y-2" aria-label={`${milestone.title} actions`}>
                    {milestone.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 font-inter text-sm text-gray-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Responsive Progress Timeline */}
        <section className="mb-12 sm:mb-14 lg:mb-16" aria-label="Implementation progress timeline">
          <div className="rounded-[24px] border border-[#1F2937]/10 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_18px_36px_-30px_rgba(31,41,55,0.55)]">
            <h3 className="font-cinzel text-2xl sm:text-[2rem] font-bold text-[#1F2937] mb-5">Progress Timeline</h3>

            <div className="hidden md:grid grid-cols-4 gap-4" role="list">
              {timelinePhases.map((phase, index) => {
                const Icon = phase.icon;
                const isLast = index === timelinePhases.length - 1;
                return (
                  <motion.div
                    key={`desktop-${phase.period}`}
                    role="listitem"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: index * 0.07 }}
                    className="relative"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-[#7A1730] via-[#7A1730] to-[#0B6B3A] border border-[#D4AF37]/45 shadow-sm">
                      <Icon className="w-4.5 h-4.5 text-[#D4AF37]" aria-hidden="true" />
                    </div>
                    {!isLast ? (
                      <span className="absolute top-5 left-12 right-[-1rem] h-px bg-gradient-to-r from-[#7A1730]/45 via-[#D4AF37]/40 to-[#0B6B3A]/45" aria-hidden="true" />
                    ) : null}
                    <p className="mt-2.5 font-poppins text-[11px] font-bold tracking-wider uppercase text-[#7A1730]">{phase.period}</p>
                    <p className="mt-1 font-inter text-sm text-gray-700 font-medium">{phase.title}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="md:hidden space-y-3.5" role="list">
              {timelinePhases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={`mobile-${phase.period}`}
                    role="listitem"
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.34, delay: index * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#7A1730] to-[#0B6B3A] border border-[#D4AF37]/45 shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-poppins text-[11px] font-bold tracking-wider uppercase text-[#7A1730]">{phase.period}</p>
                      <p className="font-inter text-sm font-medium text-[#1F2937]">{phase.title}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="mb-14 sm:mb-16" aria-label="Implementation principles">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2937]">Key Principles</h3>
            <p className="font-inter text-sm text-gray-600 mt-2">The executive values guiding each phase of implementation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                tabIndex={0}
                aria-label={`${principle.title}: ${principle.description}`}
                className={`p-5 sm:p-6 rounded-2xl bg-white border ${principle.borderColor} shadow-[0_18px_36px_-30px_rgba(31,41,55,0.6)] hover:shadow-[0_24px_44px_-30px_rgba(31,41,55,0.75)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30`}
              >
                <div className={`w-11 h-11 rounded-xl ${principle.bgColor} ${principle.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-base text-[#1F2937] mb-1.5">
                    {principle.title}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-14 sm:mb-16" aria-label="Success metrics">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2937]">Success Metrics</h3>
            <p className="font-inter text-sm text-gray-600 mt-2">Process indicators that track delivery quality, not campaign promises.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {successMetrics.map((metric, idx) => (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-[#D4AF37]/25 bg-white p-6 shadow-[0_18px_36px_-30px_rgba(31,41,55,0.58)]"
                aria-label={`${metric.label}: ${metric.description}`}
              >
                <p className="font-cinzel text-[2rem] font-bold text-[#1F2937] leading-none mb-2">
                  <AnimatedMetric
                    value={metric.value}
                    suffix={metric.suffix}
                    ariaLabel={`${metric.value}${metric.suffix ?? ''}`}
                  />
                </p>
                <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#7A1730] mb-1.5">
                  {metric.label}
                </p>
                <p className="font-inter text-sm text-gray-600">{metric.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[24px] p-8 sm:p-10 overflow-hidden bg-gradient-to-r from-[#0B6B3A] via-[#064A27] to-[#7A1730] text-white shadow-[0_28px_50px_-34px_rgba(6,74,39,0.9)] border border-emerald-300/30 flex flex-col lg:flex-row items-center justify-between gap-7 text-center lg:text-left"
        >
          <div className="max-w-2xl relative z-10">
            <span className="inline-block font-poppins text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 px-3 py-1 rounded-md bg-black/20 border border-[#D4AF37]/30">
              Commitment to Action
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Structured Delivery, Measurable Results
            </h3>
            <p className="font-inter text-sm sm:text-base text-emerald-100 mt-2 leading-relaxed">
              Every phase of the first 100 days is designed to preserve, maintain and improve Ikeja Club with clarity and accountability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto relative z-10">
            <button
              type="button"
              onClick={onOpenVoteModal}
              aria-label="Support the vision"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] text-[#1F2937] font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4 text-[#7A1730]" />
              <span>Support the Vision</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onOpenContactModal}
              aria-label="Contact the campaign"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold text-sm border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Contact the Campaign</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
