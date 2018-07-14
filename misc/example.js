const transformationMatrix = require('transformation-matrix')
const {scale, rotate, translate, transform, applyToPoint} = transformationMatrix

let matrix = transform(
  translate(40, 40),
  rotate(Math.PI / 2),
  scale(2, 4)
)

let point = applyToPoint(matrix, {x: 42, y: 42})

console.log(point)
