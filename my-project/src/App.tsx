import { useEffect } from "react";
import { Header } from "./views/components/Header";
import { HomePage } from "./views/pages/HomePage";
import { ProjectPage } from "./views/pages/ProjectPage";
import { ResumePage } from "./views/pages/ResumePage";
import { LanguageProvider, useLanguage } from "./controllers/LanguageController";
import { useRoute } from "./controllers/useRoute";
import { getProject } from "./data/projects";
import "./styles/global.css";

function AppView() {
  const route = useRoute();
  const { locale, copy } = useLanguage();
  const project = route.kind === "project" ? getProject(route.slug) : undefined;

  useEffect(() => {
    const title = project ? `${project.name} — Eloy Gomes` : route.kind === "resume" ? `${copy.resume.title} — Eloy Gomes` : "Eloy Gomes — Software Engineer";
    const description = project ? project.copy[locale].description : copy.meta.description;
    document.title = title;
    document.documentElement.lang = locale;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [copy, locale, project, route.kind]);

  return (
    <>
      <a className="skip-link" href="#main">{copy.a11y.skip}</a>
      <Header />
      {route.kind === "project" && project ? <ProjectPage project={project} /> : route.kind === "resume" ? <ResumePage /> : <HomePage />}
    </>
  );
}

export default function App() {
  return <LanguageProvider><AppView /></LanguageProvider>;
}
