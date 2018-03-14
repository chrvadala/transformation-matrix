import {applyToPoint} from '../src/applyToPoint';
import {skewDEG} from '../src/skew';
import {assert} from 'chai'
import {transform} from '../src/transform'

const precision = 0.000001;

describe('skew', () => {
  it('should return a skew matrix', () => {
    //example https://msdn.microsoft.com/en-us/library/system.windows.media.matrix.skew(v=vs.110).aspx#Anchor_1
    let m = {a: 5, b: 10, c: 15, d: 20, e: 25, f: 30}
    let skewMatrix = skewDEG(45, 180);

    let skewedMatrix = transform(skewMatrix, m)

    assert.approximately(skewedMatrix.a, 15, precision);
    assert.approximately(skewedMatrix.b, 10, precision);
    assert.approximately(skewedMatrix.c, 35, precision);
    assert.approximately(skewedMatrix.d, 20, precision);
    assert.approximately(skewedMatrix.e, 55, precision);
    assert.approximately(skewedMatrix.f, 30, precision);

  })

  it('should transform a point on X axis', () => {
    const point = {x: 5, y: 4}
    const pointI = applyToPoint(skewDEG(10, 0), point)
    //https://jsfiddle.net/t1yLa3ed/1/
    assert.approximately(pointI.x, 5.70530792283386, precision)
    assert.approximately(pointI.y, 4, precision)
  })

  it('should transform a point on Y axis', () => {
    const point = {x: 5, y: 4}
    const pointI = applyToPoint(skewDEG(0, 10), point)
    //https://jsfiddle.net/t1yLa3ed/2/
    assert.approximately(pointI.x, 5, precision)
    assert.approximately(pointI.y, 4.8816349035423245, precision)
  })
});
