/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix Affine matrix
 * @returns {string} String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
export function toCSS (matrix) {
  return toString(matrix)
}

/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix Affine matrix
 * @returns {string} String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
export function toSVG (matrix) {
  return toString(matrix)
}

/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix Affine matrix
 * @returns {string} String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
export function toString (matrix) {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`
}
