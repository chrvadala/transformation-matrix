/**
 * Calculate a shear matrix
 * @param shx Shear on axis x
 * @param shy Shear on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function shear (shx, shy) {
  return {
    a: 1,
    c: shx,
    e: 0,
    b: shy,
    d: 1,
    f: 0
  }
}
