# Vishnu — Developer Portfolio

A responsive React + Vite portfolio for showcasing Vishnu's frontend development work.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create the production site in `dist/`.

## Personalize before publishing

- The GitHub and LinkedIn profile links currently use the supplied profile URLs.
- Replace `your.email@example.com` with your contact email.
- The supplied resume is available from the hero's Download resume button at `/resume.pdf`.
- The Job Application Tracker links use the supplied repository and demo URLs. Add a repository link for the Attendance Monitoring System if you want to publish its source.
- The contact form currently validates fields in the browser and does not send messages. Connect an email service or backend before relying on submissions.

## Deploy to Vercel

1. Push the project to a Git provider and import the repository in Vercel.
2. Set the project root to `portfolio` if the repository contains this project in a subfolder.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. Vercel detects Vite automatically; no additional routing configuration is needed for this single-page portfolio.
