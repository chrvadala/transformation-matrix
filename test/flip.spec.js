/* global describe, it, expect */
import { applyToPoint } from '../src/applyToPoint'
import { flipX, flipY, flipOrigin } from '../src/flip'

const point = { x: 42, y: 24 }

describe('flip', () => {
  it('should flip a point on x-axis', () => {
    expect(applyToPoint(flipX(), point)).toEqual({ x: 42, y: -24 })
  })

  it('should flip a point on y-axis', () => {
    expect(applyToPoint(flipY(), point)).toEqual({ x: -42, y: 24 })
  })

  it('should flip a point on origin', () => {
    expect(applyToPoint(flipOrigin(), point)).toEqual({ x: -42, y: -24 })
  })
})
