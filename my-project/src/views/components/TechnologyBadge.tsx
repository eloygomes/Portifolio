import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FiCode, FiColumns, FiPenTool, FiRadio, FiRefreshCw, FiServer, FiShield, FiShoppingCart, FiTerminal } from "react-icons/fi";
import { SiAdobeillustrator, SiAdobeindesign, SiAdobelightroom, SiAdobephotoshop, SiAstro, SiBootstrap, SiCss3, SiDocker, SiExpo, SiFigma, SiFirebase, SiGit, SiHtml5, SiJavascript, SiJquery, SiMaterialdesign, SiMicrosoftexcel, SiMongodb, SiMysql, SiNginx, SiNodedotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiSass, SiSketch, SiTableau, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVite, SiWordpress } from "react-icons/si";

type TechnologyVisual = { icon: IconType; color: string };

const visuals: Record<string, TechnologyVisual> = {
  html:{icon:SiHtml5,color:"#E34F26"},css:{icon:SiCss3,color:"#1572B6"},javascript:{icon:SiJavascript,color:"#F7DF1E"},typescript:{icon:SiTypescript,color:"#3178C6"},jquery:{icon:SiJquery,color:"#0769AD"},
  react:{icon:SiReact,color:"#61DAFB"},reactnative:{icon:SiReact,color:"#61DAFB"},bootstrap:{icon:SiBootstrap,color:"#7952B3"},materialize:{icon:SiMaterialdesign,color:"#EE6E73"},materialdesign:{icon:SiMaterialdesign,color:"#6750A4"},
  tailwindcss:{icon:SiTailwindcss,color:"#06B6D4"},astro:{icon:SiAstro,color:"#FF5D01"},vite:{icon:SiVite,color:"#646CFF"},sass:{icon:SiSass,color:"#CC6699"},wordpress:{icon:SiWordpress,color:"#21759B"},
  node:{icon:SiNodedotjs,color:"#339933"},python:{icon:SiPython,color:"#3776AB"},php:{icon:SiPhp,color:"#777BB4"},expo:{icon:SiExpo,color:"#000020"},mysql:{icon:SiMysql,color:"#4479A1"},mongodb:{icon:SiMongodb,color:"#47A248"},firebase:{icon:SiFirebase,color:"#FFCA28"},postgresql:{icon:SiPostgresql,color:"#4169E1"},
  git:{icon:SiGit,color:"#F05032"},docker:{icon:SiDocker,color:"#2496ED"},nginx:{icon:SiNginx,color:"#009639"},figma:{icon:SiFigma,color:"#F24E1E"},sketch:{icon:SiSketch,color:"#F7B500"},photoshop:{icon:SiAdobephotoshop,color:"#31A8FF"},illustrator:{icon:SiAdobeillustrator,color:"#FF9A00"},indesign:{icon:SiAdobeindesign,color:"#FF3366"},lightroom:{icon:SiAdobelightroom,color:"#31A8FF"},
  coreldraw:{icon:FiPenTool,color:"#00A65A"},excel:{icon:SiMicrosoftexcel,color:"#217346"},tableau:{icon:SiTableau,color:"#E97627"},vscode:{icon:SiVisualstudiocode,color:"#007ACC"},api:{icon:FiCode,color:"#0284C7"},websocket:{icon:FiRadio,color:"#65A30D"},scrum:{icon:FiRefreshCw,color:"#009FDA"},kanban:{icon:FiColumns,color:"#0052CC"},vps:{icon:FiServer,color:"#64748B"},ssh:{icon:FiTerminal,color:"#111827"},siege:{icon:FiShoppingCart,color:"#F59E0B"},
};

function normalizeTechnology(name: string) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (normalized === "reactjs") return "react";
  if (normalized === "nodejs") return "node";
  if (normalized === "scketch") return "sketch";
  return normalized;
}

export function TechnologyBadge({ name }: { name: string }) {
  const visual = visuals[normalizeTechnology(name)] ?? { icon: FiShield, color: "#A9A2B9" };
  const Icon = visual.icon;
  return <span className="technology-pill" style={{ "--brand-color": visual.color } as CSSProperties}><Icon aria-hidden="true" />{name}</span>;
}
