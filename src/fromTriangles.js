import { inverse } from './inverse'
import { transform } from './transform'
import { smoothMatrix } from './smoothMatrix'

/**
 * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.
 * @param t1 [{x: number, y: number}}, {{x: number, y: number}}, {{x: number, y: number}}] array containing the three points for the triangle as a Point array
 * @param t2 See description for t1.
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 * @throws Exception if the matrix becomes not invertible
 */
export function fromTriangles (t1, t2) {
  let r1, r2, rx1, ry1, rx2, ry2

  if (Array.isArray(t1) && Array.isArray(t2)) {
    rx1 = t1[2].x
    ry1 = t1[2].y
    rx2 = t2[2].x
    ry2 = t2[2].y
    r1 = {
      a: t1[0].x - rx1,
      b: t1[0].y - ry1,
      c: t1[1].x - rx1,
      d: t1[1].y - ry1,
      e: rx1,
      f: ry1
    }
    r2 = {
      a: t2[0].x - rx2,
      b: t2[0].y - ry2,
      c: t2[1].x - rx2,
      d: t2[1].y - ry2,
      e: rx2,
      f: ry2
    }
  } else {
    throw new Error('Parameter t1 or t2 is not an array')
  }
  let inverseR1 = inverse(r1)
  let affineMatrix = transform([r2, inverseR1])

  // round the matrix elements to smooth the finite inversion
  return smoothMatrix(affineMatrix)
}
