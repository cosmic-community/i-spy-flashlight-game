import { GameObject, GameLevel } from '../types'

// Available game objects with emojis - expanded collection
export const GAME_OBJECTS = [
  // Fruits
  { name: 'Apple', emoji: '🍎' },
  { name: 'Banana', emoji: '🍌' },
  { name: 'Cherry', emoji: '🍒' },
  { name: 'Grapes', emoji: '🍇' },
  { name: 'Orange', emoji: '🍊' },
  { name: 'Strawberry', emoji: '🍓' },
  { name: 'Watermelon', emoji: '🍉' },
  { name: 'Pineapple', emoji: '🍍' },
  { name: 'Peach', emoji: '🍑' },
  { name: 'Pear', emoji: '🍐' },
  { name: 'Kiwi', emoji: '🥝' },
  { name: 'Mango', emoji: '🥭' },
  { name: 'Coconut', emoji: '🥥' },
  { name: 'Avocado', emoji: '🥑' },
  { name: 'Lemon', emoji: '🍋' },
  { name: 'Lime', emoji: '🍋‍🟩' },
  { name: 'Blueberries', emoji: '🫐' },
  
  // Vegetables
  { name: 'Tomato', emoji: '🍅' },
  { name: 'Eggplant', emoji: '🍆' },
  { name: 'Carrot', emoji: '🥕' },
  { name: 'Corn', emoji: '🌽' },
  { name: 'Broccoli', emoji: '🥦' },
  { name: 'Pepper', emoji: '🌶️' },
  { name: 'Cucumber', emoji: '🥒' },
  { name: 'Lettuce', emoji: '🥬' },
  { name: 'Onion', emoji: '🧅' },
  { name: 'Garlic', emoji: '🧄' },
  { name: 'Potato', emoji: '🥔' },
  
  // Vehicles
  { name: 'Car', emoji: '🚗' },
  { name: 'Bus', emoji: '🚌' },
  { name: 'Airplane', emoji: '✈️' },
  { name: 'Bicycle', emoji: '🚲' },
  { name: 'Train', emoji: '🚆' },
  { name: 'Boat', emoji: '⛵' },
  { name: 'Truck', emoji: '🚚' },
  { name: 'Taxi', emoji: '🚕' },
  { name: 'Police Car', emoji: '🚓' },
  { name: 'Fire Truck', emoji: '🚒' },
  { name: 'Ambulance', emoji: '🚑' },
  { name: 'Helicopter', emoji: '🚁' },
  { name: 'Rocket', emoji: '🚀' },
  { name: 'Motorcycle', emoji: '🏍️' },
  { name: 'Scooter', emoji: '🛵' },
  { name: 'Skateboard', emoji: '🛹' },
  
  // Animals
  { name: 'Cat', emoji: '🐱' },
  { name: 'Dog', emoji: '🐶' },
  { name: 'Bird', emoji: '🐦' },
  { name: 'Fish', emoji: '🐠' },
  { name: 'Rabbit', emoji: '🐰' },
  { name: 'Bear', emoji: '🐻' },
  { name: 'Lion', emoji: '🦁' },
  { name: 'Tiger', emoji: '🐯' },
  { name: 'Elephant', emoji: '🐘' },
  { name: 'Monkey', emoji: '🐵' },
  { name: 'Panda', emoji: '🐼' },
  { name: 'Koala', emoji: '🐨' },
  { name: 'Fox', emoji: '🦊' },
  { name: 'Wolf', emoji: '🐺' },
  { name: 'Pig', emoji: '🐷' },
  { name: 'Cow', emoji: '🐮' },
  { name: 'Horse', emoji: '🐴' },
  { name: 'Sheep', emoji: '🐑' },
  { name: 'Goat', emoji: '🐐' },
  { name: 'Chicken', emoji: '🐔' },
  { name: 'Duck', emoji: '🦆' },
  { name: 'Penguin', emoji: '🐧' },
  { name: 'Owl', emoji: '🦉' },
  { name: 'Eagle', emoji: '🦅' },
  { name: 'Butterfly', emoji: '🦋' },
  { name: 'Bee', emoji: '🐝' },
  { name: 'Ladybug', emoji: '🐞' },
  { name: 'Spider', emoji: '🕷️' },
  { name: 'Turtle', emoji: '🐢' },
  { name: 'Snake', emoji: '🐍' },
  { name: 'Frog', emoji: '🐸' },
  { name: 'Octopus', emoji: '🐙' },
  { name: 'Crab', emoji: '🦀' },
  { name: 'Whale', emoji: '🐋' },
  { name: 'Dolphin', emoji: '🐬' },
  { name: 'Shark', emoji: '🦈' },
  
  // Objects & Items
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
  { name: 'Tea', emoji: '🍵' },
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
  { name: 'Ring', emoji: '💍' },
  { name: 'Necklace', emoji: '📿' },
  { name: 'Purse', emoji: '👛' },
  { name: 'Backpack', emoji: '🎒' },
  { name: 'Briefcase', emoji: '💼' },
  
  // Sports & Activities
  { name: 'Soccer Ball', emoji: '⚽' },
  { name: 'Basketball', emoji: '🏀' },
  { name: 'Tennis Ball', emoji: '🎾' },
  { name: 'Baseball', emoji: '⚾' },
  { name: 'Football', emoji: '🏈' },
  { name: 'Golf Ball', emoji: '⛳' },
  { name: 'Bowling Ball', emoji: '🎳' },
  { name: 'Trophy', emoji: '🏆' },
  { name: 'Medal', emoji: '🥇' },
  { name: 'Guitar', emoji: '🎸' },
  { name: 'Piano', emoji: '🎹' },
  { name: 'Microphone', emoji: '🎤' },
  { name: 'Headphones', emoji: '🎧' },
  
  // Nature & Weather
  { name: 'Flower', emoji: '🌸' },
  { name: 'Tree', emoji: '🌳' },
  { name: 'Sun', emoji: '☀️' },
  { name: 'Moon', emoji: '🌙' },
  { name: 'Cloud', emoji: '☁️' },
  { name: 'Rainbow', emoji: '🌈' },
  { name: 'Lightning', emoji: '⚡' },
  { name: 'Fire', emoji: '🔥' },
  { name: 'Snowflake', emoji: '❄️' },
  { name: 'Mountain', emoji: '⛰️' },
  { name: 'Ocean', emoji: '🌊' },
  { name: 'Cactus', emoji: '🌵' },
  { name: 'Mushroom', emoji: '🍄' },
  { name: 'Leaf', emoji: '🍃' },
  { name: 'Rose', emoji: '🌹' },
  { name: 'Sunflower', emoji: '🌻' },
  { name: 'Tulip', emoji: '🌷' },
  
  // Food & Drinks
  { name: 'Bread', emoji: '🍞' },
  { name: 'Croissant', emoji: '🥐' },
  { name: 'Pretzel', emoji: '🥨' },
  { name: 'Pancakes', emoji: '🥞' },
  { name: 'Waffle', emoji: '🧇' },
  { name: 'Cheese', emoji: '🧀' },
  { name: 'Egg', emoji: '🥚' },
  { name: 'Bacon', emoji: '🥓' },
  { name: 'Sausage', emoji: '🌭' },
  { name: 'Popcorn', emoji: '🍿' },
  { name: 'Candy', emoji: '🍬' },
  { name: 'Chocolate', emoji: '🍫' },
  { name: 'Cookie', emoji: '🍪' },
  { name: 'Donut', emoji: '🍩' },
  { name: 'Honey', emoji: '🍯' },
  { name: 'Milk', emoji: '🥛' },
  { name: 'Juice', emoji: '🧃' },
  { name: 'Soda', emoji: '🥤' },
  
  // Tools & Objects
  { name: 'Hammer', emoji: '🔨' },
  { name: 'Wrench', emoji: '🔧' },
  { name: 'Screwdriver', emoji: '🪛' },
  { name: 'Saw', emoji: '🪚' },
  { name: 'Drill', emoji: '🪃' },
  { name: 'Paintbrush', emoji: '🖌️' },
  { name: 'Pencil', emoji: '✏️' },
  { name: 'Pen', emoji: '🖊️' },
  { name: 'Ruler', emoji: '📏' },
  { name: 'Calculator', emoji: '🧮' },
  { name: 'Magnifying Glass', emoji: '🔍' },
  { name: 'Flashlight', emoji: '🔦' },
  { name: 'Candle', emoji: '🕯️' },
  { name: 'Light Bulb', emoji: '💡' },
  { name: 'Battery', emoji: '🔋' },
  { name: 'Plug', emoji: '🔌' },
  { name: 'Clock', emoji: '🕐' },
  { name: 'Alarm Clock', emoji: '⏰' },
  { name: 'Calendar', emoji: '📅' },
  { name: 'Map', emoji: '🗺️' },
  { name: 'Compass', emoji: '🧭' },
  { name: 'Thermometer', emoji: '🌡️' },
  
  // Symbols & Shapes
  { name: 'Circle', emoji: '⭕' },
  { name: 'Cross', emoji: '✖️' },
  { name: 'Checkmark', emoji: '✅' },
  { name: 'Question Mark', emoji: '❓' },
  { name: 'Exclamation', emoji: '❗' },
  { name: 'Peace Sign', emoji: '☮️' },
  { name: 'Yin Yang', emoji: '☯️' },
  { name: 'Recycling', emoji: '♻️' },
  { name: 'Warning', emoji: '⚠️' },
  { name: 'Prohibited', emoji: '🚫' },
  { name: 'Stop Sign', emoji: '🛑' },
  { name: 'Arrow Up', emoji: '⬆️' },
  { name: 'Arrow Down', emoji: '⬇️' },
  { name: 'Arrow Left', emoji: '⬅️' },
  { name: 'Arrow Right', emoji: '➡️' },
  
  // Miscellaneous
  { name: 'Bomb', emoji: '💣' },
  { name: 'Crystal Ball', emoji: '🔮' },
  { name: 'Magic Wand', emoji: '🪄' },
  { name: 'Dice', emoji: '🎲' },
  { name: 'Puzzle Piece', emoji: '🧩' },
  { name: 'Balloon Animals', emoji: '🎈' },
  { name: 'Kite', emoji: '🪁' },
  { name: 'Pinwheel', emoji: '🎡' },
  { name: 'Ferris Wheel', emoji: '🎠' },
  { name: 'Carousel Horse', emoji: '🎠' },
  { name: 'Tent', emoji: '⛺' },
  { name: 'Sleeping Bag', emoji: '🛏️' },
  { name: 'Pillow', emoji: '🛏️' },
  { name: 'Blanket', emoji: '🧸' },
  { name: 'Teddy Bear', emoji: '🧸' },
  { name: 'Toy Robot', emoji: '🤖' },
  { name: 'Alien', emoji: '👽' },
  { name: 'Ghost', emoji: '👻' },
  { name: 'Skull', emoji: '💀' },
  { name: 'Pumpkin', emoji: '🎃' },
  { name: 'Christmas Tree', emoji: '🎄' },
  { name: 'Santa Hat', emoji: '🎅' },
  { name: 'Snowman', emoji: '⛄' },
  { name: 'Easter Egg', emoji: '🥚' },
  { name: 'Birthday Cake', emoji: '🎂' },
  { name: 'Fireworks', emoji: '🎆' },
  { name: 'Sparkler', emoji: '🎇' },
  { name: 'Confetti', emoji: '🎊' },
  { name: 'Party Hat', emoji: '🎉' },
]

// Game level configurations - quadrupled object counts
export const GAME_LEVELS: GameLevel[] = [
  { level: 1, timeLimit: 90, objectCount: 60, flashlightSize: 120, requiredConfirmationTime: 3000 },
  { level: 2, timeLimit: 85, objectCount: 80, flashlightSize: 110, requiredConfirmationTime: 3000 },
  { level: 3, timeLimit: 80, objectCount: 100, flashlightSize: 100, requiredConfirmationTime: 3000 },
  { level: 4, timeLimit: 75, objectCount: 120, flashlightSize: 90, requiredConfirmationTime: 3000 },
  { level: 5, timeLimit: 70, objectCount: 140, flashlightSize: 85, requiredConfirmationTime: 3000 },
  { level: 6, timeLimit: 65, objectCount: 160, flashlightSize: 80, requiredConfirmationTime: 3500 },
  { level: 7, timeLimit: 60, objectCount: 180, flashlightSize: 75, requiredConfirmationTime: 3500 },
  { level: 8, timeLimit: 55, objectCount: 200, flashlightSize: 70, requiredConfirmationTime: 4000 },
  { level: 9, timeLimit: 50, objectCount: 220, flashlightSize: 65, requiredConfirmationTime: 4000 },
  { level: 10, timeLimit: 45, objectCount: 240, flashlightSize: 60, requiredConfirmationTime: 4500 }
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
    // Reduced minimum spacing for higher density
    while (!validPosition && attempts < 200) {
      position = {
        x: Math.random() * (window.innerWidth - 80) + 40,
        y: Math.random() * (window.innerHeight - 80) + 40,
        size: Math.random() * 15 + 25 // Size between 25-40px (slightly smaller for higher density)
      }

      validPosition = !usedPositions.some(used => {
        const distance = Math.sqrt(
          Math.pow(position.x - used.x, 2) + Math.pow(position.y - used.y, 2)
        )
        return distance < (position.size + used.size) * 1.2 // Reduced padding for higher density
      })

      attempts++
    }

    // If we can't find a non-overlapping position after many attempts, allow some overlap
    if (!validPosition && attempts >= 200) {
      position = {
        x: Math.random() * (window.innerWidth - 80) + 40,
        y: Math.random() * (window.innerHeight - 80) + 40,
        size: Math.random() * 15 + 25
      }
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