import type { Project } from "../types/content";
import c3 from "../images/uiux06.png";
import skill from "../images/uiux05.png";
import evg from "../images/uiux04.png";
import overcast from "../images/uiux03.png";
import wellness from "../images/uiux02.png";
import seeking from "../images/uiux01.png";
import c3a from "../images/mockup_c3tech_00.png";
import c3b from "../images/mockup_c3tech_03.png";
import skilla from "../images/mockup_site_grupoSkill_01.png";
import skillb from "../images/mockup_site_grupoSkill_06.png";
import overcastGallery from "../images/Presentation_Overcast.png";
import wellnessGallery from "../images/Presentation_Wellness.png";
import seekingGallery from "../images/Presentation_seeking4elements.png";

const localized = (title: string, category: string, description: string, context: string, solution: string) => ({
  "pt-br": { title, category, description, context, solution },
  en: { title, category, description, context, solution },
  es: { title, category, description, context, solution },
});

export const projects: Project[] = [
  { slug: "c3tech", name: "C3Tech", year: "2021", featured: true, image: c3, gallery: [c3a, c3b], href: "http://www.c3tech.com.br/", stack: ["Figma", "React JS", "Tailwind CSS", "Node", "Firebase", "Docker"], copy: localized("Criação de imagem conceito", "Institucional · E-commerce", "Desenvolvimento de página institucional e e-commerce para a C3Tech.", "A C3Tech precisava reunir sua presença institucional e seu catálogo de e-commerce em uma experiência digital coerente.", "Uma interface organizada para apresentar a marca e facilitar a descoberta de produtos.") },
  { slug: "grupo-skill", name: "Grupo Skill", year: "2021", featured: true, image: skill, gallery: [skilla, skillb], href: "https://gruposkill.com.br/", stack: ["Figma", "React JS", "Tailwind CSS", "WordPress", "PHP", "Docker"], copy: localized("Website institucional", "Website · UI/UX", "Desenvolvimento de página institucional do Grupo Skill.", "O projeto organizou a presença digital institucional do Grupo Skill.", "A solução apresenta conteúdos e áreas do grupo em uma interface responsiva e visualmente consistente.") },
  { slug: "evg-resist", name: "EVG — Resist", year: "2021", image: evg, gallery: [evg], href: "https://eloygomes.com", stack: ["Sketch", "Photoshop", "Astro JS", "React JS", "Tailwind CSS", "MongoDB"], copy: localized("Site institucional", "Música · Website", "Desenvolvimento de site institucional para o disco Resist do artista EVG.", "O lançamento precisava de uma presença digital própria para apresentar o disco e sua identidade.", "Uma experiência visual dedicada ao projeto musical Resist.") },
  { slug: "overcast", name: "Overcast", year: "2021", image: overcast, gallery: [overcastGallery], href: "https://overcast.fm/", stack: ["Figma", "Affinity", "React Native", "NativeWind CSS", "Firebase"], copy: localized("Proposta de redesign do app", "Mobile · Product Design", "Proposta de modernização do app.", "Estudo conceitual sobre como atualizar a experiência visual do aplicativo Overcast.", "Uma proposta de interface que reorganiza hierarquia, navegação e apresentação do conteúdo.") },
  { slug: "wellness", name: "Wellness", year: "2021", image: wellness, gallery: [wellnessGallery], href: "https://wellness.com.br/", stack: ["Figma", "React JS", "Tailwind CSS", "WordPress", "PHP", "Firebase"], copy: localized("Criação de imagem conceito", "Website · Brand experience", "Desenvolvimento de site para a marca Wellness, com o objetivo de criar uma conexão com os clientes e representar os valores da marca e seus produtos.", "O site deveria aproximar a marca de seus clientes sem perder a clareza de apresentação dos produtos.", "Uma direção visual alinhada aos valores da Wellness, aplicada a uma experiência web responsiva.") },
  { slug: "seeking-4-elements", name: "Seeking 4 Elements", year: "2021", image: seeking, gallery: [seekingGallery], href: "https://seeking4elements.com/", stack: ["Figma", "Adobe Photoshop", "Astro JS"], copy: localized("Site de portfólio", "Fotografia · Website", "Desenvolvimento de site para o fotógrafo com o objetivo de criar um portfólio online.", "O trabalho fotográfico precisava de um espaço digital dedicado e de leitura imediata.", "Uma experiência de portfólio em que as imagens assumem o protagonismo.") },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
