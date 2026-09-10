import { useEffect, useState } from "react";
import { useLanguage } from "../../controllers/LanguageController";
import type { Locale } from "../../types/content";
import { SmartLink } from "./SmartLink";
import { FiBriefcase, FiFileText, FiGrid, FiLayers, FiMessageCircle, FiUser } from "react-icons/fi";
import { useHeaderAppearance } from "../../controllers/useHeaderAppearance";
import { AnimatedLogo } from "./AnimatedLogo";
import { useRoute } from "../../controllers/useRoute";

export function Header() {
  const { locale, setLocale, copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const { light, active } = useHeaderAppearance();
  const route = useRoute();
  const logoInteractive = route.kind === "home" && active === "";
  useEffect(() => { const close = () => setOpen(false); window.addEventListener("hashchange", close); return () => window.removeEventListener("hashchange", close); }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [open]);
  const items = [
    ["bio", copy.nav.bio, FiUser],
    ["portfolio", copy.nav.portfolio, FiGrid],
    ["career", copy.nav.career, FiBriefcase],
    ["services", copy.nav.services, FiLayers],
    ["contact", copy.nav.contact, FiMessageCircle],
  ] as const;
  const descriptions = locale === "pt-br" ? [
    "Perfil, abordagem e áreas de atuação", "Projetos selecionados e estudos de caso", "Experiência, responsabilidades e tecnologias", "Soluções para produtos digitais", "Canais para iniciar uma conversa",
  ] : locale === "es" ? [
    "Perfil, enfoque y áreas de actuación", "Proyectos seleccionados y casos de estudio", "Experiencia, responsabilidades y tecnologías", "Soluciones para productos digitales", "Canales para iniciar una conversación",
  ] : [
    "Profile, approach and areas of expertise", "Selected projects and case studies", "Experience, responsibilities and technologies", "Solutions for digital products", "Ways to start a conversation",
  ];
  const languageLabel = locale === "pt-br" ? "Idioma" : locale === "es" ? "Idioma" : "Language";
  const resumeDescription = locale === "pt-br" ? "Experiência, formação e certificações" : locale === "es" ? "Experiencia, formación y certificaciones" : "Experience, education and certifications";
  return <header className="site-header" data-tone={light ? "light" : "dark"}><nav className="nav-shell" aria-label="Principal">
    <AnimatedLogo interactive={logoInteractive} />
    <button className={`menu-toggle ${open ? "is-open" : ""}`} aria-expanded={open} aria-controls="primary-navigation" aria-label={copy.a11y.menu} onClick={() => setOpen(!open)}><span /><span /></button>
    <div id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
      {items.map(([id, label, Icon], index) => <a key={id} href={`/${locale}/#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}><span className="nav-section-icon" aria-hidden="true"><Icon /></span><span className="nav-item-copy"><strong>{label}</strong><small>{descriptions[index]}</small></span><span className="nav-arrow" aria-hidden="true">↗</span></a>)}
      <SmartLink href={`/${locale}/resume`} className={`resume-link ${active === "resume" ? "is-active" : ""}`}><span className="nav-section-icon" aria-hidden="true"><FiFileText /></span><span className="nav-item-copy"><strong>{copy.nav.resume}</strong><small>{resumeDescription}</small></span><span className="nav-arrow" aria-hidden="true">↗</span></SmartLink>
      <label className="language"><span className="language-caption">{languageLabel}</span><select value={locale} aria-label={copy.a11y.language} onChange={(e) => setLocale(e.target.value as Locale)}><option value="pt-br">🇧🇷 Português</option><option value="en">🇺🇸 English</option><option value="es">🇪🇸 Español</option></select></label>
    </div>
  </nav></header>;
}
