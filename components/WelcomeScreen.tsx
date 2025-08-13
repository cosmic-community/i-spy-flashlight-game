interface WelcomeScreenProps {
  onStartGame: () => void;
}

export default function WelcomeScreen({ onStartGame }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="ui-panel max-w-lg w-full text-center">
        <div className="text-6xl mb-6">🔦</div>
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
          I Spy Flashlight
        </h1>
        
        <p className="text-lg text-gray-300 mb-8">
          Use your cursor as a flashlight to find hidden objects in the darkness. 
          Race against time and keep your light on the target for 3 seconds to win!
        </p>

        {/* How to Play */}
        <div className="bg-gray-700 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-center">How to Play</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🖱️</span>
              <span>Move your mouse to control the flashlight</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔍</span>
              <span>Search the dark screen for the target object</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <span>Keep your flashlight on the object for 3 seconds</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span>Complete levels before time runs out</span>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartGame}
          className="game-button primary w-full text-xl py-4"
        >
          🚀 Start Game
        </button>

        {/* Game Features */}
        <div className="mt-8 text-sm text-gray-400">
          <div className="flex justify-center gap-6">
            <span>🎯 Multiple Levels</span>
            <span>⚡ Time Challenges</span>
            <span>📱 Mobile Friendly</span>
          </div>
        </div>
      </div>
    </div>
  )
}