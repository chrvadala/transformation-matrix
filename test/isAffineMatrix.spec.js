/* global describe, it, expect */
import { isAffineMatrix } from '../src/isAffineMatrix'

describe('isAffineMatrix', () => {
  it('should return true', () => {
    let o1 = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 }
    let o2 = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100 }
    let o3 = { y: 200, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100 }
    expect(isAffineMatrix(o1)).toBe(true)
    expect(isAffineMatrix(o2)).toBe(true)
    expect(isAffineMatrix(o3)).toBe(true)
  })
  it('should return false', () => {
    let o1 = { a: 0, b: 0, c: 0, d: 0, e: 0 }
    let o2 = { a: 0, b: 0, c: 0, d: 0, e: 0, f: Number.NaN }
    let o3 = { a: 0, b: 0, c: 0, d: 0, e: Number.POSITIVE_INFINITY, f: 0 }
    let o4 = { a: '0', b: 0, c: 0, d: 0, e: 0, f: 0 }
    let o5 = '{a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}'
    let o6 = {}
    let o7 = 42
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
