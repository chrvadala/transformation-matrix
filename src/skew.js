//https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
const tanDeg = angle => Math.tan(angle * Math.PI / 180)

/**
 * Calculate a skew matrix
 * @param ax Skew on axis x
 * @param ay Skew on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function skew(ax, ay) {
  return {
    a: 1, c: tanDeg(ax), e: 0,
    b: tanDeg(ay), d: 1, f: 0
  };
}
