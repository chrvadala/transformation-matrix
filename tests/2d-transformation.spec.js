import {identity} from '../src/2d-transformation';
import chai from 'chai';

const assert = chai.assert;

describe('2d-transformation', () => {
  describe('identity', () => {
    it('should return identity matrix', () => {
      let m = identity();
      assert.typeOf(m, 'object');
      assert.deepEqual(m, {
        a: 1, b: 0, c: 0,
        d: 0, e: 1, f: 0
      });
    })
  });
});
