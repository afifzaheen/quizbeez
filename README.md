You're absolutely right - the original requirement was to use the Pages Router. Let me correct the README to reflect that:

### The Helper Bees Questionnaire

## Project Overview

A multi-step questionnaire application built for The Helper Bees using Next.js with the Pages Router. This interactive form collects user information through a series of engaging questions with a clean, professional interface.

### Features

- Multi-step form with progress tracking
- Various question types (checkboxes, radio buttons, text inputs)
- Responsive design for all devices
- Professional user interface with The Helper Bees branding


## Installation Steps

1. **Clone the repository**

```shellscript
git clone [repository-url]
cd helper-bees-questionnaire
```


2. **Install dependencies**

```shellscript
npm install
# or
yarn install
# or
pnpm install
```




## Running the Application

### Development Mode

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

```shellscript
npm run build
npm start
```

## Live Demo

[View the live questionnaire here](https://helper-bees-questionnaire.vercel.app)
<!-- Replace with your actual deployed URL when available -->

## Technologies Used

- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- React Hooks for state management


## Project Structure

```plaintext
src/
├── pages/
│   ├── index.tsx      # Main questionnaire page
│   └── _app.tsx       # App component
├── components/        # Reusable UI components
├── styles/            # Global styles
└── public/            # Static assets
```

## Contact

For any questions or support, please contact [[your-email@example.com](mailto:your-email@example.com)]
