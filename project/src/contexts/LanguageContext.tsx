import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre Mim',
    education: 'Formação',
    projects: 'Projetos',
    contact: 'Contato',

    // Hero Section
    heroRole: 'Desenvolvedor Full-stack',
    heroSubtitle: 'Experiência em React, Node.js, PHP, MongoDB e Firebase',
    viewProjects: 'Ver Projetos',
    getInTouch: 'Contato',

    // About Section
    aboutTitle: 'Sobre Mim',
    aboutDescription: 'Desenvolvedor Full-stack e estudante de Análise de Sistemas, com experiência na criação de aplicações web modernas. Sou focado no ecossistema JavaScript, utilizando React, Node.js, MongoDB e Firebase para transformar ideias em soluções eficientes.',
    mainSkills: 'Principais Habilidades',

    // Education Section
    educationTitle: 'Formação Acadêmica',

    // Projects Section
    projectsTitle: 'Projetos em Destaque',
    liveDemo: 'Ver Deploy',
    sourceCode: 'Código-fonte',
    notAvailable: 'Não Disponível',

    // Project Data
    project1Title: 'Sistema de Gerenciamento de Alunos e Chamada para Jiu-Jitsu',
    project1Description: 'Plataforma para gerenciamento de alunos e registro de presença para equipes de Jiu-Jitsu, O sistema está em produção e é validado pelo uso prático no Instituto Sonhe e na equipe Nilson Nunes.',
    project2Title: 'Dashboard Analytics',
    project2Description: 'Dashboard interativo para visualização de dados com gráficos em tempo real.',
    project3Title: 'App Mobile React Native',
    project3Description: 'Aplicativo móvel multiplataforma com sincronização offline.',

    // Contact Section
    contactTitle: 'Vamos Conversar?',
    contactDescription: 'Estou sempre aberto a novos desafios e oportunidades. Entre em contato!',

    // Footer
    footerText: 'Todos os direitos reservados',

    // Accessibility
    menuToggle: 'Alternar menu de navegação',
    languageToggle: 'Alternar idioma',
    profilePhoto: 'Foto de perfil profissional',
    skillIcon: 'Ícone da habilidade',
    projectImage: 'Imagem do projeto',
    socialLink: 'Link para rede social',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',

    // Hero Section
    heroRole: 'Full-stack Developer',
    heroSubtitle: 'Experienced in React, Node.js, PHP, MongoDB, and Firebase.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',

    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'Full-stack Developer and Systems Analysis student with experience in building modern web applications. I am focused on the JavaScript ecosystem, using React, Node.js, MongoDB, and Firebase to turn ideas into efficient solutions.',
    mainSkills: 'Main Skills',

    // Education Section
    educationTitle: 'Education',

    // Projects Section
    projectsTitle: 'Featured Projects',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    notAvailable: 'Not Available',

    // Project Data
    project1Title: 'Jiu-Jitsu Student and Attendance Management System',
    project1Description: 'A platform for student management and attendance tracking for Jiu-Jitsu teams. The system is in production and validated by its practical use at the Sonhe Institute and by the Nilson Nunes team.',
    project2Title: 'Analytics Dashboard',
    project2Description: 'Interactive dashboard for data visualization with real-time charts.',
    project3Title: 'React Native Mobile App',
    project3Description: 'Cross-platform mobile app with offline synchronization.',

    // Contact Section
    contactTitle: "Let's Talk?",
    contactDescription: 'I am always open to new challenges and opportunities. Get in touch!',

    // Footer
    footerText: 'All rights reserved',

    // Accessibility
    menuToggle: 'Toggle navigation menu',
    languageToggle: 'Toggle language',
    profilePhoto: 'Professional profile photo',
    skillIcon: 'Skill icon',
    projectImage: 'Project image',
    socialLink: 'Social media link',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as 'pt' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};