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
  role: string;
  type: string;
};
