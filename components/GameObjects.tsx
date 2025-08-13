import { GameObject } from '../types'

interface GameObjectsProps {
  objects: GameObject[];
}

export default function GameObjects({ objects }: GameObjectsProps) {
  return (
    <>
      {objects.map((object) => (
        <div
          key={object.id}
          className={`game-object ${object.found ? 'found' : ''}`}
          style={{
            left: object.x - object.size / 2,
            top: object.y - object.size / 2,
            fontSize: `${object.size}px`,
          }}
        >
          {object.emoji}
        </div>
      ))}
    </>
  )
}