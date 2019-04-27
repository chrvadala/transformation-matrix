import { isNumeric, isObject } from './utils'

/**
 * Check if the object contain an affine matrix
 * @param object {Object} Generic Plain Object
 * @return {boolean} True if is an object and contains an affine matrix
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
