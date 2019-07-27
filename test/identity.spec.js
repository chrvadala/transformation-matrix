/* global describe, it, expect */
import { identity } from '../src/index'

describe('identity', () => {
  it('should return identity matrix', () => {
    const m = identity()
    expect(typeof m).toBe('object')
    expect(m).toEqual({
      a: 1,
      c: 0,
      e: 0,
      b: 0,
      d: 1,
      f: 0
    })
  })
})
