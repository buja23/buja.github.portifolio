import { useEffect, useRef } from 'react';
import './InteractiveGrid.css';

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  phase: number;
  size: number;
  accent: boolean;
};

const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const interactionSurface = parent?.parentElement;
    if (!canvas || !parent || !interactionSurface) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000 };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gap = width < 700 ? 72 : 92;
      nodes = [];
      for (let y = gap * 0.65; y < height + gap; y += gap) {
        for (let x = gap * 0.65; x < width + gap; x += gap) {
          const jitterX = (Math.random() - 0.5) * 18;
          const jitterY = (Math.random() - 0.5) * 18;
          nodes.push({
            x: x + jitterX,
            y: y + jitterY,
            baseX: x + jitterX,
            baseY: y + jitterY,
            phase: Math.random() * Math.PI * 2,
            size: Math.random() > 0.88 ? 2.2 : 1.1,
            accent: Math.random() > 0.82,
          });
        }
      }
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = interactionSurface.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const clearPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const draw = (time: number) => {
      const elapsed = (time - start) / 1000;
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#080a0c';
      context.fillRect(0, 0, width, height);

      const influenceRadius = 220;
      nodes.forEach((node) => {
        const dx = pointer.x - node.baseX;
        const dy = pointer.y - node.baseY;
        const distance = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const drift = reduceMotion ? 0 : Math.sin(elapsed * 0.7 + node.phase) * 1.7;
        node.x = node.baseX + dx * influence * 0.055;
        node.y = node.baseY + dy * influence * 0.055 + drift;
      });

      nodes.forEach((node, index) => {
        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex];
          const distance = Math.hypot(node.x - next.x, node.y - next.y);
          if (distance > 116) continue;
          const pointerDistance = Math.min(Math.hypot(pointer.x - node.x, pointer.y - node.y), Math.hypot(pointer.x - next.x, pointer.y - next.y));
          const pointerGlow = Math.max(0, 1 - pointerDistance / influenceRadius);
          context.strokeStyle = `rgba(184, 255, 84, ${0.035 + pointerGlow * 0.22})`;
          context.lineWidth = pointerGlow > 0.1 ? 1 : 0.5;
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }
      });

      nodes.forEach((node) => {
        const distance = Math.hypot(pointer.x - node.x, pointer.y - node.y);
        const glow = Math.max(0, 1 - distance / influenceRadius);
        const color = node.accent ? '255, 180, 84' : '184, 255, 84';
        context.fillStyle = `rgba(${color}, ${0.18 + glow * 0.72})`;
        context.beginPath();
        context.arc(node.x, node.y, node.size + glow * 2.1, 0, Math.PI * 2);
        context.fill();
      });

      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, influenceRadius);
      glow.addColorStop(0, 'rgba(184, 255, 84, 0.07)');
      glow.addColorStop(1, 'rgba(184, 255, 84, 0)');
      context.fillStyle = glow;
      context.fillRect(pointer.x - influenceRadius, pointer.y - influenceRadius, influenceRadius * 2, influenceRadius * 2);

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(start);
    window.addEventListener('resize', resize);
    interactionSurface.addEventListener('pointermove', updatePointer);
    interactionSurface.addEventListener('pointerleave', clearPointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      interactionSurface.removeEventListener('pointermove', updatePointer);
      interactionSurface.removeEventListener('pointerleave', clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-grid" aria-hidden="true" />;
};

export default InteractiveGrid;
