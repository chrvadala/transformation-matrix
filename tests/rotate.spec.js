import {applyToPoint} from '../src/applyToPoint';
import {rotate, rotateDEG} from '../src/rotate';
import {assert} from 'chai'

describe('rotate', () => {
  it('should return a rotation matrix', () => {
    const alfa = Math.PI / 2;
    const precision = 0.00001;
    let m = rotate(alfa);
    let point = applyToPoint(m, {x: 50, y: 80});
    assert.approximately(point.x, -80, precision);
    assert.approximately(point.y, 50, precision);
  })
});

describe('rotateDEG', () => {
  it('should return a rotation matrix', () => {
    const alfa = 90;
    const precision = 0.00001;
    let m = rotateDEG(alfa);
    let point = applyToPoint(m, {x: 50, y: 80});
    assert.approximately(point.x, -80, precision);
    assert.approximately(point.y, 50, precision);
  })
});
