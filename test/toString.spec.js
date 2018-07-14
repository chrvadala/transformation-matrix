/* global describe, it, expect */
import {toString, toCSS, toSVG} from '../src/toString'

describe('toString', () => {
  it('should return a transformation matrix string', () => {
    let m1 = {
      a: 1.1,
      c: 3.3,
      e: 5.5,
      b: 2.2,
      d: 4.4,
      f: 6.6
    }
    let s = 'matrix(1.1,2.2,3.3,4.4,5.5,6.6)'

    expect(toString(m1)).toEqual(s)
    expect(toCSS(m1)).toEqual(s)
    expect(toSVG(m1)).toEqual(s)
  })
})
