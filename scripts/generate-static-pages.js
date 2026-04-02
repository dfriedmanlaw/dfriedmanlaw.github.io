import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML = path.resolve(DIST_DIR, 'index.html');

// Define static routes
const staticRoutes = [
  'library/',
  'legal/',
  'intake/',
  'about/',
  'contact/',
  'practice/mortgage/',
  'practice/credit/',
  'practice/debt/',
  'practice/fintech/',
  'practice/bankruptcy/',
];

// Function to extract slugs and content from resourceContent.ts
function getResources() {
  const contentPath = path.resolve(__dirname, '../resourceContent.ts');
  const content = fs.readFileSync(contentPath, 'utf-8');
  
  // Extract slug, title, content, and optional featuredSnippet
  const resourceRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?(?:featuredSnippet:\s*\{[\s\S]*?question:\s*["']([^"']+)["'][\s\S]*?answer:\s*["']([^"']+)["'][\s\S]*?\})?[\s\S]*?content:\s*`([\s\S]*?)`[\s\S]*?\}/g;
  const resources = [];
  let match;
  while ((match = resourceRegex.exec(content)) !== null) {
    resources.push({
      route: `resource/${match[1]}/`,
      title: match[2],
      question: match[3],
      answer: match[4],
      content: match[5]
    });
  }
  return resources;
}

// Hardcoded content for practice areas to ensure they are indexed
const practiceAreas = [
  {
    route: 'practice/mortgage/',
    title: 'Mortgage Servicing Errors & RESPA Litigation',
    content: '# Mortgage Servicing Errors\n\nWe represent homeowners facing payment misapplication, escrow errors, and servicing abuse. Under RESPA and Regulation X, you have the right to a reasonable investigation of your mortgage errors.'
  },
  {
    route: 'practice/credit/',
    title: 'Credit Reporting Errors & FCRA Claims',
    content: '# Credit Reporting Errors\n\nIdentity theft, mixed files, and inaccurate reporting can destroy your financial life. We use the Fair Credit Reporting Act (FCRA) to force bureaus to fix their mistakes and pay for the damage they cause.'
  },
  {
    route: 'practice/debt/',
    title: 'Debt Collection Defense & FDCPA Violations',
    content: '# Debt Collection Defense\n\nHarassing calls at work, threats of arrest, and collection of time-barred debts are illegal. We stop the harassment and hold collectors accountable under the FDCPA.'
  },
  {
    route: 'practice/fintech/',
    title: 'Fintech Fraud & Payment App Rights',
    content: '# Fintech & Payment App Fraud\n\nZelle scams, neobank freezes, and unauthorized transfers are governed by Regulation E. We help consumers recover funds from banks that fail to protect them from sophisticated fraud.'
  },
  {
    route: 'practice/bankruptcy/',
    title: 'Bankruptcy Rights & Stay Violations',
    content: '# Bankruptcy Rights\n\nCreditors who ignore the Automatic Stay or the Discharge Injunction are in contempt of federal court. We enforce your bankruptcy rights and sue for sanctions when creditors cross the line.'
  }
];

// Simple markdown to HTML converter for static injection
function mdToHtml(md) {
  return md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/\n/gim, '<br />');
}

async function generate() {
  if (!fs.existsSync(INDEX_HTML)) {
    console.error('Error: dist/index.html not found. Run npm run build first.');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(INDEX_HTML, 'utf-8');
  const resources = getResources();
  
  // Filter out routes that are already handled by practiceAreas or resources
  const handledRoutes = new Set([
    ...practiceAreas.map(p => p.route),
    ...resources.map(r => r.route)
  ]);
  
  const otherRoutes = staticRoutes
    .filter(r => !handledRoutes.has(r))
    .map(r => ({ route: r, title: 'Law Office of David Friedman', content: '' }));
  
  const allPages = [...practiceAreas, ...resources, ...otherRoutes];

  console.log(`Generating ${allPages.length} static pages with content injection...`);

  for (const page of allPages) {
    const routeDir = path.resolve(DIST_DIR, page.route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    // Inject correct canonical URL and content for each page
    const canonicalUrl = `https://davidfriedmanlaw.com/${page.route}`;
    let pageContent = indexContent.replace(
      '<link rel="canonical" href="https://davidfriedmanlaw.com/" />',
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Inject the content into the root div for SEO
    if (page.content) {
      const htmlContent = `<div class="static-content" style="display:none">
        ${page.question ? `<h2>${page.question}</h2><p>${page.answer}</p>` : ''}
        ${mdToHtml(page.content)}
      </div>`;
      
      // Use regex to match the root div even with whitespace or content
      pageContent = pageContent.replace(
        /<div id="root">[\s\S]*?<\/div>/,
        `<div id="root">${htmlContent}</div>`
      );

      // Inject page-specific FAQ Schema if available
      if (page.question && page.answer) {
        const faqSchema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "${page.question.replace(/"/g, '\\"')}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${page.answer.replace(/"/g, '\\"')}"
        }
      }]
    }
    </script>`;
        pageContent = pageContent.replace('</head>', `${faqSchema}\n</head>`);
      }
    }
    
    const targetPath = path.resolve(routeDir, 'index.html');
    fs.writeFileSync(targetPath, pageContent);
    console.log(`  ✓ ${page.route}`);
  }

  // Generate sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://davidfriedmanlaw.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  for (const page of allPages) {
    if (!page.route) continue;
    
    let priority = '0.7';
    let changefreq = 'monthly';
    
    if (page.route.startsWith('practice/')) {
      priority = '0.9';
    } else if (page.route === 'library/') {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (['about/', 'contact/', 'intake/'].includes(page.route)) {
      priority = '0.6';
    } else if (page.route === 'legal/') {
      priority = '0.3';
      changefreq = 'yearly';
    }

    sitemap += `
  <url>
    <loc>https://davidfriedmanlaw.com/${page.route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';
  
  fs.writeFileSync(path.resolve(DIST_DIR, 'sitemap.xml'), sitemap);
  console.log('  ✓ sitemap.xml');

  console.log('Static pages and sitemap generated successfully!');
}

generate();
