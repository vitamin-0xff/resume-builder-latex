General Guidelines
==================

Purpose
-------
- Keep this project a small, clear CV/Resume generator built with Deno, TypeScript, Nunjucks, and LaTeX.
- Favor readability and maintainability over micro-optimizations.

Core Rules
----------
- No emojis or decorative glyphs in code, templates, or docs.
- Use ASCII unless a file already contains non-ASCII and it is required.
- Keep outputs deterministic: no random ordering, no timestamps in generated files.
- Avoid hardcoding secrets or system-specific paths.

Coding Standards
---------------
- Use TypeScript with explicit types for all exported structures.
- Keep functions small and single-purpose; add brief comments only when intent is non-obvious.
- Prefer pure functions; avoid shared mutable state.
- Handle errors explicitly; fail fast with clear messages.
- Keep imports minimal; remove unused code and dead types.

Data & Types
------------
- Update type definitions in types/format.ts before using new fields in data or templates.
- Validate data shape where practical; prefer compile-time guarantees.
- Keep example data realistic but concise; avoid personally identifiable real data.

Templates
---------
- Use Nunjucks with the established delimiters (`<% %>`, `<= =>`).
- Escape LaTeX-sensitive content via the `tex` filter; never interpolate raw user strings.
- Keep templates section-driven and optional (guard blocks with conditionals when sections may be absent).
- Avoid layout-breaking commands; stick to moderncv class conventions.

Configuration
-------------
- Configure template choice, color, and output settings through config.ts; do not hardcode in templates.
- Ensure sensible defaults; allow overriding via a single config object.

Output
------
- Write generated artifacts into the output/ directory only.
- Do not check in PDFs or LaTeX build intermediates.

Testing & Quality
-----------------
- Add or update tests when changing logic; use Deno’s built-in test runner.
- Run `deno fmt` and `deno lint` before committing changes.

Documentation
-------------
- Keep README.md aligned with available templates, options, and sections.
- Document new sections or filters briefly where they are introduced.

Safety & Reviews
----------------
- Avoid destructive commands (`git reset --hard`, etc.) unless explicitly required.
- If unexpected changes appear, stop and ask before overwriting user work.
