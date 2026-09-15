import { useEffect, useRef } from "react";

const MouseSpotlightBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(0, 212, 255, 0.10), transparent 65%)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50" style={{ backgroundColor: "#030303" }}>
      {/* Interactive glow — follows cursor */}
      <div ref={glowRef} className="absolute inset-0 transition-none pointer-events-none" />
      {/* Subtle corner vignette to frame content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(3,3,3,0.7) 100%)",
        }}
      />
    </div>
  );
};

export default MouseSpotlightBackground;
