#!/bin/bash

# Quick Start Script for Preview Screenshots Maker
echo "🚀 Quick Start - Preview Screenshots Maker"
echo "==========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this from the project root directory"
    exit 1
fi

echo "📋 Checking system requirements..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js: $(node --version)"
echo "✅ npm: $(npm --version)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎯 Choose how to run the app:"
echo "1. 🖥️  Electron Desktop App (recommended)"
echo "2. 🌐 Browser Version (fallback)"
echo ""
read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        echo "🚀 Starting Electron app..."
        echo "If this fails, we'll automatically try the browser version."
        
        # Try to start Electron with a timeout
        if timeout 10s npm start 2>/dev/null; then
            echo "✅ Electron started successfully!"
        else
            echo "⚠️  Electron startup failed. Opening browser version..."
            echo "🌐 Opening standalone version in browser..."
            open standalone-test.html
        fi
        ;;
    2)
        echo "🌐 Opening browser version..."
        open standalone-test.html
        echo "✅ Browser version opened!"
        echo "💡 This version has all the core functionality working."
        ;;
    *)
        echo "❌ Invalid choice. Opening browser version as default..."
        open standalone-test.html
        ;;
esac

echo ""
echo "🎉 Preview Screenshots Maker is ready!"
echo ""
echo "📖 Quick Tips:"
echo "• Use the templates in the sidebar to get started quickly"
echo "• Drag and drop images directly onto the canvas"
echo "• Export your screenshots in perfect App Store dimensions"
echo "• Try the 'Run Debug Test' button if you encounter canvas issues"
echo ""
echo "🆘 Need help? Check the README.md for troubleshooting tips!"
