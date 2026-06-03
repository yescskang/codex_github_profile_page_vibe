# Development Harness

This repository uses a lightweight documentation-first harness. The goal is to keep code changes aligned with the plan in `docs/implementation-plan.md` and the project guide in `readme.md`.

## Source of Truth

- Primary plan: `docs/implementation-plan.md`
- Project guide: `readme.md`
- Repository instructions: `AGENTS.md`
- Harness check: `scripts/check-harness.sh`

## Implementation Rules

Every implementation change should satisfy these rules:

- The code matches the stack and deployment assumptions in the plan.
- User-facing content can be updated from a content/config file.
- The GitHub Pages base path remains compatible with `/codex_github_profile_page_vibe/`.
- The UI remains a practical developer portfolio, not a generic marketing page.
- New scope is documented before it is implemented.
- Changes to project structure, scripts, local execution, build, deployment, or content-editing workflow are reflected in `readme.md`.

## Verification

Run the harness check before finishing:

```bash
scripts/check-harness.sh
```

The harness verifies that the required planning, README, and instruction files exist and that they still mention the expected project constraints.

When the Vite React app is added, also run:

```bash
npm run build
```

If additional test scripts are introduced, run them as part of the normal completion checks.
