import { useEffect, useState } from "react";
import { useRoute } from "./useRoute";

export function useHeaderAppearance() {
  const route = useRoute();
  const [appearance, setAppearance] = useState({ light: false, active: "" });
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerHeight = document.querySelector("header.site-header")?.getBoundingClientRect().height ?? 84;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
      const behind = sections.find(section => {
        const box = section.getBoundingClientRect();
        return box.top <= headerHeight / 2 && box.bottom > headerHeight / 2;
      });
      const current = sections.find(section => {
        const box = section.getBoundingClientRect();
        return box.top <= headerHeight + 24 && box.bottom > headerHeight + 24;
      });
      setAppearance({
        light: !!behind?.matches(".bio-section, .services-section"),
        active: route.kind === "project" ? "portfolio" : route.kind === "resume" ? "resume" : current?.id ?? "",
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [route.kind]);
  return appearance;
}
