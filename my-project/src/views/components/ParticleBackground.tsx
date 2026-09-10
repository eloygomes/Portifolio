import { lazy, Suspense } from "react";

const OriginalParticles = lazy(() => import("./OriginalParticles"));

export function ParticleBackground() {
  return <Suspense fallback={null}><OriginalParticles /></Suspense>;
}
