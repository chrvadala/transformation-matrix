let isNumeric = n => typeof n === 'number' && !isNaN(n) && isFinite(n)
let isObject = obj => obj != null && (typeof obj === 'object')

/**
 * Check if the object contain an affine matrix
 * @param object
 * @return {boolean}
 */
export function isAffineMatrix (object) {
  return isObject(object) &&
    object.hasOwnProperty('a') &&
    isNumeric(object.a) &&
    object.hasOwnProperty('b') &&
    isNumeric(object.b) &&
    object.hasOwnProperty('c') &&
    isNumeric(object.c) &&
    object.hasOwnProperty('d') &&
    isNumeric(object.d) &&
    object.hasOwnProperty('e') &&
    isNumeric(object.e) &&
    object.hasOwnProperty('f') &&
    isNumeric(object.f)
}
