// Demo functionality to showcase the app
class DemoContent {
    constructor(screenshotMaker) {
        this.app = screenshotMaker;
        this.addDemoButton();
    }

    addDemoButton() {
        // Add demo button to the header
        const header = document.querySelector('.header');
        const demoBtn = document.createElement('button');
        demoBtn.textContent = '🎬 Load Demo';
        demoBtn.className = 'btn btn-primary demo-btn';
        demoBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 8px 16px;
            font-size: 12px;
        `;
        
        demoBtn.addEventListener('click', () => this.loadDemo());
        header.style.position = 'relative';
        header.appendChild(demoBtn);
    }

    loadDemo() {
        // Apply hero template first
        this.app.applyTemplate('hero');
        
        // Wait longer for template to fully render
        setTimeout(() => {
            this.customizeHeroTemplate();
        }, 1000);
    }

    customizeHeroTemplate() {
        const canvas = this.app.canvas;
        
        try {
            // Get all objects after template is applied
            const objects = canvas.getObjects();
            console.log('Canvas objects found:', objects.length);
            
            // Find and update title (first text object)
            const textObjects = objects.filter(obj => obj.type === 'i-text' || obj.type === 'text');
            console.log('Text objects found:', textObjects.length);
            
            if (textObjects.length >= 1) {
                const titleObj = textObjects[0];
                titleObj.set({
                    text: 'Screenshot Maker',
                    fill: '#ffffff'
                });
                console.log('Updated title:', titleObj.text);
            }

            // Update subtitle (second text object)
            if (textObjects.length >= 2) {
                const subtitleObj = textObjects[1];
                subtitleObj.set({
                    text: 'Create stunning App Store screenshots'
                });
                console.log('Updated subtitle:', subtitleObj.text);
            }

            // Add app icon with better positioning
            const deviceWidth = this.app.devices[this.app.currentDevice].width;
            
            const iconPlaceholder = new fabric.Circle({
                left: deviceWidth / 2,
                top: 500,
                originX: 'center',
                originY: 'center',
                radius: 80,
                fill: '#ffffff',
                stroke: '#e1e5e9',
                strokeWidth: 6,
                shadow: new fabric.Shadow({
                    color: 'rgba(0,0,0,0.3)',
                    blur: 15,
                    offsetX: 0,
                    offsetY: 8
                })
            });

            const iconText = new fabric.IText('📱', {
                left: deviceWidth / 2,
                top: 500,
                originX: 'center',
                originY: 'center',
                fontSize: 80,
                fontFamily: 'Apple Color Emoji, Arial, sans-serif',
                selectable: true
            });

            // Add feature points
            const featureText = new fabric.IText('✨ Easy to use\n🎨 Professional templates\n📱 App Store ready', {
                left: deviceWidth / 2,
                top: 1600,
                originX: 'center',
                originY: 'center',
                fontSize: 36,
                fill: '#ffffff',
                fontFamily: 'SF Pro Display, -apple-system, sans-serif',
                textAlign: 'center',
                lineHeight: 1.4
            });

            // Add objects to canvas
            canvas.add(iconPlaceholder);
            canvas.add(iconText);
            canvas.add(featureText);
            
            // Force canvas to render all changes
            canvas.requestRenderAll();
            
            this.app.showNotification('Demo content loaded! Try editing the elements.', 'success');
            
        } catch (error) {
            console.error('Error in demo customization:', error);
            this.app.showNotification('Demo loaded with basic template.', 'info');
        }
    }
}

// Auto-initialize demo when app is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait for the main app to initialize
    setTimeout(() => {
        if (window.screenshotMaker) {
            new DemoContent(window.screenshotMaker);
        }
    }, 1000);
});
