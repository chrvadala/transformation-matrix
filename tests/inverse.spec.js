import {applyToPoints} from '../src/applyToPoint';
import {inverse} from '../src/inverse';
import {assert} from 'chai'

describe('inverse', () => {
  it('should return inverse matrix', () => {
    // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7B1,2,3%7D,%7B4,5,6%7D,%7B0,0,1%7D%7D%5D
    const m = {
      a: 1, c: 2, e: 3,
      b: 4, d: 5, f: 6
    };
    const inv = {
      a: -5 / 3, c: 2 / 3, e: 1,
      b: 4 / 3, d: -1 / 3, f: -2
    };
    assert.deepEqual(inverse(m), inv)
  });
  it('should return original points', () => {
    const m1 = { //trans(40,40) scale(2,2) trans(-40,-40)
      a: 2, c: 0, e: -40,
      b: 0, d: 2, f: -40
    };
    const points = [{x: 30, y: 30}, {x: 50, y: 50}];
    const transPoints = [{x: 20, y: 20}, {x: 60, y: 60}];

    assert.deepEqual(applyToPoints(inverse(m1), transPoints), points);
  })
});
