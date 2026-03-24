const fs = require('fs');
const path = require('path');

function replaceQuotes(text) {
  // Replace straight quotes with curly quotes
  
  // 1. Apostrophes and single quotes
  // Heuristic: ' at start of word might be open quote? 'word' -> ‘word’
  // But 'tis -> ’tis.
  // Given the content is formal text, single quotes are likely apostrophes or nested quotes.
  // I will use a heuristic for single quotes:
  // If ' is preceded by whitespace or start of line, it's likely an opening quote ‘.
  // Otherwise it's an apostrophe or closing quote ’.
  let result = text.replace(/(^|[\s\(\[\{])'/g, '$1‘');
  result = result.replace(/'/g, '’');
  
  // 2. Double quotes
  // Opening quote: start of line, or preceded by whitespace or opening punctuation
  result = result.replace(/(^|[\s\(\[\{])"/g, '$1“');
  // Closing quote: everything else
  result = result.replace(/"/g, '”');
  
  return result;
}

function processWebsiteContent() {
  const filePath = path.resolve('WEBSITE_CONTENT.md');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  content = replaceQuotes(content);
  fs.writeFileSync(filePath, content);
  console.log(`Processed ${filePath}`);
}

function processResourceContent() {
  const filePath = path.resolve('resourceContent.ts');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Process title fields: title: "..."
  content = content.replace(/title:\s*"(.*?)"/g, (match, p1) => {
    return `title: "${replaceQuotes(p1)}"`;
  });
  
  // Process content fields: content: `...`
  content = content.replace(/content:\s*`([\s\S]*?)`/g, (match, p1) => {
    return `content: \`${replaceQuotes(p1)}\``;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Processed ${filePath}`);
}

function processConstants() {
  const filePath = path.resolve('constants.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fields to process in constants.tsx
  const fields = ['title', 'subtitle', 'description', 'heroText', 'intro', 'text', 'content', 'label'];
  
  fields.forEach(field => {
    // Regex to match field: "value"
    // We handle both single and double quotes for the value wrapper
    // But in constants.tsx, most strings use double quotes or single quotes.
    // We need to be careful not to replace the wrapper quotes.
    
    // Match field: "..."
    const regexDouble = new RegExp(`${field}:\\s*"(.*?)"`, 'g');
    content = content.replace(regexDouble, (match, p1) => {
      // If the value is a URL (starts with / or http), skip it
      if (p1.startsWith('/') || p1.startsWith('http')) return match;
      return `${field}: "${replaceQuotes(p1)}"`;
    });
    
    // Match field: '...'
    const regexSingle = new RegExp(`${field}:\\s*'(.*?)'`, 'g');
    content = content.replace(regexSingle, (match, p1) => {
      // If the value is a URL, skip it
      if (p1.startsWith('/') || p1.startsWith('http')) return match;
      return `${field}: '${replaceQuotes(p1)}'`;
    });
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Processed ${filePath}`);
}

processWebsiteContent();
processResourceContent();
processConstants();
