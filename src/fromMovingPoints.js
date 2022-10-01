import { translate } from './translate'
import { applyToPoint } from './applyToPoint'
import { scale, rotate, compose } from './index'

// https://manivannan-ai.medium.com/find-the-angle-between-three-points-from-2d-using-python-348c513e2cd

/**
 * Calculate a transformation matrix from a point that starts from A to A'
 * This approach can be associated to a pointer that moves on a device
 * @param {number} startingPoint1
 * @param {number} endingPoint1
 */
export function fromOneMovingPoint (startingPoint1, endingPoint1) {
  const tx = endingPoint1.x - startingPoint1.x
  const ty = endingPoint1.y - startingPoint1.y

  return translate(tx, ty)
}

/**
 * Calculate a transformation matrix about two points that move from positions A and B to A' to B'
 * This approach can be associated to a two finger gesture on a touch device
 * @param {number} startingPoint1
 * @param {number} startingPoint2
 * @param {number} endingPoint1
 * @param {number} endingPoint2
 */
export function fromTwoMovingPoints (startingPoint1, startingPoint2, endingPoint1, endingPoint2) {
  // finds translation
  const translationMatrix = fromOneMovingPoint(startingPoint1, endingPoint1)

  const pointA = applyToPoint(translationMatrix, startingPoint2) // I have to translate this point
  const center = endingPoint1
  const pointB = endingPoint2

  // finds rotation matrix
  const angle = Math.atan2(pointB.y - center.y, pointB.x - center.x) - Math.atan2(pointA.y - center.y, pointA.x - center.x)
  const rotationMatrix = rotate(angle, center.x, center.y)

  // finds scale matrix
  const d1 = Math.sqrt(Math.pow(pointA.x - center.x, 2) + Math.pow(pointA.y - center.y, 2))
  const d2 = Math.sqrt(Math.pow(pointB.x - center.x, 2) + Math.pow(pointB.y - center.y, 2))
  const scalingLevel = d2 / d1
  const scalingMatrix = scale(scalingLevel, scalingLevel, center.x, center.y)

  return compose([
    translationMatrix,
    scalingMatrix,
    rotationMatrix
  ])
}
