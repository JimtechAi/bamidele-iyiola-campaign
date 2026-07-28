'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Images,
  X,
  Expand,
} from 'lucide-react';

type GalleryCategory = 'All' | 'Leadership' | 'Community' | 'Business' | 'Events' | 'Campaign';

interface GalleryImage {
  src: string;
  title: string;
  caption: string;
  alt: string;
  category: Exclude<GalleryCategory, 'All'>;
  aspect: 'portrait' | 'landscape' | 'square';
}

const FILTERS: GalleryCategory[] = ['All', 'Leadership', 'Community', 'Business', 'Events', 'Campaign'];

const BLUR_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjM2IiBmaWxsPSIjZWY5ZTFhIi8+PC9zdmc+';

const galleryImages: GalleryImage[] = [
  {
    src: '/images/leadership/leadership1.webp',
    title: 'Executive Engagement',
    caption: 'Leadership discussions focused on strategic direction.',
    alt: 'Bamidele in executive discussion with members',
    category: 'Leadership',
    aspect: 'portrait',
  },
  {
    src: '/images/leadership/leadership2.webp',
    title: 'Leadership Meetings',
    caption: 'Collaborating with stakeholders on shared priorities.',
    alt: 'Bamidele participating in leadership meeting',
    category: 'Leadership',
    aspect: 'landscape',
  },
  {
    src: '/images/gallery/gallery2.webp',
    title: 'Community Interaction',
    caption: 'Engaging members through open conversation and trust.',
    alt: 'Bamidele interacting with community members',
    category: 'Community',
    aspect: 'portrait',
  },
  {
    src: '/images/gallery/gallery4.webp',
    title: 'Club Activities',
    caption: 'Supporting meaningful initiatives for club development.',
    alt: 'Bamidele at club community activity',
    category: 'Community',
    aspect: 'landscape',
  },
  {
    src: '/images/business/business.webp',
    title: 'Business Operations',
    caption: 'Operational discipline that drives accountable leadership.',
    alt: 'Bamidele in business operations setting',
    category: 'Business',
    aspect: 'landscape',
  },
  {
    src: '/images/candidate/bamidele about.webp',
    title: 'Professional Profile',
    caption: 'A strong executive identity grounded in service.',
    alt: 'Professional profile image of Bamidele Iyiola S.',
    category: 'Business',
    aspect: 'portrait',
  },
  {
    src: '/images/gallery/gallery5.webp',
    title: 'Official Functions',
    caption: 'Representing members at formal gatherings and events.',
    alt: 'Bamidele at official club function',
    category: 'Events',
    aspect: 'landscape',
  },
  {
    src: '/images/social/social-preview.webp',
    title: 'Networking Sessions',
    caption: 'Building relationships that strengthen the club community.',
    alt: 'Bamidele in networking session with stakeholders',
    category: 'Events',
    aspect: 'square',
  },
  {
    src: '/images/gallery/gallery1.webp.png',
    title: 'Campaign Outreach',
    caption: 'Campaign moments anchored in practical solutions.',
    alt: 'Campaign outreach moment with Bamidele',
    category: 'Campaign',
    aspect: 'portrait',
  },
  {
    src: '/images/gallery/gallery3.webp',
    title: 'Public Engagement',
    caption: 'Communicating a clear vision for Ikeja Club.',
    alt: 'Bamidele in public campaign engagement',
    category: 'Campaign',
    aspect: 'landscape',
  },
  {
    src: '/images/gallery/gallery6.webp',
    title: 'Shared Commitment',
    caption: 'Working together for a better Ikeja Club.',
    alt: 'Bamidele with members during campaign activity',
    category: 'Campaign',
    aspect: 'portrait',
  },
  {
    src: '/images/leadership/leadership3.webp',
    title: 'Executive Discussion',
    caption: 'Focused conversations around service and accountability.',
    alt: 'Bamidele in executive stakeholder discussion',
    category: 'Leadership',
    aspect: 'square',
  },
];

export const GallerySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  const isLightboxOpen = selectedIndex !== null;

  useEffect(() => {
    if (filteredImages.length === 0) {
      setSelectedIndex(null);
      return;
    }
    setSelectedIndex((previous) => {
      if (previous === null) {
        return previous;
      }
      return Math.min(previous, filteredImages.length - 1);
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
        return;
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((previous) => {
          if (previous === null) {
            return previous;
          }
          return (previous + 1) % filteredImages.length;
        });
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((previous) => {
          if (previous === null) {
            return previous;
          }
          return (previous - 1 + filteredImages.length) % filteredImages.length;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredImages.length, isLightboxOpen]);

  const currentLightboxImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const getAspectClass = (aspect: GalleryImage['aspect']) => {
    if (aspect === 'portrait') {
      return 'aspect-[4/5]';
    }
    if (aspect === 'square') {
      return 'aspect-square';
    }
    return 'aspect-[4/3]';
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const showNext = () => {
    setSelectedIndex((previous) => {
      if (previous === null) {
        return previous;
      }
      return (previous + 1) % filteredImages.length;
    });
  };

  const showPrevious = () => {
    setSelectedIndex((previous) => {
      if (previous === null) {
        return previous;
      }
      return (previous - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  const handleLightboxTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    touchCurrentX.current = touchStartX.current;
  };

  const handleLightboxTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchCurrentX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleLightboxTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) {
      return;
    }

    const delta = touchStartX.current - touchCurrentX.current;
    const threshold = 40;

    if (delta > threshold) {
      showNext();
    } else if (delta < -threshold) {
      showPrevious();
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <section id="gallery" className="section-shell">
      <div className="absolute -top-24 left-[-7%] -z-10 h-[430px] w-[430px] rounded-full bg-gradient-to-br from-[#7A1730]/[0.04] via-[#7A1730]/[0.02] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-[-7%] -z-10 h-[430px] w-[430px] rounded-full bg-gradient-to-tr from-[#0B6B3A]/[0.04] via-[#0B6B3A]/[0.015] to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -z-10 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/[0.035] blur-[145px] pointer-events-none" />

      <div className="section-container">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow bg-[#0B6B3A]/10 border border-[#0B6B3A]/20 text-[#0B6B3A] mb-5"
          >
            <Images className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">CAMPAIGN GALLERY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Moments of Leadership and Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description max-w-2xl mx-auto"
          >
            Every photograph reflects commitment, engagement and a shared vision for a better Ikeja Club.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#7A1730] via-[#D4AF37] to-[#0B6B3A] mx-auto mt-6 rounded-full"
          />
        </motion.header>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12"
          aria-label="Gallery categories"
        >
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedIndex(null);
                }}
                className={`px-4 sm:px-4.5 py-2 rounded-full border text-xs sm:text-sm font-poppins font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7A1730] to-[#5C1023] text-white border-[#7A1730] shadow-[0_10px_22px_-16px_rgba(122,23,48,0.75)]'
                    : 'bg-white/95 text-gray-600 border-gray-200 hover:border-[#D4AF37]/50 hover:text-[#7A1730] hover:-translate-y-0.5'
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <p className="sr-only" aria-live="polite">
          Showing {filteredImages.length} image{filteredImages.length === 1 ? '' : 's'} in {activeFilter} category.
        </p>

        {/* Masonry Gallery */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.article
                key={`${activeFilter}-${item.src}-${index}`}
                layout
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group w-full text-left rounded-[22px] overflow-hidden border border-[#1F2937]/10 bg-white shadow-[0_18px_36px_-30px_rgba(31,41,55,0.58)] hover:shadow-[0_24px_44px_-30px_rgba(31,41,55,0.75)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/30"
                  aria-label={`View full image: ${item.title}`}
                >
                  <div className={`relative overflow-hidden ${getAspectClass(item.aspect)} bg-gray-100`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/22 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-cinzel text-lg font-bold text-white leading-tight">{item.title}</p>
                          <p className="font-inter text-xs sm:text-sm text-gray-100 mt-1 leading-relaxed">{item.caption}</p>
                        </div>
                        <span className="shrink-0 w-9 h-9 rounded-full border border-white/55 bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                          <Expand className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#7A1730]/[0.04] via-white to-[#0B6B3A]/[0.04] px-5 py-6 text-center"
            role="status"
            aria-live="polite"
          >
            <p className="font-cinzel text-xl font-bold text-[#1F2937]">No images in this category yet</p>
            <p className="font-inter text-sm text-gray-600 mt-1.5">Please choose another category to explore more campaign moments.</p>
          </motion.div>
        ) : null}

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && currentLightboxImage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-full w-full max-w-6xl mx-auto flex flex-col justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-black/30">
                  <div
                    className="relative aspect-[16/10] sm:aspect-[16/9] touch-pan-y"
                    onTouchStart={handleLightboxTouchStart}
                    onTouchMove={handleLightboxTouchMove}
                    onTouchEnd={handleLightboxTouchEnd}
                    aria-label="Swipe left or right to navigate"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentLightboxImage.src}
                        initial={{ opacity: 0.18 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.15 }}
                        transition={{ duration: 0.22 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentLightboxImage.src}
                          alt={currentLightboxImage.alt}
                          fill
                          sizes="100vw"
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white">
                  <div>
                    <p className="font-cinzel text-xl font-bold">{currentLightboxImage.title}</p>
                    <p className="font-inter text-sm text-gray-200 mt-1">{currentLightboxImage.caption}</p>
                  </div>
                  <p className="font-poppins text-xs font-semibold tracking-wider uppercase text-gray-300">
                    {selectedIndex! + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};
