// Debug script to test Electron import
console.log('Testing Electron import...');

try {
  const { app } = require('electron');
  console.log('Electron imported successfully');
  console.log('App:', typeof app);
} catch (error) {
  console.error('Failed to import Electron:', error.message);
  console.log('Node version:', process.version);
  console.log('Platform:', process.platform);
  console.log('Architecture:', process.arch);
}
