import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Game utilities that could integrate with Cosmic in the future
export async function saveHighScore(scoreData: {
  playerName: string;
  score: number;
  timeCompleted: number;
  difficulty: number;
  objectsFound: number;
}) {
  try {
    await cosmic.objects.insertOne({
      type: 'high-scores',
      title: `${scoreData.playerName} - ${scoreData.score}`,
      metadata: {
        player_name: scoreData.playerName,
        score: scoreData.score,
        time_completed: scoreData.timeCompleted,
        difficulty: scoreData.difficulty,
        objects_found: scoreData.objectsFound,
        date_achieved: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('Error saving high score:', error)
  }
}

export async function getHighScores() {
  try {
    const response = await cosmic.objects
      .find({ type: 'high-scores' })
      .props(['title', 'metadata'])
      .sort('-metadata.score')
      .limit(10)
    
    return response.objects || []
  } catch (error) {
    console.error('Error fetching high scores:', error)
    return []
  }
}

export async function getGameObjects() {
  try {
    const response = await cosmic.objects
      .find({ type: 'game-objects' })
      .props(['title', 'slug', 'metadata'])
    
    return response.objects || []
  } catch (error) {
    console.error('Error fetching game objects:', error)
    return []
  }
}

export async function getGameThemes() {
  try {
    const response = await cosmic.objects
      .find({ type: 'game-themes' })
      .props(['title', 'slug', 'metadata'])
    
    return response.objects || []
  } catch (error) {
    console.error('Error fetching game themes:', error)
    return []
  }
}