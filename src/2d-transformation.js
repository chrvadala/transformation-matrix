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
  switch (matrices.length) {
    case 0:
      throw new Error('no matrices provided');

    case 1:
      return matrices[0];

    default:
      let [m1, m2, ...rest] = matrices;
      let m = {
        a: m1.a * m2.a + m1.b * m2.a,
        b: m1.a * m2.b + m1.b * m2.e,
        c: m1.a * m2.c + m1.b * m2.f + m1.c,
        d: m1.d * m2.a + m1.e * m2.d,
        e: m1.d * m2.b + m1.e * m2.e,
        f: m1.d * m2.c + m1.e * m2.f + m1.f
      };
      return transform(m, ...rest);
  }
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
export function rotateDEG(angle, matrix) {
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
export function toCSS(matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param matrix
 */
export function toSVG(matrix) {
  throw new Error('not implemented yet')
}

/**
 *
 * @param matrix
 */
export function toString(matrix) {
  throw new Error('not implemented yet')
}
