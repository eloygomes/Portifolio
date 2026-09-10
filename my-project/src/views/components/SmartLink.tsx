import type { MouseEvent, ReactNode } from "react";
import { navigate } from "../../controllers/useRoute";
export function SmartLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const click = (event: MouseEvent<HTMLAnchorElement>) => { if (href.startsWith("/")) { event.preventDefault(); navigate(href); } };
  return <a href={href} onClick={click} className={className}>{children}</a>;
}
