/* global describe, it, expect */
import {applyToPoint} from '../src/applyToPoint'
import {shear} from '../src/shear'

describe('shear', () => {
  it('should return a scale matrix', () => {
    let m = shear(10, 20)
    expect(m).toEqual({
      a: 1,
      c: 10,
      e: 0,
      b: 20,
      d: 1,
      f: 0
    })
  })

  it('should transform a point', () => {
    expect(applyToPoint(shear(10, 0), {x: 0, y: 30})).toEqual({x: 300, y: 30})
    expect(applyToPoint(shear(0, 10), {x: 30, y: 0})).toEqual({x: 30, y: 300})
    expect(applyToPoint(shear(20, 10), {x: 30, y: 15})).toEqual({x: 330, y: 315})
  })
})
