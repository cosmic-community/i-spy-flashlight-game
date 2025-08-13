'use client'

import { useState, useEffect, useCallback } from 'react'
import { GameState, GameObject } from '../types'
import { 
  generateRandomObjects, 
  selectRandomTarget, 
  checkObjectCollision, 
  calculateScore,
  formatTime,
  getGameLevel,
  getNextLevel,
  isMaxLevel
} from '../lib/gameLogic'
import GameUI from '@/components/GameUI'
import FlashlightOverlay from '@/components/FlashlightOverlay'
import GameObjects from '@/components/GameObjects'
import GameOverScreen from '@/components/GameOverScreen'
import WelcomeScreen from '@/components/WelcomeScreen'

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    isPaused: false,
    isGameOver: false,
    hasWon: false,
    currentLevel: 1,
    score: 0,
    timeLeft: 60,
    targetObject: null,
    objects: [],
    flashlightX: 0,
    flashlightY: 0,
    confirmationProgress: 0,
    isConfirming: false,
  })

  const [confirmationTimer, setConfirmationTimer] = useState<NodeJS.Timeout | null>(null)
  const [gameTimer, setGameTimer] = useState<NodeJS.Timeout | null>(null)

  const currentLevelConfig = getGameLevel(gameState.currentLevel)

  // Initialize game
  const initializeGame = useCallback((level: number = 1) => {
    const objects = generateRandomObjects(level)
    const target = selectRandomTarget(objects)
    const levelConfig = getGameLevel(level)

    setGameState({
      isPlaying: true,
      isPaused: false,
      isGameOver: false,
      hasWon: false,
      currentLevel: level,
      score: level === 1 ? 0 : gameState.score, // Keep score if continuing
      timeLeft: levelConfig.timeLimit,
      targetObject: target,
      objects,
      flashlightX: window.innerWidth / 2,
      flashlightY: window.innerHeight / 2,
      confirmationProgress: 0,
      isConfirming: false,
    })
  }, [gameState.score])

  // Start new game
  const startNewGame = useCallback(() => {
    initializeGame(1)
  }, [initializeGame])

  // Continue to next level
  const nextLevel = useCallback(() => {
    if (!isMaxLevel(gameState.currentLevel)) {
      initializeGame(getNextLevel(gameState.currentLevel))
    }
  }, [gameState.currentLevel, initializeGame])

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setGameState(prev => ({
      ...prev,
      flashlightX: e.clientX,
      flashlightY: e.clientY,
    }))
  }, [])

  // Handle object confirmation
  const handleObjectConfirmation = useCallback(() => {
    if (!gameState.targetObject || !gameState.isPlaying) return

    const isHovering = checkObjectCollision(
      gameState.flashlightX,
      gameState.flashlightY,
      gameState.targetObject,
      currentLevelConfig.flashlightSize
    )

    if (isHovering && !gameState.isConfirming) {
      // Start confirmation
      setGameState(prev => ({ ...prev, isConfirming: true, confirmationProgress: 0 }))
      
      let progress = 0
      const interval = 50 // Update every 50ms
      const increment = (interval / currentLevelConfig.requiredConfirmationTime) * 100

      const timer = setInterval(() => {
        progress += increment
        
        setGameState(prev => ({ ...prev, confirmationProgress: progress }))

        if (progress >= 100) {
          clearInterval(timer)
          // Object found!
          const score = calculateScore(
            gameState.currentLevel,
            gameState.timeLeft,
            currentLevelConfig.requiredConfirmationTime
          )

          setGameState(prev => ({
            ...prev,
            score: prev.score + score,
            isConfirming: false,
            confirmationProgress: 0,
            hasWon: true,
            isPlaying: false,
          }))
        }
      }, interval)

      setConfirmationTimer(timer)
    } else if (!isHovering && gameState.isConfirming) {
      // Stop confirmation
      if (confirmationTimer) {
        clearInterval(confirmationTimer)
        setConfirmationTimer(null)
      }
      setGameState(prev => ({ ...prev, isConfirming: false, confirmationProgress: 0 }))
    }
  }, [
    gameState.targetObject,
    gameState.isPlaying,
    gameState.flashlightX,
    gameState.flashlightY,
    gameState.isConfirming,
    gameState.currentLevel,
    gameState.timeLeft,
    currentLevelConfig,
    confirmationTimer
  ])

  // Game timer effect
  useEffect(() => {
    if (gameState.isPlaying && !gameState.isPaused) {
      const timer = setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            return {
              ...prev,
              timeLeft: 0,
              isPlaying: false,
              isGameOver: true,
              hasWon: false,
            }
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 }
        })
      }, 1000)

      setGameTimer(timer)
      return () => clearInterval(timer)
    }
  }, [gameState.isPlaying, gameState.isPaused])

  // Mouse movement effect
  useEffect(() => {
    if (gameState.isPlaying) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [gameState.isPlaying, handleMouseMove])

  // Object confirmation effect
  useEffect(() => {
    if (gameState.isPlaying) {
      handleObjectConfirmation()
    }
  }, [gameState.flashlightX, gameState.flashlightY, handleObjectConfirmation])

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (confirmationTimer) clearInterval(confirmationTimer)
      if (gameTimer) clearInterval(gameTimer)
    }
  }, [confirmationTimer, gameTimer])

  // Pause/unpause game
  const togglePause = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }))
  }, [])

  // Restart game
  const restartGame = useCallback(() => {
    if (confirmationTimer) clearInterval(confirmationTimer)
    if (gameTimer) clearInterval(gameTimer)
    startNewGame()
  }, [confirmationTimer, gameTimer, startNewGame])

  if (!gameState.isPlaying && !gameState.isGameOver && !gameState.hasWon) {
    return <WelcomeScreen onStartGame={startNewGame} />
  }

  if (gameState.isGameOver || gameState.hasWon) {
    return (
      <GameOverScreen
        hasWon={gameState.hasWon}
        score={gameState.score}
        level={gameState.currentLevel}
        timeLeft={gameState.timeLeft}
        isMaxLevel={isMaxLevel(gameState.currentLevel)}
        onPlayAgain={startNewGame}
        onNextLevel={nextLevel}
        onBackToMenu={() => setGameState(prev => ({ 
          ...prev, 
          isPlaying: false, 
          isGameOver: false, 
          hasWon: false 
        }))}
      />
    )
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Game UI */}
      <GameUI
        targetObject={gameState.targetObject}
        timeLeft={gameState.timeLeft}
        score={gameState.score}
        level={gameState.currentLevel}
        isPaused={gameState.isPaused}
        onTogglePause={togglePause}
        onRestart={restartGame}
      />

      {/* Game Objects */}
      <GameObjects objects={gameState.objects} />

      {/* Confirmation Ring */}
      {gameState.isConfirming && (
        <div
          className="confirmation-ring active"
          style={{
            left: gameState.flashlightX - currentLevelConfig.flashlightSize / 2,
            top: gameState.flashlightY - currentLevelConfig.flashlightSize / 2,
            width: currentLevelConfig.flashlightSize,
            height: currentLevelConfig.flashlightSize,
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="rgba(34, 197, 94, 0.8)"
              strokeWidth="4"
              className={`progress-ring ${gameState.isConfirming ? 'active' : ''}`}
              style={{ '--progress': gameState.confirmationProgress / 100 } as React.CSSProperties}
            />
          </svg>
        </div>
      )}

      {/* Flashlight Overlay */}
      <FlashlightOverlay
        mouseX={gameState.flashlightX}
        mouseY={gameState.flashlightY}
        size={currentLevelConfig.flashlightSize}
      />

      {/* Pause Overlay */}
      {gameState.isPaused && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="ui-panel text-center">
            <h2 className="text-3xl font-bold mb-4">Game Paused</h2>
            <button
              onClick={togglePause}
              className="game-button primary mr-4"
            >
              Resume
            </button>
            <button
              onClick={restartGame}
              className="game-button warning"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}