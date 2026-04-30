export type Lang = "ko" | "en";

export interface Translations {
  navbar: {
    links: {
      mission: string;
      pathways: string;
      curriculum: string;
      operatingModel: string;
      faq: string;
    };
    inquire: string;
    openMenu: string;
    closeMenu: string;
    toggleLang: string;
  };
  hero: {
    badge: string;
    tagline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    stats: Array<{ value: string; label: string }>;
  };
  mission: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    subheading: string;
    pillars: Array<{ title: string; description: string }>;
    graduate: {
      eyebrow: string;
      h3a: string;
      h3b: string;
      traits: string[];
    };
  };
  pathway: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    complianceNote: string;
    complianceLabel: string;
    alignmentLabel: string;
    disclaimer: string;
    pathways: Array<{
      badge: string;
      description: string;
      outcome: string;
      features: string[];
    }>;
  };
  curriculum: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    moodleTitle: string;
    moodleDesc: string;
    alsdTitle: string;
    alsdDesc: string;
    courses: Array<{
      subject: string;
      course: string;
      level: string;
      tag: string;
      description: string;
      skills: string[];
    }>;
  };
  outcomes: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    kpiEyebrow: string;
    kpiH3a: string;
    kpiH3b: string;
    kpiFootnote: string;
    kpis: string[];
    layers: Array<{ title: string; description: string }>;
  };
  portfolio: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    capstoneBadge: string;
    stages: Array<{
      grade: string;
      title: string;
      items: string[];
    }>;
  };
  testimonials: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    disclaimerShort: string;
    noteLabel: string;
    noteFull: string;
    starsLabel: string;
    roles: { graduate: string; parent: string; student: string };
    quotes: string[];
  };
  faq: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    items: Array<{ title: string; desc: string }>;
    preferEmail: string;
    form: {
      title: string;
      subtitle: string;
      nameLbl: string;
      namePlaceholder: string;
      nameError: string;
      emailLbl: string;
      emailPlaceholder: string;
      emailError: string;
      phoneLbl: string;
      phoneOptional: string;
      phonePlaceholder: string;
      gradeLbl: string;
      gradeOptional: string;
      gradeDefault: string;
      gradeOptions: string[];
      messageLbl: string;
      messageOptional: string;
      messagePlaceholder: string;
      submitting: string;
      submit: string;
      privacy: string;
      errorGeneric: string;
      successTitle: string;
      successBody: string;
      successBodyAt: string;
      successBodySuffix: string;
      submitAnother: string;
    };
  };
  footer: {
    taglineSuffix: string;
    sections: {
      institute: string;
      community: string;
      contact: string;
    };
    links: {
      mission: string;
      pathways: string;
      curriculum: string;
      operatingModel: string;
      portfolio: string;
      voices: string;
      faq: string;
      submitInquiry: string;
    };
    copyright: string;
    parallel: string;
    parallelLink: string;
    registration: string;
  };
}
