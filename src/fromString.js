/**
 * @ignore
 * @type {RegExp}
 */
const matrixRegex = /^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i

/**
 * Parse a string formatted as matrix(a,b,c,d,e,f)
 * @param string {string} String with an affine matrix
 * @returns {Matrix} Affine Matrix
 *
 * @example
 * > fromString('matrix(1,2,3,4,5,6)')
 * {a: 1, b: 2, c: 3, d: 4, c: 5, e: 6}
 */
export function fromString (string) {
  const parseFloatOrThrow = number => {
    const n = parseFloat(number)
    if (!isNaN(n)) return n
    throw new Error(`'${string}' is not a matrix`)
  }

  const prefix = string.substring(0, 7).toLowerCase()
  const suffix = string.substring(string.length - 1)
  const body = string.substring(7, string.length - 1)
  const elements = body.split(',')

  if (
    prefix === 'matrix(' &&
    suffix === ')' &&
    elements.length === 6
  ) {
    return {
      a: parseFloatOrThrow(elements[0]),
      b: parseFloatOrThrow(elements[1]),
      c: parseFloatOrThrow(elements[2]),
      d: parseFloatOrThrow(elements[3]),
      e: parseFloatOrThrow(elements[4]),
      f: parseFloatOrThrow(elements[5])
    }
  }

  throw new Error(`'${string}' is not a matrix`)
}

/**
 * Parse a string formatted as matrix(a,b,c,d,e,f)
 * @param string {string} String with an affine matrix
 * @deprecated this is the legacy implementation
 * @returns {Matrix} Affine Matrix
 *
 * @example
 * > fromStringLegacy('matrix(1,2,3,4,5,6)')
 * {a: 1, b: 2, c: 3, d: 4, c: 5, e: 6}
 */
export function fromStringLegacy (string) {
  const parsed = string.match(matrixRegex)
  if (parsed === null || parsed.length < 7) throw new Error(`'${string}' is not a matrix`)
  return {
    a: parseFloat(parsed[1]),
    b: parseFloat(parsed[2]),
    c: parseFloat(parsed[3]),
    d: parseFloat(parsed[4]),
    e: parseFloat(parsed[5]),
    f: parseFloat(parsed[6])
  }
}
