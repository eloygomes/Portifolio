// CourseListMobile.jsx (opcional)
import React from "react";

const facul01 = "Design gráfico com ênfase em comunicação digital";
const facul02 = "Engenharia de Software";

export function CourseListMobile({ courses }) {
  return (
    <ul className="mt-3 space-y-2  overflow-y-scroll  custom-scroll">
      {courses.map((course) => (
        <li
          key={`${course.title}-${course.date}-${course.school}`}
          className="flex flex-col "
        >
          <div
            className={`px-2 py-4 rounded-xl flex flex-row justify-between shadow-md shadow-black/20 backdrop-blur-xl ${
              course.title === facul01 || course.title === facul02
                ? "bg-[goldenrod]/70"
                : "bg-white/10"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">{course.title}</span>
              {course.title === facul01 || course.title === facul02 ? (
                <span className="text-xs text-gray-900 font-semibold">
                  Graduação
                </span>
              ) : null}
              <span className="text-xs text-gray-300">{course.school}</span>
            </div>
            <span className="text-xs text-gray-300 whitespace-nowrap ml-4">
              {course.date}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
