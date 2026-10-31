# Sakshi Gupta — UX/UI Designer

A responsive, single-page portfolio built with React 19, TypeScript, Vite, and Material UI.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Personalize the portfolio

- **Resume:** Replace `src/assets/resume/Sakshi_Gupta_Resume.pdf` with the final PDF, keeping the filename or updating the import in `src/App.tsx`.
- **Profile and gallery images:** Replace `src/assets/photo.jpg` and the image URLs in `src/data/portfolio.json`. Project and gallery image URLs are placeholders; local files can be added under `src/assets/images/` and referenced from the JSON.
- **Social and case-study links:** Update the `socials` and `projects` entries in `src/data/portfolio.json`. Update the email and phone in `profile` there as well.
- **Portfolio copy and content:** Edit `src/data/portfolio.json` to change the profile, about text, project descriptions, and gallery items. Keep the data in sync with the interfaces in `src/types/index.ts`.
