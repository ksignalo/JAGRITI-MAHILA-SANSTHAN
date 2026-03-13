/* global IntersectionObserver */
import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    let cleanup = () => {};
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options }
      );
      observer.observe(el);
      cleanup = () => observer.disconnect();
    }
    return cleanup;
  }, []);

  return [ref, visible];
}
