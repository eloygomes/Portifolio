import { useEffect, useRef } from "react";

export function ContactBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    let disposed = false;
    let loading = false;
    let cleanup = () => {};
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || loading) return;
      loading = true;
      import("../../services/contactNetwork").then(({ createContactNetwork }) => {
        if (!disposed) cleanup = createContactNetwork(host);
      }).catch(() => { /* The section's CSS background remains visible. */ });
    }, { rootMargin: "200px" });
    observer.observe(host);
    return () => { disposed = true; observer.disconnect(); cleanup(); };
  }, []);
  return <div ref={ref} className="contact-network" aria-hidden="true" />;
}
