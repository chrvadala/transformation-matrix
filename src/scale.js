/**
 * Calculate a scaling matrix
 * @param sx Scaling on axis x
 * @param sy Scaling on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function scale(sx, sy) {
  return {
    a: sx, c: 0, e: 0,
    b: 0, d: sy, f: 0
  };
}
