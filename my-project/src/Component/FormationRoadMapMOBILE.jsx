import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import {
  AreaPanel,
  AreaSelector,
  FormationIntro,
  TimelinePanel,
  ViewToggle,
  roadmap,
  useFormationData,
  useMediaQuery,
} from "./FormationExperience";
import "./FormationRoadMap.css";

function FormationPhoneModal({ mode, step, courses, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const activeElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      activeElement?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="formation-phone-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="formation-phone-modal formation-v2 formation-phone"
        role="dialog"
        aria-modal="true"
        aria-labelledby="formation-phone-modal-title"
      >
        <header className="formation-phone-modal-header">
          <div>
            <span>
              {mode === "timeline"
                ? `${courses.length} formações · ordem de conclusão`
                : `${step.courses.length} cursos · ${step.period}`}
            </span>
            <h2 id="formation-phone-modal-title">
              {mode === "timeline" ? "Linha do tempo" : step.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar timeline"
          >
            <FiX aria-hidden="true" />
          </button>
        </header>

        <div className="formation-phone-modal-content">
          {mode === "timeline" ? (
            <TimelinePanel courses={courses} variant="phone" />
          ) : (
            <AreaPanel step={step} variant="phone" />
          )}
        </div>
      </section>
    </div>,
    document.body,
  );
}

FormationPhoneModal.propTypes = {
  mode: PropTypes.oneOf(["area", "timeline"]).isRequired,
  step: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

function TouchFormation({ variant }) {
  const [view, setView] = useState("areas");
  const [selectedStepId, setSelectedStepId] = useState(roadmap[0].id);
  const [phoneModal, setPhoneModal] = useState(null);
  const allCourses = useFormationData();
  const selectedStep = useMemo(
    () => roadmap.find((step) => step.id === selectedStepId) ?? roadmap[0],
    [selectedStepId],
  );
  const isPhone = variant === "phone";
  const closePhoneModal = () => {
    setPhoneModal(null);
    setView("areas");
  };
  const changePhoneView = (nextView) => {
    setView(nextView);
    if (nextView === "timeline") setPhoneModal("timeline");
  };
  const openAreaTimeline = (stepId) => {
    setSelectedStepId(stepId);
    setView("areas");
    setPhoneModal("area");
  };

  return (
    <section
      id="formation"
      className={`formation-v2 formation-${variant}`}
      aria-label="Formação"
    >
      <div className="formation-shell">
        <FormationIntro view={view} onViewChange={setView} mobile={isPhone} />

        {isPhone && (
          <div className="formation-mobile-controls">
            <ViewToggle view={view} onChange={changePhoneView} compact />
          </div>
        )}

        {isPhone ? (
          <AreaSelector
            selectedId={selectedStepId}
            onSelect={openAreaTimeline}
            variant="phone"
          />
        ) : view === "areas" ? (
          <>
            <AreaSelector
              selectedId={selectedStepId}
              onSelect={setSelectedStepId}
              variant={variant}
            />
            <AreaPanel step={selectedStep} variant={variant} />
          </>
        ) : (
          <TimelinePanel courses={allCourses} variant={variant} />
        )}

        <p className="formation-footnote">
          Toque nos controles para mudar a área ou reorganizar a jornada.
        </p>
      </div>

      {isPhone && phoneModal && (
        <FormationPhoneModal
          mode={phoneModal}
          step={selectedStep}
          courses={allCourses}
          onClose={closePhoneModal}
        />
      )}
    </section>
  );
}

TouchFormation.propTypes = {
  variant: PropTypes.oneOf(["tablet", "phone"]).isRequired,
};

export default function FormationRoadmapMobileTabs() {
  const isPhone = useMediaQuery("(max-width: 640px)");
  return <TouchFormation variant={isPhone ? "phone" : "tablet"} />;
}
