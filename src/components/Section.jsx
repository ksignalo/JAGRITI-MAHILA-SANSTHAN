import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Section({ id, eyebrow, title, subtitle, children }) {
  const [ref, visible] = useScrollReveal();
  return (
    <section id={id} className="section shell">
      <div
        ref={ref}
        className={`section-header reveal${visible ? " in-view" : ""}`}
      >
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
