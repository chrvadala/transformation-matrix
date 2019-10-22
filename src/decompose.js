function _translate (matrix) {
  const { e, f } = matrix
  return {
    x: e,
    y: f
  }
}

function _scale (matrix) {
  const { sign, sqrt, pow, abs } = Math
  const { a, b, c, d } = matrix

  return {
    sx: abs(sign(a) * sqrt(pow(a, 2) + pow(b, 2))),
    sy: abs(sign(d) * sqrt(pow(c, 2) + pow(d, 2)))
  }
}

function _rotate (matrix) {
  const { atan2 } = Math
  const { a, b } = matrix
  return atan2(-b, a) * -1
}

/**
 * Decomposes the matrix into primitive transform values.
 *
 * Warning: it only decomposes translate, rotate and scale primitives, not skew. If you
 * pass a matrix which have been affected by a shear or skew transformation, this function
 * won't work properly.
 *
 * @param matrix {Matrix} Affine Matrix to decompose
 * @returns {Object} Matrix decomposition object
 *
 * @example
 * const matrix = compose(
 *    identity(),
 *    translate(10, 10),
 *    scale(1.5, 2),
 *    rotate(3.14)
 * )
 *
 * decompose(matrix)
 * -> {
 *    translate: {
 *      x: 10,
 *      y: 10
 *    },
 *    scale: {
 *      sx: 1.5,
 *      sy: 2
 *    },
 *    rotate: 3.14 // Always in radians.
 * }
 */
export function decompose (matrix) {
  return {
    translate: _translate(matrix),
    rotate: _rotate(matrix),
    scale: _scale(matrix)
  }
}
