/* global describe, it, expect */
import { applyToPoint, applyToPoints } from '../src/applyToPoint'
import { scale } from '../src/scale'

describe('scale', () => {
  it('should return a scale matrix', () => {
    const m = scale(20, 40)
    expect(m).toEqual({
      a: 20,
      c: 0,
      e: 0,
      b: 0,
      d: 40,
      f: 0
    })
    expect(applyToPoint(m, { x: 0, y: 0 })).toEqual({ x: 0, y: 0 })
    expect(applyToPoint(m, { x: 50, y: 80 })).toEqual({ x: 1000, y: 3200 })
    expect(applyToPoint(scale(Number(20), Number(40)), { x: 50, y: 80 })).toEqual({ x: 1000, y: 3200 })
  })

  it('should use sy=sx as default', () => {
    const m = scale(20)
    expect(m).toEqual({
      a: 20,
      c: 0,
      e: 0,
      b: 0,
      d: 20,
      f: 0
    })
    expect(applyToPoint(m, { x: 0, y: 0 })).toEqual({ x: 0, y: 0 })
    expect(applyToPoint(m, { x: 50, y: 80 })).toEqual({ x: 1000, y: 1600 })
    expect(applyToPoint(scale(20, undefined), { x: 50, y: 80 })).toEqual({ x: 1000, y: 1600 })
  })

  it('should scale points about specified origin', () => {
    /*
    <rect x="-50" y="-50" width="200" height="200" fill="green" />
    <rect x="0" y="0" width="100" height="100" fill="black" />
    <circle cx="50" cy="50" r="10" fill="red" />
   */
    const m = scale(2, 2, 50, 50)
    expect(m).toEqual({
      a: 2,
      c: 0,
      e: -50,
      b: 0,
      d: 2,
      f: -50
    })

    const points = [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 0, y: 100 },
      { x: 100, y: 100 }
    ]
    expect(applyToPoints(m, points)).toEqual([
      { x: -50, y: -50 },
      { x: 150, y: -50 },
      { x: -50, y: 150 },
      { x: 150, y: 150 }
    ])
  })
})
