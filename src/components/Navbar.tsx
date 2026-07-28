'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldCheck, PhoneCall } from 'lucide-react';
import { CAMPAIGN_INFO, NAV_ITEMS } from '../constants/campaign';
import { IkejaClubLogo } from './IkejaClubLogo';

interface NavbarProps {
  onOpenVoteModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVoteModal, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveItem(href);
    setMobileMenuOpen(false);

    if (href === '#contact') {
      onOpenContactModal();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 w-full z-[10000] bg-white/95 supports-[backdrop-filter]:bg-white/85 backdrop-blur-md shadow-[0_8px_28px_-20px_rgba(17,24,39,0.35)] py-3 border-b border-gray-100 transition-colors duration-300"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Ikeja Club Logo & Campaign Identity in Header */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-1.5 sm:gap-2.5 group"
              aria-label="Go to homepage"
            >
              <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 shrink-0">
                <IkejaClubLogo size="md" showText={false} />
              </div>
              <span
                aria-hidden="true"
                className="h-7 sm:h-8 w-px rounded-full bg-gradient-to-b from-transparent via-[#D4AF37]/85 to-transparent"
              />
              <div className="relative h-9 sm:h-10 w-[86px] sm:w-[100px] overflow-hidden rounded-lg shrink-0">
                <Image
                  src="/images/branding/campaign-logo.webp"
                  alt="Bamidele campaign logo"
                  fill
                  sizes="(max-width: 768px) 100px, 112px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-gray-50/80 p-1.5 rounded-full border border-gray-200/60 shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = activeItem === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3.5 lg:px-4 py-2 rounded-full font-poppins text-xs font-medium transition-all duration-200 relative will-change-transform ${
                      isActive
                        ? 'text-white bg-[#7A1730] shadow-sm shadow-[#7A1730]/25 font-semibold ring-1 ring-[#D4AF37]/45'
                        : 'text-gray-600 hover:text-[#7A1730] hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-sm'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="p-2.5 rounded-full text-gray-700 hover:text-[#0B6B3A] hover:bg-emerald-50 transition-all duration-200 border border-gray-200 hover:border-[#0B6B3A]/30 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6B3A]/30"
                title="Contact Campaign"
                aria-label="Contact campaign"
              >
                <PhoneCall className="w-4 h-4" />
              </button>

              <a
                href={CAMPAIGN_INFO.contact.social.whatsapp || 'https://wa.me/2348037758413'}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins font-semibold text-xs tracking-wide shadow-md hover:shadow-lg transition-all duration-200 border border-[#D4AF37]/40 active:scale-95 group hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
                aria-label="Vote for Bamidele via WhatsApp"
              >
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                <span>Vote Bamidele</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={CAMPAIGN_INFO.contact.social.whatsapp || 'https://wa.me/2348037758413'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vote via WhatsApp"
                className="px-3 py-1.5 rounded-full bg-[#7A1730] text-white font-poppins text-xs font-semibold shadow-sm border border-[#D4AF37]/35 inline-flex items-center justify-center active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/45"
              >
                Vote
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#7A1730] bg-gray-100/80 hover:bg-gray-200/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-haspopup="dialog"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-white z-[10001] md:hidden p-6 shadow-2xl flex flex-col justify-between border-l border-gray-100 overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-24 overflow-hidden rounded-lg border border-gray-200 bg-white/80 p-1 shadow-sm">
                      <Image
                        src="/images/branding/campaign-logo.webp"
                        alt="Bamidele campaign logo"
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close mobile navigation"
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeItem === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`px-4 py-3 rounded-xl font-poppins text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                          isActive
                            ? 'text-[#7A1730] bg-[#7A1730]/10 border border-[#7A1730]/20'
                            : 'text-gray-700 hover:text-[#7A1730] hover:bg-red-50/50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className={`text-xs ${isActive ? 'text-[#7A1730]/70' : 'text-gray-300'}`}>→</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href={CAMPAIGN_INFO.contact.social.whatsapp || 'https://wa.me/2348037758413'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins font-semibold text-sm shadow-md flex items-center justify-center gap-2 border border-[#D4AF37]/30"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Vote Bamidele Iyiola S.</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
