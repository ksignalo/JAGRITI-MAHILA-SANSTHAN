export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section shell">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      {children}
    </section>
  );
}
