/* eslint-disable react-refresh/only-export-components */
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiClock,
  FiDatabase,
  FiGrid,
  FiPenTool,
  FiServer,
} from "react-icons/fi";
import roadmap from "./roadmapData";

const areaIcons = {
  "design-marketing": FiPenTool,
  "front-end": FiCode,
  "back-end": FiDatabase,
  devops: FiServer,
};

const courseShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  areaId: PropTypes.string,
  areaLabel: PropTypes.string,
  isGraduation: PropTypes.bool,
});

const stepShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(courseShape).isRequired,
});

const monthIndex = {
  jan: 0,
  fev: 1,
  mar: 2,
  abr: 3,
  mai: 4,
  jun: 5,
  jul: 6,
  ago: 7,
  set: 8,
  out: 9,
  nov: 10,
  dez: 11,
};

const graduationTitles = new Set([
  "Design gráfico com ênfase em comunicação digital",
  "Engenharia de Software",
]);

export const formationStats = {
  courses: roadmap.reduce((total, step) => total + step.courses.length, 0),
  areas: roadmap.length,
};

export function getCourseTime(date) {
  const parts = date.toLowerCase().split("/");
  const year = Number(parts.at(-1));
  const month =
    parts.length > 1 ? (monthIndex[parts[0].slice(0, 3)] ?? 11) : 11;
  return new Date(year, month, 1).getTime();
}

export function useFormationData() {
  return useMemo(
    () =>
      roadmap
        .flatMap((step) =>
          step.courses.map((course) => ({
            ...course,
            areaId: step.id,
            areaLabel: step.label,
            areaTitle: step.title,
            isGraduation: graduationTitles.has(course.title),
          })),
        )
        .sort((a, b) => getCourseTime(b.date) - getCourseTime(a.date)),
    [],
  );
}

export function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function ViewToggle({ view, onChange, compact = false }) {
  return (
    <div className={`formation-toggle ${compact ? "is-compact" : ""}`}>
      <button
        type="button"
        className={view === "areas" ? "is-active" : ""}
        onClick={() => onChange("areas")}
        aria-pressed={view === "areas"}
      >
        <FiGrid aria-hidden="true" />
        Por área
      </button>
      <button
        type="button"
        className={view === "timeline" ? "is-active" : ""}
        onClick={() => onChange("timeline")}
        aria-pressed={view === "timeline"}
      >
        <FiClock aria-hidden="true" />
        Cronológica
      </button>
    </div>
  );
}

ViewToggle.propTypes = {
  view: PropTypes.oneOf(["areas", "timeline"]).isRequired,
  onChange: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

export function FormationIntro({ view, onViewChange, mobile = false }) {
  return (
    <header className={`formation-intro ${mobile ? "is-mobile" : ""}`}>
      <div>
        <span className="formation-kicker">Minha jornada de aprendizado</span>
        <h2>Formação</h2>
        <p>
          Do olhar de design à engenharia de software — uma trajetória em
          evolução contínua.
        </p>
      </div>
      {!mobile && <ViewToggle view={view} onChange={onViewChange} />}
    </header>
  );
}

FormationIntro.propTypes = {
  view: PropTypes.oneOf(["areas", "timeline"]).isRequired,
  onViewChange: PropTypes.func.isRequired,
  mobile: PropTypes.bool,
};

export function AreaSelector({
  selectedId,
  onSelect,
  variant = "desktop",
  includeAll = false,
}) {
  return (
    <div className={`formation-area-selector is-${variant}`}>
      {includeAll && (
        <button
          type="button"
          className={selectedId === "all" ? "is-active" : ""}
          onClick={() => onSelect("all")}
          aria-pressed={selectedId === "all"}
        >
          <span className="area-number">00</span>
          <span className="area-label">Todos</span>
          <span className="area-count">{formationStats.courses}</span>
        </button>
      )}
      {roadmap.map((step, index) => {
        const selected = step.id === selectedId;
        const AreaIcon = areaIcons[step.id] ?? FiGrid;
        return (
          <button
            key={step.id}
            type="button"
            className={selected ? "is-active" : ""}
            onClick={() => onSelect(step.id)}
            aria-pressed={selected}
          >
            <span className="area-icon" aria-hidden="true">
              <AreaIcon />
            </span>
            <span className="area-number">0{index + 1}</span>
            <span className="area-label">{step.label.replace("/", " / ")}</span>
            <span className="area-count">{step.courses.length} </span>
          </button>
        );
      })}
    </div>
  );
}

AreaSelector.propTypes = {
  selectedId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["desktop", "tablet", "phone"]),
  includeAll: PropTypes.bool,
};

export function CourseCard({ course, compact = false, index }) {
  return (
    <article
      className={`formation-course-card ${course.isGraduation ? "is-degree" : ""} ${
        compact ? "is-compact" : ""
      }`}
      style={{
        gridColumn: index % 2 === 0 ? 1 : 2,
        gridRow: index + 1,
      }}
    >
      <span className="course-node" aria-hidden="true" />
      <div className="course-copy">
        <div className="course-meta">
          <time>{course.date}</time>
          <p className="course-school">{course.school}</p>
        </div>
        <h4>{course.title}</h4>
        <div className="course-footer">
          {course.isGraduation && (
            <span className="degree-label">
              <FiAward aria-hidden="true" /> Graduação
            </span>
          )}
          <span className="course-area">{course.areaLabel}</span>
        </div>
      </div>
    </article>
  );
}

CourseCard.propTypes = {
  course: courseShape.isRequired,
  compact: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

export function CourseList({ courses, compact = false, className = "" }) {
  return (
    <div className={`formation-course-list ${className}`}>
      <div
        className={`formation-course-track ${courses.length % 2 ? "has-odd-count" : ""}`}
      >
        {courses.map((course, index) => (
          <CourseCard
            key={`${course.areaId ?? "area"}-${course.title}-${course.date}`}
            course={course}
            compact={compact}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(courseShape).isRequired,
  compact: PropTypes.bool,
  className: PropTypes.string,
};

export function AreaPanel({ step, variant = "desktop" }) {
  const courses = useMemo(
    () =>
      step.courses.map((course) => ({
        ...course,
        areaId: step.id,
        areaLabel: step.label,
        isGraduation: graduationTitles.has(course.title),
      })),
    [step],
  );
  return (
    <div className={`formation-panel formation-area-panel is-${variant}`}>
      <div className="formation-panel-heading">
        <div>
          <span className="panel-overline">Área selecionada</span>
          <h3>{step.title}</h3>
          <p>{step.summary}</p>
        </div>
        <div className="panel-stats">
          <span>
            <FiClock aria-hidden="true" /> {step.period}
          </span>
          <span>
            <FiBookOpen aria-hidden="true" /> {step.courses.length} cursos
          </span>
        </div>
      </div>
      <CourseList courses={courses} compact={variant === "phone"} />
    </div>
  );
}

AreaPanel.propTypes = {
  step: stepShape.isRequired,
  variant: PropTypes.oneOf(["desktop", "tablet", "phone"]),
};

export function TimelinePanel({ courses, variant = "desktop" }) {
  return (
    <div className={`formation-panel formation-timeline-panel is-${variant}`}>
      <div className="formation-panel-heading">
        <div>
          <span className="panel-overline">Ordem de conclusão</span>
          <h3>Linha do tempo</h3>
          <p>Todos os cursos, do mais recente ao primeiro passo da jornada.</p>
        </div>
        <div className="timeline-total">
          <strong>{courses.length}</strong>
          <span>formações</span>
        </div>
      </div>
      <CourseList
        courses={courses}
        compact={variant === "phone"}
        className="is-timeline"
      />
    </div>
  );
}

TimelinePanel.propTypes = {
  courses: PropTypes.arrayOf(courseShape).isRequired,
  variant: PropTypes.oneOf(["desktop", "tablet", "phone"]),
};

export { roadmap };
