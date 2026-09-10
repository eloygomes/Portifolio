import { carrerDataInfo } from "../Component/PortS/carrerData";

const overview = [
  { period: "2021 — hoje", role: "FULL STACK DEVELOPER", company: "Freelance", segment: "Designer / Full Stack Developer", tools: ["React JS", "React Native", "TypeScript", "Python", "Node", "Docker"] },
  { period: "2019 — 2021", role: "FULL STACK DEVELOPER", company: "Grupo Skill", segment: "Contabilidade / Software house", tools: ["React JS", "Node JS", "JavaScript", "WordPress", "Figma"] },
  { period: "2018", role: "SUPERVISOR DE E-COMMERCE", company: "Coletek", segment: "Loja virtual / Marketplace", tools: ["Excel", "Tableau", "Siege"] },
  { period: "2015 — 2018", role: "DIRETOR DE ARTE", company: "Coletek", segment: "Fabricante e distribuidora de materiais de informática", tools: ["Photoshop", "Illustrator", "InDesign", "CorelDraw"] },
  { period: "2013 — 2014", role: "WEB DESIGNER", company: "Comander Marketing", segment: "Agência de publicidade e editora", tools: ["Photoshop", "Illustrator", "InDesign", "Lightroom"] },
  { period: "2013 — 2014", role: "DESIGNER GRÁFICO", company: "UM agência & editora", segment: "Agência de publicidade e editora", tools: ["Photoshop", "Illustrator", "InDesign", "CorelDraw"] },
];

// Preserve the legacy source verbatim, including full periods and tool lists.
const originals = [carrerDataInfo.job06, carrerDataInfo.job05, carrerDataInfo.job04, carrerDataInfo.job03, carrerDataInfo.job02, carrerDataInfo.job01];
export const career = overview.map((item, index) => {
  const original = originals[index];
  return {
    ...item,
    period: original.jobDuration,
    tools: original.jobTools,
    description: original.jobDesc,
    address: "jobAddress" in original ? original.jobAddress : original.jobAdress,
    image: original.jobImg,
  };
});
