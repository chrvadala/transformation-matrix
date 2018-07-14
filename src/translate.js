/**
 * Calculate a translate matrix
 * @param tx Translation on axis x
 * @param [ty = 0] Translation on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function translate (tx, ty = 0) {
  return {
    a: 1,
    c: 0,
    e: tx,
    b: 0,
    d: 1,
    f: ty
  }
}
