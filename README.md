# CodeQuest MVP

A small, client-side, gamified computer science learning app.

## Run it
1. Extract `codequest-mvp.zip`.
2. Open `index.html` in a modern browser (Chrome or Firefox).
3. No build step, server, account, API key, or external dependency is required.

Optional local server:
```bash
cd codequest-mvp
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Included
- Dashboard with XP, level, streak, and progress
- Eight learning worlds
- Introductory binary lesson and knowledge check
- Interactive 8-bit binary lab with challenge presets
- XP quests and achievements
- Local progress using browser localStorage

## Current limitations
- This is a front-end prototype. Progress is stored only in this browser.
- Streak tracking updates when the app is opened on a new calendar day; it is not a cloud-backed habit system.
- Lesson completion and lab completion reward XP once per local profile.
- Learning worlds are an initial navigation map, not a complete curriculum yet.
- No authentication, backend, AI tutor, code execution sandbox, or synced progress.

## Suggested next milestones
1. Add structured lessons and prerequisites for all eight worlds.
2. Add a real spaced-repetition queue and daily session planner.
3. Add a safe code-execution environment for programming exercises.
4. Add optional accounts and PostgreSQL-backed progress.
5. Add AI-generated explanations with grounded lesson context.

# CodeQuest — Step 2: Separate data from behavior

This version refactors the original single-file prototype into three files:

- `index.html` — page structure and styles.
- `data.js` — learning worlds, quests, default progress, and achievement rules.
- `app.js` — state loading/saving, event handling, rendering, and interactions.

## Run it

JavaScript ES modules are restricted when opened directly using `file://`, so start a local server from this directory:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## What to inspect

1. Open `data.js`: find `worlds`, `quests`, and `achievements`. These describe content and rules, not page interactions.
2. Open `app.js`: the first line imports that data. Find `save()`, `renderStats()`, and the click event listeners.
3. Change a world description in `data.js`, reload, and observe that the UI changes without editing the rendering logic.
4. Change a quest reward in `data.js`, then test it. Existing saved quest completion may prevent the reward from being awarded again; use Reset local progress or browser devtools to test cleanly.

## Why this structure?

Separating content from behavior reduces coupling. Adding or editing a world no longer requires hunting through event-handling code. This is an initial boundary, not a full production architecture: state, rendering, and event handling still live together in `app.js` and can be separated later when the app grows.
