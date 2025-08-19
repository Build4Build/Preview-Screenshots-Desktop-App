# Preview Screenshots Maker

A modern Electron application for creating beautiful Apple App Store preview screenshots with the exact dimensions required for App Store listings. Built with ❤️ for iOS developers and designers.

![Preview Screenshots Maker](https://img.shields.io/badge/Platform-macOS-blue) ![Electron](https://img.shields.io/badge/Electron-v28-lightblue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 📱 Perfect Device Support
- **iPhone 15 Pro (6.9")**: 1290 × 2796 pixels
- **iPhone 15 (6.5")**: 1284 × 2778 pixels
- Exact App Store screenshot dimensions guaranteed

### 🎨 Professional Design Tools
- **Background Options**:
  - 8 Apple-inspired color presets
  - 4 beautiful gradient backgrounds
  - Custom color picker for brand colors
  
- **Content Elements**:
  - **Images**: Drag & drop support for easy import
  - **Text**: Apple-style typography with SF Pro Display
  - **Shapes**: Rounded rectangles with customizable properties
  - **Device Frames**: Add realistic iPhone mockup frames

### 📋 Ready-to-Use Templates
- **🎯 Hero Template**: Perfect for your main app screenshot
- **⚡ Features Template**: Highlight three key features
- **💬 Testimonial Template**: Show user reviews and ratings
- **📊 Statistics Template**: Display impressive numbers

### 🛠️ Advanced Tools
- **Real-time Property Panel**: Edit text, colors, positions instantly
- **Keyboard Shortcuts**: Professional workflow support
- **Batch Export**: Export all templates at once
- **Drag & Drop**: Simply drag images into the canvas

### 💾 Export Options
- **High-quality PNG/JPEG export**
- **Automatic filename generation** with timestamps
- **Batch export** all templates to Downloads folder
- **Native file dialogs** for seamless workflow

## 🚀 Quick Start

1. **Clone and Install**:
   ```bash
   git clone <repository-url>
   cd Preview-Screenshots
   npm install
   ```

2. **Run the App**:
   ```bash
   npm start
   ```

3. **Create Your First Screenshot**:
   - Choose your iPhone model (15 Pro or 15)
   - Click "🎬 Load Demo" to see it in action
   - Or click a template button to start fresh
   - Add your content and export!

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘/Ctrl + S` | Save screenshot |
| `⌘/Ctrl + D` | Duplicate selected object |
| `Delete/Backspace` | Remove selected object |
| Drag & Drop | Add images to canvas |

## 🎯 Perfect for App Store

This tool creates screenshots that meet Apple's exact requirements:
- **Correct dimensions** for each device size
- **High-quality output** suitable for App Store submission
- **Professional templates** following Apple's design guidelines
- **Easy batch creation** for multiple screenshot slots

## 📱 Device Specifications

| Device | Resolution | Aspect Ratio | App Store Use |
|--------|------------|--------------|---------------|
| iPhone 15 Pro (6.9") | 1290 × 2796 | 19.5:9 | 6.9" Display screenshots |
| iPhone 15 (6.5") | 1284 × 2778 | 19.5:9 | 6.5" Display screenshots |

## 🔧 Development

### Scripts
- `npm start` - Run the application
- `npm run dev` - Development mode with DevTools
- `npm run build:mac` - Build for macOS distribution
- `npm run dist` - Create distribution package

### Project Structure
```
src/
├── main.js          # Electron main process
├── index.html       # Application UI
├── styles.css       # Modern Apple-inspired styles
├── app.js           # Main application logic
├── templates.js     # Screenshot templates
├── device-mockup.js # iPhone frame overlays
├── export-utils.js  # Batch export functionality
├── tutorial.js      # First-time user tutorial
└── demo.js          # Demo content loader
```

## 💡 Usage Tips

1. **Start with Templates**: Use the template buttons for quick professional results
2. **Drag & Drop Images**: Simply drag your app screenshots into the canvas
3. **Use Device Frames**: Add iPhone frames to make screenshots more appealing
4. **Batch Export**: Export all templates at once for complete App Store sets
5. **Brand Colors**: Use the custom color picker to match your app's branding

## 🎨 Design Philosophy

This app follows Apple's Human Interface Guidelines:
- **Clean, minimal interface** that doesn't distract from your content
- **Native macOS feel** with proper window chrome and behaviors
- **Professional typography** using SF Pro Display
- **Consistent spacing** and visual hierarchy
- **Intuitive interactions** that feel natural to Mac users

## 🔍 Technical Details

- **Framework**: Electron 28 with native macOS integration
- **Canvas**: Fabric.js for powerful object manipulation
- **File Handling**: Native file dialogs and drag & drop
- **Performance**: Optimized for large canvas sizes and complex layouts
- **Memory**: Efficient image handling and garbage collection

## 📋 System Requirements

- **macOS 10.14** or later
- **Node.js 16** or later
- **4GB RAM** minimum (8GB recommended)
- **500MB** disk space
- **Retina display** recommended for best experience

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Submit a pull request

### Development Guidelines
- Follow Apple's Human Interface Guidelines
- Test on multiple screen sizes
- Ensure accessibility compliance
- Write clear, documented code
- Test export functionality thoroughly

## 🔧 Troubleshooting

### Electron Won't Start
If you're having trouble starting the Electron app:

1. **Test with Debug Mode**:
   ```bash
   ./build.sh --debug
   ```

2. **Try Standalone Version**:
   Open `standalone-test.html` in your browser to test core functionality:
   ```bash
   open standalone-test.html
   ```

3. **Manual Dependency Check**:
   ```bash
   # Clean install
   rm -rf node_modules package-lock.json
   npm install
   
   # Test Electron directly
   ./node_modules/.bin/electron --version
   ./node_modules/.bin/electron . --no-sandbox
   ```

4. **macOS Security Issues**:
   If macOS blocks the app:
   ```bash
   # Allow Electron to run
   xattr -cr node_modules/electron/dist/Electron.app
   ```

### Canvas Issues
If objects aren't visible on the canvas:

1. **Use Debug Test**: Click the "Run Debug Test" button in the app
2. **Check Browser Console**: Look for any JavaScript errors
3. **Try Different Templates**: Some templates might work better than others

### Export Problems
If image export isn't working:

1. **Browser Version**: Use the standalone version for browser-based export
2. **File Permissions**: Check that the app has write permissions
3. **Disk Space**: Ensure sufficient disk space for exported images

### Performance Issues
For better performance:

1. **Reduce Image Sizes**: Use smaller images when possible
2. **Close Other Apps**: Free up system memory
3. **Use Chrome/Safari**: Some browsers handle canvas better than others

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: Create an issue in the GitHub repository
- **Feature Requests**: Use the repository's issue tracker
- **Discussions**: Join the community discussions

## 🙏 Acknowledgments

- **Apple** for the design inspiration and SF Pro Display font
- **Fabric.js** for the powerful canvas library
- **Electron** for making cross-platform desktop apps possible
- The **iOS developer community** for feedback and feature requests

---

**Made with ❤️ for the iOS developer community**

*Perfect App Store screenshots, every time.* 📱✨


<!-- GitHub's Markdown reference links -->
[x-icon]: https://img.shields.io/badge/x-000000?style=for-the-badge&logo=x
[bsky-icon]: https://img.shields.io/badge/BlueSky-00A8E8?style=for-the-badge&logo=bluesky&logoColor=white
[github-icon]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[youtube-icon]: https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white