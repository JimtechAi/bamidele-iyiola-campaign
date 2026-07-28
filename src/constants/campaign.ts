import { CampaignInfo, NavItem } from '../types';

export const CAMPAIGN_INFO: CampaignInfo = {
  candidateName: 'Bamidele Iyiola S.',
  nickname: 'ASSORTED',
  position: 'Premises Secretary',
  organization: 'Ikeja Club',
  electionYear: '2026',
  theme: {
    leadership: 'Leadership',
    commitment: 'Commitment',
    continuity: 'Continuity',
  },
  missionStatement:
    'To preserve, maintain and improve the beauty, cleanliness and functionality of Ikeja Club through responsible leadership, transparency and prompt action.',
  business: 'Importer and Exporter of Phones and Gadgets',
  officeAddress: {
    street: 'No. 1 Adepele Street',
    area: 'Off Medical Road, Computer Village',
    district: 'Ikeja',
    city: 'Lagos',
    state: 'Nigeria',
  },
  businessAddress: {
    street: 'No. 1 Adepele Street, Off Medical Road',
    area: 'Computer Village',
    city: 'Ikeja',
    state: 'Lagos',
  },
  campaignOfficeAddress: {
    building: 'Ikeja Club Plaza',
    street: '23 Obafemi Awolowo Way',
    area: 'Ikeja',
    city: 'Lagos',
    state: 'Nigeria',
  },
  proximityNote:
    'Campaign Office strategically located at Ikeja Club Plaza (23 Obafemi Awolowo Way, Ikeja, Lagos), ensuring instant responsiveness, accessibility, and round-the-clock commitment to Ikeja Club premises and members.',
  contact: {
    phonePrimary: '+234 803 775 8413',
    whatsapp: '+234 803 775 8413',
    email: 'assorted590@yahoo.com',
    social: {
      whatsapp: 'https://wa.me/2348037758413',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com/assorted_phone_and_gadgets',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Bamidele', href: '#about' },
  { label: 'Vision & Manifesto', href: '#vision' },
  { label: '100-Day Plan', href: '#action-plan' },
  { label: 'Community', href: '#community' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
