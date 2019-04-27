/* global describe, it, expect */
import { fromString } from '../src/fromString'

describe('fromString', () => {
  it('should parse a matrix from string', () => {
    expect(fromString('matrix(1,2,3,4,5,6)')).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    expect(fromString('matrix(1 ,    2 , 3 , 4 , 5 , 6 )')).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    expect(fromString('MaTrIx(1,2,3,4,5,6)')).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
    expect(fromString('matrix(1.1,2.2,3.3,4.4,5.5,6.6)')).toEqual({ a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 })
    expect(fromString('matrix(1.1 ,2.2  ,3.3 ,  4.4,  5.5,  6.6   )')).toEqual({ a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 })
    expect(fromString('matrix(1,2.2  ,3.3,4.4,5,  6   )')).toEqual({ a: 1, b: 2.2, c: 3.3, d: 4.4, e: 5, f: 6 })

    expect(fromString('matrix(-1.1,-2.2,-3.3,-4.4,-5.5,-6.6)')).toEqual({ a: -1.1, b: -2.2, c: -3.3, d: -4.4, e: -5.5, f: -6.6 })
    expect(fromString('matrix(-1,-2,-3,-4,-5,-6)')).toEqual({ a: -1, b: -2, c: -3, d: -4, e: -5, f: -6 })

    expect(fromString('matrix(+43e+21, -43e+21, +43e-21, -43e-21, 43e0, 0e0)')).toEqual({ a: +43e+21, b: -43e+21, c: +43e-21, d: -43e-21, e: 43, f: 0 })

    expect(fromString.bind(this, 'matrix()')).toThrow()
    expect(fromString.bind(this, 'matrix(1,2,3,4,5)')).toThrow()
    expect(fromString.bind(this, 'matrix(a,b,c,d,e,f)')).toThrow()
  })
})
