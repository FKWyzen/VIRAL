import fs from 'fs/promises';

export const ensureDir = async (dirPath: string) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory:`, error);
  }
};

export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const deleteFile = async (filePath: string) => {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.error(`Error deleting file:`, error);
  }
};

export const getFileSize = async (filePath: string): Promise<number> => {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
};