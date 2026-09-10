import { useState, type ReactNode } from "react";
import type { IconType } from "react-icons";
import { FiArrowLeft, FiAward, FiBookOpen, FiBriefcase, FiCalendar, FiCode, FiDownload, FiExternalLink, FiGlobe, FiUser } from "react-icons/fi";
import { useLanguage } from "../../controllers/LanguageController";
import { professionalProfile, resumeExperience, education, technologyGroups, courses, languages } from "../../data/resume";
import cv from "../../assets/cv2025.pdf";
import { SmartLink } from "../components/SmartLink";
import { TechnologyBadge } from "../components/TechnologyBadge";
import "../../styles/resume.css";
function SectionHeading({icon:Icon,children}:{icon:IconType;children:ReactNode}){return <div className="resume-section-heading"><Icon aria-hidden="true"/><h2>{children}</h2></div>}
export function ResumePage() {
  const {copy,locale}=useLanguage();
  const [courseYear,setCourseYear]=useState<number|'all'>('all');
  const years=[...new Set(courses.map(course=>course.year))].sort((a,b)=>b-a);
  const visibleCourses=courseYear==='all' ? courses : courses.filter(course=>course.year===courseYear);
  return <main id="main" className="resume-page">
    <header>
      <SmartLink href={`/${locale}/`} className="back-link"><FiArrowLeft/> {copy.resume.back}</SmartLink>
      <div className="resume-hero-copy"><h1>{copy.resume.title}</h1><p>{copy.resume.intro}</p></div>
      <div className="resume-actions" lang="pt-BR">
        <a className="button primary" href="https://eloygomes.com/assets/cv2025-fcef9e93.pdf" target="_blank" rel="noopener noreferrer">Ver currículo em PDF <FiExternalLink aria-hidden="true"/></a>
        <a className="button" href={cv} download="Eloy-Gomes-Curriculo.pdf">{copy.resume.download}<FiDownload aria-hidden="true"/></a>
      </div>
    </header>
    <div lang="pt-BR">
      <nav className="resume-index" aria-label="Seções do currículo">{[['perfil','Perfil'],['experiencia','Experiência'],['formacao','Formação'],['tecnologias','Tecnologias'],['cursos','Cursos e certificações'],['idiomas','Idiomas']].map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <section id="perfil"><SectionHeading icon={FiUser}>Perfil profissional</SectionHeading><p className="resume-prose">{professionalProfile}</p></section>
      <section id="experiencia"><SectionHeading icon={FiBriefcase}>Experiência</SectionHeading><div className="resume-experience">{resumeExperience.map(item=><article key={`${item.company}${item.role}`}><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.company}</p><small>{item.segment}</small><p className="resume-prose resume-job-description">{item.description}</p></div></article>)}</div></section>
      <section id="formacao"><SectionHeading icon={FiBookOpen}>Formação acadêmica</SectionHeading><div className="resume-education">{education.map(item=><article key={item.course}><span>{item.period} · {item.status}</span><h3>{item.course}</h3><p>{item.institution}</p></article>)}</div></section>
      <section id="tecnologias"><SectionHeading icon={FiCode}>Conhecimentos e tecnologias</SectionHeading><div className="resume-technology-groups">{technologyGroups.map(group=><div key={group.name}><h3>{group.name}</h3><div className="resume-tech">{group.items.map(item=><TechnologyBadge key={item} name={item}/>)}</div></div>)}</div></section>
      <section id="cursos" className="resume-certifications">
        <div className="resume-section-heading"><FiAward aria-hidden="true"/><h2>Licenças e certificados <span>({courses.length})</span></h2></div>
        <div>
          <div className="resume-year-filter" role="group" aria-label="Filtrar certificados por ano">
            <button type="button" className={courseYear==='all'?'active':''} aria-pressed={courseYear==='all'} onClick={()=>setCourseYear('all')}>Todos <span>{courses.length}</span></button>
            {years.map(year=><button type="button" key={year} className={courseYear===year?'active':''} aria-pressed={courseYear===year} onClick={()=>setCourseYear(year)}>{year} <span>{courses.filter(course=>course.year===year).length}</span></button>)}
          </div>
          <p className="resume-filter-result" aria-live="polite">Exibindo {visibleCourses.length} {visibleCourses.length===1?'certificado':'certificados'}</p>
          <div className="resume-courses">{visibleCourses.map(course=><article key={course.name}>
            <div className="resume-course-icon" aria-hidden="true"><FiBookOpen/></div>
            <div className="resume-course-content"><h3>{course.name}</h3><p className="resume-course-meta"><span>{course.institution}</span><span><FiCalendar aria-hidden="true"/> Emitido em {course.date}</span>{course.expires&&<span>Expira em {course.expires}</span>}</p>{course.competencies&&<div className="resume-course-skills">{course.competencies.map(skill=><span key={skill}>{skill}</span>)}</div>}</div>
            <a href={course.credential} target="_blank" rel="noopener noreferrer" aria-label={`Exibir credencial: ${course.name}`}>Exibir credencial <FiExternalLink aria-hidden="true"/></a>
          </article>)}</div>
        </div>
      </section>
      <section id="idiomas"><SectionHeading icon={FiGlobe}>Idiomas</SectionHeading><dl className="resume-languages">{languages.map(([name,level])=><div key={name}><dt>{name}</dt><dd>{level}</dd></div>)}</dl></section>
    </div>
    <footer aria-label="Contato profissional"><a href="mailto:eloy.gomes@icloud.com">eloy.gomes@icloud.com</a><a href="https://github.com/eloygomes" target="_blank" rel="noopener noreferrer">GitHub <FiExternalLink/></a><a href="https://www.linkedin.com/in/eloyrockgomes/" target="_blank" rel="noopener noreferrer">LinkedIn <FiExternalLink/></a><SmartLink href={`/${locale}/`}>Portfólio <FiExternalLink/></SmartLink></footer>
  </main>;
}
