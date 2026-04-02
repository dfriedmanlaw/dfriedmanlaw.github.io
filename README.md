# Law Office of David Friedman

This is the official website for the Law Office of David Friedman, a consumer protection law firm based in New York and Minnesota.

## Project Overview

This project is a high-performance, SEO-optimized website built using **Astro** for Static Site Generation (SSG). It features a "Hub & Spoke" content model designed for maximum search visibility and authority in consumer protection litigation.

### Key Features

*   **Static Site Generation (SSG):** Built with Astro for lightning-fast performance and perfect SEO crawlability.
*   **Hub & Spoke Content Model:** Practice area "Hubs" linked to deep-dive "Spoke" resource articles.
*   **SEO Optimized:** Automated sitemaps, canonical URLs, and comprehensive JSON-LD structured data for `LegalService`, `Attorney`, and `FAQPage`.
*   **Intake Form Integration:** Secure, encrypted client intake via [Fillout](https://fillout.com).
*   **Responsive Design:** Modern, professional interface built with Tailwind CSS v4.
*   **GitHub Pages Deployment:** Automated deployment via GitHub Actions.

## Tech Stack

*   **Framework:** [Astro 6](https://astro.build/)
*   **UI Components:** React 18
*   **Styling:** Tailwind CSS v4 (via PostCSS)
*   **Icons:** Lucide React
*   **Deployment:** GitHub Actions (automated to GitHub Pages)

## Getting Started

### Prerequisites

*   Node.js (v20 or higher)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/law-office-of-david-friedman.git
    cd law-office-of-david-friedman
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

This site is configured for **automated deployment** using GitHub Actions.

1.  Push your changes to the `main` branch.
2.  In your GitHub repository settings:
    *   Go to **Settings > Pages**.
    *   Under **Build and deployment > Source**, select **GitHub Actions**.
3.  The site will automatically build and deploy to GitHub Pages on every push.

## Configuration

*   **Site URL:** Configured in `astro.config.mjs`.
*   **Practice Areas:** Defined in `constants.tsx`.
*   **Resource Library:** Content managed in `resourceContent.ts`.
*   **Intake Form:** The Fillout form URL is configured in `constants.tsx`.

## License

Private. All rights reserved.
