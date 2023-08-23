import { randomNumber } from './get-random-number'

type Hex = `#${string}`

const possibleColors: Hex[] = [
  '#F2994A',
  '#6FCF97',
  '#9B51E0',
  '#2F80ED',
  '#56CCF2',
  '#219653',
  '#F2C94C',
  '#EB5757'
]

export interface GetSectorsPayload {
  ratio: number
  radius: number
  color: Hex
}

export const getSectors = (): GetSectorsPayload[] => {
  const numSectors = randomNumber(1, 8)
  let t = 0

  const sectors = []
  const res = []

  for (let i = 0; i < numSectors; i++) {
    const percentage = Math.random() * 100
    sectors.push(percentage)
    t += percentage
  }

  for (let i = 0; i < numSectors; i++) {
    sectors[i] /= t
    sectors[i] *= 100
    res.push({
      ratio: sectors[i],
      radius: randomNumber(40, 200),
      color: possibleColors[i]
    })
  }

  return res
}
