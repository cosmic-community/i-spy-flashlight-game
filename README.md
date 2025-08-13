# I Spy Flashlight Game

![Game Preview](https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&h=300&fit=crop&auto=format)

A thrilling I Spy game where you use your cursor as a flashlight to search through darkness and find hidden objects before time runs out!

## Features

- **Flashlight Mechanics**: Your cursor acts as a realistic flashlight, illuminating only a small circular area
- **Object Detection**: Precise hit detection system that tracks when you've found the target
- **3-Second Confirmation**: Must keep your flashlight on the object for 3 seconds to confirm discovery
- **Time Pressure**: Race against the countdown timer to find objects
- **Multiple Levels**: Increasing difficulty with more objects and shorter time limits
- **Score System**: Points based on speed and accuracy
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=689cf6fbefcf4b47c154dc45&clone_repository=689cf82eefcf4b47c154dc48)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Create a fun I spy style game where the screen is full of objects and you have to race against the clock to find one. The catch is the entire screen is blacked out and your cursor is a flashlight that you can use to luminate a very small portion of the screen as you move it around, as in a flashlight showing you what's in the area it's point at. You must use your flashlight to find the object and keep your flashlight on the object for 3 seconds in order to prove you've found it.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and game logic
- **CSS Animations** - Smooth flashlight effects and transitions
- **Cosmic SDK** - Content management and game data (extensible for future features)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket (for extending with custom content)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd i-spy-flashlight-game
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

The game is built to be easily extensible with Cosmic CMS for adding custom object sets, themes, and challenges:

```typescript
// Fetch custom game objects
const gameObjects = await cosmic.objects.find({
  type: 'game-objects'
}).props(['title', 'slug', 'metadata'])

// Fetch game themes
const themes = await cosmic.objects.find({
  type: 'game-themes'  
}).props(['title', 'metadata'])

// Save high scores
await cosmic.objects.insertOne({
  type: 'high-scores',
  title: `Score: ${score}`,
  metadata: {
    player_name: playerName,
    score: score,
    time_completed: completionTime,
    difficulty: difficultyLevel
  }
})
```

## Cosmic CMS Integration

This game can be extended with Cosmic to include:

- **Custom Object Sets**: Create themed collections of objects (animals, food, vehicles, etc.)
- **Game Levels**: Define custom levels with specific objects and time limits  
- **Player Profiles**: Track individual player statistics and achievements
- **Leaderboards**: Global and local high score tracking
- **Game Themes**: Different visual themes and environments
- **Challenges**: Daily or weekly special challenges with unique rewards

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Set environment variables in Netlify dashboard

### Manual Deployment
1. Build for production: `bun run build`
2. Export static files: `bun run export`
3. Deploy the `out` directory to any static hosting service

The game works great as a static site and can be deployed to any hosting platform that supports static files.

<!-- README_END -->