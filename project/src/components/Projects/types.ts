export type Project = {
  id: number;
  featured: boolean;
  badge: string | null;
  titleKey: string;
  descriptionKey: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl: string | null;
  codeUrl: string | null;
  codeLinks?: { label: string; url: string }[];
  demoNoticeKey?: string;
  role: string;
  type: string;
};
