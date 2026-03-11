# Project Guidelines

## Project Context
- This workspace is currently documentation-first and centers on the Mahila Jagriti Sansthan website plan.
- Use DOCS/requirements.md as the primary source of truth for site structure, organization details, and mission language.
- Treat DOCS images as supporting brand/content assets for future UI work.

## Build And Test
- No application scaffold, package manager config, or test runner exists yet.
- Do not assume npm, pnpm, yarn, Python, or framework commands are available.
- If implementation work starts, first add minimal setup instructions and scripts before attempting builds/tests.

## Architecture
- Current boundary is content planning only:
- DOCS/ contains requirements and media assets.
- .github/instructions/ contains agent behavior policies.
- If code is introduced, keep architecture simple and document folder boundaries early.

## Conventions
- Preserve NGO-specific names, roles, and impact metrics exactly unless a user asks to revise them.
- Keep content edits clear, human, and mission-aligned (women empowerment, child rights, community development).
- For UI direction requests, prefer a modern and warm visual style with strong readability on mobile and desktop.
- Avoid generic boilerplate layouts; use intentional typography, color, and motion choices.

## Repository Notes
- DOCS/ is currently ignored by git via .gitignore, so documentation changes may not be tracked unless ignore rules are updated.
- Follow Codacy behavior rules in .github/instructions/codacy.instructions.md when editing files.