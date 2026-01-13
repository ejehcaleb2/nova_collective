
import React from 'react';
import { Users, Landmark, MapPin, Building2, TrendingUp, Handshake, Globe, Recycle, Mic, Presentation, Lightbulb, Combine } from 'lucide-react';
// Added Achievement to the types import to satisfy ACHIEVEMENTS constant
import { TeamMember, Challenge, Achievement } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Ada Obi',
    role: 'Lead Researcher',
    bio: 'Specializes in urban sociology and housing policy. Ada led the data collection across Lagos and Kano.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Chidi Okafor',
    role: 'Product Lead',
    bio: 'Passionate about UX and fintech. Chidi spearheaded the conceptual design of the HomeEase prototype.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Fatima Bello',
    role: 'Community Strategist',
    bio: 'Focuses on grassroots engagement. Fatima managed the HELP-LAB school cleanup and community outreach.',
    image: 'https://images.unsplash.com/photo-1567532939803-f458bf1b3b56?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Emeka Nwosu',
    role: 'Operations & Strategy',
    bio: 'A strategic thinker with a background in business development. Emeka handled the $10,000 grant pitch.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
  }
];

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: 'African Community Storytelling',
    objective: 'Explore and narrate cultural heritage through media.',
    explanation: 'For our first challenge, we immersed ourselves in Masai cultural heritage. This project was about more than just a story; it was an exploration of how traditional community structures can inform modern collective action. We produced a video narrative that captures the essence of Masai resilience and storytelling.',
    visuals: [
      { type: 'video', url: 'https://www.youtube.com/embed/S_S7pD8O2B8', caption: 'Masai Culture: A Narrative of Heritage and Innovation' }
    ]
  },
  {
    id: 2,
    title: 'HELP-LAB',
    objective: 'Direct community impact through service.',
    explanation: 'The HELP-LAB challenge took us to a local school for a major cleanup and revitalization project. We documented the day through a series of "slides" showing the transformation of the educational space and our team working alongside students to foster environmental pride.',
    visuals: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800', caption: 'Slide 1: Assessing the initial school environment' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', caption: 'Slide 2: Team collaboration during the cleanup' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800', caption: 'Slide 3: Final results and student engagement' }
    ],
    reflections: 'The physical labor reinforced our commitment to improving living and learning conditions in our target communities.'
  },
  {
    id: 3,
    title: 'Expert Interview',
    objective: 'Validate research with industry veterans.',
    explanation: 'We secured an exclusive interview with Mr. Fred Nkubito. This session provided critical validation of our housing crisis hypothesis. Mr. Nkubito shared deep insights into Rwandan urban planning that we adapted for the Nigerian context.',
    visuals: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', caption: 'Strategic Consultation with Mr. Fred Nkubito' }
    ],
    reflections: 'This interview was the turning point where our project shifted from a general inquiry to a specific solution (HomeEase).'
  },
  {
    id: 4,
    title: '$10,000 Grant Pitch',
    objective: 'Developing a compelling business and social case.',
    explanation: 'This activity represented the culmination of our business modeling. We developed a full pitch deck and a high-energy video presentation. The pitch focused on the financial viability of HomeEase and its potential for massive social ROI.',
    visuals: [
      { type: 'video', url: 'https://www.youtube.com/embed/7V-fIG4_Gjg', caption: 'Official $10,000 Social Innovation Pitch' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', caption: 'Slide: Financial Projections and Middleman Reduction Model' }
    ]
  },
  {
    id: 5,
    title: 'Reflection & Learning',
    objective: 'Personal and team growth assessment.',
    explanation: 'Challenge 5 was an internal audit of our journey. We documented our personal growth through a digital storytelling slide deck that highlights the soft skills gained: negotiation, empathy-driven design, and technical grit.',
    visuals: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', caption: 'Reflection Slide: From 4 Individuals to 1 Collective' }
    ],
    reflections: 'The greatest takeaway was learning to fail fast and iterate even faster.'
  },
  {
    id: 6,
    title: 'Final Synthesis',
    objective: 'Consolidating the E-Lab journey into a future path.',
    explanation: 'The final activity was the synthesis of our entire prototype. We showcased the final architecture of HomeEase, documenting every feature and the roadmap for deployment in Lagos by Q3 2025.',
    visuals: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800', caption: 'Synthesis Slide: The Future Roadmap for HomeEase' }
    ]
  }
];

// Added ACHIEVEMENTS export to resolve the error in Achievements.tsx
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'E-Lab Formation',
    date: 'Week 1',
    description: 'The NOVA Collective was officially formed, bringing together four diverse backgrounds to tackle urban housing.',
    icon: 'Users'
  },
  {
    id: '2',
    title: 'Community Engagement',
    date: 'Week 4',
    description: 'Successfully completed the community engagement phase, building trust within our target demographics.',
    icon: 'Handshake'
  },
  {
    id: '3',
    title: 'Research Validation',
    date: 'Week 8',
    description: 'Expert interviews validated our core hypothesis regarding middleman exploitation in the rental market.',
    icon: 'Lightbulb'
  },
  {
    id: '4',
    title: 'Prototype Completion',
    date: 'Week 12',
    description: 'Finalized the HomeEase MVP, ready for deployment and scaling across urban centers.',
    icon: 'Presentation'
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Our Team', path: '/team' },
  { label: 'Our Journey', path: '/journey' },
  { label: 'Our Research', path: '/research' },
  { label: 'Our Solution', path: '/solution' },
  { label: 'Achievements', path: '/achievements' }
];

export const ICON_MAP: Record<string, any> = {
  Users, Landmark, MapPin, Building2, TrendingUp, Handshake, Globe, Recycle, Mic, Presentation, Lightbulb, Combine
};
