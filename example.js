const transformationMatrix = require('.')
const {scale, rotate, translate, compose, applyToPoint} = transformationMatrix

let matrix = compose(
  translate(40, 40),
  rotate(Math.PI / 2),
  scale(2, 4)
)

let point = applyToPoint(matrix, {x: 42, y: 42})

console.log(point)
