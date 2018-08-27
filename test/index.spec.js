/* global describe, it, expect */
import * as lib from '../src/index'

describe('index', () => {
  it('should export functions', () => {
    expect(typeof lib.toString).toBe('function')
    expect(typeof lib.toSVG).toBe('function')
    expect(typeof lib.toCSS).toBe('function')
    expect(typeof lib.identity).toBe('function')
    expect(typeof lib.transform).toBe('function')
    expect(typeof lib.applyToPoint).toBe('function')
    expect(typeof lib.applyToPoints).toBe('function')
    expect(typeof lib.translate).toBe('function')
    expect(typeof lib.scale).toBe('function')
    expect(typeof lib.shear).toBe('function')
    expect(typeof lib.skew).toBe('function')
    expect(typeof lib.skewDEG).toBe('function')
    expect(typeof lib.rotate).toBe('function')
    expect(typeof lib.rotateDEG).toBe('function')
    expect(typeof lib.inverse).toBe('function')
    expect(typeof lib.fromString).toBe('function')
    expect(typeof lib.isAffineMatrix).toBe('function')
    expect(typeof lib.fromObject).toBe('function')
    expect(typeof lib.compose).toBe('function')
  })
})
