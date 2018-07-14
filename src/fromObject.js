/**
 * Extract an affine matrix from an object that contains a,b,c,d,e,f keys
 * Each value could be a float or a string that contains a float
 * @param object
 * @return {{a: *, b: *, c: *, e: *, d: *, f: *}}}
 */
export function fromObject (object) {
  return {
    a: parseFloat(object.a),
    b: parseFloat(object.b),
    c: parseFloat(object.c),
    d: parseFloat(object.d),
    e: parseFloat(object.e),
    f: parseFloat(object.f)
  }
}
