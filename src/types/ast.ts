export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export interface ExperienceTheme {
  id: string;
  name: string;
  mode: 'light' | 'dark';
  fontFamily: 'display' | 'sans' | 'mono';
  primaryColor: string; // e.g. '#2563EB', '#171717', '#E11D48', '#059669'
  backgroundColor: string; // e.g. '#FFFFFF', '#FBFBFA', '#0A0A0A'
  textColor: string;
  cardBackground: string;
  borderColor: string;
  borderRadius: 'rounded-none' | 'rounded-button' | 'rounded-card' | 'rounded-2xl';
}

export type SectionType = 
  | 'hero'
  | 'showcase'
  | 'interactive-calculator'
  | 'interactive-quiz'
  | 'timeline'
  | 'bento-grid'
  | 'features'
  | 'contact'
  | 'link-tree'
  | 'stats';

export interface SectionNode {
  id: string;
  type: SectionType;
  title: string;
  subtitle?: string;
  props: Record<string, any>;
  interactiveState?: Record<string, any>;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ExperienceAST {
  id: string;
  name: string;
  tagline: string;
  category: 'personal' | 'creator' | 'tool' | 'startup' | 'portfolio';
  theme: ExperienceTheme;
  navigation: {
    brandName: string;
    logoIcon?: string;
    links: NavigationLink[];
    ctaButton?: {
      label: string;
      href: string;
    };
  };
  sections: SectionNode[];
  footer: {
    copyrightText: string;
    socialLinks: { platform: string; url: string }[];
  };
}

