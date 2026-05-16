# Gaurav Portfolio

A personal portfolio site for Gaurav Kumar, rebuilt as a Vite + React application with TypeScript and Tailwind CSS.

## Overview

The site showcases:

- A typed hero section with resume access
- About, skills, experience, projects, and contact sections
- A responsive navigation bar with section highlighting
- Animated background effects and project cards

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser:

   ```text
   http://localhost:4028
   ```

## Available Scripts

- `npm run dev` - Start the Vite development server on port 4028
- `npm run build` - Build the app for production
- `npm run start` - Preview the production build locally
- `npm run lint` - Run ESLint across the project
- `npm run lint:fix` - Auto-fix lint issues
- `npm run format` - Format source files with Prettier
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```text
gauravportfolio/
├── index.html
├── vite.config.ts
├── package.json
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── Gaurav Resume.pdf
│       └── images/
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── app/
    │   └── page.tsx
    ├── components/
    │   ├── AboutSection.tsx
    │   ├── ContactSection.tsx
    │   ├── ExperienceSection.tsx
    │   ├── HeroSection.tsx
    │   ├── Navbar.tsx
    │   ├── ParticleBackground.tsx
    │   ├── ProjectsSection.tsx
    │   ├── SkillsSection.tsx
    │   └── ui/
    └── styles/
        ├── index.css
        └── tailwind.css
```

## Resume Asset

The resume used by the site is stored at:

```text
/public/assets/Gaurav Resume.pdf
```

It is linked from the hero section and the navbar as a downloadable/openable asset.

## Notes

- The app now boots through `src/main.tsx` and `index.html`, not the Next.js app router.
- The existing section components were kept and wired into the Vite entry with minimal changes.
- The project still keeps the original Next-related files in the repo, but the runtime path is Vite.