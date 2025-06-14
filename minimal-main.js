console.log('Testing minimal Electron app...');

try {
    const { app, BrowserWindow } = require('electron');
    console.log('Electron modules imported successfully');
    
    app.whenReady().then(() => {
        console.log('App ready, creating window...');
        
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
        
        win.loadFile('src/index.html');
        console.log('Window created and loading index.html');
    });
    
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
    
} catch (error) {
    console.error('Error in minimal main.js:', error);
    process.exit(1);
}
