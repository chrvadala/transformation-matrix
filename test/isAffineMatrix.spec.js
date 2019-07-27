/* global describe, it, expect */
import { isAffineMatrix } from '../src/isAffineMatrix'

describe('isAffineMatrix', () => {
  it('should return true', () => {
    const o1 = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 }
    const o2 = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100 }
    const o3 = { y: 200, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100 }
    expect(isAffineMatrix(o1)).toBe(true)
    expect(isAffineMatrix(o2)).toBe(true)
    expect(isAffineMatrix(o3)).toBe(true)
  })
  it('should return false', () => {
    const o1 = { a: 0, b: 0, c: 0, d: 0, e: 0 }
    const o2 = { a: 0, b: 0, c: 0, d: 0, e: 0, f: Number.NaN }
    const o3 = { a: 0, b: 0, c: 0, d: 0, e: Number.POSITIVE_INFINITY, f: 0 }
    const o4 = { a: '0', b: 0, c: 0, d: 0, e: 0, f: 0 }
    const o5 = '{a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}'
    const o6 = {}
    const o7 = 42
    expect(isAffineMatrix(o1)).toBe(false)
    expect(isAffineMatrix(o2)).toBe(false)
    expect(isAffineMatrix(o3)).toBe(false)
    expect(isAffineMatrix(o4)).toBe(false)
    expect(isAffineMatrix(o5)).toBe(false)
    expect(isAffineMatrix(o6)).toBe(false)
    expect(isAffineMatrix(o7)).toBe(false)
    expect(isAffineMatrix(null)).toBe(false)
  })
})
