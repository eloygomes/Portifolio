import { FiArrowDown, FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLanguage } from "../../controllers/LanguageController";
import { projects } from "../../data/projects";
import { career } from "../../data/career";
import { technologyGroups } from "../../data/resume";
import { CareerItem } from "../components/CareerItem";
import { FaWhatsapp } from "react-icons/fa";
import { ContactBackground } from "../components/ContactBackground";
import portrait from "../../images/img01.01.png";
import { ParticleBackground } from "../components/ParticleBackground";
import { ProgressiveImage } from "../components/ProgressiveImage";
import { SmartLink } from "../components/SmartLink";

import { TechnologyBadge } from "../components/TechnologyBadge";

const bioAreas = ["Front-end", "Back-end", "Mobile", "UI/UX", "Banco de Dados", "DevOps", "Metodologias Ágeis"];
const bioTechnologies = [
  ...technologyGroups.flatMap(group => group.items),
  "Figma", "Sketch", "Photoshop", "Illustrator", "InDesign", "CorelDraw", "Lightroom",
  "Excel", "Tableau", "Siege", "Material Design", "PHP", "VPS", "SSH", "VS Code",
];
export function HomePage() {
  const { copy, locale } = useLanguage();
  const services = [
    [copy.services.front, copy.services.frontText, "01"],
    [copy.services.back, copy.services.backText, "02"],
    [copy.services.mobile, copy.services.mobileText, "03"],
    [copy.services.desktop, copy.services.desktopText, "04"],
    [copy.services.technical, copy.services.technicalText, "05"],
    [copy.services.data, copy.services.dataText, "06"],
  ];
  return <main id="main">
    <section className="hero" aria-labelledby="hero-title"><ParticleBackground /><div className="hero-glow" /><div className="hero-content"><div className="hero-copy-panel"><p className="eyebrow">{copy.hero.eyebrow}</p><h1 id="hero-title">{copy.hero.titleA}<br/><em>{copy.hero.titleB}</em></h1><p className="hero-intro">{copy.hero.intro}</p></div><div className="hero-actions"><a className="button primary" href="#portfolio">{copy.hero.projects} <FiArrowDownRight /></a><a className="button ghost" href="mailto:eloy.gomes@icloud.com">{copy.hero.contact}</a></div></div><div className="portrait-wrap"><img src={portrait} alt="Eloy Gomes" fetchPriority="high" /><span className="portrait-ring" /></div><a className="scroll-cue" href="#bio"><span>{copy.hero.scroll}</span><FiArrowDown aria-hidden="true"/></a></section>
    <section className="section bio-section" id="bio"><div className="section-heading"><p className="section-label">{copy.bio.label}</p><h2>{copy.bio.title}</h2></div><div className="bio-grid"><p className="bio-lead">{copy.bio.lead}</p><div className="bio-facts">{[[copy.bio.education,copy.bio.educationText],[copy.bio.digital,copy.bio.digitalText],[copy.bio.creative,copy.bio.creativeText]].map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div><div className="expertise-rail"><div className="area-row"><span>{copy.bio.areas}</span><div>{bioAreas.map(item=><span key={item}>{item}</span>)}</div></div><div className="stack-rail"><span>{copy.bio.stack}</span><div className="bio-technology-list">{bioTechnologies.map(item=><TechnologyBadge key={item} name={item}/>)}</div></div></div></section>
    <section className="section portfolio-section" id="portfolio">
      <div className="section-heading">
        <p className="section-label">{copy.portfolio.label}</p>
        <h2>{copy.portfolio.title}</h2>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.slug}>
            <SmartLink href={`/${locale}/portfolio/${project.slug}`}>
              <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}<span /></span>
              <ProgressiveImage src={project.image} alt={`${project.name} — ${project.copy[locale].title}`} />
              <div className="project-title">
                <h3>{project.name}</h3>
                <span className="project-open"><span className="sr-only">{copy.portfolio.open}</span><FiArrowUpRight aria-hidden="true" /></span>
              </div>
            </SmartLink>
          </article>
        ))}
      </div>
    </section>
    <section className="section career-section" id="career"><div className="section-heading"><p className="section-label">{copy.career.label}</p><h2>{copy.career.title}</h2></div><div className="career-list">{career.map((item,index)=><CareerItem key={`${item.company}-${item.period}`} item={item} index={index} />)}</div></section>
    <section className="section services-section" id="services"><div className="section-heading"><p className="section-label">{copy.services.label}</p><h2>{copy.services.title}</h2></div><div className="services-grid">{services.map(([title,text,num])=><article key={title}><span>{num}</span><h3>{title}</h3><p>{text}</p><a href="mailto:eloy.gomes@icloud.com" aria-label={`${copy.contact.email}: ${title}`}><FiArrowUpRight /></a></article>)}</div></section>
    <section className="contact-section" id="contact"><ContactBackground /><p className="section-label">{copy.contact.label}</p><h2>{copy.contact.title}</h2><p>{copy.contact.text}</p><a className="contact-email" href="mailto:eloy.gomes@icloud.com">eloy.gomes@icloud.com <FiArrowUpRight /></a><div className="socials"><a href="https://www.linkedin.com/in/eloyrockgomes/" target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn</a><a href="https://github.com/eloygomes" target="_blank" rel="noreferrer"><FiGithub/> GitHub</a><a href="mailto:eloy.gomes@icloud.com"><FiMail/> Email</a><a className="whatsapp-link" href="https://wa.me/5511981871629" target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp</a></div><footer><span>© {new Date().getFullYear()} Eloy Gomes</span><span>Software Engineer · Full Stack Developer</span></footer></section>
  </main>;
}
