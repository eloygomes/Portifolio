import { useEffect, useState } from "react";

type Route = { kind: "home" } | { kind: "resume" } | { kind: "project"; slug: string };

function parseRoute(): Route {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const offset = ["pt-br", "en", "es"].includes(parts[0]) ? 1 : 0;
  if (parts[offset] === "resume") return { kind: "resume" };
  if (parts[offset] === "portfolio" && parts[offset + 1]) return { kind: "project", slug: parts[offset + 1] };
  return { kind: "home" };
}

export function navigate(href: string) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "instant" });
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(parseRoute);
  useEffect(() => {
    const update = () => setRoute(parseRoute());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  return route;
}
