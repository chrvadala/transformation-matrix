/* global describe, it, expect */
import {
  applyToPoint,
  applyToPoints,
  compose,
  fromDefinition,
  fromObject,
  fromString,
  fromTriangles,
  identity,
  inverse,
  isAffineMatrix,
  rotate,
  rotateDEG,
  scale,
  shear,
  skew,
  skewDEG,
  smoothMatrix,
  toCSS,
  toString,
  toSVG,
  transform,
  translate,
  decompose,
} from '../src/index'

describe('index', () => {
  it('should export functions', () => {
    expect(typeof toString).toBe('function')
    expect(typeof toSVG).toBe('function')
    expect(typeof toCSS).toBe('function')
    expect(typeof identity).toBe('function')
    expect(typeof transform).toBe('function')
    expect(typeof applyToPoint).toBe('function')
    expect(typeof applyToPoints).toBe('function')
    expect(typeof translate).toBe('function')
    expect(typeof scale).toBe('function')
    expect(typeof shear).toBe('function')
    expect(typeof skew).toBe('function')
    expect(typeof skewDEG).toBe('function')
    expect(typeof rotate).toBe('function')
    expect(typeof rotateDEG).toBe('function')
    expect(typeof inverse).toBe('function')
    expect(typeof fromString).toBe('function')
    expect(typeof isAffineMatrix).toBe('function')
    expect(typeof fromObject).toBe('function')
    expect(typeof compose).toBe('function')
    expect(typeof smoothMatrix).toBe('function')
    expect(typeof fromTriangles).toBe('function')
    expect(typeof fromDefinition).toBe('function')
    expect(typeof decompose).toBe('function')
  })
})
