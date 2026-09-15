import React from 'react';
import { FiArrowDownRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import avatar from '../../assets/avatar2.jpeg';
import CV from '../../assets/pdf/Curriculo.pdf';
import { useTypewriter } from '../../hooks/useTypewriter';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const typewriterStrings = [
    '> locate developer --name "Victor Azambuja"',
    '> status: estudante_ativo && buscando_estagio_ou_jr',
    '> skills: full_stack_specialist'
  ];

  const typedText = useTypewriter({
    strings: typewriterStrings,
    typingSpeed: 50,
    deletingSpeed: 30,
    delay: 2000,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
      ref={ref}
      aria-label={t('home')}
    >
      <div className="max-w-\[1440px\] mx-auto px-6 md:px-16 relative z-10 w-full">
        {/* Top bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-16 border-b border-cyan/20 pb-4"
        >
          <span className="text-cyan font-mono text-xs tracking-widest uppercase">01 / portfolio.exe</span>
          <span className="flex items-center gap-2 text-gray-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)] animate-pulse"></span>
            {t('availableStatus')}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <FiMapPin className="text-cyan" /> Presidente Prudente, SP / Brazil
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter">
              Victor<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500 text-glow">Azambuja</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {t('heroRole')}
            </p>
            
            <p className="text-gray-400 max-w-lg leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <div className="glass-glow p-4 rounded-md mt-4 max-w-lg" aria-label="Terminal de status">
              <div className="flex gap-2 mb-2 border-b border-cyan/10 pb-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                <small className="ml-auto text-gray-500 font-mono text-xs">system_status</small>
              </div>
              <p className="font-mono text-sm text-cyan break-all">
                {typedText}<span className="inline-block w-2 h-4 ml-1 bg-cyan animate-pulse"></span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <button onClick={handleDownload} className="glass-glow px-6 py-3 font-mono text-sm text-cyan hover:bg-cyan hover:text-dark transition-all duration-300 flex items-center gap-2">
                <FiDownload /> {t('DownloadCV')}
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 font-mono text-sm text-gray-300 border border-white/10 hover:border-cyan hover:text-cyan transition-all duration-300 flex items-center gap-2">
                <FiArrowDownRight /> {t('viewProjects')}
              </button>
            </div>
          </motion.div>

          {/* Right: 3D Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#00d4ff" glarePosition="all" transitionSpeed={1500}>
              <div className="glass-glow p-4 rounded-xl aspect-[4/5] relative overflow-hidden group">
                <img 
                  src={avatar} 
                  alt={t('profilePhoto')} 
                  className="w-full h-full object-cover rounded-lg filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  loading="eager" 
                />
                <div className="absolute top-6 right-6 font-mono text-cyan text-xs font-bold tracking-widest backdrop-blur-md bg-black/40 px-3 py-1 rounded">
                  FULL-STACK / 2026
                </div>
                <div className="absolute bottom-6 left-6 font-mono text-cyan text-2xl font-bold">
                  VA<span className="text-white">+</span>
                </div>
                
                {/* Decorative scanning line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/20 to-transparent h-1 w-full animate-[scan_3s_ease-in-out_infinite]"></div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 font-mono text-xs"
        >
          <span>scroll to explore</span>
          <FiArrowDownRight className="animate-bounce text-cyan" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;