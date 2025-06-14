// Export utilities for batch operations
class ExportUtils {
    constructor(screenshotMaker) {
        this.app = screenshotMaker;
        this.addBatchExportFeature();
    }

    addBatchExportFeature() {
        // Add batch export button to export section
        const exportSection = document.querySelector('.export-options');
        
        const batchBtn = document.createElement('button');
        batchBtn.textContent = '📦 Export All Templates';
        batchBtn.className = 'btn btn-warning';
        batchBtn.style.marginTop = '10px';
        
        batchBtn.addEventListener('click', () => this.exportAllTemplates());
        exportSection.appendChild(batchBtn);
    }

    async exportAllTemplates() {
        const templates = ['hero', 'features', 'testimonial', 'stats'];
        const format = document.getElementById('format').value;
        
        this.app.showNotification('Starting batch export...', 'info');
        
        for (let i = 0; i < templates.length; i++) {
            const template = templates[i];
            
            // Apply template
            this.app.applyTemplate(template);
            
            // Wait a moment for template to apply
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Export
            const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
            const device = this.app.devices[this.app.currentDevice];
            const filename = `${template}-template-${device.name.replace(/[^a-zA-Z0-9]/g, '-')}-${timestamp}.${format}`;
            
            try {
                const dataURL = this.app.canvas.toDataURL(`image/${format}`, format === 'jpeg' ? 0.9 : 1.0);
                const { ipcRenderer } = require('electron');
                
                // Auto-save in Downloads folder
                const path = require('path');
                const os = require('os');
                const fs = require('fs');
                
                const downloadsPath = path.join(os.homedir(), 'Downloads', 'Preview-Screenshots');
                
                // Create directory if it doesn't exist
                if (!fs.existsSync(downloadsPath)) {
                    fs.mkdirSync(downloadsPath, { recursive: true });
                }
                
                const filePath = path.join(downloadsPath, filename);
                const base64Data = dataURL.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                
                fs.writeFileSync(filePath, buffer);
                
                this.app.showNotification(`Exported ${template} template (${i + 1}/${templates.length})`, 'success');
                
            } catch (error) {
                console.error('Error exporting template:', template, error);
                this.app.showNotification(`Error exporting ${template} template`, 'error');
            }
        }
        
        this.app.showNotification('Batch export completed! Check your Downloads/Preview-Screenshots folder.', 'success');
    }
}

// Auto-initialize when app is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.screenshotMaker) {
            new ExportUtils(window.screenshotMaker);
        }
    }, 1500);
});
