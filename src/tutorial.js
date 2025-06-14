// Tutorial overlay for new users
class Tutorial {
    constructor() {
        this.steps = [
            {
                target: '.device-options',
                title: 'Choose Your Device',
                content: 'Select the iPhone model you\'re targeting for the App Store. This sets the exact screenshot dimensions required.'
            },
            {
                target: '.template-options',
                title: 'Use Templates',
                content: 'Quick-start with professional templates. Try the Hero template for your main app screenshot!'
            },
            {
                target: '.canvas-wrapper',
                title: 'Design Your Screenshot',
                content: 'This is your canvas! Drag & drop images here, or use the Content tools to add text and shapes.'
            },
            {
                target: '.export-options',
                title: 'Export When Ready',
                content: 'Save your beautiful screenshots in PNG or JPEG format, ready for the App Store!'
            }
        ];
        
        this.currentStep = 0;
        this.isActive = false;
        
        this.checkFirstVisit();
    }

    checkFirstVisit() {
        const hasSeenTutorial = localStorage.getItem('preview-screenshots-tutorial-seen');
        if (!hasSeenTutorial) {
            setTimeout(() => this.start(), 2000); // Start after app loads
        }
    }

    start() {
        this.isActive = true;
        this.currentStep = 0;
        this.createOverlay();
        this.showStep(0);
    }

    createOverlay() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'tutorial-overlay';
        this.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Create tutorial card
        this.card = document.createElement('div');
        this.card.className = 'tutorial-card';
        this.card.style.cssText = `
            background: white;
            border-radius: 16px;
            padding: 30px;
            max-width: 400px;
            margin: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            text-align: center;
            position: relative;
        `;

        this.overlay.appendChild(this.card);
        document.body.appendChild(this.overlay);
    }

    showStep(stepIndex) {
        const step = this.steps[stepIndex];
        
        this.card.innerHTML = `
            <h3 style="margin: 0 0 15px 0; color: #1d1d1f; font-size: 24px; font-weight: 600;">
                ${step.title}
            </h3>
            <p style="margin: 0 0 25px 0; color: #6e6e73; font-size: 16px; line-height: 1.5;">
                ${step.content}
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="color: #6e6e73; font-size: 14px;">
                    ${stepIndex + 1} of ${this.steps.length}
                </div>
                <div>
                    ${stepIndex > 0 ? '<button id="tutorial-prev" style="margin-right: 10px; padding: 8px 16px; border: 1px solid #e1e5e9; background: white; border-radius: 8px; cursor: pointer;">Previous</button>' : ''}
                    ${stepIndex < this.steps.length - 1 ? 
                        '<button id="tutorial-next" style="padding: 8px 16px; background: #007AFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">Next</button>' :
                        '<button id="tutorial-finish" style="padding: 8px 16px; background: #34C759; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">Get Started!</button>'
                    }
                    <button id="tutorial-skip" style="margin-left: 10px; padding: 8px 16px; border: none; background: transparent; color: #6e6e73; cursor: pointer;">Skip</button>
                </div>
            </div>
        `;

        // Highlight target element
        this.highlightElement(step.target);

        // Bind buttons
        const nextBtn = document.getElementById('tutorial-next');
        const prevBtn = document.getElementById('tutorial-prev');
        const finishBtn = document.getElementById('tutorial-finish');
        const skipBtn = document.getElementById('tutorial-skip');

        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
        if (prevBtn) prevBtn.addEventListener('click', () => this.previous());
        if (finishBtn) finishBtn.addEventListener('click', () => this.finish());
        if (skipBtn) skipBtn.addEventListener('click', () => this.finish());
    }

    highlightElement(selector) {
        // Remove previous highlights
        document.querySelectorAll('.tutorial-highlight').forEach(el => {
            el.classList.remove('tutorial-highlight');
        });

        // Add highlight to target
        const target = document.querySelector(selector);
        if (target) {
            target.style.position = 'relative';
            target.style.zIndex = '10001';
            target.classList.add('tutorial-highlight');
            
            // Add glow effect
            const style = document.createElement('style');
            style.textContent = `
                .tutorial-highlight {
                    box-shadow: 0 0 20px rgba(0, 122, 255, 0.8) !important;
                    border-radius: 8px !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    next() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.showStep(this.currentStep);
        }
    }

    previous() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.showStep(this.currentStep);
        }
    }

    finish() {
        this.isActive = false;
        
        // Remove highlights
        document.querySelectorAll('.tutorial-highlight').forEach(el => {
            el.classList.remove('tutorial-highlight');
            el.style.position = '';
            el.style.zIndex = '';
        });

        // Remove overlay
        if (this.overlay) {
            this.overlay.remove();
        }

        // Mark as seen
        localStorage.setItem('preview-screenshots-tutorial-seen', 'true');

        // Show welcome message
        if (window.screenshotMaker) {
            window.screenshotMaker.showNotification('Welcome! Try the "Load Demo" button to get started.', 'success');
        }
    }
}

// Initialize tutorial
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new Tutorial();
    }, 3000);
});
