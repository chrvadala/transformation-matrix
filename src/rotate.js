import {isUndefined} from './utils'
import {translate} from './translate'
import {transform} from './transform'

const {cos, sin, PI} = Math
/**
 * Calculate a rotation matrix
 * @param angle Angle in radians
 * @param [cx] If (cx,cy) are supplied the rotate is about this point
 * @param [cy] If (cx,cy) are supplied the rotate is about this point
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix *
 */
export function rotate (angle, cx, cy) {
  let cosAngle = cos(angle)
  let sinAngle = sin(angle)
  let rotationMatrix = {
    a: cosAngle,
    c: -sinAngle,
    e: 0,
    b: sinAngle,
    d: cosAngle,
    f: 0
  }
  if (isUndefined(cx) || isUndefined(cy)) {
    return rotationMatrix
  }

  return transform([
    translate(cx, cy),
    rotationMatrix,
    translate(-cx, -cy)
  ])
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle Angle in degree
 * @param [cx] If (cx,cy) are supplied the rotate is about this point
 * @param [cy] If (cx,cy) are supplied the rotate is about this point
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
export function rotateDEG (angle, cx = undefined, cy = undefined) {
  return rotate(angle * PI / 180, cx, cy)
}
