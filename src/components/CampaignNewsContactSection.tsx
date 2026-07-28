'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquare,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../constants/campaign';
import { IkejaClubLogo } from './IkejaClubLogo';

interface CampaignNewsContactSectionProps {
  onOpenVoteModal: () => void;
}

interface ContactCard {
  title: string;
  value: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
  border: string;
  href?: string;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  form?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const isPlaceholderSocial = (url: string) => {
  const normalized = url.toLowerCase();
  return (
    normalized === 'https://facebook.com' ||
    normalized === 'https://twitter.com' ||
    normalized === 'https://linkedin.com' ||
    normalized === 'https://instagram.com'
  );
};

const validateClient = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  if (!data.fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  } else if (data.fullName.trim().length < 3) {
    errors.fullName = 'Full Name must be at least 3 characters.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone is required.';
  } else if (!/^\+?[0-9\s()-]{7,20}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required.';
  } else if (data.subject.trim().length < 4) {
    errors.subject = 'Subject must be at least 4 characters.';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 15) {
    errors.message = 'Message must be at least 15 characters.';
  }

  return errors;
};

export const CampaignNewsContactSection: React.FC<CampaignNewsContactSectionProps> = ({
  onOpenVoteModal: _onOpenVoteModal,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [serverMessage, setServerMessage] = useState<string>('');
  const [submissionError, setSubmissionError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const contactPhone = CAMPAIGN_INFO.contact?.phonePrimary || '+234 803 775 8413';
  const contactEmail = CAMPAIGN_INFO.contact?.email || 'assorted590@yahoo.com';
  const officeAddress = CAMPAIGN_INFO.campaignOfficeAddress;
  const verifiedOfficeAddress = Boolean(
    officeAddress?.building && officeAddress?.street && officeAddress?.area && officeAddress?.city
  );
  const fullOfficeAddress = verifiedOfficeAddress
    ? `${officeAddress.building}, ${officeAddress.street}, ${officeAddress.area}, ${officeAddress.city}, ${officeAddress.state}`
    : '';
  const whatsappUrl =
    CAMPAIGN_INFO.contact?.social.whatsapp ||
    `https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}`;
  const mapsQuery = verifiedOfficeAddress
    ? encodeURIComponent(fullOfficeAddress)
    : '';

  const faqItems: FaqItem[] = [
    {
      question: 'How quickly does the campaign respond to enquiries?',
      answer:
        'The team aims to acknowledge enquiries promptly and route them to the appropriate campaign contact for follow-up.',
    },
    {
      question: 'Can I schedule a direct meeting with the campaign team?',
      answer:
        'Yes. Use the contact form with your preferred date and purpose, and the campaign office will coordinate availability.',
    },
    {
      question: 'Where is the campaign office located?',
      answer:
        verifiedOfficeAddress
          ? `The campaign office is at ${fullOfficeAddress}.`
          : 'The campaign office address is being verified and will be published once confirmed.',
    },
    {
      question: 'What type of feedback is most helpful?',
      answer:
        'Constructive input on facilities, member experience, and implementation priorities is highly valuable to campaign planning.',
    },
  ];

  const socialLinks = [
    {
      label: 'Facebook',
      href: CAMPAIGN_INFO.contact?.social.facebook || 'https://facebook.com',
      icon: Facebook,
      verified: !isPlaceholderSocial(CAMPAIGN_INFO.contact?.social.facebook || 'https://facebook.com'),
    },
    {
      label: 'Instagram',
      href: CAMPAIGN_INFO.contact?.social.instagram || 'https://instagram.com',
      icon: Instagram,
      verified: !isPlaceholderSocial(CAMPAIGN_INFO.contact?.social.instagram || 'https://instagram.com'),
    },
    {
      label: 'X (Twitter)',
      href: CAMPAIGN_INFO.contact?.social.twitter || 'https://twitter.com',
      icon: Twitter,
      verified: !isPlaceholderSocial(CAMPAIGN_INFO.contact?.social.twitter || 'https://twitter.com'),
    },
    {
      label: 'LinkedIn',
      href: CAMPAIGN_INFO.contact?.social.linkedin || 'https://linkedin.com',
      icon: Linkedin,
      verified: !isPlaceholderSocial(CAMPAIGN_INFO.contact?.social.linkedin || 'https://linkedin.com'),
    },
    {
      label: 'WhatsApp',
      href: CAMPAIGN_INFO.contact?.social.whatsapp || whatsappUrl,
      icon: MessageSquare,
      verified: true,
    },
  ];
  const verifiedSocialLinks = socialLinks.filter((social) => social.verified);

  const footerQuickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: '100-Day Plan', href: '#action-plan' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const contactCards: ContactCard[] = [
    {
      title: 'Phone',
      value: contactPhone,
      subtext: 'Campaign Contact Number',
      icon: Phone,
      color: 'text-[#0B6B3A]',
      bg: 'bg-[#0B6B3A]/10',
      border: 'border-[#0B6B3A]/20',
      href: `tel:${contactPhone}`,
    },
    {
      title: 'WhatsApp',
      value: '+234 803 775 8413',
      subtext: 'Direct Messaging Support',
      icon: MessageCircle,
      color: 'text-[#0B6B3A]',
      bg: 'bg-[#0B6B3A]/10',
      border: 'border-[#0B6B3A]/20',
      href: whatsappUrl,
    },
    {
      title: 'Email',
      value: contactEmail,
      subtext: 'Official Campaign Email',
      icon: Mail,
      color: 'text-[#7A1730]',
      bg: 'bg-[#7A1730]/10',
      border: 'border-[#7A1730]/20',
      href: `mailto:${contactEmail}`,
    },
    {
      title: 'Campaign Office',
      value: verifiedOfficeAddress ? officeAddress.building : 'Address Verification Pending',
      subtext: verifiedOfficeAddress
        ? `${officeAddress.street}, ${officeAddress.area}, ${officeAddress.city}`
        : 'Office details will be published after verification.',
      icon: MapPin,
      color: 'text-[#7A1730]',
      bg: 'bg-[#7A1730]/10',
      border: 'border-[#7A1730]/20',
      href: verifiedOfficeAddress ? `https://maps.google.com/?q=${mapsQuery}` : undefined,
    },
  ];

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: undefined, form: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setServerMessage('');
    setSubmissionError('');
    setIsSubmitted(false);

    const clientErrors = validateClient(formData);
    if (Object.keys(clientErrors).length > 0) {
      setFormErrors(clientErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        setFormErrors(payload?.errors || {});
        setSubmissionError(payload?.message || 'Unable to submit message. Please try again.');
        return;
      }

      setIsSubmitted(true);
      setServerMessage(payload?.message || 'Message sent successfully.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setFormErrors({});
    } catch {
      setSubmissionError('Network error. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFooterNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="news-contact"
      className="section-shell overflow-visible"
    >
      <div className="absolute -top-20 left-[-6%] -z-10 h-[430px] w-[430px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-[-6%] -z-10 h-[430px] w-[430px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/[0.04] via-[#0B6B3A]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -z-10 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/[0.035] blur-[145px] pointer-events-none" />

      <div className="section-container">
        <div id="contact">
          <motion.header
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow bg-[#7A1730]/10 border border-[#7A1730]/20 text-[#7A1730] mb-5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="section-title mb-4"
            >
              Let's Build a Better Ikeja Club Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="section-description max-w-2xl mx-auto"
            >
              Questions, suggestions or support? We'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
            />
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 lg:mb-14">
            <div className="lg:col-span-5 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  const content = (
                    <motion.article
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.07 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      className={`rounded-2xl border ${card.border} bg-white p-5 shadow-[0_16px_34px_-30px_rgba(31,41,55,0.65)] hover:shadow-[0_22px_42px_-30px_rgba(31,41,55,0.72)] transition-all duration-300`}
                    >
                      <div className={`w-11 h-11 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-poppins text-sm font-bold text-[#1F2937] mb-1">{card.title}</h3>
                      <p className="font-poppins text-xs font-semibold text-[#7A1730] leading-relaxed">{card.value}</p>
                      <p className="font-inter text-xs text-gray-500 mt-1.5 leading-relaxed">{card.subtext}</p>
                    </motion.article>
                  );

                  if (!card.href) {
                    return <div key={card.title}>{content}</div>;
                  }

                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      aria-label={card.title}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30 rounded-2xl"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>

              {verifiedOfficeAddress ? (
                <motion.div
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="rounded-[24px] overflow-hidden border border-[#1F2937]/10 shadow-[0_22px_44px_-30px_rgba(31,41,55,0.68)]"
                >
                  <div className="relative h-72 sm:h-80 bg-gray-100">
                    <iframe
                      title="Campaign office map"
                      src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[24px] border border-[#D4AF37]/30 bg-gradient-to-r from-[#7A1730]/[0.04] via-white to-[#0B6B3A]/[0.04] p-5"
                  role="status"
                  aria-live="polite"
                >
                  <h3 className="font-cinzel text-xl font-bold text-[#1F2937] mb-1.5">Office Address Verification Pending</h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    Google Maps will appear automatically once the campaign office address is verified.
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[24px] border border-[#0B6B3A]/25 bg-gradient-to-r from-[#0B6B3A]/10 via-white to-[#0B6B3A]/5 p-5 sm:p-6 shadow-[0_18px_36px_-30px_rgba(6,74,39,0.65)]"
              >
                <h3 className="font-cinzel text-2xl font-bold text-[#1F2937] mb-2">Chat with the Campaign</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4">
                  Send a direct WhatsApp message for quick responses from the campaign team.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B6B3A] hover:bg-[#064A27] text-white font-poppins text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6B3A]/40"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Message on WhatsApp</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex items-center flex-wrap gap-3"
                aria-label="Verified campaign social links"
              >
                {verifiedSocialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-600 hover:text-[#7A1730] hover:border-[#7A1730]/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
                {verifiedSocialLinks.length === 0 ? (
                  <p className="font-inter text-sm text-gray-500">Verified social links will be displayed once available.</p>
                ) : null}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 rounded-[24px] border border-[#1F2937]/10 bg-white p-6 sm:p-8 shadow-[0_22px_42px_-32px_rgba(31,41,55,0.72)]"
            >
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2937] mb-2">Send a Message</h3>
              <p className="font-inter text-sm text-gray-600 mb-6">
                Your feedback and support are valuable. Complete the form below and we will respond professionally.
              </p>

              {submissionError ? (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3.5 flex items-start gap-2.5" role="alert">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="font-inter text-sm text-red-700">{submissionError}</p>
                </div>
              ) : null}

              {serverMessage ? (
                <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5" role="status" aria-live="polite">
                  <p className="font-inter text-sm text-emerald-700">{serverMessage}</p>
                </div>
              ) : null}

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0B6B3A] text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="font-poppins text-base font-bold text-[#1F2937] mb-1.5">Message Received</h4>
                  <p className="font-inter text-sm text-gray-600 mb-4">
                    Thank you. Your message has been received and redirected to the campaign WhatsApp line.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#0B6B3A] text-white font-poppins text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Contact campaign form">
                  <div>
                    <label htmlFor="fullName" className="block font-poppins text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.fullName)}
                      aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1730] transition-all shadow-sm"
                    />
                    {formErrors.fullName ? (
                      <p id="fullName-error" className="mt-1.5 font-inter text-xs text-red-600">{formErrors.fullName}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-poppins text-xs font-semibold text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1730] transition-all shadow-sm"
                    />
                    {formErrors.email ? (
                      <p id="email-error" className="mt-1.5 font-inter text-xs text-red-600">{formErrors.email}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-poppins text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.phone)}
                      aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1730] transition-all shadow-sm"
                    />
                    {formErrors.phone ? (
                      <p id="phone-error" className="mt-1.5 font-inter text-xs text-red-600">{formErrors.phone}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-poppins text-xs font-semibold text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.subject)}
                      aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1730] transition-all shadow-sm"
                    />
                    {formErrors.subject ? (
                      <p id="subject-error" className="mt-1.5 font-inter text-xs text-red-600">{formErrors.subject}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-poppins text-xs font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1730] transition-all shadow-sm resize-none"
                    />
                    {formErrors.message ? (
                      <p id="message-error" className="mt-1.5 font-inter text-xs text-red-600">{formErrors.message}</p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins font-semibold text-sm border border-[#D4AF37]/35 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D4AF37]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <section aria-label="Contact FAQs" className="mb-10 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[24px] border border-[#1F2937]/10 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_20px_40px_-32px_rgba(31,41,55,0.68)]"
            >
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1F2937] mb-2">Frequently Asked Questions</h3>
              <p className="font-inter text-sm text-gray-600 mb-5">Helpful details about campaign communications and office access.</p>

              <div className="space-y-3">
                {faqItems.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.question} className="rounded-xl border border-gray-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        id={`faq-trigger-${index}`}
                      >
                        <span className="font-poppins text-sm font-semibold text-[#1F2937] pr-3">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-[#7A1730] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 sm:px-5 pb-4 pt-1 font-inter text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#D4AF37]/25 bg-[#7A1730] text-white"
            aria-label="Campaign footer"
          >
            <div className="absolute inset-0 pointer-events-none opacity-70" />
            <div className="relative bg-gradient-to-br from-[#7A1730] via-[#5C1023] to-[#4C0D1D]">
              <div className="absolute -top-20 left-[-8%] h-[260px] w-[260px] rounded-full bg-[#0B6B3A]/20 blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-16 right-[-6%] h-[240px] w-[240px] rounded-full bg-[#D4AF37]/20 blur-[90px] pointer-events-none" />

              <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4" aria-label="Footer campaign branding">
                      <div className="relative h-11 sm:h-12 w-28 sm:w-32 overflow-hidden rounded-lg border border-white/20 bg-white/10 p-1.5">
                        <Image
                          src="/images/branding/campaign-logo.webp"
                          alt="Bamidele campaign logo"
                          fill
                          sizes="(max-width: 640px) 112px, 128px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="font-inter text-sm text-white/85 leading-relaxed max-w-xs">
                      Preserving, maintaining, and improving Ikeja Club through responsible leadership, transparent execution, and consistent service delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-poppins text-sm font-bold uppercase tracking-widest text-[#F4D98B] mb-4">Quick Links</h3>
                    <nav className="space-y-2.5" aria-label="Footer quick links">
                      {footerQuickLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(event) => handleFooterNavClick(event, link.href)}
                          className="block w-fit font-inter text-sm text-white/85 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
                        >
                          <span className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 hover:after:w-full after:bg-[#D4AF37] after:transition-all after:duration-300">
                            {link.label}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div>
                    <h3 className="font-poppins text-sm font-bold uppercase tracking-widest text-[#F4D98B] mb-4">Campaign Office</h3>
                    <div className="space-y-2.5 font-inter text-sm text-white/85 leading-relaxed">
                      <p className="inline-flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{verifiedOfficeAddress ? fullOfficeAddress : 'Campaign office address verification pending.'}</span>
                      </p>
                      <a
                        href={`tel:${contactPhone}`}
                        className="inline-flex items-center gap-2 text-white hover:text-[#F4D98B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                      >
                        <Phone className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                        <span className="font-poppins text-xs">{contactPhone}</span>
                      </a>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="block w-fit inline-flex items-center gap-2 text-white hover:text-[#F4D98B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                      >
                        <Mail className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                        <span className="font-poppins text-xs">{contactEmail}</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-fit inline-flex items-center gap-2 text-white hover:text-[#F4D98B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                      >
                        <MessageSquare className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                        <span className="font-poppins text-xs">WhatsApp Campaign Line</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins text-sm font-bold uppercase tracking-widest text-[#F4D98B] mb-4">Connect With Us</h3>
                    <div className="flex items-center flex-wrap gap-3" role="list" aria-label="Footer social links">
                      {verifiedSocialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            role="listitem"
                            className="w-10 h-10 rounded-full border border-white/30 bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#5C1023] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        );
                      })}
                    </div>
                    {verifiedSocialLinks.length === 0 ? (
                      <p className="mt-3 font-inter text-xs text-white/80">Verified social channels will appear once published.</p>
                    ) : null}
                    <a
                      href="https://instagram.com/assorted_phone_and_gadgets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 font-poppins text-xs text-white/85 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                      aria-label="Instagram handle assorted phone and gadget"
                    >
                      @assorted_phone_and_gadgets
                    </a>

                    <a
                      href="#home"
                      onClick={(event) => {
                        event.preventDefault();
                        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        document.documentElement.scrollTop = 0;
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/45 bg-white/10 hover:bg-[#D4AF37] hover:text-[#5C1023] text-white font-poppins text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      aria-label="Back to top"
                    >
                      <span>Back to Top</span>
                    </a>
                  </div>
                </div>

                <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/85 to-transparent" aria-hidden="true" />
                <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <p className="font-poppins text-xs text-white/80">
                    © 2026 Bamidele Iyiola S. (ASSORTED). All Rights Reserved.
                  </p>
                  <p className="font-poppins text-xs text-white/70">
                    Designed & Developed by Gbenga Ogunsanwi of JimTech AI.
                  </p>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </section>
  );
};
