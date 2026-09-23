# Dev Portfolio

A modern developer portfolio website built with React, Vite, and Tailwind CSS. The project is designed to showcase projects, skills, education, and contact details with a premium, animated UI.

## Features

- Fully responsive portfolio landing page
- Glassmorphism-inspired dark/light theme toggle
- Animated hero section and marquee skill list
- Project cards with hover tilt effects
- About, education, work, and contact sections
- Contact form UI with success state interaction
- Custom cursor and magnetic interaction effects

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React icons

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Project Structure

```bash
src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── CustomCursor.jsx
│   ├── MagneticButton.jsx
│   └── TiltCard.jsx
└── pages/
    └── Home.jsx
```

## Notes

This portfolio is structured as a single-page personal brand website and can be customized by editing the content arrays and sections inside [src/pages/Home.jsx](src/pages/Home.jsx).

## License

This project is for personal portfolio use and is open for customization.
