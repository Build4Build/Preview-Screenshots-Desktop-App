// Screenshot templates for common App Store layouts
class ScreenshotTemplates {
    constructor(canvas, deviceType) {
        this.canvas = canvas;
        this.deviceType = deviceType;
        this.device = this.getDeviceSpecs();
    }

    getDeviceSpecs() {
        const specs = {
            iphone15pro: { width: 1290, height: 2796 },
            iphone15: { width: 1284, height: 2778 }
        };
        return specs[this.deviceType] || specs.iphone15pro;
    }

    // Hero template - Large title with app screenshot
    createHeroTemplate() {
        console.log('Creating hero template...');
        this.canvas.clear();
        
        // Set a simple background first
        this.canvas.setBackgroundColor('#667eea');
        
        // Create objects with simpler properties and correct positioning
        const title = new fabric.Text('Your App Name', {
            left: this.device.width / 2,
            top: this.device.height * 0.15, // Use percentage-based positioning
            originX: 'center',
            originY: 'center',
            fontSize: 60,
            fill: '#ffffff',
            fontFamily: 'Arial',
            visible: true,
            selectable: true
        });

        const subtitle = new fabric.Text('Amazing features await', {
            left: this.device.width / 2,
            top: this.device.height * 0.25,
            originX: 'center',
            originY: 'center',
            fontSize: 32,
            fill: '#ffffff',
            fontFamily: 'Arial',
            visible: true,
            selectable: true
        });

        // Simple rectangle instead of complex mockup
        const phoneMockup = new fabric.Rect({
            left: this.device.width / 2,
            top: this.device.height * 0.6,
            originX: 'center',
            originY: 'center',
            width: this.device.width * 0.25,
            height: this.device.height * 0.45,
            fill: '#ffffff',
            rx: 20,
            ry: 20,
            visible: true,
            selectable: true
        });

        console.log('Adding objects to canvas...');
        console.log('Title position:', title.left, title.top);
        console.log('Subtitle position:', subtitle.left, subtitle.top);
        console.log('Phone mockup position:', phoneMockup.left, phoneMockup.top);
        
        this.canvas.add(title);
        this.canvas.add(subtitle);
        this.canvas.add(phoneMockup);
        
        // Force multiple renders
        this.canvas.renderAll();
        setTimeout(() => this.canvas.renderAll(), 100);
        
        console.log('Hero template completed, objects:', this.canvas.getObjects().length);
    }

    // Feature template - Three feature highlights
    createFeatureTemplate() {
        console.log('Creating feature template...');
        this.canvas.clear();
        this.canvas.setBackgroundColor('#f8f9fa');

        const features = [
            { title: 'Fast & Secure', desc: 'Lightning-fast performance', icon: '🚀' },
            { title: 'Easy to Use', desc: 'Intuitive interface', icon: '✨' },
            { title: 'Always Updated', desc: 'Regular updates', icon: '🔄' }
        ];

        features.forEach((feature, index) => {
            const yPos = this.device.height * 0.2 + (index * this.device.height * 0.25);

            // Feature icon
            const icon = new fabric.Text(feature.icon, {
                left: this.device.width / 2,
                top: yPos,
                originX: 'center',
                originY: 'center',
                fontSize: 80,
                fontFamily: 'Arial',
                visible: true,
                selectable: true
            });

            // Feature title
            const title = new fabric.Text(feature.title, {
                left: this.device.width / 2,
                top: yPos + 100,
                originX: 'center',
                originY: 'center',
                fontFamily: 'Arial',
                fontSize: 36,
                fill: '#1d1d1f',
                visible: true,
                selectable: true
            });

            // Feature description
            const desc = new fabric.Text(feature.desc, {
                left: this.device.width / 2,
                top: yPos + 150,
                originX: 'center',
                originY: 'center',
                fontFamily: 'Arial',
                fontSize: 24,
                fill: '#6e6e73',
                visible: true,
                selectable: true
            });

            this.canvas.add(icon);
            this.canvas.add(title);
            this.canvas.add(desc);
        });

        // Force multiple renders to ensure visibility
        this.canvas.renderAll();
        setTimeout(() => this.canvas.renderAll(), 100);
        console.log('Feature template completed, objects:', this.canvas.getObjects().length);
    }

    // Testimonial template
    createTestimonialTemplate() {
        console.log('Creating testimonial template...');
        this.canvas.clear();
        this.canvas.setBackgroundColor('#ffffff');

        // Quote mark
        const quote = new fabric.Text('"', {
            left: this.device.width / 2,
            top: this.device.height * 0.15,
            originX: 'center',
            originY: 'center',
            fontSize: 120,
            fill: '#007AFF',
            fontFamily: 'Arial',
            visible: true,
            selectable: true
        });

        // Testimonial text
        const testimonial = new fabric.Text('This app changed my\ndaily routine completely!', {
            left: this.device.width / 2,
            top: this.device.height * 0.4,
            originX: 'center',
            originY: 'center',
            fontFamily: 'Arial',
            fontSize: 40,
            fill: '#1d1d1f',
            textAlign: 'center',
            visible: true,
            selectable: true
        });

        // Star rating
        const stars = new fabric.Text('⭐⭐⭐⭐⭐', {
            left: this.device.width / 2,
            top: this.device.height * 0.6,
            originX: 'center',
            originY: 'center',
            fontSize: 40,
            fontFamily: 'Arial',
            visible: true,
            selectable: true
        });

        // Author
        const author = new fabric.Text('- Sarah M.', {
            left: this.device.width / 2,
            top: this.device.height * 0.7,
            originX: 'center',
            originY: 'center',
            fontFamily: 'Arial',
            fontSize: 32,
            fill: '#6e6e73',
            visible: true,
            selectable: true
        });

        this.canvas.add(quote);
        this.canvas.add(testimonial);
        this.canvas.add(stars);
        this.canvas.add(author);
        
        // Force multiple renders
        this.canvas.renderAll();
        setTimeout(() => this.canvas.renderAll(), 100);
        console.log('Testimonial template completed, objects:', this.canvas.getObjects().length);
    }

    // Statistics template
    createStatsTemplate() {
        console.log('Creating stats template...');
        this.canvas.clear();
        this.canvas.setBackgroundColor('#1d1d1f');

        const stats = [
            { number: '1M+', label: 'Downloads' },
            { number: '4.8★', label: 'App Store Rating' },
            { number: '150+', label: 'Countries' }
        ];

        // Title
        const title = new fabric.Text('Trusted by millions', {
            left: this.device.width / 2,
            top: this.device.height * 0.15,
            originX: 'center',
            originY: 'center',
            fontFamily: 'Arial',
            fontSize: 48,
            fill: '#ffffff',
            visible: true,
            selectable: true
        });

        this.canvas.add(title);

        stats.forEach((stat, index) => {
            const yPos = this.device.height * 0.35 + (index * this.device.height * 0.2);

            // Number
            const number = new fabric.Text(stat.number, {
                left: this.device.width / 2,
                top: yPos,
                originX: 'center',
                originY: 'center',
                fontFamily: 'Arial',
                fontSize: 80,
                fill: '#007AFF',
                visible: true,
                selectable: true
            });

            // Label
            const label = new fabric.Text(stat.label, {
                left: this.device.width / 2,
                top: yPos + 80,
                originX: 'center',
                originY: 'center',
                fontFamily: 'Arial',
                fontSize: 32,
                fill: '#ffffff',
                visible: true,
                selectable: true
            });

            this.canvas.add(number);
            this.canvas.add(label);
        });

        // Force multiple renders
        this.canvas.renderAll();
        setTimeout(() => this.canvas.renderAll(), 100);
        console.log('Stats template completed, objects:', this.canvas.getObjects().length);
    }
}
