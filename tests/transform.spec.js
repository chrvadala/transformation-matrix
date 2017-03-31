import {transform} from '../src/transform';
import {assert} from 'chai'

describe('transform', () => {
  const m1 = {
    a: 1, c: 0, e: 40,
    b: 0, d: 1, f: 40
  };
  const m2 = {
    a: 2, c: 0, e: 0,
    b: 0, d: 2, f: 0
  };
  const m3 = {
    a: 1, c: 0, e: -40,
    b: 0, d: 1, f: -40
  };

  const m12 = {
    a: 2, c: 0, e: 40,
    b: 0, d: 2, f: 40
  };
  const m123 = {
    a: 2, c: 0, e: -40,
    b: 0, d: 2, f: -40
  };

  it('should throw exception', () => {
    assert.throws(() => {
      transform()
    }, 'no matrices provided');
    assert.throws(() => {
      transform([])
    }, 'no matrices provided')
  });

  it('should return m1', () => {
    assert.deepEqual(transform(m1), m1);
    assert.deepEqual(transform([m1]), m1);
  });

  it('should return m1 * m2 = m12 ', () => {
    assert.deepEqual(transform(m1, m2), m12);
    assert.deepEqual(transform([m1, m2]), m12);
  });

  it('should return m1 * m2 * m3 = m123', () => {
    let m1 = {
      a: 1, c: 0, e: 40,
      b: 0, d: 1, f: 40
    };
    let m2 = {
      a: 2, c: 0, e: 0,
      b: 0, d: 2, f: 0
    };
    let m3 = {
      a: 1, c: 0, e: -40,
      b: 0, d: 1, f: -40
    };
    assert.deepEqual(transform(m1, m2, m3), m123);
    assert.deepEqual(transform([m1, m2, m3]), m123)
  });
});
