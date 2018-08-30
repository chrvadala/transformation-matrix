/**
 * Calculate a point transformed with an affine matrix
 * @param matrix Affine matrix
 * @param point Point
 * @returns {{x: number, y: number} | Array} Point
 */
export function applyToPoint (matrix, point) {
  return Array.isArray(point) ? [
    matrix.a * point[0] + matrix.c * point[1] + matrix.e,
    matrix.b * point[0] + matrix.d * point[1] + matrix.f
  ] : {
    x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f
  }
}

/**
 * Calculate an array of points transformed with an affine matrix
 * @param matrix Affine matrix
 * @param points Array of points
 * @returns {array} Array of points
 */
export function applyToPoints (matrix, points) {
  return points.map(point => applyToPoint(matrix, point))
}
