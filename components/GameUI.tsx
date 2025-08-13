import { GameObject } from '../types'
import { formatTime } from '../lib/gameLogic'

interface GameUIProps {
  targetObject: GameObject | null;
  timeLeft: number;
  score: number;
  level: number;
  isPaused: boolean;
  onTogglePause: () => void;
  onRestart: () => void;
}

export default function GameUI({
  targetObject,
  timeLeft,
  score,
  level,
  isPaused,
  onTogglePause,
  onRestart,
}: GameUIProps) {
  return (
    <>
      {/* Top UI Panel */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
        <div className="ui-panel">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm text-gray-300">Find This Object:</div>
              <div className="text-2xl font-bold flex items-center gap-2">
                <span className="text-4xl">{targetObject?.emoji}</span>
                <span>{targetObject?.name}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ui-panel flex gap-4">
          <button
            onClick={onTogglePause}
            className="game-button warning"
          >
            {isPaused ? '▶️ Resume' : '⏸️ Pause'}
          </button>
          <button
            onClick={onRestart}
            className="game-button danger"
          >
            🔄 Restart
          </button>
        </div>
      </div>

      {/* Stats Panel */}
      <div className="absolute top-4 right-4 ui-panel">
        <div className="text-center">
          <div className="text-sm text-gray-300">Level {level}</div>
          <div className="text-2xl font-bold text-primary-400">{score}</div>
          <div className="text-sm text-gray-300">Score</div>
        </div>
      </div>

      {/* Timer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="ui-panel">
          <div className="text-center">
            <div className="text-sm text-gray-300">Time Left</div>
            <div className={`text-3xl font-bold ${
              timeLeft <= 10 ? 'text-danger-500 animate-pulse-slow' : 
              timeLeft <= 20 ? 'text-warning-500' : 'text-success-500'
            }`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 ui-panel max-w-xs">
        <div className="text-xs text-gray-300">
          <div className="font-semibold mb-1">Instructions:</div>
          <div>• Move your mouse to control the flashlight</div>
          <div>• Find the target object in the dark</div>
          <div>• Keep your light on it for 3 seconds</div>
        </div>
      </div>
    </>
  )
}