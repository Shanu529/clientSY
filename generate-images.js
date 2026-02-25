import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// List of images to create
const images = [
  'hero.jpg',
  'room-deluxe.jpg',
  'room-executive.jpg',
  'room-presidential.jpg',
  'gallery-spa.jpg',
  'gallery-dining.jpg',
  'gallery-lobby.jpg',
  'gallery-rooftop.jpg'
];

// Generate placeholder images
async function generateImages() {
  for (const image of images) {
    const imagePath = path.join(assetsDir, image);
    
    // Create a colored placeholder based on the image name
    let color = '#4A90E2'; // default blue
    if (image.includes('deluxe')) color = '#50C878';
    if (image.includes('executive')) color = '#D4AF37';
    if (image.includes('presidential')) color = '#8B4513';
    if (image.includes('spa')) color = '#87CEEB';
    if (image.includes('dining')) color = '#FF6B6B';
    if (image.includes('lobby')) color = '#708090';
    if (image.includes('rooftop')) color = '#9370DB';
    if (image.includes('hero')) color = '#2C3E50';

    await sharp({
      create: {
        width: 800,
        height: 600,
        channels: 3,
        background: { r: parseInt(color.slice(1, 3), 16), g: parseInt(color.slice(3, 5), 16), b: parseInt(color.slice(5, 7), 16) }
      }
    })
    .jpeg({ quality: 80 })
    .toFile(imagePath);
    
    console.log(`Created: ${image}`);
  }
}

generateImages().catch(console.error);
