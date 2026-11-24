# Syncfusion Gantt Chart Dom Virtulization Demo

A React and Vite application that renders a Syncfusion EJ2 Gantt chart with selectable datasets of 5,000, 10,000, or 25,000 task records. The chart uses DOM virtualization to render large schedules and displays generated task dependencies.

## Requirements

- Node.js and npm

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Choose a dataset size above the chart to load that many records.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Features

- Switch between 5,000, 10,000, and 25,000 generated records.
- Refresh the chart data when a dataset size is selected.
- Use Syncfusion Gantt DOM virtualization for rendering large datasets.
- Show task IDs, names, start dates, durations, progress, and predecessors.
- Generate Finish-to-Start (FS), Start-to-Finish (SF), Finish-to-Finish (FF), and Start-to-Start (SS) dependencies. Dependency types are randomized for each generated project when data is created.

## Project structure

- `src/App.jsx` — Gantt configuration, dataset-size buttons, and chart data refresh.
- `src/data.js` — Sample task definitions and the dataset generator.
- `src/App.css` — Application layout and responsive styles.
- `src/main.jsx` — React entry point.

The Gantt task field mappings use `TaskID` and `parentID` for the self-referential task hierarchy and `Dependency` for predecessor links. Syncfusion's Tailwind 3 theme stylesheet is loaded from the CDN in `index.html`.
