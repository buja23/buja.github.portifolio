import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoPython, IoLogoVue } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiMongodb, SiMui, SiFigma, SiPhp, SiMysql, SiExpress, SiFfmpeg } from 'react-icons/si';
import { FaReact, FaLaravel, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

import chamada from '../assets/chamada.png'
import alita from '../assets/alita.png'
import editor from '../assets/editor.png'

export const Skills = [
  // Front-End
  { name: 'HTML', icon: <IoLogoHtml5 /> },
  { name: 'CSS', icon: <IoLogoCss3 /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vue', icon: <IoLogoVue /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Material UI', icon: <SiMui /> },

  // Back-End
  { name: 'Node.js', icon: <IoLogoNodejs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Python', icon: <IoLogoPython /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },

  // Banco de Dados
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },

  // Ferramentas e Outros
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'FFmpeg', icon: <SiFfmpeg /> },
];

export const education = [
  {
    id: 1,
    degree: 'Curso Técnico em Análise e Desenvolvimento de Sistemas',
    degreeEn: 'Technical Course in Systems Analysis and Development',
    institution: 'Etec Prof. Dr. Antônio E. de Toledo',
    institutionEn: 'Etec Prof. Dr. Antônio E. de Toledo',
    period: '2021 - 2023',
    description: 'Formação técnica focada em lógica de programação, desenvolvimento de software e sistemas de informação.',
    descriptionEn: 'Technical training focused on programming logic, software development, and information systems.',
  },
  {
    id: 2,
    degree: 'Graduação em Análise e Desenvolvimento de Sistemas',
    degreeEn: 'Higher Education in Systems Analysis and Development',
    institution: 'Fatec - Presidente Prudente',
    institutionEn: 'Fatec - Presidente Prudente',
    period: '2024 - 2026',
    description: 'Aprofundamento em engenharia de software, arquitetura de sistemas, gestão de projetos e tecnologias web e mobile.',
    descriptionEn: 'In-depth study of software engineering, systems architecture, project management, and web and mobile technologies.',
  },
];

export const projects = [
  {
    id: 1,
    image: chamada,
    technologies: ['React', 'TypeScript', 'Firebase'],
    demoUrl: 'https://buja23.github.io/ChamadaDigital-Jiu-view/students' as string | null,
    codeUrl: 'https://github.com/buja23/ChamadaDigital-Jiu-view' as string | null,
  },
  {
    id: 2,
    image: alita,
    technologies: ['Gamemaker 2', 'GML', 'Piskel'],
    demoUrl: null,
    codeUrl: null,
  },
  {
    id: 3,
    image: editor,
    technologies: ['Vue', 'ffmpeg', 'Electron', 'Figma'],
    demoUrl: null,
    codeUrl: null,
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victor-azambuja-980199370',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/buja23?tab=overview&from=2025-10-01&to=2025-10-10',
    icon: <FaGithub/>,
  },
  {
    name: 'Email',
    url: 'victor.azam10@gmail.com',
    icon: <MdEmail />,
  },
];