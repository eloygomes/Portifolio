import { useMemo, useState } from "react";
import {
  AreaPanel,
  AreaSelector,
  FormationIntro,
  TimelinePanel,
  roadmap,
  useFormationData,
} from "./FormationExperience";
import "./FormationRoadMap.css";

export default function FormationRoadmap() {
  const [view, setView] = useState("areas");
  const [selectedStepId, setSelectedStepId] = useState(roadmap[0].id);
  const allCourses = useFormationData();
  const selectedStep = useMemo(
    () => roadmap.find((step) => step.id === selectedStepId) ?? roadmap[0],
    [selectedStepId],
  );

  return (
    <section
      id="formation"
      className="formation-v2 formation-desktop"
      aria-label="Formação"
    >
      <div className="formation-shell">
        <FormationIntro view={view} onViewChange={setView} />

        {view === "areas" ? (
          <div className="formation-desktop-layout">
            <AreaSelector
              selectedId={selectedStepId}
              onSelect={setSelectedStepId}
              variant="desktop"
            />
            <AreaPanel step={selectedStep} variant="desktop" />
          </div>
        ) : (
          <TimelinePanel courses={allCourses} variant="desktop" />
        )}

        <p className="formation-footnote">
          Alterne a visualização para explorar por especialidade ou por ordem de conclusão.
        </p>
      </div>
    </section>
  );
}
