import {fromString,} from '../src/fromString';
import {assert} from 'chai'

describe('fromString', () => {
  it('should parse a matrix from string', () => {
    assert.deepEqual(
      fromString('matrix(1,2,3,4,5,6)'),
      {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, 'integer matrix');
    assert.deepEqual(
      fromString('matrix(1 ,    2 , 3 , 4 , 5 , 6 )'),
      {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, 'integer matrix with spaces');
    assert.deepEqual(
      fromString('MaTrIx(1,2,3,4,5,6)'),
      {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, 'capital letter');
    assert.deepEqual(
      fromString('matrix(1.1,2.2,3.3,4.4,5.5,6.6)'),
      {a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}, 'float matrix');
    assert.deepEqual(
      fromString('matrix(1.1 ,2.2  ,3.3 ,  4.4,  5.5,  6.6   )'),
      {a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}, 'float matrix with spaces');
    assert.deepEqual(
      fromString('matrix(1,2.2  ,3.3,4.4,5,  6   )'),
      {a: 1, b: 2.2, c: 3.3, d: 4.4, e: 5, f: 6}, 'mixed matrix');

    assert.deepEqual(
      fromString('matrix(-1.1,-2.2,-3.3,-4.4,-5.5,-6.6)'),
      {a: -1.1, b: -2.2, c: -3.3, d: -4.4, e: -5.5, f: -6.6}, 'negative float values');
    assert.deepEqual(
      fromString('matrix(-1,-2,-3,-4,-5,-6)'),
      {a: -1, b: -2, c: -3, d: -4, e: -5, f: -6}, 'negative int values');

    assert.deepEqual(
      fromString('matrix(+43e+21, -43e+21, +43e-21, -43e-21, 43e0, 0e0)'),
      {a: +43e+21, b: -43e+21, c: +43e-21, d: -43e-21, e: 43, f: 0}, 'exponential format');


    assert.throws(fromString.bind(this, 'matrix()'), /is not a matrix$/);
    assert.throws(fromString.bind(this, 'matrix(1,2,3,4,5)'), /is not a matrix$/);
    assert.throws(fromString.bind(this, 'matrix(a,b,c,d,e,f)'), /is not a matrix$/);
  })
});
