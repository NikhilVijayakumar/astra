# How to Generate docs/index.md

**Purpose:** This file contains instructions to regenerate docs/index.md from scratch.
**Usage:** If docs/index.md is deleted, run these steps to recreate it.

---

## Overview

docs/index.md is the LLM-optimized knowledge map for Astra. It should contain all project information in a structured format that allows an LLM to understand the project without reading every individual document.

---

## Step 1: Gather Project Information

### A. Get Basic Info (package.json)
```bash
# Read package.json for:
# - name, version
# - dependencies (React, MUI, etc.)
# - devDependencies (TypeScript, Vite, etc.)
# - main, module, types (entry points)
# - scripts (dev, build, test)
cat package.json
```

### B. Get Component List
```bash
# List all component tier exports
cat src/common/components/atoms/index.ts   # Atoms
cat src/common/components/molecules/index.ts # Molecules
cat src/common/components/organisms/index.ts # Organisms
cat src/common/components/templates/index.ts  # Templates
```

### C. Get Module Structure
```bash
# List src/ structure
ls -R src/
```

---

## Step 2: Scan Documentation

### A. List All Docs Directories
```bash
ls -la docs/           # Root level docs
ls -la docs/feature/   # Feature docs
ls -la docs/integration-guide/  # Integration guides
```

### B. Scan Recursively (includes NEW files/folders)
```bash
find docs/ -type f -name "*.md"  # All markdown files - tracks new additions automatically
```

### C. Read Root README for Project Overview
```bash
cat README.md                 # High-level project overview (for High-Level Vision section)
```

---

## Step 3: Generate docs/index.md Sections

Generate these sections in order:

### Section 1: Header
```markdown
# Astra Documentation Index

**Purpose:** This is the LLM-optimized knowledge map for Astra. Start here to understand the project, then navigate to specific documentation as needed.

> **Tracking:** See [wiki-steps.md](wiki-steps.md) for enhancement instructions.
```

### Section 2: Global Constants
Extract from package.json:
- Version
- Build Output (ESM + UMD)
- Tests
- License
- npm Package
- GitHub

### Section 3: High-Level Vision
2-sentence summary from README.md (Step 2C):
- What the project is
- What it provides
- Core value proposition

### Section 4: Dependency Stack
From package.json dependencies:
| Category | Library | Version |

### Section 5: Module Overview
Tree showing:
- src/lib.ts (entry)
- src/common/* (components, hooks, repo, theme, localization, state)
- docs/feature/* (documentation)

### Section 6: File Manifest
Categorized list of docs files with brief descriptions.

### Section 7: Feature Details
For each feature (theming, localization, state, repository, mvvm, components):
- Purpose
- Key Components
- Usage
- Files location

### Section 8: Component Inventory
List all components by tier with key props:
- Atoms (5): StatusDot, SeverityBadge, etc.
- Molecules (6): Card, Notification, etc.
- Organisms (32): DataTable, DecisionActionCard, etc.
- Templates (3): PageHeader, SummaryPanel, HeroSection

### Section 9: Atomic Design Methodology
Brief explanation of tiers and decision flowchart.

### Section 10: Quick Start
```bash
npm install astra
npm run dev
npm run build
npm test
```

### Section 11: Key Design Patterns
- MVVM Architecture
- Theme Integration
- Localization

### Section 12: Maintenance Footer
```markdown
## Maintenance

- **Tracking:** [wiki-steps.md](wiki-steps.md)
- **Last updated:** [DATE]
- **Version:** [VERSION]
```

---

## Step 4: Commit

```bash
git add docs/index.md docs/wiki-steps.md
git commit -m "docs: [description]"
```

---

*Last updated: 2026-04-19*
*Purpose: Recipe to regenerate docs/index.md*