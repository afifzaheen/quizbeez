# The Helper Bees Questionnaire

## Project Overview
This is a multi-step questionnaire application built with Next.js and Tailwind CSS. The application allows users to navigate through a series of questions, with their responses collected and submitted at the end.

## Features
- Multi-step form with progress tracking
- Various question types (multiple choice, text input, etc.)
- Responsive design for all device sizes
- Clean, component-based architecture

## Installation Steps
1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/helper-bees-questionnaire.git
cd helper-bees-questionnaire
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

## Commands
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues

## Project Structure
\`\`\`
src/
├── pages/
│   ├── index.tsx      # Main questionnaire page
│   └── _app.tsx       # App component
├── components/        # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── ...
├── styles/            # Global styles
│   └── globals.css
└── utils/             # Utility functions
\`\`\`

## Technologies Used
- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- React Hooks for state management

## Deployed Link
[View Demo](https://helper-bees-questionnaire.vercel.app)
