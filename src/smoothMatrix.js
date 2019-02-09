/**
 * Rounds all elements of the given matrix using the given precision
 * @param m  {{a: number, b: number, c: number, d: number, e: number, f: number}} a matrix to round
 * @param [precision] a precision to use for Math.round. Defaults to 10000000000 (meaning which rounds to the 10th digit after the comma).
 * @returns {{a: number, b: number, c: number, d: number, e: number, f: number}} the rounded matrix
 */
export function smoothMatrix (m, precision = 10000000000) {
  return {
    a: Math.round(m.a * precision) / precision,
    b: Math.round(m.b * precision) / precision,
    c: Math.round(m.c * precision) / precision,
    d: Math.round(m.d * precision) / precision,
    e: Math.round(m.e * precision) / precision,
    f: Math.round(m.f * precision) / precision
  }
}
