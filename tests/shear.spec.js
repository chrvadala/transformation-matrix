import {applyToPoint} from '../src/applyToPoint';
import {shear} from '../src/shear';
import {assert} from 'chai'

describe('shear', () => {
  it('should return a scale matrix', () => {
    let m = shear(10, 20);
    assert.deepEqual(m, {
      a: 1, c: 10, e: 0,
      b: 20, d: 1, f: 0
    });
  })

  it('should transform a point', () => {
    assert.deepEqual(applyToPoint(shear(10, 0), {x: 0, y: 30}), {x: 300, y: 30});
    assert.deepEqual(applyToPoint(shear(0, 10), {x: 30, y: 0}), {x: 30, y: 300});
    assert.deepEqual(applyToPoint(shear(20, 10), {x: 30, y: 15}), {x: 330, y: 315});
  })
});
