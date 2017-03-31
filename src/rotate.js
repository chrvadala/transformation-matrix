const {cos, sin, PI} = Math;
/**
 * Calculate a rotation matrix
 * @param angle Angle in radians
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix *
 */
export function rotate(angle) {
  let cosAngle = cos(angle);
  let sinAngle = sin(angle);
  return {
    a: cosAngle, c: -sinAngle, e: 0,
    b: sinAngle, d: cosAngle, f: 0
  };
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle Angle in degree
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function rotateDEG(angle) {
  return rotate(angle * PI / 180);
}
