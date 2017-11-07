import {applyToPoint} from '../src/applyToPoint';
import {translate} from '../src/translate';
import {assert} from 'chai'

describe('translate', () => {
  it('should return a transform matrix', () => {
    let m = translate(40, 60);
    assert.deepEqual(m, {
      a: 1, c: 0, e: 40,
      b: 0, d: 1, f: 60
    });
    assert.deepEqual(applyToPoint(m, {x: 0, y: 0}), {x: 40, y: 60});
    assert.deepEqual(applyToPoint(m, {x: 50, y: 80}), {x: 90, y: 140});
  })

  it('should use ty=0 as default', () => {
    let m = translate(40);
    assert.deepEqual(m, {
      a: 1, c: 0, e: 40,
      b: 0, d: 1, f: 0
    });
    assert.deepEqual(applyToPoint(m, {x: 0, y: 0}), {x: 40, y: 0});
    assert.deepEqual(applyToPoint(m, {x: 50, y: 80}), {x: 90, y: 80});
  })

});
