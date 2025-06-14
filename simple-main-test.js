// Simple Electron main process test
console.log('Starting Electron test...');

try {
    const electron = require('electron');
    console.log('Electron imported successfully:', !!electron);
    console.log('Electron app:', !!electron.app);
    console.log('Electron BrowserWindow:', !!electron.BrowserWindow);
    
    const { app, BrowserWindow } = electron;
    
    console.log('App object:', !!app);
    console.log('App whenReady:', typeof app.whenReady);
    
    if (app && typeof app.whenReady === 'function') {
        app.whenReady().then(() => {
            console.log('Electron app is ready!');
            
            const win = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            });
            
            win.loadFile('fresh-start.html');
            console.log('Window created and loaded');
        });
        
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
    } else {
        console.error('App or app.whenReady is not available');
    }
    
} catch (error) {
    console.error('Error importing or using Electron:', error);
}
