        // Preview Screenshots Maker - Main Application Logic
// Fresh rewrite for reliability and clarity

class PreviewScreenshotMaker {
    constructor() {
        this.canvas = null;
        this.currentDevice = 'iphone15pro';
        
        this.devices = {
            iphone15pro: { 
                width: 1290, 
                height: 2796, 
                name: 'iPhone 15 Pro (6.9")',
                displayName: '1290 × 2796'
            },
            iphone15: { 
                width: 1284, 
                height: 2778, 
                name: 'iPhone 15 (6.5")',
                displayName: '1284 × 2778'
            }
        };

        this.templates = {
            hero: {
                name: 'Hero Template',
                elements: [
                    {
                        type: 'text',
                        text: 'Amazing App',
                        style: {
                            fontSize: 64,
                            fontWeight: 'bold',
                            fill: '#1d1d1f',
                            top: 0.15,
                            textAlign: 'center'
                        }
                    },
                    {
                        type: 'text',
                        text: 'Transform your daily routine with our innovative features',
                        style: {
                            fontSize: 28,
                            fill: '#86868b',
                            top: 0.25,
                            textAlign: 'center'
                        }
                    }
                ]
            },
            features: {
                name: 'Features Template',
                elements: [
                    {
                        type: 'text',
                        text: '✨ Key Features',
                        style: {
                            fontSize: 48,
                            fontWeight: 'bold',
                            fill: '#1d1d1f',
                            top: 0.1,
                            textAlign: 'center'
                        }
                    },
                    {
                        type: 'text',
                        text: '🚀 Fast Performance\n📱 Intuitive Design\n🔒 Secure & Private',
                        style: {
                            fontSize: 32,
                            fill: '#007aff',
                            top: 0.4,
                            textAlign: 'center',
                            lineHeight: 1.5
                        }
                    }
                ]
            },
            testimonial: {
                name: 'Testimonial Template',
                elements: [
                    {
                        type: 'text',
                        text: '"This app changed everything for me. Absolutely incredible!"',
                        style: {
                            fontSize: 36,
                            fontWeight: 'normal',
                            fill: '#1d1d1f',
                            top: 0.3,
                            textAlign: 'center',
                            fontStyle: 'italic'
                        }
                    },
                    {
                        type: 'text',
                        text: '⭐⭐⭐⭐⭐',
                        style: {
                            fontSize: 32,
                            fill: '#ff9500',
                            top: 0.45,
                            textAlign: 'center'
                        }
                    },
                    {
                        type: 'text',
                        text: '— Sarah Johnson, Designer',
                        style: {
                            fontSize: 22,
                            fill: '#86868b',
                            top: 0.55,
                            textAlign: 'center'
                        }
                    }
                ]
            },
            stats: {
                name: 'Statistics Template',
                elements: [
                    {
                        type: 'text',
                        text: 'Trusted by Millions',
                        style: {
                            fontSize: 48,
                            fontWeight: 'bold',
                            fill: '#1d1d1f',
                            top: 0.1,
                            textAlign: 'center'
                        }
                    },
                    {
                        type: 'text',
                        text: '10M+\nDownloads',
                        style: {
                            fontSize: 40,
                            fontWeight: 'bold',
                            fill: '#34c759',
                            top: 0.3,
                            textAlign: 'center'
                        }
                    },
                    {
                        type: 'text',
                        text: '4.9★\nApp Store Rating',
                        style: {
                            fontSize: 40,
                            fontWeight: 'bold',
                            fill: '#ff9500',
                            top: 0.55,
                            textAlign: 'center'
                        }
                    },
                    {
                        type: 'text',
                        text: '150+\nCountries',
                        style: {
                            fontSize: 40,
                            fontWeight: 'bold',
                            fill: '#007aff',
                            top: 0.8,
                            textAlign: 'center'
                        }
                    }
                ]
            }
        };

        this.init();
    }

    init() {
        console.log('🚀 Initializing Preview Screenshots Maker...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.initializeCanvas();
        this.setupEventListeners();
        this.setBackground('#ffffff');
        
        console.log('✅ Application setup complete');
    }

    initializeCanvas() {
        const canvasElement = document.getElementById('screenshot-canvas');
        if (!canvasElement) {
            console.error('❌ Canvas element not found');
            return;
        }

        const device = this.devices[this.currentDevice];
        
        this.canvas = new fabric.Canvas('screenshot-canvas', {
            width: device.width,
            height: device.height,
            backgroundColor: '#ffffff',
            selection: true,
            preserveObjectStacking: true
        });

        this.scaleCanvas();
        this.updateCanvasInfo();
        
        console.log(`✅ Canvas initialized: ${device.width}x${device.height}`);
    }

    scaleCanvas() {
        if (!this.canvas) return;

        const device = this.devices[this.currentDevice];
        const container = document.getElementById('canvasWrapper');
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const maxWidth = containerRect.width - 40;
        const maxHeight = window.innerHeight - 200;
        
        const scaleX = maxWidth / device.width;
        const scaleY = maxHeight / device.height;
        const scale = Math.min(scaleX, scaleY, 0.5);
        
        this.canvas.setDimensions({
            width: device.width * scale,
            height: device.height * scale
        });
        
        this.canvas.setZoom(scale);
        this.canvas.renderAll();
    }

    setupEventListeners() {
        // Device selection
        document.querySelectorAll('input[name="device"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.currentDevice = e.target.value;
                    this.updateDevice();
                }
            });
        });

        // Background colors
        document.querySelectorAll('.color-preset').forEach(preset => {
            preset.addEventListener('click', () => {
                const color = preset.dataset.color;
                this.setBackground(color);
            });
        });

        // Gradients
        document.querySelectorAll('.gradient-preset').forEach(preset => {
            preset.addEventListener('click', () => {
                const gradient = preset.dataset.gradient;
                this.setGradientBackground(gradient);
            });
        });

        // Custom color
        const customColorInput = document.getElementById('customColor');
        if (customColorInput) {
            customColorInput.addEventListener('change', (e) => {
                this.setBackground(e.target.value);
            });
        }

        // Templates
        document.querySelectorAll('.template-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const template = btn.dataset.template;
                this.loadTemplate(template);
            });
        });

        // Tools
        this.setupToolListeners();

        // Export
        this.setupExportListeners();

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Window resize
        window.addEventListener('resize', () => this.scaleCanvas());
    }

    setupToolListeners() {
        const addTextBtn = document.getElementById('addText');
        if (addTextBtn) {
            addTextBtn.addEventListener('click', () => this.addText());
        }

        const addImageBtn = document.getElementById('addImage');
        if (addImageBtn) {
            addImageBtn.addEventListener('click', () => this.addImage());
        }

        const addShapeBtn = document.getElementById('addShape');
        if (addShapeBtn) {
            addShapeBtn.addEventListener('click', () => this.addShape());
        }

        const clearBtn = document.getElementById('clearCanvas');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearCanvas());
        }
    }

    setupExportListeners() {
        const saveBtn = document.getElementById('saveImage');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.exportImage());
        }
    }

    updateDevice() {
        if (!this.canvas) return;

        const device = this.devices[this.currentDevice];
        
        this.canvas.setDimensions({
            width: device.width,
            height: device.height
        });
        
        this.scaleCanvas();
        this.updateCanvasInfo();
        
        console.log(`Device changed to: ${device.name}`);
    }

    updateCanvasInfo() {
        const infoElement = document.getElementById('canvasInfo');
        if (infoElement) {
            const device = this.devices[this.currentDevice];
            infoElement.textContent = device.displayName + ' pixels';
        }
    }

    setBackground(color) {
        if (!this.canvas) return;
        
        this.canvas.setBackgroundColor(color, this.canvas.renderAll.bind(this.canvas));
        console.log(`Background set to: ${color}`);
    }

    setGradientBackground(gradientCSS) {
        if (!this.canvas) return;

        // Parse CSS gradient to Fabric.js gradient
        // For now, use a simple approach
        const gradient = new fabric.Gradient({
            type: 'linear',
            coords: { x1: 0, y1: 0, x2: this.canvas.width, y2: this.canvas.height },
            colorStops: [
                { offset: 0, color: '#667eea' },
                { offset: 1, color: '#764ba2' }
            ]
        });

        this.canvas.setBackgroundColor(gradient, this.canvas.renderAll.bind(this.canvas));
        console.log('Gradient background applied');
    }

    addText() {
        if (!this.canvas) return;

        const text = new fabric.Text('Your App Title', {
            left: this.canvas.width / 2,
            top: this.canvas.height * 0.2,
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 48,
            fill: '#1d1d1f',
            textAlign: 'center',
            originX: 'center',
            originY: 'center',
            editable: true
        });

        this.canvas.add(text);
        this.canvas.setActiveObject(text);
        this.canvas.renderAll();
        
        console.log('✅ Text added to canvas');
    }

    addImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                fabric.Image.fromURL(event.target.result, (img) => {
                    // Scale image to fit nicely
                    const maxWidth = this.canvas.width * 0.6;
                    const maxHeight = this.canvas.height * 0.6;
                    
                    if (img.width > maxWidth || img.height > maxHeight) {
                        const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
                        img.scale(scale);
                    }
                    
                    img.set({
                        left: this.canvas.width / 2,
                        top: this.canvas.height / 2,
                        originX: 'center',
                        originY: 'center'
                    });
                    
                    this.canvas.add(img);
                    this.canvas.setActiveObject(img);
                    this.canvas.renderAll();
                    
                    console.log('✅ Image added to canvas');
                });
            };
            reader.readAsDataURL(file);
        };
        
        input.click();
    }

    addShape() {
        if (!this.canvas) return;

        const rect = new fabric.Rect({
            left: this.canvas.width / 2,
            top: this.canvas.height / 2,
            width: 200,
            height: 120,
            fill: '#007aff',
            originX: 'center',
            originY: 'center',
            rx: 12,
            ry: 12
        });

        this.canvas.add(rect);
        this.canvas.setActiveObject(rect);
        this.canvas.renderAll();
        
        console.log('✅ Rectangle added to canvas');
    }

    loadTemplate(templateName) {
        if (!this.canvas || !this.templates[templateName]) return;

        this.clearCanvas();
        
        const template = this.templates[templateName];
        
        template.elements.forEach(element => {
            if (element.type === 'text') {
                const text = new fabric.Text(element.text, {
                    left: this.canvas.width / 2,
                    top: this.canvas.height * element.style.top,
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: element.style.fontSize,
                    fill: element.style.fill,
                    textAlign: element.style.textAlign,
                    originX: 'center',
                    originY: 'center',
                    fontWeight: element.style.fontWeight || 'normal',
                    fontStyle: element.style.fontStyle || 'normal'
                });

                this.canvas.add(text);
            }
        });

        this.canvas.renderAll();
        console.log(`Template '${templateName}' loaded`);
    }

    exportImage() {
        if (!this.canvas) return;

        const format = document.getElementById('format')?.value || 'png';
        
        const link = document.createElement('a');
        link.download = `app-screenshot-${Date.now()}.${format}`;
        link.href = this.canvas.toDataURL({
            format: format,
            quality: format === 'jpeg' ? 0.9 : 1,
            multiplier: 1
        });
        
        link.click();
        console.log(`✅ Image exported as ${format.toUpperCase()}`);
    }

    clearCanvas() {
        if (!this.canvas) return;
        
        this.canvas.clear();
        this.setBackground('#ffffff');
        console.log('🗑️ Canvas cleared');
    }

    handleKeyboard(event) {
        if (event.key === 'Delete' || event.key === 'Backspace') {
            const activeObject = this.canvas?.getActiveObject();
            if (activeObject) {
                this.canvas.remove(activeObject);
                this.canvas.renderAll();
            }
        }
    }

    // Debug method
    runDebugTest() {
        console.log('🔧 Running debug test...');
        
        if (!this.canvas) {
            console.error('❌ Canvas not initialized');
            return;
        }

        // Add test elements
        this.addText();
        
        setTimeout(() => {
            this.addShape();
            console.log('✅ Debug test completed - check canvas for elements');
        }, 100);
    }
}

// Initialize the application when DOM is ready
let app;

function initializeApp() {
    app = new PreviewScreenshotMaker();
    
    // Add debug test button functionality
    const debugBtn = document.getElementById('debugTest');
    if (debugBtn) {
        debugBtn.addEventListener('click', () => {
            if (app) app.runDebugTest();
        });
    }
}

// Start the application
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}