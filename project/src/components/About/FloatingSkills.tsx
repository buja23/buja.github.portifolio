import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiTypescript, SiPhp, SiMongodb,
  SiTailwindcss, SiJavascript, SiPython, SiMysql, SiGit,
  SiLaravel, SiVuedotjs, SiNextdotjs, SiFigma, SiGithub
} from "react-icons/si";

const SKILLS = [
  { icon: SiReact,       name: "React",       color: "#61DAFB" },
  { icon: SiNodedotjs,   name: "Node.js",     color: "#68A063" },
  { icon: SiTypescript,  name: "TypeScript",  color: "#3178C6" },
  { icon: SiPhp,         name: "PHP",         color: "#8892BE" },
  { icon: SiMongodb,     name: "MongoDB",     color: "#4EA94B" },
  { icon: SiTailwindcss, name: "Tailwind",    color: "#38BDF8" },
  { icon: SiJavascript,  name: "JavaScript",  color: "#F0DB4F" },
  { icon: SiPython,      name: "Python",      color: "#FFD845" },
  { icon: SiMysql,       name: "MySQL",       color: "#4479A1" },
  { icon: SiGit,         name: "Git",         color: "#F1502F" },
  { icon: SiLaravel,     name: "Laravel",     color: "#FF2D20" },
  { icon: SiVuedotjs,    name: "Vue.js",      color: "#42B883" },
  { icon: SiNextdotjs,   name: "Next.js",     color: "#FFFFFF" },
  { icon: SiFigma,       name: "Figma",       color: "#A259FF" },
  { icon: SiGithub,      name: "GitHub",      color: "#FFFFFF" },
];

// Deterministic float offset per bubble so they don't all move in sync
const floatVariants = (index: number) => ({
  float: {
    y: [0, -14 - (index % 4) * 3, 0],
    x: [0, (index % 2 === 0 ? 4 : -4), 0],
    transition: {
      duration: 3 + (index % 5) * 0.6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2,
    },
  },
});

interface BubbleProps {
  skill: typeof SKILLS[number];
  index: number;
}

const Bubble = ({ skill, index }: BubbleProps) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 80;

    if (dist < maxDist) {
      const force = (1 - dist / maxDist) * 40;
      const angle = Math.atan2(dy, dx);
      controls.start({
        x: -Math.cos(angle) * force,
        y: -Math.sin(angle) * force,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    });
  };

  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      variants={floatVariants(index)}
      animate={isHovered ? undefined : "float"}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.15 }}
        className="flex flex-col items-center gap-2 cursor-default select-none group"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300"
          style={{
            backgroundColor: "rgba(10, 13, 15, 0.7)",
            borderColor: isHovered ? skill.color : "rgba(0, 212, 255, 0.2)",
            boxShadow: isHovered
              ? `0 0 20px ${skill.color}40, 0 0 40px ${skill.color}20`
              : "0 0 10px rgba(0,212,255,0.05)",
          }}
        >
          <Icon size={28} style={{ color: skill.color }} />
        </div>
        <span
          className="text-[10px] font-mono uppercase tracking-widest transition-colors duration-200"
          style={{ color: isHovered ? skill.color : "rgba(148, 163, 184, 0.7)" }}
        >
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

const FloatingSkills = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 p-8">
      {SKILLS.map((skill, i) => (
        <Bubble key={skill.name} skill={skill} index={i} />
      ))}
    </div>
  </div>
);

export default FloatingSkills;

