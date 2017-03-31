import {isAffineMatrix} from '../src/isAffineMatrix';
import {assert} from 'chai'

describe('isAffineMatrix', () => {
  it('should return true', () => {
    let o1 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0};
    let o2 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100};
    let o3 = {y: 200, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100};
    assert.isTrue(isAffineMatrix(o1));
    assert.isTrue(isAffineMatrix(o2));
    assert.isTrue(isAffineMatrix(o3));
  });
  it('should return false', () => {
    let o1 = {a: 0, b: 0, c: 0, d: 0, e: 0};
    let o2 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: Number.NaN};
    let o3 = {a: 0, b: 0, c: 0, d: 0, e: Number.POSITIVE_INFINITY, f: 0};
    let o4 = {a: "0", b: 0, c: 0, d: 0, e: 0, f: 0};
    let o5 = "{a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}";
    let o6 = {};
    let o7 = 42;
    assert.isFalse(isAffineMatrix(o1));
    assert.isFalse(isAffineMatrix(o2));
    assert.isFalse(isAffineMatrix(o3));
    assert.isFalse(isAffineMatrix(o4));
    assert.isFalse(isAffineMatrix(o5));
    assert.isFalse(isAffineMatrix(o6));
    assert.isFalse(isAffineMatrix(o7));
  })
});
