#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "docs/implementation-plan.md"
  "docs/development-harness.md"
  "AGENTS.md"
  "readme.md"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Missing required harness file: $file" >&2
    exit 1
  fi
done

plan="docs/implementation-plan.md"
readme="readme.md"

required_terms=(
  "Vite"
  "React"
  "GitHub Pages"
  "/codex_github_profile_page_vibe/"
  "한국어"
  "샘플"
  "API 자동 연동은 하지 않는다"
)

for term in "${required_terms[@]}"; do
  if ! grep -Fq "$term" "$plan"; then
    echo "Implementation plan is missing expected constraint: $term" >&2
    exit 1
  fi
done

required_readme_terms=(
  "Vite"
  "React"
  "GitHub Pages"
  "GitHub Actions"
  "npm install"
  "npm run dev"
  "npm run build"
  "npm run preview"
  "/codex_github_profile_page_vibe/"
  "src/profileData.js"
)

for term in "${required_readme_terms[@]}"; do
  if ! grep -Fq "$term" "$readme"; then
    echo "README is missing expected project guidance: $term" >&2
    exit 1
  fi
done

echo "Harness check passed."
