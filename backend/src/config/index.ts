import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  maxFileSize: 5000000000,
  uploadDir: path.join(__dirname, '../../uploads/videos'),
  clipsDir: path.join(__dirname, '../../uploads/clips'),
  tikTok: {
    width: 1080,
    height: 1920,
    bitrate: '5000k',
  },
};