/* global describe, it, expect */
import { fromTriangles } from '../src/fromTriangles'
import { identity } from '../src/identity'
import { rotate } from '../src/rotate'
import { translate } from '../src/translate'
import { scale } from '../src/scale'
import { smoothMatrix } from '../src/smoothMatrix'

const { PI } = Math

describe('fromTriangles', () => {
  it('should return the identity matrix', () => {
    const triangle = [{ x: 1.5, y: 2.5 }, { x: 3, y: 6 }, { x: 7, y: 3.5 }]
    expect(fromTriangles(triangle, triangle)).toEqual(identity())
  })
  it('should return a rotation matrix', () => {
    const triangleA = [{ x: 0, y: 2 }, { x: 3, y: 0 }, { x: -3, y: 0 }]
    const triangleB = [{ x: 2, y: 0 }, { x: 0, y: -3 }, { x: 0, y: 3 }]
    expect(fromTriangles(triangleA, triangleB)).toEqual(smoothMatrix(rotate(-PI / 2)))
  })
  it('should return a translation matrix', () => {
    const triangleA = [{ x: 0, y: 2 }, { x: 3, y: 0 }, { x: -3, y: 0 }]
    const triangleB = [{ x: 2, y: 4 }, { x: 5, y: 2 }, { x: -1, y: 2 }]
    expect(fromTriangles(triangleA, triangleB)).toEqual(translate(2, 2))
  })
  it('should return a scaling matrix', () => {
    const triangleA = [{ x: 0, y: 2 }, { x: 3, y: 0 }, { x: -3, y: 0 }]
    const triangleB = [{ x: 0, y: 6 }, { x: 9, y: 0 }, { x: -9, y: 0 }]
    expect(fromTriangles(triangleA, triangleB)).toEqual(scale(3))
  })
  it('should return a scaling matrix', () => {
    const triangleA = [{ x: 0, y: 2 }, { x: 3, y: 0 }, { x: -3, y: 0 }]
    const triangleB = [{ x: 0, y: 6 }, { x: 9, y: 0 }, { x: -9, y: 0 }]
    expect(fromTriangles(triangleA, triangleB)).toEqual(scale(3))
  })
  it('should return a scaling matrix for a Point expressed array', () => {
    const triangleA = [[0, 2], [3, 0], [-3, 0]]
    const triangleB = [{ x: 0, y: 6 }, { x: 9, y: 0 }, { x: -9, y: 0 }]
    expect(fromTriangles(triangleA, triangleB)).toEqual(scale(3))

    const triangleC = [{ x: 0, y: 2 }, { x: 3, y: 0 }, { x: -3, y: 0 }]
    const triangleD = [[ 0, 6 ], [ 9, 0 ], [ -9, 0 ]]
    expect(fromTriangles(triangleC, triangleD)).toEqual(scale(3))
  })
})
