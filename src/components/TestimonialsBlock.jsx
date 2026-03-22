import { useState, useRef } from "react";

/**
 * TestimonialsBlock — accessible tab-based testimonial selector.
 *
 * Keyboard:
 *   Arrow Left / Right or Up / Down moves between tabs.
 *   Enter / Space activates the focused tab.
 *   Focus is managed programmatically.
 *
 * Props:
 *   items — Array<{ quote, name, role, program, location }>
 */
export function TestimonialsBlock({ items = [] }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);

  const handleKeyDown = (e, index) => {
    let next = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (index + 1) % items.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (index - 1 + items.length) % items.length;
    } else {
      return;
    }
    e.preventDefault();
    setActive(next);
    const tabs = tabsRef.current?.querySelectorAll("[role='tab']");
    tabs?.[next]?.focus();
  };

  const current = items[active];

  if (!current) return null;

  return (
    <div className="testimonials-block">
      <div
        id="testimonial-panel"
        role="tabpanel"
        aria-labelledby={`testimonial-tab-${active}`}
        className="testimonial-panel"
      >
        <blockquote className="testimonial-main-quote">
          <p>&ldquo;{current.quote}&rdquo;</p>
          <footer>
            <strong className="testimonial-main-name">{current.name}</strong>
            <span className="testimonial-main-meta">
              {current.role} &middot; {current.program}
            </span>
            {current.location && (
              <span className="testimonial-main-location">
                {current.location}
              </span>
            )}
          </footer>
        </blockquote>
      </div>

      <div
        role="tablist"
        aria-label="Testimonials"
        ref={tabsRef}
        className="testimonial-tabs"
      >
        {items.map((item, i) => (
          <button
            key={item.name}
            id={`testimonial-tab-${i}`}
            role="tab"
            aria-selected={i === active}
            aria-controls="testimonial-panel"
            tabIndex={i === active ? 0 : -1}
            type="button"
            className={`testimonial-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            <span className="tab-name">{item.name}</span>
            <span className="tab-program">{item.program}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsBlock;
