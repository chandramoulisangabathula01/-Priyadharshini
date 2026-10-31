# Priyadharshini ECE Portfolio Implementation Plan

> **For agentic workers:** implement the tasks in order and verify the production build before handoff.

**Goal:** Build a polished, responsive personal portfolio for G. Priyadharshini as a static-exportable Next.js site ready for Netlify.

**Architecture:** A single editorial portfolio page uses small, focused React components and inline SVG illustrations for a distinctive engineering and space visual language. Next.js static export keeps hosting simple on Netlify; Netlify Forms handles contact submissions without a custom backend.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Netlify static hosting and Netlify Forms.

**Spec:** User-provided portfolio context in the pasted-text attachments; warm editorial direction approved in conversation.

## Global Constraints

- Use the supplied biographical details and project descriptions; do not invent credentials, statistics, or project capabilities.
- Keep unavailable portrait, resume, certificate images, and external project links clearly optional; never present placeholders as real artifacts.
- Build a responsive, keyboard-accessible portfolio with reduced-motion support.
- Preserve the requested Next.js, TypeScript, Tailwind CSS, and Netlify stack.

## Review Focus

- Small screens: navigation, project cards, and the contact form remain usable without horizontal scrolling.
- Missing assets: absent resume and certificates do not create broken links or misleading actions.
- Contact form: Netlify Forms can detect and process submissions from the exported HTML.
- Motion preferences: reduced-motion settings disable nonessential transitions.
- Static hosting: exported output and Netlify publish configuration agree.

---

### Task 1: Create the Next.js foundation

**Files:** `package.json`, lockfile, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `netlify.toml`, `app/layout.tsx`, `app/globals.css`.

- [ ] Create the App Router project with TypeScript, Tailwind CSS, static export to `out`, sensible metadata, and a Netlify publish configuration.
- [ ] Add the visual tokens, responsive reset, typographic pairing, focus states, selection color, and reduced-motion behavior.
- [ ] Confirm the framework compiles once the page is added.

### Task 2: Build the complete portfolio page

**Files:** `app/page.tsx`, `components/portfolio/*`.

- [ ] Add a responsive sticky navigation and hero with a custom inline orbital / circuit illustration and the supplied introduction.
- [ ] Add biography, education, skills, project showcase, achievements, ISRO goal, hobbies, and contact sections using the supplied facts.
- [ ] Use varied editorial layouts, readable section transitions, accessible labels, and subtle motion that respects reduced-motion preferences.
- [ ] Include a real Netlify Forms-compatible contact form and truthful links; omit actions that need unavailable files or destinations.

### Task 3: Complete assets and production verification

**Files:** `public/*` only for included originals, `README.md`.

- [ ] Provide local run/build instructions and explain how to add a real portrait, resume, certificate scans, and project links later.
- [ ] Run the production build and inspect the exported output and key configuration for Netlify compatibility.

