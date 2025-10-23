import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create placeholder images using SVG
const createPlaceholderSVG = (width, height, text, bgColor, textColor) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
          text-anchor="middle" dominant-baseline="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
};

const images = [
  { name: 'project-1.jpg', text: 'E-commerce Platform', bgColor: '#f59e0b', textColor: '#ffffff' },
  { name: 'project-2.jpg', text: 'Mobile Banking App', bgColor: '#06b6d4', textColor: '#ffffff' },
  { name: 'project-3.jpg', text: 'SaaS Dashboard', bgColor: '#8b5cf6', textColor: '#ffffff' },
  { name: 'project-4.jpg', text: 'Brand Identity', bgColor: '#ec4899', textColor: '#ffffff' },
  { name: 'about-portrait.jpg', text: 'Professional Portrait', bgColor: '#6366f1', textColor: '#ffffff' },
];

const mediaDir = path.join(__dirname, '..', 'public', 'media');

// Ensure directory exists
if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

// Create placeholder images
images.forEach(({ name, text, bgColor, textColor }) => {
  const svg = createPlaceholderSVG(800, 600, text, bgColor, textColor);
  const filePath = path.join(mediaDir, name.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${filePath}`);
});

console.log('Placeholder images created successfully!');
