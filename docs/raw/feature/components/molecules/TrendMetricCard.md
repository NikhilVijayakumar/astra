# TrendMetricCard

A compact card that displays a key metric with an optional trend direction indicator.

## Overview

Shows a metric label and value in a compact card format, with an optional trend indicator showing direction (up/down/neutral) and percentage change. The trend color communicates positive (green) or negative (red) movement. Adapts to its container width for use in dashboard metric rows.

## Responsibilities

- Display a metric label and value in a compact card
- Show an optional trend indicator with color-coded direction
- Adapt to container width

## Non-Responsibilities

- Does not fetch or calculate metric data
- Does not format values beyond rendering them as-is
- Does not handle click events or user interaction
- Does not animate trend changes or value transitions
- Does not provide chart or sparkline visualization

## Core Concepts

- **Metric display pattern:** Combines label, value, and optional trend into a single compact card — a reusable primitive for dashboard metric visualizations.
- **Conditional trend rendering:** The trend indicator only renders when a trend value is provided; the trend direction prop is inert without a value.
- **Color-coded direction mapping:** Trend direction maps to semantic colors (green for up, red for down, neutral gray) — consistent with the application's status color system.
- **Fluid width adaptation:** Designed to fill available container space in flex row layouts as part of a metric row group.

## States

- **Loaded** — Label and value displayed
- **With trend** — Trend value and direction provided; indicator rendered with color-coded direction
- **Without trend** — Only label and value shown; no trend indicator

## Edge Cases

- No trend value provided: Trend indicator not rendered
- Trend value provided but trend direction omitted: Renders with neutral color
- Unknown trend direction: Renders with neutral treatment
- Value of zero: Renders normally as a numeric value
- Very long label or value: Text wraps within the card

## Error Conditions

- Missing required inputs (label, value) — Required values must be provided
- Unknown trend direction — Renders with neutral fallback color
