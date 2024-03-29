/* global describe, it, expect */
import { rotate, rotateDEG } from '../src/rotate'
import { decomposeTSR } from '../src/decompose'
import { translate } from '../src/translate'
import { scale } from '../src/scale'
import { flipX, flipY } from '../src/flip'
import { compose } from '../src/transform'
import { applyToPoint } from '../src/applyToPoint'

function makeTransform (object) {
  return {
    translate: { tx: object.tx ?? 0, ty: object.ty ?? 0 },
    rotation: { angle: object.rotation ?? 0 },
    scale: { sx: object.sx ?? 1, sy: object.sy ?? 1 }
  }
}

describe('decomposeTSR', () => {
  it('should decompose a translation-only matrix', () => {
    const tx = 20
    const ty = 30
    expect(decomposeTSR(translate(tx, ty))).toEqual(makeTransform({ tx, ty }))
  })

  it('should decompose a rotation-only matrix', () => {
    const rotation = Math.PI / 4
    expect(decomposeTSR(rotate(rotation))).toEqual(makeTransform({ rotation }))
  })

  it('should decompose a scale-only matrix', () => {
    const sx = 2
    const sy = 1.5
    expect(decomposeTSR(scale(sx, sy))).toEqual(makeTransform({ sx, sy }))
  })

  it('should decompose a flip-x-only matrix', () => {
    expect(decomposeTSR(flipX(), true)).toEqual(makeTransform({ sy: -1 }))
  })

  it('should decompose a flip-y-only matrix', () => {
    expect(decomposeTSR(flipY(), false, true)).toEqual(makeTransform({ sx: -1 }))
  })

  it('should decompose a complex matrix without flips', () => {
    const tx = 100
    const ty = -234
    const sx = 2
    const sy = 1
    const rotation = Math.PI * 0.75
    const matrix = compose(
      translate(tx, ty),
      scale(sx, sy),
      rotate(rotation)
    )
    expect(decomposeTSR(matrix)).toEqual(makeTransform({ tx, ty, sx, sy, rotation }))
  })

  it('should decompose a complex matrix with flips', () => {
    const tx = 100
    const ty = -234
    const sx = 1
    const sy = 1
    const rotation = Math.PI * 0.75
    const matrix = compose(
      translate(tx, ty),
      scale(sx, sy),
      flipX(),
      flipY(),
      rotate(rotation)
    )
    expect(decomposeTSR(matrix, true, true)).toEqual(makeTransform({ tx, ty, sx: -sx, sy: -sy, rotation }))
  })

  it('should decompose an all-zero matrix', () => {
    const matrix = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 }
    expect(decomposeTSR(matrix)).toEqual(makeTransform({ tx: 0, ty: 0, sx: 0, sy: 0, rotation: 0 }))
  })

  it('should decompose a matrix with a and c equals to zero while d is positive', () => {
    const sx = 0
    const sy = 1
    const matrix = scale(sx, sy)
    expect(matrix.a).toBeCloseTo(0)
    expect(matrix.c).toBeCloseTo(0)
    expect(matrix.d).toEqual(1)
    expect(decomposeTSR(matrix)).toEqual(makeTransform({ sx, sy }))
  })

  it('should decompose a matrix with a and c equals to zero while d is negative', () => {
    const sx = 0
    const sy = 1
    const rotation = Math.PI
    const matrix = compose(scale(sx, sy), rotate(rotation))
    expect(matrix.a).toBeCloseTo(0)
    expect(matrix.c).toBeCloseTo(0)
    expect(matrix.d).toEqual(-1)
    expect(decomposeTSR(matrix)).toEqual(makeTransform({ sx, sy, rotation: Math.PI }))
  })

  it.each([
    0 + 45 / 2,
    45,
    45 + 45 / 2,
    90,
    90 + 45 / 2,
    180,
    180 + 45 / 2,
    270,
    270 + 45 / 2
  ])('should decompose into an equivalent TSR matrix, rotated by %d DEG', (rotation) => {
    const tx = 40
    const ty = 80
    const scaleX = 2
    const scaleY = 4

    const matrix = compose(
      translate(tx, ty),
      scale(scaleX, scaleY),
      rotateDEG(rotation)
    )

    const decomposed = decomposeTSR(matrix)

    const matrix2 = compose(
      translate(decomposed.translate.tx, decomposed.translate.ty),
      scale(decomposed.scale.sx, decomposed.scale.sy),
      rotate(decomposed.rotation.angle)
    )

    const point1 = applyToPoint(matrix, { x: 42, y: 42 })
    const point2 = applyToPoint(matrix2, { x: 42, y: 42 })

    expect(point2.x).toBeCloseTo(point1.x, 10)
    expect(point2.y).toBeCloseTo(point1.y, 10)
  })
})
