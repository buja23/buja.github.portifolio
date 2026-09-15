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
    navigationLabel: 'Navegação principal',
    closeMenu: 'Fechar menu',

    // Hero Section
    heroRole: 'Desenvolvedor Full-stack',
    heroSubtitle: 'Experiência em React, Node.js, PHP, WordPress, MongoDB e Firebase',
    availableStatus: 'Disponível para novos projetos',
    viewProjects: 'Explorar projetos',
    heroNote: 'Construindo produtos digitais com código, curiosidade e intenção.',
    proofLabel: 'Resumo profissional',
    proofStack: 'Stack principal',
    proofFocus: 'Foco',
    proofFocusValue: 'Produtos web e mobile',
    proofBase: 'Base',
    proofStatus: 'Status',
    DownloadCV: 'Baixar CV',
    getInTouch: 'Contato',

    // About Section
    aboutTitle: 'Sobre Mim',
    aboutTag: 'produto / interface / código',
    aboutLabel: 'perfil.md',
    aboutLead: 'Eu transformo ideias e necessidades reais em produtos digitais que as pessoas conseguem usar.',
    aboutDescription: 'Desenvolvedor Full-stack e estudante de Análise de Sistemas, com experiência na criação de aplicações web modernas. Sou focado no ecossistema JavaScript, utilizando React, Node.js, WordPress, MongoDB e Firebase para transformar ideias em soluções eficientes.',
    mainSkills: 'Principais Habilidades',
    aboutCta: 'Vamos conversar sobre uma ideia',
    skillGroupfrontEnd: 'Front-end',
    skillGroupbackEnd: 'Back-end',
    skillGroupdataTools: 'Dados & ferramentas',

    // Process Section
    processTitle: 'Como eu construo',
    processIntro: 'Do problema ao produto: cada decisão precisa fazer sentido para quem vai usar.',
    processStep1Title: 'Entender o problema',
    processStep1Description: 'Investigo o contexto, as pessoas e o objetivo antes de escolher a tecnologia.',
    processStep2Title: 'Desenhar a solução',
    processStep2Description: 'Organizo fluxos, dados e interface para transformar uma ideia em sistema.',
    processStep3Title: 'Construir com cuidado',
    processStep3Description: 'Desenvolvo experiências web e mobile com atenção ao detalhe e à manutenção.',
    processStep4Title: 'Evoluir em produção',
    processStep4Description: 'Observo o uso real, corrijo o que importa e preparo o próximo passo.',

    // Education Section
    educationTitle: 'Formação Acadêmica',
    educationIntro: 'Uma base técnica construída passo a passo, entre fundamentos, engenharia de software e produtos digitais.',
    educationCurrent: 'em andamento',

    // Projects Section
    projectsTitle: 'Projetos em Destaque',
    projectsIntro: 'Sistemas reais, interfaces cuidadas e decisões técnicas feitas para sair do conceito e chegar ao uso.',
    projectRole: 'Freelance / produto em produção',
    projectBuild: 'Construído com intenção',
    projectTypeLabel: 'tipo',
    projectTypeValue: 'SaaS',
    projectScopeLabel: 'escopo',
    projectScopeValue: 'web + mobile',
    projectStatusLabel: 'status',
    projectStatusValue: 'em produção',
    liveDemo: 'Ver Deploy',
    sourceCode: 'Código-fonte',
    notAvailable: 'Não Disponível',

    // Project Data
    project1Title: 'BarberEasy - SaaS para Barbearias',
    project1Description: 'Plataforma SaaS completa para gestão de barbearias desenvolvida sob demanda (freelancer). O ecossistema conta com um painel administrativo web para o controle da barbearia e um aplicativo mobile integrado para os clientes realizarem agendamentos.',
    project2Title: 'Chamada Digital - Sistema Voluntário',
    project2Description: 'Plataforma para gerenciamento de alunos e registro de presença para equipes de Jiu-Jitsu. O sistema está em produção e é validado pelo uso prático no Instituto Sonhe e na equipe Nilson Nunes.',
    project3Title: 'E-commerce Madame - Plataforma de Varejo',
    project3Description: 'Desenvolvimento de uma plataforma de e-commerce voltada para o setor de varejo, com foco em experiência de usuário fluida, integração de pagamentos e painel administrativo para gerenciamento de produtos e pedidos.',
    project4Title: 'Editor de Vídeo',
    project4Description: 'Fui um dos desenvolvedores principais no projeto de um novo editor de vídeo, fruto de uma parceria estratégica com a Multimidia para integração com a plataforma creator4all. Minha participação foi integral, abrangendo desde o planejamento e arquitetura iniciais até a implementação da versão final. Atualmente, com o projeto em fase de refinamento para entrega, fui realocado para liderar novos projetos.',
    project5Title: 'Controle de estoque para APAE',
    project5Description: 'Participei de um projeto de desenvolvimento em grupo, realizado através de uma parceria entre a faculdade e a APAE, com o objetivo de criar um sistema para otimização do controle de insumos da instituição.',
    project6Title: 'Sistema de Controle de Vendas',
    project6Description: 'Sistema de controle de vendas desenvolvido para auxiliar no gerenciamento de vendas e estoque de uma loja. O sistema permite o cadastro de produtos, clientes e vendas, além de gerar relatórios e gráficos para análise de desempenho.',
    project7Title: 'Alita - Jogo 2D',
    project7Description: 'Jogo 2D desenvolvido como projeto pessoal, com a lógica e a movimentação escritas em GML no GameMaker 2 e sprites criados no Piskel. O projeto foi feito para praticar programação de jogos, colisão, animação e design de fases.',
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
    navigationLabel: 'Main navigation',
    closeMenu: 'Close menu',

    // Hero Section
    heroRole: 'Full-stack Developer',
    heroSubtitle: 'Experienced in React, Node.js, PHP, WordPress, MongoDB, and Firebase.',
    availableStatus: 'Available for new projects',
    viewProjects: 'Explore projects',
    heroNote: 'Building digital products with code, curiosity, and intent.',
    proofLabel: 'Professional snapshot',
    proofStack: 'Core stack',
    proofFocus: 'Focus',
    proofFocusValue: 'Web and mobile products',
    proofBase: 'Based in',
    proofStatus: 'Status',
    DownloadCV: 'Download CV',
    getInTouch: 'Get in Touch',

    // About Section
    aboutTitle: 'About Me',
    aboutTag: 'product / interface / code',
    aboutLabel: 'profile.md',
    aboutLead: 'I turn real ideas and needs into digital products people can actually use.',
    aboutDescription: 'Full-stack Developer and Systems Analysis student with experience in building modern web applications. I am focused on the JavaScript ecosystem, using React, Node.js, WordPress, MongoDB, and Firebase to turn ideas into efficient solutions.',
    mainSkills: 'Main Skills',
    aboutCta: 'Let’s talk about an idea',
    skillGroupfrontEnd: 'Front-end',
    skillGroupbackEnd: 'Back-end',
    skillGroupdataTools: 'Data & tools',

    // Process Section
    processTitle: 'How I build',
    processIntro: 'From problem to product: every decision should make sense for the people using it.',
    processStep1Title: 'Understand the problem',
    processStep1Description: 'I investigate the context, people, and goal before choosing the technology.',
    processStep2Title: 'Shape the solution',
    processStep2Description: 'I organize flows, data, and interface to turn an idea into a system.',
    processStep3Title: 'Build with care',
    processStep3Description: 'I develop web and mobile experiences with attention to detail and maintenance.',
    processStep4Title: 'Evolve in production',
    processStep4Description: 'I observe real use, fix what matters, and prepare the next step.',

    // Education Section
    educationTitle: 'Education',
    educationIntro: 'A technical foundation built step by step, from fundamentals to software engineering and digital products.',
    educationCurrent: 'in progress',

    // Projects Section
    projectsTitle: 'Featured Projects',
    projectsIntro: 'Real systems, considered interfaces, and technical decisions made to move from concept to use.',
    projectRole: 'Freelance / product in production',
    projectBuild: 'Built with intention',
    projectTypeLabel: 'type',
    projectTypeValue: 'SaaS',
    projectScopeLabel: 'scope',
    projectScopeValue: 'web + mobile',
    projectStatusLabel: 'status',
    projectStatusValue: 'in production',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    notAvailable: 'Not Available',

    // Project Data
    project1Title: 'BarberEasy - SaaS for Barbershops',
    project1Description: 'A complete SaaS platform for barbershop management developed on demand (freelancer). The ecosystem features a web admin panel for barbershop control and an integrated mobile app for clients to book appointments.',
    project2Title: 'Chamada Digital - Volunteer System',
    project2Description: 'A platform for student management and attendance tracking for Jiu-Jitsu teams. The system is in production and validated by its practical use at the Sonhe Institute and by the Nilson Nunes team.',
    project3Title: 'Madame E-commerce - Retail Platform',
    project3Description: 'Development of an e-commerce platform aimed at the retail sector, focusing on a fluid user experience, payment integration, and an administrative panel for product and order management.',
    project4Title: 'Video Editor',
    project4Description: 'I was a lead developer on a new video editor project, the result of a strategic partnership with Multimidia to integrate with the creator4all platform. My involvement was integral, spanning from initial planning and architecture to the implementation of the final version. With the project now in the final refinement phase before delivery, I have been reassigned to lead new projects.',
    project5Title: 'Inventory Control for APAE',
    project5Description: 'I participated in a group development project, conducted through a partnership between the university and APAE, with the goal of creating a system to optimize the institutions supply management.',
    project6Title: 'Sales Control System',
    project6Description: 'A sales control system developed to assist in managing a stores sales and inventory. The system allows for registering products, customers, and sales, in addition to generating reports and charts for performance analysis.',
    project7Title: 'Alita - 2D Game',
    project7Description: 'A 2D game built as a personal project, with logic and movement written in GML on GameMaker 2 and sprites created in Piskel. The project was made to practice game programming, collision, animation, and level design.',

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
