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
    DownloadCV: 'Baixar CV',
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
    project2Title: 'Jogo para Transtorno do Espectro Autista (Alita: Mountain Aventure)',
    project2Description: 'Como Trabalho de Conclusão de Curso (TCC), desenvolvi um jogo digital com suporte para crianças com Transtorno do Espectro Autista (TEA). O projeto consiste em uma aventura 2D onde o jogador controla a personagem Alita, que deve coletar itens e completar missões para ajudar seus amigos, promovendo um ambiente de aprendizado e interação.',
    project3Title: 'Editor de Vídeo',
    project3Description: 'Fui um dos desenvolvedores principais no projeto de um novo editor de vídeo, fruto de uma parceria estratégica com a Multimidia para integração com a plataforma creator4all. Minha participação foi integral, abrangendo desde o planejamento e arquitetura iniciais até a implementação da versão final. Atualmente, com o projeto em fase de refinamento para entrega, fui realocado para liderar novos projetos.',
    project4Title: 'Controle de estoque para APAE',
    project4Description: 'Participei de um projeto de desenvolvimento em grupo, realizado através de uma parceria entre a faculdade e a APAE, com o objetivo de criar um sistema para otimização do controle de insumos da instituição.',
    project5Title: 'Sistema de Controle de Vendas',
    project5Description: 'Sistema de controle de vendas desenvolvido para auxiliar no gerenciamento de vendas e estoque de uma loja. O sistema permite o cadastro de produtos, clientes e vendas, além de gerar relatórios e gráficos para análise de desempenho.',
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
    DownloadCV: 'Download CV',
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
    project2Title: 'Game for Autism Spectrum Disorder (Alita: Mountain Adventure)',
    project2Description: 'As a Final Course Project (TCC), I developed a digital game with support for children with Autism Spectrum Disorder (ASD). The project is a 2D adventure where the player controls the character Alita, who must collect items and complete missions to help her friends, promoting a learning and interactive environment.',
    project3Title: 'Video Editor',
    project3Description: 'I was a lead developer on a new video editor project, the result of a strategic partnership with Multimidia to integrate with the creator4all platform. My involvement was integral, spanning from initial planning and architecture to the implementation of the final version. With the project now in the final refinement phase before delivery, I have been reassigned to lead new projects.',
    project4Title: 'Inventory Control for APAE',
    project4Description: 'I participated in a group development project, conducted through a partnership between the university and APAE, with the goal of creating a system to optimize the institutions supply management.',
    project5Title: 'Sales Control System',
    project5Description: 'A sales control system developed to assist in managing a stores sales and inventory. The system allows for registering products, customers, and sales, in addition to generating reports and charts for performance analysis.',

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