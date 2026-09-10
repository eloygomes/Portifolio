import { useEffect, useRef } from "react";
import { useLanguage } from "../../controllers/LanguageController";
import { navigate } from "../../controllers/useRoute";

export function AnimatedLogo({ interactive }: { interactive: boolean }) {
  const host = useRef<HTMLSpanElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const { locale } = useLanguage();
  useEffect(() => {
    let cancelled = false;
    let dispose = () => {};
    import("../../services/logoAnimation").then(({ animateLogo }) => {
      if (!cancelled && host.current && button.current) dispose = animateLogo(host.current, button.current, interactive);
    }).catch(() => { /* Static HTML fallback if WebGL cannot load. */ });
    return () => { cancelled = true; dispose(); };
  }, [interactive]);
  const label = locale === "pt-br" ? "EVG: clique para mudar a cor; arraste ou use as setas para girar" : locale === "es" ? "EVG: clic para cambiar color; arrastra o usa las flechas para girar" : "EVG: click to change color; drag or use arrow keys to rotate";
  const homeLabel = locale === "pt-br" ? "Ir para o início" : locale === "es" ? "Ir al inicio" : "Go to home";
  return <span className="logo-interaction">
    <button ref={button} type="button" className={`logo logo-control ${interactive ? "" : "logo-static"}`} aria-label={interactive ? label : homeLabel} title={interactive ? label : homeLabel} onClick={() => { if (!interactive) navigate(`/${locale}/`); }}>
      <span className="logo-text">EVG</span>
      <span ref={host} className="logo-scene" aria-hidden="true" />
    </button>
  </span>;
}
