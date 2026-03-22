/**
 * ImpactMetric.jsx
 *
 * Displays individual impact statistics with context.
 * Animates numbers on scroll into view.
 *
 * Props:
 * - icon: React.ReactNode (emoji, SVG component, or HTML element)
 * - value: string (e.g., "15,000+")
 * - label: string (e.g., "Women Empowered")
 * - context: string (optional, additional detail about the metric)
 * - color: 'primary' | 'secondary' | 'accent' (optional, default: 'primary')
 * - animated: boolean (optional, default: true - animates when scrolled into view)
 */

import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useRef, useState } from 'react';

export function ImpactMetric({
  icon,
  value,
  label,
  context,
  color = 'primary',
  animated = true,
  className = ""
}) {
  const [ref, isVisible] = useScrollReveal();
  const [displayValue, setDisplayValue] = useState(animated && !isVisible ? '0' : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (animated && isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      // Trigger animation of number if value is numeric
      // For now, just set the final value
      setDisplayValue(value);
    }
  }, [isVisible, animated, value]);

  return (
    <article
      ref={ref}
      className={`impact-metric impact-metric--${color} ${className}`}
    >
      <div className="impact-metric-icon">{icon}</div>

      <div className="impact-metric-content">
        <div className="impact-metric-value">{displayValue}</div>

        <div className="impact-metric-label">{label}</div>

        {context && <p className="impact-metric-context">{context}</p>}
      </div>
    </article>
  );
}

export default ImpactMetric;
