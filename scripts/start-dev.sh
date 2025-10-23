#!/bin/bash

echo "🚀 Starting JUNO development server with mobile access..."
echo ""

# Clean up any existing processes
echo "🧹 Cleaning up existing processes..."
pkill -f "bun.*dev" 2>/dev/null || true
pkill -f "next.*dev" 2>/dev/null || true
pkill -f "ngrok" 2>/dev/null || true
sleep 2

# Clean up cache
echo "🧹 Cleaning up cache..."
rm -rf .next
echo "✅ Cache cleaned"
echo ""

# Find available port
PORT=3000
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; do
    PORT=$((PORT + 1))
done

echo "🌐 Using port $PORT for development server"
echo ""

# Start the development server in background
echo "🚀 Starting Next.js development server..."
bun run dev -- -p $PORT > dev.log 2>&1 &
DEV_PID=$!

# Wait for server to start
echo "⏳ Waiting for server to start..."
sleep 8

# Start ngrok
echo "📱 Starting ngrok tunnel..."
ngrok http $PORT > ngrok.log 2>&1 &
NGROK_PID=$!

echo ""
echo "✅ Development server and ngrok are running!"
echo "🔗 Local URL: http://localhost:$PORT"
echo "📱 Mobile URL: Check ngrok.log for the public URL"
echo ""
echo "📋 Process IDs:"
echo "   Dev Server PID: $DEV_PID"
echo "   Ngrok PID: $NGROK_PID"
echo ""
echo "📁 Log files:"
echo "   Dev server: dev.log"
echo "   Ngrok: ngrok.log"
echo ""
echo "🛑 To stop servers: bun run stop:all"
echo ""

# Exit immediately - don't wait
exit 0
