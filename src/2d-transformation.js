const {cos, sin, PI} = Math;
/**
 * @ignore
 * @type {RegExp}
 */
const matrixRegex = /^matrix\( *([0-9]*\.?[0-9]+) *, *([0-9]*\.?[0-9]+) *, *([0-9]*\.?[0-9]+) *, *([0-9]*\.?[0-9]+) *, *([0-9]*\.?[0-9]+) *, *([0-9]*\.?[0-9]+) *\)$/i;

/**
 * Identity matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function identity() {
  return {
    a: 1, c: 0, e: 0,
    b: 0, d: 1, f: 0
  }
}

/**
 * Merge multiple matrices into one
 * @param matrices list of matrices
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
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
 * Calculate a matrix that is the inverse of the provided matrix
 * @param matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function inverse(matrix) {
  //http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D

  let {a, b, c, d, e, f} = matrix;

  let denom = a * d - b * c;

  return {
    a: d / denom,
    b: b / -denom,
    c: c / -denom,
    d: a / denom,
    e: (d * e - c * f) / -denom,
    f: (b * e - a * f) / denom
  }


}

/**
 * Calculate a translate matrix
 * @param tx Translation on axis x
 * @param ty Translation on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function translate(tx, ty) {
  return {
    a: 1, c: 0, e: tx,
    b: 0, d: 1, f: ty
  };
}

/**
 * Calculate a scale matrix
 * @param sx Scaling on axis x
 * @param sy Scaling on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function scale(sx, sy) {
  return {
    a: sx, c: 0, e: 0,
    b: 0, d: sy, f: 0
  };
}

/**
 * Calculate a rotate matrix
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
 * Calculate a rotate matrix with a DEG angle
 * @param angle Angle in degree
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function rotateDEG(angle) {
  return rotate(angle * PI / 180);
}

/**
 * Calculate the application of a matrix to a point
 * @param matrix Affine matrix
 * @param point Point
 * @returns {{x: number, y: number}} Point
 */
export function applyToPoint(matrix, point) {
  return {
    x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f,
  }
}

/**
 * Calculate the application of a matrix to an array of points
 * @param matrix Affine matrix
 * @param points Array of points
 * @returns array Array of points
 */
export function applyToPoints(matrix, points) {
  return points.map(point => applyToPoint(matrix, point));
}

/**
 * @alias toString
 * @param matrix  Affine matrix
 * @returns string
 */
export function toCSS(matrix) {
  return toString(matrix);
}

/**
 * @alias toString
 * @param matrix  Affine matrix
 * @returns string
 */
export function toSVG(matrix) {
  return toString(matrix);
}

/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix
 * @returns string String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
export function toString(matrix) {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`;
}

/**
 * Parse a string matrix
 * @param string String that parse a matrix formatted as matrix(a,b,c,d,e,f)
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function fromString(string) {
  let parsed = string.match(matrixRegex);
  if (parsed === null || parsed.length < 7)throw new Error(`'${string}' is not a matrix`);
  return {
    a: parseFloat(parsed[1]),
    b: parseFloat(parsed[2]),
    c: parseFloat(parsed[3]),
    d: parseFloat(parsed[4]),
    e: parseFloat(parsed[5]),
    f: parseFloat(parsed[6]),
  };
}
