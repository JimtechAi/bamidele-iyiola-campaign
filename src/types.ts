export interface NavItem {
  label: string;
  href: string;
}

export interface CampaignInfo {
  candidateName: string;
  nickname: string;
  position: string;
  organization: string;
  electionYear: string;
  theme: {
    leadership: string;
    commitment: string;
    continuity: string;
  };
  missionStatement: string;
  business: string;
  officeAddress: {
    street: string;
    area: string;
    district: string;
    city: string;
    state: string;
  };
  campaignOfficeAddress: {
    building: string;
    street: string;
    area: string;
    city: string;
    state: string;
  };
  businessAddress: {
    street: string;
    area: string;
    city: string;
    state: string;
  };
  proximityNote: string;
  contact?: {
    phonePrimary: string;
    whatsapp: string;
    email: string;
    social: {
      whatsapp: string;
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
    };
  };
}
