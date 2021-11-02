/* global describe, it, expect */
import { rotate } from '../src/rotate'
import { decompose } from '../src/decompose'
import { translate } from '../src/translate'
import { scale } from '../src/scale'
import { flipX, flipY } from '../src/flip'
import { compose } from '../src/transform'

function makeTransform (object) {
  return {
    translate: { tx: object.tx ?? 0, ty: object.ty ?? 0 },
    rotation: object.rotation ?? 0,
    scale: { sx: object.sx ?? 1, sy: object.sy ?? 1 }
  }
}

describe('decompose', () => {
  it('should decompose a translation-only matrix', () => {
    const tx = 20
    const ty = 30
    expect(decompose(translate(tx, ty))).toEqual(makeTransform({ tx, ty }))
  })

  it('should decompose a rotation-only matrix', () => {
    const rotation = Math.PI / 4
    expect(decompose(rotate(rotation))).toEqual(makeTransform({ rotation }))
  })

  it('should decompose a scale-only matrix', () => {
    const sx = 2
    const sy = 1.5
    expect(decompose(scale(sx, sy))).toEqual(makeTransform({ sx, sy }))
  })

  it('should decompose a flip-x-only matrix', () => {
    expect(decompose(flipX(), true)).toEqual(makeTransform({ sy: -1 }))
  })

  it('should decompose a flip-y-only matrix', () => {
    expect(decompose(flipY(), false, true)).toEqual(makeTransform({ sx: -1 }))
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
    expect(decompose(matrix)).toEqual(makeTransform({ tx, ty, sx, sy, rotation }))
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
    expect(decompose(matrix, true, true)).toEqual(makeTransform({ tx, ty, sx: -sx, sy: -sy, rotation }))
  })
})
