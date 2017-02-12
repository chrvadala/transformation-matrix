import {
  identity,
  transform
} from '../src/2d-transformation';
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

  describe('transform', () => {
    const m1 = {a: 1, b: 0, c: 40, d: 0, e: 1, f: 40};
    const m2 = {a: 2, b: 0, c: 0, d: 0, e: 2, f: 0};
    const m3 = {a: 1, b: 0, c: -40, d: 0, e: 1, f: -40};

    const m12 = {a: 2, b: 0, c: 40, d: 0, e: 2, f: 40};
    const m123 = {a: 2, b: 0, c: -40, d: 0, e: 2, f: -40};

    it('should throw exception', () => {
      assert.throws(() => {
        transform()
      }, 'no matrices provided')
    });

    it('should return m1', () => {
      assert.deepEqual(transform(m1), m1)
    });

    it('should return m1 * m2 = m12 ', () => {
      assert.deepEqual(transform(m1, m2), m12)
    });

    it('should return m1 * m2 * m3 = m123', () => {
      let m1 = {a: 1, b: 0, c: 40, d: 0, e: 1, f: 40};
      let m2 = {a: 2, b: 0, c: 0, d: 0, e: 2, f: 0};
      let m3 = {a: 1, b: 0, c: -40, d: 0, e: 1, f: -40};
      assert.deepEqual(transform(m1, m2, m3), m123)
    });
  })
});

