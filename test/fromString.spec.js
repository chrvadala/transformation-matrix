/* global describe, it, expect */
import { fromString, fromStringLegacy } from '../src/fromString'

describe.each([
  ['fromString', fromString],
  ['fromStringLegacy', fromStringLegacy]
])('fromString (implementation: %s)', (fnName, fn) => {
  it('should parse a matrix from string', () => {
    expect(fn('matrix(1,2,3,4,5,6)')).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    expect(fn('matrix(1 ,    2 , 3 , 4 , 5 , 6 )')).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    expect(fn('MaTrIx(1,2,3,4,5,6)')).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    expect(fn('matrix(1.1,2.2,3.3,4.4,5.5,6.6)')).toEqual({ a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 })
    expect(fn('matrix(1.1 ,2.2  ,3.3 ,  4.4,  5.5,  6.6   )')).toEqual({ a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 })
    expect(fn('matrix(1,2.2  ,3.3,4.4,5,  6   )')).toEqual({ a: 1, b: 2.2, c: 3.3, d: 4.4, e: 5, f: 6 })

    expect(fn('matrix(-1.1,-2.2,-3.3,-4.4,-5.5,-6.6)')).toEqual({ a: -1.1, b: -2.2, c: -3.3, d: -4.4, e: -5.5, f: -6.6 })
    expect(fn('matrix(-1,-2,-3,-4,-5,-6)')).toEqual({ a: -1, b: -2, c: -3, d: -4, e: -5, f: -6 })

    expect(fn('matrix(+43e+21, -43e+21, +43e-21, -43e-21, 43e0, 0e0)')).toEqual({ a: +43e+21, b: -43e+21, c: +43e-21, d: -43e-21, e: 43, f: 0 })

    expect(fn.bind(this, 'matrix()')).toThrow(new Error("'matrix()' is not a matrix"))
    expect(fn.bind(this, 'matrix(1,2,3,4,5)')).toThrow(new Error("'matrix(1,2,3,4,5)' is not a matrix"))
    expect(fn.bind(this, 'matrix(a,b,c,d,e,f)')).toThrow(new Error("'matrix(a,b,c,d,e,f)' is not a matrix"))

    expect(fn('matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,440,-350)'))
      .toEqual({ a: 6.123233995736766e-17, b: 1, c: -1, d: 6.123233995736766e-17, e: 440, f: -350 })

    // current version throws an exception in a case that number is NaN
    if (fnName === 'fromString') expect(fn.bind(this, 'matrix(ee,ee,ee,ee,ee,ee)')).toThrow(new Error("'matrix(ee,ee,ee,ee,ee,ee)' is not a matrix"))

    if (fnName === 'fromStringLegacy') {
      expect(fn('matrix(ee,ee,ee,ee,ee,ee)'))
        .toEqual({
          a: Number.NaN,
          b: Number.NaN,
          c: Number.NaN,
          d: Number.NaN,
          e: Number.NaN,
          f: Number.NaN
        })
    }
  })
})
