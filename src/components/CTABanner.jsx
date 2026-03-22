import { NavLink } from "react-router-dom";

/**
 * CTABanner — full-width, high-contrast call-to-action band.
 * Placed above the footer to give users one final compelling reason to act.
 *
 * Props:
 *   headline      — main heading text
 *   sub           — supporting detail paragraph (optional)
 *   primaryCTA    — label for primary button
 *   primaryHref   — internal route for primary button
 *   secondaryCTA  — label for ghost secondary link (optional)
 *   secondaryHref — internal route for secondary link (optional)
 */
export function CTABanner({
  headline,
  sub,
  primaryCTA,
  primaryHref,
  secondaryCTA,
  secondaryHref,
}) {
  return (
    <section className="cta-banner-v2" aria-label="Call to action">
      <div className="shell">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2 className="cta-banner-headline">{headline}</h2>
            {sub && <p className="cta-banner-sub">{sub}</p>}
          </div>
          <div className="cta-banner-actions">
            {primaryCTA && (
              <NavLink to={primaryHref} className="cta-link cta-link--light">
                {primaryCTA}
              </NavLink>
            )}
            {secondaryCTA && secondaryHref && (
              <NavLink
                to={secondaryHref}
                className="cta-link ghost cta-link--on-dark"
              >
                {secondaryCTA}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
