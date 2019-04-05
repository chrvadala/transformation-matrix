/* global describe, test, expect */
import { translate } from '../src/translate'
import { rotateDEG } from '../src/rotate'
import { scale } from '../src/scale'
import { skewDEG } from '../src/skew'
import { fromDefinition, shear } from '../src'

describe.only('fromDefinition', () => {
  test('atomic transformations', () => {
    expect(fromDefinition({ type: 'matrix', a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 })).toEqual(
      { a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 }
    )
    expect(() => fromDefinition({ type: 'matrix' })).toThrow()

    // translate
    expect(fromDefinition({ type: 'translate', tx: 1.1 })).toEqual(
      translate(1.1, 0)
    )
    expect(fromDefinition({ type: 'translate', tx: 1.1, ty: 2.2 })).toEqual(
      translate(1.1, 2.2)
    )
    expect(() => fromDefinition({ type: 'translate' })).toThrow()

    // scale
    expect(fromDefinition({ type: 'scale', sx: 1.1 })).toEqual(
      scale(1.1)
    )
    expect(fromDefinition({ type: 'scale', sx: 1.1, sy: 2.2 })).toEqual(
      scale(1.1, 2.2)
    )
    expect(() => fromDefinition({ type: 'scale' })).toThrow()

    // rotate
    expect(fromDefinition({ type: 'rotate', angle: 45 })).toEqual(
      rotateDEG(45)
    )
    expect(fromDefinition({ type: 'rotate', angle: 45, cx: 100, cy: 200 })).toEqual(
      rotateDEG(45, 100, 200)
    )
    expect(() => fromDefinition({ type: 'rotate' })).toThrow()

    // skew
    expect(fromDefinition({ type: 'skewX', angle: 45 })).toEqual(
      skewDEG(45, 0)
    )
    expect(fromDefinition({ type: 'skewY', angle: 45 })).toEqual(
      skewDEG(0, 45)
    )
    expect(() => fromDefinition({ type: 'skewX' })).toThrow()
    expect(() => fromDefinition({ type: 'skewY' })).toThrow()

    // shear
    expect(fromDefinition({ type: 'shear', shx: 5, shy: 10 })).toEqual(
      shear(5, 10)
    )
    expect(() => fromDefinition({ type: 'shear' })).toThrow()

    // common
    expect(() => fromDefinition('M_A_T_R_I_X(1,2,3,4,5,6)')).toThrow()
  })

  test('multiple matrices', () => {
    expect(
      fromDefinition([
        { type: 'translate', tx: 1, ty: -1 },
        { type: 'matrix', a: 6, b: 5, c: 4, d: 3, e: 2, f: 1 },
        { type: 'translate', tx: 1, ty: -1 },
        { type: 'translate', tx: 1, ty: -1 },
        { type: 'translate', tx: 1, ty: -1 }
      ])
    ).toEqual([
      translate(1, -1),
      { a: 6, b: 5, c: 4, d: 3, e: 2, f: 1 },
      translate(1, -1),
      translate(1, -1),
      translate(1, -1)
    ]
    )
  })
})
