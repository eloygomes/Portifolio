// FormationRoadmap.jsx
import React, { useState } from "react";

const roadmap = [
  {
    id: "design",
    label: "DESIGN & COMUNICAÇÃO",
    title: "Base em Design, Estética & Comunicação",
    period: "2016 — 2018",
    summary:
      "Minha jornada começou pelo design gráfico e direção de arte, construindo uma base forte em estética, harmonia visual e comunicação.",
    courses: [
      {
        title: "Design, Origem, função e princípio estético",
        school: "COLOSSEO",
        date: "Mar/2016",
      },
      {
        title: "Estética, lógica, harmonia e a construção do belo",
        school: "COLOSSEO",
        date: "Ago/2016",
      },
      {
        title: "Direção de arte, criatividade aplicada e design na prática",
        school: "COLOSSEO",
        date: "Nov/2016",
      },
      {
        title: "Design gráfico com ênfase em comunicação digital",
        school: "UNIP",
        date: "Dez/2016",
      },
      {
        title: "Estratégias de marketing e e-commerce",
        school: "SENAC",
        date: "Set/2018",
      },
    ],
  },
  {
    id: "web-basics",
    label: "WEB BÁSICO",
    title: "Fundamentos de Desenvolvimento Web",
    period: "2017 — 2019",
    summary:
      "Transição para o desenvolvimento web, começando com HTML, CSS, JavaScript e ferramentas essenciais do front-end.",
    courses: [
      {
        title: "HTML 5",
        school: "Udemy",
        date: "Ago/2017",
      },
      {
        title: "CSS 3",
        school: "Udemy",
        date: "Set/2017",
      },
      {
        title: "JQuery 3",
        school: "Udemy",
        date: "Nov/2017",
      },
      {
        title: "SASS",
        school: "Udemy",
        date: "Set/2018",
      },
      {
        title: "Bootstrap",
        school: "Udemy",
        date: "Ago/2019",
      },
      {
        title: "Javascript",
        school: "Udemy",
        date: "Dez/2019",
      },
    ],
  },
  {
    id: "frontend",
    label: "FRONT-END & PRODUTO",
    title: "Front-end Moderno, UI/UX & Boas Práticas",
    period: "2020 — 2022",
    summary:
      "Aprofundamento em React e no ecossistema front-end, com foco em experiência do usuário, testes, arquitetura e métodos ágeis.",
    courses: [
      {
        title: "React JS",
        school: "Udemy",
        date: "Dez/2020",
      },
      {
        title: "Python 2.0",
        school: "Udemy",
        date: "Fev/2021",
      },
      {
        title: "MySQL",
        school: "Udemy",
        date: "Fev/2021",
      },
      {
        title: "Metodologias ágeis",
        school: "Codecademy",
        date: "Fev/2022",
      },
      {
        title: "Introduction to UI/UX",
        school: "Codecademy",
        date: "Ago/2022",
      },
      {
        title: "React Router",
        school: "Codecademy",
        date: "Out/2022",
      },
      {
        title: "React Testing",
        school: "Codecademy",
        date: "Dez/2022",
      },
      {
        title: "GitHub",
        school: "Codecademy",
        date: "Jan/2023",
      },
      {
        title: "Redux",
        school: "Codecademy",
        date: "Dez/2022",
      },
    ],
  },
  {
    id: "backend-devops",
    label: "BACK-END & DEVOPS",
    title: "Back-end, Banco de Dados, DevOps & Mobile",
    period: "2023 — 2024",
    summary:
      "Evolução para o full stack: Node, TypeScript, bancos de dados relacionais e NoSQL, containers, servidores e mobile com React Native.",
    courses: [
      {
        title: "Node JS",
        school: "Codecademy",
        date: "Mar/2023",
      },
      {
        title: "TypeScript",
        school: "Codecademy",
        date: "Jun/2023",
      },
      {
        title: "MongoDB",
        school: "Codecademy",
        date: "Ago/2023",
      },
      {
        title: "DOCKER",
        school: "Fabrício Veronez",
        date: "Out/2023",
      },
      {
        title: "NGINX",
        school: "Fabrício Veronez",
        date: "Nov/2023",
      },
      {
        title: "MySQL",
        school: "Codecademy",
        date: "Nov/2023",
      },
      {
        title: "MySQL",
        school: "Curso em Vídeo - Gustavo Guanabara",
        date: "Jan/2024",
      },
      {
        title: "REACT NATIVE",
        school: "Codecademy",
        date: "Dez/2023",
      },
      {
        title: "Modelagem de banco de dados",
        school: "Codecademy",
        date: "Fev/2024",
      },
      {
        title: "Python 3.0",
        school: "Codecademy",
        date: "Mar/2024",
      },
    ],
  },
];

export default function FormationRoadmap() {
  const [selectedStepId, setSelectedStepId] = useState(roadmap[0].id);

  const visibleSteps = roadmap.filter((step) => step.id === selectedStepId);

  return (
    <section id="formation" className="w-full px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Formação & Roadmap de Estudos
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Aqui você encontra um mapa da minha jornada educacional, desde a
            base em design até o desenvolvimento full stack.
          </p>
        </div>

        {/* Linha de etapas (clicáveis) */}
        <div
          className="relative mb-12 rounded-2xl border bg-[#2A2344]/80 backdrop-blur-xl p-5 md:p-6 shadow-lg shadow-black/30
                transition-transform transition-colors duration-200 "
        >
          <div className="absolute inset-x-6 top-12 h-1 bg-gradient-to-r from-[#D6223B]/40 via-purple-500/40 to-[#D6223B]/40" />
          <ol className="relative flex flex-wrap justify-between gap-4">
            {roadmap.map((step, index) => {
              const isActive = step.id === selectedStepId;
              return (
                <li key={step.id} className="flex flex-col items-center z-10">
                  <button
                    type="button"
                    onClick={() => setSelectedStepId(step.id)}
                    className="flex flex-col bg-transparent items-center gap-2 focus:outline-none"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border text-sm font-semibold transition
                      ${
                        isActive
                          ? "border-[#D6223B] bg-[#D6223B] text-white shadow-lg shadow-[#D6223B]/40"
                          : "border-white/40 bg-black/60 text-gray-200 hover:border-[#D6223B]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-center transition
                      ${isActive ? "text-[#D6223B]" : "text-gray-300"}`}
                    >
                      {step.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Card da etapa selecionada */}
        {/* <div className="grid gap-6 md:grid-cols-2"> */}
        <div className="grid gap-6 md:grid-cols-1">
          {visibleSteps.map((step) => {
            const isActive = step.id === selectedStepId;
            return (
              <div
                key={step.id}
                className={`rounded-2xl border bg-[#2A2344]/80 backdrop-blur-xl p-5 md:p-6 shadow-lg shadow-black/30
                transition-transform transition-colors duration-200
                ${
                  isActive
                    ? "border-[#D6223B] ring-2 ring-[#D6223B]/60 -translate-y-1"
                    : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">{step.summary}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-[10px]">
                    {/* Range de anos - retangular */}
                    <span className="px-3 py-1 rounded-md bg-black/40 text-gray-200 border border-white/20">
                      {step.period}
                    </span>
                    {/* Quantidade de cursos - retangular */}
                    <span className="px-3 py-1 rounded-md bg-[#D6223B]/15 text-[#D6223B] border border-[#D6223B]/60">
                      {step.courses.length} curso(s)
                    </span>
                  </div>
                </div>

                <ul className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1 custom-scroll">
                  {step.courses.map((course) => (
                    <li
                      key={`${course.title}-${course.date}-${course.school}`}
                      className="flex flex-col border-l border-white/15 pl-3"
                    >
                      <span className="text-sm font-medium">
                        {course.title}
                      </span>
                      <span className="text-xs text-gray-300">
                        {course.school} • {course.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-[11px] text-gray-400 text-center">
          * Os cursos estão agrupados por fases da minha carreira, não
          necessariamente em ordem cronológica exata dentro de cada card.
        </p>
      </div>
    </section>
  );
}
