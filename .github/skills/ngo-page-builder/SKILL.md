---
name: ngo-page-builder
description: 'Build NGO website pages from requirements: extract source facts, map section layout, draft copy blocks, and generate implementation-ready frontend component scaffolds.'
argument-hint: 'Page name, target audience, and preferred stack (React, HTML, or other)'
user-invocable: true
disable-model-invocation: false
---

# NGO Page Builder

## Purpose
Use this skill to create repeatable, mission-aligned website pages for Mahila Jagriti Sansthan.

## When To Use
- A new website page needs both content structure and code scaffolding.
- Existing page content must be aligned with organizational requirements.
- The team needs consistent section patterns across multiple pages.

## Source Of Truth
- Read DOCS/requirements.md first.
- Treat names, designations, chronology, and impact figures as fixed facts unless user requests updates.

## Procedure
1. Intake
- Confirm page target, audience, and desired output type (content only, layout only, or full scaffold).

2. Extract facts
- Pull only relevant facts from requirements for the requested page.
- Separate immutable facts (names, roles, dates, metrics) from editable marketing phrasing.

3. Plan section layout
- Build a section list with intent for each block.
- Recommend information order for mobile-first reading.
- Include conversion points such as donate, volunteer, contact, or learn more.

4. Draft copy blocks
- Create section headline, subheadline, body, and CTA candidates.
- Keep tone consistent: warm, credible, and action-oriented.

5. Generate component scaffold
- Produce implementation-ready structure for the selected stack.
- Include semantic landmarks and accessible heading order.
- Add placeholders for imagery and data that can be swapped later.

6. Apply UI quality checks
- Verify contrast, keyboard focus, reduced motion support, and responsive behavior.
- Ensure section spacing and visual rhythm are consistent.

7. Deliverable package
- Return:
  - section map
  - content draft
  - component scaffold
  - assumptions and open questions

## Output Contract
- Always include explicit assumptions when source details are missing.
- Never fabricate metrics, awards, partnerships, or legal claims.
- Keep implementation output modular so each section can be edited independently.
