export interface VideoMetadata {
  duration: number;
  bitRate: number;
  size: number;
  videoStream?: {
    width: number;
    height: number;
    fps: string;
    codec: string;
  };
}

export interface ViralMoment {
  startTime: number;
  endTime: number;
  duration: number;
  score: number;
  reasons: string[];
}