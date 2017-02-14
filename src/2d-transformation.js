const {cos, sin, PI} = Math;

/**
 * Get identity matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}}
 */
export function identity() {
  return {
    a: 1, c: 0, e: 0,
    b: 0, d: 1, f: 0
  }
}

/**
 *
 * @param matrices
 */
export function transform(...matrices) {

  const multiply = (m1, m2) => {
    return {
      a: m1.a * m2.a + m1.c * m2.b, c: m1.a * m2.c + m1.c * m2.d, e: m1.a * m2.e + m1.c * m2.f + m1.e,
      b: m1.b * m2.a + m1.d * m2.b, d: m1.b * m2.c + m1.d * m2.d, f: m1.b * m2.e + m1.d * m2.f + m1.f
    };
  };

  switch (matrices.length) {
    case 0:
      throw new Error('no matrices provided');

    case 1:
      return matrices[0];

    case 2:
      return multiply(matrices[0], matrices[1]);

    default:
      let [m1, m2, ...rest] = matrices;
      let m = multiply(m1, m2);
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
 */
export function translate(tx, ty) {
  return {
    a: 1, c: 0, e: tx,
    b: 0, d: 1, f: ty
  };
}

/**
 *
 * @param sx
 * @param sy
 */
export function scale(sx, sy) {
  return {
    a: sx, c: 0, e: 0,
    b: 0, d: sy, f: 0
  };
}

/**
 *
 * @param angle
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
 *
 * @param angle
 */
export function rotateDEG(angle) {
  return rotate(angle * PI / 180);
}

/**
 *
 * @param point
 * @param matrix
 */
export function applyToPoint(point, matrix) {
  return {
    x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f,
  }
}

/**
 *
 * @param points
 * @param matrix
 */
export function applyToPoints(points, matrix) {
  return points.map(point => applyToPoint(point, matrix));
}

/**
 *
 * @param matrix
 */
export function toCSS(matrix) {
  return toString(matrix);
}

/**
 *
 * @param matrix
 */
export function toSVG(matrix) {
  return toString(matrix);
}

/**
 *
 * @param matrix
 */
export function toString(matrix) {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`;
}

/**
 *
 * @param string
 */
export function fromString(string) {
  throw new Error('not implemented yet')
}
