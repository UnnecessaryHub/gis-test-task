import { MutableRefObject, useEffect, useRef } from 'react'

import { CanvasStyles } from './Canvas.styles'

export interface CanvasProps {
  canvasRadius: number
}

export const Canvas = ({ canvasRadius }: CanvasProps) => {
  const canvas = useRef() as MutableRefObject<HTMLCanvasElement>

  useEffect(() => {
    canvas.current.width = canvasRadius * 2
    canvas.current.height = canvasRadius * 2
  }, [canvas.current])

  return (
    <div>
      <CanvasStyles ref={canvas} />
    </div>
  )
}
