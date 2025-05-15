# The Helper Bees Questionnaire

This is a multi-step questionnaire application built with Next.js and Tailwind CSS. The application allows users to navigate through a series of questions, with their responses collected and submitted at the end.

## Features

- Multi-step form with progress tracking
- Various question types (multiple choice, text input, etc.)
- Responsive design for all device sizes
- Clean, component-based architecture

## Getting Started

First, install the dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
.
├── app/                  # App Router
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page component
├── components/           # Reusable components
│   ├── ui/               # UI components
│   ├── Header.tsx        # Header component
│   ├── Footer.tsx        # Footer component
│   └── ...               # Other components
├── lib/                  # Utility functions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── logo.png          # Logo image
│   └── elderly-couple.jpeg # Elderly couple image
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

## Deployment

This project can be deployed on Vercel.
