import { useEffect, useRef } from 'react';
import './ProjectField.css';

const ProjectField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const surface = canvas?.parentElement?.parentElement;
    if (!canvas || !surface) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000 };
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
    const clearPointer = () => { pointer.x = -1000; pointer.y = -1000; };

    const draw = (time: number) => {
      const elapsed = (time - start) / 1000;
      context.clearRect(0, 0, width, height);

      const spacing = width < 700 ? 58 : 76;
      // Increased scan line speed from 44 to 70
      const scan = reducedMotion ? 0.5 : ((elapsed * 100) % (height + 160)) - 80;
      const rows = Math.ceil(height / spacing) + 2;
      const cols = Math.ceil(width / spacing) + 2;

      for (let row = 0; row < rows; row += 1) {
        const y = row * spacing - 40;
        const scanDistance = Math.abs(y - scan);
        const scanGlow = Math.max(0, 1 - scanDistance / 110);
        context.strokeStyle = `rgba(184, 255, 84, ${0.025 + scanGlow * 0.12})`;
        context.lineWidth = scanGlow > 0.4 ? 1 : 0.5;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();

        for (let col = 0; col < cols; col += 1) {
          const x = col * spacing - 40;
          const distance = Math.hypot(pointer.x - x, pointer.y - y);
          const glow = Math.max(0, 1 - distance / 180);
          context.fillStyle = `rgba(184, 255, 84, ${0.08 + glow * 0.7 + scanGlow * 0.25})`;
          context.beginPath();
          context.arc(x, y, 0.8 + glow * 2 + scanGlow, 0, Math.PI * 2);
          context.fill();
        }
      }

      const spotlight = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240);
      spotlight.addColorStop(0, 'rgba(184, 255, 84, 0.08)');
      spotlight.addColorStop(1, 'rgba(184, 255, 84, 0)');
      context.fillStyle = spotlight;
      context.fillRect(pointer.x - 240, pointer.y - 240, 480, 480);

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(start);
    window.addEventListener('resize', resize);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(surface);
    surface.addEventListener('pointermove', movePointer);
    surface.addEventListener('pointerleave', clearPointer);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
      surface.removeEventListener('pointermove', movePointer);
      surface.removeEventListener('pointerleave', clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="project-field" aria-hidden="true" />;
};

export default ProjectField;
