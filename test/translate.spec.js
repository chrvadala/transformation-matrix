/* global describe, it, expect */
import {applyToPoint} from '../src/applyToPoint'
import {translate} from '../src/translate'

describe('translate', () => {
  it('should return a transform matrix', () => {
    let m = translate(40, 60)
    expect(m).toEqual({
      a: 1,
      c: 0,
      e: 40,
      b: 0,
      d: 1,
      f: 60
    })
    expect(applyToPoint(m, {x: 0, y: 0})).toEqual({x: 40, y: 60})
    expect(applyToPoint(m, {x: 50, y: 80})).toEqual({x: 90, y: 140})
  })

  it('should use ty=0 as default', () => {
    let m = translate(40)
    expect(m).toEqual({
      a: 1,
      c: 0,
      e: 40,
      b: 0,
      d: 1,
      f: 0
    })
    expect(applyToPoint(m, {x: 0, y: 0})).toEqual({x: 40, y: 0})
    expect(applyToPoint(m, {x: 50, y: 80})).toEqual({x: 90, y: 80})
  })
})
