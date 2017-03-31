/**
 * Check if the object contain an affine matrix
 * @param object
 * @return {boolean}
 */
export function isAffineMatrix(object) {
  let isNumeric = n => typeof n === 'number' && !isNaN(n) && isFinite(n);
  return typeof object === 'object'
    && object.hasOwnProperty('a')
    && isNumeric(object.a)
    && object.hasOwnProperty('b')
    && isNumeric(object.b)
    && object.hasOwnProperty('c')
    && isNumeric(object.c)
    && object.hasOwnProperty('d')
    && isNumeric(object.d)
    && object.hasOwnProperty('e')
    && isNumeric(object.e)
    && object.hasOwnProperty('f')
    && isNumeric(object.f);
}
