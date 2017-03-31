import {toString, toCSS, toSVG} from '../src/toString';
import {assert} from 'chai'

describe('toString', () => {
  it('should return a transformation matrix string', () => {
    let m1 = {
      a: 1.1, c: 3.3, e: 5.5,
      b: 2.2, d: 4.4, f: 6.6
    };
    let s = "matrix(1.1,2.2,3.3,4.4,5.5,6.6)";

    assert.equal(toString(m1), s);
    assert.equal(toCSS(m1), s);
    assert.equal(toSVG(m1), s);
  })
});

