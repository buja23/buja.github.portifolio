import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

// react-tsparticles (v2) types its engine as `tsparticles-engine`, while the
// installed `tsparticles` (v4) ships `@tsparticles/engine`. The two generation
// types are structurally different, so bridge them explicitly here.
type FullEngine = Parameters<typeof loadFull>[0];

const GlobalBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine as unknown as FullEngine);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#050505]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00d4ff",
            },
            links: {
              color: "#00d4ff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default GlobalBackground;
