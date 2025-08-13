import { GameObject, GameLevel } from '../types'

// Available game objects with emojis
export const GAME_OBJECTS = [
  { name: 'Apple', emoji: '🍎' },
  { name: 'Banana', emoji: '🍌' },
  { name: 'Cherry', emoji: '🍒' },
  { name: 'Grapes', emoji: '🍇' },
  { name: 'Orange', emoji: '🍊' },
  { name: 'Strawberry', emoji: '🍓' },
  { name: 'Watermelon', emoji: '🍉' },
  { name: 'Pineapple', emoji: '🍍' },
  { name: 'Car', emoji: '🚗' },
  { name: 'Bus', emoji: '🚌' },
  { name: 'Airplane', emoji: '✈️' },
  { name: 'Bicycle', emoji: '🚲' },
  { name: 'Train', emoji: '🚆' },
  { name: 'Boat', emoji: '⛵' },
  { name: 'Cat', emoji: '🐱' },
  { name: 'Dog', emoji: '🐶' },
  { name: 'Bird', emoji: '🐦' },
  { name: 'Fish', emoji: '🐠' },
  { name: 'Rabbit', emoji: '🐰' },
  { name: 'Bear', emoji: '🐻' },
  { name: 'Lion', emoji: '🦁' },
  { name: 'Tiger', emoji: '🐯' },
  { name: 'Star', emoji: '⭐' },
  { name: 'Heart', emoji: '❤️' },
  { name: 'Diamond', emoji: '💎' },
  { name: 'Crown', emoji: '👑' },
  { name: 'Gift', emoji: '🎁' },
  { name: 'Balloon', emoji: '🎈' },
  { name: 'Cake', emoji: '🎂' },
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Hamburger', emoji: '🍔' },
  { name: 'Ice Cream', emoji: '🍦' },
  { name: 'Coffee', emoji: '☕' },
  { name: 'Book', emoji: '📚' },
  { name: 'Camera', emoji: '📷' },
  { name: 'Phone', emoji: '📱' },
  { name: 'Computer', emoji: '💻' },
  { name: 'Watch', emoji: '⌚' },
  { name: 'Key', emoji: '🔑' },
  { name: 'Scissors', emoji: '✂️' },
  { name: 'Umbrella', emoji: '☂️' },
  { name: 'Sunglasses', emoji: '🕶️' },
  { name: 'Hat', emoji: '🎩' },
  { name: 'Shoe', emoji: '👠' },
  { name: 'Sock', emoji: '🧦' },
  { name: 'Glove', emoji: '🧤' },
  { name: 'Flower', emoji: '🌸' },
  { name: 'Tree', emoji: '🌳' },
  { name: 'Sun', emoji: '☀️' },
  { name: 'Moon', emoji: '🌙' },
  { name: 'Cloud', emoji: '☁️' },
  { name: 'Rainbow', emoji: '🌈' },
  { name: 'Lightning', emoji: '⚡' },
  { name: 'Fire', emoji: '🔥' }
]

// Game level configurations
export const GAME_LEVELS: GameLevel[] = [
  { level: 1, timeLimit: 60, objectCount: 15, flashlightSize: 120, requiredConfirmationTime: 3000 },
  { level: 2, timeLimit: 50, objectCount: 20, flashlightSize: 100, requiredConfirmationTime: 3000 },
  { level: 3, timeLimit: 45, objectCount: 25, flashlightSize: 90, requiredConfirmationTime: 3000 },
  { level: 4, timeLimit: 40, objectCount: 30, flashlightSize: 80, requiredConfirmationTime: 3000 },
  { level: 5, timeLimit: 35, objectCount: 35, flashlightSize: 70, requiredConfirmationTime: 3000 },
  { level: 6, timeLimit: 30, objectCount: 40, flashlightSize: 60, requiredConfirmationTime: 3500 },
  { level: 7, timeLimit: 25, objectCount: 45, flashlightSize: 55, requiredConfirmationTime: 3500 },
  { level: 8, timeLimit: 20, objectCount: 50, flashlightSize: 50, requiredConfirmationTime: 4000 },
  { level: 9, timeLimit: 18, objectCount: 55, flashlightSize: 45, requiredConfirmationTime: 4000 },
  { level: 10, timeLimit: 15, objectCount: 60, flashlightSize: 40, requiredConfirmationTime: 4500 }
]

export function generateRandomObjects(level: number): GameObject[] {
  const levelConfig = GAME_LEVELS[Math.min(level - 1, GAME_LEVELS.length - 1)]
  
  if (!levelConfig) {
    throw new Error(`Invalid level: ${level}`)
  }
  
  const objects: GameObject[] = []
  const usedPositions: Array<{x: number, y: number, size: number}> = []

  // Get a random subset of available objects
  const shuffledObjects = [...GAME_OBJECTS].sort(() => Math.random() - 0.5)
  const selectedObjects = shuffledObjects.slice(0, levelConfig.objectCount)

  for (let i = 0; i < selectedObjects.length; i++) {
    const objectData = selectedObjects[i]
    
    if (!objectData) {
      continue
    }
    
    let attempts = 0
    let position = { x: 0, y: 0, size: 0 }
    let validPosition = false

    // Try to find a position that doesn't overlap with existing objects
    while (!validPosition && attempts < 100) {
      position = {
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 100) + 50,
        size: Math.random() * 20 + 30 // Size between 30-50px
      }

      validPosition = !usedPositions.some(used => {
        const distance = Math.sqrt(
          Math.pow(position.x - used.x, 2) + Math.pow(position.y - used.y, 2)
        )
        return distance < (position.size + used.size) * 1.5 // Add some padding
      })

      attempts++
    }

    usedPositions.push(position)

    objects.push({
      id: `object-${i}`,
      name: objectData.name,
      emoji: objectData.emoji,
      x: position.x,
      y: position.y,
      size: position.size,
      found: false
    })
  }

  return objects
}

export function selectRandomTarget(objects: GameObject[]): GameObject {
  const availableObjects = objects.filter(obj => !obj.found)
  const randomIndex = Math.floor(Math.random() * availableObjects.length)
  const selectedObject = availableObjects[randomIndex]
  
  if (!selectedObject) {
    throw new Error('No available objects to select')
  }
  
  return selectedObject
}

export function checkObjectCollision(
  mouseX: number,
  mouseY: number,
  object: GameObject,
  flashlightSize: number
): boolean {
  const distance = Math.sqrt(
    Math.pow(mouseX - object.x, 2) + Math.pow(mouseY - object.y, 2)
  )
  
  // Check if the object is within the flashlight radius
  const isInFlashlight = distance <= flashlightSize / 2
  
  // Check if the mouse is close enough to the object itself
  const isOnObject = distance <= object.size / 2
  
  return isInFlashlight && isOnObject
}

export function calculateScore(
  level: number,
  timeLeft: number,
  confirmationTime: number
): number {
  const baseScore = level * 100
  const timeBonus = Math.floor(timeLeft * 2)
  const speedBonus = confirmationTime < 2000 ? 50 : 0
  
  return baseScore + timeBonus + speedBonus
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function getGameLevel(level: number): GameLevel {
  const gameLevel = GAME_LEVELS[Math.min(level - 1, GAME_LEVELS.length - 1)]
  
  if (!gameLevel) {
    throw new Error(`Invalid level: ${level}`)
  }
  
  return gameLevel
}

export function getNextLevel(currentLevel: number): number {
  return Math.min(currentLevel + 1, GAME_LEVELS.length)
}

export function isMaxLevel(level: number): boolean {
  return level >= GAME_LEVELS.length
}