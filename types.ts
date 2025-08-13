export interface GameObject {
  id: string;
  name: string;
  emoji: string;
  x: number;
  y: number;
  size: number;
  found: boolean;
}

export interface GameState {
  isPlaying: boolean;
  isPaused: boolean;
  isGameOver: boolean;
  hasWon: boolean;
  currentLevel: number;
  score: number;
  timeLeft: number;
  targetObject: GameObject | null;
  objects: GameObject[];
  flashlightX: number;
  flashlightY: number;
  confirmationProgress: number;
  isConfirming: boolean;
}

export interface GameStats {
  totalGamesPlayed: number;
  totalScore: number;
  bestTime: number;
  highestLevel: number;
  objectsFound: number;
}

export interface GameLevel {
  level: number;
  timeLimit: number;
  objectCount: number;
  flashlightSize: number;
  requiredConfirmationTime: number;
}

// Cosmic object interfaces (for future extension)
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface GameObjectType extends CosmicObject {
  type: 'game-objects';
  metadata: {
    emoji: string;
    category?: string;
    difficulty?: number;
    size_range?: {
      min: number;
      max: number;
    };
  };
}

export interface GameTheme extends CosmicObject {
  type: 'game-themes';
  metadata: {
    background_color: string;
    flashlight_color?: string;
    object_categories: string[];
    description?: string;
  };
}

export interface HighScore extends CosmicObject {
  type: 'high-scores';
  metadata: {
    player_name: string;
    score: number;
    time_completed: number;
    difficulty: number;
    objects_found: number;
    date_achieved: string;
  };
}