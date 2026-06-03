# Repository Instructions

This repository is driven by the implementation plan in `docs/implementation-plan.md` and the user-facing project guide in `readme.md`.

## Required Workflow

Before making code changes:

1. Read `docs/implementation-plan.md`.
2. Read `readme.md` for the current development, local execution, and deployment instructions.
3. Treat those documents as the source of truth for product scope, stack, design direction, deployment assumptions, and test expectations.
4. Keep changes aligned with the documented plan unless the user explicitly asks to update the plan.

When implementation requirements change:

1. Update `docs/implementation-plan.md` first.
2. Update `readme.md` when project behavior, setup commands, local execution, build, deployment, or content-editing guidance changes.
3. Then update code to match the revised documents.
4. Keep the plan, README, harness, and implementation consistent in the same change.

Before finishing work:

1. Run `scripts/check-harness.sh`.
2. Run any project-specific build or test commands that exist.
3. Report any skipped checks and why they were skipped.

## Current Project Defaults

- Build a Korean single-page developer portfolio.
- Use Vite, React, CSS, GitHub Pages, and GitHub Actions.
- Use project-page deployment with base path `/codex_github_profile_page_vibe/`.
- Keep profile, skills, projects, and links in a separate content/config file.
- Start with sample personal data.
- Do not add GitHub API integration unless the plan is updated first.
- Keep `readme.md` accurate when scripts, deployment settings, project structure, or content configuration changes.

## Scope Guardrails

- Do not replace the planned Vite React stack with another stack without updating the plan.
- Do not hardcode profile/project content directly into UI components if a config file can hold it.
- Do not build a marketing landing page instead of the portfolio experience.
- Do not add unrelated blog, CMS, authentication, backend, or analytics features unless the plan is updated.
