import { isUndefined } from './utils'

/**
 * Calculate a scaling matrix
 * @param sx {number} Scaling on axis x
 * @param [sy = sx] {number} Scaling on axis y (default sx)
 * @returns {Matrix} Affine Matrix
 */
export function scale (sx, sy = undefined) {
  if (isUndefined(sy)) sy = sx
  return {
    a: sx,
    c: 0,
    e: 0,
    b: 0,
    d: sy,
    f: 0
  }
}
