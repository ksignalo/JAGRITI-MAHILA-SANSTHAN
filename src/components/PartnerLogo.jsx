/**
 * PartnerLogo.jsx
 * 
 * Displays partner organizations and their logos.
 * Creates trust through visible partnerships with established organizations.
 * 
 * Props:
 * - partners: Array<{ name, logo, url, description }>
 * - title: string (e.g., "Our Partners")
 * - subtitle: string (optional)
 */

export function PartnerLogo({ partners = [], title = "Our Partners", subtitle }) {
  return (
    <section className="partner-logo-section">
      <div className="shell">
        <div className="partner-logo-header">
          <h2>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        
        <div className="partner-logo-grid">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo-link"
              title={partner.description}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                loading="lazy"
              />
              <span className="partner-name">{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerLogo;
