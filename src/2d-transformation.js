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
