import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import originalConfig from "../../Component/particles/config/particles-config";

export default function OriginalParticles() {
  const [reduced, setReduced] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const init = useCallback(async (engine: Engine) => { await loadFull(engine); }, []);
  const options = useMemo(() => {
    // Reuse the original visual configuration, contained within the current hero.
    const config = structuredClone(originalConfig);
    config.fullScreen.enable = false;
    if (reduced) {
      config.particles.move.enable = false;
      config.particles.size.animation.enable = false;
      config.particles.opacity.animation.enable = false;
      config.interactivity.events.onHover.enable = false;
      config.interactivity.events.onClick.enable = false;
      config.interactivity.events.onHover.parallax.enable = false;
    }
    return config as unknown as ISourceOptions;
  }, [reduced]);
  return <Particles id="original-hero-particles" className="original-hero-particles" init={init} options={options} />;
}
