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

**Task-based quick reference:**
- **Add/modify UI component** → src/common/components/{atoms,molecules,organisms,templates}/
- **API calls** → src/common/repo/ (ApiService)
- **Theme/styling** → src/theme/, src/common/theme/
- **i18n/localization** → src/common/localization/
- **State management** → src/common/hooks/useDataState
- **Build/config** → vite.config.js, package.json

**Debug & Fix:**
- **Debug API error** → src/common/repo/ApiService.ts + src/common/hooks/useDataState.ts
- **Fix UI style** → src/theme/tokens/ (colors, spacing, typography)
- **Fix state bug** → src/common/state/AppState.ts

**Docs:**
- **Core features** → docs/feature/
- **Integration** → docs/integration-guide/
- **Component docs** → docs/feature/components/
`;
}

function sectionGlobal() {
  return `
## Global Constants

| Key | Value |
|-----|------|
| Name | ${pkg.name} |
| Version | ${pkg.version} |
| Type | React + Electron Library |
| Build | Vite (ESM + UMD) |
`;
}

function sectionVision() {
  return `
## High-Level Vision

Astra is a React + Electron boilerplate library providing a production-ready foundation with MVVM architecture, Material UI 7 theming, localization, type-safe API, and 46+ UI components organized by Atomic Design.
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

### Data Flow (API to UI)
Hook component → useDataState() → ApiService.get/post/put/delete() → ServerResponse<T> → Render data

### Theme Flow
Wrap <ThemeProvider> → useTheme() hook → MUI theme tokens → component styles

### Localization Flow
Wrap <LanguageProvider> → useLanguage() hook → translations['key'] → UI text

### Component Creation
Define props → Create {Component}.tsx → Export from {tier}/index.ts → Add doc to docs/feature/components/

### State Flow
INIT → (loading) → LOADING → (success) → COMPLETED | (error) → ERROR

### Build Flow
npm run build → Vite + vite-plugin-dts → dist/astra.es.js + dist/astra.umd.js + dist/lib.d.ts
`;
}

function sectionFeatureDetails() {
  return `
## Feature Details

### Theming (src/theme/, src/common/theme/)
- **Purpose:** Material UI 7 theme system with design tokens
- **Key:** ThemeProvider, ThemeToggle, theme tokens (colors, typography, spacing)
- **Usage:** Wrap app, use tokens (never hardcode colors)
- **Mode:** Light/Dark supported

### Localization (src/common/localization/)
- **Purpose:** Internationalization (i18n)
- **Key:** LanguageProvider, useLanguage hook
- **Usage:** Provide translations, use hook to access
- **Languages:** Configurable, any language

### State Management (src/common/hooks/)
- **Purpose:** MVVM pattern with useDataState
- **Key:** useDataState hook, AppStateHandler
- **States:** INIT, LOADING, COMPLETED, ERROR
- **Usage:** Data fetching with auto state handling

### Repository (src/common/repo/)
- **Purpose:** Type-safe API layer (Axios wrapper)
- **Key:** ApiService, HttpStatusCode, ServerResponse
- **Usage:** Create instance, use typed methods
- **Errors:** Built-in status code handling

### Component Library (src/common/components/)
- **Organized by:** Atomic Design (atoms → molecules → organisms → templates)
- **Tiers:** 
  - Atoms: StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState (5)
  - Molecules: Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer (6)
  - Organisms: DataTable, DecisionActionCard, TimelineNode, +29 more (32)
  - Templates: PageHeader, SummaryPanel, HeroSection (3)
`;
}

function sectionDocsManifest() {
  function normalizePath(p) {
    return p.replace(/\\/g, "/");
  }
  
  // Group docs by priority
  const allDocs = docsFiles.map(f => normalizePath(f));
  const featureFiles = allDocs.filter(f => f.startsWith("docs/feature/"));
  const integrationFiles = allDocs.filter(f => f.startsWith("docs/integration-guide/"));
  const prFiles = allDocs.filter(f => f.startsWith("docs/pr/") || f.startsWith("docs/issue/"));
  
  const section = (title, files) => {
    if (files.length === 0) return "";
    return `### ${title}\n` + files
      .map((file) => {
        const rel = file.replace("docs/", "");
        const content = readFileSafe(file);
        const summary = summarize(content).slice(0, 80);
        return `- **${rel}** → ${summary}`;
      })
      .join("\n") + "\n\n";
  };
  
  return `
## Documentation Manifest

### Core Features (HIGH PRIORITY)
${section("Theming", featureFiles.filter(f => f.includes("/theming/")))}
${section("Localization", featureFiles.filter(f => f.includes("/localization/")))}
${section("State", featureFiles.filter(f => f.includes("/state/")))}
${section("Repository", featureFiles.filter(f => f.includes("/repository/")))}
${section("Components", featureFiles.filter(f => f.includes("/components/")))}
${section("MVVM", featureFiles.filter(f => f.includes("/mvvm/")))}

### Integration Guides
${section("Guides", integrationFiles)}

### PR / Integration Docs (LOW PRIORITY)
${section("PR Docs", prFiles)}
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