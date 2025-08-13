interface FlashlightOverlayProps {
  mouseX: number;
  mouseY: number;
  size: number;
}

export default function FlashlightOverlay({ mouseX, mouseY, size }: FlashlightOverlayProps) {
  return (
    <div
      className="flashlight-overlay flashlight-effect"
      style={{
        '--mouse-x': `${mouseX}px`,
        '--mouse-y': `${mouseY}px`,
        '--flashlight-size': `${size}px`,
      } as React.CSSProperties}
    />
  )
}