import type { CSSProperties } from "react";
import { SiDocker, SiMongodb, SiNginx, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSpringboot, SiTypescript } from "react-icons/si";
const technologies = [
  ["TypeScript", SiTypescript, "#3178C6"],
  ["React", SiReact, "#61DAFB"],
  ["React Native", SiReact, "#61DAFB"],
  ["Node.js", SiNodedotjs, "#339933"],
  ["Python", SiPython, "#3776AB"],
  ["Java / Spring", SiSpringboot, "#6DB33F"],
  ["PostgreSQL", SiPostgresql, "#4169E1"],
  ["MongoDB", SiMongodb, "#47A248"],
  ["Docker", SiDocker, "#2496ED"],
  ["NGINX", SiNginx, "#009639"],
] as const;
export function TechnologyLogos() {
  return <div className="technology-logos">
    {technologies.map(([name, Icon, color]) => (
      <span className="technology-logo" key={name} tabIndex={0}
        role="img" aria-label={name}
        style={{ "--technology-color": color } as CSSProperties}>
        <Icon aria-hidden="true" />
        <span className="technology-name" aria-hidden="true">{name}</span>
      </span>
    ))}
  </div>;
}
