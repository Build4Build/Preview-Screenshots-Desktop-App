#!/usr/bin/env node

console.log('Testing Electron startup...');
console.log('Current working directory:', process.cwd());
console.log('Node version:', process.version);

try {
    const path = require('path');
    console.log('Path module loaded successfully');
    
    const fs = require('fs');
    console.log('FS module loaded successfully');
    
    // Check if main.js exists
    const mainPath = path.join(__dirname, 'src', 'main.js');
    console.log('Looking for main.js at:', mainPath);
    console.log('Main.js exists:', fs.existsSync(mainPath));
    
    // Try to require electron
    console.log('Attempting to require electron...');
    const electron = require('electron');
    console.log('Electron loaded successfully');
    console.log('Electron version:', process.versions.electron);
    
} catch (error) {
    console.error('Error during startup test:', error);
}
