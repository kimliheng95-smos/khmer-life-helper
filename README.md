# Khmer Life Helper

A practical web app for Cambodian students and young people — study, career, and everyday life guidance with a personalized 12-week roadmap.

## Features

- **Home** — overview and quick entry points
- **Student** — scholarships, majors, study guides, learning roadmaps
- **Career** — CV, interviews, internships, career roadmaps
- **Life** — budget, goals, checklists, life planning
- **Next Step** — choose a goal, answer questions, get a personalized 12-week plan with progress tracking (saved in the browser)
- **Dashboard** — see saved goal and progress at a glance

## Tech stack

- React 19 + Vite
- React Router
- Bootstrap 5 + Bootstrap Icons

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are in the `dist/` folder. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Notes

- Progress and selected goal are stored in `localStorage` on the user’s browser.
- No backend is required.
