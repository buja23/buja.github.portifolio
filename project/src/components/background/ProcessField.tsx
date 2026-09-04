import { useEffect, useRef } from 'react';
import './ProcessField.css';

type Particle = { angle: number; radius: number; speed: number; size: number; orbit: number };

const ProcessField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const surface = canvas?.parentElement?.parentElement;
    if (!canvas || !surface) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000 };
    const particles: Particle[] = Array.from({ length: 42 }, (_, index) => ({
      angle: (index / 42) * Math.PI * 2,
      radius: 130 + (index % 7) * 28,
      speed: 0.08 + (index % 5) * 0.018,
      size: index % 6 === 0 ? 2 : 0.9,
      orbit: index % 3,
    }));
    let width = 0;
    let height = 0;
    let frame = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = surface.clientWidth;
      height = surface.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const movePointer = (event: PointerEvent) => {
      const bounds = surface.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };
    const leaveSurface = () => { pointer.x = -1000; pointer.y = -1000; };

    const draw = (time: number) => {
      const elapsed = (time - start) / 1000;
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#101417';
      context.fillRect(0, 0, width, height);

      const centerX = width < 700 ? width * 0.78 : width * 0.72;
      const centerY = height * 0.52;
      const pointerDistance = Math.hypot(pointer.x - centerX, pointer.y - centerY);
      const pull = Math.max(0, 1 - pointerDistance / 360);
      const orbitScale = width < 700 ? 0.62 : 1;

      for (let orbit = 0; orbit < 3; orbit += 1) {
        const radiusX = (190 + orbit * 65) * orbitScale;
        const radiusY = (70 + orbit * 28) * orbitScale;
        context.beginPath();
        context.ellipse(centerX, centerY, radiusX + pull * 12, radiusY + pull * 8, -0.18, 0, Math.PI * 2);
        context.strokeStyle = `rgba(255, 180, 84, ${0.12 + pull * 0.18})`;
        context.lineWidth = orbit === 1 ? 1 : 0.5;
        context.stroke();
      }

      particles.forEach((particle) => {
        const angle = particle.angle + (reducedMotion ? 0 : elapsed * particle.speed);
        const radiusX = (particle.radius + pull * 28) * orbitScale;
        const radiusY = (particle.radius * 0.36 + particle.orbit * 12) * orbitScale;
        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;
        const alpha = 0.28 + pull * 0.72;
        context.fillStyle = `rgba(255, 180, 84, ${alpha})`;
        context.beginPath();
        context.arc(x, y, particle.size + pull * 1.2, 0, Math.PI * 2);
        context.fill();
      });

      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300 * orbitScale);
      glow.addColorStop(0, `rgba(255, 180, 84, ${0.14 + pull * 0.1})`);
      glow.addColorStop(1, 'rgba(255, 180, 84, 0)');
      context.fillStyle = glow;
      context.fillRect(centerX - 320, centerY - 220, 640, 440);

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(start);
    window.addEventListener('resize', resize);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(surface);
    surface.addEventListener('pointermove', movePointer);
    surface.addEventListener('pointerleave', leaveSurface);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
      surface.removeEventListener('pointermove', movePointer);
      surface.removeEventListener('pointerleave', leaveSurface);
    };
  }, []);

  return <canvas ref={canvasRef} className="process-field" aria-hidden="true" />;
};

export default ProcessField;
