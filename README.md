# Law Office of David Friedman

This is the public-facing website for the Law Office of David Friedman, a consumer protection law firm based in New York.

## Project Overview

This project is a React-based single-page application (SPA) built with Vite and Tailwind CSS. It currently serves as a "Coming Soon" placeholder site with a functional intake form.

### Key Features

*   **Placeholder Landing Page:** A professional "Coming Soon" page with brand identity.
*   **Intake Form:** Integrated with [Fillout](https://fillout.com) for secure client intake.
*   **Responsive Design:** Fully responsive layout for mobile and desktop.
*   **GitHub Pages Deployment:** Configured for easy deployment to GitHub Pages.

## Tech Stack

*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **Deployment:** GitHub Pages (`gh-pages`)

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

To deploy the site to GitHub Pages:

1.  Ensure your `vite.config.ts` has the correct `base` path (currently set to `./` for relative paths).
2.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    This will build the project and push the `dist` folder to the `gh-pages` branch.

## Configuration

*   **Intake Form:** The Fillout form URL is configured in `src/constants.tsx`.
*   **Brand Colors:** Tailwind colors are defined in `index.html` (script tag) and `tailwind.config.js` (if present).

## License

Private. All rights reserved.
