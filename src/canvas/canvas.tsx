import { MutableRefObject, useEffect, useRef } from 'react'

import { getRadians, getSectors } from '../lib'

import { CanvasStyles } from './canvas.styles'

export interface CanvasProps {
  canvasRadius: number
}

export const Canvas = ({ canvasRadius }: CanvasProps) => {
  const canvas = useRef() as MutableRefObject<HTMLCanvasElement>

  const bootstrap = () => {
    if (!canvas.current) {
      return
    }

    canvas.current.width = canvasRadius * 2
    canvas.current.height = canvasRadius * 2

    const context = canvas.current.getContext('2d') as CanvasRenderingContext2D

    const sectors = getSectors()

    requestAnimationFrame(() => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)

      let startAngle = 0

      for (const sector of sectors) {
        const degrees = (sector.ratio / 100) * 360

        context.fillStyle = sector.color

        context.beginPath()
        context.moveTo(canvasRadius, canvasRadius)
        context.arc(
          canvasRadius,
          canvasRadius,
          sector.radius,
          getRadians(startAngle),
          getRadians(startAngle + degrees)
        )

        context.fill()
        context.stroke()

        startAngle += degrees
      }

      context.beginPath()
      context.arc(canvasRadius, canvasRadius, 33, 0, Math.PI * 2)
      context.fillStyle = '#1E1E1E'
      context.fill()
    })
  }

  useEffect(bootstrap, [canvas.current])

  return <CanvasStyles ref={canvas} onClick={bootstrap} />
}
