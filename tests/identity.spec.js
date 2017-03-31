import {identity} from '../src/index';
import {assert} from 'chai'

describe('identity', () => {
  it('should return identity matrix', () => {
    let m = identity();
    assert.typeOf(m, 'object');
    assert.deepEqual(m, {
      a: 1, c: 0, e: 0,
      b: 0, d: 1, f: 0
    });
  })
});
