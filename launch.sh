#!/bin/bash

# Preview Screenshots Maker - Launch Script
# Quick access to test the application

echo "🚀 Preview Screenshots Maker - Launch Options"
echo "=============================================="
echo ""
echo "Choose your preferred way to run the application:"
echo ""
echo "1. 🌐 Open Web Version (Recommended)"
echo "2. 🧪 Open Test Suite"
echo "3. ⚡ Open Standalone Version"
echo "4. 🖥️ Try Electron App"
echo "5. 📝 View Project Status"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "🌐 Opening main application in browser..."
        open "file://$(pwd)/src/index.html"
        ;;
    2)
        echo "🧪 Opening test suite..."
        open "file://$(pwd)/test-suite.html"
        ;;
    3)
        echo "⚡ Opening standalone version..."
        open "file://$(pwd)/fresh-start.html"
        ;;
    4)
        echo "🖥️ Attempting to launch Electron app..."
        npm start
        ;;
    5)
        echo "📝 Showing project status..."
        cat PROJECT_STATUS.md
        ;;
    *)
        echo "❌ Invalid choice. Opening main application by default..."
        open "file://$(pwd)/src/index.html"
        ;;
esac

echo ""
echo "✅ Done! The application should now be running."
echo "📖 For more information, check README.md or PROJECT_STATUS.md"
