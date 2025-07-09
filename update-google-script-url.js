#!/usr/bin/env node

// Quick script to update Google Apps Script URL
// Usage: node update-google-script-url.js YOUR_GOOGLE_APPS_SCRIPT_URL

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node update-google-script-url.js YOUR_GOOGLE_APPS_SCRIPT_URL');
  console.log('Example: node update-google-script-url.js https://script.google.com/macros/s/AKfycbxxx.../exec');
  process.exit(1);
}

const newUrl = args[0];
const filePath = path.join(__dirname, 'src/Components/Home/Section9/Section9.js');

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the placeholder URL
  content = content.replace(
    'const GOOGLE_SCRIPT_URL = "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_URL";',
    `const GOOGLE_SCRIPT_URL = "${newUrl}";`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ Google Apps Script URL updated successfully!');
  console.log(`📝 Updated file: ${filePath}`);
  console.log(`🔗 New URL: ${newUrl}`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Run: npm run build');
  console.log('2. Run: netlify deploy --prod');
  console.log('3. Test your contact form!');
  
} catch (error) {
  console.error('❌ Error updating file:', error.message);
  process.exit(1);
}