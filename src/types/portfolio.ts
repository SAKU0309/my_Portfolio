export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Systems & Cloud' | 'Frontend' | 'Developer Tools';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
  githubUrl: string;
  liveUrl: string;
  architectureHighlights: string[];
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    experienceYears: number;
    relatedProjects?: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bioSummary: string;
  bioFull: string[];
  email: string;
  location: string;
  status: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  avatarUrl: string;
}
