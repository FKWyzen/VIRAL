import { ensureDir } from '../utils/fileUtils';
import { config } from '../config';
import path from 'path';

export class StorageService {
  static async initializeDirectories() {
    try {
      await ensureDir(config.uploadDir);
      await ensureDir(config.clipsDir);
      console.log('✅ Storage directories initialized');
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  static getUploadPath(filename: string): string {
    return path.join(config.uploadDir, filename);
  }

  static getClipPath(filename: string): string {
    return path.join(config.clipsDir, filename);
  }
}