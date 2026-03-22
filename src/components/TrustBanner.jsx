/**
 * TrustBanner.jsx
 * 
 * Displays board members and leadership team information.
 * Creates trust through visible governance and leadership transparency.
 * 
 * Props:
 * - members: Array<{ name, role, photo, bio, order }>
 * - title: string (e.g., "Board of Directors")
 * - subtitle: string (optional)
 */

export function TrustBanner({ members = [], title = "Board of Directors", subtitle }) {
  return (
    <section className="trust-banner">
      <div className="shell">
        <div className="trust-banner-header">
          <h2>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        
        <div className="trust-members-grid">
          {members.map((member) => (
            <article key={member.name} className="trust-member-card">
              <div className="trust-member-photo">
                <img 
                  src={member.photo} 
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                />
              </div>
              <div className="trust-member-content">
                <h3>{member.name}</h3>
                <p className="trust-member-role">{member.role}</p>
                {member.bio && <p className="trust-member-bio">{member.bio}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBanner;
