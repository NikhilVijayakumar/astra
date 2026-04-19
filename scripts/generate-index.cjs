#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// ---------- Load Config from wiki-steps.json ----------

const config = JSON.parse(fs.readFileSync("scripts/wiki-steps.json", "utf-8"));

// ---------- Helpers ----------

function readJSON(file) {
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function readFileSafe(file) {
  try {
    return fs.readFileSync(file, "utf-8");
  } catch {
    return "";
  }
}

function walkDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      results = results.concat(walkDir(full));
    } else if (file.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

function summarize(text) {
  return text.split("\n").slice(0, config.summaryLines).join(" ").trim();
}

function buildTree(dir, depth = config.maxDepth, prefix = "") {
  if (!fs.existsSync(dir) || depth === 0) return "";

  let out = "";
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    out += `${prefix}├── ${item}\n`;

    if (stat.isDirectory()) {
      out += buildTree(full, depth - 1, prefix + "│   ");
    }
  }
  return out;
}

// ---------- Load Data ----------

const pkg = readJSON("package.json");
const readme = readFileSafe("README.md");
const docsFiles = walkDir("docs");

// ---------- Build Sections ----------

function sectionNavigation() {
  return `
## Navigation Guide

**For quick reference:**
- **Modify UI** → Component Inventory
- **Change API** → Repository (ApiService)
- **Update theme** → Theming (src/theme/)
- **Add feature** → Feature docs (docs/feature/)
- **Debug state** → State Management

**For detailed docs:** See Feature Details section below.
`;
}

function sectionGlobal() {
  return `
## Global Constants

| Key | Value |
|-----|------|
| Name | ${pkg.name} |
| Version | ${pkg.version} |
| License | ${pkg.license || "N/A"} |
`;
}

function sectionVision() {
  // Clean up the summary - remove # and extra whitespace
  let summary = summarize(readme)
    .replace(/^#+\s*Astra\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
  
  return `
## High-Level Vision

Astra is a React + Electron boilerplate library providing a production-ready foundation for building applications. ${summary}
`;
}

function sectionDependencies() {
  const deps = pkg.dependencies || {};
  const rows = Object.entries(deps)
    .map(([k, v]) => `| ${k} | ${v} |`)
    .join("\n");

  return `
## Dependency Stack

| Library | Version |
|---------|---------|
${rows}
`;
}

function sectionSystemMap() {
  return `
## System Map

\`\`\`
${buildTree("src")}
\`\`\`
`;
}

function sectionConceptMap() {
  const rows = config.conceptMap
    .map((c) => `| ${c.name} | ${c.impl} | ${c.path} |`)
    .join("\n");

  return `
## Concept Mapping

| Concept | Implementation | Location |
|--------|---------------|----------|
${rows}
`;
}

function sectionEditMap() {
  const rows = config.editMap
    .map((e) => `| ${e.task} | ${e.path} |`)
    .join("\n");

  return `
## Edit Map

| Task | Location |
|------|---------|
${rows}
`;
}

function sectionFlows() {
  return `
## Critical Flows

${config.flows
  .map(
    (f) => `### ${f.name}\n${f.steps.join(" → ")}`
  )
  .join("\n\n")}
`;
}

function sectionFeatureDetails() {
  return `
## Feature Details

### Theming (src/theme/, docs/feature/theming/)
- **Purpose:** Material UI 7 theme system with design tokens
- **Key:** ThemeProvider, ThemeToggle, theme tokens (colors, typography, spacing)
- **Usage:** Wrap app, use tokens (never hardcode colors)
- **Mode:** Light/Dark supported

### Localization (src/common/localization/, docs/feature/localization/)
- **Purpose:** Internationalization (i18n)
- **Key:** LanguageProvider, useLanguage hook
- **Usage:** Provide translations, use hook to access
- **Languages:** Configurable, any language

### State Management (src/common/hooks/, docs/feature/state/)
- **Purpose:** MVVM pattern with useDataState
- **Key:** useDataState hook, AppStateHandler
- **States:** INIT, LOADING, COMPLETED, ERROR
- **Usage:** Data fetching with auto state handling

### Repository (src/common/repo/, docs/feature/repository/)
- **Purpose:** Type-safe API layer (Axios wrapper)
- **Key:** ApiService, HttpStatusCode, ServerResponse
- **Usage:** Create instance, use typed methods
- **Errors:** Built-in status code handling

### MVVM Architecture (src/common/, docs/feature/mvvm/)
- **Purpose:** Model-View-ViewModel separation
- **Pattern:** useDataState + Repository + Component
- **Flow:** Model → ViewModel → View

### Component Library (src/common/components/)
- **Organized by:** Atomic Design (atoms → molecules → organisms → templates)
- **Tiers:** 
  - Atoms: StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState (5)
  - Molecules: Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer (6)
  - Organisms: DataTable, DecisionActionCard, TimelineNode, +30 more (33)
  - Templates: PageHeader, SummaryPanel, HeroSection (3)
`;
}

function sectionDocsManifest() {
  return `
## Documentation Manifest

${docsFiles
  .map((file) => {
    const rel = file.replace(/^docs\//, "");
    const content = readFileSafe(file);
    return `- **${rel}** → ${summarize(content)}`;
  })
  .join("\n")}
`;
}

function sectionRules() {
  return `
## Rules

${config.rules.map((r) => `- ${r}`).join("\n")}
`;
}

function sectionAPI() {
  return `
## API Surface

See: src/lib.ts
`;
}

function sectionMaintenance() {
  return `
## Maintenance

- Config: scripts/wiki-steps.json
- Generated: ${new Date().toISOString().split("T")[0]}
- Version: ${pkg.version}
`;
}

// ---------- Section Dispatcher ----------

const sectionMap = {
  navigation: sectionNavigation,
  global: sectionGlobal,
  vision: sectionVision,
  dependencies: sectionDependencies,
  systemMap: sectionSystemMap,
  conceptMap: sectionConceptMap,
  editMap: sectionEditMap,
  flows: sectionFlows,
  featureDetails: sectionFeatureDetails,
  docsManifest: sectionDocsManifest,
  rules: sectionRules,
  api: sectionAPI,
  maintenance: sectionMaintenance,
};

// ---------- Generate ----------

function generate() {
  let output = `# Astra — AI-Native Documentation Index\n`;

  for (const sec of config.sections) {
    if (sectionMap[sec]) {
      output += sectionMap[sec]();
    }
  }

  fs.writeFileSync("docs/index.md", output);
  console.log("✅ Generated docs/index.md using scripts/wiki-steps.json");
}

generate();