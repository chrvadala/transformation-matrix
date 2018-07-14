/* global describe, it, expect */
import {applyToPoint, applyToPoints} from '../src/applyToPoint'
import {identity} from '../src/identity'

describe('applyToPoint', () => {
  const m1 = { // trans(40,40) scale(2,2) trans(-40,-40)
    a: 2,
    c: 0,
    e: -40,
    b: 0,
    d: 2,
    f: -40
  }
  it('should return a transformed point', () => {
    expect(applyToPoint(identity(), {x: 0, y: 0})).toEqual({x: 0, y: 0})
    expect(applyToPoint(m1, {x: 30, y: 30})).toEqual({x: 20, y: 20})
    expect(applyToPoint(m1, {x: 50, y: 50})).toEqual({x: 60, y: 60})
  })
})

describe('applyToPoints', () => {
  const m1 = { // trans(40,40) scale(2,2) trans(-40,-40)
    a: 2,
    c: 0,
    e: -40,
    b: 0,
    d: 2,
    f: -40
  }
  const points = [{x: 30, y: 30}, {x: 50, y: 50}]
  const transPoints = [{x: 20, y: 20}, {x: 60, y: 60}]
  it('should return transformed points', () => {
    expect(applyToPoints(identity(), [{x: 0, y: 0}])).toEqual([{x: 0, y: 0}])
    expect(applyToPoints(m1, points)).toEqual(transPoints)
  })
})
