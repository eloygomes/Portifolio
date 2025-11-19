// // FormationRoadmap.jsx
// import React, { useState } from "react";
// import roadmap from "./roadmapData";

// export default function FormationRoadMapMOBILE() {
//   const [selectedStepId, setSelectedStepId] = useState(roadmap[0].id);

//   const visibleSteps = roadmap.filter((step) => step.id === selectedStepId);

//   const facul01 = "Design gráfico com ênfase em comunicação digital";
//   const facul02 = "Engenharia de Software";

//   return (
//     <section id="formation" className="w-full px-4 py-16">
//       <div className="max-w-5xl mx-auto">
//         {/* Título */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             Formação & Roadmap de Estudos
//           </h2>
//           <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
//             Aqui você encontra um mapa da minha jornada educacional, desde a
//             base em design até o desenvolvimento full stack.
//           </p>
//         </div>

//         {/* Linha de etapas (clicáveis) */}
//         <div
//           className="relative mb-12 rounded-2xl  backdrop-blur-xl bg-white/10 p-5 md:p-6 shadow-lg shadow-black/30
//                 transition-transform transition-colors duration-200 "
//         >
//           <div className="absolute inset-x-6 top-12 h-1 bg-gradient-to-r from-[#D6223B]/40 via-purple-500/40 to-[#D6223B]/40" />
//           <ol className="relative flex flex-wrap justify-between gap-4">
//             {roadmap.map((step, index) => {
//               const isActive = step.id === selectedStepId;
//               return (
//                 <li key={step.id} className="flex flex-col items-center z-10">
//                   <button
//                     type="button"
//                     onClick={() => setSelectedStepId(step.id)}
//                     className="flex flex-col bg-transparent items-center gap-2 focus:outline-none"
//                   >
//                     <div
//                       className={`flex items-center justify-center w-10 h-10 rounded-full border text-sm font-semibold transition
//                       ${
//                         isActive
//                           ? "border-[#D6223B] bg-[#D6223B] text-white shadow-lg shadow-[#D6223B]/40"
//                           : "border-white/40 bg-black/60 text-gray-200 hover:border-[#D6223B]"
//                       }`}
//                     >
//                       {index + 1}
//                     </div>
//                     <span
//                       className={`mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-center transition text-gray-300
//                       ${isActive ? "font-black" : "font-normal"}`}
//                     >
//                       {step.label}
//                     </span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ol>
//         </div>

//         {/* Card da etapa selecionada */}
//         {/* <div className="grid gap-6 md:grid-cols-2"> */}
//         <div className="grid gap-6 md:grid-cols-1 ">
//           {visibleSteps.map((step) => {
//             const isActive = step.id === selectedStepId;
//             return (
//               <div
//                 key={step.id}
//                 className={`rounded-2xl p-5 md:p-6 shadow-lg shadow-black/30
//                 transition-transform transition-colors duration-200 backdrop-blur-xl bg-white/10 h-auto
//                 `}
//               >
//                 <div className="flex items-start justify-between  mb-3 px-4 ">
//                   <div className="mb-10">
//                     <h3 className="text-xl font-semibold">{step.title}</h3>
//                     <p className="text-xs text-gray-300 mt-1">{step.summary}</p>
//                   </div>
//                   <div className="flex flex-col items-end gap-1 text-[10px]">
//                     {/* Range de anos - retangular */}
//                     <span className="py-1 text-center max-w-24 min-w-24 rounded-md bg-black/40 text-gray-200 border border-white/20 truncate">
//                       {step.period}
//                     </span>
//                     {/* Quantidade de cursos - retangular */}
//                     <span className=" text-center py-1 max-w-24 min-w-24 rounded-md bg-[#D6223B]/15 text-[#D6223B] border border-[#D6223B]/60 text-white truncate">
//                       {step.courses.length} curso(s)
//                     </span>
//                   </div>
//                 </div>

//                 <ul className="mt-3 space-y-2 max-h-72 overflow-y-scroll pr-1 custom-scroll">
//                   {step.courses.map((course) => (
//                     <li
//                       key={`${course.title}-${course.date}-${course.school}`}
//                       className="flex flex-col  pl-3"
//                     >
//                       <div
//                         className={`px-5 py-4  rounded-xl flex flex-row justify-between  shadow-md shadow-black/20  backdrop-blur-xl bg-white/2 ${
//                           course.title === facul01 || course.title === facul02
//                             ? "backdrop-blur-xl bg-[goldenrod]/70"
//                             : "backdrop-blur-xl bg-white/2"
//                         }`}
//                       >
//                         <div className="flex flex-col">
//                           {/* <span className="text-sm font-medium"> */}
//                           <span className={`text-sm font-medium `}>
//                             {course.title}
//                           </span>
//                           {course.title === facul01 ||
//                           course.title === facul02 ? (
//                             <span className="text-xs text-gray-300 font-semibold">
//                               Graduação
//                             </span>
//                           ) : null}
//                           <span className="text-xs text-gray-300">
//                             {course.school}
//                           </span>
//                         </div>
//                         <span className="text-xs text-gray-300">
//                           {course.date}
//                         </span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>

//         <p className="mt-6 text-[11px] text-gray-400 text-center">
//           * Os cursos estão agrupados por fases da minha carreira, não
//           necessariamente em ordem cronológica exata dentro de cada card.
//         </p>
//       </div>
//     </section>
//   );
// }

// FormationRoadmapMobileTabs.jsx
import React, { useState } from "react";
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
          <p className="text-sm text-gray-300 max-w-2xl mx-auto text-left">
            Aqui você encontra um mapa da minha jornada educacional, desde a
            base em design até o desenvolvimento full stack.
          </p>
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
                    flex-shrink-0 px-4 py-2 rounded-xl border text-xs uppercase tracking-[0.18em]
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
