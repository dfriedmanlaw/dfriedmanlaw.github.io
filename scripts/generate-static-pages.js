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

// Function to extract slugs from resourceContent.ts
function getResourceSlugs() {
  const contentPath = path.resolve(__dirname, '../resourceContent.ts');
  const content = fs.readFileSync(contentPath, 'utf-8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(`resource/${match[1]}/`);
  }
  return slugs;
}

async function generate() {
  if (!fs.existsSync(INDEX_HTML)) {
    console.error('Error: dist/index.html not found. Run npm run build first.');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(INDEX_HTML, 'utf-8');
  const allRoutes = [...staticRoutes, ...getResourceSlugs()];

  console.log(`Generating ${allRoutes.length} static pages...`);

  for (const route of allRoutes) {
    const routeDir = path.resolve(DIST_DIR, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    // Inject correct canonical URL for each page
    const canonicalUrl = `https://davidfriedmanlaw.com/${route}`;
    const pageContent = indexContent.replace(
      '<link rel="canonical" href="https://davidfriedmanlaw.com/" />',
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
    
    fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageContent);
    console.log(`  ✓ ${route}`);
  }

  console.log('Static pages generated successfully!');
}

generate();
