import {applyToPoint} from '../src/applyToPoint';
import {scale} from '../src/scale';
import {assert} from 'chai'

describe('scale', () => {
  it('should return a scale matrix', () => {
    let m = scale(20, 40);
    assert.deepEqual(m, {
      a: 20, c: 0, e: 0,
      b: 0, d: 40, f: 0
    });
    assert.deepEqual(applyToPoint(m, {x: 0, y: 0}), {x: 0, y: 0});
    assert.deepEqual(applyToPoint(m, {x: 50, y: 80}), {x: 1000, y: 3200});
    assert.deepEqual(applyToPoint(scale(Number(20), Number(40)), {x: 50, y: 80}), {x: 1000, y: 3200});
  })

  it('should use sy=sx as default', () => {
    let m = scale(20)
    assert.deepEqual(m, {
      a: 20, c: 0, e: 0,
      b: 0, d: 20, f: 0
    })
    assert.deepEqual(applyToPoint(m, {x: 0, y: 0}), {x: 0, y: 0});
    assert.deepEqual(applyToPoint(m, {x: 50, y: 80}), {x: 1000, y: 1600});
    assert.deepEqual(applyToPoint(scale(20, undefined), {x: 50, y: 80}), {x: 1000, y: 1600});
  })
});
