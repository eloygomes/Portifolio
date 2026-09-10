export type Locale = "pt-br" | "en" | "es";
export type Localized<T> = Record<Locale, T>;

export interface ProjectCopy {
  title: string;
  category: string;
  description: string;
  context: string;
  solution: string;
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  stack: string[];
  image: string;
  gallery: string[];
  href?: string;
  featured?: boolean;
  copy: Localized<ProjectCopy>;
}
