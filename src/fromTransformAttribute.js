import { parse } from './fromTransformAttribute.autogenerated'

/**
 * Parser for SVG Trasform Attribute http://www.w3.org/TR/SVG/coords.html#TransformAttribute
 * @param transformString {string} Transform string as defined by w3 Consortium
 * @returns {MatrixDescriptor[]} Array of MatrixDescriptor
 *
 * @example
 * > fromTransformAttribute('translate(-10,-10) scale(2,2) translate(10,10)')
 * [
 *  { type: 'translate', tx: -10, ty: -10},
 *  { type: 'scale', sx: 2, sy: 2 },
 *  { type: 'translate', tx: 10, ty: 10}
 * ]
 *
 * > compose(fromDefinition(fromTransformAttribute('translate(-10, -10) scale(10, 10)')))
 * { a: 10, c: 0, e: -10, b: 0, d: 10, f: -10 }
 */
export function fromTransformAttribute (transformString) {
  return parse(transformString)
}
