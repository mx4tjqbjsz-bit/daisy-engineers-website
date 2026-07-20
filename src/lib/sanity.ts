import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
// You'll need to replace these with your actual Sanity project details
// Or set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET as environment variables
const projectId = (import.meta as any).env?.VITE_SANITY_PROJECT_ID || 'your-project-id';
const dataset = (import.meta as any).env?.VITE_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-02-19',
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Fallback data for when CMS is not configured
export const fallbackData = {
  hero: {
    label: 'CIVIL ENGINEERING CONSULTANTS',
    headline: 'Engineering clarity. Delivered.',
    subheadline: 'Roads, stormwater, structures and project management— from inception to close-out.',
    ctaText: 'Explore services',
    secondaryCtaText: 'View projects',
  },
  services: {
    label: 'SERVICES',
    headline: 'What we deliver',
    description: 'We plan, design and manage infrastructure—on scope, on budget, on time.',
    items: [
      {
        title: 'Roads & Earthworks',
        description: 'Alignment, pavement design, earthworks, and construction supervision.',
        image: '/service_card_road.jpg',
      },
      {
        title: 'Stormwater Management',
        description: 'Drainage design, flood mitigation, attenuation systems, and approvals.',
        image: '/service_card_stormwater.jpg',
      },
      {
        title: 'Structures',
        description: 'Bridges, culverts, retaining walls, and structural assessments.',
        image: '/service_card_structure.jpg',
      },
      {
        title: 'Project Management',
        description: 'End-to-end delivery across all six work stages.',
        image: '/service_card_pm.jpg',
      },
    ],
  },
  stages: {
    label: 'PROJECT STAGES',
    headline: 'From idea to handover',
    description: 'We guide projects through six clear stages—so decisions are made early and delivery stays predictable.',
    caption: 'Turnkey delivery available.',
    items: [
      { num: '01', title: 'Inception & Briefing' },
      { num: '02', title: 'Concept & Viability' },
      { num: '03', title: 'Design Development' },
      { num: '04', title: 'Documentation & Procurement' },
      { num: '05', title: 'Construction Monitoring' },
      { num: '06', title: 'Close-out & Commissioning' },
    ],
  },
  featuredProject: {
    headline: 'Middelburg',
    subheadline: 'Roads upgrade programme',
    client: 'Inxuba Yethemba Municipality',
    scope: 'Planning, design, supervision',
    value: 'R18m',
    ctaText: 'Read the case study',
    image: '/featured_middelburg.jpg',
  },
  about: {
    label: 'ABOUT DAISY',
    headline: 'Built on precision. Led by experience.',
    cards: [
      {
        title: 'Engineering-first thinking',
        description: 'We combine technical rigor with practical site knowledge—so designs are buildable and budgets are realistic.',
        image: '/about_thinking.jpg',
      },
      {
        title: 'A partner in delivery',
        description: 'We work with public and private clients, aligning teams and timelines to keep projects moving.',
        image: '/about_partner.jpg',
      },
    ],
    ctaText: 'Meet the team',
  },
  projects: {
    label: 'SELECTED WORK',
    headline: 'Projects that speak plainly.',
    ctaText: 'View full portfolio',
    items: [
      {
        title: 'Daveyton NMT',
        subtitle: 'Non-motorised transport',
        image: '/project_daveyton.jpg',
      },
      {
        title: 'Manningburg Streets',
        subtitle: 'Street paving & drainage',
        image: '/project_manningburg.jpg',
      },
      {
        title: 'Calfonia Roads',
        subtitle: 'Gravel-to-paved upgrade',
        image: '/project_calfonia.jpg',
      },
    ],
  },
  contact: {
    label: 'CONTACT',
    headline: "Let's build something solid.",
    description: "Tell us what you're planning. We'll respond within two business days.",
    email: 'info@daisyconsulting.co.za',
    phone: '+27 79 120 4620',
    location: 'Johannesburg / Pretoria',
    ctaText: 'Send message',
  },
  footer: {
    copyright: '© 2026 Daisy Consulting Engineers. All rights reserved.',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#' },
    ],
  },
};

// Helper function to fetch data with fallback
export async function fetchSanityData(query: string) {
  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return null;
  }
}
