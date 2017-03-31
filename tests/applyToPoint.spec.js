import {applyToPoint, applyToPoints} from '../src/applyToPoint';
import {identity} from '../src/identity';
import {assert} from 'chai'

describe('applyToPoint', () => {
  const m1 = { //trans(40,40) scale(2,2) trans(-40,-40)
    a: 2, c: 0, e: -40,
    b: 0, d: 2, f: -40
  };
  it('should return a transformed point', () => {
    assert.deepEqual(applyToPoint(identity(), {x: 0, y: 0}), {x: 0, y: 0});
    assert.deepEqual(applyToPoint(m1, {x: 30, y: 30}), {x: 20, y: 20});
    assert.deepEqual(applyToPoint(m1, {x: 50, y: 50}), {x: 60, y: 60});
  })
});

describe('applyToPoints', () => {
  const m1 = { //trans(40,40) scale(2,2) trans(-40,-40)
    a: 2, c: 0, e: -40,
    b: 0, d: 2, f: -40
  };
  const points = [{x: 30, y: 30}, {x: 50, y: 50}];
  const transPoints = [{x: 20, y: 20}, {x: 60, y: 60}];
  it('should return transformed points', () => {
    assert.deepEqual(applyToPoints(identity(), [{x: 0, y: 0}]), [{x: 0, y: 0}]);
    assert.deepEqual(applyToPoints(m1, points), transPoints);
  })
});
