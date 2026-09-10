import { career } from './career';
// Sources: owner-provided Curriculo 2026.pdf, public LinkedIn profile eloyrockgomes.
// Checked 2026-09-10. Credential URLs verified directly with Alura.
// Dates follow PDF > LinkedIn priority; LinkedIn issue dates can differ from Alura completion dates.
export const professionalProfile = 'Graduando em Engenharia de Software e formado em Design Gráfico. Desde 2019, atuo no desenvolvimento de software, com foco em soluções web e mobile e experiência em Front-end e Back-end. Trabalho com HTML5, CSS, SASS, WordPress, SQL, MongoDB, JavaScript, React.js, React Native, TypeScript, Node.js e Python. Minha experiência anterior como diretor de arte para marcas de tecnologia conecta visão estética, atenção à UI/UX e pensamento técnico na construção de produtos digitais.';
const descriptions = [
  'Brainstorm com clientes, prototipagem e criação de wireframes de alta fidelidade. Desenvolvimento de interfaces web intuitivas e responsivas, implementação de APIs e servidores para integração entre camadas do sistema. Atuação no gerenciamento e manutenção de bancos de dados, sempre com foco em escalabilidade e experiência do usuário.',
  'Desenvolvimento e manutenção de sites e plataformas, implementando novas funcionalidades, correções e otimizações de código. Trabalhei com HTML5, CSS3, JavaScript, Bootstrap, React.js, Vite, Tailwind CSS, SQL e WordPress, garantindo interfaces modernas, acessíveis e responsivas.',
  'Atuação no planejamento e execução de ações de branding, coordenação de equipe e desenvolvimento de estratégias de comunicação on e offline. Responsável pela criação de campanhas digitais, gestão de conteúdo para redes sociais e elaboração de materiais gráficos. Desenvolvimento de landing pages, e-mails marketing e materiais institucionais com foco em consistência visual e fortalecimento da marca.',
];
// Preserve additional experiences already documented on the portfolio.
export const resumeExperience = career.map((item,index) => ({...item,
  ...(index===0 ? {period:'Set/2021 — Atualmente', company:'Freelancer', description:descriptions[0]} : {}),
  ...(index===1 ? {period:'Out/2019 — Set/2021', description:descriptions[1]} : {}),
  ...(index===3 ? {period:'Jan/2015 — Dez/2018', description:descriptions[2]} : {}),
}));
export const education = [
  {course:'Bacharelado em Engenharia de Software', institution:'Universidade Cruzeiro do Sul', period:'2025 — 2029', status:'Em andamento'},
  {course:'Tecnólogo em Design Gráfico', institution:'Universidade Paulista', period:'2014 — 2016', status:'Concluído'},
];
export const technologyGroups = [
  {name:'Front-end',items:['HTML','CSS','JavaScript','TypeScript','jQuery','React.js','Bootstrap','Materialize','Tailwind CSS','Astro','Vite','SASS','WordPress']},
  {name:'Back-end',items:['API','WebSocket','Node.js','Python']},
  {name:'Mobile',items:['React Native','Expo']},
  {name:'Banco de Dados',items:['MySQL','MongoDB','Firebase','PostgreSQL']},
  {name:'DevOps',items:['Git','Docker','NGINX']},
  {name:'Metodologias Ágeis',items:['Scrum','Kanban']},
];
export const languages = [['Português','Nativo ou bilíngue'],['Inglês','Básico a intermediário'],['Espanhol','Básico'],['Italiano','Básico']];
type Certification = {name:string; institution:'Alura'|'Udemy'; date:string; year:number; credential:string; competencies?:string[]; expires?:string};
const alura = (credential:string) => `https://cursos.alura.com.br/certificate/${credential}`;
export const courses: Certification[] = [
  {name:'Desenvolvimento Java',institution:'Udemy',date:'Ago/2026',year:2026,credential:'https://www.udemy.com/certificate/UC-248169c2-152e-459d-8807-141aa33c3a63/',expires:'Ago/2036'},
  {name:'Modelagem de dados: construindo o modelo físico',institution:'Alura',date:'Out/2025',year:2025,credential:alura('bf237fb9-5c52-4e24-b7d3-d140f4e3c383'),competencies:['Modelagem de dados']},
  {name:'Modelagem de dados: aplicando a normalização',institution:'Alura',date:'Set/2025',year:2025,credential:alura('c6e7195a-15f1-48af-9135-efde30fec428'),competencies:['Modelagem de dados']},
  {name:'Modelagem de dados: desenvolvendo o modelo lógico',institution:'Alura',date:'Ago/2025',year:2025,credential:alura('61232087-5402-4fcd-b8d0-d2ef342c3579'),competencies:['Modelagem de dados']},
  {name:'Modelagem de dados: identificando entidades, atributos e relacionamentos',institution:'Alura',date:'Jul/2025',year:2025,credential:alura('9dbf875a-f847-4b5a-bc66-28d0b4a98113'),competencies:['Modelagem de dados']},
  {name:'WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB',institution:'Alura',date:'Jun/2025',year:2025,credential:alura('2fa66fe7-c6e0-4d26-a008-3d8c564cdc0b')},
  {name:'Python e GPT: crie seu chatbot com IA',institution:'Alura',date:'Mai/2025',year:2025,credential:alura('00b54eb1-8f8a-4212-a3fe-b5a78567b171')},
  {name:'UI Design: melhorando a experiência de um app com UI Patterns',institution:'Alura',date:'Abr/2025',year:2025,credential:alura('6093dafc-9d48-4b91-8e34-2ae7f731951b'),competencies:['Desenvolvimento web']},
  {name:'UI Design: teste de usabilidade',institution:'Alura',date:'Mar/2025',year:2025,credential:alura('93f8f8bd-9448-4300-8ae8-4ecbee95f2b3'),competencies:['Desenvolvimento web']},
  {name:'UI Design: construindo o produto final',institution:'Alura',date:'Fev/2025',year:2025,credential:alura('32009ee5-3ca8-4ec6-ab7e-6841f21d700c'),competencies:['Desenvolvimento web','Web design']},
  {name:'React com TypeScript: desenvolvendo uma área administrativa',institution:'Alura',date:'Jan/2025',year:2025,credential:alura('1699a347-8dd2-46a7-950c-2a479637065e')},
  {name:'React: migrando para TypeScript',institution:'Alura',date:'Dez/2024',year:2024,credential:alura('9278e6fb-344a-4b8d-ab6d-648c9fde40e6')},
  {name:'React e Node.js: consumindo APIs no React no projeto full stack',institution:'Alura',date:'Nov/2024',year:2024,credential:alura('17b67784-a215-4506-98d3-0feef92350bf')},
  {name:'React Native: integrando um app à Web API',institution:'Alura',date:'Nov/2024',year:2024,credential:alura('961c0b35-0737-4a00-9500-8337c887984c')},
  {name:'React Native: construindo um app com Native-base',institution:'Alura',date:'Out/2024',year:2024,credential:alura('29ab62f5-b97f-40f4-89a8-00b860dd00f4')},
  {name:'Node.js: continue seu projeto full stack criando uma API com Express',institution:'Alura',date:'Out/2024',year:2024,credential:alura('9722438d-f268-4d08-9958-f15dba3e031d')},
  {name:'React: comece seu projeto full stack',institution:'Alura',date:'Set/2024',year:2024,credential:alura('c9bb4be8-b965-4bf5-b5a4-0efd2ccbfff5'),competencies:['JavaScript']},
  {name:'Docker: criando e gerenciando containers',institution:'Alura',date:'Set/2024',year:2024,credential:alura('1f8de35b-9716-4c84-9b41-6e00da05c1ed')},
  {name:'DevOps: construindo e gerindo containers com o Docker',institution:'Alura',date:'Ago/2024',year:2024,credential:alura('3c3369cb-bc37-496f-866d-27c71afb80ba'),competencies:['DevOps']},
  {name:'DevOps: trabalhando com repositórios no GitHub',institution:'Alura',date:'Jul/2024',year:2024,credential:alura('b9a2c9ab-160e-4326-8586-14354c699f46'),competencies:['DevOps']},
  {name:'DevOps: trabalhando com tráfego seguro em comunicações web',institution:'Alura',date:'Jun/2024',year:2024,credential:alura('499934ae-bfcc-4794-83c3-afec9150348c')},
  {name:'Gemini e Node.js: integrando sua aplicação com a API do Google',institution:'Alura',date:'Jun/2024',year:2024,credential:alura('789fb4e5-7de5-4345-a79a-d190b1b17a66')},
  {name:'GPT e Python: criando ferramentas com a API',institution:'Alura',date:'Jun/2024',year:2024,credential:alura('d2f94e78-5f26-4c6b-8273-cb0a63d98f0a')},
  {name:'Python: avance na Orientação a Objetos e consuma API',institution:'Alura',date:'Jun/2024',year:2024,credential:alura('392fa94d-c4b3-4ae5-8d60-7f13c6461d51')},
  {name:'Python: crie a sua primeira aplicação',institution:'Alura',date:'Jun/2024',year:2024,credential:alura('8a3826f5-573a-406d-8ee3-c3b4e5b081d5')},
  {name:'Python: aplicando a Orientação a Objetos',institution:'Alura',date:'Jun/2024',year:2024,credential:alura('cbdbd652-bce6-4eec-a738-6d9daf775530')},
  {name:'UI Design: criando o design de um protótipo',institution:'Alura',date:'Abr/2023',year:2023,credential:alura('2418edd9-e6c8-4edc-a9d8-fb03eac3c1a2'),competencies:['Web design']},
  {name:'Design Thinking: viabilizando soluções',institution:'Alura',date:'Mar/2023',year:2023,credential:alura('892089a2-edf5-4a72-b374-e1b17f06e5cd')},
  {name:'UI Design: mergulhando nas interfaces digitais',institution:'Alura',date:'Fev/2023',year:2023,credential:alura('0f6e10b2-aca6-4174-9045-f1d10f5ecadd')},
];
