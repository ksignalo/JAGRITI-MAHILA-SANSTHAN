---
description: "Use when creating or editing frontend UI files for pages and components. Enforces visual direction, animation limits, accessibility, and responsive breakpoints for this NGO website."
name: "Frontend UI Guidelines"
applyTo: "**/*.{html,css,scss,sass,less,js,jsx,ts,tsx}"
---

# Frontend UI Guidelines

## Visual Direction
- Build a modern and warm interface that feels human, credible, and energetic.
- Prioritize clear hierarchy, generous spacing, and high readability over visual noise.
- Use intentional typography and color systems, not default browser or framework look.
- Keep NGO identity front-and-center: women empowerment, child rights, and community impact.

## Color And Typography
- Define color tokens before page styling (primary, secondary, accent, surface, text, muted, border).
- Keep normal body text contrast at WCAG AA minimum (4.5:1).
- Use at most 2 font families: one for headings, one for body.
- Preserve consistent type scale across pages (hero, section title, body, caption).

## Layout And Components
- Use mobile-first layouts.
- Prefer predictable section rhythm: hero, mission/value, impact, programs, testimonials, CTA.
- Avoid generic boilerplate sections when content can be made specific to requirements.
- Keep cards and CTA blocks visually consistent across pages.

## Motion Limits
- Motion should support meaning, not decoration.
- Default animation duration range: 180ms to 450ms.
- Use no more than 1 entrance animation per major section.
- Avoid continuous looping animation except subtle, non-distracting background accents.
- Respect reduced motion preferences for all non-essential animations.

## Accessibility
- Use semantic HTML landmarks and heading order.
- Ensure keyboard navigation and visible focus states for all interactive controls.
- Add descriptive alt text for meaningful images and empty alt for decorative images.
- Do not rely on color alone to communicate state.
- Ensure tap targets are at least 44x44 px on touch devices.

## Responsive Breakpoints
- Use these baseline breakpoints unless project constraints change:
- Small: 0 to 639 px
- Medium: 640 to 1023 px
- Large: 1024 to 1279 px
- Extra large: 1280 px and above
- Verify each major page section at small, medium, and large widths.

## Content Fit
- Pull mission language and organization facts from DOCS/requirements.md.
- Do not alter names, roles, dates, and impact numbers unless explicitly requested.
