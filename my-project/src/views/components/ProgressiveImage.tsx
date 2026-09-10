import { useState } from "react";
export function ProgressiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return <div className={`image-shell ${loaded ? "is-loaded" : ""} ${className}`}><img src={src} alt={alt} loading="lazy" decoding="async" onLoad={() => setLoaded(true)} /></div>;
}
