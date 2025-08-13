import { formatTime } from '../lib/gameLogic'

interface GameOverScreenProps {
  hasWon: boolean;
  score: number;
  level: number;
  timeLeft: number;
  isMaxLevel: boolean;
  onPlayAgain: () => void;
  onNextLevel: () => void;
  onBackToMenu: () => void;
}

export default function GameOverScreen({
  hasWon,
  score,
  level,
  timeLeft,
  isMaxLevel,
  onPlayAgain,
  onNextLevel,
  onBackToMenu,
}: GameOverScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="ui-panel max-w-md w-full text-center">
        <div className="text-6xl mb-6">
          {hasWon ? '🎉' : '😢'}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          {hasWon ? 'Congratulations!' : 'Time\'s Up!'}
        </h1>
        
        <div className="text-lg text-gray-300 mb-6">
          {hasWon 
            ? `You found the object with ${formatTime(timeLeft)} remaining!`
            : 'Better luck next time!'
          }
        </div>

        {/* Score Display */}
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-400">{score}</div>
              <div className="text-sm text-gray-300">Final Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success-400">{level}</div>
              <div className="text-sm text-gray-300">Level Reached</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {hasWon && !isMaxLevel && (
            <button
              onClick={onNextLevel}
              className="game-button success w-full"
            >
              🚀 Next Level
            </button>
          )}
          
          <button
            onClick={onPlayAgain}
            className="game-button primary w-full"
          >
            🔄 Play Again
          </button>
          
          <button
            onClick={onBackToMenu}
            className="game-button warning w-full"
          >
            🏠 Main Menu
          </button>
        </div>

        {isMaxLevel && hasWon && (
          <div className="mt-6 p-4 bg-success-900 bg-opacity-50 rounded-lg">
            <div className="text-success-300 font-semibold">
              🏆 You've completed all levels!
            </div>
            <div className="text-sm text-success-400 mt-1">
              Congratulations on mastering the I Spy Flashlight Game!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}