import { career } from "../../data/career";
import { useLanguage } from "../../controllers/LanguageController";
import { TechnologyBadge } from "./TechnologyBadge";

export function CareerItem({ item, index }: { item: typeof career[number]; index: number }) {
  const { copy } = useLanguage();
  return <article>
    <span className="career-index">0{index + 1}</span>
    <p className="career-period">{item.period}</p>
    <div><h3>{item.role}</h3><p>{item.company} · {item.segment}</p></div>
    <div className="career-tools">{item.tools.map(tool => <TechnologyBadge key={tool} name={tool} />)}</div>
    <details className="career-details">
      <summary>{copy.career.details}<span aria-hidden="true">+</span></summary>
      <div className="career-detail-content">
        <figure className="career-visual">
          <img className="career-visual-image" src={item.image} alt={item.company} loading="lazy" decoding="async" width={1429} height={197} />
        </figure>
        <div className="career-detail-copy">
          <div>
            <h4>{copy.career.responsibilities}</h4>
            <p lang="pt-BR" data-content-origin="original">{item.description}</p>
          </div>
          <div className="career-detail-location">
            <h4>{copy.career.location}</h4>
            <p>{item.address}</p>
          </div>
        </div>
      </div>
    </details>
  </article>;
}
