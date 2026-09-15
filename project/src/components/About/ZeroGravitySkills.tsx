import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Skills } from '../../data/portfolio';

const ZeroGravitySkills: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Matter.js aliases
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies,
          Events = Matter.Events;

    // Create engine (zero gravity)
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engineRef.current = engine;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      }
    });

    // Walls
    const wallOptions = { isStatic: true, render: { visible: false } };
    const walls = [
      Bodies.rectangle(width / 2, -50, width * 2, 100, wallOptions), // Top
      Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions), // Bottom
      Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions), // Left
      Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions), // Right
    ];

    // Skill bubbles
    const skillNames = Skills.slice(0, 15).map(s => s.name);
    const bubbles = skillNames.map((name) => {
      const radius = 35 + Math.random() * 15;
      const x = Math.random() * (width - radius * 2) + radius;
      const y = Math.random() * (height - radius * 2) + radius;
      
      const body = Bodies.circle(x, y, radius, {
        restitution: 0.9,
        friction: 0.005,
        frictionAir: 0.02,
        render: {
          fillStyle: 'rgba(10, 13, 15, 0.8)',
          strokeStyle: '#00d4ff',
          lineWidth: 2,
        },
        label: name,
      });
      
      // Initial push
      Matter.Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
      });

      return body;
    });

    World.add(engine.world, [...walls, ...bubbles]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Custom mouse repulse effect
    Events.on(engine, 'beforeUpdate', () => {
      if (!mouse.position.x) return;
      bubbles.forEach(bubble => {
        const dx = bubble.position.x - mouse.position.x;
        const dy = bubble.position.y - mouse.position.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.005;
          Matter.Body.applyForce(bubble, bubble.position, {
            x: (dx / dist) * force,
            y: (dy / dist) * force
          });
        }
      });
    });

    // Custom render for text inside circles
    Events.on(render, 'afterRender', () => {
      const context = render.context;
      bubbles.forEach(bubble => {
        const { x, y } = bubble.position;
        context.font = '12px "Fira Code", monospace';
        context.fillStyle = '#e0f2fe';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(bubble.label, x, y);
      });
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Handle Resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;
      
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;
      
      Matter.Body.setPosition(walls[1], { x: newWidth / 2, y: newHeight + 50 });
      Matter.Body.setPosition(walls[3], { x: newWidth + 50, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-xl glass-glow overflow-hidden relative cursor-crosshair">
      <div className="absolute top-4 left-4 font-mono text-cyan/50 text-xs">interactive_sandbox --matter.js</div>
      <div ref={sceneRef} className="w-full h-full absolute inset-0" />
    </div>
  );
};

export default ZeroGravitySkills;
