// Device mockup overlay for iPhone frames
class DeviceMockup {
    constructor(canvas, deviceType) {
        this.canvas = canvas;
        this.deviceType = deviceType;
    }

    addPhoneFrame() {
        const device = this.getDeviceSpecs();
        
        // Create phone frame
        const frame = new fabric.Rect({
            left: 0,
            top: 0,
            width: device.width,
            height: device.height,
            fill: 'transparent',
            stroke: '#000000',
            strokeWidth: 8,
            rx: device.cornerRadius,
            ry: device.cornerRadius,
            selectable: false,
            evented: false,
            excludeFromExport: false
        });

        // Add notch for iPhone (simplified)
        if (this.deviceType.includes('iphone')) {
            const notch = new fabric.Rect({
                left: device.width / 2 - 60,
                top: 0,
                width: 120,
                height: 30,
                fill: '#000000',
                rx: 15,
                ry: 15,
                selectable: false,
                evented: false,
                excludeFromExport: false
            });
            
            this.canvas.add(notch);
        }

        // Add home indicator
        const homeIndicator = new fabric.Rect({
            left: device.width / 2 - 67,
            top: device.height - 15,
            width: 134,
            height: 5,
            fill: '#000000',
            rx: 2.5,
            ry: 2.5,
            selectable: false,
            evented: false,
            excludeFromExport: false
        });

        this.canvas.add(frame);
        this.canvas.add(homeIndicator);
        this.canvas.renderAll();
    }

    getDeviceSpecs() {
        const specs = {
            iphone15pro: {
                width: 1290,
                height: 2796,
                cornerRadius: 60
            },
            iphone15: {
                width: 1284,
                height: 2778,
                cornerRadius: 60
            }
        };
        
        return specs[this.deviceType] || specs.iphone15pro;
    }
}
