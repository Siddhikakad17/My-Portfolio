import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const SiteBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ["#2563eb", "#00c9a7", "#7c3aed"] },
      links: { enable: false },
  move: { enable: true, speed: 0.6, outModes: { default: "out" } },
      size: { value: { min: 2, max: 5 } },
      opacity: { value: 0.15, random: false },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false },
      },
      modes: { repulse: { distance: 80 } },
    },
  };

  return (
    <div className="site-bg">
      <Particles id="tsparticles" init={particlesInit} options={options} />
      {/* Two decorative blurred blobs for glass effect */}
      <div className="bg-blob blob-left" />
      <div className="bg-blob blob-right" />
    </div>
  );
};

export default SiteBackground;
