'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FloatingActions } from './components/FloatingActions';

const SectionSkeleton = () => (
  <div className="section-shell">
    <div className="section-container">
      <div className="h-6 w-44 rounded bg-gray-200 animate-pulse mb-4" />
      <div className="h-10 w-2/3 rounded bg-gray-200 animate-pulse mb-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-40 rounded-2xl bg-gray-200 animate-pulse" />
        <div className="h-40 rounded-2xl bg-gray-200 animate-pulse" />
        <div className="h-40 rounded-2xl bg-gray-200 animate-pulse" />
      </div>
    </div>
  </div>
);

const AboutSection = dynamic(
  () => import('./components/AboutSection').then((module) => module.AboutSection),
  { loading: () => <SectionSkeleton /> }
);
const VisionManifestoSection = dynamic(
  () => import('./components/VisionManifestoSection').then((module) => module.VisionManifestoSection),
  { loading: () => <SectionSkeleton /> }
);
const ActionPlanSection = dynamic(
  () => import('./components/ActionPlanSection').then((module) => module.ActionPlanSection),
  { loading: () => <SectionSkeleton /> }
);
const CommunityEngagementSection = dynamic(
  () => import('./components/CommunityEngagementSection').then((module) => module.CommunityEngagementSection),
  { loading: () => <SectionSkeleton /> }
);
const GallerySection = dynamic(
  () => import('./components/GallerySection').then((module) => module.GallerySection),
  { loading: () => <SectionSkeleton /> }
);
const TestimonialsSection = dynamic(
  () => import('./components/TestimonialsSection').then((module) => module.TestimonialsSection),
  { loading: () => <SectionSkeleton /> }
);
const CampaignNewsContactSection = dynamic(
  () => import('./components/CampaignNewsContactSection').then((module) => module.CampaignNewsContactSection),
  { loading: () => <SectionSkeleton /> }
);

const VisionModal = dynamic(
  () => import('./components/VisionModal').then((module) => module.VisionModal),
  { ssr: false }
);
const ContactModal = dynamic(
  () => import('./components/ContactModal').then((module) => module.ContactModal),
  { ssr: false }
);
const VoteModal = dynamic(
  () => import('./components/VoteModal').then((module) => module.VoteModal),
  { ssr: false }
);

export default function App() {
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1F2937] font-inter selection:bg-[#7A1730] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenVoteModal={() => setIsVoteModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection
          onOpenVisionModal={() => setIsVisionModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenVoteModal={() => setIsVoteModalOpen(true)}
        />
        <AboutSection
          onOpenVisionModal={() => setIsVisionModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
        <VisionManifestoSection
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenVoteModal={() => setIsVoteModalOpen(true)}
        />
        <ActionPlanSection
          onOpenVoteModal={() => setIsVoteModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
        <CommunityEngagementSection
          onOpenVisionModal={() => setIsVisionModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
        <GallerySection />
        <TestimonialsSection
          onOpenVoteModal={() => setIsVoteModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
        <CampaignNewsContactSection
          onOpenVoteModal={() => setIsVoteModalOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <VisionModal
        isOpen={isVisionModalOpen}
        onClose={() => setIsVisionModalOpen(false)}
        onOpenVoteModal={() => setIsVoteModalOpen(true)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <VoteModal
        isOpen={isVoteModalOpen}
        onClose={() => setIsVoteModalOpen(false)}
      />

      {/* Persistent Floating Action Buttons (WhatsApp & Back to Top) */}
      <FloatingActions />
    </div>
  );
}
