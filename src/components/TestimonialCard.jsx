/**
 * TestimonialCard.jsx
 * 
 * Displays individual testimonials with attribution to program and beneficiary.
 * Creates trust through authentic voices of community members.
 * 
 * Props:
 * - quote: string (the testimonial text)
 * - attribution: string (person's name)
 * - program: string (program name, e.g., "Skill Development Program")
 * - photo: string (optional, URL to beneficiary photo)
 * - role: string (optional, e.g., "Woman Entrepreneur")
 */

export function TestimonialCard({
  quote,
  attribution,
  program,
  photo,
  role,
  className = ""
}) {
  return (
    <article className={`testimonial-card ${className}`}>
      <div className="testimonial-content">
        <blockquote className="testimonial-quote">
          <p>"{quote}"</p>
        </blockquote>
        
        <div className="testimonial-attribution">
          {photo && (
            <img 
              src={photo} 
              alt={attribution}
              className="testimonial-photo"
              loading="lazy"
            />
          )}
          
          <div className="testimonial-info">
            <strong className="testimonial-name">{attribution}</strong>
            {role && <p className="testimonial-role">{role}</p>}
            {program && <p className="testimonial-program">{program}</p>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
