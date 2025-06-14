#!/bin/bash

# Build script for Preview Screenshots Maker
echo "🚀 Building Preview Screenshots Maker..."

# Add debug mode option
DEBUG_MODE=false
if [ "$1" = "--debug" ]; then
    DEBUG_MODE=true
    echo "🐛 Debug mode enabled"
fi

# Check Node.js and npm versions
echo "📋 System Info:"
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.cache/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Test Electron startup if in debug mode
if [ "$DEBUG_MODE" = true ]; then
    echo "🧪 Testing Electron startup..."
    echo "Checking if Electron is installed..."
    if [ -f "node_modules/.bin/electron" ]; then
        echo "✅ Electron found: $(./node_modules/.bin/electron --version)"
        
        echo "🔍 Testing application startup (5 second timeout)..."
        timeout 5s ./node_modules/.bin/electron . --no-sandbox 2>&1 || echo "⚠️  Electron startup test completed"
    else
        echo "❌ Electron not found in node_modules"
    fi
    
    echo "🌐 Standalone test available at: file://$(pwd)/standalone-test.html"
fi

# Build the application
echo "🔨 Building application..."

# Try to start the app first if not in CI
if [ "$DEBUG_MODE" = true ]; then
    echo "⚠️  Skipping build in debug mode. Use './build.sh' without --debug to build."
    echo "✅ Debug completed! Check the standalone test or try manual Electron startup."
    exit 0
fi

npm run build:mac

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📱 Preview Screenshots Maker is ready!"
    echo "📂 Distribution files are in the 'dist' folder"
    
    # Open dist folder
    open dist/
else
    echo "❌ Build failed!"
    echo "💡 Try running './build.sh --debug' to test the app before building"
    exit 1
fi
