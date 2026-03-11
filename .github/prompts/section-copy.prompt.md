---
name: "Section Copy Writer"
description: "Generate mission-aligned website copy for a specific page section using NGO facts from DOCS/requirements.md with a consistent tone."
argument-hint: "Page and section, audience, goal, word limit, tone"
agent: "agent"
---

Generate website copy for the requested page section.

Requirements:
- Use DOCS/requirements.md as the source of truth for mission language, names, roles, and impact facts.
- Keep the tone warm, trustworthy, and action-oriented.
- Do not invent statistics, partnerships, or dates.
- Preserve factual wording when legal or organizational credibility could be affected.

Output format:
1. Section Name
2. Audience Intent (1 sentence)
3. Headline options (3)
4. Subheadline options (2)
5. Body copy (1 version, within requested word count)
6. CTA options (3)
7. Optional trust line (1)

Style constraints:
- Use concise, plain language.
- Keep sentences short and readable on mobile.
- Avoid generic NGO cliches and vague claims.
- Include one concrete impact cue when available from requirements.

If inputs are missing, infer reasonable defaults and state assumptions briefly before the copy.
