import {isUndefined} from './utils'

/**
 * Calculate a scaling matrix
 * @param sx Scaling on axis x
 * @param [sy = sx] Scaling on axis y (default sx)
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
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
