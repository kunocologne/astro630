#!/usr/bin/env node

import { exec, spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Starting JUNO development server with mobile access...\n');

// Function to kill processes on port 3000
async function killProcessOnPort(port) {
  try {
    const { stdout } = await execAsync(`lsof -ti:${port}`);
    if (stdout.trim()) {
      console.log(`🔄 Killing existing processes on port ${port}...`);
      await execAsync(`kill -9 ${stdout.trim()}`);
      console.log(`✅ Port ${port} is now free\n`);
    }
  } catch (error) {
    // Port is already free or no processes found
    console.log(`✅ Port ${port} is available\n`);
  }
}

// Function to clean up cache
async function cleanupCache() {
  try {
    console.log('🧹 Cleaning up cache and build files...');
    await execAsync('rm -rf .next', { cwd: projectRoot });
    console.log('✅ Cache cleaned\n');
  } catch (error) {
    console.log('ℹ️  No cache to clean\n');
  }
}

// Function to find available port
async function findAvailablePort(startPort = 3000) {
  let port = startPort;
  while (port < startPort + 100) {
    try {
      const { stdout } = await execAsync(`lsof -ti:${port}`);
      if (!stdout.trim()) {
        return port;
      }
      port++;
    } catch (error) {
      return port; // Port is available
    }
  }
  return null;
}

async function startDevelopment() {
  // Clean up cache first
  await cleanupCache();
  
  // Kill any existing processes on port 3000
  await killProcessOnPort(3000);
  
  // Find available port
  const port = await findAvailablePort(3000);
  if (!port) {
    console.error('❌ No available ports found in range 3000-3099');
    process.exit(1);
  }

  console.log(`🌐 Using port ${port} for development server\n`);

  // Start the Next.js development server with specific port
  const devServer = spawn('bun', ['run', 'dev', '--', '-p', port.toString()], {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: true
  });

  // Wait for the dev server to start, then start ngrok
  setTimeout(() => {
    console.log(`\n📱 Starting ngrok tunnel for mobile access on port ${port}...\n`);
    
    const ngrok = spawn('ngrok', ['http', port.toString()], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    });

    // Handle process cleanup
    const cleanup = () => {
      console.log('\n🛑 Shutting down servers...\n');
      devServer.kill('SIGINT');
      ngrok.kill('SIGINT');
      
      // Clean up port after a delay
      setTimeout(async () => {
        await killProcessOnPort(port);
        process.exit(0);
      }, 2000);
    };

    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);

  }, 8000); // Wait 8 seconds for dev server to start

  // Handle dev server errors
  devServer.on('error', (error) => {
    console.error('❌ Failed to start development server:', error);
    process.exit(1);
  });

  console.log('💡 The ngrok URL will appear in a few seconds...');
  console.log(`📱 Use that URL to access your portfolio on mobile devices!\n`);
  console.log(`🔗 Local URL: http://localhost:${port}\n`);
}

// Start the development process
startDevelopment().catch(error => {
  console.error('❌ Failed to start development:', error);
  process.exit(1);
});
