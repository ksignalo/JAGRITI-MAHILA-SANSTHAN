import { NavLink } from "react-router-dom";

/**
 * ProgramCard — homepage program showcase.
 * Shows a real photo, title, description, and outcome bullets.
 *
 * Props:
 *   image     — import path to image asset
 *   imageAlt  — descriptive alt text for screen readers
 *   title     — program name
 *   description — one or two sentences describing impact
 *   outcomes  — string[] of 2–3 specific activities
 *   href      — internal route (NavLink)
 *   accent    — 'primary' | 'teal' | 'green' controls top border color
 */
export function ProgramCard({
  image,
  imageAlt,
  title,
  description,
  outcomes = [],
  href,
  accent = "primary",
}) {
  return (
    <article className={`program-card-v2 program-card-v2--${accent}`}>
      <div className="pcv2-image">
        <img src={image} alt={imageAlt || title} loading="lazy" width="640" height="360" />
      </div>
      <div className="pcv2-content">
        <h3 className="pcv2-title">{title}</h3>
        <p className="pcv2-desc">{description}</p>
        {outcomes.length > 0 && (
          <ul className="pcv2-outcomes" aria-label={`${title} activities`}>
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        )}
        <NavLink to={href} className="pcv2-link">
          Learn more →
        </NavLink>
      </div>
    </article>
  );
}

export default ProgramCard;
