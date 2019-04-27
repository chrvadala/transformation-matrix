/* global describe, it, expect */
import { applyToPoint } from '../src/applyToPoint'
import { skewDEG } from '../src/skew'
import { transform } from '../src/transform'

const precision = 0.000001

describe('skew', () => {
  it('should return a skew matrix', () => {
    // example https://msdn.microsoft.com/en-us/library/system.windows.media.matrix.skew(v=vs.110).aspx#Anchor_1
    let m = { a: 5, b: 10, c: 15, d: 20, e: 25, f: 30 }
    let skewMatrix = skewDEG(45, 180)

    let skewedMatrix = transform(skewMatrix, m)

    expect(Math.abs(skewedMatrix.a - 15)).toBeLessThanOrEqual(precision)
    expect(Math.abs(skewedMatrix.b - 10)).toBeLessThanOrEqual(precision)
    expect(Math.abs(skewedMatrix.c - 35)).toBeLessThanOrEqual(precision)
    expect(Math.abs(skewedMatrix.d - 20)).toBeLessThanOrEqual(precision)
    expect(Math.abs(skewedMatrix.e - 55)).toBeLessThanOrEqual(precision)
    expect(Math.abs(skewedMatrix.f - 30)).toBeLessThanOrEqual(precision)
  })

  it('should transform a point on X axis', () => {
    const point = { x: 5, y: 4 }
    const pointI = applyToPoint(skewDEG(10, 0), point)
    // https://jsfiddle.net/t1yLa3ed/1/
    expect(Math.abs(pointI.x - 5.70530792283386)).toBeLessThanOrEqual(precision)
    expect(Math.abs(pointI.y - 4)).toBeLessThanOrEqual(precision)
  })

  it('should transform a point on Y axis', () => {
    const point = { x: 5, y: 4 }
    const pointI = applyToPoint(skewDEG(0, 10), point)
    // https://jsfiddle.net/t1yLa3ed/2/
    expect(Math.abs(pointI.x - 5)).toBeLessThanOrEqual(precision)
    expect(Math.abs(pointI.y - 4.8816349035423245)).toBeLessThanOrEqual(precision)
  })
})
