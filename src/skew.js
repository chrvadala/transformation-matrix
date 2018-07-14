// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
const {tan} = Math

/**
 * Calculate a skew matrix
 * @param ax Skew on axis x
 * @param ay Skew on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function skew (ax, ay) {
  return {
    a: 1,
    c: tan(ax),
    e: 0,
    b: tan(ay),
    d: 1,
    f: 0
  }
}

/**
 * Calculate a skew matrix using DEG angles
 * @param ax Skew on axis x
 * @param ay Skew on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function skewDEG (ax, ay) {
  return skew(ax * Math.PI / 180, ay * Math.PI / 180)
}
