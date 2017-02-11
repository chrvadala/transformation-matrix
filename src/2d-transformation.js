/**
 * Get identity matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}}
 */
export function identity() {
  return {
    a: 1, b: 0, c: 0,
    d: 0, e: 1, f: 0
  }
}

/**
 *
 * @param matrices
 */
export function transform(...matrices) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param matrix
 */
export function inverse(matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param tx
 * @param ty
 * @param matrix
 */
export function translate(tx, ty, matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param sx
 * @param sy
 * @param matrix
 */
export function scale(sx, sy, matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param angle
 * @param matrix
 */
export function rotate(angle, matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param angle
 * @param matrix
 */
export function rotateDEG(angle, matrix){
  throw new Error('not implemented yet')
}

/**
 *
 * @param point
 * @param matrix
 */
export function applyToPoint(point, matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param points
 * @param matrix
 */
export function applyToPoints(points, matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param matrix
 */
export function toCSS(matrix){
  throw new Error('not implemented yet')
}

/**
 *
 * @param matrix
 */
export function toSVG(matrix){
  throw new Error('not implemented yet')
}

/**
 *
 * @param matrix
 */
export function toString(matrix){
  throw new Error('not implemented yet')
}
