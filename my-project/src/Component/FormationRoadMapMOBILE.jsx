// FormationRoadmapMobileTabs.jsx
import { useState } from "react";
import roadmap from "./roadmapData";
import { CourseListMobile } from "./CourseListMobile"; // ou import do mesmo arquivo

export default function FormationRoadmapMobileTabs() {
  const [selectedStepId, setSelectedStepId] = useState(roadmap[0].id);
  const visibleStep = roadmap.find((step) => step.id === selectedStepId);

  return (
    <section id="formation" className="w-full  py-16">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-left">Formação</h2>
          {/* <p className="text-sm text-gray-300 max-w-2xl mx-auto text-left">
            Aqui você encontra um mapa da minha jornada educacional, desde a
            base em design até o desenvolvimento full stack.
          </p> */}
        </div>

        {/* Tabs horizontais */}
        <div className="mb-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {roadmap.map((step, index) => {
              const isActive = step.id === selectedStepId;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setSelectedStepId(step.id)}
                  className={`
                    flex-shrink-0 px-4 py-3 rounded-xl border text-xs uppercase tracking-[0.18em]
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-[#D6223B] border-[#D6223B] text-white shadow-lg shadow-[#D6223B]/40"
                        : "bg-black/40 border-white/30 text-gray-200"
                    }
                  `}
                >
                  <span className="mr-2 text-[10px] opacity-80">
                    {index + 1}.
                  </span>
                  {step.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card da etapa selecionada */}
        {visibleStep && (
          <div
            className="rounded-2xl p-3 shadow-lg shadow-black/30
              backdrop-blur-xl bg-white/10"
          >
            <div className="flex flex-col items-start justify-between mb-3 px-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">{visibleStep.title}</h3>
                <p className="text-xs text-gray-300 mt-1 text-left">
                  {visibleStep.summary}
                </p>
              </div>
              <div className="w-full flex flex-row justify-between items-end gap-1 text-[10px]">
                <span className="py-1 text-center w-24 rounded-md bg-black/60 text-gray-200 border border-white/20 truncate">
                  {visibleStep.period}
                </span>
                <span className="py-1 text-center w-24 rounded-md bg-[#D6223B]/20 text-white border border-[#D6223B]/60 truncate">
                  {visibleStep.courses.length} curso(s)
                </span>
              </div>
            </div>

            <CourseListMobile courses={visibleStep.courses} />
          </div>
        )}

        <p className="mt-6 text-[11px] text-gray-400 px-5 text-left">
          * Os cursos estão agrupados por fases da minha carreira, não
          necessariamente em ordem cronológica exata dentro de cada card.
        </p>
      </div>
    </section>
  );
}
